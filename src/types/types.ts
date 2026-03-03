export type HistoryItem = {
  id: number;
  kind: "system" | "input" | "output" | "error";
  text: string;
};
