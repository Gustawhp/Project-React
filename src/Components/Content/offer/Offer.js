import React from 'react';
import classes from './Offer.module.css';
import LeftSideOffer from './Offer/LeftSideOffer/LeftSideOffer';
import MiddleSideOffer from './Offer/MiddleSideOffer/MiddleSideOffer';
import RightSideOffer from './Offer/RightSideOffer/RightSideOffer';

const OfferPage = () => {
  return (
    <div className={classes.sectionOffer}>
      <LeftSideOffer />
      <MiddleSideOffer />
      <RightSideOffer />
    </div>
  );
};

export default OfferPage;
