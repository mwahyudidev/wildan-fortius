import { status } from "./types/enum/status"

export const DashboardChartData = [
  {
    title: "Present Employees",
    amount: 2420,
    grow: "up",
    growAmount: 450,
    data: {
      labels: ["","","",""],
      datasets: [
        {
          label: '',
          data: [12, 19, 14, 15],
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 0
        }
      ]
    }
  },
  {
    title: "Late Employees",
    amount: 1210,
    grow: "down",
    growAmount: 200,
    data: {
      labels: ["","","",""],
      datasets: [
        {
          label: '',
          data: [19, 12, 11, 10],
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 0
        }
      ]
    }
  },
  {
    title: "Employees on Leaves",
    amount: 316,
    grow: "up",
    growAmount: 10,
    data: {
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
    }
  },
]

export const attendanceData = [
  {
    name: "Tony",
    checkin: {
      time: "09.00",
      location: "Singapore",
      map: null
    },
    checkout: {
      time: "12.00",
      location: "Singapore",
      map: null
    },
    status: status.EarlyCheckin
  },
  {
    name: "Tony",
    checkin: {
      time: "09.00",
      location: "Singapore",
      map: null
    },
    checkout: {
      time: "12.00",
      location: "Singapore",
      map: null
    },
    status: status.OnTime
  },
  {
    name: "Tony",
    checkin: {
      time: "09.00",
      location: "Singapore",
      map: null
    },
    checkout: {
      time: "12.00",
      location: "Singapore",
      map: null
    },
    status: status.Absent
  },
  {
    name: "Tony",
    checkin: {
      time: "09.00",
      location: "Singapore",
      map: null
    },
    checkout: {
      time: "12.00",
      location: "Singapore",
      map: null
    },
    status: status.LateCheckin
  },
  {
    name: "Tony",
    checkin: {
      time: "09.00",
      location: "Singapore",
      map: null
    },
    checkout: {
      time: "12.00",
      location: "Singapore",
      map: null
    },
    status: status.EarlyCheckOut
  },
  {
    name: "Tony",
    checkin: {
      time: "09.00",
      location: "Singapore",
      map: "https://map.google.com"
    },
    checkout: {
      time: "12.00",
      location: "Singapore",
      map: "https://map.google.com"
    },
    status: status.LateCheckout
  }
]

export const monthlyEvents = [
  {
    title: "Employee Working <br> 5",
    start: "2023-06-13",
    end: "2023-06-13",
  }
]