import { DESKTOP_ICONS } from "constants/constants";
import React, { createContext, useContext, useState, useRef, ReactNode } from "react";

interface TaskState {
  isOpen: boolean;
  zIndex: number;
}

interface TaskContextType {
  tasks: {
    [key: typeof DESKTOP_ICONS[keyof typeof DESKTOP_ICONS]]: TaskState;
  };
  setDesktopIcon: (iconName: typeof DESKTOP_ICONS[keyof typeof DESKTOP_ICONS], isOpen: boolean) => void;
  setModalZIndex: (iconName: typeof DESKTOP_ICONS[keyof typeof DESKTOP_ICONS]) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState({
    [DESKTOP_ICONS.CODE_EDITOR]: { isOpen: false, zIndex: 1 },
    [DESKTOP_ICONS.RESUME]: { isOpen: false, zIndex: 1 },
    [DESKTOP_ICONS.FILE_MANAGER]: { isOpen: false, zIndex: 1 },
    [DESKTOP_ICONS.SKILLS]: { isOpen: false, zIndex: 1 },
    [DESKTOP_ICONS.PROJECTS]: { isOpen: false, zIndex: 1 },
    [DESKTOP_ICONS.EXPERIENCE]: { isOpen: false, zIndex: 1 },
    [DESKTOP_ICONS.SNAKE]: { isOpen: false, zIndex: 1 },
    [DESKTOP_ICONS.ABOUT]: { isOpen: false, zIndex: 1 },
    [DESKTOP_ICONS.THEMES]: { isOpen: false, zIndex: 1 },
    [DESKTOP_ICONS.TERMINAL]: { isOpen: false, zIndex: 1 },
    [DESKTOP_ICONS.CONTACT]: { isOpen: false, zIndex: 1 },
  });

  const maxZIndexRef = useRef(1);

  const setDesktopIcon = (iconName: string, isOpen: boolean) => {
    setTasks((prev) => {
      if (isOpen) {
        // when opening, bump this modal to the top
        maxZIndexRef.current += 1;
        return {
          ...prev,
          [iconName]: {
            ...prev[iconName as keyof typeof prev],
            isOpen,
            zIndex: maxZIndexRef.current,
          },
        };
      }

      // closing — just set isOpen to false
      return {
        ...prev,
        [iconName]: {
          ...prev[iconName as keyof typeof prev],
          isOpen,
        },
      };
    });
  };

  const setModalZIndex = (iconName: string) => {
    maxZIndexRef.current += 1;
    setTasks((prev) => ({
      ...prev,
      [iconName]: {
        ...prev[iconName as keyof typeof prev],
        zIndex: maxZIndexRef.current,
      },
    }));
  };

  return (
    <TaskContext.Provider value={{ tasks, setDesktopIcon, setModalZIndex }}>
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
