
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mail_cms_online_0/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mail_cms_online_0"
  },
  {
    "renderMode": 2,
    "route": "/mail_cms_online_0/home"
  },
  {
    "renderMode": 2,
    "route": "/mail_cms_online_0/editor"
  },
  {
    "renderMode": 2,
    "route": "/mail_cms_online_0/search"
  },
  {
    "renderMode": 2,
    "route": "/mail_cms_online_0/search-slot"
  },
  {
    "renderMode": 2,
    "route": "/mail_cms_online_0/template-editor"
  },
  {
    "renderMode": 2,
    "route": "/mail_cms_online_0/template-list"
  },
  {
    "renderMode": 2,
    "route": "/mail_cms_online_0/docs"
  },
  {
    "renderMode": 2,
    "route": "/mail_cms_online_0/campaign"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 18448, hash: '4737f1bbba4ce668abe4a64c36acf3e2bf19f88c659fa6b2e4a09543078c5e87', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17606, hash: '87920615152fd7cf5c6dc52ee2633af155f661bf25d11b045d15a3bfac4f2523', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 53788, hash: '2e2863eb07126d6806f8ff38e6a5f7a9e6b9c33e57d99919cc505e2c7c16209f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 53788, hash: '2e2863eb07126d6806f8ff38e6a5f7a9e6b9c33e57d99919cc505e2c7c16209f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 42210, hash: '6044dabe637a36c316edf6cdfa26fdf60be786ce194dadd77eb9f3e5e5b1bf74', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'editor/index.html': {size: 42347, hash: '02b668eebb4eb02569e9fa2687995eb045665c4bc9edfa53218f7c5cb46fae1f', text: () => import('./assets-chunks/editor_index_html.mjs').then(m => m.default)},
    'search-slot/index.html': {size: 44981, hash: '371bf1377e979b7758fa483d6e47609b8c52acb803764ba9bf78fd0a10aa1de4', text: () => import('./assets-chunks/search-slot_index_html.mjs').then(m => m.default)},
    'template-editor/index.html': {size: 42632, hash: '2cc9ff9cf51597fd6dfe2dc5d650f66925b7c1e74720b08b332738ee34522732', text: () => import('./assets-chunks/template-editor_index_html.mjs').then(m => m.default)},
    'template-list/index.html': {size: 67016, hash: '6b6ba888f1044b49126e2e4fb3d2910cde4b106c332bdcb177ff005d5d2f10b4', text: () => import('./assets-chunks/template-list_index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 52797, hash: '705171e01757fb8bbad2468c6be69c99e73ff2905b3e30c680d42095c56532cb', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'campaign/index.html': {size: 44997, hash: '718e9dc22255449790ccb88e5e22468da5bb0513e7218669746c342a4e01d843', text: () => import('./assets-chunks/campaign_index_html.mjs').then(m => m.default)},
    'main-324HXWEH.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main-324HXWEH_css.mjs').then(m => m.default)},
    'main.server.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-NOBTK3JP.css': {size: 85730, hash: 'pVW/6modf9Q', text: () => import('./assets-chunks/styles-NOBTK3JP_css.mjs').then(m => m.default)}
  },
};
