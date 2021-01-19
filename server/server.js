import path from 'path'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import axios from 'axios'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.server.config.js'
require('dotenv').config()

const PORT = process.env.PORT || 8080

const API_KEY = 'cbab7d8e553bc074667e0f950f71d954'

const server = express()
const compiler = webpack(config)

const middleware = [
  cors(),
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }),
  webpackHotMiddleware(compiler),
  express.static(path.resolve(__dirname, '../dist/')),
  bodyParser.json({ limit: '5mb' }),
  cookieParser()
]
middleware.forEach((it) => server.use(it))

server.get('/api/v1/current/:city', async (req, res) => {
  const { city } = req.params
  const weather = await axios(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
    .then(({ data }) => data)
    .catch(() => res.send('cannot get url'))
  res.json(weather)
})

// api/v1/period/50.4333&30.5167

server.get('/api/v1/period/:lat&:lon', async (req, res) => {
  const { lat, lon } = req.params
  const weather = await axios(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}&units=metric`
  )
    .then(({ data }) => data)
    .catch(() => res.send('cannot get url'))
  res.json(weather)
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

server.get('/*', (req, res) => {
  res.send(req.url.slice(1))
})

server.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(path.join(__dirname, '..', 'index.html'), (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})

server.listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}`)
})
