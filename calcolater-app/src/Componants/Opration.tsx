interface IoprationProp {
  opration : string;
  handleOperationClick : (opration : string) => void;
}
const Opration =({opration , handleOperationClick}:IoprationProp)=> {
  return (
    <div onClick={()=>{
      handleOperationClick(opration)
    }}>{opration}</div>
  )
}
export default Opration;
