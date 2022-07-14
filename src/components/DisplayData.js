// Displays available dates based on the user's time of submission including messages to display in case of errors

const DisplayData = (props) => {

    if (props.buttonClick && props.tourDropdown === "") {

        return (
            <>
                <p className="wrapper">Please select an option from the dropdown before submitting the form.</p>
            </>
        )
    } else if (props.buttonClick && props.anyDatesAvailable) {
        return (
            <div className="wrapper safeDates">
                <h3>Book an upcoming available date below!</h3>
                
                <ul className="datesContainer">
                    {props.safeDates.map((date) => {
                        return (
                            <div className="datesListed" key={date} >
                                <li>
                                    {date}
                                </li>
                            </div>
                        )
                    })}
                </ul>
                <p>At YBS Galactic Tours, your safety is our #1 priority. We arrange all launch dates by monitoring up to date calculations of orbital parameters, close approaches, and impact risks from the <a href="https://cneos.jpl.nasa.gov/about/cneos.html" target="_blank" rel="noopener noreferrer">Center for NEO Studies.</a></p>
            </div>
            )
    } else if (props.buttonClick && props.anyDatesAvailable === false) {
        return (
            <>
                <p className="wrapper">Sorry no available dates in the upcoming week. Please try again next week!</p>
            </>
        )
    }



    
}

export default DisplayData;
