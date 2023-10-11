import MoviesGrid from "../components/MoviesGrid"
import homestyle from "../modules/Home.module.css"
function Home()
{
    return(
        <>
        <header>
                <h1 className = {homestyle.title}>Peliculas</h1>
                </header>
        <main>

        <MoviesGrid/>
                
        </main>
        </>
    );
}
export default Home