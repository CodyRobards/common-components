export let fontSheet: CSSStyleSheet | null = null;

if (typeof CSSStyleSheet !== "undefined" && "replaceSync" in CSSStyleSheet.prototype) {
  fontSheet = new CSSStyleSheet();
  fontSheet.replaceSync(`
@font-face {
    font-family: 'Goldman';
    src: url("../fonts/goldman-latin-400-normal.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }
@font-face {
    font-family: 'B612';
    src: url("../fonts/b612-latin-400-normal.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
}
`);
}
