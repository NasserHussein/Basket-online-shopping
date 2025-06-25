import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

const routers =createBrowserRouter([{
  path: '',element:<Layout/>, children:[
    {index: true, element:<Home/>},
  ]
}]);
function App() {
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}

export default App
