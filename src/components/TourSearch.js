import axios from "axios";
import { useState, useEffect } from "react";

const TourSearch = (props) => {

   
    const [tourSubmit, setTourSubmit] = useState('');
    const [count, setCount] = useState(3);


    const [currentDate, setCurrentDate] = useState('');

    const handleChange = (e) => {
        props.setTourDropdown(e.target.value);
    }

    const handleSubmit = function (e, chosenTour) {
        e.preventDefault();
        setTourSubmit(chosenTour);

        // setting the date (object + variable) the user clicked the tour button to set the search param 
        let userDate = new Date();
        const todaysDate = `${userDate.getFullYear()}-${userDate.getMonth() + 1}-${userDate.getDate()}`;
        setCurrentDate(todaysDate);
        props.setButtonClick(true);
    }


    // calling asteroid API
    useEffect(() => {
        axios({
            url: "https://api.nasa.gov/neo/rest/v1/feed?",
            params: {
                start_date: currentDate,
                end_date: '',
                api_key: "DEMO_KEY",
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
            })
            .catch(err => {
                console.log('Oh no!! Insert content to page here');
            })
    }, [currentDate]);


    useEffect(() => {

        const baseURL = `https://api.nasa.gov/mars-photos/api/v1/rovers`
        const key = `IX9fyGha33cKkGYIMNautItzjvO27KBdETb1U6r1`

        if (props.tourDropdown === "curiosity") {
            axios({
                baseURL: `${baseURL}/curiosity/photos?api_key=${key}&sol=3397&camera=mast`,
            }).then((curiosityImageData) => {
                //   console.log(curiosityImageData.data.photos);
                  props.setTourLocation(curiosityImageData.data.photos)
              });
        } if (props.tourDropdown === "spirit") {
            axios({
                baseURL: `${baseURL}/spirit/photos?api_key=${key}&sol=1277&camera=navcam`,
                // pancam *alternate camera*
                // sol1227
            }).then((spiritImageData) => {
                //   console.log(spiritImageData.data);
                  props.setTourLocation(spiritImageData.data.photos)
              });
        } if (props.tourDropdown === "perseverance") {
            axios({
                baseURL: `${baseURL}/perseverance/photos?api_key=${key}&sol=489&camera=mcz_right`,
            }).then((perseveranceImageData) => {
                //   console.log(perseveranceImageData.data);
                  props.setTourLocation(perseveranceImageData.data.photos)
              });
        } if (props.tourDropdown === "opportunity") {
            axios({
                baseURL: `${baseURL}/opportunity/photos?api_key=${key}&sol=4557&camera=navcam`,
            }).then((opportunityImageData) => {
                  console.log(opportunityImageData.data);
                props.setTourLocation(opportunityImageData.data.photos)
            });
        }

    }, [tourSubmit]);


    const decreaseCount = () => {
        setCount(count - 1);
    }

    return (
        <section id="search" className="tourSearch">
            <a href="https://www.freepnglogos.com/pics/mars" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png" width="200" alt="mars image red planet from space" /></a>
            
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
                        (count >= 1)
                            ?
                            <button onClick={decreaseCount} className="button">Take Me on a Virtual Tour</button>
                            :
                            <button onClick={decreaseCount} disabled = {true}className="button">No more tours for you! 😭</button>

                    }
                </form>
            </div>

                <div className="wrapper">
                    <div className="countP">
                        <p>
                            {`You have ${count} virtual tours left
                        for today!`}
                        </p>
                    </div>
                </div>

        </section>
        
    )
}

export default TourSearch;


