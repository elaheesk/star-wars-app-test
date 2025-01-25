const TableHead = ({headings }) => {
    return (
        <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
                {headings.map((heading:string) =>
                    <th key={heading} scope="col" className="py-3 px-4 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        {heading}
                    </th>
                )}
            </tr>
        </thead>
    )
}
export default TableHead;