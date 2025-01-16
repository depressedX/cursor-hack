define(de[1877], he([1, 0, 4, 175, 701]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Jyc = void 0),
				(t = mt(t)),
				(e.$Jyc = i.$n2.registerExtensionPoint({
					extensionPoint: "grammars",
					deps: [w.$qYb],
					jsonSchema: {
						description: t.localize(12689, null),
						type: "array",
						defaultSnippets: [
							{
								body: [
									{
										language: "${1:id}",
										scopeName: "source.${2:id}",
										path: "./syntaxes/${3:id}.tmLanguage.",
									},
								],
							},
						],
						items: {
							type: "object",
							defaultSnippets: [
								{
									body: {
										language: "${1:id}",
										scopeName: "source.${2:id}",
										path: "./syntaxes/${3:id}.tmLanguage.",
									},
								},
							],
							properties: {
								language: {
									description: t.localize(12690, null),
									type: "string",
								},
								scopeName: {
									description: t.localize(12691, null),
									type: "string",
								},
								path: { description: t.localize(12692, null), type: "string" },
								embeddedLanguages: {
									description: t.localize(12693, null),
									type: "object",
								},
								tokenTypes: {
									description: t.localize(12694, null),
									type: "object",
									additionalProperties: {
										enum: ["string", "comment", "other"],
									},
								},
								injectTo: {
									description: t.localize(12695, null),
									type: "array",
									items: { type: "string" },
								},
								balancedBracketScopes: {
									description: t.localize(12696, null),
									type: "array",
									items: { type: "string" },
									default: ["*"],
								},
								unbalancedBracketScopes: {
									description: t.localize(12697, null),
									type: "array",
									items: { type: "string" },
									default: [],
								},
							},
							required: ["scopeName", "path"],
						},
					},
				}));
		}),
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
		define(
			de[3672],
			he([1, 0, 4, 3671, 46, 71, 27, 8, 43, 11]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				class u extends i.$IXc {
					constructor() {
						super({
							id: "editor.emmet.action.expandAbbreviation",
							label: t.localize(5995, null),
							alias: "Emmet: Expand Abbreviation",
							precondition: E.EditorContextKeys.writable,
							actionName: "expand_abbreviation",
							kbOpts: {
								primary: C.KeyCode.Tab,
								kbExpr: d.$Kj.and(
									E.EditorContextKeys.editorTextFocus,
									E.EditorContextKeys.tabDoesNotMoveFocus,
									d.$Kj.has("config.emmet.triggerExpansionOnTab"),
								),
								weight: m.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: r.$XX.MenubarEditMenu,
								group: "5_insert",
								title: t.localize(5996, null),
								order: 3,
							},
						});
					}
				}
				(0, w.$ntb)(u);
			},
		),
		