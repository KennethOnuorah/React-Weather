const months = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
]
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
const getDay = (datetime) => {
  const [date, time] = datetime.split('T')
  const month = `${months[JSON.parse(date.split('-')[1].replace(/^0+/, '')) - 1]}`
  const dayNum = date.split('-')[2]
  const year = date.split('-')[0]
  const newDate = new Date(`${month} ${dayNum}, ${year} ${time+':00'}`)
  return days[newDate.getDay()]
}
export { getDay }