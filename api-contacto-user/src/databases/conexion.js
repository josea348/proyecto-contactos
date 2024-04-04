import {createPool} from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({path: './src/env/.env'});

export const pool = createPool(
    {
        host: process.dotenv.DB_HOST,
        user: process.dotenv.DB_USER,
        password: process.dotenv.DB_PASSWORD,
        port: process.dotenv.DB_PORT,
        databases: process.dotenv.DB_DATABASE,
    }
);