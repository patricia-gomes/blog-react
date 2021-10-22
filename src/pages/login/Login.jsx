import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
	return (
		<div className="login">
		<h2>LOGIN</h2>
			<form className="loginForm">
				<label>Email:</label>
				<input type="email" placeholder="email@gmail.com" required/>
				<label>Password:</label>
				<input type="password" placeholder="Senha" required/>
				<button className="loginButton">Login</button>
			</form>
			<button className="loginRegisterButton">
				<Link className="link" to="/register" >Registrar</Link>
			</button>
		</div>
	)
}