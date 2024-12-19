import {Icalcolater} from "../types"
// import Opration from "./Opration"
interface calcolaterRes extends Icalcolater{
  result: number;  // new prop to hold result of calculation
}
const Resultopration = ({firstNumber , secondNumber , operator ,  result }:calcolaterRes)=> {
  return (
    <div>
       {firstNumber !== 0 && <span>{firstNumber}</span>}
       {operator && <span> {operator} </span>}
       {secondNumber !== 0 && <span>{secondNumber}</span>}
      {result !==0  && <span> = </span>}
     {result !== 0 && <span>{result}</span>}
        </div>
  )
}

export default Resultopration;
