import { createPool } from 'mysql2/promise';

export async function connectMe () {
    const connection = await createPool({
        host: 'localhost' ,
        user: 'root' ,
        password: '' ,
        database: 'db-articles-store' ,
        waitForConnections : true ,
        connectionLimit: 10
    });

    return connection;
}