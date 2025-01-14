import React, { useEffect, useState } from "react";
import { IMovie, ICharacter } from "../../types";
import "../styles/characters.css";
import '../styles/globals.css';

interface CharacterListProps {
    movie: IMovie;
    onClose: () => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ movie, onClose }) => {
    const [characters, setCharacters] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const characterPromises = movie.characters.map((url) =>
                    fetch(url).then((res) => res.json())
                );
                const characterData: ICharacter[] = await Promise.all(characterPromises);
                setCharacters(characterData.map((char) => char.name));
            } catch (error) {
                console.error("Failed to fetch characters:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [movie]);

    if (loading) {
        return <p>Loading characters...</p>;
    }

    return (
        <div className="character-container">
            <div className="character-list">
                <h1 className="movie-title">{movie.title}</h1>
                <button className="close-btn" onClick={onClose}>
                    Close
                </button>
            </div>
            <h2 className="characters-title" >Characters</h2>
            <div className="characters">
                {characters.map((name, index) => (
                    <div key={index} className="character">
                        {name}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CharacterList;
