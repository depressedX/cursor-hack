define(de[3074], he([1, 0, 33, 69, 42, 31]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				E.$fk.registerCommand(
					"_executeMappedEditsProvider",
					async (C, d, m, r) => {
						const u = C.get(w.$MO),
							a = C.get(i.$k3),
							h = await u.createModelReference(d);
						let c = null;
						try {
							const n = a.mappedEditsProvider.ordered(h.object.textEditorModel);
							if (n.length > 0) {
								const g = n[0],
									p = new t.$Ce();
								c = await g.provideMappedEdits(
									h.object.textEditorModel,
									m,
									r,
									p.token,
								);
							}
						} finally {
							h.dispose();
						}
						return c;
					},
				);
		}),
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
		define(
			de[1247],
			he([1, 0, 132, 215, 37, 19, 387]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CRc = e.$BRc = void 0),
					(w = mt(w));
				class d {
					constructor(u, a, h) {
						(this.a = (0, i.$Jk)(u)),
							(this.b = C.$Si.forUris((c) => h.extUri.ignorePathCasing(c)));
						for (const c of a)
							this.b.set(c.root, {
								root: c.root,
								expression: (0, i.$Jk)(c.expression),
							});
					}
					matches(u) {
						const a = this.b.findSubstr(u);
						if (a) {
							const h = (0, E.$ph)(a.root, u);
							if (h && a.expression(h)) return !0;
						}
						return !!this.a(u.path);
					}
				}
				e.$BRc = d;
				class m {
					static {
						this._filter = t.$1k;
					}
					static {
						this._messageFilter = t.$Zk;
					}
					static EMPTY(u) {
						return new m("", [], !1, !1, !1, u);
					}
					constructor(u, a, h, c, n, g) {
						(this.filter = u),
							(this.showWarnings = !1),
							(this.showErrors = !1),
							(this.showInfos = !1),
							(u = u.trim()),
							(this.showWarnings = h),
							(this.showErrors = c),
							(this.showInfos = n);
						const p = Array.isArray(a) ? a : [],
							o = Array.isArray(a) ? (0, i.$Ek)() : a;
						for (const { expression: s } of p)
							for (const l of Object.keys(s))
								l.endsWith("/**") || (s[`${w.$uf(l, "/")}/**`] = s[l]);
						const f = u.startsWith("!");
						this.textFilter = {
							text: (f ? w.$tf(u, "!") : u).trim(),
							negate: f,
						};
						const b = (0, i.$Ek)();
						if (u) {
							const s = (0, i.$Hk)(u, ",")
								.map((l) => l.trim())
								.filter((l) => !!l.length);
							for (const l of s)
								if (l.startsWith("!")) {
									const y = w.$tf(l, "!");
									y && this.a(o, y);
								} else this.a(b, l);
						}
						(this.excludesMatcher = new d(o, p, g)),
							(this.includesMatcher = new d(b, [], g));
					}
					a(u, a) {
						a[0] === "." && (a = "*" + a),
							(u[`**/${a}/**`] = !0),
							(u[`**/${a}`] = !0);
					}
				}
				e.$CRc = m;
			},
		),
		define(
			de[988],
			he([1, 0, 19, 17, 90, 24, 59, 6, 136, 37, 667]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wRc = e.$vRc = e.$uRc = e.$tRc = e.$sRc = void 0),
					(e.$rRc = a);
				function a(f, b) {
					return t.$dh.compare(f.resource, b.resource);
				}
				function h(f, b) {
					const [s] = f.markers,
						[l] = b.markers;
					let y = 0;
					return (
						s &&
							l &&
							(y = w.MarkerSeverity.compare(
								s.marker.severity,
								l.marker.severity,
							)),
						y === 0 &&
							(y =
								f.path.localeCompare(b.path) || f.name.localeCompare(b.name)),
						y
					);
				}
				class c {
					constructor(b, s) {
						(this.id = b),
							(this.resource = s),
							(this.c = new C.$Gc()),
							(this.e = 0),
							(this.path = this.resource.fsPath),
							(this.name = (0, t.$kh)(this.resource));
					}
					get markers() {
						return (
							this.d || (this.d = [...this.c.values()].flat().sort(c.f)), this.d
						);
					}
					has(b) {
						return this.c.has(b);
					}
					set(b, s) {
						this.delete(b),
							(0, E.$Pb)(s) &&
								(this.c.set(b, s), (this.e += s.length), (this.d = void 0));
					}
					delete(b) {
						const s = this.c.get(b);
						s && ((this.e -= s.length), (this.d = void 0), this.c.delete(b));
					}
					get total() {
						return this.e;
					}
					static f(b, s) {
						return (
							w.MarkerSeverity.compare(b.marker.severity, s.marker.severity) ||
							t.$dh.compare(b.resource, s.resource) ||
							i.$iL.compareRangesUsingStarts(b.marker, s.marker)
						);
					}
				}
				e.$sRc = c;
				class n {
					get resource() {
						return this.marker.resource;
					}
					get range() {
						return this.marker;
					}
					get lines() {
						return this.c || (this.c = (0, r.$zf)(this.marker.message)), this.c;
					}
					constructor(b, s, l = []) {
						(this.id = b), (this.marker = s), (this.relatedInformation = l);
					}
					toString() {
						return JSON.stringify(
							{
								...this.marker,
								resource: this.marker.resource.path,
								relatedInformation: this.relatedInformation.length
									? this.relatedInformation.map((b) => ({
											...b.raw,
											resource: b.raw.resource.path,
										}))
									: void 0,
							},
							null,
							"	",
						);
					}
				}
				e.$tRc = n;
				class g extends n {
					constructor(b, s, l, y, $, v) {
						super(b.id, b.marker, b.relatedInformation),
							(this.sourceMatches = s),
							(this.codeMatches = l),
							(this.messageMatches = y),
							(this.fileMatches = $),
							(this.ownerMatches = v);
					}
				}
				e.$uRc = g;
				class p {
					constructor(b, s, l) {
						(this.id = b), (this.marker = s), (this.raw = l);
					}
				}
				e.$vRc = p;
				class o {
					get resourceMarkers() {
						return this.d || (this.d = [...this.f.values()].sort(h)), this.d;
					}
					constructor() {
						(this.d = void 0),
							(this.e = new d.$re()),
							(this.onDidChange = this.e.event),
							(this.g = 0),
							(this.f = new Map());
					}
					reset() {
						const b = new Set();
						for (const s of this.f.values()) b.add(s);
						this.f.clear(),
							(this.g = 0),
							this.e.fire({ removed: b, added: new Set(), updated: new Set() });
					}
					get total() {
						return this.g;
					}
					getResourceMarkers(b) {
						return this.f.get(t.$dh.getComparisonKey(b, !0)) ?? null;
					}
					setResourceMarkers(b) {
						const s = {
							added: new Set(),
							removed: new Set(),
							updated: new Set(),
						};
						for (const [l, y] of b) {
							if (u.$jic.has(l.scheme)) continue;
							const $ = t.$dh.getComparisonKey(l, !0);
							let v = this.f.get($);
							if ((0, E.$Pb)(y)) {
								if (v) s.updated.add(v);
								else {
									const T = this.h(l.toString());
									(v = new c(T, l.with({ fragment: null }))),
										this.f.set($, v),
										s.added.add(v);
								}
								const S = new Map(),
									I = y.map((T) => {
										const P = w.IMarkerData.makeKey(T),
											k = S.get(P) || 0;
										S.set(P, k + 1);
										const L = this.h(v.id, P, k, T.resource.toString());
										let D;
										return (
											T.relatedInformation &&
												(D = T.relatedInformation.map(
													(M, N) =>
														new p(
															this.h(
																L,
																M.resource.toString(),
																M.startLineNumber,
																M.startColumn,
																M.endLineNumber,
																M.endColumn,
																N,
															),
															T,
															M,
														),
												)),
											new n(L, T, D)
										);
									});
								(this.g -= v.total), v.set(l, I), (this.g += v.total);
							} else
								v &&
									((this.g -= v.total),
									v.delete(l),
									(this.g += v.total),
									v.total === 0
										? (this.f.delete($), s.removed.add(v))
										: s.updated.add(v));
						}
						(this.d = void 0),
							(s.added.size || s.removed.size || s.updated.size) &&
								this.e.fire(s);
					}
					h(...b) {
						const s = new m.$Ej();
						for (const l of b) s.hash(l);
						return `${s.value}`;
					}
					dispose() {
						this.e.dispose(), this.f.clear();
					}
				}
				e.$wRc = o;
			},
		),
		