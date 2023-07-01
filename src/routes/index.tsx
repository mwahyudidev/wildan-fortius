import { createBrowserRouter } from "react-router-dom";
import GuestRoute from "./guest";
import DashboardPage from "../pages/dashboard";
import AttendancePage from "../pages/attendance";
import SchedulePage from "../pages/schedule";
import NotFoundPage from "../pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestRoute>
        <DashboardPage />
      </GuestRoute>
    )
  },
  {
    path: "/attendance",
    element: (
      <GuestRoute>
        <AttendancePage />
      </GuestRoute>
    )
  },
  {
    path: "/schedule",
    element: (
      <GuestRoute>
        <SchedulePage />
      </GuestRoute>
    )
  },
  {
    path: "/*",
    element: <NotFoundPage />
  }
])