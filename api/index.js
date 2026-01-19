const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

// Enable compression
app.use(compression());

// Serve static files from root directory
app.use(express.static(path.join(__dirname, '..')));

// Serve static files from dist if it exists (production build)
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

// Route for index.html
app.get('*', (req, res) => {
  const distIndex = path.join(distPath, 'index.html');
  const rootIndex = path.join(__dirname, '..', 'index.html');
  
  // Try dist first, then root
  const indexPath = require('fs').existsSync(distIndex) ? distIndex : rootIndex;
  res.sendFile(indexPath);
});

// Export as serverless function
module.exports = app;
