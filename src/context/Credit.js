import { atom } from "jotai";

const storedCreditAtom = atom(localStorage.getItem("Credit") || 100000);

const creditAtomWithPersistence = atom(
  (get) => get(storedCreditAtom),
  (get, set, newCredit) => {
    set(storedCreditAtom, newCredit);
    localStorage.setItem("Credit", newCredit);
  },
);

export default creditAtomWithPersistence;
