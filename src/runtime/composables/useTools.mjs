/**
 * **Created on 15/10/23**
 *
 * src/composables/tools
 * @author André Timermann <andre@timermann.com.br>
 *
 */

import { showError, useRuntimeConfig } from '#imports'
import { snakeCase } from 'lodash'

export default {
  /**
   * Loads a public attribute defined with runtimeconfig and defined with an environment variable, validating whether it was defined
   *
   * @param {string} attributeName  Nome do atributo a ser carregado e validado
   * @param {boolean }required      Se é requerido
   * @returns {Promise<void>}
   *
   */
  getEnvConfig (attributeName, required = true) {
    const config = useRuntimeConfig()

    const envConfig = config.public[attributeName]

    if (!envConfig && required) {
    // eslint-disable-next-line no-undef
      throw showError({
        statusCode: 500,
        statusMessage: `Environment variable "NUXT_PUBLIC_${snakeCase(attributeName).toUpperCase()}" not defined in env file.`
      })
    }

    return envConfig
  }
}
