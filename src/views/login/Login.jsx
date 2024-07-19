import "../../styles/Login.css";

function Login() {
  return (
    <div className="Login_main">
      <div className="left">
        <h1>Sistema de Invetario RoEs</h1>

        <h2>Usuario</h2>

        <input type="text" />
        <h3>Contraseña</h3>
        <input type="password" />
        <button className="Buton_Login"> Iniciar Sesion</button>
      </div>

      <div className="right"></div>
    </div>
  );
}

export default Login;
