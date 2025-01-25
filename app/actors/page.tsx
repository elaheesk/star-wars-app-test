import { totalPagesActors } from "../../data";
import ActorDetails from "../components/ActorDetails";

const Page = async () => {
    const allActors = [];

    for (const page of totalPagesActors) {
        const actorsPerPage = await fetch(`https://swapi.py4e.com/api/people/?page=${page}`);
        const responsePerPage = await actorsPerPage.json();
        const actorsResult = responsePerPage.results;
        allActors.push(...actorsResult);
    }
  
    return (
        <section>
            <h2 className="text-xl text-gray-700 font-bold md:text-xl lg:text-2xl mb-2 mt-4">Actors</h2>
            <ActorDetails allActors={allActors} />
            <hr />
        </section>
    )
}
export default Page;