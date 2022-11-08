import About from './Home/About/About';
import LargeFormat from './Home/Large format/LargeFormat';
import Decorative from './Home/Decorative/Decorative';
import classes from './Home.module.css';

const HomePage = () => {
  return (
    <div className={classes.sectionHome}>
      <About />
      <LargeFormat />
      <Decorative />
    </div>
  );
};

export default HomePage;
