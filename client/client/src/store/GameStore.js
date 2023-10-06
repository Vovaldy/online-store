import {makeAutoObservable} from "mobx";

export default class GameStore {
    constructor() {
        this._categories = []
        this._brands = []
        this._games = []
        this._basket = []
        this._selectedCategory = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 3
        this._limit = 3
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setBrands(brands) {
        this._brands = brands
    }
    setGames(games) {
        this._games = games
    }
    setBasket(basket){
        this._basket = basket
    }

    setSelectedCategory(category) {
        this.setPage(1)
        this._selectedCategory = category
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get categories() {
        return this._categories
    }
    get brands() {
        return this._brands
    }
    get games() {
        return this._games
    }
    get basket() {
        return this._basket
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}