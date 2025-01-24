const TableHead = () => {
    const tableHeadTitles = ["Car", "Model", "Films"];
    return (
        <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
                {tableHeadTitles.map((title) =>
                    <th key={title} scope="col" className="py-3 px-4 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        {title}
                    </th>
                )}
            </tr>
        </thead>
    )
}
export default TableHead;