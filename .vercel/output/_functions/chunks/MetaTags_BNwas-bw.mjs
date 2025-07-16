import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as createAstro, e as renderSlot, f as renderHead, d as renderComponent } from './astro/server_R_H6X0HF.mjs';
import 'kleur/colors';
import 'clsx';
import { s as styles, a as styles$1 } from './dmca.f1b20d80_BxeeQ9Uv.mjs';

const $$NavButtons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(styles.query_wrapper, "class")}> <a${addAttribute(`${styles.query_item}`, "class")} href="/">Inicio</a> <a${addAttribute(`${styles.query_item}`, "class")} href="/movies">Películas</a> <a${addAttribute(`${styles.query_item}`, "class")} href="/tv">Series TV</a> <a${addAttribute(`${styles.query_item}`, "class")} href="/premieres">Estrenos</a> <!-- <a class={\`\${styles.query_item}\`} href="/dmca">DMCA</a>
  <a class={\`\${styles.query_item}\`} href="/vip">VIP</a> --> </nav>`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/components/molecules/NavButtons/NavButtons.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(styles$1.navbar, "class")}> <div${addAttribute(styles$1.wrapper, "class")}> <a${addAttribute(styles$1.logo, "class")} href="/">MOBAES</a> <!-- <a class={styles.icon_wrapper} href="/search">
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        height="200px"
        width="200px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </a> --> <!-- <form method="GET" action="/search" class={styles.search_form}>
      <input type="text" name="search" placeholder="Buscar..." required />
      <button type="submit">Buscar</button>
    </form> --> <form method="GET" action="/search"${addAttribute(styles$1.search_input_wrapper, "class")}> <div${addAttribute(styles$1.icon_search_container, "class")}> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"> <circle cx="11" cy="11" r="8"></circle> <line x1="21" y1="21" x2="16.65" y2="16.65"></line> </svg> </div> <input type="text" name="search" placeholder="Buscar..." required${addAttribute(styles$1.search_input, "class")}> </form> </div> </nav>`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/components/organisms/Navbar/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- <title>MOBAES</title> -->${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderComponent($$result, "NavButtons", $$NavButtons, {})} <main>${renderSlot($$result, $$slots["default"])}</main> </body></html>`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$MetaTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MetaTags;
  const { title, description } = Astro2.props;
  return renderTemplate`<title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/MetaTags.astro", void 0);

export { $$Layout as $, $$MetaTags as a };
