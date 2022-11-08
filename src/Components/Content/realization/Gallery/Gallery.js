import React, { useState } from 'react';
import classes from './Gallery.module.css';

import Modal from './Modal/Modal';

function Gallery({ images }) {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handelClick = (image, index) => {
    setCurrentIndex(index);
    setClickedImg(image.image);
  };

  const nextImage = () => {
    const totalLength = images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = images[0].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = images.filter(image => {
      return images.indexOf(image) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const previousImage = () => {
    const totalLength = images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = images[totalLength - 1].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = images.filter(image => {
      return images.indexOf(image) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className={classes.wrapperPhotos}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img
                className={classes.containerPhotos}
                src={image.image}
                alt=""
                onClick={() => handelClick(image, index)}
              />
            </div>
          );
        })}
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            nextImage={nextImage}
            previousImage={previousImage}
            setClickedImg={setClickedImg}
          />
        )}
      </div>
    </div>
  );
}

export default Gallery;
