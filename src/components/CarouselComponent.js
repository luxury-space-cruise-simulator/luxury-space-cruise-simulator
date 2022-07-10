import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = (props) => {

    return (
        <div className="carouselSize">
        <Carousel centerMode={true} infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false}>
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
            </Carousel>
            </div>
    );
}

export default CarouselComponent;