import { IconType } from "react-icons";

export type HistoryItem = {
  id: number;
  kind: "system" | "input" | "output" | "error";
  text: string;
};

export type Profile = {
  name: string;
  username: string;
  link: string;
  icon: IconType;
};