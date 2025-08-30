
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
    'index.csr.html': {size: 18389, hash: '39e3e2f7e59188bd9d9aa153f8c5226fccad566b12974834f1fc28aafd2963a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17547, hash: '3c2ccd6c9bb0a5e941452742624e991598e1be98ef76d67367a879f2904e3e7d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 53729, hash: '0c561b2c535b10fc82cbb876f6e1701855d8d4419e9d4c98d0a71dfc0fb3ba83', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'editor/index.html': {size: 42288, hash: '38a9df8421869a3ec139abc00256d59ba1160ccb173a5429d96e8d8a3b5d0655', text: () => import('./assets-chunks/editor_index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 42151, hash: '31c90c0c4d53780b3122dccd60dc97d519ffa078ded3c579b19001adf1c5fb47', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'search-slot/index.html': {size: 44922, hash: '80cfbc6aa8cfa0c3633196db0515f0b6054418ab9020ad40decbea8701826205', text: () => import('./assets-chunks/search-slot_index_html.mjs').then(m => m.default)},
    'template-editor/index.html': {size: 42573, hash: 'f67050bbd8ed46937ac07bac6d5f74db27f735bc33a8a1224ee60a0ff05b8f5d', text: () => import('./assets-chunks/template-editor_index_html.mjs').then(m => m.default)},
    'template-list/index.html': {size: 46797, hash: '6b07a7577c1c840b8a48761a987f1a7756d372f0ad47d573df28ea9526bd6809', text: () => import('./assets-chunks/template-list_index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 52738, hash: '266c9adaf2dbbf30d6964eb89bfe29036ef5a2027aa375f0e578b731396ed8f1', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'campaign/index.html': {size: 44938, hash: 'dce3dcb26ecf709a5818b9161b2f70af5f8cbf5a2ab7f18e4c44ed368dbb1faf', text: () => import('./assets-chunks/campaign_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53729, hash: '0c561b2c535b10fc82cbb876f6e1701855d8d4419e9d4c98d0a71dfc0fb3ba83', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'main-324HXWEH.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main-324HXWEH_css.mjs').then(m => m.default)},
    'main.server.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-NOBTK3JP.css': {size: 85730, hash: 'pVW/6modf9Q', text: () => import('./assets-chunks/styles-NOBTK3JP_css.mjs').then(m => m.default)}
  },
};
