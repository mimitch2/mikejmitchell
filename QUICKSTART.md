# Quick Start Guide

Get your photo portfolio running in 5 minutes!

## Step 1: Install Dependencies
```bash
cd mikejmitchell
npm install
```

## Step 2: Set Up Sanity
```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Initialize project (choose "Create new project")
sanity init --project-type=clean
```

## Step 3: Configure Environment
```bash
# Copy example env file
cp .env.local.example .env.local

# Edit .env.local and add your Sanity project ID
# (You got this from the previous step)
```

Your `.env.local` should look like:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
```

## Step 4: Deploy Schema
```bash
npx sanity@latest schema deploy
```

## Step 5: Start Development
```bash
npm run dev
```

## Access Your Site

- **Portfolio**: http://localhost:3000
- **Sanity Studio**: http://localhost:3000/studio

## Create Your First Gallery

1. Go to http://localhost:3000/studio
2. Click "Gallery" → "Create"
3. Add:
   - Title (required)
   - Slug (auto-generates, or customize)
   - Cover image
   - Gallery images
   - Toggle "Featured" to show on homepage
4. Click "Publish"

## View Your Gallery

Visit http://localhost:3000 to see your gallery!

## Next Steps

- Add more galleries in the Studio
- Customize styles in `app/globals.css`
- Check the full README.md for deployment instructions

## Troubleshooting

**Can't find project ID?**
- Look in terminal output from `sanity init`
- Or visit https://www.sanity.io/manage

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Need help?**
See the full README.md for detailed documentation.
