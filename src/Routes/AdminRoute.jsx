import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
import useActiveUser from "../hooks/useActiveUser";



const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isActiveUser] = useActiveUser(); 
   
    const [isAdmin, isAdminLoading] = useAdmin();
    console.log({user,isAdmin} );
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (isActiveUser && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

AdminRoute.propTypes = {
    children: PropTypes.node ,
}


export default AdminRoute;