import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/selectors";

const PublicRoute = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // console.log(`PublicRoute - isLoggedIn: ${isLoggedIn}`);
    return isLoggedIn ? <Navigate to={'/contacts'} /> : children;
}

export default PublicRoute;