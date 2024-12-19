export interface Icalcolater {
    firstNumber: number ,
    secondNumber: number ,
    operator: string
    calculate(): number;
    // calculate():number {
    //   if(operator == "+"){
    //     return this.firstNumber + this.secondNumber;
    //   }
    //   else if(operator == "-"){
    //     return this.firstNumber - this.secondNumber;
    //   }
    // };
}
