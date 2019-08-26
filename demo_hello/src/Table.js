import React, {Component} from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>saucxs</td>
                        <td>18</td>
                    </tr>
                    <tr>
                    <td>松宝写代码</td>
                    <td>19</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table
