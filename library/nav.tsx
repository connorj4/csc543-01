import { NavItem } from "@/types/types";
import {
    FaDiceD6,
    FaClipboardCheck,
    FaHouse,
    FaBatteryEmpty
  } from "react-icons/fa6";
  import { DiMongodb } from "react-icons/di";

  

/**
 * Navigation items for the application.
 * Each item in the NAV_ITEMS array represents a navigation link with a title, path, and icon.
 * The title is the display name of the navigation item, the path is the URL path it links to, and the icon is a React component from react-icons that visually represents the navigation item.
 * This array can be used to dynamically generate navigation menus or links in the application, allowing for easy updates and maintenance of the navigation structure.
 * @constant {NavItem[]} NAV_ITEMS - An array of navigation items, where each item is an object containing a title, path, and icon for use in the application's navigation menu.    
 * @type {NavItem[]}
 * @example
 * const NAV_ITEMS: NavItem[] = [
 *   {
 *     title: "Home",   
 *     path: "/",
 *     icon: <FaHouse className="text-2xl" />,
 *   },
 *   {
 *     title: "About",      
 *      path: "/about",
 *     icon: <FaDiceD6 className="text-2xl" />,
 *   },
 *   ];
 */
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