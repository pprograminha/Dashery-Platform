import "reflect-metadata";
import 'express-async-errors'
import '../typeorm/connection'
import '../../container'

import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import router from './routes'
import AppError from "../../errors/AppError";
import { errors } from "celebrate";

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.use(errors())


app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      type: error.type,
      message: error.message,
    })
  }
  console.error(error)

  return response.status(500).json({
    status: 'error',
    type: 3,
    message: 'Internal server error',
  })
})





export default app
