const DisplayData = (props) => {

    if (props.buttonClick) {

        console.log(props)
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