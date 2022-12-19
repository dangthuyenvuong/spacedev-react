export const cache = {
    set: (name, data, expired) => {
        const storeData = {
            expired,
            data
        }
        localStorage.setItem(name, JSON.stringify(storeData))
    },
    get: (name) => { 
        let storeData = JSON.parse(localStorage.getItem(name))
        if(storeData) {
            const now = Date.now()
            if(storeData.expired && storeData.expired - now < 0) {
                return 
            }

            return storeData.data
        }

        return 
    },
    remove: (name) => { 
        localStorage.removeItem(name)
    }
}