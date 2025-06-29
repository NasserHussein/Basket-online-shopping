import { useEffect, useState } from "react";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/slices/productsSlice";
import axios from "axios";

export default function Home() {
	const [allProducts, setAllProducts] = useState([]);
	const [mixedProducts, setMixedProducts] = useState([]);

	const dispatch = useDispatch();
	const limitedProducts = useSelector((state) => state.products.products);

	// trying implement mixed fetch data from api ...

	useEffect(() => {
		if (limitedProducts) {
			const updatedProducts = limitedProducts.map((product) => allProducts.filter((item) => item.title !== product.title))[0];

			updatedProducts ? setMixedProducts(updatedProducts.slice(0, 4)) : setMixedProducts([]);
		}
	}, [limitedProducts, allProducts]);

	useEffect(() => {
		dispatch(getProduct(5));

		const allProductsData = async () => {
			try {
				const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
				setAllProducts(data.data);
			} catch (error) {
				console.error("Error fetching all products:", error);
			}
		};
		allProductsData();
	}, [dispatch]);

	return (
		<>
			<div className="container">
				<Products data={mixedProducts} />
			</div>
		</>
	);
}
