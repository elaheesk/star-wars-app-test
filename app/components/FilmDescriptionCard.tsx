'use client'

import { useState } from "react";
import { IFilmDesccriptionProps } from "../../types";

const FilmDescriptionCard = ({ filmDescription, id }: IFilmDesccriptionProps) => {
    const [toggleDescription, setToggleDescription] = useState({
        [id]: false
    })

    const handleToggle = () => {
        setToggleDescription({ [id]: !toggleDescription[id] })
    }
    return (
        <div>
            <button onClick={handleToggle}>{toggleDescription[id] ? "Hide description" : "See description"}</button>
            {toggleDescription[id] ? filmDescription : ""}
        </div>
    )
}
export default FilmDescriptionCard;