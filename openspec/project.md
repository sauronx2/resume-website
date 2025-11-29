# Resume Website - Project Specification

## Project Overview
A personal resume/portfolio website for Oleksandr Serhadov, Senior QA Automation Engineer.

## Technology Stack
- **Runtime:** Node.js
- **Styling:** Tailwind CSS
- **Build:** PostCSS + Autoprefixer
- **Server:** Express.js (for serving static files)

## Pages
1. **About Me** - Introduction and profile summary
2. **Professional Experience** - Work history timeline
3. **Skills & Tools** - Technical skills with clickable links and official logos
4. **Project Highlights** - Notable projects and achievements
5. **Get in Touch** - Contact information and form

## Design Principles
- **SOLID** - Single responsibility components
- **YAGNI** - Only implement what's needed
- **DRY** - Reusable components and utilities
- **KISS** - Simple, readable code

## Content Source
All resume content is sourced from:
`/Users/sauron/Downloads/Oleksandr-Serhadov-CV-new.pdf`

## Key Features
- Responsive design (mobile-first)
- Downloadable PDF resume
- Clickable tool/technology links
- Official logos for all tools
- Smooth navigation between pages
- Accessibility compliant

## File Structure
```
resume-website/
├── src/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── js/
│       └── main.js
├── public/
│   ├── assets/
│   │   └── Oleksandr-Serhadov-CV.pdf
│   ├── images/
│   └── icons/
├── openspec/
│   ├── AGENTS.md
│   ├── project.md
│   └── specs/
├── .claude/
│   └── commands/
├── tailwind.config.js
├── postcss.config.js
└── package.json
```
