
const  DayDate = () => {
  const date = new Date();
  const day = date.getDay();
  const  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const dayOfWeek = days[day];
  const month = date.getMonth();
  const MonthDay = date.getDate();
  const year = date.getFullYear();
  return (
    <div>{dayOfWeek } {MonthDay} / {month } / {year}</div>
  )
}
export default DayDate ; 
