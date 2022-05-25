import React from "react";

import { LayoutComponent } from "../../components/Layout/Layout";
import { DrawerComponent } from "../../components/Drawer/Drawer";

const HomePage: React.FC = () => {
  return (
    <LayoutComponent>
      <DrawerComponent>
        <strong>menu 1</strong>
      </DrawerComponent>
    </LayoutComponent>
  );
};

export default HomePage;
