'use client'

import React, { useEffect, useState } from "react"
import Films from "./Films";
import { IActorDetailsProps, IActor, IActorMovies } from "../../types";

const ActorDetails = ({ allActors }: IActorDetailsProps) => {
    const [actorInfo, setActorInfo] = useState<IActor>();
    const [actorsList, setActorsList] = useState<IActor[]>([]);
    const [actorMovies, setActorMovies] = useState<IActorMovies[]>([])
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const [al, setAl] = useState([
        { letter: "A", clicked: false },
        { letter: "B", clicked: false },
        { letter: "C", clicked: false },
        { letter: "D", clicked: false },
        { letter: "E", clicked: false },
        { letter: "F", clicked: false },
        { letter: "G", clicked: false },
        { letter: "H", clicked: false },
        { letter: "I", clicked: false },
        { letter: "J", clicked: false },
        { letter: "K", clicked: false },
        { letter: "L", clicked: false },
        { letter: "M", clicked: false },
        { letter: "N", clicked: false },
        { letter: "O", clicked: false },
        { letter: "P", clicked: false },
        { letter: "Q", clicked: false },
        { letter: "R", clicked: false },
        { letter: "S", clicked: false },
        { letter: "T", clicked: false },
        { letter: "U", clicked: false },
        { letter: "V", clicked: false },
        { letter: "W", clicked: false },
        { letter: "X", clicked: false },
        { letter: "Y", clicked: false },
        { letter: "Z", clicked: false },
    ]);
    const displayActorDetails = async (actor: IActor) => {
        const result = allActors.find((actorr: IActor) => actorr.name === actor.name);
        setActorInfo(result)
        const moviesPromisses = result.films.map((filmUrl: string) => fetch(filmUrl).then((res) => res.json()));
        const allMovies = await Promise.all(moviesPromisses);
        setActorMovies(allMovies)
    }




    const filterNames = (alpha: string) => {
        console.log(alpha);
        const newAlphabets = al.map((eachAl) => {
            if (eachAl.letter === alpha) {
            
                return { ...eachAl, clicked: !eachAl.clicked }
            } else {
                return { ...eachAl }
            }
        });
        setAl(newAlphabets);

        //newAlphabets.map((a) => {
        //    if (a.clicked === true) {
        //        const filtered = allActors.filter((actorName) =>
        //            actorName.name.startsWith(alpha));
        //        console.log("filtered  ***********", filtered)
        //        setActorsList(filtered);
        //    } else {
        //        console.log("hejheh")
        //        return setActorsList(allActors);
        //    }
        //})

        /*    setActorsList()*/

        //const filtered = allActors.filter((actorName) =>
        //    actorName.name.startsWith(alpha)
        //);
        //setActorsList(filtered);
        //setActorInfo({})
        //setActorMovies([])

    }


    useEffect(() => {
        setActorsList(allActors);
    }, [])


    console.log("actorsList", actorsList)
    return (
        <section>
            <div>{alphabet.map((alpha) =>
                <button onClick={() => filterNames(alpha)} style={{ margin: "2px", backgroundColor: "whitesmoke", borderRadius: "5px", border: "none" }} key={alpha}>{alpha}</button>
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