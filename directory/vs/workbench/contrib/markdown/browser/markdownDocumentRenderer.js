define(
			de[1738],
			he([1, 0, 7, 920, 267, 434, 23, 37, 597]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mTc = void 0),
					(e.$nTc = a),
					(i = mt(i)),
					(E = mt(E)),
					(e.$mTc = `
body {
	padding: 10px 20px;
	line-height: 22px;
	max-width: 882px;
	margin: 0 auto;
}

body *:last-child {
	margin-bottom: 0;
}

img {
	max-width: 100%;
	max-height: 100%;
}

a {
	text-decoration: var(--text-link-decoration);
}

a:hover {
	text-decoration: underline;
}

a:focus,
input:focus,
select:focus,
textarea:focus {
	outline: 1px solid -webkit-focus-ring-color;
	outline-offset: -1px;
}

hr {
	border: 0;
	height: 2px;
	border-bottom: 2px solid;
}

h1 {
	padding-bottom: 0.3em;
	line-height: 1.2;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

h1, h2, h3 {
	font-weight: normal;
}

table {
	border-collapse: collapse;
}

th {
	text-align: left;
	border-bottom: 1px solid;
}

th,
td {
	padding: 5px 10px;
}

table > tbody > tr + tr > td {
	border-top-width: 1px;
	border-top-style: solid;
}

blockquote {
	margin: 0 7px 0 5px;
	padding: 0 16px 0 10px;
	border-left-width: 5px;
	border-left-style: solid;
}

code {
	font-family: "SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace;
}

pre {
	padding: 16px;
	border-radius: 3px;
	overflow: auto;
}

pre code {
	font-family: var(--vscode-editor-font-family);
	font-weight: var(--vscode-editor-font-weight);
	font-size: var(--vscode-editor-font-size);
	line-height: 1.5;
	color: var(--vscode-editor-foreground);
	tab-size: 4;
}

.monaco-tokenized-source {
	white-space: pre;
}

/** Theming */

.pre {
	background-color: var(--vscode-textCodeBlock-background);
}

.vscode-high-contrast h1 {
	border-color: rgb(0, 0, 0);
}

.vscode-light th {
	border-color: rgba(0, 0, 0, 0.69);
}

.vscode-dark th {
	border-color: rgba(255, 255, 255, 0.69);
}

.vscode-light h1,
.vscode-light hr,
.vscode-light td {
	border-color: rgba(0, 0, 0, 0.18);
}

.vscode-dark h1,
.vscode-dark hr,
.vscode-dark td {
	border-color: rgba(255, 255, 255, 0.18);
}

@media (forced-colors: active) and (prefers-color-scheme: light){
	body {
		forced-color-adjust: none;
	}
}

@media (forced-colors: active) and (prefers-color-scheme: dark){
	body {
		forced-color-adjust: none;
	}
}
`);
				const r = [C.Schemas.http, C.Schemas.https, C.Schemas.command];
				function u(c, n) {
					const g = (0, t.$Bhb)(r, !0);
					try {
						return i.sanitize(c, {
							ALLOWED_TAGS: [...t.$Chb, "checkbox", "checklist"],
							ALLOWED_ATTR: [
								...w.$Vib,
								"data-command",
								"name",
								"id",
								"role",
								"tabindex",
								"x-dispatch",
								"required",
								"checked",
								"placeholder",
								"when-checked",
								"checked-on",
							],
							...(n ? { ALLOW_UNKNOWN_PROTOCOLS: !0 } : {}),
						});
					} finally {
						g.dispose();
					}
				}
				async function a(c, n, g, p) {
					const f = await new E.Marked(
						h.markedHighlight({
							async: !0,
							async highlight(b, s) {
								if (typeof s != "string") return (0, d.$nf)(b);
								if (
									(await n.whenInstalledExtensionsRegistered(),
									p?.token?.isCancellationRequested)
								)
									return "";
								const l =
									g.getLanguageIdByLanguageName(s) ??
									g.getLanguageIdByLanguageName(
										s.split(/\s+|:|,|(?!^)\{|\?]/, 1)[0],
									);
								return (0, m.$cwb)(g, b, l);
							},
						}),
					).parse(c, { renderer: p?.renderer, async: !0 });
					return (p?.shouldSanitize ?? !0)
						? u(f, p?.allowUnknownProtocols ?? !1)
						: f;
				}
				var h;
				(function (c) {
					function n(v) {
						if (
							(typeof v == "function" && (v = { highlight: v }),
							!v || typeof v.highlight != "function")
						)
							throw new Error("Must provide highlight function");
						return {
							async: !!v.async,
							walkTokens(S) {
								if (S.type !== "code") return;
								const I = g(S.lang);
								if (v.async)
									return Promise.resolve(
										v.highlight(S.text, I, S.lang || ""),
									).then(p(S));
								const T = v.highlight(S.text, I, S.lang || "");
								if (T instanceof Promise)
									throw new Error(
										"markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.",
									);
								p(S)(T);
							},
							renderer: {
								code({ text: S, lang: I, escaped: T }) {
									const P = I ? ` class="language-${$(I)}"` : "";
									return (
										(S = S.replace(/\n$/, "")),
										`<pre><code${P}>${T ? S : $(S, !0)}
</code></pre>`
									);
								},
							},
						};
					}
					c.markedHighlight = n;
					function g(v) {
						return (v || "").match(/\S*/)[0];
					}
					function p(v) {
						return (S) => {
							typeof S == "string" &&
								S !== v.text &&
								((v.escaped = !0), (v.text = S));
						};
					}
					const o = /[&<>"']/,
						f = new RegExp(o.source, "g"),
						b = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
						s = new RegExp(b.source, "g"),
						l = {
							"&": "&amp;",
							"<": "&lt;",
							">": "&gt;",
							'"': "&quot;",
							"'": "&#39;",
						},
						y = (v) => l[v];
					function $(v, S) {
						if (S) {
							if (o.test(v)) return v.replace(f, y);
						} else if (b.test(v)) return v.replace(s, y);
						return v;
					}
				})(h || (h = {}));
			},
		),
		