// // Server-side global variables
// require(`dotenv`).config({path:`./config/.env`})

// // Database
// require(`./config/db`)

<<<<<<< HEAD
// Database


require(`./config/db`)
// Express
const express = require(`express`)
const app = express()
=======
// // Express
// const express = require(`express`)
// const app = express()

// app.use(require(`body-parser`).json())
// app.use(require(`cors`)({credentials: true, origin: process.env.LOCAL_HOST}))

// // Routers
// app.use(require(`./routes/cars`))
>>>>>>> d96a3d07bf1f52dec5a8d87fde0389763f89e6d0

// // Port
// app.listen(process.env.SERVER_PORT, () =>
// {
//     console.log(`Connected to port ` + process.env.SERVER_PORT)
// })

// // Error 404
// app.use((req, res, next) => {next(createError(404))})

<<<<<<< HEAD
// Routers
app.use(require(`./routes/tshirts`))
//app.use(require(`./routes/users`))
=======
// // Other errors
// app.use(function (err, req, res, next)
// {
//     console.error(err.message)
//     if (!err.statusCode)
//     {
//         err.statusCode = 500
//     }
//     res.status(err.statusCode).send(err.message)
// })

const express = require('express');
const cors = require('cors');
const data = require('./data');
>>>>>>> d96a3d07bf1f52dec5a8d87fde0389763f89e6d0

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((p) => p.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
