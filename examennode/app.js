var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const Sequelize = require('sequelize')
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var playersRouter = require('./routes/players')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const configSequelize = require('./config/config.json')
let config = null
switch (process.env.NODE_ENV) {
  case 'production':
    config = configSequelize.production
    break
  case 'test':
    config = configSequelize.test
    break
  default:
    config = configSequelize.development
    break
}
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
)
function connect () {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })
}
// init db
connect()
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/players', playersRouter)

module.exports = app
