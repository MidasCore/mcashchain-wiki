const {fs, path} = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: './build',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'MCashChain Developer',
      description: 'MCashChain is a free, open-source blockchain software protocol that zero fee, lighting speed, enable frictionless digital economy'
    },
  },
  head: [

    ['link', {rel: 'icon', href: `/logo.png`}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png`}],
    ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
    ['meta', {name: 'msap' +
        '0..plication-TileColor', content: '#000000'}],
    ['script', {src: `https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js`}],
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'MidasCore/mcashchain-wiki',
    logo: '/logo.png',
    editLinks: true,
    docsDir: 'docs',
    // #697 Provided by the official algolia team.
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // }) : null,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar(),
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-128189152-1'
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
  ]
})


function getGuideSidebar() {
  return [
    '',
    {
      title: "Getting started",
      collapsable: false,
      children: [
        'getting-started/',
        'getting-started/for-user',
        'getting-started/for-developer',
        'getting-started/for-node-owner',

      ]
    },
    {
      title: "MCASH Protocol",
      collapsable: false,
      children: [
        'protocol/account',
        'protocol/transaction',
        'protocol/mutil-signature',
        'protocol/bandwidth-points',
        'protocol/energy',
      ]
    },
    'token',
    {
      title: "Smart Contract",
      collapsable: false,
      children: [
          'smart-contract/deploy-contract'
      ]
    },
    {
      title: "SDK",
      collapsable: true,
      children: [
          'sdk/mcashweb'
      ]
    }
  ]

}

