import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const startYear = 2017
export const yoe = new Date().getFullYear() - startYear

export const formatDuration = (months: number) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  }

  if (remainingMonths === 0) {
    return `${years} yr${years > 1 ? "s" : ""}`;
  }

  return `${years} yr${years > 1 ? "s" : ""} ${remainingMonths} mo`;
};
