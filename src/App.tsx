import React from 'react';
import './App.scss';
import jhon from './assets/img/image-john.jpg';
import tanya from './assets/img/image-tanya.jpg';
import curve from './assets/svg/pattern-curve.svg';
import { Carousel } from './components/';

function App() {
  const items = [
    {
      title: 'Tanya Sinclair',
      subtitle: 'UX Engineer',
      image: tanya,
      text: '“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    },
    {
      title: 'John Tarkpor',
      subtitle: 'Junior Front-end Developer',
      image: jhon,
      text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
    }
  ];
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <Carousel items={items} />

      <footer className='position-absolute z-n1 bottom-0 start-0'>
        <img className='img-fluid' src={curve} alt="curve" />
      </footer>
    </div>
  );
}

export default App;
