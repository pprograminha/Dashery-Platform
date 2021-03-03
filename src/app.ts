// import "reflect-metadata";
import express from 'express'
import path from 'path'
import { router } from './routes'
import './database/connection'

const app = express()

app.use(express.json())
app.use(router)

app.use('/files', express.static(path.join(__dirname, '../public')))

export { app }
