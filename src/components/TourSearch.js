import axios from "axios";
import { useState, useEffect } from "react";
import LoadingSpinner from './LoadingSpinner';

const TourSearch = (props) => {



    const [tourSubmit, setTourSubmit] = useState('');
    const [count, setCount] = useState(3);
    const [currentDate, setCurrentDate] = useState('');
    

    useEffect( () => {
        // reset the counter if it's been 24 hours
        setInterval(function () {
            setCount(3)
        }, 86400000);
    });

    const handleChange = (e) => {
        props.setTourDropdown(e.target.value);
        props.setButtonClick(false);
    }

    const handleSubmit = function (e, chosenTour) {
        e.preventDefault();
        setTourSubmit(chosenTour);

        // setting the date (object + variable) the user clicked the tour button to set the search param 
        let userDate = new Date();
        const todaysDate = `${userDate.getFullYear()}-${userDate.getMonth() + 1}-${userDate.getDate()}`;
        setCurrentDate(todaysDate);
        props.setButtonClick(true);

        decreaseCount();
    }


    // calling asteroid API
    useEffect(() => {
        if(props.buttonClick) {
        // put a truthy value on a loading function
        props.setIsLoading(true);
        
        axios({
            url: "https://api.nasa.gov/neo/rest/v1/feed?",
            params: {
                start_date: currentDate,
                end_date: '',
                api_key: "hKcY4WWX2aEd0l04NWidPJgar7mrh32uIHhf9wgl",
            }
        })
            .then((res) => {
                // console.log(res.data.near_earth_objects)
                const datesObject = res.data.near_earth_objects
                for (const [asteroidDate, dateEntries] of Object.entries(datesObject)) {

                    let dangerous = false;
                    for (const asteroid of dateEntries) {

                        if (asteroid.is_potentially_hazardous_asteroid) {
                            // console.log("HI MOM")
                            dangerous = true;
                            break
                        }
                    }

                    if (dangerous) {
                        delete datesObject[asteroidDate]
                    }

                }
                // console.log(datesObject);

                const isEmpty = Object.keys(datesObject).length === 0;
                // console.log(isEmpty);

                if (isEmpty) {
                    throw new Error('No available dates')
                }

                const datesArray = Object.keys(datesObject);
                datesArray.sort();

                props.setDates(datesArray);
                props.setIsLoading(false);
            })
            .catch(err => {
                props.setAnyDatesAvailable(false);
                props.setIsLoading(false);
            })
        }
    }, [currentDate]);


    //calling Mars rover API 
    useEffect(() => {

        const baseURL = `https://api.nasa.gov/mars-photos/api/v1/rovers`
        const key = `IX9fyGha33cKkGYIMNautItzjvO27KBdETb1U6r1` 

        if (props.tourDropdown === "curiosity") {
            axios({
                baseURL: `${baseURL}/curiosity/photos?api_key=${key}&sol=3397&camera=mast`,
            }).then((curiosityImageData) => {
                  props.setTourLocation(curiosityImageData.data.photos)
              })
              .catch(err => {
                alert("Looks like the API database was struck by an asteroid ☄️, try searching again later");
            });
        } if (props.tourDropdown === "spirit") {
            axios({
                baseURL: `${baseURL}/spirit/photos?api_key=${key}&sol=1277&camera=navcam`,
            }).then((spiritImageData) => {
                  props.setTourLocation(spiritImageData.data.photos)
              })
              .catch(err => {
                alert("Looks like the API database was struck by an asteroid ☄️, try searching again later");
            });
        } if (props.tourDropdown === "perseverance") {
            axios({
                baseURL: `${baseURL}/perseverance/photos?api_key=${key}&sol=489&camera=mcz_right`,
            }).then((perseveranceImageData) => {
                  props.setTourLocation(perseveranceImageData.data.photos)
              })
              .catch(err => {
                alert("Looks like the API database was struck by an asteroid ☄️, try searching again later");
            });
        } if (props.tourDropdown === "opportunity") {
            axios({
                baseURL: `${baseURL}/opportunity/photos?api_key=${key}&sol=4557&camera=navcam`,
            }).then((opportunityImageData) => {
                  console.log(opportunityImageData.data);
                props.setTourLocation(opportunityImageData.data.photos)
            })
            .catch(err => {
                alert("Looks like the API database was struck by an asteroid ☄️, try searching again later");
            });
        }

    }, [tourSubmit]);


    const decreaseCount = () => {
        setCount(count - 1);
    }

    return (
        <div className="blackTourBG">
        <section id="search" className="tourSearch">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>

            <div className="searchFlex">
            <h3>Where would you like to explore?</h3>
            <form  className ="formFlex" onSubmit={(event, chosenTour) => {
                handleSubmit(event, props.tourDropdown)
            }}>
                <select onChange={handleChange} name="tour" id="chosenTour" value={props.tourDropdown}>
                    <option value="" default disabled>Please choose a tour location</option>
                    <option value="curiosity">Gale Crater</option>
                    <option value="spirit">Gusev Crater</option>
                    <option value="perseverance">Jezero Crater</option>
                    <option value="opportunity">Meridian Planum</option>
                </select>
                
                {
                    (count > 0)
                        ?
                        <button className="button">Take Me on a Virtual Tour</button>
                        :
                        <button disabled = {true}className="button">You Have Run Out of Tours for Today</button>
                }
            </form>
            
           
            </div>
                    
                
                <div className="marsImage">
                <a href="https://www.freepnglogos.com/pics/mars" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png" width="200" alt="mars transparent png stickpng" /></a>

            </div>
            <div className="wrapper">
                <div className="countP">
                    <p>
                        {
                            (count > 0)
                            ?
                            `You have ${count} virtual tours left
                            for today`
                            :
                            `You have no tours left for today, please come back tomorrow`
                        }
                       
                    </p>

                </div>
                </div>

        </section>
        </div>
       
        
    )
}

export default TourSearch;


