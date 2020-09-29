const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/user/Desktop/blog/journal/src/pages/404.js"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("/Users/user/Desktop/blog/journal/src/pages/about-css-modules.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/user/Desktop/blog/journal/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/user/Desktop/blog/journal/src/templates/blog-post.js")))
}

