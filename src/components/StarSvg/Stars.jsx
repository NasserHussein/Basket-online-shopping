import StarSvg from "./StarSvg";

export default function Stars({ averageRating }) {
	const renderStarsWithGradient = (averageRating) => {
		const totalStars = 5;
		const stars = [];

		for (let i = 1; i <= totalStars; i++) {
			let fillPercentage = 0;
			if (averageRating >= i) {
				// Full star
				fillPercentage = 100;
			} else if (averageRating > i - 1 && averageRating < i) {
				// Partial star
				fillPercentage = (averageRating - (i - 1)) * 100;
			}
			// If averageRating is less than i - 1, fillPercentage remains 0 (empty star)

			stars.push(
				<StarSvg
					key={`star-${i}`}
					fillPercentage={fillPercentage}
					size={20}
					filledColor="#FACC15"
					emptyColor="#D1D5DB"
				/>
			);
		}
		return stars;
	};

	return renderStarsWithGradient(averageRating);
}
