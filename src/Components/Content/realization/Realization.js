import React from 'react';
import classes from './Realization.module.css';

import Gallery from './Gallery/Gallery';
import { galleryData } from './Gallery/GalleryData';

const Realization = () => {
  return (
    <div className={classes.sectionRealization}>
      <Gallery images={galleryData} />
    </div>
  );
};

export default Realization;
