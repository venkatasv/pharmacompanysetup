# MAcvista (static site)

This is a simple static site for a pharmaceutical company built with plain HTML/CSS/JS.

To publish on Netlify (recommended):

1. Create a new GitHub repository and push this project to it:

   git remote add origin git@github.com:<your-username>/novus-pharma.git
   git branch -M main
   git push -u origin main

2. In Netlify, choose "New site from Git" and connect your GitHub account. Select the repository and set "Publish directory" to the project root (`.`). No build command is required.

Alternative: Drag & drop the site folder on https://app.netlify.com/drop to deploy instantly.

If you prefer CI-less deploy from local machine, install the Netlify CLI and run:

   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir=.



Extras added by assistant:
- Multi-page site: about, products, rnd, careers
- Netlify-friendly contact form (Netlify Forms)
- sitemap.xml and robots.txt
- favicon (assets/favicon.svg)

To deploy on Netlify, push to GitHub and connect as described earlier. The contact form will work automatically when deployed to Netlify.


Contact for this site:
- Phone: +91 77028 67684
- Email: gunee.rtv@gmail.com
