# infnet-projeto-bck-express-node
 Projeto do curso Back-end com Express & Node.JS da Infnet

## **Iniciar BackEnd**
### Instalação
```
cd backend
npm install
 ```
### Execução
```
npm start
```
**Obs**: O servidor executa por padrão no endereço <http://localhost:3333/>.

## **Iniciar FrontEnd**
### Instalação
```
cd front-projeto
npm install
 ```
### Execução
```
npm start
```

## **Versões**
- Node.Js 18.12.1
- React 18.2.0

## **Rotas**
- <http://localhost:3333/>
    - **GET** -> Rota Inicial
- <http://localhost:3333/students>
    - **POST** -> Adiciona um estudantes.
        ```
        {
            "name": "String + Obrigatório",
            "email": "String + Obrigatório + Único",
            "password": "Number + Obrigatório + Mínimo 6" -> Cryptografado
            "birthDate": "Date" + Obrigatório
        }
        ```
    - **GET** -> Retorna todos estudantes.
- <http://localhost:3333/empregados/:uuid>
    - **GET** -> Retorna o estudante "*uuid*" e os cursos inscritos (***Requer autenticação com JWT***).
    - **DELETE** -> Remove o estudante "*uuid*"
    - **PUT** -> Atualiza informações do estudante "*uuid*"               
        ```
        {
            "name": "String + Obrigatório",
            "email": "String + Obrigatório + Único",
            "password": "Number + Obrigatório + Mínimo 6"
            "birthDate": "Date" + Obrigatório
        }
        ```
- <http://localhost:3333/login>
    - **POST** -> Faz login e retorna JWT.
        ```
        {
            "email": "String + Obrigatório",
            "password": "Number + Obrigatório + Mínimo 6"
        }
        ```
- <http://localhost:3333/courses>
    - **POST** -> Adiciona um Curso.
        ```
        {
            "description": "String + Obrigatório",
            "courseHours": "String + Obrigatório",
            "startDate": "Date + Obrigatório",
            "finishDate": "Date + Obrigatório"
        }
        ```
- <http://localhost:3333/courses> ***Requer autenticação com JWT***.
    - **GET** -> Retorna todos Cursos e os estudantes inscritos.
- <http://localhost:3333/courses/:uuid>
    - **DELETE** -> Remove o Curso "*uuid*"
    - **PUT** -> Atualiza informações do Curso "*uuid*"               
        ```
        {
            "description": "String + Obrigatório",
            "courseHours": "String + Obrigatório",
            "startDate": "Date + Obrigatório",
            "finishDate": "Date + Obrigatório"
        }
        ```
- <http://localhost:3333/courses/:uuid/subscribe> ***Requer autenticação com JWT***.
    - **PATCH** -> Faz inscrição no curso. Considera uuid do estudante codificado no JWT.
- <http://localhost:3333/courses/:uuid/unsubscribe> ***Requer autenticação com JWT***.
    - **PATCH** -> Faz cancelamento da inscrição no curso. Considera uuid do estudante codificado no JWT.
- <http://localhost:3333/*>
    - Qualquer Método -> Retorno rota inválida