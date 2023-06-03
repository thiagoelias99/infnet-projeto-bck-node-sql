const server = require("./server");

function startApp() {
    server;
}

try {
    startApp();
} catch (error) {
    console.log("Não foi possível executar o servidor")
    console.log(error);
}