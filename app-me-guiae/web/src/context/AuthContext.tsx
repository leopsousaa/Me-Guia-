import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  signOut,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { app } from "../services/firebase";

type UserType = {
  id: string;
  name?: string;
  email: string;
  password?: string;
};

type AuthContextType = {
  user: UserType | undefined;
  signInWithGoogle: () => Promise<void>;
  signInWithEmailPassword: (email: string, password: string) => Promise<void>;
  SignOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const auth = getAuth(app);

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid } = user;

        if (!displayName || !email) {
          throw new Error("Missing information from Google Account");
        }

        setUser({
          id: uid,
          name: displayName,
          email: email,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { displayName, email, uid } = result.user;

      if (!displayName || !email) {
        throw new Error("Missing information from Google Account");
      }

      setUser({
        id: uid,
        name: displayName,
        email: email,
      });
    }
  }

  async function signInWithEmailPassword(email: string, password: string) {
    const result = await signInWithEmailAndPassword(auth, email, password);

    if (result.user) {
      if (!email || !password) {
        throw new Error("Missing information email and password");
      }

      setUser({
        id: result.user.uid,
        email: email,
        password: password,
      });
    } else {
      throw new Error("Error!");
    }
  }

  async function SignOut() {
    await signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, signInWithEmailPassword, SignOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
