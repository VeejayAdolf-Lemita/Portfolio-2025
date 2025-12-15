# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations with Framer Motion, state management with Zustand, and API integration for dynamic project data.

## Features

- 🎨 Modern, responsive design with dark theme
- ✨ Smooth animations powered by Framer Motion
- 🐻 State management with Zustand
- 🔌 API integration for fetching project data
- 📱 Fully responsive across all devices
- ⚡ Fast development with Vite

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Zustand** - State management
- **Axios** - HTTP client for API calls

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

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About.jsx       # About me section
│   ├── Header.jsx      # Navigation header
│   ├── TechStack.jsx   # Technologies showcase
│   ├── Projects.jsx    # Projects showcase
│   └── Footer.jsx      # Footer component
├── store/
│   └── projectStore.js # Zustand store for projects
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Customization

### Update Personal Information

Edit `src/components/About.jsx` to update your personal information and profile picture.

### Modify Tech Stack

Edit `src/components/TechStack.jsx` to add or remove technologies.

### Change Projects API

Update the API endpoint in `src/store/projectStore.js` to fetch projects from your own API or GitHub profile.

## License

MIT

