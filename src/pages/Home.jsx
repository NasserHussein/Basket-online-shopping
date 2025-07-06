import Products from "../components/Products/Products";
import Loading from "../components/Loading/Loading";

import burger from "./../assets/burger.png";
import toast from "./../assets/toast.png";
import showcase from "./../assets/showcase.png";
import eggs from "./../assets/eggs.png";

import Pagination from "../components/Pagination/Pagination";
import Sidebar from "../components/Sidebar/Sidebar";

import Grid from "../components/Grid";
import { useParams } from "react-router-dom";
import { getData } from "../utils/getData";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

export default function Home() {
	const { type } = useParams();
	let { searchProducts } = useSelector((store) => store.searchReducer);

	const isType = type ? true : false;
	const requestType = isType ? type : "products";

	const { data: categoriesData, isFetched: isCategoriesFetched } = useQuery({
		queryKey: ["categories"],
		queryFn: () => getData("categories"),
	});

	const formattedCategoriesData =
		isCategoriesFetched &&
		categoriesData.map((cat) => ({
			name: cat.name,
			id: cat._id,
		}));

	const targetedCategorie =
		formattedCategoriesData && formattedCategoriesData.filter((cat) => cat.name === type);
	

	const { data, isLoading, isError, isFetched } = useQuery({
		queryKey: [requestType],
		queryFn: () => getData("products", isType ? targetedCategorie[0].id : ""),
	});
	
	
	
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	let totalPages, startIndex, endIndex, currentproducts;
	if (data) {
		totalPages = Math.ceil(data.length / itemsPerPage);
		startIndex = (currentPage - 1) * itemsPerPage;
		endIndex = startIndex + itemsPerPage;
		currentproducts = data.slice(startIndex, endIndex);
	}

	return <>
		<Helmet>
			<title>Basket Online Shopping</title>
		</Helmet>
		<div className="container md:grid md:grid-cols-12 gap-10 py-8">
			<aside className="md:col-span-4">
				<Sidebar />

				<Grid
					shopBtn
					img={burger}>
					<h1 className="text-white">Bacola Natural Foods</h1>
					<h2 className="font-light slate-500">Special Organic</h2>
					<h3 className="text-slate-800 font-bold text-2xl">Roats Burger</h3>
					<p className="text-slate-500 text-sm">only-from</p>
					<p className="text-red-600 font-semibold  text-2xl">$14.99</p>
				</Grid>
				<Grid
					shopBtn
					img={toast}>
					<h1 className="text-slat-800 text-sm">Best bakery products</h1>
					<h2 className="font-light slate-500">Freshest products</h2>
					<h3 className="text-slate-800 font-bold text-2xl">every hour</h3>
					<p className="text-slate-500 text-sm">only-from</p>
					<p className="text-red-500 font-semibold text-2xl">$14.99</p>
				</Grid>
				<Grid
					shopBtn
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
					shopBtn
					classes="mt-10 md:mt-0 h-[30rem] space-y-10"
					img={showcase}>
					<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
						<p className="text-[#202435] uppercase">exclusive offer </p>
						<p className="bg-gradient-to-r w-fit from-green-300 to-green-50 rounded-full ms-2 py-2 px-4 text-[#038E42]">
							-20% off
						</p>
					</div>
					<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
						Specialist in the <br /> {type ? type : "Basket"} shop
					</h1>
					<p className="text-slate-500 text-lg">Only this week. Don’t miss...</p>
					<p>
						from <span className="text-[#D51243] text-4xl font-semibold ">$7.99</span>
					</p>
				</Grid>

				{isLoading && <Loading />}
				{isFetched && 
					<>
					<Products data={searchProducts.search == "" ? currentproducts: data } />
						{searchProducts.search == ""  ?
						<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={(page) => setCurrentPage(page)} />: ""
					}
					</>
				}
				{isError || (data && data.length < 2) &&
					<div class="flex mt-5 items-center p-8 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
					<svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
						<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
					</svg>
					<span class="sr-only">error</span>
					<div>
						<span class="font-medium">Pay attention</span> there is no products for this category
					</div>
				</div>
				}
			</main>
		</div>
	</>
}
