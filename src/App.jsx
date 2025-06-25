<<<<<<< tony-Card/Products
import Products from "./components/Products";
=======
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
>>>>>>> master

const routers =createBrowserRouter([{
  path: '',element:<Layout/>, children:[
    // {index: true, element:<Home/>},
  ]
}]);
function App() {
<<<<<<< tony-Card/Products
	return (
		<>
			<Products data={[...Array(5)]} />
		</>
	);
}

export default App;
=======
  return <>
  <RouterProvider router={routers}></RouterProvider>
  return <>
  </>
}

export default App
>>>>>>> master
