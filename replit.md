# Wedding Website - Replit Agent Guide

## Overview

This is a modern wedding website application built for "Menia & Florian's" wedding celebration. The application provides wedding information including schedules, venue details, accommodation options, and contact information. It's designed as a single-page application with smooth scrolling navigation and a wedding-themed color scheme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom wedding theme colors
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL sessions using connect-pg-simple
- **Development**: Hot module replacement via Vite middleware in development

### Design System
- **Theme**: Wedding-focused color palette with cream, light brown, medium brown, and dark brown
- **Typography**: Inter for body text, Playfair Display for headings
- **Components**: Fully accessible components from Radix UI
- **Responsive**: Mobile-first design with responsive breakpoints

## Key Components

### Frontend Structure
- **Navigation**: Fixed header with smooth scroll navigation
- **Sections**: 
  - Hero with couple photo and wedding details
  - Schedule with timeline of wedding events
  - Venue information with interactive map
  - Accommodation recommendations
  - Beach bars (for honeymoon activities)
  - Contact and RSVP information

### Backend Structure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user schema with username/password
- **API Routes**: RESTful endpoints with /api prefix
- **Development Tools**: Request logging and error handling middleware

### Database Schema
- **Users Table**: Basic user authentication with id, username, password
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Drizzle migrations in ./migrations directory

## Data Flow

1. **Client Requests**: React components use TanStack Query for data fetching
2. **API Layer**: Express routes handle HTTP requests with proper error handling
3. **Storage Layer**: Abstract storage interface allows for flexible data persistence
4. **Database**: PostgreSQL with Drizzle ORM for type-safe queries
5. **Session Management**: PostgreSQL-based sessions for user authentication

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for serverless PostgreSQL
- **UI Framework**: Comprehensive Radix UI component collection
- **Styling**: Tailwind CSS with PostCSS processing
- **Forms**: React Hook Form with Hookform resolvers
- **Maps**: Leaflet for interactive venue mapping
- **Date Handling**: date-fns for date formatting

### Development Dependencies
- **Build**: Vite with TypeScript support
- **Database**: Drizzle Kit for schema management
- **Runtime**: tsx for TypeScript execution
- **Bundling**: esbuild for production builds

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to dist/public
2. **Backend**: esbuild bundles server code to dist/index.js
3. **Database**: Drizzle migrations applied via npm run db:push

### Environment Configuration
- **Development**: NODE_ENV=development with Vite middleware
- **Production**: NODE_ENV=production with static file serving
- **Database**: DATABASE_URL environment variable required

### File Structure
- **Client**: All frontend code in ./client directory
- **Server**: Backend code in ./server directory  
- **Shared**: Common schemas and types in ./shared directory
- **Output**: Built files in ./dist directory

### Deployment Requirements
- PostgreSQL database with DATABASE_URL configured
- Node.js environment with ES modules support
- Static file serving for production builds
- Session storage requires database connectivity

The application follows a clean separation between frontend and backend with shared TypeScript types, making it easy to maintain and extend with additional wedding-related features.