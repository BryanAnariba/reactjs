import { App } from './app';

async function main () {
    const app = new App();
    await app.startingServer();
}

main();