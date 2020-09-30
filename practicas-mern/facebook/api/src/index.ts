import App from './app';
import Connection from './config/Db-Connection';
async function main () {
    // Instanciamos o creamos ejemplares de clase
    const APP = new App();
    const START_DB = new Connection();


    // Llamamos a los metodos correspondientes -> iniciar server y conectar a mongo
    await APP.startingServer();
    await START_DB.connectMe();
}

main();