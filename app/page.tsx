import "./styles/globals.css";
import MovieApp from "./components/MovieApp";
import { fetchMovies } from "../utils/fetchMovies";
import Link from 'next/link'

export default async function Home() {
    const { movies } = await fetchMovies();
   
    return (
        <>
       <Link href="/cars">Cars</Link>
           <Link href="/actors"> Actors</Link>
          
        <MovieApp
            movies={movies}
            />
        </>
    );
}