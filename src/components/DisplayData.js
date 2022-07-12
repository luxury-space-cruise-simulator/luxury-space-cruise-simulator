const DisplayData = (props) => {



    if (props.buttonClick && props.tourDropdown === "") {

        return (
            <>
                <p>Please select an option from the dropdown before submitting the form.</p>
            </>
        )
    } else if (props.buttonClick && props.anyDatesAvailable) {
        return (
            <div className="wrapper safeDates">
                <h3>Book an upcoming available date:</h3>
                <ul className="datesContainer">
                    {props.safeDates.map((date) => {
                        return (
                            <div className="datesListed">
                                <li key={date} >
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
                <p>Sorry no available dates in the upcoming week. Please try again next week!</p>
            </>
        )
    }



    
}

export default DisplayData;
