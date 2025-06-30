import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Button from "../Button/Button";
import Stars from "../StarSvg/Stars";
import { formatDateTime } from "../../utils/formatDate";
import { formatText } from "../../utils/formatText";
import { useDispatch } from "react-redux";
import { clearProduct, getSpecificProduct, setShowModal } from "../../redux/slices/specificProductSlice";


export default function Card({ id, ratingsQuantity, price, img, title, description, createdAt, quantity, ratingsAverage }) {
	const [heartClasses, setHeartClasses] = useState("text-rose-300");
	const [isFavourite, setIsFavourite] = useState(false);
	const dispatch = useDispatch();
	const formattedDescription = formatText("description", description);
	const formattedDate = formatDateTime(createdAt, { locale: "US-EG", dateStyle: "full", timeStyle: "short" });
	const formattedTitle = formatText("title", title);
	const handleProductClick = (id) => {
		dispatch(getSpecificProduct(id));
		dispatch(setShowModal(true));
		dispatch(clearProduct());
	  };
	return (
		<>
			<div className="border-r  border-b relative p-5 cursor-pointer" onClick={() => { handleProductClick(id) }}>
				<div className="flex justify-center items-center flex-col">
					<span className="bg-teal-500 px-3 py-1 text-white rounded-[4px] absolute top-3 left-3">{ratingsQuantity}%</span>
					<span className="bg-red-500 px-3 py-1 text-white rounded-[4px] absolute top-3 right-3">${price}</span>
					<img
						src={img}
						alt={`${title} image`}
						loading="lazy"
						className="lg:w-44"
					/>
				</div>
				<div className="flex flex-col gap-4">
					<h1 className="font-semibold text-lg">{formattedTitle}</h1>
					<p className="text-gray-300">{formattedDescription}</p>
					{quantity > 1 && <p className="text-[#00B853] font-semibold">{quantity} IN STOCK</p>}
					{quantity < 1 && <p className="text-red-400 font-semibold">OUT OF STOCK</p>}
				</div>
				<div className="flex justify-between items-center">
					<div className="flex gap-[1px]">
						<Stars averageRating={ratingsAverage} />
					</div>
					<FaHeart
						onMouseDown={() => {
							setIsFavourite((prevFavourite) => (!prevFavourite ? true : false));
							setHeartClasses(`hover:scale-75 ${!isFavourite ? "text-rose-500" : "text-rose-300"}`);
						}}
						onMouseUp={() => setHeartClasses(`hover:scale-125 ${isFavourite ? "text-rose-500" : "text-rose-300"}`)}
						onMouseLeave={() => setHeartClasses(`hover:scale-100 ${isFavourite ? "text-rose-500" : "text-rose-300"}`)}
						onMouseEnter={() => setHeartClasses(`hover:scale-125 ${isFavourite ? "text-rose-500" : "text-rose-300"}`)}
						className={`text-2xl transition-all  hover:text-rose-500 ${heartClasses}`}
					/>
				</div>
				<p className="text-gray-400 text-sm mt-5"> Published on {formattedDate}</p>
				<Button />
			</div>
		</>
	);
}
