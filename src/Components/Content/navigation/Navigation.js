import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <button
        className={classes.hamburger}
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i class="fa-solid fa-times hamb"></i>
        ) : (
          <i class="fa-solid fa-bars habm"></i>
        )}
      </button>
      <nav
        className={`${
          isMobile ? classes.navigationMobile : classes.navigation
        }`}
        onClick={() => setIsMobile}
      >
        <Link to="/">Home</Link>
        <Link to="/Offer">Oferta</Link>
        <Link to="/Realization">Realizacje</Link>
        <Link to="/Contact">Kontakt</Link>
      </nav>
    </div>
  );
};

export default Navigation;
