# Resume Website - Project Specification

## Overview

Personal portfolio website showcasing Oleksandr Serhadov's experience as a Senior QA Automation Engineer. Built with Express.js backend and Tailwind CSS frontend.

## Goals

1. Professional online presence for job search
2. Showcase technical skills and experience
3. Provide easy contact methods
4. Mobile-responsive design

## Target Audience

- Technical recruiters
- Hiring managers
- Engineering leads
- Potential clients

## Key Features

### Implemented
- [x] Responsive navigation with mobile menu
- [x] Hero section with key stats (6+ years, 4 companies, 15+ projects, 10+ mentored)
- [x] Professional experience timeline
- [x] Skills grid with categorized tools and icons
- [x] Soft skills section (responsive grid layout)
- [x] Project highlights by company
- [x] Contact section with form
- [x] Downloadable CV (PDF)

### Technical Highlights
- Pure vanilla JavaScript (no frameworks)
- Tailwind CSS utility-first styling
- Express.js for simple server
- Optimized icon loading from CDNs
- Semantic HTML5 structure

## Design Decisions

### Color Scheme
- Primary: Blue (`blue-600`, `blue-700`)
- Background: White/Gray gradients
- Accents: Green (current badge), category colors

### Typography
- Font: Inter (Google Fonts)
- Responsive sizing across breakpoints

### Layout
- Max width: `max-w-6xl` (1152px)
- Grid-based responsive layouts
- Mobile-first approach

## Recent Changes (2025-11-30)

### Session 7 - Layout Fixes & Icon Updates

#### Hero Section Layout Fixed
- H1 "Hi, I'm Oleksandr Serhadov" restored to single line on desktop (`md:whitespace-nowrap`)
- Stats container moved lower (`md:mt-8` → `md:mt-16`) for better visual balance
- Mobile responsiveness preserved (text wraps naturally on small screens)

#### Contact Section Corrections
- Removed GitHub link (was added without request)
- Removed GitHub from footer
- Section now has Email + LinkedIn only

#### Icon Updates (Skills Section)
- Selenide: Using official favicon from selenide.org
- ReportPortal: Using official favicon from reportportal.io
- Selenium: Green version via SimpleIcons (`#43B02A`)
- Selenium Grid: Purple version via SimpleIcons (`#6B5B95`)

### Session 6 - Contact Section Redesign & Mobile Audit

#### Contact Section ("Get in Touch") Redesigned
- Fixed LinkedIn duplicate text issue (was showing "LinkedIn" twice)
- ~~Added GitHub link as third contact option~~ (reverted in Session 7)
- Enlarged icons (w-12 h-12 → w-14 h-14) with hover effects
- Increased spacing between contact items (space-y-4 → space-y-6)
- Added descriptive subtexts ("Connect with me", "View my projects")
- Languages section enhanced with better padding
- GitHub added to footer

#### Mobile Responsiveness Audit (Score: 92/100)
- Removed `whitespace-nowrap` from H1 to fix overflow on narrow devices (< 375px)
- Verified all breakpoints (sm, md, lg, xl) work correctly
- Mobile navigation (hamburger menu) confirmed working
- All grids stack properly on mobile
- Form inputs are touch-friendly (48px+ targets)
- No critical overflow issues found

#### Cross-Browser Compatibility Verified
- Chrome (Windows/Mac/Android) ✓
- Firefox (Windows/Mac) ✓
- Safari (Mac/iOS) ✓
- Edge (Windows) ✓
- Samsung Internet (Android) ✓

Features with graceful fallbacks:
- `backdrop-blur-sm` - falls back to opacity
- `scroll-behavior: smooth` - falls back to instant scroll

### Previous Changes (Session 5)
- Badge color: emerald-500 → teal-500 (harmonizes with blue design)
- Bullet alignment fixes (items-center)
- Removed Location and Phone from contact section
- Footer year updated to 2025

### Earlier Sessions
#### Links Updated
- XCUITest -> GitHub appium-xcuitest-driver
- Flutter Driver -> GitHub appium-flutter-integration-driver

#### Icons Updated
- BrowserStack: Google Favicon API (reliable icon source)
- LambdaTest: Google Favicon API (reliable icon source)

#### Stats Updated
- Projects Delivered: 50+ → 15+
- Engineers Mentored: 15+ → 10+

#### Soft Skills Redesigned
New skills with responsive grid:
1. Strategic Problem-Solving
2. Technical Leadership & Mentoring
3. Ownership & Accountability
4. Cross-Team Collaboration
5. Decision-Making Under Pressure

#### Experience Updated
- Changed from 7+ to 6+ years of experience

## Deployment

- Repository: `sauronx2/resume-website` on GitHub
- Hosting: TBD (GitHub Pages recommended)

## Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement contact form backend
- [ ] Add project detail pages
- [ ] SEO optimization
- [ ] Performance monitoring
