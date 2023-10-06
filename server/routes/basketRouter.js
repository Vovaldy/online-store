const Router = require('express')
const router = new Router
const basketController = require('../controllers/basketController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', basketController.add)
router.get('/', basketController.getAll)
router.get('/user/:id', basketController.getUserBasket)
router.get('/game', basketController.getBasketGames)

module.exports = router