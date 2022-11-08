import { fontSize } from './globalStyle';

const light = {
  body: '#fff',
  text: '#000'
};

const dark = {
  body: '#000',
  text: '#fff'
};

const defaulTheme = {
  fontSize: {
    h1: fontSize(22, 28, 320, 1400),
    h2: fontSize(18, 25, 320, 1400),
    h3: fontSize(16, 19, 320, 1400),
    reguralText: fontSize(14, 16, 320, 1400),
    smallText: fontSize(12, 14, 320, 1400)
  }
};

export const lightTheme = { ...defaulTheme, ...light };
export const darkTheme = { ...defaulTheme, ...dark };
