import { useState } from "react";
import "./taskbar.scss";
import { useTaskContext } from "context/TaskContext";
import { DESKTOP_APPS } from "constants/desktopApp";
import { IoClose } from "react-icons/io5";
import { DESKTOP_ICON_NAME } from "constants/constants";

export default function Taskbar() {
  const { tasks, setDesktopIcon, setModalZIndex } = useTaskContext();
  const [isStartOpen, setIsStartOpen] = useState(false);
  const CloseIcon: any = IoClose;

  const openApp = (iconName: string) => {
    setDesktopIcon(iconName, true);
    setModalZIndex(iconName);
    setIsStartOpen(false);
  };

  const onCloseHandler = (iconName: string) => {
    setDesktopIcon(iconName, false);
  }

  const openTasks = Object.entries(tasks).filter(([_, task]) => task.isOpen);

  return (
    <>
      {isStartOpen && (
        <div className="start-menu">
          {DESKTOP_APPS.map((app) => (
            <div
              key={app.id}
              className="start-menu-item"
              onClick={() => openApp(app.id)}
            >
              {app.name}
            </div>
          ))}
        </div>
      )}

      <div className="taskbar">
        <div
          className="start-button"
          onClick={() => setIsStartOpen(!isStartOpen)}
        >
          Start
        </div>

        <div className="taskbar-apps">
          {openTasks.map(([iconName]) => (
            <div className="taskbar-item-container"><div
              key={iconName}
              className="taskbar-item"
              onClick={() => setModalZIndex(iconName)}
            >
              {DESKTOP_ICON_NAME[iconName]}
            </div>  
              <CloseIcon className="close-icon" onClick={() => onCloseHandler(iconName)} />
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
}