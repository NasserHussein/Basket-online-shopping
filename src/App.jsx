import Products from "./components/Products";

function App() {
	return (
		<>
			<Products data={[...Array(5)]} />
		</>
	);
}

export default App;
