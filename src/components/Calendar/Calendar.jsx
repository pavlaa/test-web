import React, {useEffect, useState} from 'react';
import style from './Calendar.module.css'
import CustomButton from "../UI/CustomButton";
import search from "../../image/searchicon.svg";
import * as calendar from "./calendarFunctions";
import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {AddEvent, UpdateEvent} from "../../store/actions/profileAction";
import {Navigate} from "react-router-dom";

const Calendar = () => {
  const {events} = useSelector(state => state?.profile);
  const {isLogin} = useSelector(state => state?.auth);
  const dispatch = useDispatch();

  const defaultData = {
    date: new Date(),
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"],
    weekDaysNames: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"]
  }

  const [dateState, getDateState] = useState({
    date: defaultData.date,
    currentDate: new Date(),
    selectedDate: null,
    monthData: null,
    searchMonthData: null,
  })

  const [text, setText] = useState('')

  useEffect(() => {
    const newMonthDate = calendar.getMonthData(dateState.date.getFullYear(), dateState.date.getMonth());

    const newMonthDateWithEvent = newMonthDate.map(week => week.map(day => {
      let result = null;

      events.forEach(event => {
        if (calendar.areEqual(event.dateForCompare, day?.date)) {
          result = {...day, event: event.text}
        }
      })

      if (result) {
        return result
      } else {
        return day
      }
    }))

    getDateState({...dateState, monthData: newMonthDateWithEvent})
  }, [dateState.date, events])

  if (!isLogin) {
    return <Navigate to="/login" replace />
  }

  const prevMonthButton = () => {
    const date = new Date(dateState.date.getFullYear(), dateState.date.getMonth() - 1)
    getDateState({...dateState, date: date})
  }

  const nextMonthButton = () => {
    const date = new Date(dateState.date.getFullYear(), dateState.date.getMonth() + 1)
    getDateState({...dateState, date: date})
  }

  const handleDayClick = (date) => {
    getDateState({...dateState, selectedDate: date})
  }

  const createEvent = () => {
    const event = {
      id: dateState.currentDate,
      dateForCompare: dateState.selectedDate,
      formattedDate: dateState.selectedDate.toLocaleDateString(),
      text: text
    }
    dispatch(AddEvent(event))
  }

  const updateEvent = () => {
    const selectedDate = dateState.selectedDate;

    const newEvents = events.map(event => {
      if (calendar.areEqual(event.dateForCompare, selectedDate)) {
        return {...event, text: text}
      } else {
        return event
      }
    })
    dispatch(UpdateEvent(newEvents))
  }

  const searchEvent = () => {
    if (text === '') {
      getDateState({...dateState, searchMonthData: null})
    } else {
      const foundEvents = [];

      events.map(event => {
        if (event.text.includes(text)) {
          return foundEvents.push(event)
        }
      })
      getDateState({...dateState, searchMonthData: foundEvents})
    }
  }

  return (
    <div className={style.calendar}>
      <div className={`${style.calendar__container} _container`}>
        <div className={style.calendar__header}>
          <div className={style.calendar__actions}>
            <div className={style.calendar__create}>
              <CustomButton onClick={createEvent} size="17px">Create</CustomButton>
            </div>
            <div className={style.calendar__update}>
              <CustomButton onClick={updateEvent} size="17px">Update</CustomButton>
            </div>
          </div>
          <div className={style.calendar__search}>
            <div className={style.calendar__input}>
              <input value={text}
                     onChange={e => {setText(e.target.value)}}
                     type="text"
                     placeholder="Search or Create or Update"
              />
            </div>
            <div className={style.calendar__btn}>
              <CustomButton onClick={searchEvent} size="17px">
                <img src={search} alt="search-icon" />
              </CustomButton>
            </div>
          </div>
          <div className={style.calendar__date}>
            <div className={style.calendar__leftbtn}>
              <CustomButton onClick={prevMonthButton} size="25px">{'<'}</CustomButton>
            </div>
            <div className={style.calendar__month}>
              {defaultData.monthNames[dateState.date.getMonth()]}
            </div>
            <div className={style.calendar__year}>
              {dateState.date.getFullYear()}
            </div>
            <div className={style.calendar__rightbtn}>
              <CustomButton onClick={nextMonthButton} size="25px">{'>'}</CustomButton>
            </div>
          </div>
        </div>
        <div className={style.calendar__table}>
          {dateState.searchMonthData
            ?
            <table>
              <tbody className={style.table__body}>
                <tr className={style.body__foundtr}>
                  {dateState.searchMonthData.map((daySearchWeek, index) =>
                    <div key={index}
                         className={classNames(style.body__foundtd, {
                           [style.today]: calendar.areEqual(daySearchWeek.dateForCompare, dateState.currentDate),
                           [style.selected]: calendar.areEqual(daySearchWeek.dateForCompare, dateState.selectedDate)
                         })}
                         onClick={() => handleDayClick(daySearchWeek.date)}>
                      <td>{daySearchWeek.dateForCompare.getDate()}</td>
                      <div className={style.body__event}>
                        {daySearchWeek.text}
                      </div>
                    </div>
                  )}
                </tr>
              </tbody>
            </table>
            :
            <table>
              <thead className={style.table__header}>
              <tr className={style.header__tr}>
                {defaultData.weekDaysNames.map(name =>
                  <th key={name}>{name}</th>
                )}
              </tr>
              </thead>
              <tbody className={style.table__body}>
              {dateState.monthData?.map((week, index) =>
                <tr key={index} className={style.body__tr}>
                  {week.map((dayInMonth, index) =>
                    dayInMonth
                      ?
                      <div key={index}
                           className={classNames(style.body__td, {
                             [style.today]: calendar.areEqual(dayInMonth.date, dateState.currentDate),
                             [style.selected]: calendar.areEqual(dayInMonth.date, dateState.selectedDate)
                           })}
                           onClick={() => handleDayClick(dayInMonth.date)}>
                        <td >{dayInMonth.date.getDate()}</td>
                        <div className={style.body__event}>
                          {dayInMonth.event}
                        </div>
                      </div>
                      :
                      <div key={index}
                           className={style.body__td}>
                        <td />
                      </div>
                  )}
                </tr>
              )}
              </tbody>
            </table>
          }
        </div>
      </div>
    </div>
  );
};

export default Calendar;