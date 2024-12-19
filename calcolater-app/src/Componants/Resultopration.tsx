import {Icalcolater} from "../types"
// import Opration from "./Opration"
interface calcolaterRes extends Icalcolater{
  click : boolean
  result: number;  // new prop to hold result of calculation
}
const Resultopration = ({firstNumber , secondNumber , operator ,  result  , click}:calcolaterRes)=> {
  return (
    <div>
       {firstNumber !== 0 && <span>{firstNumber}</span>}
       {operator && <span> {operator} </span>}
       {secondNumber !== null && <span>{secondNumber}</span>}
      {result !== null && click && <span> = </span>}
     {result !== null &&click &&<span>{result}</span>}
        </div>
  )
}

export default Resultopration;
