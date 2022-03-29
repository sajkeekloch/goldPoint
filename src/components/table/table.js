import TableHead from '../tableHead/tableHead'
import TableBody from '../tableBody/tableBody'

import './table.css'

export default function Table() {

    return(
        <div className='table'>
            <TableHead />
            <TableBody />
        </div>
    )
}