# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with React and Vite, featuring a browser-like interface with draggable popup functionality. The main application is a single-page site with typed text effects and social media links.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Architecture

### Tech Stack
- **React 19** with React DOM
- **Vite** for build tooling and development
- **Tailwind CSS** for styling with PostCSS
- **react-typed** for typing animation effects

### Key Components Structure
- `src/script.jsx` - Main App component and entry point
- `src/components/Draggable.jsx` - Handles drag functionality
- `src/components/Popup.jsx` - Basic popup component
- `src/components/DraggablePopup.jsx` - Combined draggable popup component

### Styling System
- Tailwind CSS with custom theme colors:
  - `theme-blue`: rgb(94, 131, 252)
  - `theme-lb`: rgb(150, 173, 250) 
  - `theme-purple`: rgb(162, 151, 255)
- Custom fonts: Ubuntu (headers) and Roboto Mono (normal text)
- FontAwesome icons loaded via CDN

### Component Architecture
The app uses a browser-like interface metaphor with:
- Draggable popup functionality for email display
- Responsive centering calculations for popup positioning
- Event-driven state management for popup visibility
- React hooks for window resize handling

### Entry Point
The application mounts to `#root` in `index.html` and starts from `src/script.jsx`.