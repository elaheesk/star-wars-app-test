
const Vehicles = async () => {
    const totalPagesCars = [1, 2, 3, 4];
    const allCars = [];
    try {

        const allVehiclesPromises = totalPagesCars.map((page) =>
            fetch(`https://swapi.py4e.com/api/vehicles/?page=${page}`).then((res) => res.json())
        );

        const allVehiclesData = await Promise.all(allVehiclesPromises);

        const allVehicles = allVehiclesData.flatMap((data) => data.results);
        const vehiclesWithFilmsPromises = allVehicles.map(async (vehicle) => {
            const filmPromises = vehicle.films.map((filmUrl:string) =>
                fetch(filmUrl).then((res) => res.json())
            );

            const films = await Promise.all(filmPromises);

            return {
                ...vehicle,
                films,
            };
        });

        const vehiclesWithFilms = await Promise.all(vehiclesWithFilmsPromises);

        allCars.push(...vehiclesWithFilms);
    } catch (error) {
        console.error("Failed to fetch vehicles:", error);
    }

    return (
        <section>
            <h3>Total cars:{allCars.length} </h3>
            {allCars.map((car) =>

                <div style={{ border: "1px solid gray", padding: "0.5rem" }} key={car.name}>
                    <ul>
                        <li style={{}} >Name of the car: {car.name}</li>
                        <li style={{}} >Model: {car.model}</li>
                    </ul>
                    <span style={{ fontSize: "0.8rem", padding: "1rem" }}>
                        Appeared in: {car.films.length} of the Star wars movies:
                    </span>
                    {car.films.map((eachMovie) =>
                        <li key={eachMovie.episode_id} style={{ fontSize: "0.8rem" }}>
                            {eachMovie.title}</li>
                    )}
                </div>
            )}
        </section>
    )
}
export default Vehicles;