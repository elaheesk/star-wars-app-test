'use client';

import React from "react";
import { CharacterListProps } from "../../types";
import "../styles/characters.css";



const CharacterList: React.FC<CharacterListProps> = ({ movie, characters, onClose }) => {
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
    );;
};

export default CharacterList;

