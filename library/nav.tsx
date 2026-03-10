import { NavItem } from "@/types/types";
import {
    FaDiceD6,
    FaClipboardCheck,
    FaHouse,
  } from "react-icons/fa6";

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
]