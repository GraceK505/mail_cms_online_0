
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
    'index.csr.html': {size: 18389, hash: 'b8c0441e7c66c2a01d4107c88631ec826933835f9da516c7b697f2356fc98479', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17547, hash: 'bdc8710250ddbeda3019248bda516bb1677eebdd84742fc10c0f8da814eb90d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 53729, hash: '7042493a042f774526c89d36ec3aa45be430974066983880b53ec4910a3ab948', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53729, hash: '7042493a042f774526c89d36ec3aa45be430974066983880b53ec4910a3ab948', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'search/index.html': {size: 42151, hash: '50d648d60d2b764207b852a69ffcc9aa0056a44277eee0e45bb19969af1272c0', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'editor/index.html': {size: 42288, hash: '3627c03836abd87aaaba1091ad4a440724aabb5d02c0b02c7346d24df9f5ac40', text: () => import('./assets-chunks/editor_index_html.mjs').then(m => m.default)},
    'search-slot/index.html': {size: 44922, hash: 'ffff7b3563f359d78ff6548836db161eef1d82920773880eb8c6d162bc2354f1', text: () => import('./assets-chunks/search-slot_index_html.mjs').then(m => m.default)},
    'template-list/index.html': {size: 67146, hash: '888c7bccc20126db126f678560ff46e9662dca357efaca225ad544a6c30a3157', text: () => import('./assets-chunks/template-list_index_html.mjs').then(m => m.default)},
    'docs/index.html': {size: 52738, hash: 'de9e38809dc162e8789bbb0e942e8013d75e1c1697ca9740d8cd317b2ebd7b91', text: () => import('./assets-chunks/docs_index_html.mjs').then(m => m.default)},
    'template-editor/index.html': {size: 42573, hash: 'ffd23b0b26780dda67ee2e193cab2600d6916f31a2b29ec80329301c2e452df2', text: () => import('./assets-chunks/template-editor_index_html.mjs').then(m => m.default)},
    'campaign/index.html': {size: 44938, hash: '0a9b52dea5387e1d25c3395071cc2a1ee65d212c8d5c528bbf5709a2514bd065', text: () => import('./assets-chunks/campaign_index_html.mjs').then(m => m.default)},
    'main-324HXWEH.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main-324HXWEH_css.mjs').then(m => m.default)},
    'main.server.css': {size: 1085939, hash: 'zVSwmKZXFpk', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-NOBTK3JP.css': {size: 85730, hash: 'pVW/6modf9Q', text: () => import('./assets-chunks/styles-NOBTK3JP_css.mjs').then(m => m.default)}
  },
};
