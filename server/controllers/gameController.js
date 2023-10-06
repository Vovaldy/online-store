const uuid = require('uuid')
const path = require('path')
const {Game, GameInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
class GameController
{
    async create(req, res)
    {

        try {
            let {name, price, brandId, categoryId, info} = req.body
            const {img} = req.files
            let filename = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            const game = await Game.create({name, price, brandId, categoryId, img: filename})

            if(info)
            {
                info.JSON.parse(info)
                info.forEach(i =>
                    GameInfo.create({
                        title: i.title,
                        description: i.description,
                        gameId: game.id
                    })
                )
            }

            return res.json(game)
        } catch (e) {
            ApiError.badRequest(e.message)
        }

    }

    async getAll(req, res)
    {
        let {brandId, categoryId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let games;
        if(!brandId && !categoryId)
        {
            games = await Game.findAndCountAll({limit, offset})
        }
        if(brandId && !categoryId)
        {
            games = await Game.findAndCountAll({where:{brandId}, limit, offset})
        }
        if(!brandId && categoryId)
        {
            games = await Game.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if(brandId && categoryId)
        {
            games = await Game.findAndCountAll({where:{brandId, categoryId}, limit, offset})
        }
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

module.exports = new GameController()