# Interactive Storybook

## Overview

This project is an interactive storytelling application built using Vue.js, Node.js, and AI-powered content generation. It allows users to create and experience branching narrative stories with AI-generated text and images. It was developed as part of Washington University in St. Louis's CSE 503S: Rapid Prototyping and Creative Programming course.

## Features

- Create and manage multiple interactive stories
- AI-generated story content and images
- Branching narrative paths with multiple choices
- Visual story path tracking
- Dynamic image regeneration
- Story title editing and management
- Depth and path visualization for story navigation
- Persistent story storage with MongoDB

## Core Files

### Frontend
- `src/components/`
  - `StoryDisplay.vue` - Main component for viewing and interacting with stories
  - `StoryList.vue` - Story management and creation interface
  - `ChoiceButton.vue` - Interactive choice buttons for story navigation
- `src/router/index.js` - Application routing configuration
- `src/sample_story.json` - Example story structure

### Backend
- `server/index.js` - Main server implementation and API routes
- `server/connect.js` - Database connection management
- `server/postRoutes.js` - Story-related API endpoints

## Getting Started

1. **Install dependencies**:
```sh
# In the frontend directory
cd frontend
npm install

# In the interactive-storybook directory
cd ../interactive-storybook
pnpm install
```

2. **Environment Setup**:
   - Create a `.env` file in the project root
   - Required environment variables:
     - `VUE_APP_PORT` - Server port (default: 8000)
     - `VUE_APP_OPENAI_API_KEY` - OpenAI API key for content generation
     - `MONGO_URI` - MongoDB connection string

3. **Development**:
```sh
# For the frontend (Vite)
cd frontend
npm run dev

# For the interactive-storybook (Vue CLI)
cd ../interactive-storybook
pnpm run serve

# For the backend
cd ../backend
npm run start
```

4. **Production Build**:
```sh
# For the frontend
cd frontend
npm run build

# For the interactive-storybook
cd ../interactive-storybook
pnpm run build
```

## Technologies

- Vue.js 3 with Vue Router
- Node.js/Express.js
- MongoDB
- OpenAI API for content generation
- HTML5/CSS3

## Development Tools

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (recommended)
- Node.js and npm
- MongoDB

## Development Tools & Commands

### Frontend (Vite)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Interactive Storybook (Vue CLI)
- `pnpm run serve` - Start development server with hot-reload
- `pnpm run build` - Build for production
- `pnpm run lint` - Lint and fix files with ESLint

### Development Tools
- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (recommended)
- Node.js and npm/pnpm
- MongoDB
- ESLint with Vue plugin for code quality

## Technologies

- Vue.js 3 with Vue Router
- Node.js/Express.js
- MongoDB
- OpenAI API for content generation
- HTML5/CSS3

## Acknowledgments

Developed for CSE 503S at Washington University in St. Louis.