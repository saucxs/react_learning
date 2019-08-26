import React from 'react'
const TableHeader = props => {
    const headerData = props.headerData.map((row, index) => {
        return (
            <th key={index}>{row.name}</th>
        )
    })
    return <thead><tr>{headerData} </tr></thead>
}

export default TableHeader
