import { Clock, UserCircle } from "@phosphor-icons/react"

type Props = {
  numberOfEmployee: number
  workingHour: string
}

const CalendarEvent = ({numberOfEmployee, workingHour}: Props) => {
  return (
    <div className="py-2 px-1">
      <div className="flex gap-1">
        <UserCircle className="text-base" />
        <span className="text-xs">
          Employee Working <br />
          <strong>{numberOfEmployee}</strong>
        </span>
      </div>
      <div className="flex gap-1 mt-3">
        <Clock className="text-base" />
        <span className="text-xs">
          Working Hours <br />
          <strong>{workingHour}</strong>
        </span>
      </div>
    </div>
  )
}

export default CalendarEvent
