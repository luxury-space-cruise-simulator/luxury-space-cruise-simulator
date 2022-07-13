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
            <>
                <p className="wrapper">Sorry no available dates in the upcoming week. Please try again next week!</p>
            </>
        )
    }



    
}

export default DisplayData;
