import "./Table.css";

const Table = ({columns, rows}) => {
    // console.log(columns);
    // console.log(rows);
    return (
        <table className="Table">
            <thead>
                <tr>
                    {columns.map((column) => <th key={column.key}>{column.name}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map(row =>
                    (
                        <tr key={row.id}>
                            {
                                row.data.map(value => 
                                    <td key={value.id}>{value.data}</td>
                                )
                            }
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
};

export default Table;