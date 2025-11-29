const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from src directory
app.use(express.static(path.join(__dirname, 'src')));

// Serve public assets (CV PDF, images, icons)
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/icons', express.static(path.join(__dirname, 'public', 'icons')));

// Serve index.html for all routes (SPA-like behavior)
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Resume website running at http://localhost:${PORT}`);
});
