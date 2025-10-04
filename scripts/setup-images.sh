#!/bin/bash

# Amara Hoeve Image Setup Script
echo "🏕️  Setting up image directories for Amara Hoeve..."

# Create directories
mkdir -p public/images/gallery
mkdir -p public/images/hero  
mkdir -p public/images/sections/about
mkdir -p public/images/sections/camping
mkdir -p public/images/sections/yurt
mkdir -p public/images/sections/contact

echo "✅ Created image directories:"
echo "   📁 public/images/gallery/     - Main gallery images"
echo "   📁 public/images/hero/        - Hero section images"
echo "   📁 public/images/sections/    - Section-specific images"

echo ""
echo "📋 Next steps:"
echo "1. Add your images to the appropriate directories"
echo "2. Use these recommended filenames for gallery images:"
echo "   - camping-1.jpg"
echo "   - nature-1.jpg" 
echo "   - yurt-1.jpg"
echo "   - sea-1.jpg"
echo "   - bergen-1.jpg"
echo "   - farm-1.jpg"
echo "   - sunset-1.jpg"
echo "   - family-1.jpg"
echo ""
echo "3. Optimize images to 800x600px for gallery"
echo "4. Run 'npm run dev' to test your images"
echo ""
echo "🎉 Ready to add your Amara Hoeve images!"
