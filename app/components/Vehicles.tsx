import TableHead from "./TableHead";
import TableRowProduct from "./TableRowProduct";

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
            <div className="overflow-x-auto  self-center  shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <TableHead />
                    <tbody>
                        {allCars.map((car) =>
                            <TableRowProduct key={car.name} car={car} />
                        )}
                    </tbody>
                </table>
            </div>
    )
}
export default Vehicles;