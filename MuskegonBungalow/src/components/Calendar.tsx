import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import iCalendarPlugin from '@fullcalendar/icalendar';
import ICAL from 'ical.js';
import { useEffect, useState } from 'react';

const Calendar = () => {
  const [calendarData, setCalendarData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.formbee.dev/fetch-ical', {
          headers: {
            "Content-Type": "text/calendar",
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const rawData = await response.text();

        // Preprocess iCalendar data to remove names
        const processedData = rawData
          .split('\n')
          .map((line) => {
            // Remove lines that start with "SUMMARY:" to hide names
            if (line.startsWith('SUMMARY:')) {
              return 'SUMMARY:Reserved'; // Replace with a generic term
            }
            return line;
          })
          .join('\n');

        const parsedEvents = parseICal(processedData);
        setCalendarData(parsedEvents);
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  const parseICal = (icalData: string) => {
    const events: any[] = [];
    const parsed = ICAL.parse(icalData);
    const comp = new ICAL.Component(parsed);
    const vevents = comp.getAllSubcomponents('vevent');
  
    vevents.forEach((vevent: ICAL.Component) => {
      const event = new ICAL.Event(vevent);
      events.push({
        title: event.summary,
        start: event.startDate.toString(),
        end: event.endDate.toString(),
      });
    });
  
    return events;
  };
  return (
    <section className="relative bg-emerald-100 pt-24 pb-16 max-w-screen mx-auto">
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
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl mx-auto overflow-x-hidden">
        <FullCalendar
          plugins={[dayGridPlugin, iCalendarPlugin]}
          initialView="dayGridMonth"
          height="auto"
          events={calendarData.map(event => ({
            ...event,
            url: event.url || '#',
          }))}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: '',
          }}
          buttonText={{
            today: 'Today',
          }}
          dayHeaderClassNames="text-emerald-900 uppercase text-sm font-semibold"
          dayCellClassNames="hover:bg-emerald-50 cursor-pointer"
          titleFormat={{ year: 'numeric', month: 'long' }}
          buttonIcons={{
            prev: 'chevron-left',
            next: 'chevron-right',
          }}
        />
          <style>{`
            @media (max-width: 640px) {
              .fc-today-button {
                display: none !important;
              }
            }
          `}</style>
        </div>
        <div className="text-center mt-8">
          <button 
          onClick={() => window.location.href = 'https://www.tripadvisor.com/VacationRentalReview-g42534-d23359204-Nature_s_Intrigue-Norton_Shores_Muskegon_County_Michigan.html'}
          className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-emerald-700 transition-colors duration-200 transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calendar;