const server = require("./server");
const dotenv = require("dotenv");
const db = require("./databases/sequelize/models")
// const databaseConnection = require("./databases/sequelize/connection")
// const Students = require("./databases/sequelize/Entities/Student")
// const databaseConfiguration = require("./databases/sequelize/relations")

dotenv.config()

function startApp() {
    // Students.sync({ force: false })
    //     .then(() => {
    //         server;
    //     })
    // databaseConfiguration
    server
}

try {
    startApp();
} catch (error) {
    console.log("Não foi possível executar o servidor")
    console.log(error);
}