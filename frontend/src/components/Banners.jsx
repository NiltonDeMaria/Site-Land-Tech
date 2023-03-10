import Carousel from 'react-bootstrap/Carousel';
import Banner01 from './img/banner01.png';
import Banner02 from './img/banner02.png';
import Banner03 from './img/banner03.png';

function Banners() {
    return (
        <Carousel  className='conteudo-margin'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner03}
                        alt="Slide incrível"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner01}
                        alt="Outro slide incrível"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner02}
                        alt="Último slide"
                    />
                    
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners