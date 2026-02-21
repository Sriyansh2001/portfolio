import { DESKTOP_ICONS } from "constants/constants";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TaskContextType {
  tasks: {
    [key: typeof DESKTOP_ICONS[keyof typeof DESKTOP_ICONS]]: boolean;
  };
  setDesktopIcon: (iconName: string, isOpen: boolean) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState({
    [DESKTOP_ICONS.CODE_EDITOR]: false,
    [DESKTOP_ICONS.RESUME]: false,
    [DESKTOP_ICONS.FILE_MANAGER]: false,
    [DESKTOP_ICONS.SKILLS]: false,
    [DESKTOP_ICONS.PROJECTS]: false,
    [DESKTOP_ICONS.EXPERIENCE]: false,
    [DESKTOP_ICONS.SNAKE]: false,
    [DESKTOP_ICONS.CONTACT]: false,
  });

  const setDesktopIcon = (iconName: string, isOpen: boolean) => {
    setTasks((prev) => ({
      ...prev,
      [iconName]: isOpen,
    }));
  };

  return (
    <TaskContext.Provider value={{ tasks, setDesktopIcon }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
