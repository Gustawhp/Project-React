import React from 'react';
import classes from './Decorative.module.css';

import decor from '../../../../../Assets/images/image6.jpg';

const Decorative = () => {
  return (
    <div className={classes.decorative_wrapper}>
      <div className={classes.decorative_text}>
        <h1>Tynki dekoracyjne</h1>
        <p>
          Od kilkunastu lat oferujemy Państwu profesjonalne wykonywanie tynków
          dekoracyjnych.
        </p>
      </div>
      <img src={decor} className={classes.decorative} alt="" />
    </div>
  );
};

export default Decorative;
