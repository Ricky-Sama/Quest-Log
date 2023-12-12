import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarwrapper.css';

const CalendarWrapper = ({ setShowCalendar }) => {
  const [value, onChange] = useState(new Date());
  const calendarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowCalendar]);

  return (
    <div ref={calendarRef} className="calendarcontainer">
      <h1 className="calendar-header">My Calendar</h1>
      <Calendar
        onChange={onChange}
        value={value}
        className="calendar"
      />
    </div>
  );
};

import PropTypes from 'prop-types';

CalendarWrapper.propTypes = {
  setShowCalendar: PropTypes.func.isRequired,
};

export default CalendarWrapper;