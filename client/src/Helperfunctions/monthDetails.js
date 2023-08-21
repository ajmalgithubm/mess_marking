const months = ['Janu', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Kolkata' };


const currentMonthName = () => {
    const currentDate = new Date();
    const currentMonthNumber = currentDate.getMonth();
    const MonthName = months[currentMonthNumber];
    return MonthName
}

const currentMonthNumber = () => {
    const currentDate = new Date();
    const monthNumber = currentDate.getMonth();
    return monthNumber
}

const nextMonthName = () => {
    const currentDate = new Date();
    const currentMonthNumber = currentDate.getMonth();
    const MonthName = months[currentMonthNumber+1];
    return MonthName
}

const nextMonthNumber = () => {
    const currentDate = new Date();
    const monthNumber = currentDate.getMonth();
    return monthNumber+1
}

const upcomingDateCurrentMonth = (year, month, upcoming = false) => {
    const formattedDate = [];
    const firstDayMonth = new Date(year, month, upcoming ? new Date().getDate()+1 : 1);
    const lastDayMonth = new Date(year, month+1, 0);
    for(let currentDate = firstDayMonth; currentDate <= lastDayMonth; currentDate.setDate(currentDate.getDate()+1)){
        const formatedDate = currentDate.toLocaleDateString('en-IN', options)
        formattedDate.push(formatedDate)
    }
    return formattedDate
}

export {currentMonthName, 
    currentMonthNumber, 
    nextMonthName, 
    nextMonthNumber,
upcomingDateCurrentMonth}