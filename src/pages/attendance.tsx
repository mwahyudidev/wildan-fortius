import { Export } from "@phosphor-icons/react"
import BaseLayout from "../components/layouts/base"
import CardLineChartWidget from "../components/widgets/card-linechart"
import { DashboardChartData } from "../data-dummy";
import AttendanceTable from "../components/tables/attendance";


const AttendancePage = () => {

  const dataCharts = DashboardChartData;

  return (
    <BaseLayout sidebarExpand={true}>
      
      <section className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-medium">Welcome back, John</h2>
          <span>You're working at ABC Company</span>
        </div>
        <div>
          <button type="button" className="flex py-2 px-4 rounded-lg gap-2 border items-center hover:bg-gray-50">
            <Export /> Export
          </button>
        </div>
      </section>

      {/* widget simple line chart  */}
      <div className="grid grid-cols-3 mt-8 gap-4">
        {
          dataCharts.map((data, key) => (
            <CardLineChartWidget
              key={key}
              title={data.title}
              amount={data.amount}
              grow={data.grow}
              growAmount={data.growAmount}
              data={data.data}    
            />
          ))
        }
      </div>

      {/* table attendance  */}
      <div className="mt-8">
        <AttendanceTable />
      </div>

    </BaseLayout>
  )
}

export default AttendancePage