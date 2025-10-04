# How to Add Images to Amara Hoeve Website

## Step 1: Prepare Your Images

1. **Resize your images** to the recommended sizes:
   - Gallery images: 800x600px (4:3 aspect ratio)
   - Hero images: 1920x1080px (16:9 aspect ratio)

2. **Optimize your images** using tools like:
   - [TinyPNG](https://tinypng.com/) - for compression
   - [ImageOptim](https://imageoptim.com/) - for Mac users
   - [Squoosh](https://squoosh.app/) - Google's image optimizer

## Step 2: Add Images to the Correct Directory

Place your images in the following structure:

```
public/images/
├── gallery/           # Main gallery images
│   ├── camping-1.jpg
│   ├── camping-2.jpg
│   ├── nature-1.jpg
│   ├── yurt-1.jpg
│   ├── sea-1.jpg
│   ├── bergen-1.jpg
│   ├── farm-1.jpg
│   ├── sunset-1.jpg
│   └── family-1.jpg
├── hero/             # Hero section images
│   └── hero-main.jpg
└── sections/         # Section-specific images
    ├── about/
    ├── camping/
    ├── yurt/
    └── contact/
```

## Step 3: Update Image References

The gallery is already configured to look for these specific filenames:

- `camping-1.jpg` - Camping in de natuur
- `nature-1.jpg` - Bosrijke omgeving  
- `yurt-1.jpg` - Wonder Yurt
- `sea-1.jpg` - Dichtbij de zee
- `bergen-1.jpg` - Kunstenaarsdorp Bergen
- `farm-1.jpg` - Boerderij leven
- `sunset-1.jpg` - Zonsondergang
- `family-1.jpg` - Familie tijd

## Step 4: Test Your Images

1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000`
3. Navigate to the "Galerij" section
4. Check that all images load correctly

## Step 5: Add More Images (Optional)

To add more images to the gallery:

1. Add the image file to `public/images/gallery/`
2. Update the `galleryImages` array in `src/app/page.tsx`
3. Add a new object with the image details

Example:
```tsx
{
    id: '9',
    src: '/images/gallery/new-image.jpg',
    alt: 'Description of the image',
    title: 'Image Title',
    description: 'Image description'
}
```

## Troubleshooting

- **Images not loading?** Check the file path and make sure the image is in the correct directory
- **Images too large?** Optimize them using the tools mentioned above
- **Wrong aspect ratio?** Resize images to 800x600px for gallery images

