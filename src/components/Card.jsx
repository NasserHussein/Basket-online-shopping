import StarIcon from "./StarIcon";

export default function Card() {
	// ratingQuantity,
	// price,
	// img,
	// title,
	// createdAt,
	// quantity,
  // ratingAverage,
  
	return (
		<div className="border-r  border-b relative p-5">
			<div className=" flex justify-center items-center flex-col">
				<span className="bg-teal-500 px-3 py-1 text-white rounded-[4px] absolute top-3 left-3">
					22%
				</span>
				<span className="bg-red-500 px-3 py-1 text-white rounded-[4px] absolute top-3 right-3">
					$5.95
				</span>
				<img
					src="../../public/img.png"
					alt=""
					className="bg-blend-multiply w-44"
				/>
			</div>

			<h1 className="my-4 font-semibold text-lg">
				Lorem ipsum dolor sit amet.
			</h1>
			<p className="text-[#00B853] font-semibold mb-2">IN STOCK</p>
			{[...Array(5)].map(() => (
				<StarIcon />
			))}
			<p className="text-gray-400 mt-5"> creaeted at 22/11/2025</p>
			<button
				type="button"
				class="text-black mt-4 w-full bg-[#FFCD00] hover:bg-yellow-500 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
				add to cart
			</button>
		</div>
	);
}
