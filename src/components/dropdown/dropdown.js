
import './dropdown.css'
import closeCross from '../images/x.svg'

export default function Dropdown(props) {
    
    let list
    if (props.values) {
        list = props.values.map((day, index) => {
            const date = Object.keys(day)
            const value = Object.values(day)
            return (
                <li key={new Date() + index}>
                    <p>{ date }</p>
                    <p>{ value }</p>
                    <p></p>
                </li>
            )
        })
    }
    
    return (
        <ul className={ props.className }>
            <img 
                onClick={() => props.setDropdownIsVisible() }
                src={ closeCross }
                className='close'
            ></img>
            { list }
        </ul>
    )
}