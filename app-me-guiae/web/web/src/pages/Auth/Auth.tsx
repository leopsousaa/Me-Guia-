import React from "react";

import {
  Box,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Text,
  Fieldset,
  Label,
  Input,
  Flex,
  Button,
} from "./styles";

const AuthPage: React.FC = () => {
  return (
    <Box>
      <Tabs defaultValue="tab1">
        <TabsList aria-label="Manage your account">
          <TabsTrigger value="tab1">Entrar</TabsTrigger>
          <TabsTrigger value="tab2">Cadastrar</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Text>Bora... mais um tour te aguarda...</Text>
          <Fieldset>
            <Label htmlFor="name">E-mail</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="username">Senha</Label>
            <Input id="username" defaultValue="@peduarte" />
          </Fieldset>
          <Flex css={{ marginTop: 20, justifyContent: "flex-end" }}>
            <Button variant="green">Save changes</Button>
          </Flex>
        </TabsContent>
        <TabsContent value="tab2">
          <Text>Você deseja embarcar nessa nova aventura com o Me Guiê? </Text>
          <Fieldset>
            <Label htmlFor="currentPassword">Current password</Label>
            <Input id="currentPassword" type="password" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="newPassword">New password</Label>
            <Input id="newPassword" type="password" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input id="confirmPassword" type="password" />
          </Fieldset>
          <Flex css={{ marginTop: 20, justifyContent: "flex-end" }}>
            <Button variant="green">Change password</Button>
          </Flex>
        </TabsContent>
      </Tabs>
    </Box>
  );
};

export default AuthPage;
