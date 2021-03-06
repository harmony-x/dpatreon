import { months } from "./data";

export const formatDate = (ISO: string) => {
  const date = new Date(ISO);
  const month = date.getMonth() + 1;
  const hour = new Date(ISO).getHours() + 1;
  const minutes = new Date(ISO).getMinutes();
  return `${months[month - 1]} AT ${hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }${hour >= 0 && hour <= 11 ? "AM" : "PM"}`;
};

export const setLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};
