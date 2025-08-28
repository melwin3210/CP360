# React Big Calendar with Bar Graph

A modern calendar application built with React that displays interactive calendar events and shows detailed bar chart analytics when dates are clicked.

## Features

-  Interactive calendar with event highlighting
-  Bar chart modal showing data analytics for selected dates
-  Loading shimmer UI during data fetch
-  Modern UI with Tailwind CSS
-  Redux state management
-  Responsive design

## Libraries Used

### Core Libraries
- **React** - UI library
- **Vite** - Build tool and development server
- **React Big Calendar** - Calendar component
- **Recharts** - Bar chart visualization
- **Redux Toolkit** - State management
- **React Redux** - React bindings for Redux
- **date-fns** - Date utility library

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite plugin for Tailwind


## Key Features Implementation

### API Simulation
- Mocked API responses using `fetch()` with data URLs
- Simulated network delay for realistic loading experience
- Error handling for failed API calls

### Redux Store
- Centralized state management for calendar events
- Loading states for better UX
- Modal state management
- Event data persistence

### UI/UX
- Shimmer loading component mimicking calendar structure
- Modal overlay with backdrop for chart display
- Hover effects with pointer cursor on interactive elements
- Warning messages for dates with no data

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# or
npm start
```

### Build
```bash
npm run build


### Preview Production Build
```bash
npm run preview
# or
npm run serve
```



## Cross-Platform Compatibility

The application is designed to run smoothly on all operating systems:
- Windows
- macOS
- Linux

All dependencies are platform-agnostic and the build process works consistently across different environments.
