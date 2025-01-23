import "./styles/globals.css";
import MovieApp from "./components/MovieApp";
import { fetchMovies } from "../utils/fetchMovies";

export default async function Home() {
    const { movies } = await fetchMovies();
   
    return (
        <MovieApp
            movies={movies}
        />
    );
}