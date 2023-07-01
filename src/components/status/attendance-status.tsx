import { status as statusEnum } from "../../types/enum/status"

type Props = {
  status: string|statusEnum
}

const AttendanceStatus = ({status}: Props) => {
  if (status === statusEnum.EarlyCheckin) {
    return (
      <div className="bg-green-100 text-green-600 inline-block px-4 py-1 rounded-xl text-xs">
        {status}
      </div>
    )
  }

  if (status === statusEnum.OnTime) {
    return (
      <div className="bg-blue-100 text-blue-600 inline-block px-4 py-1 rounded-xl text-xs">
        {status}
      </div>
    )
  }

  if (status === statusEnum.Absent) {
    return (
      <div className="bg-red-100 text-red-600 inline-block px-4 py-1 rounded-xl text-xs">
        {status}
      </div>
    )
  }

  if (status === statusEnum.LateCheckin) {
    return (
      <div className="bg-purple-100 text-purple-600 inline-block px-4 py-1 rounded-xl text-xs">
        {status}
      </div>
    )
  }

  if (status === statusEnum.EarlyCheckOut) {
    return (
      <div className="bg-yellow-100 text-yellow-600 inline-block px-4 py-1 rounded-xl text-xs">
        {status}
      </div>
    )
  }

  if (status === statusEnum.LateCheckout) {
    return (
      <div className="bg-orange-100 text-orange-600 inline-block px-4 py-1 rounded-xl text-xs">
        {status}
      </div>
    )
  }

  return (
    <div>
      {status}
    </div>
  )
}

export default AttendanceStatus