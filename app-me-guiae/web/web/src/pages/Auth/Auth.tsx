import React, { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { app } from "../../services/firebase";

import GoogleButton from "react-google-button";

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

const provider = new GoogleAuthProvider();

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth(app);

  function signUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Response:", res);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error", errorMessage);
      });
  }

  function signUpWithGoogle() {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log("Response:", res);
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential?.accessToken;
        const user = res.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error", errorMessage);
      });
  }

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
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Fieldset>
          <Flex css={{ marginTop: 20, justifyContent: "center" }}>
            <Button variant="green" onClick={() => console.log("Entrar")}>
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
            <Button variant="green" onClick={() => signUp()}>
              Cadastrar
            </Button>
          </Flex>
        </TabsContent>
      </Tabs>
      <Text variant="light">ou</Text>
      <GoogleButton
        onClick={() => signUpWithGoogle()}
        style={{ marginTop: 10 }}
        label="Entrar com o Google"
      />
    </Box>
  );
};

export default AuthPage;
