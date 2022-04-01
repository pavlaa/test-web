import React from 'react';
import style from "./Event.module.css";

const Event = ({date, text}) => {
  return (
    <div className={style.event__card}>
      <div className={style.event__data}>
        {date}
      </div>
      <div className={style.event__action}>
        {text}
      </div>
    </div>
  );
};

export default Event;