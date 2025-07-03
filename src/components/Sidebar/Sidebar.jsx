import { useEffect } from "react";
import Loading from "../Loading/Loading";

import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/thunk/cart/getCategories";

export default function Sidebar() {
	// const [categories, setCategories] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		// setIsLoading(true);
		// const fetchCategories = async () => {
		// 	const {
		// 		data: { data: categories },
		// 	} = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
		// 	setIsLoading(false);
		// 	setCategories(categories);
		// };
		// fetchCategories();

		dispatch(getCategories());
	}, []);
	const dispatch = useDispatch();
	const { data, isLoading } = useSelector((state) => state.categories);
	console.log('data: ', data);

	return (
		<>
			{isLoading && <Loading />}
			<div className="border rounded">
				{data &&
					data.map((cat) => (
						<li
							key={cat._id}
							className="flex gap-3 md:gap-5  items-center cursor-pointer p-2 hover:bg-gradient-to-r from-main to-teal-300 text-[#3E445A] text-sm md:text-lg">
							<img
								src={cat.image}
								alt={cat.name + " category image"}
								className="w-8 rounded-sm h-8"
							/>
							<span>{cat.name}</span>
						</li>
					))}
			</div>
		</>
	);
}
