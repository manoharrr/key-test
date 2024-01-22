import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;
 if (!isLoggedIn) return <Navigate to='/login' />;

 return isLoggedIn ? <>{children}</> : <></>
};

export default PrivateRoute;