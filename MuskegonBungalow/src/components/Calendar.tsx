import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';

const Calendar = () => {
  return (
    <section className="bg-white">
      <h2 className="text-3xl font-bold text-sage-900 mb-8 text-center">
        Check Availability
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        {/* <FullCalendar
          plugins={[dayGridPlugin, iCalendarPlugin]}
          initialView="dayGridMonth"
          height="auto"
          events={{
            url: 'YOUR_ICAL_FEED_URL',
            format: 'ics',
          }}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth',
          }}
        /> */}
      </div>
    </section>
  );
};

export default Calendar;