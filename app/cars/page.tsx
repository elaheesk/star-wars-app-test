import Vehicles from "../components/Vehicles";
import Link from 'next/link'
const Cars = () => {
    return(
        <section style={{ marginTop: "2rem" }}>
            <Link href="/">Back to home page</Link>
        <h2>All cars</h2>
        <Vehicles />
    </section>)
}
export default Cars;