import React from 'react';
import style from './CustomButton.module.css';

const CustomButton = ({children, size, ...props}) => {
  return (
    <button style={{fontSize: size}} className={style.button} {...props} >
      {children}
    </button>
  );
};

export default CustomButton;