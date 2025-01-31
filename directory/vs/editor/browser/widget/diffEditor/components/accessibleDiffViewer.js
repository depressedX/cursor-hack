import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/trustedTypes.js';
import '../../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../../base/common/actions.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/themables.js';
import '../../../config/domFontInfo.js';
import '../utils.js';
import '../../../../common/config/editorOptions.js';
import '../../../../common/core/lineRange.js';
import '../../../../common/core/offsetRange.js';
import '../../../../common/core/position.js';
import '../../../../common/core/range.js';
import '../../../../common/diff/rangeMapping.js';
import '../../../../common/languages/language.js';
import '../../../../common/tokens/lineTokens.js';
import '../../../../common/viewLayout/viewLineRenderer.js';
import '../../../../common/viewModel.js';
import '../../../../../nls.js';
import '../../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/theme/common/iconRegistry.js';
import '../../../../../css!vs/editor/browser/widget/diffEditor/components/accessibleDiffViewer.js';
define(
			de[1660],
			he([
				1, 0, 7, 432, 105, 203, 50, 24, 14, 27, 3, 77, 26, 321, 370, 38, 196,
				289, 48, 17, 342, 61, 388, 598, 290, 4, 184, 5, 79, 2280,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*trustedTypes*/,
				w /*actionbar*/,
				E /*scrollableElement*/,
				C /*actions*/,
				d /*arrays*/,
				m /*codicons*/,
				r /*keyCodes*/,
				u /*lifecycle*/,
				a /*observable*/,
				h /*themables*/,
				c /*domFontInfo*/,
				n /*utils*/,
				g /*editorOptions*/,
				p /*lineRange*/,
				o /*offsetRange*/,
				f /*position*/,
				b /*range*/,
				s /*rangeMapping*/,
				l /*language*/,
				y /*lineTokens*/,
				$ /*viewLineRenderer*/,
				v /*viewModel*/,
				S /*nls*/,
				I /*accessibilitySignalService*/,
				T /*instantiation*/,
				P /*iconRegistry*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$byb = e.$ayb = void 0);
				const k = (0, P.$$O)(
						"diff-review-insert",
						m.$ak.add,
						(0, S.localize)(203, null),
					),
					L = (0, P.$$O)(
						"diff-review-remove",
						m.$ak.remove,
						(0, S.localize)(204, null),
					),
					D = (0, P.$$O)(
						"diff-review-close",
						m.$ak.close,
						(0, S.localize)(205, null),
					);
				let M = class extends u.$1c {
					static {
						this._ttPolicy = (0, i.$bjb)("diffReview", {
							createHTML: (G) => G,
						});
					}
					constructor(G, K, J, W, X, Y, ie, ne, ee) {
						super(),
							(this.c = G),
							(this.f = K),
							(this.j = J),
							(this.m = W),
							(this.n = X),
							(this.q = Y),
							(this.s = ie),
							(this.t = ne),
							(this.u = ee),
							(this.w = (0, a.derivedWithStore)(this, (_, te) => {
								const Q = this.f.read(_);
								if (((this.c.style.visibility = Q ? "visible" : "hidden"), !Q))
									return null;
								const Z = te.add(
										this.u.createInstance(N, this.s, this.t, this.j, this.m),
									),
									se = te.add(
										this.u.createInstance(H, this.c, Z, this.n, this.q, this.t),
									);
								return { model: Z, view: se };
							}).recomputeInitiallyAndOnChange(this.B));
					}
					next() {
						(0, a.transaction)((G) => {
							const K = this.f.get();
							this.j(!0, G), K && this.w.get().model.nextGroup(G);
						});
					}
					prev() {
						(0, a.transaction)((G) => {
							this.j(!0, G), this.w.get().model.previousGroup(G);
						});
					}
					close() {
						(0, a.transaction)((G) => {
							this.j(!1, G);
						});
					}
				};
				(e.$ayb = M), (e.$ayb = M = Ne([j(8, T.$Li)], M));
				let N = class extends u.$1c {
					constructor(G, K, J, W, X) {
						super(),
							(this.j = G),
							(this.m = K),
							(this.n = J),
							(this.canClose = W),
							(this.q = X),
							(this.c = (0, a.observableValue)(this, [])),
							(this.f = (0, a.observableValue)(this, 0)),
							(this.h = (0, a.observableValue)(this, 0)),
							(this.groups = this.c),
							(this.currentGroup = this.f.map((Y, ie) => this.c.read(ie)[Y])),
							(this.currentGroupIndex = this.f),
							(this.currentElement = this.h.map(
								(Y, ie) => this.currentGroup.read(ie)?.lines[Y],
							)),
							this.D(
								(0, a.autorun)((Y) => {
									const ie = this.j.read(Y);
									if (!ie) {
										this.c.set([], void 0);
										return;
									}
									const ne = R(
										ie,
										this.m.getOriginalModel().getLineCount(),
										this.m.getModifiedModel().getLineCount(),
									);
									(0, a.transaction)((ee) => {
										const _ = this.m.getModifiedPosition();
										if (_) {
											const te = ne.findIndex(
												(Q) =>
													_?.lineNumber <
													Q.range.modified.endLineNumberExclusive,
											);
											te !== -1 && this.f.set(te, ee);
										}
										this.c.set(ne, ee);
									});
								}),
							),
							this.D(
								(0, a.autorun)((Y) => {
									const ie = this.currentElement.read(Y);
									ie?.type === O.Deleted
										? this.q.playSignal(I.$Twb.diffLineDeleted, {
												source: "accessibleDiffViewer.currentElementChanged",
											})
										: ie?.type === O.Added &&
											this.q.playSignal(I.$Twb.diffLineInserted, {
												source: "accessibleDiffViewer.currentElementChanged",
											});
								}),
							),
							this.D(
								(0, a.autorun)((Y) => {
									const ie = this.currentElement.read(Y);
									if (ie && ie.type !== O.Header) {
										const ne =
											ie.modifiedLineNumber ?? ie.diff.modified.startLineNumber;
										this.m.modifiedSetSelection(
											b.$iL.fromPositions(new f.$hL(ne, 1)),
										);
									}
								}),
							);
					}
					s(G, K) {
						const J = this.groups.get();
						!J ||
							J.length <= 1 ||
							(0, a.subtransaction)(K, (W) => {
								this.f.set(
									o.$pL.ofLength(J.length).clipCyclic(this.f.get() + G),
									W,
								),
									this.h.set(0, W);
							});
					}
					nextGroup(G) {
						this.s(1, G);
					}
					previousGroup(G) {
						this.s(-1, G);
					}
					t(G) {
						const K = this.currentGroup.get();
						!K ||
							K.lines.length <= 1 ||
							(0, a.transaction)((J) => {
								this.h.set(
									o.$pL.ofLength(K.lines.length).clip(this.h.get() + G),
									J,
								);
							});
					}
					goToNextLine() {
						this.t(1);
					}
					goToPreviousLine() {
						this.t(-1);
					}
					goToLine(G) {
						const K = this.currentGroup.get();
						if (!K) return;
						const J = K.lines.indexOf(G);
						J !== -1 &&
							(0, a.transaction)((W) => {
								this.h.set(J, W);
							});
					}
					revealCurrentElementInEditor() {
						if (!this.canClose.get()) return;
						this.n(!1, void 0);
						const G = this.currentElement.get();
						G &&
							(G.type === O.Deleted
								? this.m.originalReveal(
										b.$iL.fromPositions(new f.$hL(G.originalLineNumber, 1)),
									)
								: this.m.modifiedReveal(
										G.type !== O.Header
											? b.$iL.fromPositions(new f.$hL(G.modifiedLineNumber, 1))
											: void 0,
									));
					}
					close() {
						this.canClose.get() && (this.n(!1, void 0), this.m.modifiedFocus());
					}
				};
				N = Ne([j(4, I.$Owb)], N);
				const A = 3;
				function R(V, G, K) {
					const J = [];
					for (const W of (0, d.$Eb)(
						V,
						(X, Y) =>
							Y.modified.startLineNumber - X.modified.endLineNumberExclusive <
							2 * A,
					)) {
						const X = [];
						X.push(new U());
						const Y = new p.$rL(
								Math.max(1, W[0].original.startLineNumber - A),
								Math.min(
									W[W.length - 1].original.endLineNumberExclusive + A,
									G + 1,
								),
							),
							ie = new p.$rL(
								Math.max(1, W[0].modified.startLineNumber - A),
								Math.min(
									W[W.length - 1].modified.endLineNumberExclusive + A,
									K + 1,
								),
							);
						(0, d.$Fb)(W, (_, te) => {
							const Q = new p.$rL(
									_ ? _.original.endLineNumberExclusive : Y.startLineNumber,
									te ? te.original.startLineNumber : Y.endLineNumberExclusive,
								),
								Z = new p.$rL(
									_ ? _.modified.endLineNumberExclusive : ie.startLineNumber,
									te ? te.modified.startLineNumber : ie.endLineNumberExclusive,
								);
							Q.forEach((se) => {
								X.push(new x(se, Z.startLineNumber + (se - Q.startLineNumber)));
							}),
								te &&
									(te.original.forEach((se) => {
										X.push(new z(te, se));
									}),
									te.modified.forEach((se) => {
										X.push(new F(te, se));
									}));
						});
						const ne = W[0].modified.join(W[W.length - 1].modified),
							ee = W[0].original.join(W[W.length - 1].original);
						J.push(new B(new s.$BL(ne, ee), X));
					}
					return J;
				}
				var O;
				(function (V) {
					(V[(V.Header = 0)] = "Header"),
						(V[(V.Unchanged = 1)] = "Unchanged"),
						(V[(V.Deleted = 2)] = "Deleted"),
						(V[(V.Added = 3)] = "Added");
				})(O || (O = {}));
				class B {
					constructor(G, K) {
						(this.range = G), (this.lines = K);
					}
				}
				class U {
					constructor() {
						this.type = O.Header;
					}
				}
				class z {
					constructor(G, K) {
						(this.diff = G),
							(this.originalLineNumber = K),
							(this.type = O.Deleted),
							(this.modifiedLineNumber = void 0);
					}
				}
				class F {
					constructor(G, K) {
						(this.diff = G),
							(this.modifiedLineNumber = K),
							(this.type = O.Added),
							(this.originalLineNumber = void 0);
					}
				}
				class x {
					constructor(G, K) {
						(this.originalLineNumber = G),
							(this.modifiedLineNumber = K),
							(this.type = O.Unchanged);
					}
				}
				let H = class extends u.$1c {
					constructor(G, K, J, W, X, Y) {
						super(),
							(this.j = G),
							(this.m = K),
							(this.n = J),
							(this.q = W),
							(this.s = X),
							(this.t = Y),
							(this.domNode = this.j),
							(this.domNode.className =
								"monaco-component diff-review monaco-editor-background");
						const ie = document.createElement("div");
						(ie.className = "diff-review-actions"),
							(this.h = this.D(new w.$eib(ie))),
							this.D(
								(0, a.autorun)((ne) => {
									this.h.clear(),
										this.m.canClose.read(ne) &&
											this.h.push(
												new C.$rj(
													"diffreview.close",
													(0, S.localize)(206, null),
													"close-diff-review " + h.ThemeIcon.asClassName(D),
													!0,
													async () => K.close(),
												),
												{ label: !1, icon: !0 },
											);
								}),
							),
							(this.c = document.createElement("div")),
							(this.c.className = "diff-review-content"),
							this.c.setAttribute("role", "code"),
							(this.f = this.D(new E.$8hb(this.c, {}))),
							(0, t.$hhb)(this.domNode, this.f.getDomNode(), ie),
							this.D(
								(0, a.autorun)((ne) => {
									this.q.read(ne), this.n.read(ne), this.f.scanDomNode();
								}),
							),
							this.D(
								(0, u.$Yc)(() => {
									(0, t.$hhb)(this.domNode);
								}),
							),
							this.D(
								(0, n.$Gwb)(this.domNode, { width: this.n, height: this.q }),
							),
							this.D((0, n.$Gwb)(this.c, { width: this.n, height: this.q })),
							this.D(
								(0, a.autorunWithStore)((ne, ee) => {
									this.m.currentGroup.read(ne), this.u(ee);
								}),
							),
							this.D(
								(0, t.$$fb)(this.domNode, "keydown", (ne) => {
									(ne.equals(r.KeyCode.DownArrow) ||
										ne.equals(r.KeyMod.CtrlCmd | r.KeyCode.DownArrow) ||
										ne.equals(r.KeyMod.Alt | r.KeyCode.DownArrow)) &&
										(ne.preventDefault(), this.m.goToNextLine()),
										(ne.equals(r.KeyCode.UpArrow) ||
											ne.equals(r.KeyMod.CtrlCmd | r.KeyCode.UpArrow) ||
											ne.equals(r.KeyMod.Alt | r.KeyCode.UpArrow)) &&
											(ne.preventDefault(), this.m.goToPreviousLine()),
										(ne.equals(r.KeyCode.Escape) ||
											ne.equals(r.KeyMod.CtrlCmd | r.KeyCode.Escape) ||
											ne.equals(r.KeyMod.Alt | r.KeyCode.Escape) ||
											ne.equals(r.KeyMod.Shift | r.KeyCode.Escape)) &&
											(ne.preventDefault(), this.m.close()),
										(ne.equals(r.KeyCode.Space) ||
											ne.equals(r.KeyCode.Enter)) &&
											(ne.preventDefault(),
											this.m.revealCurrentElementInEditor());
								}),
							);
					}
					u(G) {
						const K = this.s.getOriginalOptions(),
							J = this.s.getModifiedOptions(),
							W = document.createElement("div");
						(W.className = "diff-review-table"),
							W.setAttribute("role", "list"),
							W.setAttribute("aria-label", (0, S.localize)(207, null)),
							(0, c.$jsb)(W, J.get(g.EditorOption.fontInfo)),
							(0, t.$hhb)(this.c, W);
						const X = this.s.getOriginalModel(),
							Y = this.s.getModifiedModel();
						if (!X || !Y) return;
						const ie = X.getOptions(),
							ne = Y.getOptions(),
							ee = J.get(g.EditorOption.lineHeight),
							_ = this.m.currentGroup.get();
						for (const te of _?.lines || []) {
							if (!_) break;
							let Q;
							if (te.type === O.Header) {
								const se = document.createElement("div");
								(se.className = "diff-review-row"),
									se.setAttribute("role", "listitem");
								const re = _.range,
									le = this.m.currentGroupIndex.get(),
									oe = this.m.groups.get().length,
									ae = (ue) =>
										ue === 0
											? (0, S.localize)(208, null)
											: ue === 1
												? (0, S.localize)(209, null)
												: (0, S.localize)(210, null, ue),
									pe = ae(re.original.length),
									$e = ae(re.modified.length);
								se.setAttribute(
									"aria-label",
									(0, S.localize)(
										211,
										null,
										le + 1,
										oe,
										re.original.startLineNumber,
										pe,
										re.modified.startLineNumber,
										$e,
									),
								);
								const ye = document.createElement("div");
								(ye.className = "diff-review-cell diff-review-summary"),
									ye.appendChild(
										document.createTextNode(
											`${le + 1}/${oe}: @@ -${re.original.startLineNumber},${re.original.length} +${re.modified.startLineNumber},${re.modified.length} @@`,
										),
									),
									se.appendChild(ye),
									(Q = se);
							} else Q = this.w(te, ee, this.n.get(), K, X, ie, J, Y, ne);
							W.appendChild(Q);
							const Z = (0, a.derived)(
								(se) => this.m.currentElement.read(se) === te,
							);
							G.add(
								(0, a.autorun)((se) => {
									const re = Z.read(se);
									(Q.tabIndex = re ? 0 : -1), re && Q.focus();
								}),
							),
								G.add(
									(0, t.$0fb)(Q, "focus", () => {
										this.m.goToLine(te);
									}),
								);
						}
						this.f.scanDomNode();
					}
					w(G, K, J, W, X, Y, ie, ne, ee) {
						const _ = W.get(g.EditorOption.layoutInfo),
							te = _.glyphMarginWidth + _.lineNumbersWidth,
							Q = ie.get(g.EditorOption.layoutInfo),
							Z = 10 + Q.glyphMarginWidth + Q.lineNumbersWidth;
						let se = "diff-review-row",
							re = "";
						const le = "diff-review-spacer";
						let oe = null;
						switch (G.type) {
							case O.Added:
								(se = "diff-review-row line-insert"),
									(re = " char-insert"),
									(oe = k);
								break;
							case O.Deleted:
								(se = "diff-review-row line-delete"),
									(re = " char-delete"),
									(oe = L);
								break;
						}
						const ae = document.createElement("div");
						(ae.style.minWidth = J + "px"),
							(ae.className = se),
							ae.setAttribute("role", "listitem"),
							(ae.ariaLevel = "");
						const pe = document.createElement("div");
						(pe.className = "diff-review-cell"),
							(pe.style.height = `${K}px`),
							ae.appendChild(pe);
						const $e = document.createElement("span");
						($e.style.width = te + "px"),
							($e.style.minWidth = te + "px"),
							($e.className = "diff-review-line-number" + re),
							G.originalLineNumber !== void 0
								? $e.appendChild(
										document.createTextNode(String(G.originalLineNumber)),
									)
								: ($e.innerText = "\xA0"),
							pe.appendChild($e);
						const ye = document.createElement("span");
						(ye.style.width = Z + "px"),
							(ye.style.minWidth = Z + "px"),
							(ye.style.paddingRight = "10px"),
							(ye.className = "diff-review-line-number" + re),
							G.modifiedLineNumber !== void 0
								? ye.appendChild(
										document.createTextNode(String(G.modifiedLineNumber)),
									)
								: (ye.innerText = "\xA0"),
							pe.appendChild(ye);
						const ue = document.createElement("span");
						if (((ue.className = le), oe)) {
							const ve = document.createElement("span");
							(ve.className = h.ThemeIcon.asClassName(oe)),
								(ve.innerText = "\xA0\xA0"),
								ue.appendChild(ve);
						} else ue.innerText = "\xA0\xA0";
						pe.appendChild(ue);
						let fe;
						if (G.modifiedLineNumber !== void 0) {
							let ve = this.y(
								ne,
								ie,
								ee.tabSize,
								G.modifiedLineNumber,
								this.t.languageIdCodec,
							);
							M._ttPolicy && (ve = M._ttPolicy.createHTML(ve)),
								pe.insertAdjacentHTML("beforeend", ve),
								(fe = ne.getLineContent(G.modifiedLineNumber));
						} else {
							let ve = this.y(
								X,
								W,
								Y.tabSize,
								G.originalLineNumber,
								this.t.languageIdCodec,
							);
							M._ttPolicy && (ve = M._ttPolicy.createHTML(ve)),
								pe.insertAdjacentHTML("beforeend", ve),
								(fe = X.getLineContent(G.originalLineNumber));
						}
						fe.length === 0 && (fe = (0, S.localize)(212, null));
						let me = "";
						switch (G.type) {
							case O.Unchanged:
								G.originalLineNumber === G.modifiedLineNumber
									? (me = (0, S.localize)(213, null, fe, G.originalLineNumber))
									: (me = (0, S.localize)(
											214,
											null,
											fe,
											G.originalLineNumber,
											G.modifiedLineNumber,
										));
								break;
							case O.Added:
								me = (0, S.localize)(215, null, fe, G.modifiedLineNumber);
								break;
							case O.Deleted:
								me = (0, S.localize)(216, null, fe, G.originalLineNumber);
								break;
						}
						return ae.setAttribute("aria-label", me), ae;
					}
					y(G, K, J, W, X) {
						const Y = G.getLineContent(W),
							ie = K.get(g.EditorOption.fontInfo),
							ne = y.$7L.createEmpty(Y, X),
							ee = v.$2sb.isBasicASCII(Y, G.mightContainNonBasicASCII()),
							_ = v.$2sb.containsRTL(Y, ee, G.mightContainRTL());
						return (0, $.$Pub)(
							new $.$Jub(
								ie.isMonospace &&
									!K.get(g.EditorOption.disableMonospaceOptimizations),
								ie.canUseHalfwidthRightwardsArrow,
								Y,
								!1,
								ee,
								_,
								0,
								ne,
								[],
								J,
								0,
								ie.spaceWidth,
								ie.middotWidth,
								ie.wsmiddotWidth,
								K.get(g.EditorOption.stopRenderingLineAfter),
								K.get(g.EditorOption.renderWhitespace),
								K.get(g.EditorOption.renderControlCharacters),
								K.get(g.EditorOption.fontLigatures) !==
									g.EditorFontLigatures.OFF,
								null,
							),
						).html;
					}
				};
				H = Ne([j(5, l.$nM)], H);
				class q {
					constructor(G) {
						this.c = G;
					}
					getOriginalModel() {
						return this.c.original.getModel();
					}
					getOriginalOptions() {
						return this.c.original.getOptions();
					}
					originalReveal(G) {
						this.c.original.revealRange(G),
							this.c.original.setSelection(G),
							this.c.original.focus();
					}
					getModifiedModel() {
						return this.c.modified.getModel();
					}
					getModifiedOptions() {
						return this.c.modified.getOptions();
					}
					modifiedReveal(G) {
						G &&
							(this.c.modified.revealRange(G), this.c.modified.setSelection(G)),
							this.c.modified.focus();
					}
					modifiedSetSelection(G) {
						this.c.modified.setSelection(G);
					}
					modifiedFocus() {
						this.c.modified.focus();
					}
					getModifiedPosition() {
						return this.c.modified.getPosition() ?? void 0;
					}
				}
				e.$byb = q;
			},
		)
