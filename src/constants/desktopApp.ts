
// import { BsFileCode } from "react-icons/bs";
import { FaRegFileLines } from "react-icons/fa6";
// import { IoFileTrayFull } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
// import { GiSnakeTotem } from "react-icons/gi";
// import { FcAbout } from "react-icons/fc";
// import { IoIosColorPalette } from "react-icons/io";
import { FaCalculator } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import Skills from "components/Skills/Skills";
import Resume from "components/Resume/Resume";
import Project from "components/Project/Project";
import Experience from "components/Experience/Experience";
import Calculator from "components/Calculator/Calculator";
import Terminal from "components/Terminal/Terminal";
import { FaLaptopCode } from "react-icons/fa6";
import { DESKTOP_ICON_NAME, DESKTOP_ICONS } from "./constants";
import CodingProfiles from "components/CodingProfiles/CodingProfiles";

export const DESKTOP_APPS = [
    // {
    //   name: "Code Editor",
    //   id: DESKTOP_ICONS.CODE_EDITOR,
    //   icon: BsFileCode,
    // },
    {
      name: DESKTOP_ICON_NAME[DESKTOP_ICONS.RESUME],
      id: DESKTOP_ICONS.RESUME,
      icon: FaRegFileLines,
      component: Resume
    },
    // {
    //   name: "File Manager",
    //   id: DESKTOP_ICONS.FILE_MANAGER,
    //   icon: IoFileTrayFull,
    // },
    {
      name: DESKTOP_ICON_NAME[DESKTOP_ICONS.SKILLS],
      id: DESKTOP_ICONS.SKILLS,
      icon: GiSkills,
      component: Skills
    },
    {
      name: DESKTOP_ICON_NAME[DESKTOP_ICONS.CALCULATOR],
      id: DESKTOP_ICONS.CALCULATOR,
      icon: FaCalculator,
      component: Calculator
    },
    {
      name: DESKTOP_ICON_NAME[DESKTOP_ICONS.PROJECTS],
      id: DESKTOP_ICONS.PROJECTS,
      icon: PiProjectorScreenChartDuotone,
      component: Project,
      width: 700,
      defaultPosition: { x: -400, y: 0 }
    },
    {
      name: DESKTOP_ICON_NAME[DESKTOP_ICONS.EXPERIENCE],
      id: DESKTOP_ICONS.EXPERIENCE,
      icon: GrUserExpert,
      width: 700,
      component: Experience
    },
    {
      name: DESKTOP_ICON_NAME[DESKTOP_ICONS.CODING_PROFILES],
      id: DESKTOP_ICONS.CODING_PROFILES,
      icon: FaLaptopCode,
      component: CodingProfiles
    },
    // {
    //   name: "Snake",
    //   id: DESKTOP_ICONS.SNAKE,
    //   icon: GiSnakeTotem,
    // },
    // {
    //   name: "About",
    //   id: DESKTOP_ICONS.ABOUT,
    //   icon: FcAbout,
    // },
    // {
    //   name: "Themes",
    //   id: DESKTOP_ICONS.THEMES,
    //   icon: IoIosColorPalette,
    // },
    {
      name: DESKTOP_ICON_NAME[DESKTOP_ICONS.TERMINAL],
      id: DESKTOP_ICONS.TERMINAL,
      icon: IoTerminal,
      width: 700,
      component: Terminal,
    },
  ];