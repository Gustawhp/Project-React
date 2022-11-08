import React from 'react';
import classes from './Contact.module.css';

import LeftSideContact from './Contact/LeftSideContact/LeftSideContact';
import MiddleSideContact from './Contact/MiddleSideContact/MiddleSideContact';
import RightSideContact from './Contact/RightSideContact/RightSideContact';

const ContactPage = () => {
  return (
    <div className={classes.sectionContact}>
      <LeftSideContact />
      <MiddleSideContact />
      <RightSideContact />
    </div>
  );
};

export default ContactPage;
