npm i
npm i knex@3.1.0 sqlite3@5.1.7

criar novo scripts
"knex" : "node --import tsx ./node_modules/.bin/knex"
npm run knex -- migrate:make create-courses

depois de editar seu arquivo em migrations
npm run knex -- migrate:latest

npm run knex -- migrate:make add-updated-courses
depois de editar seu arquivo em migrations
npm run knex -- migrate:latest

@@
npm run knex -- migrate:down 20250214122120_add-updated-courses.ts
isso faz o rollback da migration

npm run knex -- migrate:rollback
faz rollback anterior

npm run knex -- migrate:rollback --all
faz rollback de TUDO
@@
