import "./write.css";
import imgSetup from "../../setup.jpg";

export default function Write() {
	return (
		<div className="write">
			<img src={imgSetup} />
			<form className="formWrite">
				<label htmlFor="fileInput">
					<i class="fas fa-plus-circle"></i>
				</label>
				<div className="formWriteGroup">
					<input type="file" className="fileInput" id="fileInput" style={{ display: "none" }} required />
					<input type="text" placeholder="Título" className="writeTitle" autoFocus={true} required />
				</div>
				<div className="formWriteGroup">
					<textarea placeholder="Começe sua história..." type="text" className="writeInput writeText" required></textarea>
				</div>
				<button className="writeSubmit">Publicar</button>
			</form>
		</div>
	)
}