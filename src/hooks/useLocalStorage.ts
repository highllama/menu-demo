import localforage from "localforage";

const useLocalStorage = () => {
  const setItem = (key: string, value: any) => {
    localforage.setItem(key, value);
  };
  const getItem = async (key: string) => {
    const value = await localforage.getItem(key);
    return value;
  };
  return { setItem, getItem };
};

export default useLocalStorage;
