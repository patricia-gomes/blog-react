import "./post.css";
import simple from "../../simple-wordpress.png";

export default function Post() {
	return (
		
		<div className="main">
			<div className="post">
				<img src={simple} />
				<h3>O titulo do post</h3>
				<div className="description-post">
					<p>Lorem t is a long establisjhed fact that a reader will be distracted by the readable content of a page when 
					looking. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
					letters, as opposed to using 'Content here, content here'. Many desktop publishing packages and web page 
					editors now use Lorem Ipsum as their default model text, will uncover many web sites still in their infancy.</p>
				</div>
			</div>
		</div>
	)
}