import getDates from "../getDates/getDates"
export default class GetValutes {

    _apiBase = 'https://www.cbr-xml-daily.ru/'

    async api(addUrl) {
        const res = await fetch(`${this._apiBase}${addUrl}`)
        if (!res.ok) {
            return await res.json()
        }
        return await res.json()
    }

    async getToday() {
        const res = await this.api('daily_json.js')
        return await res
    }
    
    async getLastTenDays() {
        const dates = getDates()   
        let obj = {}
        for (let i = 0; i < dates.length; i++) {
            const res = await this.api(`archive/${dates[i]}/daily_json.js`)
            obj[dates[i]] = res.Valute? res.Valute : res.explanation
        }
        return obj
    }

}

//https://www.cbr-xml-daily.ru/archive/2022/02/11/daily_json.js