# infnet-projeto-bck-express-node
 Projeto do curso Back-end com Express & Node.JS da Infnet

## **Instalação e Execução do BackEnd**
1. Renomear o arquivo "env.example" para "env"
2. Alterar as informações de conexão no arquivo e salvar.
3. Executar o comando para instalação do projeto
```
npm install
 ```
4. Executar o projeto
5. A criação do database é feita automaticamento no SGDB se não existir.
```
npm start
```
**Obs**: O servidor está configurado para utilizar SGDB MariaDb.
**Obs**: O servidor executa por padrão no endereço <http://localhost:3333/>.

6. Acessar **<http://localhost:3333/>** para acessar documentação swagger com as rotas/endpoints.
7. É utilizado JWT para autenticação. Retorno na rota ***"/login"***
8. Para acesso de Administrador utilizar
```
{
    "email": "admin@email.com",
    "password": "Admin123"
}
```
9. Rotas de gerenciamento de Student e Course só podem ser acessadas com usuário de Admin.

## **Versões**
- Node.Js 18.12.1
- React 18.2.0