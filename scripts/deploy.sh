#!/bin/bash

# Resume Website - Deploy to GitHub Pages
# This script builds the site and prepares the docs/ folder for deployment

set -e  # Exit on error

echo "🚀 Starting deployment process..."

# Step 1: Build CSS
echo "📦 Building Tailwind CSS..."
npm run build

# Step 2: Clean and recreate docs folder
echo "🗑️  Cleaning docs/ folder..."
rm -rf docs
mkdir -p docs

# Step 3: Copy source files
echo "📋 Copying source files..."
cp -r src/* docs/

# Step 4: Copy assets
echo "🎨 Copying assets..."
cp -r public/assets docs/assets

# Step 5: Create CNAME for custom domain
echo "🌐 Creating CNAME file..."
echo 'serhadov.dev' > docs/CNAME

echo "✅ Deployment files ready in docs/ folder!"
echo ""
echo "Next steps:"
echo "  git add docs/"
echo "  git commit -m \"chore: update deployment\""
echo "  git push"
