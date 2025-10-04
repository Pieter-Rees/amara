# Static Build Instructions

This project is configured to build static output that can be deployed to any static hosting service.

## Building Static Output

### Option 1: Using npm scripts
```bash
# Build static output (recommended)
npm run build:static

# Build static output without linting (faster, bypasses lint errors)
npm run build:static:no-lint

# Alternative: Build and export (legacy method)
npm run export
```

### Option 2: Direct Next.js commands
```bash
# Build static output
npx next build

# Build static output without linting
npx next build --no-lint

# The static files will be generated in the /out directory
```

## Output Location

After building, all static files will be available in the `./out/` directory. This directory contains:

- Static HTML files for all pages
- Optimized CSS and JavaScript bundles
- Static assets (images, fonts, etc.)
- All necessary files for deployment

## Deployment

The contents of the `./out/` directory can be deployed to any static hosting service:

- **Vercel**: Deploy directly from Git or upload the `out` folder
- **Netlify**: Deploy directly from Git or drag & drop the `out` folder
- **GitHub Pages**: Upload the `out` folder contents to your repository
- **AWS S3**: Upload the `out` folder contents to an S3 bucket
- **Any web server**: Copy the `out` folder contents to your web server

## Configuration

The static build is configured in `next.config.ts`:

- `output: 'export'` - Enables static export
- `trailingSlash: true` - Adds trailing slashes to URLs for better compatibility
- `images: { unoptimized: true }` - Disables Next.js image optimization (required for static export)
- `experimental: { missingSuspenseWithCSRBailout: false }` - Disables server-side features

## Notes

- All pages are pre-rendered as static HTML
- Client-side routing still works with Next.js router
- Images are not optimized (use optimized images manually if needed)
- No server-side features are available (API routes, server components, etc.)
- The build process will show any static export warnings that need attention

## Development vs Production

- **Development**: Use `npm run dev` for local development
- **Production**: Use `npm run build:static` to generate static files for deployment
