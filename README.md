# Vue3 TypeScript Techpath

Techpath. This repo serves as a frontend to [Techpath API](https://github.com/deivit24/techpath-api).

Goal is to create a frontend where users can save tools and experience they have. This frontend will also serve a dashboard that shows users where they are now in their tech career, where they want to be, how to to get there, and what is the going salary.

## Table of Contents

- [Features](#features)
- [UI Framworks](#ui-frameworks)
- [Icons](#icons)
- [Plugins](#plugins)
- [Coding Style](#coding-style)
- [Dev Tools](#dev-tools)
- [Dev Setup](#dev-setup)

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - fast and faster !
- 💪 [Typescript](https://www.typescriptlang.org/) - of course! necessary
- 🎉 [Element Plus ready](https://github.com/element-plus/element-plus) - UI Library based on Vue.js 3
- 🔥 [Axios](https://github.com/axios/axios) - Http Library based on Promise
- 💡 [Vue Router 4](https://router.vuejs.org/zh/) - The official router for Vue.js
- 📦 [Components auto importing](https://github.com/antfu/unplugin-vue-components) - Automatically register components on demand without import
- 📥 [Auto import APIs](https://github.com/antfu/unplugin-auto-import) - Automatically import APIs
- 🍍 [State Management via Pinia](https://pinia.esm.dev/) - The Vue Store that you will enjoy using
- 🎨 [Windi CSS](https://github.com/windicss/windicss) - next generation utility-first CSS framework
- 😃 [icones](https://github.com/antfu/unplugin-icons) - Powerful Icon Library, Use icons from any icon sets
- 🌍 [I18n ready](./locales) - Want to translate? Yes, you can!
- 👩‍🎨 [NProgress](https://github.com/rstacruz/nprogress) - Page loading progress feedback
- 😃 [SVG Support](https://github.com/jpkleemans/vite-svg-loader) - Support the use of SVG images as components
- 📑 [Markdown Support](https://github.com/antfu/vite-plugin-md) - Markdown as components / components in Markdown
- 🔑 Complete code style specification and code submission specification
- ☁️ Deploy on Netlify, zero-config

## UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bunch of additional features
  - [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)
- [Element Plus](https://github.com/element-plus/element-plus) - A powerful Vue.js 3 UI Library

## Icons

- [🔍Icônes](https://icones.netlify.app/) - use icons from any icon sets
  - [unplugin-icons](https://github.com/antfu/unplugin-icons) - Automatically introduce the icons you need on demand

## Plugins

- [Vue Router 4](https://router.vuejs.org/zh/) - The official router for Vue.js
- [Pinia](https://pinia.esm.dev) - The Vue Store that you will enjoy using
- [Axios](https://github.com/axios/axios) - Http Library based on Promise
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - components auto import
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Automatically import APIs
- [vite-plugin-windicss](https://github.com/antfu/vite-plugin-windicss) - Windi CSS Integration
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown) - Markdown as components / components in Markdown
  - [markdown-it-prism](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) for syntax highlighting
  - [prism-theme-vars](https://github.com/antfu/prism-theme-vars) - customizable Prism.js theme using CSS variables
  - [markdown-it-link-attributes](https://github.com/crookedneighbor/markdown-it-link-attributes) - Uniformly set the hyperlink jump mode in markdown
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [vite-plugin-vue-i18n](https://github.com/intlify/vite-plugin-vue-i18n) - Vite plugin for Vue I18n
- [vite-plugin-fonts](https://github.com/stafyniaksacha/vite-plugin-fonts) - Vite's font loader
- [VueUse](https://github.com/antfu/vueuse) - Collection of useful composition APIs
- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader) - Support the use of SVG images as components

## Coding Style

- [ESLint](https://eslint.org/) with [Airbnb Style](https://github.com/airbnb/javascript)

## Dev Tools

- [TypeScript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) -Vue 3 IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [Windi CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - IDE support for Windi CSS
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Code quality and rule checking
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Focus on code formatting and beautifying code
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - Coding style check

## Dev Setup

### Install Node

First make sure you have Node version 16 or higher
`node -v`

If it is lower than node 16 please follow the instructions below to install a newer version of node:

[Please follow here](https://github.com/nvm-sh/nvm#installing-and-updating) to properly install NVM (Node Version Manager)

After have properly installed nvm run this command:

`nvm install 19.3.0`

then

`nvm use 19.3.0`

### Install pnpm

`npm install -g pnpm`

### Install packages

`pnpm i`

### Start Dev Environment

`pnpm run dev`

### Pushing to branch

Please make sure to run `pnpm run build` before pushing your branch to make sure your TS code changes passes the build.
