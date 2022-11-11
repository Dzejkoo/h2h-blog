import { fontSize } from './globalStyle';

const light = {
  body: '#fff',
  text: '#212529',
  blockBgc: '#d9d9d9',
  border: '#bfc0c0'
};

const dark = {
  body: '#212529',
  text: '#fff',
  blockBgc: '#343a40',
  border: '#495057'
};

const defaulTheme = {
  fontSize: {
    h1: fontSize(22, 28, 320, 1400),
    h2: fontSize(18, 25, 320, 1400),
    h3: fontSize(16, 19, 320, 1400),
    reguralText: fontSize(14, 16, 320, 1400),
    smallText: fontSize(12, 14, 320, 1400),
    smallestTex: fontSize(10, 12, 320, 1400)
  },
  colorRegural: {
    primaryColor: '#055645',
    primaryColorLight: '#32BCA3'
  }
};

export const lightTheme = { ...defaulTheme, ...light };
export const darkTheme = { ...defaulTheme, ...dark };
