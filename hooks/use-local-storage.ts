export const useLocalStorage = <T>() => {
  const get = (key: string): T | null => {
    if (typeof window === "undefined") return null;
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const set = (key: string, value: T) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = (key: string) => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
  };

  return { get, set, remove };
};
