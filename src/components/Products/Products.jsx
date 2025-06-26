import Card from "../Card/Card";


export default function Products({ data }) {
	return <>
		<div className="border my-5 rounded overflow-hidden grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
			{data.map((_, i) => (
				<Card
					createdAt="25/11/2025"
					img="/img.png"
					price={25}
					quantity={5}
					ratingAverage={4.5}
					ratingQuantity={23.5}
					key={i}
					title="title of product!"
					description="this is description of product"
				/>
			))}
		</div>
	</>;
}
