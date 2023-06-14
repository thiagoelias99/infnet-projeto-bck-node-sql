# Models
## Students
npx sequelize-cli model:create --name Student --attributes uuid:string,name:string,email:string,password:string,birthDate:dateonly

## Courses
npx sequelize-cli model:create --name Course --attributes uuid:string,description:string,courseHours:integer,startDate:dateonly,finishDate:dateonly