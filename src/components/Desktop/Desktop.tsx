import React from "react";
import { BsFileCode } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";
import { IoFileTrayFull } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { GiSnakeTotem } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { IoIosColorPalette } from "react-icons/io";
import { IoTerminal } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";

import "./desktop.scss";
import MovingModal from "components/Common/MovingModal";
import { useTaskContext } from "context/TaskContext";
import { DESKTOP_ICONS } from "constants/constants";
import Skills from "components/Skills/Skills";
import Resume from "components/Resume/Resume";
import Project from "components/Project/Project";

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

  console.log(tasks);

  const DESKTOP_APPS = [
    {
      name: "Code Editor",
      id: DESKTOP_ICONS.CODE_EDITOR,
      icon: BsFileCode,
    },
    {
      name: "Resume",
      id: DESKTOP_ICONS.RESUME,
      icon: FaRegFileLines,
      component: Resume
    },
    {
      name: "File Manager",
      id: DESKTOP_ICONS.FILE_MANAGER,
      icon: IoFileTrayFull,
    },
    {
      name: "Skills",
      id: DESKTOP_ICONS.SKILLS,
      icon: GiSkills,
      component: Skills
    },
    {
      name: "Projects",
      id: DESKTOP_ICONS.PROJECTS,
      icon: PiProjectorScreenChartDuotone,
      component: Project,
      width: 700,
      defaultPosition: { x: -400, y: 0 }
    },
    {
      name: "Experience",
      id: DESKTOP_ICONS.EXPERIENCE,
      icon: GrUserExpert,
    },
    {
      name: "Snake",
      id: DESKTOP_ICONS.SNAKE,
      icon: GiSnakeTotem,
    },
    {
      name: "About",
      id: DESKTOP_ICONS.ABOUT,
      icon: FcAbout,
    },
    {
      name: "Themes",
      id: DESKTOP_ICONS.THEMES,
      icon: IoIosColorPalette,
    },
    {
      name: "Terminal",
      id: DESKTOP_ICONS.TERMINAL,
      icon: IoTerminal,
    },
  ];

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
