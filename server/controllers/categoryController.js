const {Category, Brand} = require('../models/models')
const db = require('../postgr')


class CategoryController
{
    async create(req, res)
    {
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    }

    async getAll(req, res)
    {
        const categories = await Category.findAll()
        return res.json(categories)
    }
    async deleteById(req, res)
    {
        const id = req.params
        console.log(id)
        await db.query('DELETE FROM "categories" WHERE "name" = $1', [id.id])
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new CategoryController()