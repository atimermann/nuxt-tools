// Import necessary functions from the Nuxt Kit module
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

/**
 * Module options defined as a TypeScript interface.
 * @typedef {Object} ModuleOptions
 */

/**
 * Defines the Nuxt module.
 * @param {ModuleOptions} options - Module options.
 * @param {import('@nuxt/kit').NuxtKit} nuxt - NuxtKit instance.
 */
export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  /**
   * Module setup.
   * @param {ModuleOptions} options - Module options.
   * @param {import('@nuxt/kit').NuxtKit} nuxt - NuxtKit instance.
   */
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    addImports({
      name: 'use', // name of the composable to be used
      as: 'useComposable',
      from: resolver.resolve('runtime/composables/useTools') // path of composable
    })
  },
});
