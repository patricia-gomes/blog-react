import "./login.css";

export default function Login() {
	return (
		<div className="login">
		<h2>LOGIN</h2>
			<form className="loginForm">
				<input type="email" placeholder="email@gmail.com" required/>
				<input type="password" placeholder="Senha" required/>
				<button className="loginButton">Login</button>
			</form>
		</div>
	)
}