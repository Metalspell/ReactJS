import './Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"

let Carousel = require('react-responsive-carousel').Carousel;

const CarouselSlider = () => {

  return (
    <>
      <section className='carouselBackground'>
        <Carousel showArrows={true} >
          <div className='carouselItems'>
            <img src={require("./images/0a5becaf7584d6510afbdd76ec52b8dc.jpeg")} alt='pic' />
          </div>
          <div className='carouselItems'>
            <img src={require("./images/121e4f10751dd5ea756a21074a67b288.jpeg")} alt='pic' />
          </div>
          <div className='carouselItems'>
            <img src={require("./images/608a2433886bafce8070faa575a88933.jpeg")} alt='pic' />
          </div>
          <div className='carouselItems'>
            <img src={require("./images/1795ee43288a5a782d96186475d3a2ed.jpeg")} alt='pic' />
          </div>
          <div className='carouselItems'>
            <img src={require("./images/b4f13ea3a7365b47860991dcdcc94640.jpeg")} alt='pic' />
          </div>
          <div className='carouselItems'>
            <img src={require("./images/f29f068a8a88093e2565b9561a9f6239.jpeg")} alt='pic' />
          </div>
          <div className='carouselItems'>
            <img src={require("./images/fe996e477e702e5673ff599f145d836c.jpeg")} alt='pic' />
          </div>
        </Carousel>
      </section>
      <article>
        <h3>Balcony and privacy 7 story building</h3>
      </article>
    </>
  );
}

export default CarouselSlider;