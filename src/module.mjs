// Import necessary functions from the Nuxt Kit module
import { defineNuxtModule, addImports, createResolver, installModule } from '@nuxt/kit'

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
    configKey: 'getEnvConfig'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  /**
   * Module setup.
   * @param {ModuleOptions} options - Module options.
   * @param {import('@nuxt/kit').NuxtKit} nuxt - NuxtKit instance.
   */
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    await installModule('nuxt-lodash', {
      // module configuration
      exposeConfig: true,
      config: {
        prefix: '_'
      }
    })

    addImports({
      name: 'default', // name of the composable to be used
      as: 'useNuxtTools',
      from: resolver.resolve('runtime/composables/useTools')
    })
  }
})
