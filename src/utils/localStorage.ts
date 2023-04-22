export const getLocalStorage = (): Storage | null => {
    if (typeof window === 'undefined') {
        return null;
      }
    return window.localStorage;
}

export const getLocalStorageItem = <T>(key: string): T | null => {
    const localStorage = getLocalStorage();
    if (localStorage){
        const res = localStorage.getItem(key);
        return res ? (JSON.parse(res) as T): null;
    }
    return null;
};

export const setLocalStorageItem = <T>(key: string, value: T):void => {
    const localStorage = getLocalStorage();
    if (localStorage){
        localStorage.setItem(key, JSON.stringify(value))
    }
};

export const removeLocalStorageItem = (key: string): void => {
    const localStorage = getLocalStorage();
    if (localStorage){
        localStorage.removeItem(key)
    }
};
