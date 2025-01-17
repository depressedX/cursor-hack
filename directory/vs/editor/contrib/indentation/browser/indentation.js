import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../browser/editorExtensions.js';
import '../../../common/commands/shiftCommand.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/editorContextKeys.js';
import '../../../common/encodedTokenAttributes.js';
import '../../../common/languages/languageConfigurationRegistry.js';
import '../../../common/languages/supports/indentRules.js';
import '../../../common/services/model.js';
import '../common/indentUtils.js';
import '../../../../nls.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../common/languages/autoIndent.js';
import '../common/indentation.js';
import '../../../common/tokens/lineTokens.js';
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
		