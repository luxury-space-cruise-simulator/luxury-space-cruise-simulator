import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = (props) => {
    return (
        <div className="wrapper">
            <div className="carouselSize">
            <Carousel centerMode={false} infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false} showThumbs={false}>
                    {
                        props.tourLocation.slice(0, 15).map((photo) => {
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
        </div>



    );
}

export default CarouselComponent;