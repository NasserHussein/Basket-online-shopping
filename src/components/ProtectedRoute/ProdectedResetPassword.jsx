import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProdectedResetPassword({ children }) {

    let { userResetPassword } = useSelector((store) => store.authReducer);

    if (userResetPassword) {
        return children;
    } else {
        return <Navigate to={"/sign-in"} />
    }
}