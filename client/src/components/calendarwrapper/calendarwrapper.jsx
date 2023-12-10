import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarwrapper.css';

const CalendarWrapper = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="calendarcontainer">
          <h1 className="calendar-header">My Calendar</h1>
          <Calendar
            onChange={onChange}
            value={value}
            className="calendar"
          />
        </div>
      );
    };


    export default CalendarWrapper;