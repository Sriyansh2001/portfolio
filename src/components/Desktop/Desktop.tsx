import React from "react";
import "./desktop.scss";
import MovingModal from "components/Common/MovingModal";
import { useTaskContext } from "context/TaskContext";
import { DESKTOP_ICONS } from "constants/constants";
import { DESKTOP_APPS } from "constants/desktopApp";

const Desktop: React.FC = () => {
  const { tasks, setDesktopIcon, setModalZIndex } = useTaskContext();

  const handleOpenAppClick =
    (iconType: (typeof DESKTOP_ICONS)[keyof typeof DESKTOP_ICONS])=> {
      setDesktopIcon(iconType, true);
    };

  const handleCloseAppClick =
    (iconType: (typeof DESKTOP_ICONS)[keyof typeof DESKTOP_ICONS]) => {
      setDesktopIcon(iconType, false);
    };

  const handleModalMouseDown = (iconId: string) => {
    setModalZIndex(iconId);
  };

  return (
    <div className="desktop-main">
      {DESKTOP_APPS.map((app: any, index) => {
        const Icon = app.icon;

        return (
          <>
            <div
              key={index}
              className="desktop-app"
              onClick={() => {
                handleOpenAppClick(app.id);
              }}
            >
              <Icon size={40} />
              <div className="desktop-app-name">{app.name}</div>
            </div>
            <MovingModal
              title={app.name}
              open={tasks[app.id].isOpen}
              onClose={() => {
                handleCloseAppClick(app.id);
              }}
              onMouseDown={() => handleModalMouseDown(app.id)}
              zIndex={tasks[app.id].zIndex}
              width={app.width || 400}
              defaultPosition={{ x: app.defaultPosition?.x || -200, y: app.defaultPosition?.y || 0 }}
            >
              {app.component ? <app.component /> : "check"}
            </MovingModal>
          </>
        );
      })}
    </div>
  );
};

export default Desktop;
