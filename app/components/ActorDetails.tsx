'use client'

import React, { useState } from "react"
import Films from "./Films";
import { IActorDetailsProps, IActor, IActorMovies } from "../../types";

const ActorDetails = ({ allActors }: IActorDetailsProps) => {
    const [actorInfo, setActorInfo] = useState<IActor>();
    const [actorMovies, setActorMovies] = useState<IActorMovies[]>([])


    const displayActorDetails = async (actor: IActor) => {

        const result = allActors.find((actorr: IActor) => actorr.name === actor.name);
        setActorInfo(result)
        const moviesPromisses = result.films.map((filmUrl: string) => fetch(filmUrl).then((res) => res.json()));
        const allMovies = await Promise.all(moviesPromisses);

        setActorMovies(allMovies)

    }

    return (
        <section>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {allActors.map((actor: IActor) =>
                    <button onClick={() => displayActorDetails(actor)} key={actor.name} style={{ padding: "8px", margin: "8px", backgroundColor: "lightGray", borderRadius: "5px" }}>{actor.name} </button>

                )}
            </div>
            {actorInfo &&
                <>
                    <h1>Actor:  {actorInfo?.name}</h1>
                    <ul style={{ marginBottom: "2rem" }}>
                        <li>Gender: {actorInfo.gender}</li>
                        <li>Hair color: {actorInfo.hair_color}</li>
                        <li>Skin color: {actorInfo.skin_color}</li>
                        <li>Eye color: {actorInfo.eye_color}</li>

                        <li>Films:<Films actorMovies={actorMovies} /></li>
                    </ul>
                </>
            }
        </section >
    )
}

export default ActorDetails;