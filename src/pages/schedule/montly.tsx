import moment from "moment"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useState } from "react"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './schedule.css'
import CalendarEvent from "./calendar-event"

const MontlySchedule = () => {
  const [month, setMonth] = useState<string>(moment(new Date()).format("MM"))
  const [year, setYear] = useState<string>(moment(new Date()).format("YYYY"))
  
  const localizer = momentLocalizer(moment)

  const events = [
    {
      title: <CalendarEvent workingHour="14 Hours 30 Minutes" numberOfEmployee={5} />,
      start: "2023-06-13",
      end: "2023-06-13",
    },
    {
      title: <CalendarEvent workingHour="4 Hours 30 Minutes" numberOfEmployee={2} />,
      start: "2023-07-01",
      end: "2023-07-01",
    }
  ]

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <select 
            defaultValue={year} 
            className="rounded border border-gray-300 py-1 w-36"
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          <select 
            defaultValue={month} 
            className="rounded border border-gray-300 py-1 w-36"
            onChange={(e) => setMonth(e.target.value)}
          >
            {
              Array.apply(0, Array(12)).map((_,i) => (
                <>
                  <option value={moment().month(i).format("MM")}>
                    {moment().month(i).format("MMMM")}
                  </option>
                </>
              ))
            }
          </select>
        </div>
        <div className="">
          <button className="bg-blue-600 rounded-lg py-2 px-6 font-medium hover:bg-blue-700 text-sm text-white">Set Schedule</button>
        </div>
      </div>
      <div className="mt-5">
        <Calendar 
          localizer={localizer}
          date={`${year}-${month}`}
          style={{ height: 700 }}
          views={{
            month: true,
            week: false,
            day: false
          }}
          toolbar={false}
          events={events}
        />
      </div>
    </>
  )
}

export default MontlySchedule