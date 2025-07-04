import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { getData } from "../../utils/getData";
import { Link, useParams } from "react-router-dom";

export default function Sidebar() {
	const { data, isLoading, isFetched } = useQuery({
		queryKey: ["categories"],
		queryFn: () => getData("categories"),
	});

	const { type } = useParams();
	let classes = "";

	return (
		<div className="border rounded">
			{isLoading && <Loading />}
			{isFetched && (
				<>
					{data &&
						data.map((cat) => {

							if (cat.name === type) {
								classes = "bg-gradient-to-r from-main to-teal-300";
							} else {
								classes = "bg-white";
							}
							return (
								<Link
									to={`/${cat.name}`}
									key={cat._id}
									className={`flex gap-3 md:gap-5  items-center cursor-pointer p-2 hover:bg-gradient-to-r from-main to-teal-300 text-[#3E445A] text-sm md:text-lg ${classes}`}>
									<img
										src={cat.image}
										alt={cat.name + " category image"}
										className="w-8 rounded-sm h-8"
									/>
									<span>{cat.name}</span>
								</Link>
							);
						})}
				</>
			)}
		</div>
	);
}
