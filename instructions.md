# Project Overview

This is a modern e-commerce application built with Next.js, TypeScript, and WooCommerce integration. The project uses GraphQL for data fetching and Tailwind CSS for styling.

## Tech Stack

- **Frontend Framework**: Next.js with TypeScript
- **State Management**: React Context API + Reducers
- **Styling**: Tailwind CSS + SCSS Modules
- **Data Fetching**: Apollo Client (GraphQL)
- **CMS**: WordPress (Headless) + WooCommerce
- **Build Tools**: PostCSS, Autoprefixer

## Project Structure

```
.
├── src/
│   ├── api/          # GraphQL queries and mutations
│   ├── components/   # Reusable React components
│   ├── contexts/     # React Context definitions
│   ├── interfaces/   # TypeScript type definitions
│   ├── lib/         # Utility functions and configurations
│   ├── pages/       # Next.js pages and routing
│   ├── reducers/    # State management reducers
│   └── styles/      # Global styles and CSS modules
├── public/          # Static assets
└── [config files]   # Various configuration files
```

## Key Features

1. **Shopping Cart**
   - Persistent cart state using cookies
   - Real-time cart updates
   - Quantity management
   - Price calculations

2. **Product Management**
   - Product categorization
   - Product search
   - Sale price support
   - Image optimization

3. **Performance**
   - Incremental Static Regeneration (ISR)
   - Image optimization with Next.js
   - TypeScript for type safety
   - Responsive design

4. **UI/UX**
   - Responsive layout
   - Custom scrollbar styling
   - Loading states
   - Error handling

## Required Backend Setup

The project requires a WordPress installation with the following plugins:
- WooCommerce
- WP GraphQL
- WPGraphQL CORS
- WPGraphQL WooCommerce (WooGraphQL)

## Environment Variables

The project requires the following environment variable:
- `NEXT_PUBLIC_API_URI`: WordPress backend URL

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `yarn install`
3. Set up environment variables
4. Run development server: `npm run dev` or `yarn dev`
5. Open http://localhost:3000

## Development Notes

- The project uses TypeScript for type safety
- Styling is handled through a combination of Tailwind CSS and SCSS modules
- State management is handled through React Context and Reducers
- Cart state persists through browser sessions using cookies
- The project implements ISR for optimal performance and data freshness