import React from "react";

import { Container } from "./styles";

type LayoutProps = {
  children?: React.ReactNode;
};

export function LayoutComponent({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}
