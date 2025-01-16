define(de[1786], he([1, 0, 4]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$AYc = e.$zYc = e.ViewsWelcomeExtensionPointFields = void 0),
				(t = mt(t));
			var i;
			(function (E) {
				(E.view = "view"),
					(E.contents = "contents"),
					(E.when = "when"),
					(E.group = "group"),
					(E.enablement = "enablement");
			})(i || (e.ViewsWelcomeExtensionPointFields = i = {})),
				(e.$zYc = {
					explorer: "workbench.explorer.emptyView",
					debug: "workbench.debug.welcome",
					scm: "workbench.scm",
					testing: "workbench.view.testing",
				});
			const w = Object.freeze({
				type: "array",
				description: t.localize(11649, null),
				items: {
					type: "object",
					description: t.localize(11650, null),
					required: [i.view, i.contents],
					properties: {
						[i.view]: {
							anyOf: [
								{ type: "string", description: t.localize(11651, null) },
								{
									type: "string",
									description: t.localize(11652, null),
									enum: Object.keys(e.$zYc),
								},
							],
						},
						[i.contents]: {
							type: "string",
							description: t.localize(11653, null),
						},
						[i.when]: { type: "string", description: t.localize(11654, null) },
						[i.group]: { type: "string", description: t.localize(11655, null) },
						[i.enablement]: {
							type: "string",
							description: t.localize(11656, null),
						},
					},
				},
			});
			e.$AYc = { extensionPoint: "viewsWelcome", jsonSchema: w };
		}),
		define(
			de[1276],
			he([1, 0, 42, 67, 64, 61, 434, 23, 17, 122, 28, 5]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nYc = e.$lYc = void 0),
					(e.$mYc = c),
					(C = mt(C));
				class h {
					constructor() {
						this.a = new Map();
					}
					registerProvider(p, o) {
						this.a.set(p, o);
					}
					getProvider(p) {
						return this.a.get(p);
					}
				}
				e.$lYc = new h();
				async function c(g, p) {
					if (!p.query) throw new Error("Walkthrough: invalid resource");
					const o = JSON.parse(p.query);
					if (!o.moduleId) throw new Error("Walkthrough: invalid resource");
					const f = e.$lYc.getProvider(o.moduleId);
					return f
						? g.invokeFunction(f)
						: new Promise((b, s) => {
								ce([o.moduleId], (l) => {
									try {
										b(g.invokeFunction(l.default));
									} catch (y) {
										s(y);
									}
								});
							});
				}
				let n = class {
					static {
						this.ID = "workbench.contrib.walkThroughSnippetContentProvider";
					}
					constructor(p, o, f, b) {
						(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.e = b),
							(this.a = new Map()),
							this.b.registerTextModelContentProvider(
								d.Schemas.walkThroughSnippet,
								this,
							);
					}
					async f(p) {
						let o = this.a.get(p.toString());
						return (
							o ||
								((o = c(this.e, p)
									.then((f) => (0, r.$7X)(f))
									.finally(() => this.a.delete(p.toString()))),
								this.a.set(p.toString(), o)),
							o
						);
					}
					async provideTextContent(p) {
						const o = await this.f(p.with({ fragment: "" }));
						let f = this.d.getModel(p);
						if (!f) {
							const b = parseInt(p.fragment);
							let s = 0;
							const l = new C.marked.Renderer();
							l.code = ({ text: I, lang: T }) => {
								s++;
								const P =
										(typeof T == "string" &&
											this.c.getLanguageIdByLanguageName(T)) ||
										"",
									k = this.c.createById(P),
									L = this.d.createModel(
										I,
										k,
										p.with({ fragment: `${s}.${T}` }),
									);
								return s === b && (f = L), "";
							};
							const y = o.create(w.DefaultEndOfLine.LF).textBuffer,
								$ = y.getLineCount(),
								v = new m.$iL(1, 1, $, y.getLineLength($) + 1),
								S = y.getValueInRange(v, w.EndOfLinePreference.TextDefined);
							C.marked(S, { renderer: l });
						}
						return (0, u.$wg)(f);
					}
				};
				(e.$nYc = n),
					(e.$nYc = n =
						Ne([j(0, t.$MO), j(1, E.$nM), j(2, i.$QO), j(3, a.$Li)], n));
			},
		),
		define(
			de[1277],
			he([1, 0, 223, 416, 42, 434, 19, 1276, 44, 5, 23]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oYc = void 0);
				class h extends i.$PO {
					constructor(g, p) {
						super(), (this.a = g), (this.b = p);
					}
					get main() {
						return this.a;
					}
					get snippets() {
						return this.b.map((g) => g.object);
					}
					dispose() {
						this.b.forEach((g) => g.dispose()), super.dispose();
					}
				}
				let c = (a = class extends t.$LO {
					get capabilities() {
						return m.EditorInputCapabilities.Singleton | super.capabilities;
					}
					get resource() {
						return this.m.resource;
					}
					constructor(g, p, o) {
						super(),
							(this.m = g),
							(this.n = p),
							(this.q = o),
							(this.a = null),
							(this.c = 0),
							(this.h = 0);
					}
					get typeId() {
						return this.m.typeId;
					}
					getName() {
						return this.m.name;
					}
					getDescription() {
						return this.m.description || "";
					}
					getTelemetryFrom() {
						return this.m.telemetryFrom;
					}
					getTelemetryDescriptor() {
						const g = super.getTelemetryDescriptor();
						return (g.target = this.getTelemetryFrom()), g;
					}
					get onReady() {
						return this.m.onReady;
					}
					get layout() {
						return this.m.layout;
					}
					resolve() {
						return (
							this.a ||
								(this.a = (0, d.$mYc)(this.n, this.m.resource).then((g) => {
									if (this.resource.path.endsWith(".html")) return new h(g, []);
									const p = [];
									let o = 0;
									const f = new E.marked.Renderer();
									return (
										(f.code = ({ lang: b }) => {
											o++;
											const s = this.m.resource.with({
												scheme: u.Schemas.walkThroughSnippet,
												fragment: `${o}.${b}`,
											});
											return (
												p.push(this.q.createModelReference(s)),
												`<div id="snippet-${s.fragment}" class="walkThroughEditorContainer" ></div>`
											);
										}),
										(g = (0, E.marked)(g, { async: !1, renderer: f })),
										Promise.all(p).then((b) => new h(g, b))
									);
								})),
							this.a
						);
					}
					matches(g) {
						return super.matches(g)
							? !0
							: g instanceof a
								? (0, C.$gh)(g.m.resource, this.m.resource)
								: !1;
					}
					dispose() {
						this.a && (this.a.then((g) => g.dispose()), (this.a = null)),
							super.dispose();
					}
					relativeScrollPosition(g, p) {
						(this.c = Math.max(this.c, g)), (this.h = Math.max(this.h, p));
					}
				});
				(e.$oYc = c), (e.$oYc = c = a = Ne([j(1, r.$Li), j(2, w.$MO)], c));
			},
		),
		