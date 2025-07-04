import { useSelector } from "react-redux";
import Card from "../Card/Card";
import ProductDetails from "../ProductDetails/ProductDetails";

// const dateOptions = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: true };

export default function Products({ data }) {
	// const isIdle = useSelector((state) => state.cart.loading === "idle");
	// const isLoading = useSelector((state) => state.cart.loading === "pending");
	// const isSuccess = useSelector((state) => state.cart.loading === "succeeded");
	// const isError = useSelector((state) => state.cart.loading === "failed");


	return (
		<>
				{/* // the starter Component before trying loading data replace the folowing component with starting UI */}
			{/* {isIdle  && ( */}

				<div className="border my-5 rounded overflow-hidden grid xl:grid-cols-3 md:grid-cols-2">
					{data.map((item) => (
						<Card
							createdAt={item?.createdAt}
							img={item?.imageCover}
							price={item?.price}
							quantity={item?.quantity}
							ratingsAverage={item?.ratingsAverage}
							ratingsQuantity={item?.ratingsQuantity}
							key={item?.id}
							title={item?.title.split(" ").slice(0, 3).join(" ") + '...'}
							description={item?.description}
							id={item?.id}
						/>
					))}
				</div>
			{/* )} */}

			{/* {
				isLoading

				// loading spinner for fetching data
			} */}

			{/* {isSuccess && (
				<div className="border my-5 rounded overflow-hidden grid xl:grid-cols-3 md:grid-cols-2">
					{data.map((item) => (
						<Card
							createdAt={item?.createdAt}
							img={item?.imageCover}
							price={item?.price}
							quantity={item?.quantity}
							ratingsAverage={item?.ratingsAverage}
							ratingsQuantity={item?.ratingsQuantity}
							key={item?._id}
							title={item?.title.split(" ").slice(0, 3).join(" ") + '...'}
							description={item?.description}
							id={item?.id}
						/>
					))}
				</div>
			)}

			{
				isError
				// using error state with custom error component for render the title of problem with corseponding massage for this specific error
			} */}
			<ProductDetails/>
		</>
	);
}
