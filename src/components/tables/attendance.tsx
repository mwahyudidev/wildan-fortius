import { CaretDown, CaretLeft, CaretRight, FunnelSimple } from "@phosphor-icons/react"
import { useState } from "react"
import "./tables.css"
import { attendanceData } from "../../data-dummy"
import AttendanceStatus from "../status/attendance-status"
import moment from "moment"

const AttendanceTable = () => {
  const [date, setDate] = useState<Date>(new Date())

  const addDate = () => {
    setDate(new Date(date.getTime() + (60 * 60 * 24 * 1000)))
  }

  const minDate = () => {
    setDate(new Date(date.getTime() - (60 * 60 * 24 * 1000)))
  }

  return (
    <div className="border border-gray-100 bg-white shadow rounded-lg">
      <div className="p-3 flex justify-between items-center gap-3">
        <div></div>
        <div className="flex items-center gap-4">
          <button onClick={minDate} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"><CaretLeft weight="bold" /></button>
          <span style={{minWidth: "150px"}} className="text-center">{moment(date).format("ddd, D MMM YYYY")}</span>
          <button onClick={addDate} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"><CaretRight weight="bold" /></button>
        </div>
        <div>
          <button type="button" className="py-2 px-4 rounded-lg border flex items-center gap-2 hover:bg-gray-50">
            <FunnelSimple /> More Filter
          </button>
        </div>
      </div>
      <div className="mt-3 w-full">
        <table className="w-full table-auto" >
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="border-t-0" rowSpan={2}>Employee Name</th>
              <th className="border-t-0" colSpan={2}>Checkin</th>
              <th className="border-t-0" colSpan={2}>Checkout</th>
              <th className="border-t-0" rowSpan={2}>Status</th>
              <th className="border-t-0" rowSpan={2}>Action</th>
            </tr>
            <tr>
              <th>Time</th>
              <th>Location</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {
              attendanceData.map((data, key) => (
                <tr key={key}>
                  <td>{data.name}</td>
                  <td>{data.checkin.time}</td>
                  <td>{data.checkin.location}</td>
                  <td>{data.checkin.time}</td>
                  <td>{data.checkin.location}</td>
                  <td className="text-center">
                    <AttendanceStatus status={data.status} />
                  </td>
                  <td>
                    <div className="cursor-pointer hover:text-blue-600 flex justify-between items-center text-blue-500">
                      <span>Details</span>
                      <CaretDown />
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className="p-3">

      </div>
    </div>
  )
}

export default AttendanceTable