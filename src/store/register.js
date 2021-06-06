/** @format */

import { atom } from 'jotai';

const registeredEmail = atom('');

export const registeredAtom = atom((get) => get(registeredEmail));

export const setRegisteredEmail = atom(null, (get, set, email) => {
  set(registeredEmail, email);
});

export const removeRegisteredEmail = atom(null, (get, set) => {
  set(registeredEmail, '');
});
