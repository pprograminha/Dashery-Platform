// import "reflect-metadata";
import express from 'express'
import path from 'path'
import cors from 'cors'
import { router } from './routes'
import './database/connection'

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(
   cors({
      origin: ['http://localhost:3333'],
      
   })
)
app.use(router)

app.use('/files', express.static(path.join(__dirname, '../../web/public')))

export { app }
