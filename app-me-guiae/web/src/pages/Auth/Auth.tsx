import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hook/useAuth";

import googleIcon from "../../assets/images/google-icon.svg";
import banner from "../../assets/images/banner.svg";

import "./styles.scss";

import { Button } from "../../components/Button";
import { FormEvent, useState } from "react";

export function Auth() {
  const navigate = useNavigate();
  const { user, signInWithGoogle, signInWithEmailPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleCreateUser() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/painel");
  }

  async function handleSignInEmailAndPass(event: FormEvent) {
    event.preventDefault();

    if (!user) {
      await signInWithEmailPassword(email, password);
    }

    navigate("/painel");
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={banner} alt="Ilustração simbolizando viagem" />
        <strong>A melhor forma de Guiar seus passos é com o Me Guiaê</strong>
        <p>Proporcione a melhor experiência aos turistas.</p>
      </aside>
      <main>
        <div className="main-content">
          <button className="create-user" onClick={handleCreateUser}>
            <img src={googleIcon} alt="Logo do Google" />
            Entrar com o Google
          </button>

          <div className="separator">ou entre com </div>
          <form onSubmit={handleSignInEmailAndPass}>
            <input
              type="text"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />

            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
