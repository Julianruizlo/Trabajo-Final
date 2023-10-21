import {BrowserRouter as Router,Routes, Route} from"react-router-dom"
import Home from "../Pages/Home"
import Footer from "../components/Footer";
import NavScroll from "../components/Navbar";
import SignInPage from "../Pages/SignIn";
import RequireAuth from "./RequireAuth";
import { MovieDetails } from "../Pages/MovieDetails";
import { LandingPage } from "../Pages/LandingPage";





function AppRouter() {
    return(
        <Router>
            <NavScroll/>
            <Routes>
                <Route path="" element={<SignInPage/>}/>
                <Route path="Home" element={<Home />} />
                <Route exact path="/movie" element={<LandingPage />}  />
                <Route exact path="/movie/:movieId" element={<MovieDetails/>}/>
                
            </Routes>
            <Footer/>    
        </Router>
    );
}
export default AppRouter;