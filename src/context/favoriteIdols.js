import { atom } from "jotai";

const atomWithLocalStorage = (key, initialValue) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(key);

    if (!item) return initialValue;
    return JSON.parse(item);
  };

  const baseAtom = atom(getInitialValue());

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;

      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    },
  );

  return derivedAtom;
};

const favoriteIdolsAtom = atomWithLocalStorage("FavoriteIdols", []);

export default favoriteIdolsAtom;
