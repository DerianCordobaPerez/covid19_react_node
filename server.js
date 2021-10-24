import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server.js'
import Express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import {App} from './frontend/src/js/App.jsx'

dotenv.config()
const app = Express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />)
  const indexFile = path.resolve('frontend/public/index.html')
  fs.readFile(indexFile, 'utf8', (err, page) => {
    if (err) {
      return res.status(500).send('Something wrong happpend!')
    }
    return res.send(
      page.replace('<div id="root"></div>', `<div id="root">${app}</div>`),
    )
  })
})

const _PORT = process.env.PORT || 8080
app.listen(_PORT, () => console.log(`Funcionando en el puerto ${_PORT}`))
