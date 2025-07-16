import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_R_H6X0HF.mjs';
import 'kleur/colors';
import { $ as $$Grid } from '../chunks/Grid_DXmGpYMf.mjs';
import { c as config } from '../chunks/config__BK1d8wM.mjs';
import { $ as $$Layout, a as $$MetaTags } from '../chunks/MetaTags_BNwas-bw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let titles = [];
  const url = new URL(Astro2.request.url);
  const page = url.searchParams.get("page") ?? "1";
  try {
    const response = await fetch(
      `${config.BACKEND_URL}/api/v1/titles_client_cluster_category?page=${page}&limit=42&available=`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    titles = data;
  } catch (error) {
    console.error("Error fetching titles for slideshow:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Grid", $$Grid, { "titles": titles, "label": "\xDALTIMOS APORTES" })} `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "MetaTags", $$MetaTags, { "slot": "head", "title": `\xDALTIMOS APORTES`, "description": "Pel\xEDculas gratis online HD" })}` })}`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/pages/titles/index.astro", void 0);

const $$file = "C:/Users/Admin/Downloads/moba-client-ssr/src/pages/titles/index.astro";
const $$url = "/titles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
