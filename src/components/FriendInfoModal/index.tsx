import React, { ReactNode } from "react";
import ReactModal from "react-modal";

import * as S from "./styles";
import { RightSideContent } from "@/components";

interface ModalProps {
  modalVisible: boolean;
  closeModal: () => void;
  children?: ReactNode;
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: "rgba(237, 237, 237, 0.75)",
    zIndex: 1000,
    backdropFilter: "blur(1px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    height: "85%",
  },
};

const Modal: React.FC<ModalProps> = ({ modalVisible, closeModal }) => {
  return (
    <ReactModal
      style={styles as never}
      isOpen={modalVisible}
      onRequestClose={closeModal}
    >
      <S.ModalBody>
        <RightSideContent />
      </S.ModalBody>
    </ReactModal>
  );
};

export default Modal;
