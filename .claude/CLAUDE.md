# Resume Website - Claude Code Instructions

## Project Context
Personal resume/portfolio website for Oleksandr Serhadov, Senior QA Automation Engineer.

## Tech Stack
- Node.js + Express
- Tailwind CSS
- Vanilla JavaScript (no frameworks - KISS principle)

## Code Style

### HTML
- Semantic HTML5 elements
- BEM-like class naming with Tailwind utilities
- Accessibility attributes (aria-*, role)

### CSS/Tailwind
- Mobile-first responsive design
- Use Tailwind utilities, avoid custom CSS unless necessary
- Consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64)

### JavaScript
- ES6+ syntax
- No external dependencies for UI
- Event delegation where appropriate

## Content Source
**IMPORTANT:** All resume content MUST come from:
`/Users/sauron/Downloads/Oleksandr-Serhadov-CV-new.pdf`

This is the single source of truth for:
- Personal information
- Work experience
- Skills and tools
- Education

## Commands

### Development
```bash
npm run dev    # Start dev server
npm run build  # Build for production
```

## File Conventions
- Components: lowercase-kebab-case
- Assets: descriptive-names
- Icons: tool-name.svg (e.g., playwright.svg)

## Don'ts
- Don't over-engineer
- Don't add features not in spec
- Don't use frameworks unless justified
- Don't add comments for obvious code
- Don't create abstractions for one-time use

## OpenSpec Workflow
Before major changes:
1. Check `openspec/specs/` for existing specs
2. Create proposal if none exists
3. Implement only after approval
