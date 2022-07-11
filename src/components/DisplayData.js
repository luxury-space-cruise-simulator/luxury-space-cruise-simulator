const DisplayData = (props) => {



    if (props.buttonClick && props.tourDropdown === "") {

        return (
            <>
                <p>Please select an option from the dropdown before submitting the form.</p>
            </>
        )
    } else if (props.buttonClick && props.anyDatesAvailable) {
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
            </>)
    } else if (props.buttonClick && props.anyDatesAvailable === false) {
        return (
            <>
                <p>Sorry no available dates in the upcoming week. Please try again next week!</p>
            </>
        )
    }



    //  if (props.buttonClick && props.anyDatesAvailable) {

    //     return (
    //         <>
    //             <ul>
    //                 {props.safeDates.map((date) => {
    //                     return (

    //                         <li key={date} >
    //                             {date}
    //                         </li>

    //                     )
    //                 })}
    //             </ul>
    //         </>)
    // } else if (props.buttonClick && props.anyDatesAvailable === false){
    //     return (
    //         <>
    //             <p>Sorry no available dates in the upcoming week. Please try again next week!</p>
    //         </>
    //     )
    // } else if(props.buttonClick && props.tourDropdown === undefined){
    //     return(
    //         <>
    //             <p>Please select an option from the dropdown before submitting the form.</p>
    //         </>
    //     )
        
    // }
}

export default DisplayData;
