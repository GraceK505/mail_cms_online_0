
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
    'index.csr.html': {size: 18389, hash: '5884a95c386ae5d202c5d4623751acbabb2ecbbdad0c562f066f7120fc730b10', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17547, hash: '2e0818aaf32b28389f32e20975caf9512cc00ac34de514880aac8ef091e2f9cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'editor/index.html': {size: 42288, hash: 'ffc8e6ad8b998d1d3c4b2e3b0814fe76291e8d40a3476a62e5a7cea787e3ee3a', text: () => import('./assets-chunks/editor_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 53729, hash: 'ecd3490e01f65dd95007b5ee63e70cd85ffe9be0e3d4d0e825c9961ac8ee1dbb', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 42151, hash: '3d7113e625a87d777d740c6403316b8ab09881dccf92230daa43ce8823cde8ce', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'search-slot/index.html': {size: 44922, hash: 'd6d30846982c06ea3721bf0cd42509c87e79672e33eb9f4bb5fcf99c7eb7986d', text: () => import('./assets-chunks/search-slot_index_html.mjs').then(m => m.default)},
    'template-list/index.html': {size: 67146, hash: '7281ac9e8389d54b6268773a95e118a51ea983578545570086b8f79769cc334f', text: () => import('./assets-chunks/template-list_index_html.mjs').then(m => m.default)},
    'template-editor/index.html': {size: 42573, hash: '07dd944658f395036934284cebdc86304e396484358853360427d942aa80470b', text: () => import('./assets-chunks/template-editor_index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 52738, hash: '072a457b953f8ca16aa7e35d0ecb60b872b351cff3c7c09164d8afada6b91050', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'campaign/index.html': {size: 44938, hash: '09c1780c7fe4c929f0e6db6073fb4c44def0f591af86ee9b5c1ceffebb6e8cff', text: () => import('./assets-chunks/campaign_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53729, hash: 'ecd3490e01f65dd95007b5ee63e70cd85ffe9be0e3d4d0e825c9961ac8ee1dbb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'main-324HXWEH.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main-324HXWEH_css.mjs').then(m => m.default)},
    'main.server.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-NOBTK3JP.css': {size: 85730, hash: 'pVW/6modf9Q', text: () => import('./assets-chunks/styles-NOBTK3JP_css.mjs').then(m => m.default)}
  },
};
