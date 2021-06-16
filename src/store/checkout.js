/** @format */

import { atom } from 'jotai';

export const defaultCheckoutItems = atom([]);

export const derivedCheckoutItemsAtom = atom((get) =>
  get(defaultCheckoutItems)
);

export const addCheckoutItemsAtom = atom(null, (get, set, payload) => {
  return set(defaultCheckoutItems, payload);
});
