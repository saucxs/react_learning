import React from 'react'
const TableBody = props => {
    const tableBody = props.bodyData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
            </tr>
        )
    })
    return <tbody>{tableBody}</tbody>
}

export default TableBody
