const {Brand} = require('../models/models')
const db = require('../postgr')


class BrandController
{
    async create(req, res)
    {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    async deleteById(req, res)
    {
        const id = req.params
        console.log(id)
        await db.query('DELETE FROM "brands" WHERE "name" = $1', [id.id])
        const brands = await Brand.findAll()
        return res.json(brands)
    }
    async getAll(req, res)
    {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

}

module.exports = new BrandController()