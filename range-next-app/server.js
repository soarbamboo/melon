const { app, server } = require('./utils/app');
const port = process.env.PORT;
const ip = 'localhost';

const handle = app.getRequestHandler();
app
  .prepare()
  .then(() => {
    server.get('/health', (req, res) => {
      res.status(200);
      res.end('ok');
    });
    async function requestHandle(req, res) {
      await handle(req, res);
    }
    server.get('*', requestHandle);
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://${ip}:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
