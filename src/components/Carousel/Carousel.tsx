import { useState } from 'react';
import  iconPrev  from "../../assets/svg/icon-prev.svg";
import  iconNext  from "../../assets/svg/icon-next.svg";
import { Props } from "../../interfaces/carouselItemProps.interface";

const Carousel = ({ items }: Props) => {
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((currentItem + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentItem((currentItem + items.length - 1) % items.length);
  };

  return (
    <main className='d-flex align-items-center justify-content-center' key={currentItem}>
      <div className='position-relative d-flex flex-column justify-content-center gap-5'>
      <p>{items[currentItem].text}</p>
      <section className='d-flex gap-3'>
        <strong>{items[currentItem].title}</strong>
        <span>{items[currentItem].subtitle}</span>
      </section>
      </div>
      <div className='position-relative d-flex align-items-center justify-content-center flex-column'>
        <img src={items[currentItem].image} alt={items[currentItem].title} />
        <div className='position-absolute btn shadow'>
          <button onClick={prevItem}>
            <img src={iconPrev} alt="prev" />
          </button>
          <button onClick={nextItem}>
          <img src={iconNext} alt="next" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Carousel;
