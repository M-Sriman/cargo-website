import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const local = localStorage.getItem(key);
      return local ? JSON.parse(local) : initialValue;
    } catch (err) {
      console.error("Error loading from localStorage", err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Error saving to localStorage", err);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
