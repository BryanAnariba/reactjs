import Server from './Server';
import { Connection } from './database/Connection';

const server = new Server();
const connection = new Connection;

async function main () {
    try {
        await server.listen();
        await connection.connectMe();
    } catch (e) {
        console.log(e);
    }
}

main ();