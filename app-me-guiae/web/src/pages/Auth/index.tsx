import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hook/useAuth";

import googleIcon from "../../assets/images/google-icon.svg";

import "./styles.scss";

import { Button } from "../../components/Button";

export function Auth() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate("/painel");
  }

  return (
    <div id="page-auth">
      <aside>
        {/* <img
          src={illustration}
          alt="Ilustração simbolizando perguntas e respostas"
        /> */}
        <strong>A melhor forma de Guiar seus passos é com o Me Guiaê</strong>
        <p>Proporcione a melhor experiência aos turistas.</p>
      </aside>
      <main>
        <div className="main-content">
          {/* <img src={logo} alt="Letmeask" /> */}

          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIcon} alt="Logo do Google" />
            Entrar com o Google
          </button>

          <div className="separator">ou entre com </div>
          <form>
            <input type="text" name="" id="" placeholder="Digite seu e-mail" />

            <input
              type="password"
              name=""
              id=""
              placeholder="Digite sua senha"
            />
            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
