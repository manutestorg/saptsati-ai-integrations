# Saptsati AI Integrations - Copilot Instructions

## Project Overview
A marketing website for Saptsati, an AI integration services company. Built with **Vite + React + TypeScript + shadcn/ui + Tailwind CSS**.

## Architecture & Key Decisions

### Tech Stack
- **Build Tool**: Vite with SWC for fast React compilation
- **UI Framework**: shadcn/ui components (Radix UI primitives + Tailwind)
- **Animations**: Framer Motion for all animations
- **Routing**: React Router v6 (client-side only, no SSR)
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack Query v5 for async state
- **SEO**: react-helmet-async for meta tags

### Project Structure
```
src/
├── components/       # Page sections (HeroSection, Navbar, etc.)
│   └── ui/          # shadcn/ui primitives (button, card, etc.)
├── pages/           # Route components (Index, NotFound)
├── lib/             # Utilities (cn helper from shadcn)
└── hooks/           # Custom React hooks
```

**Critical**: This is a **single-page marketing site**. All content lives in [src/pages/Index.tsx](src/pages/Index.tsx) which composes section components.

### Path Aliasing
- `@/` resolves to `src/` (configured in [vite.config.ts](vite.config.ts) and [tsconfig.json](tsconfig.json))
- Always use `@/components/*`, `@/lib/*`, `@/hooks/*` for imports

## Development Workflow

### Running the Project
```bash
npm run dev          # Start dev server on http://localhost:8080
npm run build        # Production build (outputs to dist/)
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

**Port**: Dev server runs on `:8080`, not the default Vite port.

### Production Deployment
- **Base path**: Production builds use `/saptsati-ai-integrations/` base (see [vite.config.ts](vite.config.ts#L7))
- Built for GitHub Pages at `https://manutestorg.github.io/saptsati-ai-integrations/`
- **SPA routing**: Uses 404.html redirect trick for client-side routing
- **.nojekyll**: Required to prevent Jekyll processing on GitHub Pages

## Code Conventions

### Component Patterns
1. **Section components** (HeroSection, ServicesSection, etc.):
   - Export default function component
   - Use Framer Motion for animations
   - Include responsive design with Tailwind breakpoints
   - Example structure:
   ```tsx
   import { motion } from "framer-motion";
   import { Button } from "@/components/ui/button";
   
   const HeroSection = () => {
     return (
       <section className="relative min-h-screen">
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
           {/* Content */}
         </motion.div>
       </section>
     );
   };
   export default HeroSection;
   ```

2. **shadcn/ui components** ([src/components/ui/](src/components/ui/)):
   - Auto-generated, modify with caution
   - Use `cn()` utility for className merging
   - Forward refs for Radix compatibility
   - Custom variants in [button.tsx](src/components/ui/button.tsx) (`hero`, `heroOutline`)

### Styling System
- **Design tokens**: CSS variables in [src/index.css](src/index.css) (dark theme only)
- **Primary color**: Cyan (`--primary: 185 80% 50%`)
- **Accent color**: Purple (`--accent: 280 70% 60%`)
- **Custom animations**: `float`, `pulse-glow`, `gradient-x` in [tailwind.config.ts](tailwind.config.ts#L75-L93)
- **Typography**: `Space Grotesk` (display), `Inter` (body)
- **Glass effect**: Use `.glass` utility class (defined in index.css)
- **Gradient text**: Use `.text-gradient` utility class

### TypeScript Configuration
- **Strict mode**: Partially disabled (`noImplicitAny: false`, `strictNullChecks: false`)
- **Unused code**: Warnings disabled for local variables and parameters
- Use `any` when needed without linter errors

### Icon Usage
- **lucide-react** for all icons (not heroicons or react-icons)
- Import specific icons: `import { ArrowRight, Sparkles } from "lucide-react"`
- Common icons: `ArrowRight`, `Sparkles`, `Brain`, `Zap`, `Check`, `Mail`

## Routing & Navigation
- All routes defined in [src/App.tsx](src/App.tsx)
- **Current routes**: `/` (Index), `*` (NotFound catch-all)
- Add new routes **above** the `*` catch-all route
- Use `react-router-dom`'s `BrowserRouter` (no HashRouter)

## SEO & Meta Tags
- Use `react-helmet-async` in page components:
  ```tsx
  <Helmet>
    <title>Page Title</title>
    <meta name="description" content="..." />
  </Helmet>
  ```
- See [src/pages/Index.tsx](src/pages/Index.tsx#L12-L18) for reference

## Adding shadcn/ui Components
When adding new shadcn components, they auto-install to `src/components/ui/`. Configuration in [components.json](components.json):
- Style: `default`
- Base color: `slate`
- CSS variables: enabled
- Aliases use `@/` prefix

## Common Pitfalls
- **Don't** modify the base URL in vite.config.ts without updating deployment config
- **Don't** use client-side state for navigation; use React Router
- **Don't** import from `react-router` directly; use `react-router-dom`
- **Remember**: This is a static site—no backend, no API routes
- **Animations**: Always wrap animated elements in `<motion.*>` from framer-motion

## External Dependencies
- No external APIs or services currently integrated
- No environment variables required for local development
- Fonts loaded from Google Fonts CDN

## Performance Considerations
- Vite uses SWC for faster builds (see `@vitejs/plugin-react-swc`)
- Code splitting happens automatically via dynamic imports
