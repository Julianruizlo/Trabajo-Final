import {BrowserRouter as Router,Routes, Route} from"react-router-dom"
import Home from "../Pages/Home"
import Footer from "../components/Footer";
import NavScroll from "../components/Navbar";
import SignInPage from "../Pages/SignIn";
import RequireAuth from "./RequireAuth";



function AppRouter() {
    return(
        <Router>
            
            <NavScroll/>
            <Routes>
                <Route path="SignInPage" element={<SignInPage/>}/>
                <Route path="" element={<RequireAuth isLogged={true} children={<Home />} /> }/>
                
                
            </Routes>
            <Footer/>    
        </Router>
    );
}
export default AppRouter;