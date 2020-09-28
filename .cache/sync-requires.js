const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/christian/cwmoon/.cache/dev-404-page.js"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("/Users/christian/cwmoon/src/pages/about-css-modules.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/christian/cwmoon/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/christian/cwmoon/src/templates/blog-post.js")))
}

