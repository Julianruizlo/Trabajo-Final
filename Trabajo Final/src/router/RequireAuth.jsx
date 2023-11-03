import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';


function RequireAuth({ children}) {
   
    const usuarioCookie = Cookies.get('user');
    console.log("cookies:",usuarioCookie)
    if (!usuarioCookie) {
        return <Navigate to="../signInPage"/>
     }
     
     return children;

}

export default RequireAuth;