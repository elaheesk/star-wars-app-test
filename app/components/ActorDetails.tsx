'use client'

import React, { useEffect, useState } from "react"
import Films from "./Films";
import { IActorDetailsProps, IActor, IActorMovies, IAlphabet } from "../../types";
import '../styles/globals.css';
import { allLetters } from "../../data";

const ActorDetails = ({ allActors }: IActorDetailsProps) => {
    const [actorInfo, setActorInfo] = useState<IActor>();
    const [actorsList, setActorsList] = useState<IActor[]>([]);
    const [actorMovies, setActorMovies] = useState<IActorMovies[]>([])
    const [alphabet, setAlphabet] = useState<IAlphabet[]>(allLetters)


    const displayActorDetails = async (actor: IActor) => {
        const result = allActors.find((actorr: IActor) => actorr.name === actor.name);
        setActorInfo(result)
        const moviesPromisses = result.films.map((filmUrl: string) => fetch(filmUrl).then((res) => res.json()));
        const allMovies = await Promise.all(moviesPromisses);
        setActorMovies(allMovies)
    }




    const filterNames = (alpha: string) => {
        const newAlphabets = alphabet.map((eachAl) => {
            if (eachAl.letter === alpha) {
            
                return { ...eachAl, clicked: !eachAl.clicked }
            } else {
                return { ...eachAl, clicked: false }
            }
        });
        setAlphabet(newAlphabets);

        newAlphabets.map((a) => {
            if (a.clicked === true && a.letter === alpha) {
              
                const filtered = allActors.filter((actorName) =>
                    actorName.name.startsWith(alpha));
                setActorsList(filtered);
            } else if (a.clicked === false && a.letter ===alpha){
                setActorsList(allActors);
            }
        })
        setActorInfo({})
        setActorMovies([])
    }


    useEffect(() => {
        setActorsList(allActors);
    }, [])



    return (
        <section>
            <div>{alphabet.map((alpha) =>
                <button className={alpha.clicked ? "active" : "notActive"} onClick={() => filterNames(alpha.letter)} key={alpha.letter}>{alpha.letter}</button>
            )}
            </div>
            <section style={{ display: "flex", flexWrap: "wrap" }}>
                {actorsList.map((actor: IActor) =>
                    <button onClick={() => displayActorDetails(actor)} key={actor.name} style={{ border: "none", padding: "8px", margin: "8px", backgroundColor: "lightblue", borderRadius: "5px" }}>{actor.name} </button>

                )}
            </section>
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