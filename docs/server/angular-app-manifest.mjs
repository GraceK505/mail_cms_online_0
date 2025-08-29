
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
    'index.csr.html': {size: 18448, hash: '0b33fb8f912ba6d1474237240ab93fb70b81c46d41433cf5c3e7d5e59977e6db', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17606, hash: '4f723a00e05ecb558813d999169581d1603029ca259e39fa10d5d568be609ff4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 53788, hash: '8489e52c2e05202ae46d7ede20a9df5a948be590828154beecdd4f92943e8785', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 53788, hash: '8489e52c2e05202ae46d7ede20a9df5a948be590828154beecdd4f92943e8785', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 42210, hash: '36ea1a3e3ee3ba86a0c56ed17875d614e02c722dd7fff995acb18fbcc04078fa', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'editor/index.html': {size: 42347, hash: '5c4dcfb5bc5f1ac1278a4077e9b81196532600a4ae56c13c66ef9f9ef3dd0022', text: () => import('./assets-chunks/editor_index_html.mjs').then(m => m.default)},
    'search-slot/index.html': {size: 44981, hash: 'ddafa553942f2fd4e5730e004dbd36a296d31168e0d068d42b8985ae9898ab85', text: () => import('./assets-chunks/search-slot_index_html.mjs').then(m => m.default)},
    'template-editor/index.html': {size: 42632, hash: '551f66239985dafd003b6f36500f766c38fd1d83f26bbb24883588e7d9aff71c', text: () => import('./assets-chunks/template-editor_index_html.mjs').then(m => m.default)},
    'template-list/index.html': {size: 67016, hash: 'e427f72690ed3b510453bf8e06ea949a5ea2e0c0aed32f82cb5d49f7fcf9261c', text: () => import('./assets-chunks/template-list_index_html.mjs').then(m => m.default)},
    'campaign/index.html': {size: 44997, hash: '43e84cd99d387cddd0d96679dcff5e86451b31c8d7ae1b218e7439b9a3ad545e', text: () => import('./assets-chunks/campaign_index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 52797, hash: 'edbe4b52bb9133e6ba03632b7d8a4835e5845f4d44450390e50d4904a92db079', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'main-324HXWEH.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main-324HXWEH_css.mjs').then(m => m.default)},
    'main.server.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-NOBTK3JP.css': {size: 85730, hash: 'pVW/6modf9Q', text: () => import('./assets-chunks/styles-NOBTK3JP_css.mjs').then(m => m.default)}
  },
};
