import React from 'react';
import classes from './LargeFormat.module.css';
import tiles from '../../../../../Assets/images/image5.jpg';

const LargeFormat = () => {
  return (
    <div className={classes.tiles_wrapper}>
      <img src={tiles} className={classes.tiles} alt="" />
      <div className={classes.tiles_text}>
        <h1>Płyty wielkoformatowe</h1>
        <p>
          Jedna z pierwszych firm w regionie specjalizująca się w montażu płyt
          wielkoformatowych w wymiarach nawet do [120 cm x 240 cm]
        </p>
      </div>
    </div>
  );
};

export default LargeFormat;
