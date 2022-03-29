import { useState } from 'react'
import PercentValue from '../percentValue/percentValue'
import GetValutes from '../getValutes/getValues'
import Dropdown from '../dropdown/dropdown'

import './tableRow.css'
import Tooltip from '../tooltip/tooltip'
import ReactTooltip from 'react-tooltip'

export default function TableRow(props) {

    const [ id,, charCode,, name, value, previous ] = Object.values(props.valute)
    const [dropdownIsVisible, setDropdownIsVisible] = useState(false)
    const [tenDaysValues, setTenDaysValues] = useState()

    const handleClick = () => {
        const valutesTenDays = new GetValutes
        valutesTenDays.getLastTenDays()
            .then(res => {
            setDropdownIsVisible(!dropdownIsVisible)
            setTenDaysValues(Object.keys(res).map(key => {
                return {[key]: res[key][charCode]? res[key][charCode].Value : "Курс ЦБ РФ не установлен."}
            })
        )})
    }


    return(
        <>
            <ReactTooltip place='bottom'/>
            <ul 
                key={ id } 
                className='table__row'
                onClick = { handleClick }
                data-tip={ name }
            >
                <li>{ charCode }</li>
                <li>{ +value.toFixed(3)}</li>
                <PercentValue 
                    previous = { previous }
                    value = { value }
                />
            </ul>

            <Dropdown 
                className = { dropdownIsVisible? 'dropdown visible': 'dropdown' }
                values = { tenDaysValues }
                setDropdownIsVisible = { setDropdownIsVisible }
            />
        </>
    )
}