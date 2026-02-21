import React from "react";
import { BsFileCode } from "react-icons/bs";
import "./desktop.scss";
import MovingModal from "components/Common/MovingModal";

const Desktop: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const DESKTOP_APPS = [
    {
      name: "Code Editor",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    },
     {
      name: "Resume",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    },
     {
      name: "File Manager",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    },
     {
      name: "Skills",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    },
    {
      name: "Projects",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    },
    {
      name: "Projects",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    },
    {
      name: "Experience",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    },
    {
      name: "Snake",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    },
    {
      name: "About",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    },
    {
      name: "Themes",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    },
    {
      name: "Terminal",
      icon: BsFileCode,
      onClick: () => alert("Code Editor clicked!"),
    }
  ];

  return (
    <div className="desktop-main">
      {DESKTOP_APPS.map((app: any, index) => {
        const Icon = app.icon;

        return (
          <div key={index} className="desktop-app" onClick={app.onClick}>
            <Icon size={40} />
            <div className="desktop-app-name">{app.name}</div>
          </div>
        );
      })}
      <button onClick={() => {setIsModalOpen(true)}}>Check</button>
      <MovingModal
        title="Users"
        open={isModalOpen}
        onClose={() => {setIsModalOpen(false)}}
        width={400}
        defaultPosition={{ x: -200, y: 0 }}
      >check</MovingModal>
    </div>
  );
};

export default Desktop;