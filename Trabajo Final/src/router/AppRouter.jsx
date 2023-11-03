import {BrowserRouter as Router,Routes, Route, Link,Navigate} from"react-router-dom"
import Home from "../Pages/Home"
import Footer from "../components/Footer";
import NavScroll from "../components/Navbar";
import SignInPage from "../Pages/SignIn";
import RequireAuth from "./RequireAuth";
import { MovieDetails } from "../Pages/MovieDetails";
import { LandingPage } from "../Pages/LandingPage";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../Pages/ErrorPage"





function AppRouter() {
    return(
        <Router>
            <NavScroll/>
            <Routes>
                <Route path="SignInPage" element={<SignInPage />}/>
                <Route path="SignUp" element={<SignUp />}/>
                <Route path="/"element={<RequireAuth  children ={<Home/>}  />}/>
                <Route exact path="/movie" element={<RequireAuth  children ={<LandingPage/>}  />} />
                <Route exact path="/movies/:movieId" element={<RequireAuth  children ={<MovieDetails/>}  />}/>
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
            <Footer/>
            
        </Router>
    );
}
export default AppRouter;