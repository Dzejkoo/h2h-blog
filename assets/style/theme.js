const light = {
  body: '#fff',
  text: '#000'
};

const dark = {
  body: '#000',
  text: '#fff'
};

const defaulTheme = {};

export const lightTheme = { ...defaulTheme, ...light };
export const darkTheme = { ...defaulTheme, ...dark };
