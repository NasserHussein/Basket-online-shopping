// components/PartialStar/PartialStar.jsx
import React from "react"; // Ensure React is imported for useId

const StarSvg = ({
	fillPercentage,
	size = 20,
	filledColor = "#FFCD00",
	emptyColor = "#D1D5DB",
}) => {
	// Ensure fillPercentage is between 0 and 100 for the SVG offset
	const normalizedFill = Math.max(0, Math.min(100, fillPercentage));
	const gradientId = React.useId();

	return (
		<svg
			stroke="currentColor"
			strokeWidth={0}
			viewBox="0 0 576 512"
			className="inline-block"
			height={`${size}px`}
			width={`${size}px`}
			xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient
					id={gradientId}
					x1="0%"
					y1="0%"
					x2="100%"
					y2="0%">
					{/* Filled portion */}
					<stop
						offset={`${normalizedFill}%`}
						stopColor={filledColor}
					/>
					{/* Unfilled portion (starts at the same offset as the filled portion ends) */}
					<stop
						offset={`${normalizedFill}%`}
						stopColor={emptyColor}
					/>
				</linearGradient>
			</defs>

			<path
				d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
				fill={`url(#${gradientId})`}
			/>
		</svg>
	);
};

export default StarSvg;
