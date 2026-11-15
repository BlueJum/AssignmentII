# Assignment 2 (INFR3120)

Personal portfolio website built with Node.js, Express and EJS.

**Live site:** https://assignmentii.onrender.com
**GitHub repository:** https://github.com/BlueJum/AssignmentII

## Pages
- Home (`/` and `/home`): views/index.ejs
- About (`/about`): views/about.ejs
- Projects (`/projects`): views/projects.ejs
- Contact (`/contact`): views/contact.ejs

## Technologies
- Node.js and Express (project generated with express-generator, `--view=ejs`)
- EJS templates with partials (`views/partials/header.ejs`, `main_nav.ejs`, `footer.ejs`)
- Bootstrap 5.0 and Font Awesome Free (installed with npm, served from node_modules)
- Hosted on Render

## Running locally
npm install
npm start

## Citations
- Course lecture code (INFR3120): express-generator project setup, app.js, server.js,
  navbar and partials structure.
- Bootstrap 5.0.2 Cards (Header and footer, Horizontal, Grid cards), adapted for the
  Home, About, Projects and Contact pages:
  https://getbootstrap.com/docs/5.0/components/card/
- Bootstrap 5.0.2 Forms (Form control, Select), adapted for the Contact form:
  https://getbootstrap.com/docs/5.0/forms/form-control/
  Bootstrap: Mark Otto, Jacob Thornton and Bootstrap contributors. Code MIT licensed,
  docs CC BY 3.0.
- Font Awesome Free icons: https://fontawesome.com/
- Page text, project descriptions, photo and video are my own work, reused from my
  Assignment 1 content. The HTML markup was rewritten as EJS with Bootstrap.
