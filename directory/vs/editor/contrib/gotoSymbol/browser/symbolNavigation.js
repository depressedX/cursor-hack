define(
			de[2809],
			he([1, 0, 6, 27, 3, 19, 46, 65, 17, 4, 8, 116, 20, 5, 39, 43, 40]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$GOb = e.$FOb = void 0),
					(e.$FOb = new u.$5j("hasSymbols", !1, (0, r.localize)(1162, null))),
					(e.$GOb = (0, c.$Mi)("ISymbolNavigationService"));
				let o = class {
					constructor(s, l, y, $) {
						(this.g = l),
							(this.h = y),
							(this.i = $),
							(this.b = void 0),
							(this.c = -1),
							(this.f = !1),
							(this.a = e.$FOb.bindTo(s));
					}
					reset() {
						this.a.reset(),
							this.d?.dispose(),
							this.e?.dispose(),
							(this.b = void 0),
							(this.c = -1);
					}
					put(s) {
						const l = s.parent.parent;
						if (l.references.length <= 1) {
							this.reset();
							return;
						}
						(this.b = l),
							(this.c = l.references.indexOf(s)),
							this.a.set(!0),
							this.j();
						const y = new f(this.g),
							$ = y.onDidChange((v) => {
								if (this.f) return;
								const S = this.g.getActiveCodeEditor();
								if (!S) return;
								const I = S.getModel(),
									T = S.getPosition();
								if (!I || !T) return;
								let P = !1,
									k = !1;
								for (const L of l.references)
									if ((0, E.$gh)(L.uri, I.uri))
										(P = !0), (k = k || m.$iL.containsPosition(L.range, T));
									else if (P) break;
								(!P || !k) && this.reset();
							});
						this.d = (0, w.$Xc)(y, $);
					}
					revealNext(s) {
						if (!this.b) return Promise.resolve();
						(this.c += 1), (this.c %= this.b.references.length);
						const l = this.b.references[this.c];
						return (
							this.j(),
							(this.f = !0),
							this.g
								.openCodeEditor(
									{
										resource: l.uri,
										options: {
											selection: m.$iL.collapseToStart(l.range),
											selectionRevealType:
												a.TextEditorSelectionRevealType
													.NearTopIfOutsideViewport,
										},
									},
									s,
								)
								.finally(() => {
									this.f = !1;
								})
						);
					}
					j() {
						this.e?.dispose();
						const s = this.i.lookupKeybinding(
								"editor.gotoNextSymbolFromResult",
							),
							l = s
								? (0, r.localize)(
										1163,
										null,
										this.c + 1,
										this.b.references.length,
										s.getLabel(),
									)
								: (0, r.localize)(
										1164,
										null,
										this.c + 1,
										this.b.references.length,
									);
						this.e = this.h.status(l);
					}
				};
				(o = Ne([j(0, u.$6j), j(1, d.$dtb), j(2, p.$4N), j(3, n.$uZ)], o)),
					(0, h.$lK)(e.$GOb, o, h.InstantiationType.Delayed),
					(0, C.$mtb)(
						new (class extends C.$htb {
							constructor() {
								super({
									id: "editor.gotoNextSymbolFromResult",
									precondition: e.$FOb,
									kbOpts: {
										weight: g.KeybindingWeight.EditorContrib,
										primary: i.KeyCode.F12,
									},
								});
							}
							runEditorCommand(b, s) {
								return b.get(e.$GOb).revealNext(s);
							}
						})(),
					),
					g.$TX.registerCommandAndKeybindingRule({
						id: "editor.gotoNextSymbolFromResult.cancel",
						weight: g.KeybindingWeight.EditorContrib,
						when: e.$FOb,
						primary: i.KeyCode.Escape,
						handler(b) {
							b.get(e.$GOb).reset();
						},
					});
				let f = class {
					constructor(s) {
						(this.a = new Map()),
							(this.b = new w.$Zc()),
							(this.c = new t.$re()),
							(this.onDidChange = this.c.event),
							this.b.add(s.onCodeEditorRemove(this.e, this)),
							this.b.add(s.onCodeEditorAdd(this.d, this)),
							s.listCodeEditors().forEach(this.d, this);
					}
					dispose() {
						this.b.dispose(), this.c.dispose(), (0, w.$Vc)(this.a.values());
					}
					d(s) {
						this.a.set(
							s,
							(0, w.$Xc)(
								s.onDidChangeCursorPosition((l) => this.c.fire({ editor: s })),
								s.onDidChangeModelContent((l) => this.c.fire({ editor: s })),
							),
						);
					}
					e(s) {
						this.a.get(s)?.dispose(), this.a.delete(s);
					}
				};
				f = Ne([j(0, d.$dtb)], f);
			},
		),
		