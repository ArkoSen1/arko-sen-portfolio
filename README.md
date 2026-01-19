# ARKO Portfolio Website

Portfolio website for ARKO - Visual Storyteller, featuring video editing, cinematography, and photography work.

## 🚀 Quick Start

### Installation

Install the required dependencies:

```bash
npm install
```

### Development

Run the development server with auto-reload:

```bash
npm run dev
```

The site will be available at `http://localhost:3000` with automatic reloading when you make changes to files.

### Production Build

Build the production-ready version:

```bash
npm run build
```

This will:
- Minify the HTML
- Copy necessary files to the `dist/` directory
- Optimize for production deployment

### Production Server

Run the production server:

```bash
npm run production
```

Or use the start script:

```bash
npm start
```

## 📁 Project Structure

```
arko-sen-portfolio/
├── index.html              # Main HTML file
├── profile_picture.jpg     # Profile picture
├── server.js              # Express server configuration
├── build.js               # Build script for production
├── package.json           # Node.js dependencies and scripts
├── nodemon.json           # Nodemon configuration for dev
└── dist/                  # Production build output (generated)
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with auto-reload
- `npm run build` - Build production-ready files
- `npm run production` - Start production server
- `npm start` - Start server (defaults to development)

## 🌐 Deployment

For production deployment:

1. Run `npm run build` to create optimized files
2. Deploy the `dist/` directory to your hosting service
3. Or run `npm run production` if your hosting supports Node.js

## 📝 Notes

- The development server uses nodemon for automatic reloading
- Production build minifies HTML and optimizes assets
- The server automatically serves from `dist/` in production mode if it exists
- Default port is 3000 (configurable via PORT environment variable)
