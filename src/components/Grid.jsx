import Button from "./Button/Button";


export default function Grid({ img, children, classes, btn }) {
	return (
		<div
			style={{
				background: `url(${img}) no-repeat center/cover`,
			}}
			className={"rounded-lg mt-10 shadow-lg" + classes}>
			<div className="p-4 sm:p-6 space-y-3 md:space-y-5">
				{children}

				{btn && <Button shop>shop now</Button>}
				<br />
			</div>
		</div>
	);
}
