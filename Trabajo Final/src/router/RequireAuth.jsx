import { Navigate } from "react-router-dom";


function RequireAuth({isLogged, children}) {
    
    if(!isLogged){
        return <Navigate to="../SignInPage" />
    }

    return children;
}

export default RequireAuth;