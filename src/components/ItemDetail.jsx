import React, { useEffect, useState } from "react";
import config from "../config";
import "./ItemDetail.css";

function ItemDetail({ match }) {
	const [item, setItem] = useState([]);
	const [isLoaded, setLoaded] = useState(false);

	useEffect(() => {
		fetchItem();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchItem = async () => {
		const data = await fetch(
			`https://api.unsplash.com/photos/${match.params.id}/?client_id=${config.accessKey}`
		);
		const itemData = await data.json();
		setItem(itemData);
		if (item) {
			setLoaded(true);
		}
	};

	return (
		<div className="itemDetail">
			<h2>{item.alt_description}</h2>
			{isLoaded && <img src={item.urls.small} alt={item.alt_description} />}
			{/* <img src={item.urls.small} alt={item.alt_description} /> */}
		</div>
	);
}

export default ItemDetail;
