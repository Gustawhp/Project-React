import React from 'react';
import classes from './LeftSideContact.module.css';

import Image7 from '../../../../../Assets/images/image7.jpg';
import Image8 from '../../../../../Assets/images/image8.jpg';

const LeftSideContact = () => {
  return (
    <div className={classes.leftContainer}>
      <img src={Image7} className={classes.image} alt="" />
      <img src={Image8} className={classes.image} alt="" />
    </div>
  );
};

export default LeftSideContact;
