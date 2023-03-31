const app = require('./app');

const PORT = 3002;

try {
  app.listen(PORT, () => console.log(`🟢 http://localhost:${PORT}/ [online] 🟢`));
} catch (err) {
  console.error(`Failed to start server: ${err}`);
}
