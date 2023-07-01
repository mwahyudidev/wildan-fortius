import { Export } from "@phosphor-icons/react"
import BaseLayout from "../components/layouts/base"
import CardLineChartWidget from "../components/widgets/card-linechart"
import { DashboardChartData } from "../data-dummy";
import AttendanceTable from "../components/tables/attendance";
import ChartDougnutWidget from "../components/widgets/chart-dougnut";


const DashboardPage = () => {

  const dataCharts = DashboardChartData;

  return (
    <BaseLayout sidebarExpand={true}>
      
      <section className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-medium">Welcome, John</h2>
          <span>You're working at ABC Company</span>
        </div>
        <div>
          
        </div>
      </section>

      <section className="mt-8 bg-white border border-gray-200 shadow rounded-lg p-4">
        <h2 className="text-2xl font-medium">Company Overview</h2>
        <div className="mt-3 grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <div className="mb-2">
              <CardLineChartWidget
                title="Total Employees"
                amount={2420}
                grow="up"
                growAmount={425}
                data={{
                  labels: ["","","",""],
                  datasets: [
                    {
                      label: '',
                      data: [11, 12, 9, 15],
                      borderWidth: 2,
                      fill: true,
                      tension: 0.4,
                      pointRadius: 0
                    }
                  ]
                }}    
              />
            </div>
            <div className="">
              <CardLineChartWidget
                title="Total Department"
                amount={100}
                grow="down"
                growAmount={52}
                data={{
                  labels: ["","","",""],
                  datasets: [
                    {
                      label: '',
                      data: [10, 12, 9, 7],
                      borderWidth: 2,
                      fill: true,
                      tension: 0.4,
                      pointRadius: 0
                    }
                  ]
                }}    
              />
            </div>
          </div>
          <div className="col-span-3">

            <div className="bg-white rounded-lg border border-gray-200 shadow p-4">
              <span>Diversity</span>
              <div className="grid grid-cols-2 mt-3 gap-2">

                <div className="bg-white shadow-lg rounded-lg p-3">
                  <div className="text-center w-full flex justify-center text-sm font-semibold">Gender</div>
                  <div className="mt-2">
                    <ChartDougnutWidget
                      title="Gender"
                      data={{
                        labels: ["male","female"],
                        datasets: [
                          {
                            label: '',
                            data: [11, 12],
                            borderWidth: 2,
                            backgroundColor: [
                              '#0055ff','#fea3b5'
                            ],
                            fill: true,
                            tension: 0.4,
                            pointRadius: 0
                          }
                        ]
                      }}
                    />
                  </div>
                </div>

                <div className="bg-white border border-gray-50 shadow-lg rounded-lg p-3">
                  <div className="text-center w-full flex justify-center text-sm font-semibold">Status</div>
                  <div className="mt-2">
                    <ChartDougnutWidget
                      title="Gender"
                      data={{
                        labels: ["married","not married"],
                        datasets: [
                          {
                            label: '',
                            data: [12, 9],
                            borderWidth: 2,
                            backgroundColor: [
                              "#7100ff","#85caff"
                            ],
                            fill: true,
                            tension: 0.4,
                            pointRadius: 0
                          }
                        ]
                      }}
                    />
                  </div>
                </div>

              </div>
            </div>
            

            
          </div>
        </div>
      </section>

      

    </BaseLayout>
  )
}

export default DashboardPage