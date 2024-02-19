declare type Value<T> = T | null;
declare const useReadLocalStorage: <T>(key: string) => T;
export default useReadLocalStorage;
