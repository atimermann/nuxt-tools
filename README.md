<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# @agtm/Nuxt Tools

<!--
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]
-->
Module with useful tools for Nuxt projects
<!--
[//]: # (- [✨ &nbsp;Release Notes]&#40;/CHANGELOG.md&#41;)
-->
<!--
[//]: # ( - [🏀 Online playground]&#40;https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue&#41; )

[//]: # ( - [📖 &nbsp;Documentation]&#40;https://example.com&#41;)
-->

## Features

<!-- Highlight some of the features your module provide here -->

- ⛰ getEnvConfig
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz
- 💩

## Quick Setup

1. Add `@agtm/nuxt-tools` dependency to your project

```bash
# Using pnpm
pnpm add -D @agtm/nuxt-tools

# Using yarn
yarn add --dev @agtm/nuxt-tools

# Using npm
npm install --save-dev @agtm/nuxt-tools
```

2. Add `@agtm/nuxt-tools/module` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@agtm/nuxt-tools/module'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Guia de Uso: NuxtTool

Exemplo de uso:

```vue

<script setup>

  import { useNuxtTools } from '#imports'

  const {getEnvConfig} = useNuxtTools

</script>


```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D

[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D

[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D

[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js

[nuxt-href]: https://nuxt.com
