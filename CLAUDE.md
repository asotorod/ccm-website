# CCM Website - Claude Code Context

## Project Overview
Public marketing website for CCM Construction - 123ccm.com redesign

## Structure
- `/src` - Source files (React components, pages)
- `/public` - Static assets (images, fonts)
- `index.html` - Entry point
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration

## Commands
```bash
npm run dev       # Local dev server (Vite)
npm run build     # Production build
npm run preview   # Preview production build
```

## Tech Stack
- Framework: React + Vite
- Styling: Tailwind CSS
- Build: Vite
- Deployment: Static hosting

## Style Guide
- Professional construction industry aesthetic
- Mobile-first responsive design
- Use Tailwind utility classes
- Clean, modern look with strong CTAs

## Tailwind Notes
- Custom config in `tailwind.config.js`
- PostCSS configured in `postcss.config.js`

## Rules
- Mobile-responsive is mandatory
- Optimize all images (compress before adding)
- Keep bundle size small
- Test across major browsers
- Follow Tailwind best practices

## Performance
- Lazy load images where possible
- Minimize JavaScript bundle
- Use Vite's built-in optimizations
