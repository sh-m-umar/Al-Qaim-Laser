
module.exports = ({ app }) => {
  app.get('/test', (req, res) => {
    return res.status(200).json({ status: 'ok', message: 'Routes working.' });
  });
};
