import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function ProudectVerifyCodeRoute({ children }) {

    let { userVerifyCode } = useSelector((store)=>store.authReducer);
    if (userVerifyCode) {
        return children;
    } else {
        return <Navigate to={"/sign-in"} />
    }

}