import { useState } from "react";
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import { MenuItems } from "./MenuItems";
import "./header.css";

export default function NavBar() {
	const [menuList, setMenuList] = useState(false);
	const showHide = () => setMenuList(!menuList);

	return (
		<div>
			<nav className="navbar-items">
				<div className="navbar-logo">
					<img
						id="logo"
						src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618495596/Bright%20Flash/Bright-Flash-logo_vxoimo.png"
						alt="bright-flash-logo"
					/>
				</div>
				<div className="menu-icon" onClick={showHide}>
					{!menuList ? <GoIcons.GoThreeBars /> : <AiIcons.AiOutlineClose c />}
				</div>
				<div className="menu-list">
					<ul className={menuList ? "nav-menu active" : "nav-menu"}>
						{MenuItems.map((item, index) => {
							return (
								<li key={index}>
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</div>
	);
}
