import { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import StarSvg from "../ٍStarSvg/StarSvg";
import Button from "../Button/Button";

const fetchData = async () => {
	const res = await fetch(
		"https://ecommerce.routemisr.com/api/v1/products?page=3&limit=10"
	);
	const data = await res.json();

	console.log(data.data);
};
fetchData();

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
	const [heartClasses, setHeartClasses] = useState("text-rose-300");
	const [isFavourite, setIsFavourite] = useState(false);
	// const ratingStars = [];
	// const ratingNums = [];
	// let ratingFloats;
	// const ratingAverageToString = ratingAverage.toString();
	// let ratingAverageSplitted;

	// if (ratingAverageToString.includes(".")) {
	// 	ratingAverageSplitted = ratingAverageToString.split(".");
	// 	[...Array(+ratingAverageSplitted[0])].forEach((_, i) => {
	// 		ratingNums.push(i + 1);
	// 	});
	// 	ratingFloats = +("." + ratingAverageSplitted[1]);
	// }

	// [...Array(+ratingAverageSplitted[0])].forEach((_, i, arr) => {
	// 	if (arr.length <= 5) {
	// 		ratingStars.push(
	// 			<FaStar
	// 				className="text-yellow-200"
	// 				key={i}
	// 			/>
	// 		);
	// 	}

	// 	if (
	// 		i + 1 < 5 &&
	// 		i + 1 === arr.length &&
	// 		i + 1 !== 5 &&
	// 		ratingFloats === undefined
	// 	) {
	// 		ratingStars.push(
	// 			...[...Array(5 - (i + 1))].map((_, i) => (
	// 				<FaStar
	// 					key={i + "c"}
	// 					className="text-gray-200"
	// 				/>
	// 			))
	// 		);
	// 	}
	// 	if (
	// 		i + 1 < 5 &&
	// 		i + 1 === arr.length &&
	// 		i + 1 !== 5 &&
	// 		ratingFloats !== undefined
	// 	) {
	// 		ratingStars.push(
	// 			...[...Array(5 - (i + 1))].map((_, i) => (

	// 					<FaStar
	// 						key={i + "c"}
	// 						className={`text-gray-200 `}
	// 						// relative after:absolute w-[${
	// 						// ratingFloats * 100}%] h-[${ratingFloats * 100}%]
	// 						// after:bg-yello-200
	// 					/>

	// 			))
	// 		);
	// 	}
	// });

	// Helper function to render stars
	// Helper function to render stars using the PartialStar component
	const renderStarsWithGradient = (averageRating) => {
		const totalStars = 5;
		const stars = [];

		for (let i = 1; i <= totalStars; i++) {
			let fillPercentage = 0;
			if (averageRating >= i) {
				// Full star
				fillPercentage = 100;
			} else if (averageRating > i - 1 && averageRating < i) {
				// Partial star
				fillPercentage = (averageRating - (i - 1)) * 100;
			}
			// If averageRating is less than i - 1, fillPercentage remains 0 (empty star)

			stars.push(
				<StarSvg
					key={`star-${i}`}
					fillPercentage={fillPercentage}
					size={20} 
					filledColor="#FACC15" 
					emptyColor="#D1D5DB" 
				/>
			);
		}
		return stars;
	};

	return (
		<>
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
						{/* {ratingStars.map((star) => star)} */}
						{renderStarsWithGradient(ratingAverage)}{" "}
						{/* Use the new helper */}
					</div>
					<FaHeart
						onMouseDown={() => {
							setIsFavourite((prevFavourite) =>
								!prevFavourite ? true : false
							);
							setHeartClasses(
								`hover:scale-75 ${
									!isFavourite ? "text-rose-500" : "text-rose-300"
								}`
							);
						}}
						onMouseUp={() =>
							setHeartClasses(
								`hover:scale-125 ${
									isFavourite ? "text-rose-500" : "text-rose-300"
								}`
							)
						}
						onMouseLeave={() =>
							setHeartClasses(
								`hover:scale-100 ${
									isFavourite ? "text-rose-500" : "text-rose-300"
								}`
							)
						}
						onMouseEnter={() =>
							setHeartClasses(
								`hover:scale-125 ${
									isFavourite ? "text-rose-500" : "text-rose-300"
								}`
							)
						}
						className={`text-2xl transition-all  hover:text-rose-500 ${heartClasses}`}
					/>
				</div>
				<p className="text-gray-400 mt-5"> creaeted at {createdAt}</p>
				<Button />
			</div>
		</>
	);
}
