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

app.post("/course-modules", async (request: Request, response: Response) => {
  const {name, course_id} = request.body

  await knex("course_modules").insert({name, course_id})
  response.status(201).json({name, course_id})

})

app.get("/course-modules", async (request: Request, response: Response) => {
  const courseModules = await knex("course_modules").select()
  response.json(courseModules)
})

app.get("/courses/:id/modules", async (request: Request, response: Response) => {
  const courses = await knex("courses")
    .select(
      "courses.id AS course_id",
      "course_modules.id AS module_id",
      "course_modules.name AS module",
      "course.name AS course",
      )
      .join(
        "course_modules", "courses.id", "course_modules.course_id")
  return response.json(courses)
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
