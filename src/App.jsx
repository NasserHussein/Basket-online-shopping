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
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import ForgetPassword from './components/Auth/ForgetPassword/ForgetPassword';
import VerifyCode from './components/Auth/VerifyCode/VerifyCode';
import ResetPassword from './components/Auth/ResetPassword/ResetPassword';
import RestrictedRoute from './components/ProtectedRoute/RestrictedRoute';
import ProudectVerifyCodeRoute from './components/ProtectedRoute/ProudectVerifyCodeRoute';
import ProdectedResetPassword from './components/ProtectedRoute/ProdectedResetPassword';

if (!localStorage.getItem("addedProducts")) {
  localStorage.setItem("addedProducts", JSON.stringify([]));
}

const routers = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: "/sign-in", element: <RestrictedRoute><Login /></RestrictedRoute> },
    { path: "/sign-up", element: <RestrictedRoute><Register /></RestrictedRoute> },
    { path: "/forgot-password", element: <RestrictedRoute><ForgetPassword /></RestrictedRoute> },
    { path: "/verify-code", element: <RestrictedRoute><ProudectVerifyCodeRoute><VerifyCode /></ProudectVerifyCodeRoute></RestrictedRoute> },
    { path: "/reset-password", element: <RestrictedRoute><ProdectedResetPassword><ResetPassword /></ProdectedResetPassword></RestrictedRoute> },
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
