const DisplayData = (props) => {
    return (
        <>
        {
                props.tourLocation.map((photo) => {
                    return (
                        <div className="tourImages" key={photo.id}>
                                <div className="imgContainer">
                                <img src={photo.img_src} alt={`Photo taken by ${photo.camera.full_name} on Mars by ${photo.rover.name}`}/>
                                </div>
                        </div>
                    );
                })
            }
        </>
    )
}

export default DisplayData;