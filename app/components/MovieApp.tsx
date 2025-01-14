'use client';

import React, { useState, useEffect } from "react";
import MovieGrid from "./MovieGrid";
import CharacterList from "./CharacterList";
import { IMovie } from "../../types";
import Loading from "./Loading";

interface MovieAppProps {
    movies: IMovie[];
    charactersByMovie: Record<number, string[]>;
}

const MovieApp: React.FC<MovieAppProps> = ({ movies, charactersByMovie }) => {
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1140);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMovieClick = (movie: IMovie) => {
        setLoading(true);
        setTimeout(() => {                       //adding setTimeout is not needed and can be removed, but it gives an artificial delay for a smoother transition
            setSelectedMovie(movie);
            setLoading(false);
        }, 300);
    };


    if (loading) {
        return <Loading />;
    }
    return (
        <section className={`app-container ${isMobile ? 'mobile' : 'desktop'}`}>
            {isMobile ? (
                <div className="mobile-layout">
                    <MovieGrid movies={movies} onMovieClick={setSelectedMovie} />
                    {selectedMovie && (
                        <CharacterList movie={selectedMovie} onClose={() => setSelectedMovie(null)} characters={charactersByMovie[selectedMovie.episode_id] || []} />
                    )}
                </div>
            ) : (
                <div className="desktop-layout">
                    {selectedMovie ? (
                        <CharacterList movie={selectedMovie} onClose={() => setSelectedMovie(null)} characters={charactersByMovie[selectedMovie.episode_id] || []} />
                    ) : (
                        <MovieGrid movies={movies} onMovieClick={handleMovieClick} />
                    )}
                </div>
            )}
        </section>
    );
};

export default MovieApp;
