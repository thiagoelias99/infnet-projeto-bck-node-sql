const server = require("./server");
const dotenv = require("dotenv")

dotenv.config()

function startApp() {
    server;
}

try {
    startApp();
} catch (error) {
    console.log("Não foi possível executar o servidor")
    console.log(error);
}