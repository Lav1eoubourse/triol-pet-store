# Triol Pet Store - Website Clone

A complete clone of the [Triol.pet](https://triol.pet/) pet store website built with Next.js 15, shadcn/ui components, and Tailwind CSS. This project recreates the original Russian pet store website with modern web technologies and responsive design.

## Features

- **🏠 Header Navigation** - Logo, search bar, mobile-responsive menu
- **🎯 Hero Section** - Product categories with interactive cards and promotional banners
- **🛍️ Product Showcase** - New products section with navigation controls
- **ℹ️ About Section** - Company information with statistics
- **📰 News Section** - Latest news and articles layout
- **📞 Footer** - Contact information, navigation links, and social media
- **📱 Responsive Design** - Mobile-first approach with tablet and desktop optimizations
- **🌐 Russian Language** - Complete Russian language content matching original site
- **🎨 Brand Colors** - Authentic Triol color scheme and styling

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Language**: TypeScript
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Lav1eoubourse/triol-pet-store.git
cd triol-pet-store
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Start the development server:
```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
triol-pet-store/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles with custom CSS variables
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Header.tsx          # Site header with navigation
│   │   ├── HeroSection.tsx     # Hero section with categories
│   │   ├── ProductShowcase.tsx # Product showcase section
│   │   ├── AboutSection.tsx    # About company section
│   │   ├── NewsSection.tsx     # News and articles section
│   │   └── Footer.tsx          # Site footer
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
└── .same/
    └── todos.md               # Development progress tracking
```

## Components Overview

### Header
- Logo and branding
- Navigation menu with dropdowns
- Search functionality
- Cookie consent notice
- Mobile hamburger menu

### Hero Section
- Product category grid with hover effects
- Promotional banner with animations
- Call-to-action buttons

### Product Showcase
- New products grid
- Product cards with images and pricing
- Navigation arrows for browsing

### About Section
- Company introduction
- Statistics display
- Company values and mission

### News Section
- Featured article layout
- Secondary news articles
- Publication dates and categories

### Footer
- Contact information
- Navigation links
- Social media links
- Company address and phone

## Development Notes

- The project uses custom CSS variables for the Triol brand colors
- Images are hosted on same-assets.com for development purposes
- Russian language content matches the original website
- All components are mobile-responsive
- Uses shadcn/ui for consistent design system

## Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

## Deployment

The project can be deployed on:
- [Vercel](https://vercel.com/) (recommended for Next.js)
- [Netlify](https://netlify.com/)
- Any hosting service that supports Node.js

## License

This project is for educational and demonstration purposes. The original website design belongs to Triol.pet.

## Acknowledgments

- Original design by [Triol.pet](https://triol.pet/)
- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons by [Lucide](https://lucide.dev/)
