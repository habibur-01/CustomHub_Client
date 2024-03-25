import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PuffLoader from "react-spinners/ClipLoader";
import PropTypes from 'prop-types'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)

    if (loading) {
        return (<PuffLoader></PuffLoader>)
    }

    if (user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to={"/signin"}></Navigate>
    )

    
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;