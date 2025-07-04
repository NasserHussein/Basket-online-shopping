import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Stars from "../StarSvg/Stars";
import { formatDateTime } from "../../utils/formatDate";
import { formatText } from "../../utils/formatText";
import { useDispatch, useSelector } from "react-redux";
import { clearProduct, getSpecificProduct, setShowModal } from "../../redux/slices/specificProductSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import toast from "react-hot-toast";
import { addToWishlist, removeItemFromWishlist } from "../../redux/slices/wishlistSlice";

export default function Card({ id, ratingsQuantity, price, img, title, description, createdAt, quantity, ratingsAverage }) {
	// const [heartClasses, setHeartClasses] = useState("text-rose-300");
	// const [isFavourite, setIsFavourite] = useState(false);
	const dispatch = useDispatch();
	const { token } = useSelector((store) => store.authReducer);
	const { loading, WishListArrID } = useSelector((store) => store.wishlistReducer);
	const formattedDescription = formatText("description", description);
	const formattedDate = formatDateTime(createdAt, {
		locale: "US-EG",
		dateStyle: "full",
		timeStyle: "short",
	});
	const formattedTitle = formatText("title", title);
	const handleProductClick = (id) => {
		dispatch(getSpecificProduct(id));
		dispatch(setShowModal(true));
		dispatch(clearProduct());
	};
	function handelAddToCart(e, id) {
		e.stopPropagation();
		if (token) {
			dispatch(addToCart(id));
		} else {
			toast.error('You must log in.');
		}
	};
	function handelAddToWishlist(id) {
		if (token) {
			dispatch(addToWishlist(id));
		} else {
			toast.error('You must log in.');
		}
	};
	function handelRemoveItemFromWishlist(id) {
		if (token) {
			dispatch(removeItemFromWishlist(id));
		} else {
			toast.error('You must log in.');
		}
	};
	return (
		<>
			<div className="border-r space-y-2 border-b relative p-5">
				<div className="flex justify-center items-center flex-col">
					<span className="bg-teal-500 px-3 py-1 text-white rounded-[4px] absolute top-3 left-3">
						{ratingsQuantity}%
					</span>
					<img
						onClick={() => {
							handleProductClick(id);
						}}
						src={img}
						alt={`${title} image`}
						loading="lazy"
						className="w-44 h-44 cursor-pointer"
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
						key={WishListArrID.includes(id)}
						onClick={(e) => { e.stopPropagation();
							 loading ? 
							 null : 
							 WishListArrID.includes(id) ?
							 handelRemoveItemFromWishlist(id) :
							 handelAddToWishlist(id)
							 }}
						// onMouseDown={() => {
						// 	 setIsFavourite((prevFavourite) => (!prevFavourite ? true : false));
						// 	setHeartClasses(`hover:scale-75 ${!isFavourite ? "text-rose-500" : "text-rose-300"}`);
						// }}
						// onMouseUp={() => setHeartClasses(`hover:scale-125 ${WishListArrID.includes(id) ? "text-rose-500" : "text-rose-300"}`)}
						// onMouseLeave={() => setHeartClasses(`hover:scale-100 ${WishListArrID.includes(id) ? "text-rose-500" : "text-rose-300"}`)}
						// onMouseEnter={() => setHeartClasses(`hover:scale-125 ${WishListArrID.includes(id) ? "text-rose-500" : "text-rose-300"}`)}
						className={`text-2xl ${loading && 'cursor-default'} transition-all hover:scale-125 hover:text-rose-500 ${WishListArrID.includes(id) ? 'text-rose-500' : 'text-rose-300'}`}
					/>
				</div>
				<p className="text-red-500 font-semibold">
					{priceAfterDiscount ? (
						<span className="line-through text-gray-300 font-normal">${priceAfterDiscount}</span>
					) : (
						""
					)}{" "}
					${price}
				</p>
				<p className="text-gray-400 text-sm mb-5"> Published on {formattedDate}</p>
				<Button primary>
					Add to cart
				</Button>
			</div>
		</>
	);
}
