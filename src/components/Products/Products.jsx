import Card from "../Card/Card";
import ProductDetails from "../ProductDetails/ProductDetails";

import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../utils/getData";

export default function Products({ data }) {
	const { isLoading } = useQuery({
		queryKey: ["products"],
		queryFn: () => getData("products"),
	});

	return (
		<>
			<div className="border my-5 rounded overflow-hidden grid xl:grid-cols-3 md:grid-cols-2">
				{isLoading && <Loading />}
				{data &&
					data.map((item) => {

						return (
							<Card
								createdAt={item?.createdAt}
								img={item?.imageCover}
								price={item?.price}
								quantity={item?.quantity}
								ratingsAverage={item?.ratingsAverage}
								ratingsQuantity={item?.ratingsQuantity}
								key={item?.id}
								title={item?.title.split(" ").slice(0, 3).join(" ") + "..."}
								description={item?.description}
								id={item?.id}
							/>
						);
					})}
			</div>
			<ProductDetails />
		</>
	);
}
