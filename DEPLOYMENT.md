# Deploying Your Backgammon Heuristics Website

This guide will help you deploy your backgammon heuristics website to various hosting platforms.

## Option 1: Deploy to Vercel (Recommended)

Vercel is the company behind Next.js and offers the easiest deployment experience.

1. Create an account on [Vercel](https://vercel.com/) (free tier available)
2. Push your code to a Git provider (GitHub, GitLab, or Bitbucket)
3. Import your repository on Vercel
4. Deploy settings will be automatically configured
5. Your site will be live in minutes

## Option 2: Deploy to Netlify

Netlify is another excellent option for hosting static Next.js applications.

1. Create an account on [Netlify](https://www.netlify.com/) (free tier available)
2. Add your repository from GitHub, GitLab, or Bitbucket
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Click "Deploy site"

## Option 3: Deploy to GitHub Pages

To deploy to GitHub Pages:

1. Create a GitHub repository for your project
2. Push your code to the repository
3. Set up GitHub Actions by creating a `.github/workflows/deploy.yml` file
4. Your site will be deployed on every push to the main branch

## Custom Domain Setup

To use a custom domain with your deployed website:

1. Purchase a domain from a domain registrar (Namecheap, GoDaddy, Google Domains, etc.)
2. Configure DNS settings according to your hosting provider's instructions
3. Add the custom domain in your hosting platform's settings
4. Wait for DNS propagation (can take up to 48 hours)

## Keeping Your Site Updated

To update your deployed site:

1. Make changes to your codebase
2. Commit and push to your repository
3. The hosting platform will automatically rebuild and deploy your site

For more detailed instructions, refer to the documentation of your chosen hosting platform.