import axios from "axios";
import { useState, useEffect } from "react";

// Main submission form and resulting fetches to the API

const TourSearch = (props) => {

    const [tourSubmit, setTourSubmit] = useState('');
    const [count, setCount] = useState(3);
    const [currentDate, setCurrentDate] = useState('');
    
    // reset the counter for amount of trips if it's been 24 hours
    useEffect( () => {
        setInterval(function () {
            setCount(3)
        }, 86400000);
    });

    // when the tour dropdown changes, React is aware of the value and the button to submit hasn't 'happened' yet
    const handleChange = (e) => {
        props.setTourDropdown(e.target.value);
        props.setButtonClick(false);
    }

    // when the user has submitted theur choice from the dropdown, set the date to today to use for the asteroid API and store in state that the submit button has been clicked
    const handleSubmit = function (e, chosenTour) {
        e.preventDefault();
        setTourSubmit(chosenTour);
        window.scrollBy({
            top: 2000,
            behavior: 'smooth'
          });

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
                const datesObject = res.data.near_earth_objects
                for (const [asteroidDate, dateEntries] of Object.entries(datesObject)) {

                    // checking if the asteroid dates are dangerous or not and removing the date if they are dangerous
                    let dangerous = false;
                    for (const asteroid of dateEntries) {

                        if (asteroid.is_potentially_hazardous_asteroid) {
                            dangerous = true;
                            break
                        }
                    }

                    if (dangerous) {
                        delete datesObject[asteroidDate]
                    }

                }

                // if ALL the upcoming dates are dangerous, throw an error to display for the user that there's no available dates
                const isEmpty = Object.keys(datesObject).length === 0;

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

        // Note: VS Code suggests to add props to the dependency array - this is not a good idea as it will cause the app to malfunction
    }, [currentDate]);


    //calling Mars rover API for images to display, matching them to the value in the dropdown
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
                props.setTourLocation(opportunityImageData.data.photos)
            })
            .catch(err => {
                alert("Looks like the photo database was struck by an asteroid ☄️, try searching again later");
            });
        }
        // Note: VS Code suggests to add props to the dependency array - this is not a good idea as it will cause the app to malfunction
    }, [tourSubmit]);


    // function to decrease the number of tours allowed 
    const decreaseCount = () => {
        setCount(count - 1);
    }

    // main submission form with a description for the user of how to use it and what to expect
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

            <div className="searchFlex wrapper">
            <h3>Where would you like to explore?</h3>
            <p>Search available destinations using the dropdown to be shown location amenities, an image gallery, and dates safe from asteroids in the upcoming week.</p>
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


