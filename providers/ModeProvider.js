import React, { useState } from 'react';

export const ModeContext = React.createContext({
  themeToggler: () => {}
});

export const ModeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const themeToggler = (e) => {
    console.log(theme);
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return <ModeContext.Provider value={{ themeToggler, theme }}> {children}</ModeContext.Provider>;
};
