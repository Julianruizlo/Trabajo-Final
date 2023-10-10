import {BrowserRouter as Router,Routes, Route} from"react-router-dom"
import Home from "../Pages/Home"
import Footer from "../components/Footer";
import NavScroll from "../components/Navbar";


function AppRouter() {
    return(
        <Router>
            <NavScroll/>
            <Routes>
                <Route path="" element={<Home/>}/>
                
            </Routes>
            <Footer/>    
        </Router>
    );
}
export default AppRouter;