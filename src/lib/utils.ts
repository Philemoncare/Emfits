import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (amount: number) => {
  return `₵${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const WHATSAPP_NUMBER = "233202706607"; // Updated to 0202706607 for Ghana
export const BUSINESS_LOCATION = "Takoradi, Ghana";
export const BUSINESS_EMAIL = "Emfitsenterprises@gmail.com";

export const FACEBOOK_URL = "https://www.facebook.com/share/1CqnXJd2Km/?mibextid=wwXIfr";
export const INSTAGRAM_URL = "https://www.instagram.com/emfitsenterprise?igsh=NGQ3dDduYm5zMWpl";

