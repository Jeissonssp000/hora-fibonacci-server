const express = require('express');
const app = express();
const port = 3000;
const checkRoutes = require('./routes/checkRoutes');
const emailRoutes = require('./routes/emailRoutes');
const corsMiddleware = require('./utils/corsMiddleware');

app.use(corsMiddleware);
app.use(express.json());
app.use('/', checkRoutes);
app.use('/api', emailRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});