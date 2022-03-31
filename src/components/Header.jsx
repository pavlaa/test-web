import React, {useState} from 'react';
import style from './Header.module.css';
import icon from '../image/mainicon.svg';
import user from '../image/usericon.svg';
import {Link} from "react-router-dom";
import CustomButton from "./UI/CustomButton";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <header className={style.header}>
      <div className={`${style.header__container} _container`}>
        <div className={style.header__main}>
          <div className={style.header__logo}>
            <img src={icon} alt="main-icon"/>
            <div className={style.logo__text}>Test App</div>
          </div>
          <div className={style.header__nav}>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/calendar">
              <p>Calendar</p>
            </Link>
            <Link to="/info">
              <p>Info</p>
            </Link>
          </div>
        </div>
        {isLogin
          ?
          <div className={style.header__profile}>
            <div className={style.profile__photo}>
              <img src={user} alt="user-icon"/>
            </div>
            <div className={style.profile__name}>
              Pavel Coolov
            </div>
            <div className={style.profile__logout}>
              <CustomButton size="14px" onClick={() => {setIsLogin(false)}}>Logout</CustomButton>
            </div>
          </div>
          :
          <div className={style.header__profile}>
            <div className={style.profile__logout}>
              <Link to="/login">
                <CustomButton size="14px">Login</CustomButton>
              </Link>
            </div>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;