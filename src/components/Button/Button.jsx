import { Link } from "react-router-dom";

export default function Button(props) {
	const { primary, children, shop } = props;
	let classes;

	if (primary) {
		classes = "w-full px-5 bg-[#FFCD00] text-sm hover:bg-yellow-500 text-black";
	} else {
		classes = "w-fit bg-teal-500 text-white text-lg px-6 hover:bg-teal-600 ";
	}

	return shop ? (
		<Link
			to="/products"
			type="button"
			className={`mt-4 block focus:outline-none font-medium rounded-full transition-all py-2 text-center me-2 mb-2 ${classes}`}>
			{children}
		</Link>
	) : (
		<button
			{...props}
			type="button"
			className={`mt-4 focus:outline-none font-medium rounded-full transition-all py-2 text-center me-2 mb-2 ${classes}`}>
			{children}
		</button>
	);
}
