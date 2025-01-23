export interface IMovie {
    title: string;
    episode_id: number;
    release_date: string;
    characters: string[];
    opening_crawl: string;
    planets: string[];
}

export interface ICharacter {
    name: string;
    url: string;
}

export interface IFetchMoviesResult {
    movies: IMovie[];
}
export interface IActorDetailsProps {
    allActors: IActor[];
}
export interface IActor {
    name: string;
    height: string;
    gender: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    films: string[];
}
export interface IActorMovies {
    title: string;
    episode_id: number;
    opening_crawl: string;
}
export interface IFilmsProps {
    actorMovies: IActorMovies[];
}
export interface IFilmDesccriptionProps {
    filmDescription: string;
    id: number;
}
export interface CharacterListProps {
    movie: IMovie;
    characters: string[];
    onClose: () => void;
}
export interface MovieGridProps {
    movies: IMovie[];
    onMovieClick: (movie: IMovie) => void;
}