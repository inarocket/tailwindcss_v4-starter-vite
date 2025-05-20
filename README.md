# Vite + Tailwind CSS v4 Starter Kit

A minimal and modern starter kit designed to get you up and running quickly with [Vite](https://vitejs.dev/) and [Tailwind CSS v4](https://tailwindcss.com/docs). Perfect for starting new web projects without the initial setup hassle!

## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js:** (LTS version recommended) - Download from [nodejs.org](https://nodejs.org/)
*   **npm** (comes with Node.js) or **yarn** / **pnpm** (optional package managers)

## Getting Started

To use this starter kit for a new project:

1.  **Clone or Download:**
    *   **Clone (Recommended):** `git clone <repository-url> your-project-name`
    *   **Download:** Download the ZIP archive and extract it.
2.  **Navigate to Project Directory:**
    ```bash
    cd your-project-name
    ```
3.  **Install Dependencies:** Install Vite, Tailwind CSS, and the necessary plugins.
    ```bash
    npm i
    # or: npm install
    # or: yarn install
    # or: pnpm install
    ```

You are now ready to start developing!

## Available Scripts

This starter kit comes with the following scripts defined in `package.json`:

*   **`npm run dev`**: Starts the Vite development server with Hot Module Replacement (HMR). Ideal for local development. Access your site at `http://localhost:5173` (or the next available port).
*   **`npm run build`**: Compiles and optimizes your project for production. The output files will be placed in the `dist/` directory.
*   **`npm run preview`**: Starts a simple local server to preview the production build from the `dist/` directory. Useful for checking the final result before deployment.

## Project Structure Overview

Here's a brief look at the key files and folders:

*   **`index.html`**: The main HTML entry point for your application (homepage). Located in the project root.
*   **`pages/`**: Place any additional HTML files (e.g., `about.html`, `contact.html`) inside this folder. The build process is configured to automatically detect and handle these pages.
*   **`public/`**: Contains static assets that are copied directly to the root of the `dist/` directory during the build and **are not processed by Vite**. Use this *only* for files that must keep their exact name (like `favicon.svg`, `robots.txt`, etc.).
*   **`src/`**: Contains your source code that will be processed by Vite.
    *   `src/assets/`: **Place your images and other assets (fonts, etc.) here.** A subfolder like `src/assets/images/` is recommended for organization.
    *   `src/css/styles.css`: Your main CSS file. Includes Tailwind directives (`@import "tailwindcss";`) and is where you can customize the theme using `@theme {}`.
    *   `src/js/main.js`: Your main JavaScript entry point. It imports the CSS file and is where you can add your custom JavaScript code.
*   **`vite.config.js`**: Vite configuration file. Includes the `@tailwindcss/vite` plugin and automatic multi-page setup. You generally won't need to touch this unless you need advanced customization.
*   **`tailwind.config.js`**: *Not included by default in v4!* Included as an empty file in this repository as it is required by Tailwind CSS IntelliSense (VSCode extension) to work properly. You can also edit this file if you want to configure Tailwind plugins or advanced options like `prefix`.
*   **`package.json`**: Project metadata, scripts, and dependencies.
*   **`.gitignore`**: Specifies files and folders that Git should ignore.
*   **`README.md`**: This file!

## Customization

*   **HTML Content:** Edit `index.html` for the homepage or add/edit `.html` files inside the `pages/` directory for other pages.
*   **Styling & Theme:**
    *   Use Tailwind utility classes directly in your HTML files.
    *   Customize the default Tailwind theme (colors, fonts, spacing, breakpoints, etc.) by adding your overrides within the `@theme { ... }` block in `src/css/styles.css`.
    *   Add any custom CSS rules directly in `src/css/styles.css` below the `@theme` block if needed.
*   **JavaScript:** Add your custom JavaScript logic to the `src/js/main.js` file.

## Handling Images and Other Assets

Assets like images, fonts, etc., are best handled within the `src` directory to benefit from Vite's processing (like filename hashing for cache busting).

*   **Location:** Place your assets inside the `src/assets/` directory. Using subfolders like `src/assets/images/` or `src/assets/fonts/` is recommended.
*   **Referencing from HTML (`<img>`, `<video>`, etc.):** Use paths starting from the project root with `/src/`. Vite will correctly resolve these during development and build.
    ```html
    <img src="/src/assets/images/logo.png" alt="Logo">
    ```
*   **Referencing from CSS (`background-image`, `@font-face`):** Use **relative paths** from the CSS file to the asset.
    ```css
    /* In src/css/styles.css */
    .hero {
      background-image: url('../assets/images/hero.jpg');
    }
    ```
*   **Referencing from JavaScript (`import`):** Import the asset directly. The imported variable will hold the correct public URL (including the hash in production).
    ```javascript
    // In src/js/main.js
    import logoUrl from '../assets/images/logo.png';
    document.getElementById('logo').src = logoUrl;
    ```
*   **When to use `public/`:** Only use the `public/` directory for files that *must* retain their original filename and *must not* be processed or hashed by Vite (e.g., `favicon.svg`, `robots.txt`, manifest files).

## Multi-Page Support

This starter kit is configured to automatically handle multiple HTML pages:

1.  Simply add new `.html` files inside the `pages/` directory (or subdirectories within `pages/`).
2.  Make sure each HTML file includes the script tag pointing to your main JavaScript file:
    `<script type="module" src="/src/js/main.js"></script>`
3.  Vite will automatically detect these files during `npm run dev` and `npm run build`. No need to manually edit the Vite configuration!

---

Happy coding!
