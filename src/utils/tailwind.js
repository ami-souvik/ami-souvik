import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
//https://ui.shadcn.com/docs/installation/manual#add-a-cn-helper
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}