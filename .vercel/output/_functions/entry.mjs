import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BCcENE_V.mjs';
import { manifest } from './manifest_CchikXz3.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/dmca.astro.mjs');
const _page2 = () => import('./pages/movies.astro.mjs');
const _page3 = () => import('./pages/premieres.astro.mjs');
const _page4 = () => import('./pages/search.astro.mjs');
const _page5 = () => import('./pages/titles/_id_.astro.mjs');
const _page6 = () => import('./pages/titles.astro.mjs');
const _page7 = () => import('./pages/tv.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/dmca.astro", _page1],
    ["src/pages/movies.astro", _page2],
    ["src/pages/premieres.astro", _page3],
    ["src/pages/search.astro", _page4],
    ["src/pages/titles/[id].astro", _page5],
    ["src/pages/titles/index.astro", _page6],
    ["src/pages/tv.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "05b44279-e698-4b5c-9080-0c1c01281a38",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
