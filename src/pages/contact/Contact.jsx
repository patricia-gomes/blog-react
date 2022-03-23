import "./contact.css";

export default function Contact() {
	return (
		<div className="contact">
			<h2>CONTACT</h2>
			<form>
				<input type="text" placeholder="Nome" required /><br/><br/>
				<input type="email" placeholder="Email" required /><br/><br/>
				<textarea placeholder="Escreva sua mensagem..." required></textarea><br/><br/>

				<button>Enviar</button>
			</form>
		</div>
	)
}