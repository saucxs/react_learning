import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

class Table extends Component {
    render() {
        const tableHeader = [
            {
                name: '姓名'
            },
            {
                name: '年龄'
            }
        ];
        const tableData = [
            {
                name: '松宝写代码',
                age: '18'
            },
            {
                name: 'songEagle',
                age: '20'
            },
            {
                name: 'saucxs',
                age: '24'
            }
        ]
        return (
            <table className="container-box">
                <TableHeader headerData={tableHeader} />
                <TableBody bodyData={tableData} />
            </table>
        )
    }
}

export default Table
