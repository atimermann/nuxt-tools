// Import necessary functions from the Nuxt Kit module
import { defineNuxtModule, addImports, createResolver } from '@nuxt/kit';

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
    name: 'getEnvConfig',
    configKey: 'getEnvConfig',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  /**
   * Module setup.
   * @param {ModuleOptions} options - Module options.
   * @param {import('@nuxt/kit').NuxtKit} nuxt - NuxtKit instance.
   */
  setup(options, nuxt) {

    console.log('SETUP...')
    const resolver = createResolver(import.meta.url);

    addImports({
      name: 'getEnvConfig', // name of the composable to be used
      as: 'getEnvConfig',
      from: resolver.resolve('runtime/composables/useTools') // path of composable
    })
  },
});
