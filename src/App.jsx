import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const routers =createBrowserRouter([{
  path: '',element:<Layout/>, children:[
    {index: true, element:<Home/>},
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
