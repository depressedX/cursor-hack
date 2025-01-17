import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/stableEditorScroll.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/editorContextKeys.js';
import './codelens.js';
import './codeLensCache.js';
import './codelensWidget.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../common/services/languageFeatureDebounce.js';
import '../../../common/services/languageFeatures.js';
define(
			de[1686],
			he([
				1, 0, 15, 29, 3, 491, 56, 46, 38, 71, 1601, 2892, 2909, 4, 31, 40, 63,
				391, 69,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RBb = void 0);
				let b = class {
					static {
						this.ID = "css.editor.codeLens";
					}
					constructor(l, y, $, v, S, I) {
						(this.n = l),
							(this.o = y),
							(this.p = v),
							(this.q = S),
							(this.r = I),
							(this.a = new w.$Zc()),
							(this.b = new w.$Zc()),
							(this.c = []),
							(this.j = new w.$Zc()),
							(this.d = $.for(y.codeLensProvider, "CodeLensProvide", {
								min: 250,
							})),
							(this.f = $.for(y.codeLensProvider, "CodeLensResolve", {
								min: 250,
								salt: "resolve",
							})),
							(this.g = new t.$Yh(() => this.z(), this.f.default())),
							this.a.add(this.n.onDidChangeModel(() => this.v())),
							this.a.add(this.n.onDidChangeModelLanguage(() => this.v())),
							this.a.add(
								this.n.onDidChangeConfiguration((T) => {
									(T.hasChanged(m.EditorOption.fontInfo) ||
										T.hasChanged(m.EditorOption.codeLensFontSize) ||
										T.hasChanged(m.EditorOption.codeLensFontFamily)) &&
										this.t(),
										T.hasChanged(m.EditorOption.codeLens) && this.v();
								}),
							),
							this.a.add(y.codeLensProvider.onDidChange(this.v, this)),
							this.v(),
							this.t();
					}
					dispose() {
						this.u(), this.a.dispose(), this.j.dispose(), this.k?.dispose();
					}
					s() {
						const l = Math.max(
							1.3,
							this.n.getOption(m.EditorOption.lineHeight) /
								this.n.getOption(m.EditorOption.fontSize),
						);
						let y = this.n.getOption(m.EditorOption.codeLensFontSize);
						return (
							(!y || y < 5) &&
								(y = (this.n.getOption(m.EditorOption.fontSize) * 0.9) | 0),
							{ fontSize: y, codeLensHeight: (y * l) | 0 }
						);
					}
					t() {
						const { codeLensHeight: l, fontSize: y } = this.s(),
							$ = this.n.getOption(m.EditorOption.codeLensFontFamily),
							v = this.n.getOption(m.EditorOption.fontInfo),
							{ style: S } = this.n.getContainerDomNode();
						S.setProperty("--vscode-editorCodeLens-lineHeight", `${l}px`),
							S.setProperty("--vscode-editorCodeLens-fontSize", `${y}px`),
							S.setProperty(
								"--vscode-editorCodeLens-fontFeatureSettings",
								v.fontFeatureSettings,
							),
							$ &&
								(S.setProperty("--vscode-editorCodeLens-fontFamily", $),
								S.setProperty(
									"--vscode-editorCodeLens-fontFamilyDefault",
									m.EDITOR_FONT_DEFAULTS.fontFamily,
								)),
							this.n.changeViewZones((I) => {
								for (const T of this.c) T.updateHeight(l, I);
							});
					}
					u() {
						this.h?.cancel(),
							(this.h = void 0),
							this.m?.cancel(),
							(this.m = void 0),
							this.b.clear(),
							this.j.clear(),
							this.k?.dispose();
					}
					v() {
						this.u();
						const l = this.n.getModel();
						if (
							!l ||
							!this.n.getOption(m.EditorOption.codeLens) ||
							l.isTooLargeForTokenization()
						)
							return;
						const y = this.r.get(l);
						if ((y && this.x(y), !this.o.codeLensProvider.has(l))) {
							y &&
								(0, t.$Oh)(
									() => {
										const v = this.r.get(l);
										y === v && (this.r.delete(l), this.v());
									},
									30 * 1e3,
									this.b,
								);
							return;
						}
						for (const v of this.o.codeLensProvider.all(l))
							if (typeof v.onDidChange == "function") {
								const S = v.onDidChange(() => $.schedule());
								this.b.add(S);
							}
						const $ = new t.$Yh(() => {
							const v = Date.now();
							this.h?.cancel(),
								(this.h = (0, t.$zh)((S) =>
									(0, u.$KBb)(this.o.codeLensProvider, l, S),
								)),
								this.h.then((S) => {
									this.k && this.j.add(this.k), (this.k = S), this.r.put(l, S);
									const I = this.d.update(l, Date.now() - v);
									($.delay = I), this.x(S), this.y();
								}, i.$4);
						}, this.d.get(l));
						this.b.add($),
							this.b.add((0, w.$Yc)(() => this.g.cancel())),
							this.b.add(
								this.n.onDidChangeModelContent(() => {
									this.n.changeDecorations((v) => {
										this.n.changeViewZones((S) => {
											const I = [];
											let T = -1;
											this.c.forEach((k) => {
												!k.isValid() || T === k.getLineNumber()
													? I.push(k)
													: (k.update(S), (T = k.getLineNumber()));
											});
											const P = new h.$NBb();
											I.forEach((k) => {
												k.dispose(P, S), this.c.splice(this.c.indexOf(k), 1);
											}),
												P.commit(v);
										});
									}),
										$.schedule(),
										this.g.cancel(),
										this.m?.cancel(),
										(this.m = void 0);
								}),
							),
							this.b.add(
								this.n.onDidFocusEditorText(() => {
									$.schedule();
								}),
							),
							this.b.add(
								this.n.onDidBlurEditorText(() => {
									$.cancel();
								}),
							),
							this.b.add(
								this.n.onDidScrollChange((v) => {
									v.scrollTopChanged && this.c.length > 0 && this.y();
								}),
							),
							this.b.add(
								this.n.onDidLayoutChange(() => {
									this.y();
								}),
							),
							this.b.add(
								(0, w.$Yc)(() => {
									if (this.n.getModel()) {
										const v = E.$uwb.capture(this.n);
										this.n.changeDecorations((S) => {
											this.n.changeViewZones((I) => {
												this.w(S, I);
											});
										}),
											v.restore(this.n);
									} else this.w(void 0, void 0);
								}),
							),
							this.b.add(
								this.n.onMouseDown((v) => {
									if (v.target.type !== C.MouseTargetType.CONTENT_WIDGET)
										return;
									let S = v.target.element;
									if (
										(S?.tagName === "SPAN" && (S = S.parentElement),
										S?.tagName === "A")
									)
										for (const I of this.c) {
											const T = I.getCommand(S);
											if (T) {
												this.p
													.executeCommand(T.id, ...(T.arguments || []))
													.catch((P) => this.q.error(P));
												break;
											}
										}
								}),
							),
							$.schedule();
					}
					w(l, y) {
						const $ = new h.$NBb();
						for (const v of this.c) v.dispose($, y);
						l && $.commit(l), (this.c.length = 0);
					}
					x(l) {
						if (!this.n.hasModel()) return;
						const y = this.n.getModel().getLineCount(),
							$ = [];
						let v;
						for (const T of l.lenses) {
							const P = T.symbol.range.startLineNumber;
							P < 1 ||
								P > y ||
								(v && v[v.length - 1].symbol.range.startLineNumber === P
									? v.push(T)
									: ((v = [T]), $.push(v)));
						}
						if (!$.length && !this.c.length) return;
						const S = E.$uwb.capture(this.n),
							I = this.s();
						this.n.changeDecorations((T) => {
							this.n.changeViewZones((P) => {
								const k = new h.$NBb();
								let L = 0,
									D = 0;
								for (; D < $.length && L < this.c.length; ) {
									const M = $[D][0].symbol.range.startLineNumber,
										N = this.c[L].getLineNumber();
									N < M
										? (this.c[L].dispose(k, P), this.c.splice(L, 1))
										: N === M
											? (this.c[L].updateCodeLensSymbols($[D], k), D++, L++)
											: (this.c.splice(
													L,
													0,
													new h.$OBb($[D], this.n, k, P, I.codeLensHeight, () =>
														this.y(),
													),
												),
												L++,
												D++);
								}
								for (; L < this.c.length; )
									this.c[L].dispose(k, P), this.c.splice(L, 1);
								for (; D < $.length; )
									this.c.push(
										new h.$OBb($[D], this.n, k, P, I.codeLensHeight, () =>
											this.y(),
										),
									),
										D++;
								k.commit(T);
							});
						}),
							S.restore(this.n);
					}
					y() {
						this.n.getModel() && this.g.schedule();
					}
					z() {
						this.m?.cancel(), (this.m = void 0);
						const l = this.n.getModel();
						if (!l) return;
						const y = [],
							$ = [];
						if (
							(this.c.forEach((I) => {
								const T = I.computeIfNecessary(l);
								T && (y.push(T), $.push(I));
							}),
							y.length === 0)
						)
							return;
						const v = Date.now(),
							S = (0, t.$zh)((I) => {
								const T = y.map((P, k) => {
									const L = new Array(P.length),
										D = P.map((M, N) =>
											!M.symbol.command &&
											typeof M.provider.resolveCodeLens == "function"
												? Promise.resolve(
														M.provider.resolveCodeLens(l, M.symbol, I),
													).then((A) => {
														L[N] = A;
													}, i.$5)
												: ((L[N] = M.symbol), Promise.resolve(void 0)),
										);
									return Promise.all(D).then(() => {
										!I.isCancellationRequested &&
											!$[k].isDisposed() &&
											$[k].updateCommands(L);
									});
								});
								return Promise.all(T);
							});
						(this.m = S),
							this.m.then(
								() => {
									const I = this.f.update(l, Date.now() - v);
									(this.g.delay = I),
										this.k && this.r.put(l, this.k),
										this.j.clear(),
										S === this.m && (this.m = void 0);
								},
								(I) => {
									(0, i.$4)(I), S === this.m && (this.m = void 0);
								},
							);
					}
					async getModel() {
						return (
							await this.h, await this.m, this.k?.isDisposed ? void 0 : this.k
						);
					}
				};
				(e.$RBb = b),
					(e.$RBb = b =
						Ne(
							[
								j(1, f.$k3),
								j(2, o.$PBb),
								j(3, n.$ek),
								j(4, g.$4N),
								j(5, a.$LBb),
							],
							b,
						)),
					(0, d.$qtb)(
						b.ID,
						b,
						d.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, d.$ntb)(
						class extends d.$itb {
							constructor() {
								super({
									id: "codelens.showLensesInCurrentLine",
									precondition: r.EditorContextKeys.hasCodeLensProvider,
									label: (0, c.localize)(949, null),
									alias: "Show CodeLens Commands For Current Line",
								});
							}
							async run(l, y) {
								if (!y.hasModel()) return;
								const $ = l.get(p.$DJ),
									v = l.get(n.$ek),
									S = l.get(g.$4N),
									I = y.getSelection().positionLineNumber,
									T = y.getContribution(b.ID);
								if (!T) return;
								const P = await T.getModel();
								if (!P) return;
								const k = [];
								for (const M of P.lenses)
									M.symbol.command &&
										M.symbol.range.startLineNumber === I &&
										k.push({
											label: M.symbol.command.title,
											command: M.symbol.command,
										});
								if (k.length === 0) return;
								const L = await $.pick(k, {
									canPickMany: !1,
									placeHolder: (0, c.localize)(950, null),
								});
								if (!L) return;
								let D = L.command;
								if (P.isDisposed) {
									const N = (await T.getModel())?.lenses.find(
										(A) =>
											A.symbol.range.startLineNumber === I &&
											A.symbol.command?.title === D.title,
									);
									if (!N || !N.symbol.command) return;
									D = N.symbol.command;
								}
								try {
									await v.executeCommand(D.id, ...(D.arguments || []));
								} catch (M) {
									S.error(M);
								}
							}
						},
					);
			},
		),
		