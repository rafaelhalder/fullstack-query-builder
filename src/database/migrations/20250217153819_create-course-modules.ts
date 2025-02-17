import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("course_modules", (table) => {
  table.increments("id").primary(),
  table.text("name").notNullable(),
  table.integer("course_id").references("id").inTable("courses").notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
await knex.schema.dropTable("course_modules")
}

