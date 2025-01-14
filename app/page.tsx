'use client';

import React, { useState, useEffect } from "react";
import { fetchMovies } from "../utils/fetchMovies";
import MovieGrid from "./components/MovieGrid";
import CharacterList from "./components/CharacterList";
import Loading from "./components/Loading";
import { IMovie } from "../types";
import "./styles/globals.css";

export default function Home() {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const { movies } = await fetchMovies();
                setMovies(movies);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            } finally {
                setLoading(false);
            }
        };
        loadMovies();
    }, []);

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
                    <MovieGrid movies={movies} onMovieClick={setSelectedMovie} />
                    {selectedMovie && (
                        <CharacterList movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
                    )}
                </div>
            ) : (
                <div className="desktop-layout">
                    {selectedMovie ? (
                        <CharacterList movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
                    ) : (
                        <MovieGrid movies={movies} onMovieClick={setSelectedMovie} />
                    )}
                </div>
            )}
        </section>
    );
}
