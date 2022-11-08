import classes from './About.module.css';
import Carousel from './Slider/Carousel';
import { carouselData } from './Slider/CarouselData';

const About = () => {
  return (
    <div className={classes.containerAbout}>
      <div className={classes.company}>
        <p>
          Company to znana na lokalnym rynku firma z kilkudziesięcioletnim
          stażem (rok zał. 1995). Od samego początku swojej działalności zwraca
          szczególna uwagęna jakość usług, które gwarantują utrzymanie stabilnej
          pozycji na rynku. Poprzez fachowość, solidność, rzetelność
          wykonywanych prac zdobyliśmyzaufanie i uznanie naszych klientów o czym
          świadczą liczne referencje. Wysokiemu standardowi naszych usług
          towarzysza atrakcyjne ceny. Odpowiadając na potrzeby i oczekiwania
          klientów wzbogacamy na bieżąco naszą ofertę usług o nowości budowlane.
        </p>
      </div>
      <Carousel images={carouselData} />
    </div>
  );
};

export default About;
