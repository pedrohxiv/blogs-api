const express = require('express');

const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');
const categoriesRoutes = require('./routes/categories');
const postRoutes = require('./routes/post');

const errorHandler = require('./middlewares/errorHandler');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

app.use(errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
