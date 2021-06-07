const { env } = require('./src/main/config/env');

module.exports = {
   "type": "postgres",
   "host": env.databaseHost,
   "port": 5432,
   "username": env.databaseUser,
   "password": env.databasePass,
   "database": env.databaseName,
   "synchronize": true,
   "logging": false,
   "uuidExtension": "uuid-ossp",
   "entities": [
      "src/infra/providers/database/typeorm/entities/**/*{.ts,.js}"
   ],
   "migrations": [
      "resources/migrations/**/*{.ts,.js}"
   ],
   "cli": {
      "entitiesDir": "src/infra/providers/database/typeorm/entities",
      "migrationsDir": "resources/migrations"
   }
}