/** @format */

import { atom } from 'jotai';

const defaultLang = localStorage.getItem('lang');

export const langAtom = atom(defaultLang || 'en');

export const setLangAtom = atom(null, (get, set, lang) => {
  set(langAtom, lang);
  localStorage.setItem('lang', lang);
});
