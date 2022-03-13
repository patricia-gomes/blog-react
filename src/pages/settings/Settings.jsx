import "./settings.css";

export default function Settings() {
	return (
		<div className="settings">
			<h2>Atualizar sua conta</h2>

			<div className="perfil">
				<img src="https://i.pinimg.com/originals/4a/65/5f/4a655f4ed4cb412ce65862fd850deaab.jpg"
				className="imgPerfil" alt="Foto de perfil"/>
				<label htmlFor="fileInput">
					<i class="far fa-user"></i>
				</label>
			</div>
			<input type="file" id="fileInput" style={{ display: "none" }} />
			<div className="formPerfil">
				<form>
					<labe>Nome:</labe>
					<input type="text" name="name"/>
					<labe>Email:</labe>
					<input type="email" name="email"/>
					<label>Senha:</label>
					<input type="password" name="password"/>
					<button className="buttonUpdate">Alterar</button>
				</form>
			</div>
		</div>
	)
}