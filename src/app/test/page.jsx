"use client";

import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading from local storage ", error);
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing local storage ", error);
    }
  }, [key, value]);
  return [value, setValue];
}
function Test() {
  const [v, sv] = useLocalStorage("v", 0);
  return (
    <div className="w-11/12">
      <button onClick={() => sv(v + 1)}>increase</button>
      <br />
      <button onClick={() => sv(0)}>zero</button>
    </div>
  );
}

export default Test;
