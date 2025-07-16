import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as createAstro, d as renderComponent } from '../chunks/astro/server_R_H6X0HF.mjs';
import 'kleur/colors';
import 'clsx';
import { c as config, t as toHour } from '../chunks/config__BK1d8wM.mjs';
import { s as sanitizeName } from '../chunks/sanitizeName_B7GV1nUU.mjs';
import { s as styles, a as styles$1 } from '../chunks/index.95d291e9_BhA4CXJ3.mjs';
import { $ as $$Layout, a as $$MetaTags } from '../chunks/MetaTags_BNwas-bw.mjs';
export { renderers } from '../renderers.mjs';

const $$Recently = createComponent(async ($$result, $$props, $$slots) => {
  let titles = [];
  try {
    const response = await fetch(
      `${config.BACKEND_URL}/api/v1/titles_client_cluster_category?search=&page=1&limit=21&available=&categoryID=&vote_average=&certification=`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    titles = data;
  } catch (error) {
    console.error("Error fetching titles for slideshow:", error);
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles.recently, "class")}> <div${addAttribute(styles.top, "class")}> <a${addAttribute(styles.title, "class")} href="/recently">ÚLTIMOS APORTES</a> <!-- <a class={styles.wrapper_link} href="/premieres">
      <svg
        fill="currentColor"
        color="inherit"
        font-size="inherit"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        ><path
          d="M12 4h4.4c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.45c.11.21.11.49.11 1.05v1.1c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11H12A3.7 3.7 0 0 0 8.3 12v24a3.7 3.7 0 0 0 3.7 3.7h24a3.7 3.7 0 0 0 3.7-3.7v-4.4c0-.56 0-.84.1-1.05a1 1 0 0 1 .45-.44c.21-.11.49-.11 1.05-.11h1.1c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.45c.11.21.11.49.11 1.05V36a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8Z"
        ></path><path
          d="M27.54 5.77c0-.56 0-.84.1-1.05a1 1 0 0 1 .44-.44c.22-.1.5-.1 1.06-.1h12.54c1.18 0 2.15.95 2.15 2.14v12.54c0 .56 0 .84-.11 1.06a1 1 0 0 1-.44.44c-.21.1-.5.1-1.05.1h-1.1c-.56 0-.84 0-1.06-.1a1 1 0 0 1-.43-.44c-.11-.22-.11-.5-.11-1.06v-7.35L26.65 24.4c-.4.4-.6.6-.82.67a1 1 0 0 1-.62 0c-.23-.08-.43-.28-.82-.67l-.78-.78c-.4-.4-.6-.6-.67-.82a1 1 0 0 1 0-.62c.08-.23.27-.43.67-.82L36.5 8.47h-7.35c-.56 0-.84 0-1.06-.1a1 1 0 0 1-.44-.44c-.1-.22-.1-.5-.1-1.06v-1.1Z"
        ></path></svg
      >
    </a> --> </div> <div${addAttribute(styles.grid, "class")}> ${titles.rows?.map((item) => renderTemplate`<a${addAttribute(styles.item, "class")}${addAttribute(`/titles/${item.id}-${sanitizeName(item.title)}-${new Date(item.date || Date.now()).getFullYear()}`, "href")}> <div${addAttribute(styles.poster, "class")}> <div${addAttribute(styles.container, "class")}> <img${addAttribute(styles.image, "class")}${addAttribute(`https://image.tmdb.org/t/p/w200${item.poster_portrait_path}`, "src")} alt="poster" loading="lazy"> ${!item.is_hd && renderTemplate`<div${addAttribute(styles.is_hd, "class")}>CAM</div>`} </div> </div> <div${addAttribute(styles.metadata, "class")}> <div${addAttribute(styles.item_metadata, "class")}>${new Date(item.date).getFullYear()}</div>  ${item.is_movie ? renderTemplate`<div${addAttribute(styles.item_metadata, "class")}>${toHour(item.runtime)}</div>` : renderTemplate`<div${addAttribute(styles.item_metadata, "class")}>TV</div>`}  </div> </a>`)} </div> <div${addAttribute(styles.bottom, "class")}> <a${addAttribute(styles.button_showmore, "class")} href="/titles">VER MÁS</a> </div> </div>`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/components/organisms/Recently/Recently.astro", void 0);

const $$Slideshow = createComponent(async ($$result, $$props, $$slots) => {
  let titles = [];
  try {
    const response = await fetch(`${config.BACKEND_URL}/api/v1/titles_client_slideshow`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    titles = data;
  } catch (error) {
    console.error("Error fetching titles for slideshow:", error);
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles$1.slideshow, "class")}> <div${addAttribute(styles$1.top, "class")}> <a${addAttribute(styles$1.title, "class")} href="/premieres">ESTRENOS</a> <!-- <a class={styles.wrapper_link} href="/premieres">
      <svg
        fill="currentColor"
        color="inherit"
        font-size="inherit"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        ><path
          d="M12 4h4.4c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.45c.11.21.11.49.11 1.05v1.1c0 .56 0 .84-.1 1.05a1 1 0 0 1-.45.44c-.21.11-.49.11-1.05.11H12A3.7 3.7 0 0 0 8.3 12v24a3.7 3.7 0 0 0 3.7 3.7h24a3.7 3.7 0 0 0 3.7-3.7v-4.4c0-.56 0-.84.1-1.05a1 1 0 0 1 .45-.44c.21-.11.49-.11 1.05-.11h1.1c.56 0 .84 0 1.05.1a1 1 0 0 1 .44.45c.11.21.11.49.11 1.05V36a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V12a8 8 0 0 1 8-8Z"
        ></path><path
          d="M27.54 5.77c0-.56 0-.84.1-1.05a1 1 0 0 1 .44-.44c.22-.1.5-.1 1.06-.1h12.54c1.18 0 2.15.95 2.15 2.14v12.54c0 .56 0 .84-.11 1.06a1 1 0 0 1-.44.44c-.21.1-.5.1-1.05.1h-1.1c-.56 0-.84 0-1.06-.1a1 1 0 0 1-.43-.44c-.11-.22-.11-.5-.11-1.06v-7.35L26.65 24.4c-.4.4-.6.6-.82.67a1 1 0 0 1-.62 0c-.23-.08-.43-.28-.82-.67l-.78-.78c-.4-.4-.6-.6-.67-.82a1 1 0 0 1 0-.62c.08-.23.27-.43.67-.82L36.5 8.47h-7.35c-.56 0-.84 0-1.06-.1a1 1 0 0 1-.44-.44c-.1-.22-.1-.5-.1-1.06v-1.1Z"
        ></path></svg
      >
    </a> --> </div> <div${addAttribute(styles$1.grid, "class")}> ${titles?.slice(0, 6).map((item) => renderTemplate`<a${addAttribute(styles$1.item, "class")}${addAttribute(`/titles/${item.id}-${sanitizeName(item.title)}-${new Date(item.date || Date.now()).getFullYear()}`, "href")}> <div${addAttribute(styles$1.poster, "class")}> <div${addAttribute(styles$1.container, "class")}> <img${addAttribute(styles$1.image, "class")}${addAttribute(`https://image.tmdb.org/t/p/w200${item.poster_portrait_path}`, "src")} alt="poster" loading="lazy"> ${!item.is_hd && renderTemplate`<div${addAttribute(styles$1.is_hd, "class")}>CAM</div>`} </div> </div> <div${addAttribute(styles$1.metadata, "class")}> <div${addAttribute(styles$1.item_metadata, "class")}>${new Date(item.date).getFullYear()}</div>  ${item.is_movie ? renderTemplate`<div${addAttribute(styles$1.item_metadata, "class")}>${toHour(item.runtime)}</div>` : renderTemplate`<div${addAttribute(styles$1.item_metadata, "class")}>TV</div>`}  </div> </a>`)} </div> <div${addAttribute(styles$1.bottom, "class")}> <a${addAttribute(styles$1.button_showmore, "class")} href="/premieres">VER MÁS</a> </div> </div>`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/components/organisms/Slideshow/Slideshow.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Slideshow", $$Slideshow, {})} ${renderComponent($$result2, "Recently", $$Recently, {})} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "MetaTags", $$MetaTags, { "slot": "head", "title": `MOBAES`, "description": "Pel\xEDculas gratis online HD" })}` })}`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/pages/index.astro", void 0);

const $$file = "C:/Users/Admin/Downloads/moba-client-ssr/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
