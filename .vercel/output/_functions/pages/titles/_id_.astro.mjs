import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, F as Fragment } from '../../chunks/astro/server_R_H6X0HF.mjs';
import 'kleur/colors';
import { s as styles, a as styles$1 } from '../../chunks/_id_.eafd7c3a_ITT-RVuT.mjs';
import 'clsx';
import { t as toHour, c as config } from '../../chunks/config__BK1d8wM.mjs';
import { $ as $$Layout, a as $$MetaTags } from '../../chunks/MetaTags_BNwas-bw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$TitleInformation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TitleInformation;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles.title_information, "class")}>  ${props.title.overview.length !== 0 && renderTemplate`<div${addAttribute(styles.overview, "class")}>${props.title.overview}</div>`}  <div${addAttribute(styles.information_grid, "class")}> <div${addAttribute(styles.row, "class")}> <section${addAttribute(styles.row_title, "class")}>Título</section> <p${addAttribute(styles.row_data, "class")}>${props.title.original_title}</p> </div> <div${addAttribute(styles.row, "class")}> <section${addAttribute(styles.row_title, "class")}>Fecha</section> <p${addAttribute(styles.row_data, "class")}>${props.title.date.split("T")[0]}</p> </div> <div${addAttribute(styles.row, "class")}> <section${addAttribute(styles.row_title, "class")}>Director</section> <p${addAttribute(styles.row_data, "class")}>${props.title.director}</p> </div> <div${addAttribute(styles.row, "class")}> <section${addAttribute(styles.row_title, "class")}>Géneros</section> <p${addAttribute(styles.row_data, "class")}>${props.title.genres}</p> </div> ${props.title.is_movie && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div${addAttribute(styles.row, "class")}> <section${addAttribute(styles.row_title, "class")}>Presupuesto</section> <p${addAttribute(styles.row_data, "class")}> ${props.title.budget === 0 ? "-" : new Intl.NumberFormat().format(props.title.budget)} </p> </div> <div${addAttribute(styles.row, "class")}> <section${addAttribute(styles.row_title, "class")}>Ganancias</section> <p${addAttribute(styles.row_data, "class")}> ${props.title.revenue === 0 ? "-" : new Intl.NumberFormat().format(props.title.revenue)} </p> </div> ` })}`} <div${addAttribute(styles.row, "class")}> <section${addAttribute(styles.row_title, "class")}>Paises</section> <p${addAttribute(styles.row_data, "class")}>${props.title.production_countries}</p> </div> <div${addAttribute(styles.row, "class")}> <section${addAttribute(styles.row_title, "class")}>Productoras</section> <p${addAttribute(styles.row_data, "class")}>${props.title.production_companies}</p> </div> <div${addAttribute(styles.row, "class")}> <section${addAttribute(styles.row_title, "class")}>Cast</section> <p${addAttribute(`${styles.row_data} ${styles.truncate}`, "class")}>${props.title.cast}</p> </div> </div> </div>`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/components/molecules/TitleInformation/TitleInformation.astro", void 0);

const toAge = (certification) => {
  switch (true) {
    case certification === 1:
      return "2+";
    case certification === 2:
      return "5+";
    case certification === 4:
      return "7+";
    case certification === 4:
      return "13+";
    case certification === 5:
      return "15+";
    case certification === 6:
      return "17+";
    case certification === 0:
      return "NR";
    default:
      return "NR";
  }
};

const $$Astro$1 = createAstro();
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Banner;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles$1.banner, "class")}> <picture${addAttribute(styles$1.picture_container, "class")}> <source media="(max-width: 780px)"${addAttribute(`https://image.tmdb.org/t/p/w780${props.title.backdrop_portrait_path}`, "srcset")}> <source media="(min-width: 781px)"${addAttribute(`https://image.tmdb.org/t/p/w1920${props.title.backdrop_landscape_path}`, "srcset")}> <img${addAttribute(styles$1.backdrop_image, "class")}${addAttribute(`https://image.tmdb.org/t/p/w1920${props.title.backdrop_landscape_path}`, "src")}${addAttribute("", "alt")} loading="lazy"> </picture> <div${addAttribute(styles$1.gradient, "class")}></div> <div${addAttribute(styles$1.data, "class")}> ${props.title.logo_path && renderTemplate`<img${addAttribute(styles$1.banner_logo, "class")}${addAttribute(`https://image.tmdb.org/t/p/w500${props.title.logo_path}`, "src")}${addAttribute("", "alt")}>`} <h1${addAttribute(styles$1.title, "class")}>Ver online: ${props.title.title}</h1> <h2${addAttribute(styles$1.tagline, "class")}>${props.title.tagline}</h2> <section${addAttribute(styles$1.metadata, "class")}> <div${addAttribute(styles$1.item_metadata, "class")}>${new Date(props.title.date).getFullYear()}</div> ${props.title.runtime !== 0 && renderTemplate`<div${addAttribute(styles$1.item_metadata, "class")}>${props.title.runtime === 0 ? "Na" : toHour(props.title.runtime)}</div>`} <div${addAttribute(styles$1.item_metadata, "class")}>${toAge(props.title.certification_id)}</div> ${props.title.vote_average !== 0 && renderTemplate`<div${addAttribute(styles$1.item_metadata, "class")}> <p${addAttribute(styles$1.icon_metadata, "class")}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"></path> </svg> </p> ${props.title.vote_average?.toFixed(1)} </div>`} ${!props.title.is_hd && renderTemplate`<div${addAttribute(styles$1.item_metadata, "class")}>CAM</div>`} </section> <div${addAttribute(styles$1.buttons_container, "class")}> <a${addAttribute(styles$1.button, "class")}${addAttribute(`https://mobaes.pages.dev/browser/title/${props.title.id}`, "href")}>Ver ahora</a> <a${addAttribute(`${styles$1.button} ${styles$1.button2}`, "class")}${addAttribute(`https://mobaes.pages.dev`, "href")}>VER MÁS</a> </div> </div> </div>`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/components/organisms/Banner/Banner.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const title_id = id?.split("-")[0];
  let data;
  try {
    const response = await fetch(`${config.BACKEND_URL}/api/v1/title_client/${title_id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
  } catch (error) {
    console.error("Error fetching titles for slideshow:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "title": data })} ${renderComponent($$result2, "TitleInformation", $$TitleInformation, { "title": data })} `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "MetaTags", $$MetaTags, { "slot": "head", "title": `Ver online: ${data.title} (${new Date(data.date || Date.now()).getFullYear()})`, "description": data.overview })}` })}`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/pages/titles/[id].astro", void 0);

const $$file = "C:/Users/Admin/Downloads/moba-client-ssr/src/pages/titles/[id].astro";
const $$url = "/titles/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
