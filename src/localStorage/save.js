export const saveState = (value, name) => {
    try {
      const serializedState = JSON.stringify(value);

      localStorage.setItem(name, serializedState);
    } catch {
      console.error("unexpected error");
    }
};