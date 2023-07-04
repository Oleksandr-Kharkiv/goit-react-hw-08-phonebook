import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/selectors";

const PrivateRoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // console.log(`PrivateRoute - !isLoggedIn: ${isLoggedIn}` );
    return !isLoggedIn ? <Navigate to={'/login'} /> : children;
}

export default PrivateRoute;
