import React from "react";

import { Container } from "./styles";

type LayoutProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export function LayoutComponent({ children, style }: LayoutProps) {
  return <Container style={{ ...style }}>{children}</Container>;
}
