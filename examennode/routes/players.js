const express = require('express')
const router = express.Router()
const { players: Players } = require('../models')

/* GET players listing. */
router.get('/', async function (req, res, next) {
  let player = null
  try {
    player = await Players.findAll()
  } catch (err) {
    res.statusCode = 500
    res.json({
      ok: false,
      message: err.message
    })
    return
  }
  res.json({
    ok: true,
    player,
    message: 'players success'
  })
})

/* POST create a comment */
router.post('/', async function (req, res, next) {
  let player = null
  try {
    console.log(req.body)
    player = await Players.create(req.body)
  } catch (err) {
    res.json({
      ok: false,
      message: err.message
    })
    return
  }

  res.json({
    ok: true,
    player,
    message: 'player was created'
  })
})

module.exports = router
