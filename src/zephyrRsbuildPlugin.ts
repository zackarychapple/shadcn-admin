import type { RsbuildPlugin } from '@rsbuild/core'
import { withZephyr } from 'zephyr-rspack-plugin'

export const zephyrRsbuildPlugin = (): RsbuildPlugin => ({
  name: 'zephyr-rsbuild-plugin',
  post: ['RspackModuleFederationPlugin'],
  setup: (api) => {
    api.modifyRspackConfig(async (config, utils) => {
      const zephyrConfig = await withZephyr()(config)
      utils.mergeConfig(config, zephyrConfig)
    })
  },
})
