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

    const charactersByMovie: Record<number, string[]> = {};

    for (const movie of sortedMovies) {
        const characterPromises = movie.characters.map((url) =>
            fetch(url)
                .then((res) => res.json())
                .catch((err) => {
                    console.error(`Failed to fetch character from ${url}:`, err);
                    return { name: "Unknown" }; // Fallback for failed fetch
                })
        );

        const characterDetails = await Promise.all(characterPromises);
        charactersByMovie[movie.episode_id] = characterDetails.map(
            (char: { name: string }) => char.name
        );
    }

    return { movies: sortedMovies, charactersByMovie };
}
