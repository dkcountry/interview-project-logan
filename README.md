# interviewapp-logan

## Prerequisites

- MySQL
- Node

You can install and start MySQL using the following commands.

```
# install mysql
brew install mysql

# start mysql
brew services start mysql

# log into mysql
mysql --host=localhost --user=root --password=root --database=interviewdb
```

## Server

```
cd server

# install packages
yarn

# db setup
NODE_ENV=development npx sequelize db:create
NODE_ENV=development npx sequelize db:migrate
NODE_ENV=development npx sequelize db:seed:all

# run server
yarn start

# access server
http://localhost:5006
```

## Client

```
cd client

# install packages
yarn

# run client
yarn start

# access client
http://localhost:5007
```
