const DisplayData = (props) => {

    if (props.buttonClick) {


        return (
            <>
                <ul>
                    {props.safeDates.map((date) => {
                        return (

                            <li key={date} >
                                {date}
                            </li>

                        )
                    })}
                </ul>
            </>
        )
    }
}

export default DisplayData;