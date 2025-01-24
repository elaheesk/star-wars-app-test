import ActorDetails from "../components/ActorDetails";
import Link from 'next/link'

const Page = async () => {
    const totalPagesActors = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //total 87 actors
    const allActors = [];

    for (const page of totalPagesActors) {
        const actorsPerPage = await fetch(`https://swapi.py4e.com/api/people/?page=${page}`);
        const responsePerPage = await actorsPerPage.json();
        const actorsResult = responsePerPage.results;
        allActors.push(...actorsResult);
    }
  
    return (
        <section>
            <Link href="/">Back to home page</Link>
            <ActorDetails allActors={allActors} />
            <hr />
        </section>
    )
}
export default Page;