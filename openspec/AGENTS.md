# OpenSpec Agents Configuration

## Overview
This document defines AI agents for the Resume Website project development.

## Agents

### 1. Project Architect (`architect`)
**Role:** System design and project structure
**Responsibilities:**
- Define folder structure
- Configure build tools
- Set up development environment
- Establish coding conventions

### 2. Frontend Developer (`frontend-dev`)
**Role:** UI implementation
**Responsibilities:**
- Implement HTML/CSS with Tailwind
- Create responsive layouts
- Build interactive components
- Optimize for performance

### 3. Icons Researcher (`icons-researcher`)
**Role:** Asset collection
**Responsibilities:**
- Find official tool/technology logos
- Collect icons in appropriate formats
- Ensure proper licensing
- Optimize assets for web

### 4. Documentation Writer (`docs-writer`)
**Role:** Documentation and specs
**Responsibilities:**
- Write OpenSpec specifications
- Document components
- Create README files
- Maintain changelog

## Workflow

```
1. SPEC    → Define feature in openspec/specs/
2. REVIEW  → Get approval before implementation
3. BUILD   → Implement against approved spec
4. VERIFY  → Test and validate
5. ARCHIVE → Update documentation
```

## Communication
Agents coordinate through:
- OpenSpec files in `openspec/specs/`
- Git commits with clear messages
- Status updates in task orchestration
