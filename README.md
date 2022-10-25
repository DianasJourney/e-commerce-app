## E-commerce Application

### Overview
E-commerce application allows users to get, post, update and delete the following categories, products and tags. Users for the e-commerce field can use this application to compete with other companies because it is using the latest technology to do everything with just a push of a button.
### Table Of Contents
- [Installation](#installation)
- [Tests](#tests)
- [UserStory](#userstory)
- [AcceptanceCriteria](#acceptancecriteria)
- [Questions](#questions)
- [License](#license)


## Installation
The following technologies needed will be:
1. Vscode
2. Node.js
3. Package.json
4. Dotenv
5. Sequelize
6. mysql2
7. Insomnia

## Tests
When using this application the users will first need to log into their mysql and source the database by entering the following command `source db/schema.sql.` Once the database has been created, the user then can run the command `node seeds/index.js` which will populate their data into the database. After everything has been seeded the following command `npm start` will run the application on insomnia giving the user the port. 

Guidance of everything can be watched in the following link to the video below: 
link: https://drive.google.com/file/d/1TLx2DS9aFihDdyhrppP6HB0IWN9nuAFK/view


screens shots of demo:
![8956c3f50e0aa002b7828e593eea8f98](https://user-images.githubusercontent.com/109758045/197660034-4707619b-3e70-498a-9ea2-d3957556eeea.png)
![8956c3f50e0aa002b7828e593eea8f98](https://user-images.githubusercontent.com/109758045/197660111-fc1e2715-1cca-4cb5-9700-8deb8d3a25e2.png)
![screenie](https://user-images.githubusercontent.com/109758045/197660187-66fba7ea-517a-4eda-aaf4-cc6e7268e4f5.png)
![aaaaaaaa](https://user-images.githubusercontent.com/109758045/197660252-be04952a-4d54-483e-a8bc-57f5154e0ae9.png)



## UserStory
---
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
---

## AcceptanceCriteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Questions?
### Feel free to contact me
- Github: https://github.com/DianasJourney
- Email: diana.vu@hotmail.com

## License
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

https://choosealicense.com/licenses/mit/