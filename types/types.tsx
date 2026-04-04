import { JSX } from "react";
/**
 * This file defines TypeScript types and enums used throughout the application, including types for user properties, navigation items, projects, todos, and form state management. It also includes enums for data types, task statuses, task priorities, task tags, and user roles to ensure consistency and type safety when working with these concepts in the application. These type definitions help improve code readability, maintainability, and reduce the likelihood of runtime errors by providing clear contracts for the expected structure of data and the allowed values for certain fields.
 * @module types/types
 * @exports UserProps - Type definition for user properties, including userName and userType, which can be used to define the expected props for user-related components in the application.
 * @exports NavItem - Type definition for navigation items, including title, path, color, icon, submenu, and subMenuItems, which can be used to define the structure of navigation data in the application.
 * @exports Project - Type definition for project entities, including id, title, description, link, imageUrl, and tags, which can be used to define the expected structure of project data in the application.
 * @exports Todo - Type definition for todo items, including userId, project, id, title, description, completed status, and status, which can be used to define the expected structure of todo data in the application.
 * @exports TodoSampleProps - Type definition for props related to a sample todo item, including params with slug, userId, id, title, completed status, and status, which can be used to define the expected props for components that display or manage sample todo items in the application.
 * @exports DataTypes - Enum for different data types used in the application, such as project, sprint, retrospective, group, task, and subtask, which can be used to ensure consistency when referring to these data types throughout the codebase.
 * @exports TaskStatus - Enum for different task statuses used in the application, such as opened, inprogress, inreview, intest, pending, blocked, completed, rejected, accepted, abandoned, reopened, and archived, which can be used to ensure consistency when referring to task statuses throughout the codebase.
 * @exports TaskPriority - Enum for different task priorities used in the application, such as low, medium, high, and critical, which can be used to ensure consistency when referring to task priorities throughout the codebase.
 * @exports TaskTags - Enum for different task tags used in the application, such as meeting, documentation, design, development, testing, deployment, maintenance, bugfix, feature, improvement, refactoring, research, planning, analysis, review, feedback, and support, which can be used to ensure consistency when referring to task tags throughout the codebase.
 * @exports UserRoles - Enum for different user roles used in the application, such as superadmin, admin, user, and guest, which can be used to ensure consistency when referring to user roles throughout the codebase.
 * @exports FormState - Interface for managing form state related to error messages and validation errors during form submission in the application.
 */

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

type Project = {
    id: number;
    title: string;
    description: string;
    link?: string;
    imageUrl: string;
    tags: string[];
};

type Todo = {
    userId: number;
    project: number;
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    status?: string;
};  

type TodoSampleProps = {
    params: {
      slug: number;
      userId: number;
      id: number;
      title: string;
      completed: boolean;
      status?: string;
    };
  };

export type { UserProps, NavItem, Project, Todo, TodoSampleProps };
// Enums for various constants used in the application to ensure consistency and type safety when referring to these concepts throughout the codebase
export enum DataTypes {
    project = 'project',
    sprint = 'sprint',
    retrospective = 'retrospective',
    group = 'group',
    task = 'task',
    subtask = 'subtask',
}
export enum TaskStatus {
    opened = 'opened',
    inprogress = 'inprogress',
    inreview = 'inreview',
    intest = 'intest',
    pending = 'pending',
    blocked = 'blocked',
    completed = 'completed',
    rejected = 'rejected',
    accepted = 'accepted',
    abandoned = 'abandoned',
    reopened = 'reopened',
    archived = 'archived',
}
export enum TaskPriority {
    low = 'low',
    medium = 'medium',
    high = 'high',
    critical = 'critical',
}
export enum TaskTags {
    meeting = 'meeting',
    documentation = 'documentation',
    design = 'design',
    development = 'development',
    testing = 'testing',
    deployment = 'deployment',
    maintenance = 'maintenance',
    bugfix = 'bugfix',
    feature = 'feature',
    improvement = 'improvement',
    refactoring = 'refactoring',
    research = 'research',
    planning = 'planning',
    analysis = 'analysis',
    review = 'review',
    feedback = 'feedback',
    support = 'support', 
}
export enum UserRoles {
    superadmin = 'superadmin',
    admin = 'admin',
    user = 'user',
    guest = 'guest',
}
// FormState is used to manage error messages
export interface FormState {
    message: string;
    errors: Record<string, string | string[]>;
    isError: boolean;
}