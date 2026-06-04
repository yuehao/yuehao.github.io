# Hao Group Website

Academic research group website built with [Astro](https://astro.build/).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── public/
│   ├── images/           # Static images
│   └── favicon.svg       # Site favicon
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── PublicationCard.astro
│   │   ├── PersonCard.astro
│   │   ├── ProjectCard.astro
│   │   └── NewsItem.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/            # Page routes
│   │   ├── index.astro
│   │   ├── publications.astro
│   │   ├── people.astro
│   │   ├── projects/
│   │   ├── courses/
│   │   ├── repositories.astro
│   │   ├── blog/
│   │   └── 404.astro
│   └── styles/
│       └── global.css    # Tailwind + custom styles
├── astro.config.mjs
└── package.json
```

## ✨ Features

- ⚡ Fast static site generation with Astro
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support
- 📱 Fully responsive design
- 📝 MDX support for rich content
- 🔍 SEO optimized with sitemap
- 📊 Publications with DOI links and abstracts
- 👥 Team member profiles
- 📚 Course listings
- 💻 GitHub repository showcase

## 🖼️ Adding Images

1. Copy your research images to `public/images/`
2. Add team photos to `public/images/people/`
3. For the hero image, add `PRAB_24_041002_FMA_CC.png` from your existing site

## 📝 Adding Content

### Publications
Edit `src/pages/publications.astro` and add entries to the `publicationsByYear` object.

### Team Members
Edit `src/pages/people.astro` and update the `currentMembers`, `alumni`, and `undergrads` arrays.

### Projects
Edit `src/pages/projects/index.astro` and update the `projectCategories` object.

### Blog Posts
Create new `.astro` or `.mdx` files in `src/pages/blog/`.

## 🚀 Deployment

### GitHub Pages

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in repository settings (Source: GitHub Actions)

### Manual Deployment

```bash
npm run build
# Upload contents of ./dist to your hosting provider
```

## 🛠️ Commands

| Command           | Action                                       |
|-------------------|----------------------------------------------|
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deployment      |
| `npm run astro`   | Run Astro CLI commands                       |

## 📄 License

© 2025 Yue Hao. All rights reserved.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
