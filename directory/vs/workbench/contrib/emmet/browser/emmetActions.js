define(
			de[3671],
			he([1, 0, 46, 1877, 53, 31]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IXc = void 0);
				class C {
					static {
						this.a = {};
					}
					constructor(r) {
						Object.keys(C.a).length || this.b(r);
					}
					b(r) {
						r.forEach((u) => {
							u.value.forEach((a) => {
								a.language && a.scopeName && (C.a[a.language] = a.scopeName);
							});
						});
					}
					getGrammar(r) {
						return C.a[r];
					}
				}
				class d extends t.$itb {
					constructor(r) {
						super(r), (this.h = null), (this.j = null), (this.d = r.actionName);
					}
					static {
						this.e = [
							"html",
							"css",
							"xml",
							"xsl",
							"haml",
							"jade",
							"jsx",
							"slim",
							"scss",
							"sass",
							"less",
							"stylus",
							"styl",
							"svg",
						];
					}
					k(r) {
						return (
							this.j !== r &&
								((this.j = r),
								(this.h = r
									.readExtensionPointContributions(i.$Jyc)
									.then((u) => new C(u)))),
							this.h || Promise.resolve(null)
						);
					}
					run(r, u) {
						const a = r.get(w.$q2),
							h = r.get(E.$ek);
						return this.k(a).then((c) => {
							if (this.id === "editor.emmet.action.expandAbbreviation" && c)
								return h.executeCommand(
									"emmet.expandAbbreviation",
									d.getLanguage(u, c),
								);
						});
					}
					static getLanguage(r, u) {
						const a = r.getModel(),
							h = r.getSelection();
						if (!a || !h) return null;
						const c = h.getStartPosition();
						a.tokenization.tokenizeIfCheap(c.lineNumber);
						const g = a
							.getLanguageIdAtPosition(c.lineNumber, c.column)
							.split(".")
							.pop();
						return g
							? {
									language: g,
									parentMode: (() => {
										const o = u.getGrammar(g);
										if (!o) return g;
										const f = o.split(".");
										if (f.length < 2) return g;
										for (let b = 1; b < f.length; b++) {
											const s = f[f.length - b];
											if (this.e.indexOf(s) !== -1) return s;
										}
										return g;
									})(),
								}
							: null;
					}
				}
				e.$IXc = d;
			},
		),
		