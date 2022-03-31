import React from 'react';
import style from './HomePage.module.css';


const HomePage = () => {
  return (
    <div className={style.home}>
      <div className={`${style.home__container} _container`}>
        <span>Welcome</span> to the website!
      </div>
    </div>
  );
};

export default HomePage;