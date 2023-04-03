const app = require('./app');

const PORT = 3003;

try {
  app.listen(PORT, () => console.log('Port 3003 [Online] 🟢'));
} catch (err) {
  console.error(`Failed to start server: ${err}`);
}
