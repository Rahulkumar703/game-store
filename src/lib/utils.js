import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function trim(str, size = 20) {
  if (str.length > size) {
    return str.slice(0, size) + "...";
  } else return str;
}
