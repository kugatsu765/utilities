export function searchsInArrayBySplit(sources: Array<any>, search: String, spliter: string) {
    const searchs = search
        .split(spliter)
        .map(e => e.toLowerCase().trim())
    return searchsInArray(sources, searchs)
}

export function searchsInArray(sources: Array<any>, searchs: Array<string>) {
    let results = JSON.parse(JSON.stringify(sources))

    searchs.forEach((search: string) => {
        results = searchInArray(results, search)
    })

    return results
}

export function searchInArray(sources: Array<any>, search: string) {
    return sources.filter((item) => {
        const returnvalue = searchInObject(item, search)
        return returnvalue
    })
}

export function searchInObject(source: any, search: string) {
    const find: Array<any> = Object.values(source).filter((item): Boolean => {
        if (!item) {
            return false
        }
        if (typeof item === 'object') {
            return searchInObject(item, search.toLowerCase())
        }
        else if (typeof item === 'string') {
            return item.toLowerCase().includes(search.toLowerCase())
        }
        else if (typeof item === 'number') {
            return item.toString().toLowerCase().includes(search.toLowerCase())
        }
        else {
            return false
        }
    })
    return find.length > 0
}
