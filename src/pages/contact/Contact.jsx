import "./contact.css";

export default function Contact() {
	return (
		<div className="contact">
			<h2>CONTACT</h2>
			<form>
				<label>Nome:</label><br/>
				<input type="text" required /><br/><br/>
				<label>Email:</label><br/>
				<input type="email" required /><br/><br/>
				<label>Mensagem:</label><br/><br/>
				<textarea required></textarea><br/><br/>

				<button>Enviar</button>
			</form>
		</div>
	)
}