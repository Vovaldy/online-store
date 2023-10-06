const Router = require('express')
const router = new Router()
const brandRouter = require('./brandRouter')
const gameRouter = require('./gameRouter')
const categoryRouter = require('./categoryRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/brand', brandRouter)
router.use('/game', gameRouter)
router.use('/basket', basketRouter)

module.exports = router