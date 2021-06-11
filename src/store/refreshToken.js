/** @format */

import { atom } from 'jotai';

const defaultRefreshToken = localStorage.getItem('rid');
const userRefreshTokenAtom = atom(JSON.parse(defaultRefreshToken) || '');

export const derivedRefreshTokenAtom = atom((get) => get(defaultRefreshToken));

export const addNewRefreshTokenAtom = atom(null, (get, set, refreshToken) => {
  localStorage.setItem('rid', JSON.stringify(refreshToken));
  set(userRefreshTokenAtom, refreshToken);
});

export const removeRefreshTokenAtom = atom(null, (get, set) => {
  localStorage.removeItem('rid');
  set(userRefreshTokenAtom, '');
});
