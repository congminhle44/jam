/** @format */

import { atom } from 'jotai';

export const modalAtom = atom([]);

export const derivedModalAtom = atom((get) => get(modalAtom));

export const showModalAtom = atom(null, (get, set, payload) => {
  const currentStack = get(modalAtom);
  const { component, props } = payload;

  return set(modalAtom, [
    ...currentStack,
    {
      id: Date.now(),
      component,
      props,
      isOpen: true,
    },
  ]);
});

export const closeModalAtom = atom(null, (get, set, alertID) => {
  const currentStack = get(modalAtom);

  set(
    modalAtom,
    currentStack.filter((alert) => alert.id !== alertID)
  );
});
