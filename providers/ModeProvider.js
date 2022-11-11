import React, { useState, useEffect } from 'react';

export const ModeContext = React.createContext({
  themeToggler: () => {}
});

export const ModeProvider = ({ children }) => {
  let storage;
  if (typeof window !== 'undefined') {
    storage = window.localStorage.getItem('toggle-switch') === 'true';
  }

  const [checked, setChecked] = useState(storage);
  const [theme, setTheme] = useState('light');
  const themeToggler = (e) => {
    window.localStorage.setItem('toggle-switch', `${e.target.checked}`);
    setChecked(e.target.checked);
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      //set previous theme
      setTheme(localTheme);
    } else {
      //set basic theme
      setTheme('light');
      //save basic theme
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <ModeContext.Provider value={{ themeToggler, theme, checked }}>
      {' '}
      {children}
    </ModeContext.Provider>
  );
};
