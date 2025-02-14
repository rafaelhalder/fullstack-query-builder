import express, { Request, Response } from "express"
import {knex} from "./database/knex"

const app = express()
app.use(express.json())

app.post("/courses", async (request: Request, response: Response) => {
const {name} = request.body

await knex("courses").insert({name})

//await knex.raw("INSERT INTO courses (name) values (?)",[name])


  response.status(201).json({name})
})


app.get("/courses", async (request: Request, response: Response) => {
  const courses = await knex("courses").select().orderBy("name","asc")
  response.json(courses)
})

app.put("/courses/:id", async (request: Request, response: Response) => {
  const {id} = request.params
  const {name} = request.body

  await knex("courses").update({name}).where({id})
  response.json()
})

app.delete("/courses/:id", async (request: Request, response: Response) => {
  const {id} = request.params

  await knex("courses").delete().where({id})
  response.json()
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
