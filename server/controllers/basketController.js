const {BasketGame, Game, GameInfo} = require('../models/models')
class BasketController
{
    async add(req, res)
    {
        let {basketId, gameId} = req.body
        const basket_game = await BasketGame.create({basketId, gameId})
        return res.json(basket_game)
    }

    async getAll(req, res)
    {
        const basket_game = await BasketGame.findAll()
        return res.json(basket_game)
    }

    async getUserBasket(req, res)
    {
        const {id} = req.params
        const gamesId = await BasketGame.findAll(
            {
                attributes: ['gameId'],
                where: {basketId: id},
                include: [{model: Game, as: 'game'}]
            }
        )
        return res.json(gamesId)
    }

    async getBasketGames(req, res)
    {
        const gamesId = req.body
        let games
        gamesId.map(gameId=> {
        games += Game.findOne({where:{id:gameId.gameId}})
        })

        return res.json(games)
    }
    async getOne(req, res)
    {
        const {id} = req.params
        const game = await Game.findOne(
            {
                where: {id},
                include: [{model: GameInfo, as: 'info'}]
            }
        )
        return res.json(game)
    }
}

module.exports = new BasketController()