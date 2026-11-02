# Ekasi Eatery — Combined Parts 1, 2 and 3

This is a complete starter website package combining the core multi-page website (Part 1), external styling and responsive design (Part 2), and JavaScript, forms and SEO additions (Part 3).

## Folder structure
- `Html/` — seven main pages plus `contact us.html` retained for compatibility with the earlier project.
- `CSS/css.css` — shared stylesheet for every page.
- `Js/` — shared JavaScript, menu filtering, gallery lightbox and form validation.
- `images/` — put your real logo, food photographs and video here.
- `robots.txt` and `sitemap.xml` — SEO templates; update the example domain after deployment.

## Open the website
Open `Html/beginning.html` in your browser or use VS Code Live Server. All HTML pages link to `../CSS/css.css` because they live in the `Html` folder.

## Add your images
Place your actual files in `images/` with these example names or update the HTML paths:
- `logo.jpg`
- `eatery.jpg`
- `meal1.jpg`
- `meal2.jpg`
- `drinks.jpg`
- `catering.jpg`
- `R_1.mp4`

Image files are not included in this code pack. The logo is hidden if it is missing; add the food photos for the gallery/menu images to show correctly. Update alt text so it accurately describes each image.

## Included features
- Six original content sections/pages (home, about, products/services, gallery, news, contact) and an enquiry page required for Part 3.
- Shared navigation and highlighted active page.
- Orange and dark styling, Flexbox/Grid layouts, hover/focus states and responsive breakpoints for tablet and mobile.
- Searchable/filterable sample menu.
- Keyboard-accessible gallery lightbox.
- HTML validation and client-side demonstration feedback for contact/enquiry forms.
- Page titles, meta descriptions, basic keywords, robots.txt and sitemap.xml templates.

## Important form limitation
Forms currently validate entries in the browser and show a demonstration message. They do not send or store submissions. Connect a backend or form service before describing them as live submissions.

## Before submission
1. Replace sample menu descriptions with the real products/services from your Part 1 work and add prices only when confirmed.
2. Add your own images and check that each path works.
3. Update unique metadata and sitemap URLs after deployment.
4. Test every link, search filter, gallery controls, form validation, keyboard focus and mobile layout.
5. Update the assignment's README/changelog with the actual work completed and take screenshots of your own tests.
6. Commit and push the project to GitHub and deploy it as required by your rubric.

## Suggested commit messages
- `Combine Parts 1 and 2 website pages and responsive stylesheet`
- `Add searchable menu and image lightbox`
- `Add validated enquiry and contact forms`
- `Add SEO metadata and sitemap templates`
- `Document testing and Part 3 changes`

## Part 3 enhancements in this revision
- Content reveal motion is enabled only when the browser supports IntersectionObserver and the visitor has not requested reduced motion.
- The event date field is restricted to today or a future date using the visitor's local date.
- Existing interactive menu filtering and keyboard-accessible gallery lightbox remain in place.

## SEO, publishing and deployment checklist
- Replace placeholder domain values in `robots.txt` and `sitemap.xml` after choosing the final public URL.
- Confirm each page has a distinct title and meta description, and check all image alt text against the actual image.
- Share the deployed website through appropriate community/social channels and seek legitimate links from relevant local partners; do not buy spam backlinks.
- Test on mobile and desktop, validate HTML, inspect console errors, and check form validation before submission.
- Forms are not connected to a real inbox. Configure a form service or server endpoint before using them to receive customer messages.
