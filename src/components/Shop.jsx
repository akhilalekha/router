import React, { useState, useEffect } from "react";
import config from "../config";
import { Link } from "react-router-dom";
import "./Shop.css";

function Shop() {
	const td = {
		textDecorationColor: "rgb(148, 158, 177)",
		color: "rgb(148, 158, 177)"
	};

	const [items, setItems] = useState([]);

	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		const data = await fetch(
			`https://api.unsplash.com/photos/?client_id=${config.accessKey}`
		);
		const itemsData = await data.json();
		setItems(itemsData);
	};
	return (
		<div className="Shop">
			<h1>Shop Page</h1>
			{items.map((item) => (
				<h4 key={item.id}>
					<Link to={`/shop/${item.id}`} style={td}>
						{item.alt_description}
					</Link>
				</h4>
			))}
		</div>
	);
}

export default Shop;
