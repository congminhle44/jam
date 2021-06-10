/** @format */

import { atom } from 'jotai';

const defaultToken = localStorage.getItem('sid');

const userTokenAtom = atom(JSON.parse(defaultToken) || '');

export const derivedTokenAtom = atom((get) => get(userTokenAtom));

export const addNewTokenAtom = atom(null, (get, set, token) => {
  localStorage.setItem('sid', JSON.stringify(token));
  set(userTokenAtom, token);
});

export const removeTokenAtom = atom(null, (get, set) => {
  localStorage.removeItem('sid');
  set(userTokenAtom, '');
});
