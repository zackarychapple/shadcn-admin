// rsbuild.config.ts
import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack'
import {zephyrRsbuildPlugin} from './src/zephyrRsbuildPlugin'

export default defineConfig({
  plugins: [pluginReact(), zephyrRsbuildPlugin()],
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack()],
    },
  },
})