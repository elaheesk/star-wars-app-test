'use client'

import { IActorDetailsProps, IActor, IActorMovies, IAlphabet } from "../../types";
import { actorTableHeadings, allLetters } from "../../data";
import React, { useEffect, useState } from "react"
import TableHead from "./TableHead";
import '../styles/globals.css';
import Films from "./Films";


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
            } else if (a.clicked === false && a.letter === alpha) {
                setActorsList(allActors);
            }
        })
        setActorInfo({});
        setActorMovies([])
    }


    useEffect(() => {
        setActorsList(allActors);
    }, [])
   
    return (
        <section>
            {alphabet.map((alpha) =>
                <button className={alpha.clicked ? "active" : "notActive"} onClick={() => filterNames(alpha.letter)} key={alpha.letter}>{alpha.letter}</button>
            )}
            <section className="flex flex-wrap">
                {actorsList.map((actor: IActor) =>
                    <button onClick={() => displayActorDetails(actor)} key={actor.name} className="rounded-md p-2 m-2 bg-gray-100 dark:bg-gray-700">{actor.name} </button>

                )}
            </section>
            {actorInfo?.name &&
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <TableHead headings={actorTableHeadings} />
                    <tbody>
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white hover:text-blue-600 hover:underline">{actorInfo.name}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white hover:text-blue-600"> {actorInfo.gender} </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white hover:text-blue-600"> {actorInfo.hair_color}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white hover:text-blue-600"> {actorInfo.skin_color}</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white hover:text-blue-600"> {actorInfo.eye_color}</td>
                            <td className="text-sm py-4 px-6 text-gray-900  dark:text-white" >
                                    <span className="px-2 text-sm" > <Films actorMovies={actorMovies} /></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
        </section>
    )
}

export default ActorDetails;