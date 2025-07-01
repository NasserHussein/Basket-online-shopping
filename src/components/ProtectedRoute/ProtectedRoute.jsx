import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
    let { token } = useSelector((store)=>store.authReducer);
    if (token) {
        return children;
    } else {
        return <Navigate to={"/sign-in"} />
    }

}