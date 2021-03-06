import React from 'react';
import style from './Header.module.css';
import icon from '../image/mainicon.svg';
import user from '../image/usericon.svg';
import {Link} from "react-router-dom";
import CustomButton from "./UI/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {GetLogout} from "../store/actions/authAction";

const Header = () => {
  const {profile} = useSelector(state => state?.profile);
  const {isLogin} = useSelector(state => state?.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(GetLogout())
  }

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
            <Link to="/profile">
              <p>Profile</p>
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
              {profile.name}
            </div>
            <div className={style.profile__logout}>
              <CustomButton size="14px" onClick={onLogout}>Logout</CustomButton>
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