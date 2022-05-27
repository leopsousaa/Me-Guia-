import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { DrawerContainer } from "./styles";

import { ContainedButton } from "../Buttons/Buttons";

type DrawerProps = {
  children: React.ReactNode;
};

export function DrawerComponent({ children }: DrawerProps) {
  return (
    <DrawerContainer>
      {/* <ContainedButton>
        <strong>teste</strong>
      </ContainedButton> */}

      <NavigationMenu.Root orientation="vertical">
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger />
            <NavigationMenu.Content>
              <NavigationMenu.Link />
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link />
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger />
            <NavigationMenu.Content>
              <NavigationMenu.Sub>
                <NavigationMenu.List />
                <NavigationMenu.Viewport />
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator />
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
    </DrawerContainer>
  );
}
