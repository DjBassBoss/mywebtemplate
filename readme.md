# My Web Template

## Contents:
* **Build tools:**
  * Jade html Templates
  * SASS stylesheets
  * JS Concatenation
* **Libraries:**
  * AngularJS
    * Angular-Route
    * angular-animate
  * Animate.css
  * Angular-NVD3
    * Dependencies Included
  * Bootstrap

## Quick start
1. Install dependencies
`npm install`
2. Do the first build
`npm start`
3. Start gulp watch: This starts gulp in watch mode and browserSync
`gulp watch`

*Notes:*  To rebuild all: `gulp buildAll`

## Where does everything go:
* **Jade Files:**
  * Input: `src/hmtl`
  * Output: `dist`
  * *Note:* view templates go into `src/hmtl/app/templates`
* **SASS files:**
  * Input: `src/sass`
  * Output: `dist/css`
* **JS files:**
  * Input: `src/app`
  * Output: `dist/app`
  * These files will get concatenated into app.js
* **Image files:**
    * Input: `src/images`
    * Output: `dist`
