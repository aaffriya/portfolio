# Personal portfolio (static)

A fast, modern, responsive portfolio tailored for a Backend Software Engineer with strengths in databases and deployment. Built with plain HTML/CSS/JS for zero-dependency hosting.

## How to use

- Open index.html in a browser, or serve locally for best results:
  - Python 3: `python3 -m http.server 5173`
  - Node (if installed): `npx serve -l 5173`
  - Then visit http://localhost:5173/

## Customize content

Edit these in index.html:
- Replace "Your Name" (header and footer)
- Update hero paragraph to reflect your focus
- In Skills, adjust stacks and chips
- In Experience, edit roles, companies, dates, and bullets
- In Projects, set titles, descriptions, tags, and links
- In Contact, set your email and social links

Colors and theme:
- Tweak CSS variables in styles.css under :root and [data-theme="light"]
- The theme toggle persists via localStorage

## Deploy

Any static hosting works:
- GitHub Pages: push this folder and enable Pages on main branch
- Netlify/Vercel: drag-and-drop or connect repo; set output dir to project root
- S3 + CloudFront: upload files with correct content types

## SEO checklist
- Set a descriptive <title> and meta description in index.html
- Add a social preview image and set og:image
- Optionally add JSON-LD in <head> for Person schema

## License
MIT