const cors = require('cors');

const whitelist = ['https://time-fibonacci.netlify.app', 'http://127.0.0.1:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Dominio no permitido por CORS'));
    }
  },
};

module.exports = cors(corsOptions);
