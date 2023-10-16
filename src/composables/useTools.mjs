/**
 * **Created on 15/10/23**
 *
 * src/composables/tools
 * @author André Timermann <andre@timermann.com.br>
 *
 */

import { ref, useRuntimeConfig, definePageMeta, onMounted } from '#imports'

export function getEnvConfig(){

  const config = useRuntimeConfig()

  console.log(config.public.socketHostname)

  // const envConfig = config.public[attributeName]
  
  // if (!envConfig && required) {
  //   // eslint-disable-next-line no-undef
  //   throw showError({
  //     statusCode: 500,
  //     statusMessage: `Environment variable "NUXT_PUBLIC_${snakeCase(attributeName).toUpperCase()}" not defined in env file.`
  //   })
  // }
  // return envConfig

}
