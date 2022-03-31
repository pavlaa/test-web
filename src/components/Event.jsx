import React from 'react';
import style from "./Event.module.css";

const Event = () => {
  return (
    <div className={style.event__card}>
      <div className={style.event__data}>
        18.02.03
      </div>
      <div className={style.event__action}>
        Need to do some exercise! Need to do some exercise!
      </div>
    </div>
  );
};

export default Event;