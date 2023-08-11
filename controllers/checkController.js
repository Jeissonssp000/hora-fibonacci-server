const checkServer = (req, res) => {
  res.status(200).send('Servidor activo!');
};

module.exports = { checkServer };