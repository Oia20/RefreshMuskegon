import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';

const Calendar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative bg-emerald-50 pt-24 pb-16 max-w-screen-xl mx-auto">
      {/* Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center">
          Check Availability
        </h2>
        <p className="text-emerald-800 mb-8 text-center">
          Plan your stay by checking our available dates
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <FullCalendar
            plugins={[dayGridPlugin, iCalendarPlugin]}
            initialView="dayGridMonth"
            height="auto"
            events={{
              url: './mock-mock.ics',
              format: 'ics',
            }}
            headerToolbar={{
              left: window.innerWidth < 640 ? 'prev,next' : 'prev,next today',
              center: 'title',
              right: '',
            }}
            buttonText={{
              today: 'Today',
            }}
            buttonClassNames="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-md transition-colors duration-200"
            dayHeaderClassNames="text-emerald-900 uppercase text-sm font-semibold"
            dayCellClassNames="hover:bg-emerald-50 cursor-pointer"
            titleFormat={{ year: 'numeric', month: 'long' }}
            buttonIcons={{
              prev: 'chevron-left',
              next: 'chevron-right',
            }}
          />
        </div>
        <div className="text-center mt-8">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-emerald-700 transition-colors duration-200 transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calendar;