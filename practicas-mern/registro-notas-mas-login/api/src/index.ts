import App from './app';
import Connection from './config/DataBaseConnection';

async function main () {
    // Inicializamos instancias, en caso de app puedes mandar un No de puerto en la instancia
    const APP = new App();
    const START_DB = new Connection();

    // Invocando metodos
    APP.startingServer();
    START_DB.connectMe();
}

main();