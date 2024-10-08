export const getItemFromStorage = (
    item: string,
    window: Window & typeof globalThis
  ) => {
    if (
      typeof window !== 'undefined' &&
      typeof window.localStorage.getItem(item) === 'string'
    ) {
      return JSON.parse(window.localStorage.getItem(item) as string);
    }
  };