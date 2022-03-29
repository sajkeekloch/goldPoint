import { useEffect, useState } from 'react'
import TableRow from '../tableRow/tableRow'
import GetValutes from '../getValutes/getValues'

import './tableBody.css'

export default function TableBody(props) {
    
    const [todaysValute, setTodaysValute] = useState({})

    useEffect(() => {
        const valutes = new GetValutes()
        valutes.getToday().then(res =>{
            setTodaysValute(res.Valute)
        })
    }, [])

    const rows = Object.values(todaysValute).map(valute => {
        return(
            <TableRow 
                valute = { valute } 
                key = { valute.ID } 
            />) 
    })

    return(
        <div className='table__body'>
            { rows }
        </div>
    )
}