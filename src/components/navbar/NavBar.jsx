import "./navbar.css";
import imgBanner from "../../full-banner.jpg";

export default function NavBar() {
	const user = true;
	return (
		<div className="bannerFull">
			<img src={imgBanner} />
		
			<h1>Blog ReactJS</h1>																								
		</div>																								
	)
}