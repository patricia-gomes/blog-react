import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
	return (
		<div className="register">
		<h2>REGISTER</h2>
			<form className="registerForm">
				<label>Email:</label>
				<input type="email" placeholder="email@gmail.com" required/>
				<label>Password:</label>
				<input type="password" placeholder="Senha" required/>
				<button className="registerButton">Register</button>
			</form>
			<button className="loginButton">
				<Link className="link" to="/login" >Login</Link>
			</button>
		</div>
	)
}