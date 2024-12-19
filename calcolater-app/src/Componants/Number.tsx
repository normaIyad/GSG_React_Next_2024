interface InumProp   {
  value : number;
  handleNumberClick : (number: number) => void;
}

const Number = ({ value, handleNumberClick }: InumProp )  => {
  return <div onClick={()=>{
    handleNumberClick(value)}}>
    {value}</div>;
};

export default Number;
