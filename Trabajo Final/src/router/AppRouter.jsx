import {BrowserRouter as Router,Routes, Route} from"react-router-dom"
import Home from "../pages/HomePage"
import Footer from "../components/Footer";
import NavbarComp from "../components/Navbar";

function AppRouter() {
    return(
        <Router>
            <NavbarComp/>
            <Routes>
                <Route path="" element={<Home/>}/>
                
            </Routes>
            <Footer/>    
        </Router>
    );
}
export default AppRouter;