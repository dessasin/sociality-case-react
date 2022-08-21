
export default function convertDate(date, time) {
    let fullDate = new Date(date)
    if (time)
        return `${fullDate.getDay()} ${fullDate.toLocaleString('en-US', { month: 'long' })} ${fullDate.getFullYear()} - ${fullDate.getHours()} : ${fullDate.getMinutes()} `

    return `${fullDate.getDay()} ${fullDate.toLocaleString('en-US', { month: 'long' })} ${fullDate.getFullYear()} `
}

