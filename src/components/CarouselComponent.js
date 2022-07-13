import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = (props) => {
    return (
        <div className="wrapper carouselSize">
            <Carousel centerMode={false} infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false} showThumbs={false}>
                    {
                        props.tourLocation.slice(0, 15).map((photo) => {
                            return (
                                <div className="tourImages" key={photo.id}>  
                                    <div className="imgContainer">
                                        <img src={photo.img_src} alt={`Photo taken by ${photo.camera.full_name} on Mars by ${photo.rover.name}`} />
                                        <p className="legend">{`Photo taken by ${photo.camera.full_name} on Mars by ${photo.rover.name}`}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Carousel>
        </div>



    );
}

export default CarouselComponent;