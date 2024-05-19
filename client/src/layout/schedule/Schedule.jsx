import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import React, { useEffect, useState } from 'react'
import ScheduleApi from '../../api/schedule'
import { parseShiftToTime } from '../../utils/time'
import Footer from '../Footer'
import Header from '../Header'

function Calendar() {
  const [calendar, setCalendar] = useState([])
  useEffect(() => {
    // Fetch data from server
    const fetchData = async () => {
      const response = await ScheduleApi.GetSchedule() // replace with your actual API endpoint
      const data = response.data

      // Map data to calendar events
      const events = data.map((item) => {
        const shift = item.shift
        const {
          start,
          end,
          shift: shiftLesson,
        } = parseShiftToTime(shift - 1, item.time)

        return {
          title: item.class.subject.subject_name,
          start,
          end,
          extendedProps: {
            room: `Phòng: ${item.class.class_detail.room_name}`,
            teacher: `GV: ${item.class.professor_name}`,
            tiet: `Tiết: ${shiftLesson}`,
            class_name: item.class.class_name,
            class_id: item.class.class_id,
            towner: `Toà: ${item.class.class_detail.towner}`,
          },
        }
      })

      setCalendar(events)
    }

    fetchData()
  }, [])

  const renderEventContent = (eventInfo) => {
    return (
      <div className="p-1 bg-blue-500 w-[150px] -ml-[3px] -mt-[0.5px] rounded-md">
        <strong className="text-base">{eventInfo.event.title}</strong>
        <p>
          {eventInfo.event.extendedProps.class_id} -{' '}
          {eventInfo.event.extendedProps.class_name}{' '}
        </p>
        <p>{eventInfo.event.extendedProps.tiet}</p>
        <p>{eventInfo.event.extendedProps.room}</p>
        <p>{eventInfo.event.extendedProps.teacher}</p>
        <p>{eventInfo.event.extendedProps.towner}</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <br />
      <div className="mx-auto w-3/4">
        <FullCalendar
          allDaySlot={false}
          contentHeight={770}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: '',
            center: '',
            right: 'prev,next today,timeGridWeek',
          }}
          timeZone="local"
          events={calendar}
          slotMinTime="06:30:00"
          slotMaxTime="20:40:00"
          eventContent={renderEventContent}
        />
      </div>
      <br />
      <Footer />
    </div>
  )
}

export default Calendar
