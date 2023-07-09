"use client";

import { createContext, useContext, useState } from "react";

type ToastType = "Success" | "Warning";
interface IContactContext {
  text: string;
  type: ToastType;
}

const defaultState = {
  text: "",
  type: "Success" as ToastType,
};

export const ContactContext = createContext<IContactContext>(defaultState);
