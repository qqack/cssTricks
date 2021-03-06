import { defineConfig } from 'umi';
// import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import routeConfig from './routeConfig';

export default defineConfig({
  dynamicImport: {
    loading: '@/components/Loading.tsx',
  },
  hash: true,
  outputPath: 'build',
  routes: routeConfig,
  esbuild: {},
  mfsu: {},
  metas: [
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  links: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    {
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_1509107_vaarx0n4zz.css',
    },
  ],
  chainWebpack(config) {
    // config.plugin('dayjs').use(AntdDayjsWebpackPlugin);
    config.module
      .rule('mjs-rule')
      .test(/.m?js/)
      .resolve.set('fullySpecified', false);
  },
});
