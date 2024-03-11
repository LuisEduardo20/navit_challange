import { FriendData, IModalData } from "@/types/hooks/modal";
import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ModalContext = createContext({} as IModalData);

export const ModalProvider = ({ children }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [friendData, setFriendData] = useState<FriendData>({} as FriendData);

  const handleOpenModal = () => setModalVisible(true);

  const handleCloseModal = () => setModalVisible(false);

  const handleUpdateFriendData = (data: FriendData) => setFriendData(data);

  return (
    <ModalContext.Provider
      value={{
        friendData,
        modalVisible,
        handleOpenModal,
        handleCloseModal,
        handleUpdateFriendData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal precisa ser usado com um ModalProvider");
  }

  return context;
};
