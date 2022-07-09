import axios from "axios";
import {useState, useEffect} from "react";

const TourSearch = (props) => {

    const [tourDropdown, setTourDropdown] = useState('');
    const [tourSubmit, setTourSubmit] = useState('');
    // const [count, setCount] = useState(0);
    

    const handleChange = (e) => {
        setTourDropdown(e.target.value);
    }

    const handleSubmit = function(e, chosenTour) {
        e.preventDefault();
        setTourSubmit(chosenTour);
    }

    // const alerted = () => {
    //     if (count >= 3){
    //         alert("no more tours for you!");
    //     }
    // }

    // const increaseCount = () => {
    //     setCount(count + 1);
    //     alerted();
    // } 


    useEffect( () => {

        const baseURL = `https://api.nasa.gov/mars-photos/api/v1/rovers`
        const key = `IX9fyGha33cKkGYIMNautItzjvO27KBdETb1U6r1`

        if (tourDropdown === "curiosity") {
            axios({
                baseURL: `${baseURL}/curiosity/photos?api_key=${key}&sol=200&camera=mast`,
              }).then((curiosityImageData) => {
                  console.log(curiosityImageData.data.photos);
                  props.setTourLocation(curiosityImageData.data.photos)
              });
        } if (tourDropdown === "spirit") {
            axios({
                baseURL: `${baseURL}/spirit/photos?api_key=${key}&sol=300&camera=pancam`,
              }).then((spiritImageData) => {
                  console.log(spiritImageData.data);
                  props.setTourLocation(spiritImageData.data.photos)
              });
        } if (tourDropdown === "perseverance") {
            axios({
                baseURL: `${baseURL}/perseverance/photos?api_key=${key}&sol=100&camera=mcz_left`,
              }).then((perseveranceImageData) => {
                  console.log(perseveranceImageData.data);
                  props.setTourLocation(perseveranceImageData.data.photos)
              });
        } if (tourDropdown === "opportunity") {
            axios({
                baseURL: `${baseURL}/opportunity/photos?api_key=${key}&sol=744&camera=pancam`,
              }).then((opportunityImageData) => {
                  console.log(opportunityImageData.data);
                  props.setTourLocation(opportunityImageData.data.photos)
              });
        }

    }, [tourSubmit]);

    return (
        <>
        <form onSubmit={(event, chosenTour) => {
                    handleSubmit(event, tourDropdown)}}>
                    <select onChange={handleChange} name="tour" id="chosenTour" value={tourDropdown}>
                        <option value="" default disabled>Please choose a tour location</option>
                        <option value="curiosity">Gale Crater</option>
                        <option value="spirit">Gusev Crater</option>
                        <option value="perseverance">Jezero Crater</option>
                        <option value="opportunity">Meridian Planum</option>
                    </select>
                    {/* <button onClick={increaseCount} className="button">Take Me on a Virtual Tour</button> */}
                    <button className="button">Take Me on a Virtual Tour</button>
                </form>
        </>
    )
}

export default TourSearch;


