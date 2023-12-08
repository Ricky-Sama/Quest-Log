import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarWrapper.css';

const CalendarWrapper = () => {
    const [value, onChange] = useState(new Date());