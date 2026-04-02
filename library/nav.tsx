import { NavItem } from "@/types/types";
import {
    FaDiceD6,
    FaClipboardCheck,
    FaHouse,
    FaBatteryEmpty
  } from "react-icons/fa6";
  import { DiMongodb } from "react-icons/di";

export const NAV_ITEMS: NavItem[] = [
    {
        title: "Home",
        path: "/",
        icon: <FaHouse className="text-2xl" />,
    },
    {
        title: "About",
        path: "/about",
        icon: <FaDiceD6 className="text-2xl" />,
    },
    {
        title: "Projects",
        path: "/projects",
        icon: <FaClipboardCheck className="text-2xl" />,
    },
    {
        title: "ProjectsDB",
        path: "/proDB",
        icon: <DiMongodb className="text-2xl" />,
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaBatteryEmpty className="text-2xl" />,
    },
]