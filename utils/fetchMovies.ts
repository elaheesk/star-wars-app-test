import { IMovie, IFetchMoviesResult } from "../types";

export async function fetchMovies(): Promise<IFetchMoviesResult> {
    const res = await fetch("https://swapi.py4e.com/api/films/");
    const data: { results: IMovie[] } = await res.json();
    // Sort movies by release_date
    const sortedMovies = data.results.sort(
        (a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
    );

    const charactersByMovie: Record<number, string[]> = {};

    for (const movie of sortedMovies) {
        const characterPromises = movie.characters.map((url) =>
            fetch(url).then((res) => res.json())
        );

        const characterDetails = await Promise.all(characterPromises);
        charactersByMovie[movie.episode_id] = characterDetails.map(
            (char: { name: string }) => char.name
        );
    }

    return { movies: sortedMovies, charactersByMovie };
}
