import React from "react";
import { IMovie } from "../../types";
import '../styles/globals.css';
import "../styles/movies.css";

interface MovieGridProps {
    movies: IMovie[];
    onMovieClick: (movie: IMovie) => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, onMovieClick }) => {
    return (
        <section className="movie-grid">
            {movies.map((movie) => (
                <div
                    key={movie.episode_id}
                    className="movie-card"
                    onClick={() => onMovieClick(movie)}
                >
                    <h4>{movie.title}</h4>
                    <p>{movie.release_date}</p>
                </div>
            ))}
        </section>
    );
};
export default MovieGrid;
