# RadonSafeguard

Professional radon testing and mitigation services in Edmonton, Alberta and surrounding communities.

C-NRPP certified professionals with 15+ years of experience protecting homes and businesses from radon gas.

## Live Site

The site is a static HTML/CSS/JS website.

## Local Development

Serve the site locally:

```bash
# Python (recommended)
python -m http.server 8080
```

Then open http://localhost:8080

## Project Structure

- `index.html` — Homepage
- `services.html` — Testing & mitigation details
- `learn.html` — Learn section (radon education, FAQs, and resources)
- `contact.html` — Contact form + service area
- `login.html` — Secret login page (access by direct URL only)
- `customers.html` — Customer management with add/search/edit/delete (localStorage)
- `estimates.html` — Detailed radon mitigation estimate form + dynamic list (localStorage)
- `reports.html` — Sample reports page
- `invoices.html` — Sample invoices page
- `css/styles.css` — Complete design system (navy/teal/gold)
- `js/main.js` — Mobile menu, accordion interactions, form handling, scroll effects, login guards
- `images/` — Logo + key photography

## Tech

- Pure static site (no build step)
- Responsive, accessible, modern UI
- Client-side persistence with localStorage for demo (customers, estimates)

## Deployment

You can deploy instantly to:
- GitHub Pages
- Netlify / Vercel (drag & drop or connect repo)
- Cloudflare Pages

## License

Private project for RadonSafeguard.