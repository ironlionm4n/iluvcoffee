import { Coffee } from './src/coffees/entities/coffee.entity.js';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { CoffeeRefactor1729545673434 } from './src/migrations/1729545673434-CoffeeRefactor';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1729545673434],
});
