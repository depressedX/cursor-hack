import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/htmlContent.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/observableInternal/derived.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/types.js';
import '../../../observableCodeEditor.js';
import '../diffEditorViewModel.js';
import '../utils.js';
import '../../../../common/config/editorOptions.js';
import '../../../../common/core/lineRange.js';
import '../../../../common/core/position.js';
import '../../../../common/core/range.js';
import '../../../../common/cursorEvents.js';
import '../../../../common/languages.js';
import '../../../../../nls.js';
import '../../../../../platform/instantiation/common/instantiation.js';
define(
			de[1641],
			he([
				1, 0, 7, 182, 14, 94, 3, 77, 319, 26, 28, 542, 954, 370, 38, 196, 48,
				17, 248, 74, 4, 5,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*iconLabels*/,
				w /*codicons*/,
				E /*htmlContent*/,
				C /*lifecycle*/,
				d /*observable*/,
				m /*derived*/,
				r /*themables*/,
				u /*types*/,
				a /*observableCodeEditor*/,
				h /*diffEditorViewModel*/,
				c /*utils*/,
				n /*editorOptions*/,
				g /*lineRange*/,
				p /*position*/,
				o /*range*/,
				f /*cursorEvents*/,
				b /*languages*/,
				s /*nls*/,
				l /*instantiation*/,
) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yyb = void 0);
				let $ = class extends C.$1c {
					static {
						y = this;
					}
					static {
						this.a = (0, d.observableValue)(y, () => ({
							dispose() {},
							getBreadcrumbItems(T, P) {
								return [];
							},
						}));
					}
					static setBreadcrumbsSourceFactory(T) {
						this.a.set(T, void 0);
					}
					get isUpdatingHiddenAreas() {
						return this.c;
					}
					constructor(T, P, k, L) {
						super(),
							(this.f = T),
							(this.g = P),
							(this.j = k),
							(this.n = L),
							(this.b = (0, m.$Yd)(this, (A) => {
								const R = this.f.modifiedModel.read(A),
									O = y.a.read(A);
								return !R || !O ? void 0 : O(R, this.n);
							})),
							(this.c = !1),
							this.D(
								this.f.original.onDidChangeCursorPosition((A) => {
									if (A.reason === f.CursorChangeReason.ContentFlush) return;
									const R = this.g.get();
									(0, d.transaction)((O) => {
										for (const B of this.f.original.getSelections() || [])
											R?.ensureOriginalLineIsVisible(
												B.getStartPosition().lineNumber,
												h.RevealPreference.FromCloserSide,
												O,
											),
												R?.ensureOriginalLineIsVisible(
													B.getEndPosition().lineNumber,
													h.RevealPreference.FromCloserSide,
													O,
												);
									});
								}),
							),
							this.D(
								this.f.modified.onDidChangeCursorPosition((A) => {
									if (A.reason === f.CursorChangeReason.ContentFlush) return;
									const R = this.g.get();
									(0, d.transaction)((O) => {
										for (const B of this.f.modified.getSelections() || [])
											R?.ensureModifiedLineIsVisible(
												B.getStartPosition().lineNumber,
												h.RevealPreference.FromCloserSide,
												O,
											),
												R?.ensureModifiedLineIsVisible(
													B.getEndPosition().lineNumber,
													h.RevealPreference.FromCloserSide,
													O,
												);
									});
								}),
							);
						const D = this.g.map((A, R) => {
							const O = A?.unchangedRegions.read(R) ?? [];
							return O.length === 1 &&
								O[0].modifiedLineNumber === 1 &&
								O[0].lineCount === this.f.modifiedModel.read(R)?.getLineCount()
								? []
								: O;
						});
						this.viewZones = (0, d.derivedWithStore)(this, (A, R) => {
							const O = this.b.read(A);
							if (!O) return { origViewZones: [], modViewZones: [] };
							const B = [],
								U = [],
								z = this.j.renderSideBySide.read(A),
								F = this.j.compactMode.read(A),
								x = D.read(A);
							for (let H = 0; H < x.length; H++) {
								const q = x[H];
								if (
									!q.shouldHideControls(A) &&
									!(F && (H === 0 || H === x.length - 1))
								)
									if (F) {
										{
											const V = (0, d.derived)(
													this,
													(K) =>
														q.getHiddenOriginalRange(K).startLineNumber - 1,
												),
												G = new c.$Ewb(V, 12);
											B.push(G), R.add(new v(this.f.original, G, q, !z));
										}
										{
											const V = (0, d.derived)(
													this,
													(K) =>
														q.getHiddenModifiedRange(K).startLineNumber - 1,
												),
												G = new c.$Ewb(V, 12);
											U.push(G), R.add(new v(this.f.modified, G, q));
										}
									} else {
										{
											const V = (0, d.derived)(
													this,
													(K) =>
														q.getHiddenOriginalRange(K).startLineNumber - 1,
												),
												G = new c.$Ewb(V, 24);
											B.push(G),
												R.add(
													new S(
														this.f.original,
														G,
														q,
														q.originalUnchangedRange,
														!z,
														O,
														(K) =>
															this.g
																.get()
																.ensureModifiedLineIsVisible(
																	K,
																	h.RevealPreference.FromBottom,
																	void 0,
																),
														this.j,
													),
												);
										}
										{
											const V = (0, d.derived)(
													this,
													(K) =>
														q.getHiddenModifiedRange(K).startLineNumber - 1,
												),
												G = new c.$Ewb(V, 24);
											U.push(G),
												R.add(
													new S(
														this.f.modified,
														G,
														q,
														q.modifiedUnchangedRange,
														!1,
														O,
														(K) =>
															this.g
																.get()
																.ensureModifiedLineIsVisible(
																	K,
																	h.RevealPreference.FromBottom,
																	void 0,
																),
														this.j,
													),
												);
										}
									}
							}
							return { origViewZones: B, modViewZones: U };
						});
						const M = {
								description: "unchanged lines",
								className: "diff-unchanged-lines",
								isWholeLine: !0,
							},
							N = {
								description: "Fold Unchanged",
								glyphMarginHoverMessage: new E.$cl(void 0, {
									isTrusted: !0,
									supportThemeIcons: !0,
								}).appendMarkdown((0, s.localize)(230, null)),
								glyphMarginClassName:
									"fold-unchanged " + r.ThemeIcon.asClassName(w.$ak.fold),
								zIndex: 10001,
							};
						this.D(
							(0, c.$xwb)(
								this.f.original,
								(0, d.derived)(this, (A) => {
									const R = D.read(A),
										O = R.map((B) => ({
											range: B.originalUnchangedRange.toInclusiveRange(),
											options: M,
										}));
									for (const B of R)
										B.shouldHideControls(A) &&
											O.push({
												range: o.$iL.fromPositions(
													new p.$hL(B.originalLineNumber, 1),
												),
												options: N,
											});
									return O;
								}),
							),
						),
							this.D(
								(0, c.$xwb)(
									this.f.modified,
									(0, d.derived)(this, (A) => {
										const R = D.read(A),
											O = R.map((B) => ({
												range: B.modifiedUnchangedRange.toInclusiveRange(),
												options: M,
											}));
										for (const B of R)
											B.shouldHideControls(A) &&
												O.push({
													range: g.$rL
														.ofLength(B.modifiedLineNumber, 1)
														.toInclusiveRange(),
													options: N,
												});
										return O;
									}),
								),
							),
							this.D(
								(0, d.autorun)((A) => {
									const R = D.read(A);
									this.c = !0;
									try {
										this.f.original.setHiddenAreas(
											R.map((O) =>
												O.getHiddenOriginalRange(A).toInclusiveRange(),
											).filter(u.$tg),
										),
											this.f.modified.setHiddenAreas(
												R.map((O) =>
													O.getHiddenModifiedRange(A).toInclusiveRange(),
												).filter(u.$tg),
											);
									} finally {
										this.c = !1;
									}
								}),
							),
							this.D(
								this.f.modified.onMouseUp((A) => {
									if (
										!A.event.rightButton &&
										A.target.position &&
										A.target.element?.className.includes("fold-unchanged")
									) {
										const R = A.target.position.lineNumber,
											O = this.g.get();
										if (!O) return;
										const B = O.unchangedRegions
											.get()
											.find((U) => U.modifiedUnchangedRange.includes(R));
										if (!B) return;
										B.collapseAll(void 0),
											A.event.stopPropagation(),
											A.event.preventDefault();
									}
								}),
							),
							this.D(
								this.f.original.onMouseUp((A) => {
									if (
										!A.event.rightButton &&
										A.target.position &&
										A.target.element?.className.includes("fold-unchanged")
									) {
										const R = A.target.position.lineNumber,
											O = this.g.get();
										if (!O) return;
										const B = O.unchangedRegions
											.get()
											.find((U) => U.originalUnchangedRange.includes(R));
										if (!B) return;
										B.collapseAll(void 0),
											A.event.stopPropagation(),
											A.event.preventDefault();
									}
								}),
							);
					}
				};
				(e.$Yyb = $), (e.$Yyb = $ = y = Ne([j(3, l.$Li)], $));
				class v extends c.$Dwb {
					constructor(T, P, k, L = !1) {
						const D = (0, t.h)("div.diff-hidden-lines-widget");
						super(T, P, D.root),
							(this.g = k),
							(this.n = L),
							(this.f = (0, t.h)("div.diff-hidden-lines-compact", [
								(0, t.h)("div.line-left", []),
								(0, t.h)("div.text@text", []),
								(0, t.h)("div.line-right", []),
							])),
							D.root.appendChild(this.f.root),
							this.n && this.f.root.replaceChildren(),
							this.D(
								(0, d.autorun)((M) => {
									if (!this.n) {
										const N = this.g.getHiddenModifiedRange(M).length,
											A = (0, s.localize)(231, null, N);
										this.f.text.innerText = A;
									}
								}),
							);
					}
				}
				class S extends c.$Dwb {
					constructor(T, P, k, L, D, M, N, A) {
						const R = (0, t.h)("div.diff-hidden-lines-widget");
						super(T, P, R.root),
							(this.g = T),
							(this.n = k),
							(this.q = L),
							(this.u = D),
							(this.w = M),
							(this.y = N),
							(this.C = A),
							(this.f = (0, t.h)("div.diff-hidden-lines", [
								(0, t.h)("div.top@top", { title: (0, s.localize)(232, null) }),
								(0, t.h)("div.center@content", { style: { display: "flex" } }, [
									(0, t.h)(
										"div@first",
										{
											style: {
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												flexShrink: "0",
											},
										},
										[
											(0, t.$)(
												"a",
												{
													title: (0, s.localize)(233, null),
													role: "button",
													onclick: () => {
														this.n.showAll(void 0);
													},
												},
												...(0, i.$Sib)("$(unfold)"),
											),
										],
									),
									(0, t.h)("div@others", {
										style: {
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										},
									}),
								]),
								(0, t.h)("div.bottom@bottom", {
									title: (0, s.localize)(234, null),
									role: "button",
								}),
							])),
							R.root.appendChild(this.f.root),
							this.u
								? (0, t.$hhb)(this.f.first)
								: this.D(
										(0, c.$Gwb)(this.f.first, {
											width: (0, a.$Uwb)(this.g).layoutInfoContentLeft,
										}),
									),
							this.D(
								(0, d.autorun)((B) => {
									const U =
										this.n.visibleLineCountTop.read(B) +
											this.n.visibleLineCountBottom.read(B) ===
										this.n.lineCount;
									this.f.bottom.classList.toggle("canMoveTop", !U),
										this.f.bottom.classList.toggle(
											"canMoveBottom",
											this.n.visibleLineCountBottom.read(B) > 0,
										),
										this.f.top.classList.toggle(
											"canMoveTop",
											this.n.visibleLineCountTop.read(B) > 0,
										),
										this.f.top.classList.toggle("canMoveBottom", !U);
									const z = this.n.isDragged.read(B),
										F = this.g.getDomNode();
									F &&
										(F.classList.toggle("draggingUnchangedRegion", !!z),
										z === "top"
											? (F.classList.toggle(
													"canMoveTop",
													this.n.visibleLineCountTop.read(B) > 0,
												),
												F.classList.toggle("canMoveBottom", !U))
											: z === "bottom"
												? (F.classList.toggle("canMoveTop", !U),
													F.classList.toggle(
														"canMoveBottom",
														this.n.visibleLineCountBottom.read(B) > 0,
													))
												: (F.classList.toggle("canMoveTop", !1),
													F.classList.toggle("canMoveBottom", !1)));
								}),
							);
						const O = this.g;
						this.D(
							(0, t.$0fb)(this.f.top, "mousedown", (B) => {
								if (B.button !== 0) return;
								this.f.top.classList.toggle("dragging", !0),
									this.f.root.classList.toggle("dragging", !0),
									B.preventDefault();
								const U = B.clientY;
								let z = !1;
								const F = this.n.visibleLineCountTop.get();
								this.n.isDragged.set("top", void 0);
								const x = (0, t.getWindow)(this.f.top),
									H = (0, t.$0fb)(x, "mousemove", (V) => {
										const K = V.clientY - U;
										z = z || Math.abs(K) > 2;
										const J = Math.round(
												K / O.getOption(n.EditorOption.lineHeight),
											),
											W = Math.max(
												0,
												Math.min(F + J, this.n.getMaxVisibleLineCountTop()),
											);
										this.n.visibleLineCountTop.set(W, void 0);
									}),
									q = (0, t.$0fb)(x, "mouseup", (V) => {
										z ||
											this.n.showMoreAbove(
												this.C.hideUnchangedRegionsRevealLineCount.get(),
												void 0,
											),
											this.f.top.classList.toggle("dragging", !1),
											this.f.root.classList.toggle("dragging", !1),
											this.n.isDragged.set(void 0, void 0),
											H.dispose(),
											q.dispose();
									});
							}),
						),
							this.D(
								(0, t.$0fb)(this.f.bottom, "mousedown", (B) => {
									if (B.button !== 0) return;
									this.f.bottom.classList.toggle("dragging", !0),
										this.f.root.classList.toggle("dragging", !0),
										B.preventDefault();
									const U = B.clientY;
									let z = !1;
									const F = this.n.visibleLineCountBottom.get();
									this.n.isDragged.set("bottom", void 0);
									const x = (0, t.getWindow)(this.f.bottom),
										H = (0, t.$0fb)(x, "mousemove", (V) => {
											const K = V.clientY - U;
											z = z || Math.abs(K) > 2;
											const J = Math.round(
													K / O.getOption(n.EditorOption.lineHeight),
												),
												W = Math.max(
													0,
													Math.min(
														F - J,
														this.n.getMaxVisibleLineCountBottom(),
													),
												),
												X =
													this.q.endLineNumberExclusive >
													O.getModel().getLineCount()
														? O.getContentHeight()
														: O.getTopForLineNumber(
																this.q.endLineNumberExclusive,
															);
											this.n.visibleLineCountBottom.set(W, void 0);
											const Y =
												this.q.endLineNumberExclusive >
												O.getModel().getLineCount()
													? O.getContentHeight()
													: O.getTopForLineNumber(
															this.q.endLineNumberExclusive,
														);
											O.setScrollTop(O.getScrollTop() + (Y - X));
										}),
										q = (0, t.$0fb)(x, "mouseup", (V) => {
											if ((this.n.isDragged.set(void 0, void 0), !z)) {
												const G = O.getTopForLineNumber(
													this.q.endLineNumberExclusive,
												);
												this.n.showMoreBelow(
													this.C.hideUnchangedRegionsRevealLineCount.get(),
													void 0,
												);
												const K = O.getTopForLineNumber(
													this.q.endLineNumberExclusive,
												);
												O.setScrollTop(O.getScrollTop() + (K - G));
											}
											this.f.bottom.classList.toggle("dragging", !1),
												this.f.root.classList.toggle("dragging", !1),
												H.dispose(),
												q.dispose();
										});
								}),
							),
							this.D(
								(0, d.autorun)((B) => {
									const U = [];
									if (!this.u) {
										const z = k.getHiddenModifiedRange(B).length,
											F = (0, s.localize)(235, null, z),
											x = (0, t.$)(
												"span",
												{ title: (0, s.localize)(236, null) },
												F,
											);
										x.classList.add("diff-hidden-lines-text"),
											x.addEventListener("dblclick", (V) => {
												V.button === 0 &&
													(V.preventDefault(), this.n.showAll(void 0));
											}),
											U.push(x);
										const H = this.n.getHiddenModifiedRange(B),
											q = this.w.getBreadcrumbItems(H, B);
										if (q.length > 0) {
											U.push((0, t.$)("span", void 0, "\xA0\xA0|\xA0\xA0"));
											for (let V = 0; V < q.length; V++) {
												const G = q[V],
													K = b.SymbolKinds.toIcon(G.kind),
													J = (0, t.h)(
														"div.breadcrumb-item",
														{
															style: { display: "flex", alignItems: "center" },
														},
														[
															(0, i.$Tib)(K),
															"\xA0",
															G.name,
															...(V === q.length - 1
																? []
																: [(0, i.$Tib)(w.$ak.chevronRight)]),
														],
													).root;
												U.push(J),
													(J.onclick = () => {
														this.y(G.startLineNumber);
													});
											}
										}
									}
									(0, t.$hhb)(this.f.others, ...U);
								}),
							);
					}
				}
			},
		),
		