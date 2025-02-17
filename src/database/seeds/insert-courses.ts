import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        {name: "css" },
        {name: "flutter" },
    ]);
};
