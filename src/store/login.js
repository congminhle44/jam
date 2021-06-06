/** @format */

import { atom } from 'jotai';

const defaultUser = localStorage.getItem('user');

const _user = atom(JSON.parse(defaultUser) || '');

export const userAtom = atom((get) => get(_user));

export const addUserInfoAtom = atom(null, (get, set, user) => {
  localStorage.setItem('user', JSON.stringify(user));
  set(_user, user);
});

export const removeUserInfoAtom = atom(null, (get, set) => {
  localStorage.removeItem('user');
  set(_user, '');
});
