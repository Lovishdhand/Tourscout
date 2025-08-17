const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const routes = require('./routes/routes');

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use('/api', routes);


app.get('/', (req, res) => {
  res.send('Hello, Express is running 🚀');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
