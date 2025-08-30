
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
    'index.csr.html': {size: 18389, hash: '0ad876b4e4aee0befe8a30801d6e87f0f3d7766f6e5d1f85055efb084916dcc9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17547, hash: '3dbca28fec4da16a1f5afbbb48f00a6e99755e4431d01a6dd44d8b48893177bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 53729, hash: 'c70222b3676da748868c3153b39ba0a48ee4c8e8eca1c88ab48d3fa81f23b476', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53729, hash: 'c70222b3676da748868c3153b39ba0a48ee4c8e8eca1c88ab48d3fa81f23b476', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 42151, hash: '458d9a701095a543d7131a011dd34b32a16adc1245ae8a1b78e38e5488699d0e', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'editor/index.html': {size: 42288, hash: '4898eeb79e6295f6db8fa9ccbe0b020afe91a3e160e15b37ed52a16dfdba3afd', text: () => import('./assets-chunks/editor_index_html.mjs').then(m => m.default)},
    'search-slot/index.html': {size: 44922, hash: 'abc3536190bf55c566fd4f87f04a920be0d50fa381b67421dac85f0933c7148e', text: () => import('./assets-chunks/search-slot_index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 52738, hash: '79ee72b19bb5070a5482f2bc07779566c1a058ff4acffb9263bb5a586bd2bb21', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'template-list/index.html': {size: 66957, hash: '1ff88c8fc629228d45ac726dcb6ab6821cd7e04408eec0167fe26811e21d3027', text: () => import('./assets-chunks/template-list_index_html.mjs').then(m => m.default)},
    'campaign/index.html': {size: 44938, hash: '8b5cf3b96352ae8c7366aa538e72998faf4a11bca47e7802ed2cc372895bbefd', text: () => import('./assets-chunks/campaign_index_html.mjs').then(m => m.default)},
    'template-editor/index.html': {size: 42573, hash: '47c560311ab83284aa7d16ac1aab6db7b8e2d024e4d57ebd5f28efa4ca1739f2', text: () => import('./assets-chunks/template-editor_index_html.mjs').then(m => m.default)},
    'main-324HXWEH.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main-324HXWEH_css.mjs').then(m => m.default)},
    'main.server.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-NOBTK3JP.css': {size: 85730, hash: 'pVW/6modf9Q', text: () => import('./assets-chunks/styles-NOBTK3JP_css.mjs').then(m => m.default)}
  },
};
