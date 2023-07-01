import { Chart as ChartDOM } from "react-chartjs-2"
import { Chart as ChartJs, ChartArea, ChartData } from 'chart.js';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useRef, useState } from "react";

Chart.register(CategoryScale);

type Props = {
  title: string
  data: any
}

const ChartDougnutWidget = ({title, data}: Props) => {
  const [initialData, setInitialData] = useState<Props>({
    title: title ? title : '',
    data: data ? data : {}
  })

  const [chartData, setChartData] = useState<ChartData<'line'>>({datasets: []})
  const chartRef = useRef<ChartJs>(null)

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    setChartData(initialData.data);
  }, [])

  return (
    <>
      <ChartDOM
          type="doughnut"
          ref={chartRef}
          data={chartData}
          height={'180px'}
          options={{}}
        />
    </>
  )
}

export default ChartDougnutWidget