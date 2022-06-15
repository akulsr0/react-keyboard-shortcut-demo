import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [componentsColor, setComponentColor] = React.useState({
    A: 'red',
    B: 'red',
    C: 'red',
  });

  return (
    <AppContext.Provider
      value={{
        componentsColor,
        setComponentColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
