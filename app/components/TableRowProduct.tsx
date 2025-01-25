'use client'

import { IMovie } from "../../types";
const TableRowProduct = ({ car }) => {
    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white hover:text-blue-600 hover:underline">{car.name}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white hover:text-blue-600"> {car.model}</td>
            <td className="text-sm py-4 px-6 text-gray-900  dark:text-white" >
                {car.films.map((eachMovie: IMovie) =>
                    <span key={eachMovie.episode_id} className="px-2 text-sm" > '{eachMovie.title}'</span>   
                )}  
            </td>
        </tr>
    )
}
export default TableRowProduct;