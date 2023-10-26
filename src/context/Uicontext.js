import { createContext, useContext, useState } from "react";

const UiContext = createContext();

const UiProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <UiContext.Provider
      value={{
        darkMode,
        setDarkMode,
        openBackDrop,
        setOpenBackDrop,
        openSidebar,
        setOpenSidebar,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

const useUI = () => {
  const context = useContext(UiContext);
  if (!context) throw new Error("context must be used in the provider");
  return context;
};

export { UiProvider, useUI };
