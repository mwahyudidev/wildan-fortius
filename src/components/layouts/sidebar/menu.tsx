import { Calendar, ClipboardText, Clock, House, Money, Users } from "@phosphor-icons/react";
import { Menu } from "../../../types/menu";

export const menu: Menu[] = [
  {
    name: "home",
    title: "Home",
    icon: <House />,
    route: "/",
  },
  {
    name: "attendance",
    title: "Attendance",
    icon: <ClipboardText />,
    route: "/attendance"
  },
  {
    name: "leave",
    title: "Leave",
    icon: <Calendar />,
    route: "/leave"
  },
  {
    name: "employees",
    title: "Employees",
    icon: <Users />,
    route: "/employees"
  },
  {
    name: "payroll",
    title: "Payroll",
    icon: <Money />,
    route: "/payroll"
  },
  {
    name: "schedule",
    title: "Schedule",
    icon: <Clock />,
    route: "/schedule"
  }
]