# Gatsby Theme Jam Example Submission

This is a bare-bones Gatsby theme to showcase how a [Theme Jam](https://themejam.gatsbyjs.org) submission should look.

See the [live demo](https://gatsby-theme-jam-example.netlify.com)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme
    ```sh
    npm i gatsby-theme-pure
    ```

2.  Add the theme to your `gatsby-config.js`:
    ```js
    module.exports = {
      plugins: [
        'gatsby-theme-pure'
      ]
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Submission Checklist

To ensure your Theme Jam submission [follows the rules](https://themejam.gatsbyjs.org/rules), use this checklist:

- [x] Use our [accessibility guide][a11y] to ensure your site meets our accessibility standards
- [x] Run a performance audit using [Lighthouse][] and/or [WebPageTest][]
- [x] Set up a live demo using [Netlify][] or [GitHub Pages][]
- [x] Add installation documentation to the README
- [x] Update the `name` field in `package.json`
- [x] Update the `author` field in `package.json`
- [x] Update the `repository` field in `package.json`
- [x] Make sure the theme’s `keywords` in `package.json` include `gatsby`, `gatsby-theme`, and `gatsby-plugin`
- [x] Publish your theme to npm ([docs][npmpublish])
- [x] Submit your theme at https://themejam.gatsbyjs.org

[a11y]: https://gatsbyjs.org/docs/making-your-site-accessible#how-to-improve-accessibility
[Lighthouse]: https://developers.google.com/web/tools/lighthouse/
[axe]: https://www.deque.com/axe/
[WebPageTest]: http://webpagetest.org/
[Netlify]: https://netlify.com
[GitHub Pages]: https://pages.github.com/
[npmpublish]: https://docs.npmjs.com/cli/publish
