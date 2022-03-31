import React from 'react';
import style from './ProfilePage.module.css';
import Event from "./Event";


const ProfilePage = () => {
  return (
    <div className={style.profile}>
      <div className={`${style.profile__container} _container`}>
        <div className={style.profile__info}>
          <div className={style.profile__photo}>
            us
          </div>
          <div className={style.profile__desc}>
            <div className={style.profile__name}>
              <h2>User User</h2>
            </div>
            <div className={style.profile__status}>
              <h3>Status:</h3>
              <p>
                Look's good!:
              </p>
            </div>
            <div className={style.profile__about}>
              <h3>About me:</h3>
              <p>
                Madison Blackstone is a director of brand marketing, with experience managing global teams and
                multi-million-dollar campaigns.
              </p>
            </div>
          </div>
        </div>
        <div className={style.profile__events}>
          <h3>Events:</h3>
          <Event/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;