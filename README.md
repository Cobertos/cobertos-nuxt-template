<p align="center">
<a href="https://github.com/Cobertos/cobertos-nuxt-template/actions" target="_blank"><img alt="build status" src="https://github.com/Cobertos/cobertos-nuxt-template/workflows/Package%20Tests/badge.svg"></a>
</p>

# cobertos-nuxt-template

A Nuxt template with my best practices, ready to be cloned and deployed to Vercel.

Takes inspiration from `npx create-nuxt-app tmp-app`, prefering ESLint, AVA, and others.

## Usage

Clone this repo and begin working! Updates to this repo can be merged in if you're rebased to this repo.

See the Features for all the things you can use

## Features

* [Bulma](https://bulma.io/) as main SCSS framework, able to be configured modularly in [`global.scss`](assets/styles/global.scss) and overrides in [`_vars.scss`](assets/styles/_vars.scss)
* Mobile-first single breakpoint workflow (`mobile` and `desktop` mixins) with help of [`nuxt-mq`](https://github.com/vanhoofmaarten/nuxt-mq/) for javascript breakpoint testing
* [Font Awesome](https://github.com/FortAwesome/vue-fontawesome) as `<fa />`
  * Tree-shaking fix for bundle sizes
  * Optional pro repository support with `~.npmrc`, just remove the `~` after cloning and add your Font Awesome registry auth token to the environment variable `FONTAWESOME_NPM_AUTH_TOKEN`
* [Nuxt Sitemap](https://sitemap.nuxtjs.org/) for `sitemap.xml` by default
* AVA tests

## Usage with non-Vercel Deployment

If you're not using Vercel, which this repo is by default setup for, you'll need to:

* Adjust `nuxt.config.js` `router.trailingSlash` property with however your provider behaves
  * For example, AWS S3 requires a value of `true`, as by default, it adds trailing slashes

If you're deploying to your own static webserver, make sure that

* Create a default redirect for every non-found path to `200.html` (for dynamic routes)
* Create a 308 redirect for all trailing slash routes (matches [Vercel's behavior](https://vercel.com/docs/configuration#project/trailing-slash))
* Setup `Cache-Control` headers for the site such that
  * All HTML files use `no-store, max-age=0, must-revalidate`
  * All non-HTML files use `public, max-age=31536000, immutable`

## Nuxt best practices

Consider the following features from Nuxt when doing weird stuff:

* [`inject()`](https://nuxtjs.org/docs/2.x/directory-structure/plugins/#inject-in-root--context) for integrating something across the entire app; in Vue and Vuex!
* [`publicRuntimeConfig`](https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config#runtimeconfig) to change credentials (like API keys) across multiple deployment environments w/ different environment variables or build pipelines. If you want to _switch_ these values at runtime (after a static build), you have to store all your configurations in the `publicRuntimeConfig` and then select them on the front _and_ backend (so dev/SSR works) using a custom plugin + something both can read like cookies.
* [`serverMiddleware`](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware/) to deploy an Express app or some other server along with Nuxt. Useful for testing APIs during development (if targetting static deployment).

## Contributing

### Updating

If you're going to update, you should consider running `npx create-nuxt-app tmp-app` and look at the latest Nuxt template deployment files for inspiration!

### TODO
* Update from Vue 2 to Vue 3
  * Requires Nuxt to update https://github.com/nuxt/nuxt.js/issues/5708
* Add a .sublime-project ignoring the .nuxt and other build directories from searching
* Responsive image stuff/svg loading stuff
* Setup a default error handler + best practices for integrating with Nuxt.js's `fetch()` and the other function
* Add warnings for when specific things have not been changed (like title, ~.npmrc not being removed, etc)
* Robots.txt, favicon if possible, 
* head() and meta tags like canonical built in
* Add a test to crawl the website a look for 308's (trailing slash incorrect links) and other broken links