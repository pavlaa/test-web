import React from 'react';
import style from './ProfilePage.module.css';
import Event from "./Event";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


const ProfilePage = () => {
  const {profile, events} = useSelector(state => state?.profile);
  const {isLogin} = useSelector(state => state?.auth);

  const eventItem = events.map(event => <Event key={event.id}
                                               date={event.formattedDate}
                                               text={event.text}/>)

  if (!isLogin) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className={style.profile}>
      <div className={`${style.profile__container} _container`}>
        <div className={style.profile__info}>
          <div className={style.profile__photo}>
            us
          </div>
          <div className={style.profile__desc}>
            <div className={style.profile__name}>
              <h2>{profile.name}</h2>
            </div>
            <div className={style.profile__status}>
              <h3>Status:</h3>
              <p>{profile.status}</p>
            </div>
            <div className={style.profile__about}>
              <h3>About me:</h3>
              <p>{profile.aboutMe}</p>
            </div>
          </div>
        </div>
        <div className={style.profile__events}>
          <h3>Events:</h3>
          {eventItem}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;