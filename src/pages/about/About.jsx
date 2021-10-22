import "./about.css";
import imgAbout from "../../korra2.jpg";

export default function About() {
	return (
		<div className="about">
			<img src={imgAbout} alt="Imagem da korra personagem principal de A lenda de Korra." />
			<div className="textAbout">
				<p>Lorem t is a long establisjhed fact that a reader will be distracted by the readable content of a page when 
					looking. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
					letters, as opposed to using 'Content here, content here'. Many desktop publishing packages and web page 
					editors now use Lorem Ipsum as their default model text, will uncover many web sites still in their infancy.</p>
				<p>Fact that a reader will be distracted by the readable content of a page when 
					looking. As opposed to using 'Content here, content here'. Many desktop publishing packages and web page 
					editors now use Lorem Ipsum as their default model text, will uncover many web sites still in their infancy.</p>
			</div>
		</div>
	)
}