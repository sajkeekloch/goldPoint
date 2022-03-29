import './tableHead.css'

export default function TableHead() {
    return(
        <ul className='table__head'>
            <li> Код валюты</li>
            <li> Значение в рублях </li>
            <li> По сравнению со вчера </li>
        </ul>
    )
}