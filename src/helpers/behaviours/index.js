export const disableScroll = () => {
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'hidden';
};

export const enableScroll = () => {
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';
};
