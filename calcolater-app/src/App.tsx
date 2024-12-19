import Number from "./Componants/Number"
import Opration from "./Componants/Opration"
import Resultopration from "./Componants/Resultopration"
import "./App.css"
import { Icalcolater } from "./types";
import { useState } from "react";
export default function App() {
  const [ firstNumber, setfirstNumber ] = useState<number>(0);
  const [ secondNumber, setsecondNumber ] = useState<number>(0);
  const [ operator, setoperator ] = useState<string>("");
  const [ result, setresult ] = useState(0);
  const [ click, setclick ] = useState(false);
  const calac: Icalcolater = {
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    operator: operator,
    calculate(): number {

      if (this.operator === "+") {
        return this.firstNumber + this.secondNumber;
      } else if (this.operator === "-") {
        return this.firstNumber - this.secondNumber;
      }
      return 0; // or throw an error when operator is not supported.
    },
  }

  
  const handleNumberClick = (num: number): void => {
    console.log("handleNumberClick", num);
    if (!operator) {
      setfirstNumber((prev:number) => prev * 10 + num); // Update firstNumber
    }
     else {
      setsecondNumber((prev:number) => prev * 10 + num); // Update secondNumber
    }
  };
  console.log(firstNumber);
  const handleOperationClick = (op: string): void => {
    if (firstNumber !== null) {
      setoperator(op);
    }
  };
  const handleCalculate = () => {
    console.log("handleCalculate");
    setresult(calac.calculate());
    console.log(result);
  };
  const deleteOpration = () => {
    console.log("handleDelete");
    setclick(false);
    setfirstNumber(0);
    setsecondNumber(0);
    setoperator("");
    setresult(0);
  }
  return (
    <div className="calcolater">
      <h2>Calcolater</h2>
      <div className="result">
        <Resultopration firstNumber={firstNumber} secondNumber={secondNumber} operator={operator} result={result}  click ={click}  />
        <button onClick={deleteOpration}>
          x
        </button>
      </div>
      <div className="buttons">
        <div className="numbers">
          {Array(9).fill(null).map((_, i: number) => (
            i < 9 && (
              <div className="button" key={i + 1}>
                <Number value={i + 1}
                  handleNumberClick={handleNumberClick}
                />
              </div>)))}
          <div className="button">
            <Number value={0}
              handleNumberClick={handleNumberClick}
            />
          </div>
          <div className="button opration">
            <Opration opration="+" handleOperationClick={handleOperationClick} />
          </div>
          <div className="button opration ">
            <Opration opration="-" handleOperationClick={handleOperationClick} />
          </div>
        </div>
        <button className="equal" onClick={()=>{
             handleCalculate()
             setclick(true)
            }}>
            =
        </button>
      </div>
    </div>
  )
}
