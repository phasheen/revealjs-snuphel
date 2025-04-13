# SNUPHEL Reveal.js Template

This template provides a clean, modern design for creating presentations using Reveal.js. The template has been organized to separate style and functionality from content, making it easier to maintain and customize.

## File Structure

- `index.html` - The main presentation file with all your slides
- `custom/custom-styles.css` - All custom styling for the presentation
- `custom/custom-scripts.js` - JavaScript functionality, including presenter info and slide behavior

## How to Use This Template

1. Edit the content in `index.html` to create your presentation
2. Modify presenter information in `custom/custom-scripts.js`:
   ```javascript
   const presenterName = "Your Name";
   const presenterDepartment = "Your Department";
   const presenterUniversity = "Your University";
   const presenterEmail = "your.email@example.com";
   const sessionName = "Your Presentation Title";
   ```

3. Start the development server:
   ```
   npm start
   ```

4. View your presentation at http://localhost:8000

## Template Features

- Modern, clean design with consistent styling
- Responsive layout that works on different screen sizes
- Beautiful typography with Google Fonts
- Custom CSS classes for easy formatting:
  - `.container` and `.col` for two-column layouts
  - `.highlight-text` for emphasized text
  - `.bg-header` for styled section headers
  - `.data-table` for styled tables
  - `.image-gallery` for image collections
  - And many more...
- Before-After image comparison slider
- Automatic logo placement on slides
- Presenter notes support (press 'S' during presentation)
- PDF export capability (add `?print-pdf` to the URL)
- Special SNU logo background for first and last slides
- Theme color defined by CSS variables for easy customization

## Customization

- To modify the styling, edit `custom/custom-styles.css`
- To change the behavior or add new features, edit `custom/custom-scripts.js`
- To change the overall theme, modify the theme link in `index.html`:
  ```html
  <link rel="stylesheet" href="dist/theme/white.css">
  ```
- To change the theme color, simply update the CSS variable in `custom/custom-styles.css`:
  ```css
  :root {
    --theme-color: #2a76dd; /* Change this to any color you want */
  }
  ```

## For Advanced Users

If you want to further customize the template:

1. Theme color is defined using CSS variables at the top of the CSS file
2. Additional custom components can be added to the CSS file
3. Reveal.js initialization options can be modified in the JavaScript file
4. The first and last slide backgrounds use the SNU logo, which can be replaced with any SVG

## Credits

This template was created by Xianghui Xin for [SNUPHEL](https://snuphel.snu.ac.kr) members.

Built with [Reveal.js](https://revealjs.com) - The HTML Presentation Framework 