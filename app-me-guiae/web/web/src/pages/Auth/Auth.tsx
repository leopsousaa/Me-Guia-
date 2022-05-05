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
            <Input id="name" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="username">Senha</Label>
            <Input id="username" />
          </Fieldset>
          <Flex css={{ marginTop: 20, justifyContent: "center" }}>
            <Button variant="green" onClick={() => alert("Entrar")}>
              Entrar
            </Button>
          </Flex>
        </TabsContent>

        <TabsContent value="tab2">
          <Text>Você deseja embarcar nessa nova aventura com o Me Guiê? </Text>
          <Fieldset>
            <Label htmlFor="currentPassword">E-mail</Label>
            <Input id="currentPassword" type="password" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="newPassword">Senha</Label>
            <Input id="newPassword" type="password" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="confirmPassword">Confirme sua senha</Label>
            <Input id="confirmPassword" type="password" />
          </Fieldset>
          <Flex css={{ marginTop: 20, justifyContent: "center" }}>
            <Button variant="green" onClick={() => alert("Entrar")}>
              Cadastrar
            </Button>
          </Flex>
        </TabsContent>
      </Tabs>
    </Box>
  );
};

export default AuthPage;
