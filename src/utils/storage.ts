
const loadState = (name: string, type?: any) => {
    const serialized = localStorage.getItem(name)
    if (serialized) { 
        return JSON.parse(serialized)
    }
}

const saveState = (name: string, value: any) => {
    return localStorage.setItem(name, JSON.stringify(value))
}

export {loadState, saveState}