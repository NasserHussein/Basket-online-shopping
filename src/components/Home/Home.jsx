import React from "react";
import Products from "../Products/Products";

export default function Home() {
	return (
		<>
			<div className="container">
				<Products data={[...Array(6)]} />
			</div>
		</>
	);
}
