import { CaretLeft, CaretRight, Pencil, Plus, Trash } from "@phosphor-icons/react"

const DailySchedule = () => {
  return (
    <div className="flex gap-2 w-full">
      <div className="w-64">
        <select 
          className="w-full rounded-lg border border-gray-200"
          placeholder="Select Department"
        >
          <option value="">Select Department</option>
        </select>
        <div className="mt-2">
          <div className="border border-gray-200 rounded-t-lg py-2 px-3 w-full flex justify-between items-center cursor-pointer hover:bg-gray-100">
            <span>Add Schedule</span>
            <Plus />
          </div>
        </div>
        <div className="mt-2 overflow-auto" style={{height: "70vh"}}>
          {
            Array(31).fill(0).map((_,i) => (
              <div className="px-3 py-2 rounded border border-gray-200 flex justify-between items-center mb-2">
                <span>7.30am - 3.25am</span>
                <div className="flex gap-1">
                  <Pencil className="cursor-pointer hover:text-yellow-500" />
                  <Trash className="cursor-pointer hover:text-red-500" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-full">
        
        <div className="flex justify-end">
          <div className="border border-gray-200 rounded flex gap-2 py-2 px-3 items-center">
            <CaretLeft className="cursor-pointer" />
            <div className="w-32 text-center">
              3 Mar - 9 Mar
            </div>
            <CaretRight className="cursor-pointer" />
          </div>
        </div>

        <section className="border border-gray-100 shadow rounded-lg mt-3">
          <table className="table-full w-full text-base">
            <thead className="bg-blue-50 p-0">
              <th className="p-0">Employees</th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">6am</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">7am</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">8am</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">9am</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">10am</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">11am</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">12am</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">1pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">2pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">3pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">4pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">5pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">6pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">7pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">8pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">9pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">10pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
              <th className="border-l-0 border-r-0  p-0 relative h-16 border-t border-b">
                <div className="flex justify-center items-center">
                  <span className="text-xs text-center">11pm</span> <br />
                  <span className="text-gray-400 text-base arrow-time absolute -bottom-1">|</span>
                </div>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <img className="w-6 h-6 object-cover rounded-full" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
                    <span>Tony</span>
                  </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100" colSpan={8}>
                  <div className="w-full bg-white border boder-gray-100 rounded p-1 text-sm">
                    12am - 3pm
                  </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center gap-2">
                    <img className="w-6 h-6 object-cover rounded-full" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
                    <span>Tony</span>
                  </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100" colSpan={4}>
                  <div className="w-full bg-white border boder-gray-100 rounded p-1 text-sm">
                    12am - 3pm
                  </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
                <td className="border-r-0 border-l-0 bg-blue-100">
                  <div className="flex justify-center items-center hover:text-gray-600 cursor-pointer"> <Plus /> </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default DailySchedule