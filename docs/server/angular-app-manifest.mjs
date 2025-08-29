
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/editor"
  },
  {
    "renderMode": 2,
    "route": "/search"
  },
  {
    "renderMode": 2,
    "route": "/search-slot"
  },
  {
    "renderMode": 2,
    "route": "/template-editor"
  },
  {
    "renderMode": 2,
    "route": "/template-list"
  },
  {
    "renderMode": 2,
    "route": "/docs"
  },
  {
    "renderMode": 2,
    "route": "/campaign"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 18430, hash: '331bf5d20bfd68944b159bb6fe4ddee414e61c6ef001994efb37d533ce32d970', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17588, hash: 'e5b7fa5befef4811afad61eadb24dbafa21e607998c57c2c5d9ca38503613ae7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 53770, hash: 'a314a4a8a70fc96d2dd61b6f89906cf4262d35a660eaccc4d723238e47a69cc4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 53770, hash: 'a314a4a8a70fc96d2dd61b6f89906cf4262d35a660eaccc4d723238e47a69cc4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 42192, hash: '1d0483b40595d783c63ba3274b3f4634c8f8ceba38963cbed1d2662195428d9c', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'search-slot/index.html': {size: 44963, hash: '985266031b19edcf70656d80067645b6e994585af1cc66483726438ed4fc3c91', text: () => import('./assets-chunks/search-slot_index_html.mjs').then(m => m.default)},
    'editor/index.html': {size: 42329, hash: 'f4c5e88f3bdca03bff7e2059a1c03ef44ba2d1e99c353ddc5e76124baf5d9cb2', text: () => import('./assets-chunks/editor_index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 52779, hash: 'c84d172c785402d6e02e30b7a48427e8093e98b638994b3011ab8425b101b2dd', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'campaign/index.html': {size: 44979, hash: 'a85116c95cd8e4681be18389dae7e260e3a026c5e5eefbfd734180da07bcda2e', text: () => import('./assets-chunks/campaign_index_html.mjs').then(m => m.default)},
    'template-editor/index.html': {size: 42614, hash: 'b79733c5dfcfb27163ab7979f97e5bf8a3e0db5ae7da995391378a3ac7587993', text: () => import('./assets-chunks/template-editor_index_html.mjs').then(m => m.default)},
    'template-list/index.html': {size: 67187, hash: '8b2a2fda9180993d6d588c302f77d36573327199c42da223fa7c74c8b51339c7', text: () => import('./assets-chunks/template-list_index_html.mjs').then(m => m.default)},
    'main-324HXWEH.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main-324HXWEH_css.mjs').then(m => m.default)},
    'main.server.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-NOBTK3JP.css': {size: 85730, hash: 'pVW/6modf9Q', text: () => import('./assets-chunks/styles-NOBTK3JP_css.mjs').then(m => m.default)}
  },
};
