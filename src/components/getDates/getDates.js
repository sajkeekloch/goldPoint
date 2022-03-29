export default function getDates() {
    let days = []
    for (let i = 0; i < 10; i++) {
        let theDay = new Date(new Date().setDate(new Date().getDate() - (i + 1)));
        let day = theDay.getDate()
        let month = theDay.getMonth() + 1
        let year = theDay.getFullYear()
        month > 9?
            theDay = `${year}/${month}/${day}`
            :
            theDay = `${year}/0${month}/${day}`
        days.push(theDay)
    }
    return days
}