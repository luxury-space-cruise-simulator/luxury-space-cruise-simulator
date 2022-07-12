const DisplayData = (props) => {

    if (props.buttonClick) {

        // console.log(props)
        return (
            <div className="wrapper">
            <div className="safeDates">
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
        </div>
        )
    }
}

export default DisplayData;