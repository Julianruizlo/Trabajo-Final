import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';


function RequireAuth({ children}) {
   
    let usuarioCookie = Cookies.get('user');
    console.log("cookies:",usuarioCookie)
    if( usuarioCookie){
        usuarioCookie = JSON.parse(usuarioCookie)
        if (usuarioCookie.username==""){
            return <Navigate to="../signInPage"/>
        }
    } else {
        return <Navigate to="../signInPage"/>
        }
     
     return children;

}

export default RequireAuth;