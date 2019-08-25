import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const {characterData} = this.props;
        return (
            <table>
                <TableHeader/>
                <TableBody characterData={characterData}/>
            </table>
        )
    }
}

export default Table