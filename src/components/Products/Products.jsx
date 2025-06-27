import Card from "../Card/Card";

export default function Products({ data }) {
	return (
		<>
			<div className="border my-5 rounded overflow-hidden grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
				{data.map(() => (
					<Card
						createdAt="25/11/2025"
						img="/img.png"
						price={data.price}
						quantity={data.quantity}
						ratingAverage={data.ratingAverage}
						ratingQuantity={data.ratingQuantity}
						key={data._id}
						title={data.title}
						description={data.description}
					/>
				))}
			</div>
		</>
	);
}
