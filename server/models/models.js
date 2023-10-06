const sequalize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequalize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequalize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketGame = sequalize.define('basket_games', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Game = sequalize.define('game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Category = sequalize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Brand = sequalize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Ratings = sequalize.define('ratings', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const GameInfo = sequalize.define('game_infos', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const CategoryBrand = sequalize.define('category_brands', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Ratings)
Ratings.belongsTo(User)

Basket.hasMany(BasketGame)
BasketGame.belongsTo(Basket)

Category.hasMany(Game)
Game.belongsTo(Category)

Brand.hasMany(Game)
Game.belongsTo(Brand)

Game.hasMany(Ratings)
Ratings.belongsTo(Game)

Game.hasMany(BasketGame)
BasketGame.belongsTo(Game)

Game.hasMany(GameInfo, {as: 'info'})
GameInfo.belongsTo(Game)

Category.belongsToMany(Brand, {through: CategoryBrand})
Brand.belongsToMany(Category, {through: CategoryBrand})

module.exports = {
    User,
    Basket,
    BasketGame,
    Game,
    Category,
    Brand,
    Rating: Ratings,
    CategoryBrand,
    GameInfo
}