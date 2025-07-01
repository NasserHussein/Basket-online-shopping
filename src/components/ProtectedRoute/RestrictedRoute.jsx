import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function RestrictedRoute({ children }) {

    let { token } = useSelector((store) => store.authReducer);
    if (!token) {
        return children;
    } else {
        return <Navigate to={"/"} />
    }
}