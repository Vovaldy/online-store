import {$authHost, $host} from "./index";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategory = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const deleteBrand = async (id) => {
    const {data} = await $authHost.delete('api/brand/' + id)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}


export const fetchGame = async (categoryId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/game', {params: {
            categoryId, brandId, page, limit
        }})
    return data
}


export const fetchOneGame = async (id) => {
    const {data} = await $host.get('api/game/' + id)
    return data
}

export const fetchBasketGame = async (userId) => {
    const {data} = await $host.get('api/basket/user/' + userId)
    return data
}

export const createBasketGame = async (basketId, gameId) => {
    await $authHost.post('api/basket',  {basketId, gameId})
}
export const createGame = async (game) => {
    const {data} = await $authHost.post('api/game', game)
    return data
}


export const deleteCategory = async (id) => {
    const {data} = await $authHost.delete('api/category/' + id)
    return data
}

export const deleteGame = async (id) => {
    const {data} = await $authHost.delete('api/game/' + id)
    return data
}