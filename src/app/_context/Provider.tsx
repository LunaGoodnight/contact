"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";

interface IModalType {
  modalType: string | null;
  setModalType: Dispatch<SetStateAction<string | null>>;
}

const iUserContextState = {
  modalType: null,
  setModalType: () => {},
};

export const ModalTypeContext = createContext<IModalType>(iUserContextState);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [modalType, setModalType] = useState<string | null>(null);
  const modalMemo = useMemo(
    () => ({ modalType, setModalType }),
    [modalType, setModalType],
  );
  return (
    <ModalTypeContext.Provider value={modalMemo}>
      {children}
    </ModalTypeContext.Provider>
  );
};
