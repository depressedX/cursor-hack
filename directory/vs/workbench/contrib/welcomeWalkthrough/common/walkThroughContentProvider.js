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
		