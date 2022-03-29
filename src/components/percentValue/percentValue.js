import './percentValue.css'

export default function PercentValue(props) {

    const percent = 100 - 100 * props.previous / props.value    
    const color = percent === Math.abs(percent)? 'green' : 'red'

    return(
        <li className={color}>
            { +Math.abs(percent).toFixed(3) }%
        </li>
    )
}