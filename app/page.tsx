import "./styles/globals.css";
import MovieApp from "./components/MovieApp";
import { fetchMovies } from "../utils/fetchMovies";

export default async function Home() {
    const { movies, charactersByMovie } = await fetchMovies(); // Server-side fetching

    return (
        <MovieApp
            movies={movies}
            charactersByMovie={charactersByMovie}
        />
    );
}