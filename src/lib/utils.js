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


export function formatDownload(downloads) {
  const newCount = downloads / 1000;
  if (!newCount) return downloads;
  if (downloads % 1000 === 0) {
    return `${newCount}k`
  }
  return `${newCount}k+`
}