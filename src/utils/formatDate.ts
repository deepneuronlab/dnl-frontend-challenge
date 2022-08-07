/**
 *
 * @param date
 * @returns {string}
 */
function formatDate(date: number) {
  const dateObj = new Date(date)
  const convertedDate =  `${ dateObj.getFullYear() }, ${ dateObj.getMonth() + 1 }, ${ dateObj.getDate() }`
  const newDateObj = new Date(convertedDate)
  const month = newDateObj.toLocaleString('default', { month: 'short' });
  return `${ month } ${ dateObj.getDate() }, ${ dateObj.getFullYear() }`
}


export {
  formatDate
}