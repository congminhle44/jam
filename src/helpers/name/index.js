/** @format */

export const SlicedName = (name) => {
  const finalIndex = name.indexOf(' ');
  return name.slice(0, finalIndex);
};
