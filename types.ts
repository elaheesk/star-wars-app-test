export interface IMovie {
    title: string;
    episode_id: number;
    release_date: string;
    characters: string[]; // Array of URLs pointing to character details
    opening_crawl: string;
}

export interface ICharacter {
    name: string;
    url: string;
}

export interface IFetchMoviesResult {
    movies: IMovie[];
    charactersByMovie: Record<number, string[]>; // Map of episode_id to character names
}
