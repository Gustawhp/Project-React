import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ clickedImg, nextImage, previousImage, setClickedImg }) => {
  return (
    <div className={classes.wrapperModal}>
      <img src={clickedImg} alt="" className={classes.imageModal} />
      <button className={classes.closeImg} onClick={e => setClickedImg(null)}>
        X
      </button>
      <button className={classes.prevousImage} onClick={previousImage}>
        {'<'}
      </button>
      <button className={classes.nextImage} onClick={nextImage}>
        {'>'}
      </button>
    </div>
  );
};

export default Modal;
