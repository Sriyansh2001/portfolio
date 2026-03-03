import { DESKTOP_ICONS } from "constants/constants";

/**
 * Returns true if the provided string matches one of the DESKTOP_ICONS values.
 * Comparison is case-insensitive.
 */
export function isValidDesktopIcon(name: string): boolean {
  if (!name) return false;
  const lower = name.toLowerCase().trim();
  return Object.values(DESKTOP_ICONS).some((v) => v.toLowerCase() === lower);
}

/**
 * Compares two strings ignoring case and leading/trailing whitespace.
 */
export function equalsIgnoreCase(a: string, b: string): boolean {
  return a.trim().toLowerCase() === b.trim().toLowerCase();
}
