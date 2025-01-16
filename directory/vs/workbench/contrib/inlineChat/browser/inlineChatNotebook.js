define(
			de[4102],
			he([1, 0, 29, 3, 23, 19, 427, 798, 293, 70, 18, 1361, 1320]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jJc = void 0);
				let c = class {
					constructor(g, p, o) {
						(this.a = new i.$Zc()),
							this.a.add(
								g.registerSessionKeyComputer(w.Schemas.vscodeNotebookCell, {
									getComparisonKey: (f, b) => {
										const s = r.CellUri.parse(b);
										if (!s) throw (0, t.$_)("Expected notebook cell uri");
										let l;
										for (const $ of o.listNotebookEditors())
											if (
												$.hasModel() &&
												(0, E.$gh)($.textModel.uri, s.notebook)
											) {
												const v = `<notebook>${$.getId()}#${b}`;
												if (
													(l || (l = v), $.codeEditors.find((S) => S[1] === f))
												)
													return v;
											}
										if (l) return l;
										const y = p.activeEditorPane;
										if (
											y &&
											(y.getId() === a.$kFc.ID || y.getId() === h.$JGc.ID)
										)
											return `<notebook>${f.getId()}#${b}`;
										throw (0, t.$_)("Expected notebook editor");
									},
								}),
							),
							this.a.add(
								g.onWillStartSession((f) => {
									const b = r.CellUri.parse(f.getModel().uri);
									if (b) {
										for (const s of o.listNotebookEditors())
											if ((0, E.$gh)(s.textModel?.uri, b.notebook)) {
												let l = !1;
												const y = [];
												for (const [, $] of s.codeEditors)
													y.push($), (l = $ === f || l);
												if (l) {
													for (const $ of y)
														$ !== f && C.$Z1b.get($)?.finishExistingSession();
													break;
												}
											}
									}
								}),
							);
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$jJc = c),
					(e.$jJc = c = Ne([j(0, d.$zLb), j(1, u.$IY), j(2, m.$n5b)], c));
			},
		),
		