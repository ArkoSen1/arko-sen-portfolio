const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Enable compression in production
if (isProduction) {
  app.use(compression());
}

// Determine which directory to serve from
const distDir = path.join(__dirname, 'dist');
const serveDir = isProduction && fs.existsSync(distDir) ? distDir : __dirname;

// Serve static files
app.use(express.static(serveDir));

// Route for index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(serveDir, 'index.html'));
});

// Handle 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(serveDir, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📦 Environment: ${isProduction ? 'Production' : 'Development'}`);
  if (!isProduction) {
    console.log(`🔄 Auto-reload enabled (nodemon)`);
  }
});
