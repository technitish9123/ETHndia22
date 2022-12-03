import React from "react";

type Props = {
  children: React.ReactNode;
};

export const GlobalContext = React.createContext<any>({
  addressModalOpen: false,
  setAddressModalOpen: (val: boolean) => {},
  scanQrModalOpen: false,
  setScanQrModalOpen: (val: boolean) => {},
});

const GlobalContextProvider = (props: Props) => {
  const [addressModalOpen, setAddressModalOpen] =
    React.useState<boolean>(false);
  const [scanQrModalOpen, setScanQrModalOpen] = React.useState<boolean>(false);
  return (
    <GlobalContext.Provider
      value={{
        addressModalOpen,
        setAddressModalOpen,
        scanQrModalOpen,
        setScanQrModalOpen,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
