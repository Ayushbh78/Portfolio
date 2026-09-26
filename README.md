# Ayush Bhardwaj — Portfolio

A personal portfolio website for **Ayush Bhardwaj**, AI Engineer & ML Developer, showcasing skills, projects, experience, certifications, and achievements — including GATE DA 2026 qualification (Score 526, AIR 2096).

🔗 **Live Demo:** _add your deployed link here (GitHub Pages / Netlify / Vercel)_

## Preview

A clean, light theme (white + green accents, black text) with a subtle animated neural-network background, custom cursor, smooth scroll-reveal animations, a project filter, and a command palette (`Ctrl/Cmd + K`).

## Project Structure

```
.
├── index.html          # Main HTML markup
├── css/
│   └── style.css       # All styles (theme, layout, animations, responsive rules)
├── js/
│   └── script.js       # All interactivity (cursor, canvas, counters, filters, command palette, etc.)
├── assets/
│   └── profile.jpg     # Profile photo used in the hero and about sections
└── README.md
```

## Features

- Responsive layout (desktop, tablet, mobile)
- Animated neural-network canvas background
- Custom cursor with hover states
- Typing animation for role titles
- Animated counters (GATE score, projects, certificates, etc.)
- Scroll-triggered fade-up reveal animations
- Filterable project grid (Generative AI, ML/DL, Web Dev, Hardware)
- Command palette / quick search (`Ctrl/Cmd + K`)
- Working contact form (opens the visitor's email client via `mailto:`)
- Back-to-top button and auto-hiding navbar on scroll
- Hidden Konami code easter egg

## Getting Started

No build tools or dependencies required — it's plain HTML, CSS, and JavaScript.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayushbh78/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Open it locally**
   - Simply open `index.html` in your browser, **or**
   - Serve it with a local dev server (recommended, avoids any relative-path issues):
     ```bash
     # Python 3
     python -m http.server 8000
     # then visit http://localhost:8000
     ```

## Customizing

- **Colors / theme:** edit the CSS variables at the top of `css/style.css` inside `:root { ... }`.
- **Content (name, bio, skills, projects, experience, certifications):** edit the corresponding sections directly in `index.html`.
- **Profile photo:** replace `assets/profile.jpg` with your own image (keep the same filename, or update the two `<img>` `src` attributes in `index.html`).
- **Contact links:** update the email, phone, LinkedIn, and GitHub links in the `#contact` section and footer.

## Deployment

This is a static site, so it can be hosted for free on any static host:

- **GitHub Pages:** Settings → Pages → set source to the `main` branch (root), then visit `https://<username>.github.io/<repo-name>/`.
- **Netlify / Vercel:** drag-and-drop the project folder or connect the repo — no build command needed.

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (no frameworks or build step)
- Google Fonts: [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) & [Geist Mono](https://fonts.google.com/specimen/Geist+Mono)

## License

Free to use as a template for your own portfolio. Please swap out the personal content (name, photo, projects, contact details) before publishing your own version.

## Contact

- **Email:** ayushavdhesh98@gmail.com
- **LinkedIn:** [linkedin.com/in/ayush-bhardwaj](https://www.linkedin.com/in/ayush-bhardwaj-22589b2a8)
- **GitHub:** [github.com/Ayushbh78](https://github.com/Ayushbh78)
