// This file contains the types and enum for the application
// Define system interfaces and types here

import { JSX } from "react";

type UserProps = {
  userName: string;
  userType: string;
};

type NavItem = {
    title: string;
    path: string;
    color?: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: NavItem[];
}

export type { UserProps, NavItem };