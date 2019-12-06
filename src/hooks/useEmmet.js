import { createContext, useState, useCallback } from "react";

export const EmmetContext = createContext(null);

const useEmmet = initialValue => {
  const [emmet, setEmmet] = useState(initialValue);
  const setNewEmmet = useCallback(newEmmet => {
    setEmmet(newEmmet);
  }, []);

  return {
    emmet,
    setEmmet: setNewEmmet
  };
};

export default useEmmet;
