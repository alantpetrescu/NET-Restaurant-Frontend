import "./Table.css";

const Table = ({columns, rows}) => {
    console.log(columns);
    console.log(rows);
    return (
        <table className="Table">
            <tr>
                {columns.map((column) => <th key={column.key}>{column.name}</th>)}
            </tr>
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
        </table>
    )
};

export default Table;