import React from "react";

import { ModalProvider } from "./useModal";

type Props = {
  children: React.ReactNode;
};

const HooksProviders = ({ children }: Props) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default HooksProviders;
