import { useState } from "react"
import BaseLayout from "../../components/layouts/base"
import MontlySchedule from "./montly"
import BiweeklySchedule from "./biweekly"
import WeeklySchedule from "./weekly"
import DailySchedule from "./daily"

const SchedulePage = () => {

  const [page, setPage] = useState<string>('monthly')

  return (
    <BaseLayout sidebarExpand={false}>
      <div className="mt-6 bg-white border border-gray-100 rounded-lg shadow">
        <div className="flex border-b">
          <div 
            className={`
              w-28 text-center py-2 cursor-pointer font-medium hover:border-b-2 hover:border-blue-500 hover:text-blue-500
              ${page === "monthly" && 'border-b-2 border-blue-600 text-blue-600'}
            `}
            onClick={() => setPage('monthly')}
          >
            Monthly
          </div>
          <div 
            className={`
              w-28 text-center py-2 cursor-pointer font-medium hover:border-b-2 hover:border-blue-500 hover:text-blue-500
              ${page === "biweekly" && 'border-b-2 border-blue-600 text-blue-600'}
            `}
            onClick={() => setPage('biweekly')}
          >
            Biweekly
          </div>
          <div 
            className={`
              w-28 text-center py-2 cursor-pointer font-medium hover:border-b-2 hover:border-blue-500 hover:text-blue-500
              ${page === "weekly" && 'border-b-2 border-blue-600 text-blue-600'}
            `}
            onClick={() => setPage('weekly')}
          >
            Weekly
          </div>
          <div 
            className={`
              w-28 text-center py-2 cursor-pointer font-medium hover:border-b-2 hover:border-blue-500 hover:text-blue-500
              ${page === "daily" && 'border-b-2 border-blue-600 text-blue-600'}
            `}
            onClick={() => setPage('daily')}
          >
            Daily
          </div>
        </div>

        <div className="p-5">
          {
            page === "monthly" && (
              <MontlySchedule />
            )
          }
          {
            page === "biweekly" && (
              <BiweeklySchedule />
            )
          }
          {
            page === "weekly" && (
              <WeeklySchedule />
            )
          }
          {
            page === "daily" && (
              <DailySchedule />
            )
          }
        </div>
      </div>
    </BaseLayout>
  )
}

export default SchedulePage