"use client";

import { createContext } from "react";

type ToastType = "Success" | "Warning";
interface IContactContext {
  text: string;
  type: ToastType;
  isModal: boolean;
}

const defaultState = {
  text: "",
  type: "Success" as ToastType,
  isModal: false,
};

export const ContactContext = createContext<IContactContext>(defaultState);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContactContext.Provider value={defaultState}>
      {children}
    </ContactContext.Provider>
  );
};
