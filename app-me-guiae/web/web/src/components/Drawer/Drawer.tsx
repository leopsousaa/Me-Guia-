import React from "react";

import { DrawerContainer, Button, Thumbnail } from "./styles";

import { ContainedButton } from "../Buttons/Buttons";

type DrawerProps = {
  children: React.ReactNode;
};

export function DrawerComponent() {
  return (
    <DrawerContainer>
      <Thumbnail>MG</Thumbnail>
      <ContainedButton style={Button}>
        <strong>Painel</strong>
      </ContainedButton>
      <ContainedButton style={Button}>
        <strong>Rotas</strong>
      </ContainedButton>
      <ContainedButton style={Button}>
        <strong>Guias</strong>
      </ContainedButton>
    </DrawerContainer>
  );
}
