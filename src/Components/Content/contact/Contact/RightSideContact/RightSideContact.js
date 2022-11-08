import React from 'react';
import classes from './RightSideContact.module.css';

import Image9 from '../../../../../Assets/images/image9.jpg';
import Image10 from '../../../../../Assets/images/image10.jpg';

const RightSideContact = () => {
  return (
    <div className={classes.rightContainer}>
      <img src={Image9} className={classes.image} alt="" />
      <img src={Image10} className={classes.image} alt="" />
    </div>
  );
};

export default RightSideContact;
