export const getHeroes = (offset, limit) => {
    return fetch(`http://localhost:3001/api/heroes?offset=${offset}&limit=${limit}`)
}
