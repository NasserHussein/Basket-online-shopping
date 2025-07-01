import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Checkout from './pages/Checkout';
import AboutUs from './components/About Us/AboutUs'
import Blog from './components/Blog/Blog'

if (!localStorage.getItem("addedProducts")) {
  localStorage.setItem("addedProducts", JSON.stringify([]));
}

const routers = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "AboutUs", element: <AboutUs /> },
    { path: "blog", element: <Blog /> },
  ]
}]);

function App() {
  return <>
    <Provider store={store}>
      <RouterProvider router={routers}></RouterProvider>
    </Provider>
  </>
}

export default App
