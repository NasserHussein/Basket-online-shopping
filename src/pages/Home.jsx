import Products from "../components/Products/Products";
import Loading from "../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import burger from "./../assets/burger.png";
import toast from "./../assets/toast.png";
import showcase from "./../assets/showcase.png";
import eggs from "./../assets/eggs.png";

import Pagination from "../components/Pagination/Pagination";
import Sidebar from "../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { getProducts } from "../redux/slices/productsSlice";
import Grid from "../components/Grid";

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	const { isLoading, products } = useSelector((state) => state.products);

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;

	const totalPages = Math.ceil(products.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentproducts = products.slice(startIndex, endIndex);
	return (
		<div className="container md:grid md:grid-cols-12 gap-10 py-8">
			<aside className="md:col-span-4">
				<Sidebar />

				<Grid
					btn
					img={burger}>
					<h1 className="text-white">Bacola Natural Foods</h1>
					<h2 className="font-light slate-500">Special Organic</h2>
					<h3 className="text-slate-800 font-bold text-2xl">Roats Burger</h3>
					<p className="text-slate-500 text-sm">only-from</p>
					<p className="text-red-600 font-semibold  text-2xl">$14.99</p>
				</Grid>
				<Grid
					btn
					img={toast}>
					<h1 className="text-slat-800 text-sm">Best bakery products</h1>
					<h2 className="font-light slate-500">Freshest products</h2>
					<h3 className="text-slate-800 font-bold text-2xl">every hour</h3>
					<p className="text-slate-500 text-sm">only-from</p>
					<p className="text-red-500 font-semibold text-2xl">$14.99</p>
				</Grid>
				<Grid
					btn
					img={eggs}>
					<h1 className="text-slat-800 text-sm">Best bakery products</h1>
					<h2 className="font-light slate-500">Freshest products</h2>
					<h3 className="text-slate-800 font-bold text-2xl">every hour</h3>
					<p className="text-slate-500 text-sm">only-from</p>
					<p className="text-red-500 font-semibold text-2xl">$14.99</p>
				</Grid>
			</aside>
			<main className="md:col-span-8">
				<Grid
					btn
					classes="mt-10 md:mt-0 h-[30rem] space-y-10"
					img={showcase}>
					<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
						<p className="text-[#202435] uppercase">exclusive offer </p>
						<p className="bg-gradient-to-r w-fit from-green-300 to-green-50 rounded-full ms-2 py-2 px-4 text-[#038E42]">
							-20% off
						</p>
					</div>
					<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
						Specialist in the <br /> grocery store
					</h1>
					<p className="text-slate-500 text-lg">Only this week. Don’t miss...</p>
					<p>
						from <span className="text-[#D51243] text-4xl font-semibold ">$7.99</span>
					</p>
				</Grid>
				{isLoading ? (
					<Loading />
				) : (
					<>
						<Products data={currentproducts} />
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={(page) => setCurrentPage(page)}
						/>
					</>
				)}
			</main>
		</div>
	);
}
