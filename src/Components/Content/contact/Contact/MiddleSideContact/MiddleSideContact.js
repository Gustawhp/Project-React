import React from 'react';

import classes from './MiddleSideContact.module.css';

const MiddleSideContact = () => {
  return (
    <div className={classes.middleContainer}>
      <p>Name Of Company</p>
      <p>Street</p>
      <p>City</p>
      <p>NIP: 123-456-78-90</p>
      <p>E-mail</p>
      <p>Tel. +48 123-345-678</p>
    </div>
  );
};

export default MiddleSideContact;
