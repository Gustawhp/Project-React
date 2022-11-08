import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Components/Content/home/Home';
import OfferPage from './Components/Content/offer/Offer';
import RealizationPage from './Components/Content/realization/Realization';
import ContactPage from './Components/Content/contact/Contact';
import Header from './Components/Content/header/Header';

import classes from './App.css';

function App() {
  return (
    <div classes={classes.body}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Offer" element={<OfferPage />} />
          <Route path="/Realization" element={<RealizationPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
