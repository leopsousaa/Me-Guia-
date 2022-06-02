import React from "react";

import { LayoutComponent } from "../../components/Layout/Layout";
import DrawerComponent from "../../components/Drawer/Drawer";
import { List } from "../../components/List/List";
import { row } from "../../styles/globalStyles";

const HomePage: React.FC = () => {
  return (
    <LayoutComponent>
      <DrawerComponent />
      <List />
    </LayoutComponent>
  );
};

export default HomePage;
