import pg from 'pg';
import env from 'dotenv';

env.config();

const database = new pg.Client({
    host: process.env.HOST,
    port: Number(process.env.PORT),
    user: 'postgres',
    password: 'password',
    database: process.env.DATABASE
});

database.connect();

export default database