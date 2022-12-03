import React from "react";

type Props = {
  children: React.ReactNode;
};

interface GlobalContextType {
  selectedNFT: Array<[]>;
  setSelectedNFT: React.Dispatch<React.SetStateAction<[]>>;
}

export const GlobalContext = React.createContext<GlobalContextType>(
  {} as GlobalContextType
);

const GlobalContextProvider = (props: Props) => {
  const [selectedNFT, setSelectedNFT] = React.useState<[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        selectedNFT,
        setSelectedNFT,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
