import { IMovie, IFetchMoviesResult } from "../types";

export async function fetchMovies(): Promise<IFetchMoviesResult> {
    const res = await fetch("https://swapi.py4e.com/api/films/");
    if (!res.ok) {
        throw new Error(`Failed to fetch movies: ${res.statusText}`);
    }
    const data: { results: IMovie[] } = await res.json();

    const sortedMovies = data.results.sort(
        (a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
    );

    return { movies: sortedMovies  };
}
