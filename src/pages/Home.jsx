import { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import Loading from "../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/productsSlice";
import Pagination from "../components/Pagination/Pagination";

export default function Home() {
	const dispatch = useDispatch();
	const { products, isLoading } = useSelector((state) => state.products);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	const totalPages = Math.ceil(products.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentproducts = products.slice(startIndex, endIndex);
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div className="container">
					<Products data={currentproducts} />
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={(page) => setCurrentPage(page)}
					/>
				</div>
			)}
		</>
	);
}
