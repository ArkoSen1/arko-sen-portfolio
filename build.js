const fs = require('fs');
const path = require('path');

console.log('🔨 Building for production...');

// Read the index.html file
const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Basic minification (remove extra whitespace, comments)
html = html
  .replace(/<!--[\s\S]*?-->/g, '') // Remove HTML comments
  .replace(/\s+/g, ' ') // Replace multiple spaces with single space
  .replace(/>\s+</g, '><') // Remove spaces between tags
  .trim();

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy index.html to dist
fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8');
console.log('✅ Minified index.html created in dist/');

// Copy profile picture if it exists
const profilePicPath = path.join(__dirname, 'profile_picture.jpg');
if (fs.existsSync(profilePicPath)) {
  fs.copyFileSync(profilePicPath, path.join(distDir, 'profile_picture.jpg'));
  console.log('✅ profile_picture.jpg copied to dist/');
}

console.log('✨ Build complete!');
console.log('📦 Production files are in the dist/ directory');
console.log('🚀 Run "npm run production" to start the production server');
