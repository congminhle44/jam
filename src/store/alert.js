/** @format */

import { atom } from 'jotai';

export const alertAtom = atom([]);

export const derivedAlertAtom = atom((get) => get(alertAtom));

export const showAlertAtom = atom(null, (get, set, payload) => {
  const currentStack = get(alertAtom);
  const { component, props } = payload;

  return set(alertAtom, [
    ...currentStack,
    {
      id: Date.now(),
      component,
      props,
      isOpen: true,
    },
  ]);
});

export const closeAlertAtom = atom(null, (get, set, alertID) => {
  const currentStack = get(alertAtom);

  set(
    alertAtom,
    currentStack.filter((alert) => alert.id !== alertID)
  );
});
