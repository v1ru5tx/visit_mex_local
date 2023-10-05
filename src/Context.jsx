import { useState, createContext } from 'react';

const Context = createContext(null);

const Provider = (props) => {
  const [isLanguage, setIsLanguage] = useState('ES');
  const selectedLanguage = (lang) => {
    setIsLanguage(lang)
  };

  const value = {
    isLanguage,
    selectedLanguage
  };
  
  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
};

export {
  Provider,
  Context
};