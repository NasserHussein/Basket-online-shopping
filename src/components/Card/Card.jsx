import { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";

export default function Card({
	ratingQuantity,
	price,
	img,
	title,
	description,
	createdAt,
	quantity,
	ratingAverage,
}) {
	const ratingAverageFormatted = Math.floor(ratingAverage);
	const [heartClasses, setHeartClasses] = useState("text-rose-300");
	const [isFavourite, setIsFavourite] = useState(false)
	const ratingStars = [];

	[...Array(ratingAverageFormatted)].forEach((_, i, arr) => {
		if (arr.length <= 5) {
			ratingStars.push(
				<FaStar
					className="text-yellow-200"
					key={i}
				/>
			);
		}

		if (i + 1 < 5 && i + 1 === arr.length && i + 1 !== 5) {
			ratingStars.push(
				...[...Array(5 - (i + 1))].map((_, i) => (
					<FaStar
						key={i + "c"}
						className="text-gray-200"
					/>
				))
			);
		}
	});
	
	return <>
		<div className="border-r  border-b relative p-5">
			<div className="flex justify-center items-center flex-col">
				<span className="bg-teal-500 px-3 py-1 text-white rounded-[4px] absolute top-3 left-3">
					{ratingQuantity}%
				</span>
				<span className="bg-red-500 px-3 py-1 text-white rounded-[4px] absolute top-3 right-3">
					${price}
				</span>
				<img
					src={img}
					alt={`${title} image`}
					loading="lazy"
					className="lg:w-44"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="font-semibold text-lg">{title}</h1>
				<p className="text-gray-300">{description}</p>
				{quantity > 1 && (
					<p className="text-[#00B853] font-semibold">
						{quantity} IN STOCK
					</p>
				)}
				{quantity < 1 && (
					<p className="text-red-400 font-semibold">OUT OF STOCK</p>
				)}
			</div>
			<div className="flex justify-between items-center">
				<div className="flex gap-[1px]">
					{ratingStars.map((star) => star)}
				</div>
				<FaHeart
					onMouseDown={() => {
						setIsFavourite((prevFavourite) =>
							!prevFavourite ? true : false
						);
						setHeartClasses(
							`hover:scale-75 ${
								!isFavourite
									? "text-rose-500"
									: "text-rose-300"
							}`
						);
					}}
					onMouseUp={() =>
						setHeartClasses(
							`hover:scale-125 ${
								isFavourite
									? "text-rose-500"
									: "text-rose-300"
							}`
						)
					}
					onMouseLeave={() =>
						setHeartClasses(
							`hover:scale-100 ${
								isFavourite
									? "text-rose-500"
									: "text-rose-300"
							}`
						)
					}
					onMouseEnter={() =>
						setHeartClasses(
							`hover:scale-125 ${
								isFavourite
									? "text-rose-500"
									: "text-rose-300"
							}`
						)
					}
					className={`text-2xl transition-all  hover:text-rose-500 ${heartClasses}`}
				/>
			</div>
			<p className="text-gray-400 mt-5"> creaeted at {createdAt}</p>
			<button
				type="button"
				className="text-black mt-4 w-full bg-[#FFCD00] hover:bg-yellow-500 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
				add to cart
			</button>
		</div>
	</>;
}
