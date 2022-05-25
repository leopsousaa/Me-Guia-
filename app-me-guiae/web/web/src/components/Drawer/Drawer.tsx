import React from "react";

import { DrawerContainer } from "./styles";

type DrawerProps = {
  children: React.ReactNode;
};

export function DrawerComponent({ children }: DrawerProps) {
  return <DrawerContainer>{children}</DrawerContainer>;
}
