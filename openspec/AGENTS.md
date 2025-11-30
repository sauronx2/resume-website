# Agent Instructions for Resume Website

## Project Context

This is a personal portfolio/resume website for Oleksandr Serhadov - Senior QA Automation Engineer.

## Tech Stack

- **Server**: Express.js
- **Styling**: Tailwind CSS v3.4
- **Frontend**: Vanilla JavaScript
- **Build**: npm scripts with Tailwind CLI

## Project Structure

```
resume-website/
├── src/
│   ├── index.html          # Main HTML file
│   ├── styles/
│   │   ├── main.css        # Tailwind source
│   │   └── output.css      # Compiled CSS
│   └── js/
│       └── main.js         # Client-side JS
├── public/
│   └── assets/             # Static assets (CV PDF, images)
├── openspec/               # Specifications
│   ├── AGENTS.md           # This file
│   ├── project.md          # Project context
│   └── specs/              # Change specifications
├── server.js               # Express server
├── tailwind.config.js      # Tailwind configuration
└── package.json
```

## Development Commands

```bash
npm run dev       # Start dev server with CSS watch
npm run build     # Build production CSS
npm run serve     # Start production server
npm start         # Build + serve
```

## Agent Guidelines

### Before Making Changes

1. Read this file and `project.md` for context
2. Check existing code patterns in `src/index.html`
3. Follow Tailwind CSS conventions (utility-first)
4. Ensure responsive design (mobile-first approach)

### Code Style

- Use semantic HTML5 elements
- Follow existing Tailwind class patterns
- Keep JavaScript minimal and vanilla
- Test on multiple screen sizes

### Making Changes

1. Create a spec in `openspec/specs/` for significant changes
2. Update HTML in `src/index.html`
3. Run `npm run css:build` if using new Tailwind classes
4. Test locally before committing

### Commit Guidelines

- Use short, descriptive commit messages
- Follow conventional commits: `feat:`, `fix:`, `docs:`, `style:`
- Reference issue numbers if applicable

## Key Components

### Sections (in order)
1. **About** - Hero section with stats
2. **Experience** - Timeline of work history
3. **Skills** - Technical skills grid with icons
4. **Projects** - Company highlights
5. **Contact** - Contact form and info

### Custom CSS Classes (defined in main.css)
- `.nav-link` - Navigation links
- `.section-title` / `.section-subtitle` - Section headers
- `.card` - Content cards
- `.btn-primary` / `.btn-secondary` - Buttons
- `.skill-tag` - Skill badges with icons
- `.stat-card` / `.stat-number` / `.stat-label` - Statistics

## External Resources

- Icons: DevIcons CDN, Simple Icons CDN
- Fonts: Google Fonts (Inter)
- No external JS dependencies (vanilla only)
