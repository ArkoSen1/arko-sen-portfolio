# ARKO Portfolio - React Application

A modern portfolio website for ARKO, a visual storyteller, built with React and Vite.

## Features

- Modern React architecture
- WebGL background animations
- Responsive design
- Smooth scrolling navigation
- Image lightbox gallery
- Custom cursor effects
- Loading animations
- Mobile-friendly menu

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Deployment on Vercel

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Import your repository in Vercel
3. Vercel will automatically detect the Vite configuration
4. The build command `npm run build` and output directory `dist` are already configured
5. Deploy!

The `vercel.json` file is included for additional configuration if needed.

## Project Structure

```
├── public/
│   └── profile_picture.jpg
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Videos.jsx
│   │   ├── Gallery.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── WebGLBackground.jsx
│   │   └── Lightbox.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## Technologies Used

- React 18
- Vite
- WebGL for background animations
- CSS3 with custom properties
- Modern ES6+ JavaScript

## License

© 2024 ARKO. All rights reserved.
