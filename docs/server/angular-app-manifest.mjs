
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
    'index.csr.html': {size: 18389, hash: 'e435533051cef30358189872bb79b7101cd44817b5a12204e2653394be5d8840', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17547, hash: '3fcdaae6fd4b671a5351af68d0b00acb5bd1388177ea75a2e2f9cdf8613ab027', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 53729, hash: '2b6169a83fe4abffcab6466f26fadb25427b791a9869d5386f8f43b3ebf22584', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 53729, hash: '2b6169a83fe4abffcab6466f26fadb25427b791a9869d5386f8f43b3ebf22584', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 42151, hash: '20e20d4af9412d484b5fc07855fd7d5761bbc3fce2fe9f4ce3a15a39404b45f0', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'editor/index.html': {size: 42288, hash: '5db46c33b13471b0d89a50ccd0337100cccb9f5b658b1f888295a7786624f1ca', text: () => import('./assets-chunks/editor_index_html.mjs').then(m => m.default)},
    'search-slot/index.html': {size: 44922, hash: 'b4d6ae43c8d7d3f8b4d2265dbcbf85a6dbd56923604514306ae80c638d3f1339', text: () => import('./assets-chunks/search-slot_index_html.mjs').then(m => m.default)},
    'template-editor/index.html': {size: 42573, hash: 'a5d3aa3a600ac3b7ae399783d7d8bc9d5743031afe502e6f1c4d7998409f4aa9', text: () => import('./assets-chunks/template-editor_index_html.mjs').then(m => m.default)},
    'template-list/index.html': {size: 66957, hash: '255da38cd77762d14d0844f3f29ab768c9e416e48c6decf64102331422a18488', text: () => import('./assets-chunks/template-list_index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 52738, hash: '96c020ac80124102923095f10a2fb92a2f6dfac40fb65950739d721dcae9456f', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'campaign/index.html': {size: 44938, hash: 'ecb9bda1e7125a1b02b7c65d98be3ab6c3ab27b79c5cf4ede7fe83c5381be67c', text: () => import('./assets-chunks/campaign_index_html.mjs').then(m => m.default)},
    'main-324HXWEH.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main-324HXWEH_css.mjs').then(m => m.default)},
    'main.server.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-NOBTK3JP.css': {size: 85730, hash: 'pVW/6modf9Q', text: () => import('./assets-chunks/styles-NOBTK3JP_css.mjs').then(m => m.default)}
  },
};
