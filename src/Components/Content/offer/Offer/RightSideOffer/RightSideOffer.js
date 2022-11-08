import React from 'react';
import classes from './RightSideOffer.module.css';

import Image3 from '../../../../../Assets/images/image3.jpg';
import Image4 from '../../../../../Assets/images/image4.jpg';

const RightSideOffer = () => {
  return (
    <div className={classes.rightContainer}>
      <img src={Image3} className={classes.image} alt="" />
      <img src={Image4} className={classes.image} alt="" />
    </div>
  );
};

export default RightSideOffer;
