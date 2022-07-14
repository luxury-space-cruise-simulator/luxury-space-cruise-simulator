const DisplayData = (props) => {



    if (props.buttonClick && props.tourDropdown === "") {

        return (
            <div className="tourDetails wrapper">
                <p>Please select an option from the dropdown before submitting the form.</p>
            </div>
        )
    } else if (props.buttonClick && props.anyDatesAvailable) {
        return (
            <div className="wrapper safeDates">
                <h3>See Asteroid Free Dates Below ☄️</h3>
                
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
            </div>
            )
    } else if (props.buttonClick && props.anyDatesAvailable === false) {
        return (
            <div className="tourDetails wrapper">
                <p>Sorry no available dates in the upcoming week. Please try again next week!</p>
            </div>
        )
    }



    
}

export default DisplayData;
