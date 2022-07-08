const DisplayData = (props) => {

    // console.log(props);

    if (props.buttonClick) {


        return (
            <>
                {
                    props.tourLocation.map((photo) => {
                        return (
                            <div className="tourImages" key={photo.id}>

                                <div className="imgContainer">
                                    <img src={photo.img_src} alt={`Photo taken by ${photo.camera.full_name} on Mars by ${photo.rover.name}`} />
                                </div>
                            </div>
                        );
                    })
                }
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