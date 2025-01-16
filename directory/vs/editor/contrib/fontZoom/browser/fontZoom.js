define(de[2808], he([1, 0, 46, 909, 4]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
			class E extends t.$itb {
				constructor() {
					super({
						id: "editor.action.fontZoomIn",
						label: w.localize(1075, null),
						alias: "Increase Editor Font Size",
						precondition: void 0,
					});
				}
				run(r, u) {
					i.EditorZoom.setZoomLevel(i.EditorZoom.getZoomLevel() + 1);
				}
			}
			class C extends t.$itb {
				constructor() {
					super({
						id: "editor.action.fontZoomOut",
						label: w.localize(1076, null),
						alias: "Decrease Editor Font Size",
						precondition: void 0,
					});
				}
				run(r, u) {
					i.EditorZoom.setZoomLevel(i.EditorZoom.getZoomLevel() - 1);
				}
			}
			class d extends t.$itb {
				constructor() {
					super({
						id: "editor.action.fontZoomReset",
						label: w.localize(1077, null),
						alias: "Reset Editor Font Size",
						precondition: void 0,
					});
				}
				run(r, u) {
					i.EditorZoom.setZoomLevel(0);
				}
			}
			(0, t.$ntb)(E), (0, t.$ntb)(C), (0, t.$ntb)(d);
		}),
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
		define(
			de[1643],
			he([1, 0, 15, 33, 29, 46, 69]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZDb = void 0),
					(e.$1Db = r),
					(e.$2Db = u);
				class d {
					constructor(c, n, g) {
						(this.provider = c), (this.hover = n), (this.ordinal = g);
					}
				}
				e.$ZDb = d;
				async function m(h, c, n, g, p) {
					const o = await Promise.resolve(h.provideHover(n, g, p)).catch(w.$5);
					if (!(!o || !a(o))) return new d(h, o, c);
				}
				function r(h, c, n, g, p = !1) {
					const f = h.ordered(c, p).map((b, s) => m(b, s, c, n, g));
					return t.$ai.fromPromises(f).coalesce();
				}
				function u(h, c, n, g, p = !1) {
					return r(h, c, n, g, p)
						.map((o) => o.hover)
						.toPromise();
				}
				(0, E.$ltb)("_executeHoverProvider", (h, c, n) => {
					const g = h.get(C.$k3);
					return u(g.hoverProvider, c, n, i.CancellationToken.None);
				}),
					(0, E.$ltb)("_executeHoverProvider_recursive", (h, c, n) => {
						const g = h.get(C.$k3);
						return u(g.hoverProvider, c, n, i.CancellationToken.None, !0);
					});
				function a(h) {
					const c = typeof h.range < "u",
						n = typeof h.contents < "u" && h.contents && h.contents.length > 0;
					return c && n;
				}
			},
		),
		define(
			de[1644],
			he([
				1, 0, 3, 37, 46, 771, 38, 17, 71, 171, 152, 912, 67, 1553, 4, 63, 1184,
				2776, 388,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mic =
						e.$Lic =
						e.$Kic =
						e.$Jic =
						e.$Iic =
						e.$Hic =
						e.$Gic =
						e.$Fic =
						e.$Eic =
						e.$Dic =
						e.$Cic =
						e.$Bic =
						e.$Aic =
							void 0),
					(i = mt(i)),
					(c = mt(c)),
					(n = mt(n));
				class b extends w.$itb {
					static {
						this.ID = "editor.action.indentationToSpaces";
					}
					constructor() {
						super({
							id: b.ID,
							label: n.localize(1209, null),
							alias: "Convert Indentation to Spaces",
							precondition: m.EditorContextKeys.writable,
							metadata: {
								description: n.localize2(
									1221,
									"Convert the tab indentation to spaces.",
								),
							},
						});
					}
					run(R, O) {
						const B = O.getModel();
						if (!B) return;
						const U = B.getOptions(),
							z = O.getSelection();
						if (!z) return;
						const F = new M(z, U.tabSize);
						O.pushUndoStop(),
							O.executeCommands(this.id, [F]),
							O.pushUndoStop(),
							B.updateOptions({ insertSpaces: !0 });
					}
				}
				e.$Aic = b;
				class s extends w.$itb {
					static {
						this.ID = "editor.action.indentationToTabs";
					}
					constructor() {
						super({
							id: s.ID,
							label: n.localize(1210, null),
							alias: "Convert Indentation to Tabs",
							precondition: m.EditorContextKeys.writable,
							metadata: {
								description: n.localize2(
									1222,
									"Convert the spaces indentation to tabs.",
								),
							},
						});
					}
					run(R, O) {
						const B = O.getModel();
						if (!B) return;
						const U = B.getOptions(),
							z = O.getSelection();
						if (!z) return;
						const F = new N(z, U.tabSize);
						O.pushUndoStop(),
							O.executeCommands(this.id, [F]),
							O.pushUndoStop(),
							B.updateOptions({ insertSpaces: !1 });
					}
				}
				e.$Bic = s;
				class l extends w.$itb {
					constructor(R, O, B) {
						super(B), (this.d = R), (this.e = O);
					}
					run(R, O) {
						const B = R.get(g.$DJ),
							U = R.get(h.$QO),
							z = O.getModel();
						if (!z) return;
						const F = U.getCreationOptions(
								z.getLanguageId(),
								z.uri,
								z.isForSimpleWidget,
							),
							x = z.getOptions(),
							H = [1, 2, 3, 4, 5, 6, 7, 8].map((V) => ({
								id: V.toString(),
								label: V.toString(),
								description:
									V === F.tabSize && V === x.tabSize
										? n.localize(1211, null)
										: V === F.tabSize
											? n.localize(1212, null)
											: V === x.tabSize
												? n.localize(1213, null)
												: void 0,
							})),
							q = Math.min(z.getOptions().tabSize - 1, 7);
						setTimeout(() => {
							B.pick(H, {
								placeHolder: n.localize(1214, null),
								activeItem: H[q],
							}).then((V) => {
								if (V && z && !z.isDisposed()) {
									const G = parseInt(V.label, 10);
									this.e
										? z.updateOptions({ tabSize: G })
										: z.updateOptions({
												tabSize: G,
												indentSize: G,
												insertSpaces: this.d,
											});
								}
							});
						}, 50);
					}
				}
				e.$Cic = l;
				class y extends l {
					static {
						this.ID = "editor.action.indentUsingTabs";
					}
					constructor() {
						super(!1, !1, {
							id: y.ID,
							label: n.localize(1215, null),
							alias: "Indent Using Tabs",
							precondition: void 0,
							metadata: {
								description: n.localize2(1223, "Use indentation with tabs."),
							},
						});
					}
				}
				e.$Dic = y;
				class $ extends l {
					static {
						this.ID = "editor.action.indentUsingSpaces";
					}
					constructor() {
						super(!0, !1, {
							id: $.ID,
							label: n.localize(1216, null),
							alias: "Indent Using Spaces",
							precondition: void 0,
							metadata: {
								description: n.localize2(1224, "Use indentation with spaces."),
							},
						});
					}
				}
				e.$Eic = $;
				class v extends l {
					static {
						this.ID = "editor.action.changeTabDisplaySize";
					}
					constructor() {
						super(!0, !0, {
							id: v.ID,
							label: n.localize(1217, null),
							alias: "Change Tab Display Size",
							precondition: void 0,
							metadata: {
								description: n.localize2(
									1225,
									"Change the space size equivalent of the tab.",
								),
							},
						});
					}
				}
				e.$Fic = v;
				class S extends w.$itb {
					static {
						this.ID = "editor.action.detectIndentation";
					}
					constructor() {
						super({
							id: S.ID,
							label: n.localize(1218, null),
							alias: "Detect Indentation from Content",
							precondition: void 0,
							metadata: {
								description: n.localize2(
									1226,
									"Detect the indentation from content.",
								),
							},
						});
					}
					run(R, O) {
						const B = R.get(h.$QO),
							U = O.getModel();
						if (!U) return;
						const z = B.getCreationOptions(
							U.getLanguageId(),
							U.uri,
							U.isForSimpleWidget,
						);
						U.detectIndentation(z.insertSpaces, z.tabSize);
					}
				}
				e.$Gic = S;
				class I extends w.$itb {
					constructor() {
						super({
							id: "editor.action.reindentlines",
							label: n.localize(1219, null),
							alias: "Reindent Lines",
							precondition: m.EditorContextKeys.writable,
							metadata: {
								description: n.localize2(
									1227,
									"Reindent the lines of the editor.",
								),
							},
						});
					}
					run(R, O) {
						const B = R.get(u.$aN),
							U = O.getModel();
						if (!U) return;
						const z = (0, o.$zic)(U, B, 1, U.getLineCount());
						z.length > 0 &&
							(O.pushUndoStop(), O.executeEdits(this.id, z), O.pushUndoStop());
					}
				}
				e.$Hic = I;
				class T extends w.$itb {
					constructor() {
						super({
							id: "editor.action.reindentselectedlines",
							label: n.localize(1220, null),
							alias: "Reindent Selected Lines",
							precondition: m.EditorContextKeys.writable,
							metadata: {
								description: n.localize2(
									1228,
									"Reindent the selected lines of the editor.",
								),
							},
						});
					}
					run(R, O) {
						const B = R.get(u.$aN),
							U = O.getModel();
						if (!U) return;
						const z = O.getSelections();
						if (z === null) return;
						const F = [];
						for (const x of z) {
							let H = x.startLineNumber,
								q = x.endLineNumber;
							if ((H !== q && x.endColumn === 1 && q--, H === 1)) {
								if (H === q) continue;
							} else H--;
							const V = (0, o.$zic)(U, B, H, q);
							F.push(...V);
						}
						F.length > 0 &&
							(O.pushUndoStop(), O.executeEdits(this.id, F), O.pushUndoStop());
					}
				}
				e.$Iic = T;
				class P {
					constructor(R, O) {
						(this.b = O), (this.a = []), (this.c = null);
						for (const B of R)
							B.range && typeof B.text == "string" && this.a.push(B);
					}
					getEditOperations(R, O) {
						for (const U of this.a)
							O.addEditOperation(d.$iL.lift(U.range), U.text);
						let B = !1;
						Array.isArray(this.a) &&
							this.a.length === 1 &&
							this.b.isEmpty() &&
							(this.a[0].range.startColumn === this.b.endColumn &&
							this.a[0].range.startLineNumber === this.b.endLineNumber
								? ((B = !0), (this.c = O.trackSelection(this.b, !0)))
								: this.a[0].range.endColumn === this.b.startColumn &&
									this.a[0].range.endLineNumber === this.b.startLineNumber &&
									((B = !0), (this.c = O.trackSelection(this.b, !1)))),
							B || (this.c = O.trackSelection(this.b));
					}
					computeCursorState(R, O) {
						return O.getTrackedSelection(this.c);
					}
				}
				e.$Jic = P;
				let k = class {
					static {
						this.ID = "editor.contrib.autoIndentOnPaste";
					}
					constructor(R, O) {
						(this.c = R),
							(this.d = O),
							(this.a = new t.$Zc()),
							(this.b = new t.$Zc()),
							this.a.add(R.onDidChangeConfiguration(() => this.e())),
							this.a.add(R.onDidChangeModel(() => this.e())),
							this.a.add(R.onDidChangeModelLanguage(() => this.e()));
					}
					e() {
						this.b.clear(),
							!(
								this.c.getOption(C.EditorOption.autoIndent) <
									C.EditorAutoIndentStrategy.Full ||
								this.c.getOption(C.EditorOption.formatOnPaste)
							) &&
								this.c.hasModel() &&
								this.b.add(
									this.c.onDidPaste(({ range: R }) => {
										this.trigger(R);
									}),
								);
					}
					trigger(R) {
						const O = this.c.getSelections();
						if (O === null || O.length > 1) return;
						const B = this.c.getModel();
						if (
							!B ||
							this.f(B, R) ||
							L(B, R) ||
							!B.tokenization.isCheapToTokenize(R.getStartPosition().lineNumber)
						)
							return;
						const z = this.c.getOption(C.EditorOption.autoIndent),
							{ tabSize: F, indentSize: x, insertSpaces: H } = B.getOptions(),
							q = [],
							V = {
								shiftIndent: (W) =>
									E.$Rtb.shiftIndent(W, W.length + 1, F, x, H),
								unshiftIndent: (W) =>
									E.$Rtb.unshiftIndent(W, W.length + 1, F, x, H),
							};
						let G = R.startLineNumber;
						for (; G <= R.endLineNumber; ) {
							if (this.g(B, G)) {
								G++;
								continue;
							}
							break;
						}
						if (G > R.endLineNumber) return;
						let K = B.getLineContent(G);
						if (!/\S/.test(K.substring(0, R.startColumn - 1))) {
							const W = (0, p.$Jtb)(z, B, B.getLanguageId(), G, V, this.d);
							if (W !== null) {
								const X = i.$Cf(K),
									Y = c.$xic(W, F),
									ie = c.$xic(X, F);
								if (Y !== ie) {
									const ne = c.$yic(Y, F, H);
									q.push({ range: new d.$iL(G, 1, G, X.length + 1), text: ne }),
										(K = ne + K.substring(X.length));
								} else {
									const ne = (0, p.$Mtb)(B, G, this.d);
									if (ne === 0 || ne === a.IndentConsts.UNINDENT_MASK) return;
								}
							}
						}
						const J = G;
						for (; G < R.endLineNumber; ) {
							if (!/\S/.test(B.getLineContent(G + 1))) {
								G++;
								continue;
							}
							break;
						}
						if (G !== R.endLineNumber) {
							const W = {
									tokenization: {
										getLineTokens: (Y) => B.tokenization.getLineTokens(Y),
										getLanguageId: () => B.getLanguageId(),
										getLanguageIdAtPosition: (Y, ie) =>
											B.getLanguageIdAtPosition(Y, ie),
									},
									getLineContent: (Y) => (Y === J ? K : B.getLineContent(Y)),
								},
								X = (0, p.$Jtb)(z, W, B.getLanguageId(), G + 1, V, this.d);
							if (X !== null) {
								const Y = c.$xic(X, F),
									ie = c.$xic(i.$Cf(B.getLineContent(G + 1)), F);
								if (Y !== ie) {
									const ne = Y - ie;
									for (let ee = G + 1; ee <= R.endLineNumber; ee++) {
										const _ = B.getLineContent(ee),
											te = i.$Cf(_),
											Z = c.$xic(te, F) + ne,
											se = c.$yic(Z, F, H);
										se !== te &&
											q.push({
												range: new d.$iL(ee, 1, ee, te.length + 1),
												text: se,
											});
									}
								}
							}
						}
						if (q.length > 0) {
							this.c.pushUndoStop();
							const W = new P(q, this.c.getSelection());
							this.c.executeCommand("autoIndentOnPaste", W),
								this.c.pushUndoStop();
						}
					}
					f(R, O) {
						const B = (z) => z.trim().length === 0;
						let U = !0;
						if (O.startLineNumber === O.endLineNumber) {
							const F = R.getLineContent(O.startLineNumber).substring(
								O.startColumn - 1,
								O.endColumn - 1,
							);
							U = B(F);
						} else
							for (let z = O.startLineNumber; z <= O.endLineNumber; z++) {
								const F = R.getLineContent(z);
								if (z === O.startLineNumber) {
									const x = F.substring(O.startColumn - 1);
									U = B(x);
								} else if (z === O.endLineNumber) {
									const x = F.substring(0, O.endColumn - 1);
									U = B(x);
								} else U = R.getLineFirstNonWhitespaceColumn(z) === 0;
								if (!U) break;
							}
						return U;
					}
					g(R, O) {
						R.tokenization.forceTokenization(O);
						const B = R.getLineFirstNonWhitespaceColumn(O);
						if (B === 0) return !0;
						const U = R.tokenization.getLineTokens(O);
						if (U.getCount() > 0) {
							const z = U.findTokenIndexAtOffset(B);
							if (
								z >= 0 &&
								U.getStandardTokenType(z) === r.StandardTokenType.Comment
							)
								return !0;
						}
						return !1;
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
				};
				(e.$Kic = k), (e.$Kic = k = Ne([j(1, u.$aN)], k));
				function L(A, R) {
					const O = (B) => (0, f.$8L)(A, B) === r.StandardTokenType.String;
					return O(R.getStartPosition()) || O(R.getEndPosition());
				}
				function D(A, R, O, B) {
					if (A.getLineCount() === 1 && A.getLineMaxColumn(1) === 1) return;
					let U = "";
					for (let F = 0; F < O; F++) U += " ";
					const z = new RegExp(U, "gi");
					for (let F = 1, x = A.getLineCount(); F <= x; F++) {
						let H = A.getLineFirstNonWhitespaceColumn(F);
						if ((H === 0 && (H = A.getLineMaxColumn(F)), H === 1)) continue;
						const q = new d.$iL(F, 1, F, H),
							V = A.getValueInRange(q),
							G = B ? V.replace(/\t/gi, U) : V.replace(z, "	");
						R.addEditOperation(q, G);
					}
				}
				class M {
					constructor(R, O) {
						(this.b = R), (this.c = O), (this.a = null);
					}
					getEditOperations(R, O) {
						(this.a = O.trackSelection(this.b)), D(R, O, this.c, !0);
					}
					computeCursorState(R, O) {
						return O.getTrackedSelection(this.a);
					}
				}
				e.$Lic = M;
				class N {
					constructor(R, O) {
						(this.b = R), (this.c = O), (this.a = null);
					}
					getEditOperations(R, O) {
						(this.a = O.trackSelection(this.b)), D(R, O, this.c, !1);
					}
					computeCursorState(R, O) {
						return O.getTrackedSelection(this.a);
					}
				}
				(e.$Mic = N),
					(0, w.$qtb)(
						k.ID,
						k,
						w.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, w.$ntb)(b),
					(0, w.$ntb)(s),
					(0, w.$ntb)(y),
					(0, w.$ntb)($),
					(0, w.$ntb)(v),
					(0, w.$ntb)(S),
					(0, w.$ntb)(I),
					(0, w.$ntb)(T);
			},
		),
		define(
			de[2810],
			he([1, 0, 27, 46, 248, 1193, 71, 4, 43]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Oic = void 0),
					(d = mt(d));
				class r extends i.$itb {
					constructor() {
						super({
							id: "expandLineSelection",
							label: d.localize(1271, null),
							alias: "Expand Line Selection",
							precondition: void 0,
							kbOpts: {
								weight: m.KeybindingWeight.EditorCore,
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Alt | t.KeyCode.KeyL,
							},
						});
					}
					run(a, h, c) {
						if (((c = c || {}), !h.hasModel())) return;
						const n = h._getViewModel();
						n.model.pushStackElement(),
							n.setCursorStates(
								c.source,
								w.CursorChangeReason.Explicit,
								E.$Htb.expandLineSelection(n, n.getCursorStates()),
							),
							n.revealAllCursors(c.source, !0);
					}
				}
				(e.$Oic = r), (0, i.$ntb)(r);
			},
		),
		define(
			de[1645],
			he([
				1, 0, 27, 498, 46, 655, 1148, 38, 949, 948, 188, 48, 17, 104, 71, 2588,
				2778, 2589, 4, 11, 43, 152, 10,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ejc =
						e.$djc =
						e.$cjc =
						e.$bjc =
						e.$ajc =
						e.$_ic =
						e.$$ic =
						e.$0ic =
						e.$9ic =
						e.$8ic =
						e.$7ic =
						e.$6ic =
						e.$5ic =
						e.$4ic =
						e.$3ic =
						e.$2ic =
						e.$1ic =
						e.$Zic =
						e.$Yic =
						e.$Xic =
						e.$Wic =
						e.$Vic =
						e.$Uic =
							void 0),
					(f = mt(f));
				class $ extends w.$itb {
					constructor(te, Q) {
						super(Q), (this.d = te);
					}
					run(te, Q) {
						if (!Q.hasModel()) return;
						const Z = Q.getSelections().map((le, oe) => ({
							selection: le,
							index: oe,
							ignore: !1,
						}));
						Z.sort((le, oe) =>
							h.$iL.compareRangesUsingStarts(le.selection, oe.selection),
						);
						let se = Z[0];
						for (let le = 1; le < Z.length; le++) {
							const oe = Z[le];
							se.selection.endLineNumber === oe.selection.startLineNumber &&
								(se.index < oe.index
									? (oe.ignore = !0)
									: ((se.ignore = !0), (se = oe)));
						}
						const re = [];
						for (const le of Z)
							re.push(new g.$Ric(le.selection, this.d, le.ignore));
						Q.pushUndoStop(), Q.executeCommands(this.id, re), Q.pushUndoStop();
					}
				}
				class v extends $ {
					constructor() {
						super(!1, {
							id: "editor.action.copyLinesUpAction",
							label: f.localize(1272, null),
							alias: "Copy Line Up",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.UpArrow,
								linux: {
									primary:
										t.KeyMod.CtrlCmd |
										t.KeyMod.Alt |
										t.KeyMod.Shift |
										t.KeyCode.UpArrow,
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: b.$XX.MenubarSelectionMenu,
								group: "2_line",
								title: f.localize(1273, null),
								order: 1,
							},
						});
					}
				}
				class S extends $ {
					constructor() {
						super(!0, {
							id: "editor.action.copyLinesDownAction",
							label: f.localize(1274, null),
							alias: "Copy Line Down",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.DownArrow,
								linux: {
									primary:
										t.KeyMod.CtrlCmd |
										t.KeyMod.Alt |
										t.KeyMod.Shift |
										t.KeyCode.DownArrow,
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: b.$XX.MenubarSelectionMenu,
								group: "2_line",
								title: f.localize(1275, null),
								order: 2,
							},
						});
					}
				}
				class I extends w.$itb {
					constructor() {
						super({
							id: "editor.action.duplicateSelection",
							label: f.localize(1276, null),
							alias: "Duplicate Selection",
							precondition: n.EditorContextKeys.writable,
							menuOpts: {
								menuId: b.$XX.MenubarSelectionMenu,
								group: "2_line",
								title: f.localize(1277, null),
								order: 5,
							},
						});
					}
					run(te, Q, Z) {
						if (!Q.hasModel()) return;
						const se = [],
							re = Q.getSelections(),
							le = Q.getModel();
						for (const oe of re)
							if (oe.isEmpty()) se.push(new g.$Ric(oe, !0));
							else {
								const ae = new c.$kL(
									oe.endLineNumber,
									oe.endColumn,
									oe.endLineNumber,
									oe.endColumn,
								);
								se.push(new E.$xtb(ae, le.getValueInRange(oe)));
							}
						Q.pushUndoStop(), Q.executeCommands(this.id, se), Q.pushUndoStop();
					}
				}
				e.$Uic = I;
				class T extends w.$itb {
					constructor(te, Q) {
						super(Q), (this.d = te);
					}
					run(te, Q) {
						const Z = te.get(l.$aN),
							se = [],
							re = Q.getSelections() || [],
							le = Q.getOption(d.EditorOption.autoIndent);
						for (const oe of re) se.push(new p.$Sic(oe, this.d, le, Z));
						Q.pushUndoStop(), Q.executeCommands(this.id, se), Q.pushUndoStop();
					}
				}
				class P extends T {
					constructor() {
						super(!1, {
							id: "editor.action.moveLinesUpAction",
							label: f.localize(1278, null),
							alias: "Move Line Up",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.Alt | t.KeyCode.UpArrow,
								linux: { primary: t.KeyMod.Alt | t.KeyCode.UpArrow },
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: b.$XX.MenubarSelectionMenu,
								group: "2_line",
								title: f.localize(1279, null),
								order: 3,
							},
						});
					}
				}
				class k extends T {
					constructor() {
						super(!0, {
							id: "editor.action.moveLinesDownAction",
							label: f.localize(1280, null),
							alias: "Move Line Down",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.Alt | t.KeyCode.DownArrow,
								linux: { primary: t.KeyMod.Alt | t.KeyCode.DownArrow },
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: b.$XX.MenubarSelectionMenu,
								group: "2_line",
								title: f.localize(1281, null),
								order: 4,
							},
						});
					}
				}
				class L extends w.$itb {
					constructor(te, Q) {
						super(Q), (this.d = te);
					}
					run(te, Q) {
						if (!Q.hasModel()) return;
						const Z = Q.getModel();
						let se = Q.getSelections();
						se.length === 1 &&
							se[0].isEmpty() &&
							(se = [
								new c.$kL(
									1,
									1,
									Z.getLineCount(),
									Z.getLineMaxColumn(Z.getLineCount()),
								),
							]);
						for (const le of se)
							if (!o.$Tic.canRun(Q.getModel(), le, this.d)) return;
						const re = [];
						for (let le = 0, oe = se.length; le < oe; le++)
							re[le] = new o.$Tic(se[le], this.d);
						Q.pushUndoStop(), Q.executeCommands(this.id, re), Q.pushUndoStop();
					}
				}
				e.$Vic = L;
				class D extends L {
					constructor() {
						super(!1, {
							id: "editor.action.sortLinesAscending",
							label: f.localize(1282, null),
							alias: "Sort Lines Ascending",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$Wic = D;
				class M extends L {
					constructor() {
						super(!0, {
							id: "editor.action.sortLinesDescending",
							label: f.localize(1283, null),
							alias: "Sort Lines Descending",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$Xic = M;
				class N extends w.$itb {
					constructor() {
						super({
							id: "editor.action.removeDuplicateLines",
							label: f.localize(1284, null),
							alias: "Delete Duplicate Lines",
							precondition: n.EditorContextKeys.writable,
						});
					}
					run(te, Q) {
						if (!Q.hasModel()) return;
						const Z = Q.getModel();
						if (Z.getLineCount() === 1 && Z.getLineMaxColumn(1) === 1) return;
						const se = [],
							re = [];
						let le = 0,
							oe = !0,
							ae = Q.getSelections();
						ae.length === 1 &&
							ae[0].isEmpty() &&
							((ae = [
								new c.$kL(
									1,
									1,
									Z.getLineCount(),
									Z.getLineMaxColumn(Z.getLineCount()),
								),
							]),
							(oe = !1));
						for (const pe of ae) {
							const $e = new Set(),
								ye = [];
							for (let ve = pe.startLineNumber; ve <= pe.endLineNumber; ve++) {
								const ge = Z.getLineContent(ve);
								$e.has(ge) || (ye.push(ge), $e.add(ge));
							}
							const ue = new c.$kL(
									pe.startLineNumber,
									1,
									pe.endLineNumber,
									Z.getLineMaxColumn(pe.endLineNumber),
								),
								fe = pe.startLineNumber - le,
								me = new c.$kL(
									fe,
									1,
									fe + ye.length - 1,
									ye[ye.length - 1].length,
								);
							se.push(
								u.$jL.replace(
									ue,
									ye.join(`
`),
								),
							),
								re.push(me),
								(le += pe.endLineNumber - pe.startLineNumber + 1 - ye.length);
						}
						Q.pushUndoStop(),
							Q.executeEdits(this.id, se, oe ? re : void 0),
							Q.pushUndoStop();
					}
				}
				e.$Yic = N;
				class A extends w.$itb {
					static {
						this.ID = "editor.action.trimTrailingWhitespace";
					}
					constructor() {
						super({
							id: A.ID,
							label: f.localize(1285, null),
							alias: "Trim Trailing Whitespace",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyX),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyX),
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q, Z) {
						let se = [];
						Z.reason === "auto-save" &&
							(se = (Q.getSelections() || []).map(
								($e) => new a.$hL($e.positionLineNumber, $e.positionColumn),
							));
						const re = Q.getSelection();
						if (re === null) return;
						const le = te.get(y.$gj),
							oe = Q.getModel(),
							ae = le.getValue(
								"files.trimTrailingWhitespaceInRegexAndStrings",
								{ overrideIdentifier: oe?.getLanguageId(), resource: oe?.uri },
							),
							pe = new C.$Pic(re, se, ae);
						Q.pushUndoStop(),
							Q.executeCommands(this.id, [pe]),
							Q.pushUndoStop();
					}
				}
				e.$Zic = A;
				class R extends w.$itb {
					constructor() {
						super({
							id: "editor.action.deleteLines",
							label: f.localize(1286, null),
							alias: "Delete Line",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyK,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						if (!Q.hasModel()) return;
						const Z = this.d(Q),
							se = Q.getModel();
						if (se.getLineCount() === 1 && se.getLineMaxColumn(1) === 1) return;
						let re = 0;
						const le = [],
							oe = [];
						for (let ae = 0, pe = Z.length; ae < pe; ae++) {
							const $e = Z[ae];
							let ye = $e.startLineNumber,
								ue = $e.endLineNumber,
								fe = 1,
								me = se.getLineMaxColumn(ue);
							ue < se.getLineCount()
								? ((ue += 1), (me = 1))
								: ye > 1 && ((ye -= 1), (fe = se.getLineMaxColumn(ye))),
								le.push(u.$jL.replace(new c.$kL(ye, fe, ue, me), "")),
								oe.push(
									new c.$kL(
										ye - re,
										$e.positionColumn,
										ye - re,
										$e.positionColumn,
									),
								),
								(re += $e.endLineNumber - $e.startLineNumber + 1);
						}
						Q.pushUndoStop(), Q.executeEdits(this.id, le, oe), Q.pushUndoStop();
					}
					d(te) {
						const Q = te.getSelections().map((re) => {
							let le = re.endLineNumber;
							return (
								re.startLineNumber < re.endLineNumber &&
									re.endColumn === 1 &&
									(le -= 1),
								{
									startLineNumber: re.startLineNumber,
									selectionStartColumn: re.selectionStartColumn,
									endLineNumber: le,
									positionColumn: re.positionColumn,
								}
							);
						});
						Q.sort((re, le) =>
							re.startLineNumber === le.startLineNumber
								? re.endLineNumber - le.endLineNumber
								: re.startLineNumber - le.startLineNumber,
						);
						const Z = [];
						let se = Q[0];
						for (let re = 1; re < Q.length; re++)
							se.endLineNumber + 1 >= Q[re].startLineNumber
								? (se.endLineNumber = Q[re].endLineNumber)
								: (Z.push(se), (se = Q[re]));
						return Z.push(se), Z;
					}
				}
				e.$1ic = R;
				class O extends w.$itb {
					constructor() {
						super({
							id: "editor.action.indentLines",
							label: f.localize(1287, null),
							alias: "Indent Line",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.BracketRight,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						const Z = Q._getViewModel();
						Z &&
							(Q.pushUndoStop(),
							Q.executeCommands(
								this.id,
								m.$$tb.indent(Z.cursorConfig, Q.getModel(), Q.getSelections()),
							),
							Q.pushUndoStop());
					}
				}
				e.$2ic = O;
				class B extends w.$itb {
					constructor() {
						super({
							id: "editor.action.outdentLines",
							label: f.localize(1288, null),
							alias: "Outdent Line",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.BracketLeft,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						i.CoreEditingCommands.Outdent.runEditorCommand(te, Q, null);
					}
				}
				class U extends w.$itb {
					constructor() {
						super({
							id: "editor.action.insertLineBefore",
							label: f.localize(1289, null),
							alias: "Insert Line Above",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Enter,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						const Z = Q._getViewModel();
						Z &&
							(Q.pushUndoStop(),
							Q.executeCommands(
								this.id,
								r.$2tb.lineInsertBefore(
									Z.cursorConfig,
									Q.getModel(),
									Q.getSelections(),
								),
							));
					}
				}
				e.$3ic = U;
				class z extends w.$itb {
					constructor() {
						super({
							id: "editor.action.insertLineAfter",
							label: f.localize(1290, null),
							alias: "Insert Line Below",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Enter,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						const Z = Q._getViewModel();
						Z &&
							(Q.pushUndoStop(),
							Q.executeCommands(
								this.id,
								r.$2tb.lineInsertAfter(
									Z.cursorConfig,
									Q.getModel(),
									Q.getSelections(),
								),
							));
					}
				}
				e.$4ic = z;
				class F extends w.$itb {
					run(te, Q) {
						if (!Q.hasModel()) return;
						const Z = Q.getSelection(),
							se = this.e(Q),
							re = [];
						for (let ae = 0, pe = se.length - 1; ae < pe; ae++) {
							const $e = se[ae],
								ye = se[ae + 1];
							h.$iL.intersectRanges($e, ye) === null
								? re.push($e)
								: (se[ae + 1] = h.$iL.plusRange($e, ye));
						}
						re.push(se[se.length - 1]);
						const le = this.d(Z, re),
							oe = re.map((ae) => u.$jL.replace(ae, ""));
						Q.pushUndoStop(), Q.executeEdits(this.id, oe, le), Q.pushUndoStop();
					}
				}
				e.$5ic = F;
				class x extends F {
					constructor() {
						super({
							id: "deleteAllLeft",
							label: f.localize(1291, null),
							alias: "Delete All Left",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					d(te, Q) {
						let Z = null;
						const se = [];
						let re = 0;
						return (
							Q.forEach((le) => {
								let oe;
								if (le.endColumn === 1 && re > 0) {
									const ae = le.startLineNumber - re;
									oe = new c.$kL(ae, le.startColumn, ae, le.startColumn);
								} else
									oe = new c.$kL(
										le.startLineNumber,
										le.startColumn,
										le.startLineNumber,
										le.startColumn,
									);
								(re += le.endLineNumber - le.startLineNumber),
									le.intersectRanges(te) ? (Z = oe) : se.push(oe);
							}),
							Z && se.unshift(Z),
							se
						);
					}
					e(te) {
						const Q = te.getSelections();
						if (Q === null) return [];
						let Z = Q;
						const se = te.getModel();
						return se === null
							? []
							: (Z.sort(h.$iL.compareRangesUsingStarts),
								(Z = Z.map((re) => {
									if (re.isEmpty())
										if (re.startColumn === 1) {
											const le = Math.max(1, re.startLineNumber - 1),
												oe =
													re.startLineNumber === 1
														? 1
														: se.getLineLength(le) + 1;
											return new h.$iL(le, oe, re.startLineNumber, 1);
										} else
											return new h.$iL(
												re.startLineNumber,
												1,
												re.startLineNumber,
												re.startColumn,
											);
									else
										return new h.$iL(
											re.startLineNumber,
											1,
											re.endLineNumber,
											re.endColumn,
										);
								})),
								Z);
					}
				}
				e.$6ic = x;
				class H extends F {
					constructor() {
						super({
							id: "deleteAllRight",
							label: f.localize(1292, null),
							alias: "Delete All Right",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary: t.KeyMod.WinCtrl | t.KeyCode.KeyK,
									secondary: [t.KeyMod.CtrlCmd | t.KeyCode.Delete],
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					d(te, Q) {
						let Z = null;
						const se = [];
						for (let re = 0, le = Q.length, oe = 0; re < le; re++) {
							const ae = Q[re],
								pe = new c.$kL(
									ae.startLineNumber - oe,
									ae.startColumn,
									ae.startLineNumber - oe,
									ae.startColumn,
								);
							ae.intersectRanges(te) ? (Z = pe) : se.push(pe);
						}
						return Z && se.unshift(Z), se;
					}
					e(te) {
						const Q = te.getModel();
						if (Q === null) return [];
						const Z = te.getSelections();
						if (Z === null) return [];
						const se = Z.map((re) => {
							if (re.isEmpty()) {
								const le = Q.getLineMaxColumn(re.startLineNumber);
								return re.startColumn === le
									? new h.$iL(
											re.startLineNumber,
											re.startColumn,
											re.startLineNumber + 1,
											1,
										)
									: new h.$iL(
											re.startLineNumber,
											re.startColumn,
											re.startLineNumber,
											le,
										);
							}
							return re;
						});
						return se.sort(h.$iL.compareRangesUsingStarts), se;
					}
				}
				e.$7ic = H;
				class q extends w.$itb {
					constructor() {
						super({
							id: "editor.action.joinLines",
							label: f.localize(1293, null),
							alias: "Join Lines",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: 0,
								mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.KeyJ },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						const Z = Q.getSelections();
						if (Z === null) return;
						let se = Q.getSelection();
						if (se === null) return;
						Z.sort(h.$iL.compareRangesUsingStarts);
						const re = [],
							le = Z.reduce((ue, fe) =>
								ue.isEmpty()
									? ue.endLineNumber === fe.startLineNumber
										? (se.equalsSelection(ue) && (se = fe), fe)
										: fe.startLineNumber > ue.endLineNumber + 1
											? (re.push(ue), fe)
											: new c.$kL(
													ue.startLineNumber,
													ue.startColumn,
													fe.endLineNumber,
													fe.endColumn,
												)
									: fe.startLineNumber > ue.endLineNumber
										? (re.push(ue), fe)
										: new c.$kL(
												ue.startLineNumber,
												ue.startColumn,
												fe.endLineNumber,
												fe.endColumn,
											),
							);
						re.push(le);
						const oe = Q.getModel();
						if (oe === null) return;
						const ae = [],
							pe = [];
						let $e = se,
							ye = 0;
						for (let ue = 0, fe = re.length; ue < fe; ue++) {
							const me = re[ue],
								ve = me.startLineNumber,
								ge = 1;
							let be = 0,
								Ce,
								Le;
							const Fe = oe.getLineLength(me.endLineNumber) - me.endColumn;
							if (me.isEmpty() || me.startLineNumber === me.endLineNumber) {
								const He = me.getStartPosition();
								He.lineNumber < oe.getLineCount()
									? ((Ce = ve + 1), (Le = oe.getLineMaxColumn(Ce)))
									: ((Ce = He.lineNumber),
										(Le = oe.getLineMaxColumn(He.lineNumber)));
							} else (Ce = me.endLineNumber), (Le = oe.getLineMaxColumn(Ce));
							let Oe = oe.getLineContent(ve);
							for (let He = ve + 1; He <= Ce; He++) {
								const Ke = oe.getLineContent(He),
									Je = oe.getLineFirstNonWhitespaceColumn(He);
								if (Je >= 1) {
									let Te = !0;
									Oe === "" && (Te = !1),
										Te &&
											(Oe.charAt(Oe.length - 1) === " " ||
												Oe.charAt(Oe.length - 1) === "	") &&
											((Te = !1), (Oe = Oe.replace(/[\s\uFEFF\xA0]+$/g, " ")));
									const Ee = Ke.substr(Je - 1);
									(Oe += (Te ? " " : "") + Ee),
										Te ? (be = Ee.length + 1) : (be = Ee.length);
								} else be = 0;
							}
							const xe = new h.$iL(ve, ge, Ce, Le);
							if (!xe.isEmpty()) {
								let He;
								me.isEmpty()
									? (ae.push(u.$jL.replace(xe, Oe)),
										(He = new c.$kL(
											xe.startLineNumber - ye,
											Oe.length - be + 1,
											ve - ye,
											Oe.length - be + 1,
										)))
									: me.startLineNumber === me.endLineNumber
										? (ae.push(u.$jL.replace(xe, Oe)),
											(He = new c.$kL(
												me.startLineNumber - ye,
												me.startColumn,
												me.endLineNumber - ye,
												me.endColumn,
											)))
										: (ae.push(u.$jL.replace(xe, Oe)),
											(He = new c.$kL(
												me.startLineNumber - ye,
												me.startColumn,
												me.startLineNumber - ye,
												Oe.length - Fe,
											))),
									h.$iL.intersectRanges(xe, se) !== null
										? ($e = He)
										: pe.push(He);
							}
							ye += xe.endLineNumber - xe.startLineNumber;
						}
						pe.unshift($e),
							Q.pushUndoStop(),
							Q.executeEdits(this.id, ae, pe),
							Q.pushUndoStop();
					}
				}
				e.$8ic = q;
				class V extends w.$itb {
					constructor() {
						super({
							id: "editor.action.transpose",
							label: f.localize(1294, null),
							alias: "Transpose Characters around the Cursor",
							precondition: n.EditorContextKeys.writable,
						});
					}
					run(te, Q) {
						const Z = Q.getSelections();
						if (Z === null) return;
						const se = Q.getModel();
						if (se === null) return;
						const re = [];
						for (let le = 0, oe = Z.length; le < oe; le++) {
							const ae = Z[le];
							if (!ae.isEmpty()) continue;
							const pe = ae.getStartPosition(),
								$e = se.getLineMaxColumn(pe.lineNumber);
							if (pe.column >= $e) {
								if (pe.lineNumber === se.getLineCount()) continue;
								const ye = new h.$iL(
										pe.lineNumber,
										Math.max(1, pe.column - 1),
										pe.lineNumber + 1,
										1,
									),
									ue = se.getValueInRange(ye).split("").reverse().join("");
								re.push(
									new E.$wtb(
										new c.$kL(
											pe.lineNumber,
											Math.max(1, pe.column - 1),
											pe.lineNumber + 1,
											1,
										),
										ue,
									),
								);
							} else {
								const ye = new h.$iL(
										pe.lineNumber,
										Math.max(1, pe.column - 1),
										pe.lineNumber,
										pe.column + 1,
									),
									ue = se.getValueInRange(ye).split("").reverse().join("");
								re.push(
									new E.$Atb(
										ye,
										ue,
										new c.$kL(
											pe.lineNumber,
											pe.column + 1,
											pe.lineNumber,
											pe.column + 1,
										),
									),
								);
							}
						}
						Q.pushUndoStop(), Q.executeCommands(this.id, re), Q.pushUndoStop();
					}
				}
				e.$9ic = V;
				class G extends w.$itb {
					run(te, Q) {
						const Z = Q.getSelections();
						if (Z === null) return;
						const se = Q.getModel();
						if (se === null) return;
						const re = Q.getOption(d.EditorOption.wordSeparators),
							le = [];
						for (const oe of Z)
							if (oe.isEmpty()) {
								const ae = oe.getStartPosition(),
									pe = Q.getConfiguredWordAtPosition(ae);
								if (!pe) continue;
								const $e = new h.$iL(
										ae.lineNumber,
										pe.startColumn,
										ae.lineNumber,
										pe.endColumn,
									),
									ye = se.getValueInRange($e);
								le.push(u.$jL.replace($e, this.d(ye, re)));
							} else {
								const ae = se.getValueInRange(oe);
								le.push(u.$jL.replace(oe, this.d(ae, re)));
							}
						Q.pushUndoStop(), Q.executeEdits(this.id, le), Q.pushUndoStop();
					}
				}
				e.$0ic = G;
				class K extends G {
					constructor() {
						super({
							id: "editor.action.transformToUppercase",
							label: f.localize(1295, null),
							alias: "Transform to Uppercase",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						return te.toLocaleUpperCase();
					}
				}
				e.$$ic = K;
				class J extends G {
					constructor() {
						super({
							id: "editor.action.transformToLowercase",
							label: f.localize(1296, null),
							alias: "Transform to Lowercase",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						return te.toLocaleLowerCase();
					}
				}
				e.$_ic = J;
				class W {
					constructor(te, Q) {
						(this.e = te), (this.f = Q), (this.c = null), (this.d = !1);
					}
					get() {
						if (!this.d) {
							this.d = !0;
							try {
								this.c = new RegExp(this.e, this.f);
							} catch {}
						}
						return this.c;
					}
					isSupported() {
						return this.get() !== null;
					}
				}
				class X extends G {
					static {
						this.titleBoundary = new W(
							"(^|[^\\p{L}\\p{N}']|((^|\\P{L})'))\\p{L}",
							"gmu",
						);
					}
					constructor() {
						super({
							id: "editor.action.transformToTitlecase",
							label: f.localize(1297, null),
							alias: "Transform to Title Case",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						const Z = X.titleBoundary.get();
						return Z
							? te
									.toLocaleLowerCase()
									.replace(Z, (se) => se.toLocaleUpperCase())
							: te;
					}
				}
				e.$ajc = X;
				class Y extends G {
					static {
						this.caseBoundary = new W("(\\p{Ll})(\\p{Lu})", "gmu");
					}
					static {
						this.singleLetters = new W(
							"(\\p{Lu}|\\p{N})(\\p{Lu})(\\p{Ll})",
							"gmu",
						);
					}
					constructor() {
						super({
							id: "editor.action.transformToSnakecase",
							label: f.localize(1298, null),
							alias: "Transform to Snake Case",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						const Z = Y.caseBoundary.get(),
							se = Y.singleLetters.get();
						return !Z || !se
							? te
							: te
									.replace(Z, "$1_$2")
									.replace(se, "$1_$2$3")
									.toLocaleLowerCase();
					}
				}
				e.$bjc = Y;
				class ie extends G {
					static {
						this.wordBoundary = new W("[_\\s-]", "gm");
					}
					constructor() {
						super({
							id: "editor.action.transformToCamelcase",
							label: f.localize(1299, null),
							alias: "Transform to Camel Case",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						const Z = ie.wordBoundary.get();
						if (!Z) return te;
						const se = te.split(Z);
						return (
							se.shift() +
							se
								.map(
									(le) =>
										le.substring(0, 1).toLocaleUpperCase() + le.substring(1),
								)
								.join("")
						);
					}
				}
				e.$cjc = ie;
				class ne extends G {
					static {
						this.wordBoundary = new W("[_\\s-]", "gm");
					}
					static {
						this.wordBoundaryToMaintain = new W("(?<=\\.)", "gm");
					}
					constructor() {
						super({
							id: "editor.action.transformToPascalcase",
							label: f.localize(1300, null),
							alias: "Transform to Pascal Case",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						const Z = ne.wordBoundary.get(),
							se = ne.wordBoundaryToMaintain.get();
						return !Z || !se
							? te
							: te
									.split(se)
									.map((oe) => oe.split(Z))
									.flat()
									.map(
										(oe) =>
											oe.substring(0, 1).toLocaleUpperCase() + oe.substring(1),
									)
									.join("");
					}
				}
				e.$djc = ne;
				class ee extends G {
					static isSupported() {
						return [this.e, this.h, this.j].every((Q) => Q.isSupported());
					}
					static {
						this.e = new W("(\\p{Ll})(\\p{Lu})", "gmu");
					}
					static {
						this.h = new W("(\\p{Lu}|\\p{N})(\\p{Lu}\\p{Ll})", "gmu");
					}
					static {
						this.j = new W("(\\S)(_)(\\S)", "gm");
					}
					constructor() {
						super({
							id: "editor.action.transformToKebabcase",
							label: f.localize(1301, null),
							alias: "Transform to Kebab Case",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						const Z = ee.e.get(),
							se = ee.h.get(),
							re = ee.j.get();
						return !Z || !se || !re
							? te
							: te
									.replace(re, "$1-$3")
									.replace(Z, "$1-$2")
									.replace(se, "$1-$2")
									.toLocaleLowerCase();
					}
				}
				(e.$ejc = ee),
					(0, w.$ntb)(v),
					(0, w.$ntb)(S),
					(0, w.$ntb)(I),
					(0, w.$ntb)(P),
					(0, w.$ntb)(k),
					(0, w.$ntb)(D),
					(0, w.$ntb)(M),
					(0, w.$ntb)(N),
					(0, w.$ntb)(A),
					(0, w.$ntb)(R),
					(0, w.$ntb)(O),
					(0, w.$ntb)(B),
					(0, w.$ntb)(U),
					(0, w.$ntb)(z),
					(0, w.$ntb)(x),
					(0, w.$ntb)(H),
					(0, w.$ntb)(q),
					(0, w.$ntb)(V),
					(0, w.$ntb)(K),
					(0, w.$ntb)(J),
					Y.caseBoundary.isSupported() &&
						Y.singleLetters.isSupported() &&
						(0, w.$ntb)(Y),
					ie.wordBoundary.isSupported() && (0, w.$ntb)(ie),
					ne.wordBoundary.isSupported() && (0, w.$ntb)(ne),
					X.titleBoundary.isSupported() && (0, w.$ntb)(X),
					ee.isSupported() && (0, w.$ntb)(ee);
			},
		),
		