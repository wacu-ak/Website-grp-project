# My Portfolio Website

A colourful, single-page personal portfolio built with plain HTML, CSS and JavaScript. No frameworks or libraries are used.

**Live site:** [add your link here]

## Features

- Sticky header with navigation links to each section
- Hero section with a gradient background, an SVG laptop illustration and a wave divider
- Testimonials stored in a JavaScript object and displayed with a loop
- Project cards stored in an array and displayed with loops
- Colour-coded cards with hover effects
- Contact section with email and GitHub buttons
- Responsive layout that works on phones, tablets and desktops
- Respects the "reduce motion" setting for accessibility

## Sections

| Section | Description |
|---------|-------------|
| Header / Nav | My name and links to each section |
| Hero | Short introduction and a button to my projects |
| Testimonials | What people say about me, rendered with JavaScript |
| Projects | Project cards with a title, description and tech used, rendered with JavaScript |
| Contact | My email and a link to my GitHub |

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, CSS variables, animations, media queries)
- JavaScript (variables, objects, arrays, loops, DOM manipulation)

## Project Structure

```
my-portfolio/
├── index.html    # Page structure
├── style.css     # All styling, including the mobile layout
├── script.js     # Testimonials and projects data, plus the code that displays them
└── README.md     # This file
```

## How to Run

1. Download or clone the repository:
```bash
   git clone https://github.com/[your-username]/my-portfolio.git
```
2. Open the folder.
3. Double-click `index.html` to open it in your browser.

No installation or build step is needed.

## How to Customise

**Change your details:** in `index.html`, replace `Your Name`, `you@example.com` and `your-username`.

**Change testimonials:** in `script.js`, edit the `testimonials` object. Each entry has a name, a role and a quote.

**Change projects:** in `script.js`, edit the `projects` array. Each project has an icon, a title, a description and a list of technologies.

**Change colours:** in `style.css`, edit the values in the `:root` block at the top. For example, change `--purple` to any hex colour and the whole site updates.

## How the JavaScript Works

- The testimonials live in an **object**, and a `for...in` loop creates one card for each testimonial.
- The projects live in an **array of objects**, and a `for...of` loop creates one card for each project.
- A second loop inside the projects loop turns each technology into a small tag.
- Cards are inserted into the page with `document.createElement()` and `appendChild()`.

## Deployment

The site is deployed with GitHub Pages:

1. Push the code to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Branch**, choose `main` and click **Save**.
4. Your site will be live at `https://[your-username].github.io/my-portfolio/`.

## Contact

- Email: [you@example.com]
- GitHub: [github.com/your-username]
