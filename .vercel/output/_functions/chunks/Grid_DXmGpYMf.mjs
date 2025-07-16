import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_R_H6X0HF.mjs';
import 'kleur/colors';
import 'clsx';
import { s as sanitizeName } from './sanitizeName_B7GV1nUU.mjs';
import { t as toHour } from './config__BK1d8wM.mjs';
import { s as styles } from './movies.edc65b9c_BCijYxfX.mjs';

const $$Astro = createAstro();
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const props = Astro2.props;
  const currentPage = Number(props.titles.page) || 1;
  const totalPages = Number(props.titles.total) || 1;
  const searchParams = new URLSearchParams(Astro2.url.searchParams);
  function getPages() {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  }
  function getPageUrl(p) {
    const params = new URLSearchParams(searchParams);
    params.set("page", p.toString());
    return `?${params.toString()}`;
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(styles.wrapper, "class")}> <div${addAttribute(styles.top, "class")}> <a${addAttribute(styles.title, "class")} href="/recently">${props.label}</a> </div> ${props.titles.count === 0 && renderTemplate`<div${addAttribute(styles.no_results, "class")}>Sin resultados</div>`} <div${addAttribute(styles.grid, "class")}> ${props.titles.rows?.map((item) => renderTemplate`<a${addAttribute(styles.item, "class")}${addAttribute(`/titles/${item.id}-${sanitizeName(item.title)}-${new Date(item.date || Date.now()).getFullYear()}`, "href")}> <div${addAttribute(styles.poster, "class")}> <div${addAttribute(styles.container, "class")}> <img${addAttribute(styles.image, "class")}${addAttribute(`https://image.tmdb.org/t/p/w200${item.poster_portrait_path}`, "src")} alt="poster" loading="lazy"> ${!item.is_hd && renderTemplate`<div${addAttribute(styles.is_hd, "class")}>CAM</div>`} </div> </div> <div${addAttribute(styles.metadata, "class")}> <div${addAttribute(styles.item_metadata, "class")}>${new Date(item.date).getFullYear()}</div> ${item.is_movie ? renderTemplate`<div${addAttribute(styles.item_metadata, "class")}>${toHour(item.runtime)}</div>` : renderTemplate`<div${addAttribute(styles.item_metadata, "class")}>TV</div>`}  </div> </a>`)} </div> </div> ${props.titles.count > 42 ? renderTemplate`<nav${addAttribute(styles.pagination, "class")}> <nav${addAttribute(styles.nav, "class")}> ${currentPage > 1 && renderTemplate`<a${addAttribute(styles.button, "class")}${addAttribute(getPageUrl(currentPage - 1), "href")}>
&laquo;
</a>`} ${getPages().map(
    (p) => typeof p === "number" ? renderTemplate`<a${addAttribute(`${styles.button} ${p === currentPage ? styles.active : ""}`, "class")}${addAttribute(getPageUrl(p), "href")}> ${p} </a>` : renderTemplate`<span${addAttribute(styles.ellipsis, "class")}>…</span>`
  )} ${currentPage < totalPages && renderTemplate`<a${addAttribute(styles.button, "class")}${addAttribute(getPageUrl(currentPage + 1), "href")}>
&raquo;
</a>`} </nav> </nav>` : null}`;
}, "C:/Users/Admin/Downloads/moba-client-ssr/src/components/organisms/Grid/Grid.astro", void 0);

export { $$Grid as $ };
