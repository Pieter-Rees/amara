# Amara Hoeve Images

This directory contains all the images for the Amara Hoeve website.

## Directory Structure

```
public/images/
├── gallery/           # Gallery images (main photo collection)
│   ├── camping-1.jpg
│   ├── camping-2.jpg
│   ├── yurt-1.jpg
│   ├── nature-1.jpg
│   └── ...
├── hero/             # Hero section images
│   ├── hero-main.jpg
│   └── hero-background.jpg
├── sections/         # Section-specific images
│   ├── about/
│   ├── camping/
│   ├── yurt/
│   └── contact/
└── README.md         # This file
```

## Image Guidelines

### Recommended Sizes:
- **Gallery images**: 800x600px (4:3 aspect ratio)
- **Hero images**: 1920x1080px (16:9 aspect ratio)
- **Section images**: 600x400px (3:2 aspect ratio)

### File Formats:
- **JPEG** for photos
- **PNG** for images with transparency
- **WebP** for optimized web delivery (optional)

### Naming Convention:
- Use descriptive names with hyphens
- Examples: `camping-tent-nature.jpg`, `yurt-interior.jpg`, `sunset-camping.jpg`

## How to Add Images

1. **Add your images** to the appropriate directory
2. **Update the gallery** in `src/app/page.tsx` to reference the new images
3. **Use the path** `/images/gallery/your-image.jpg` in your code

## Example Usage

```tsx
// In your React component
const imagePath = "/images/gallery/camping-1.jpg"
<img src={imagePath} alt="Camping at Amara Hoeve" />
```

## Optimization Tips

- Compress images before adding them
- Use tools like TinyPNG or ImageOptim
- Consider using Next.js Image component for automatic optimization

