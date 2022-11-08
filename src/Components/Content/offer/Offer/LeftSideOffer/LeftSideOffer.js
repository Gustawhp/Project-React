import React from 'react';
import classes from './LeftSideOffer.module.css';

import Image1 from '../../../../../Assets/images/image1.jpg';
import Image2 from '../../../../../Assets/images/image2.jpg';

const LeftSideOffer = () => {
  return (
    <div className={classes.leftContainer}>
      <img src={Image1} className={classes.image} alt="" />
      <img src={Image2} className={classes.image} alt="" />
    </div>
  );
};

export default LeftSideOffer;
