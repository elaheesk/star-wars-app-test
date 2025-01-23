'use client'
import { IActorMovies, IFilmsProps } from "../../types";
import FilmDescriptionCard from "./FilmDescriptionCard";


const Films = ({ actorMovies }: IFilmsProps) => {
    return (
        <>
            {actorMovies.map((movie: IActorMovies) =>
                <ul key={movie.title}>
                    <li>Title:  {movie.title}</li>
                    <FilmDescriptionCard filmDescription={movie.opening_crawl} id={movie.episode_id} />
                </ul>
            )}
        </>
    )
}
export default Films;