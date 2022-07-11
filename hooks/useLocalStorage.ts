import { getLocalStorage, setLocalStorage } from "$utils/function";
import { useEffect, useState } from "react";

const useLocalStorage = <G>(key: string): [G | null, (value: G) => void] => {
  const [storage, setStorage] = useState<G | null>(null);
  const setStateLocalStorage = (value: G) => {
    setLocalStorage<G>(key, value);
    setStorage(value);
  };
  useEffect(() => {
    setStorage(getLocalStorage<G>(key));
  }, [key]);

  return [storage, setStateLocalStorage];
};

export default useLocalStorage;
