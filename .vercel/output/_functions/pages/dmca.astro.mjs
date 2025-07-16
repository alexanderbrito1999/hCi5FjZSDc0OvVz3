import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_R_H6X0HF.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$MetaTags } from '../chunks/MetaTags_BNwas-bw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dmca = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dmca;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "head": ($$result2) => renderTemplate`${renderComponent($$result2, "MetaTags", $$MetaTags, { "slot": "head", "title": `DMCA`, "description": "" })}` })}`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/pages/dmca.astro", void 0);

const $$file = "C:/Users/Admin/Downloads/moba-client-ssr/src/pages/dmca.astro";
const $$url = "/dmca";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dmca,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
