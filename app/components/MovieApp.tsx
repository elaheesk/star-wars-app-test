'use client';

import React, { useState, useEffect } from "react";
import MovieGrid from "./MovieGrid";
import CharacterList from "./CharacterList";
import { IMovie, MovieAppProps } from "../../types";
import Loading from "./Loading";

const MovieApp: React.FC<MovieAppProps> = ({ movies}) => {
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
    const [characters, setCharacters] = useState <string[]>([]);
    const [loading, setLoading] = useState(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);


    const handleMovieClick = async (movie: IMovie) => {
        setLoading(true);
        const characterPromises = movie.characters.map((url) =>
            fetch(url).then((res) => res.json())
        );

        const fetchedCharacters = await Promise.all(characterPromises);
        const characterNames = fetchedCharacters.map((eachCharacter) => eachCharacter.name);
        setSelectedMovie(movie);
        setCharacters(characterNames);
        setLoading(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1140);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <section className={`app-container ${isMobile ? 'mobile' : 'desktop'}`}>
            {isMobile ? (
                <div className="mobile-layout">
                    <MovieGrid movies={movies} onMovieClick={handleMovieClick} />
                    {selectedMovie && (
                        <CharacterList movie={selectedMovie} onClose={() => setSelectedMovie(null)} characters={characters} />
                    )}
                </div>
            ) : (
                <div className="desktop-layout">
                    {selectedMovie ? (
                        <CharacterList movie={selectedMovie} onClose={() => setSelectedMovie(null)} characters={characters}  />
                    ) : (
                        <MovieGrid movies={movies} onMovieClick={handleMovieClick} />
                    )}
                </div>
            )}
        </section>
    );
};

export default MovieApp;
