import { useEffect } from 'react';
import { useState } from 'react';
import classes from './Carousel.module.css';

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  let timeOut = null;

  useEffect(() => {
    timeOut = setTimeout(() => {
      nextSlide();
    }, 2500);
  });

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className={classes.carousel}>
      <div className={classes.carousel_wrapper}>
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`${classes.carouselCard} ${
                index === current ? classes.carouselCardActive : ''
              }`}
            >
              <img src={image.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
