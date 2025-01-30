import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/arrays.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observable.js';
import '../../../../../../base/common/themables.js';
import '../../../../../../base/common/types.js';
import '../../../../config/domFontInfo.js';
import '../../registrations.contribution.js';
import '../../diffEditorViewModel.js';
import './inlineDiffDeletedCodeMargin.js';
import './renderLines.js';
import '../../utils.js';
import '../../../../../common/config/editorOptions.js';
import '../../../../../common/core/lineRange.js';
import '../../../../../common/core/position.js';
import '../../../../../common/editorCommon.js';
import '../../../../../common/tokenizationTextModelPart.js';
import '../../../../../common/viewModel.js';
import '../../../../../../platform/clipboard/common/clipboardService.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../common/core/range.js';
define(
			de[1216],
			he([
				1, 0, 7, 24, 15, 14, 3, 77, 26, 28, 321, 608, 954, 2758, 1606, 370, 38,
				196, 48, 98, 916, 290, 121, 49, 17,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*arrays*/,
				w /*async*/,
				E /*codicons*/,
				C /*lifecycle*/,
				d /*observable*/,
				m /*themables*/,
				r /*types*/,
				u /*domFontInfo*/,
				a /*registrations.contribution*/,
				h /*diffEditorViewModel*/,
				c /*inlineDiffDeletedCodeMargin*/,
				n /*renderLines*/,
				g /*utils*/,
				p /*editorOptions*/,
				o /*lineRange*/,
				f /*position*/,
				b /*editorCommon*/,
				s /*tokenizationTextModelPart*/,
				l /*viewModel*/,
				y /*clipboardService*/,
				$ /*contextView*/,
				v /*range*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3xb = void 0),
					(e.$4xb = P);
				let S = class extends C.$1c {
					constructor(D, M, N, A, R, O, B, U, z, F) {
						super(),
							(this.t = D),
							(this.u = M),
							(this.y = N),
							(this.z = A),
							(this.C = R),
							(this.F = O),
							(this.G = B),
							(this.H = U),
							(this.I = z),
							(this.J = F),
							(this.b = (0, d.observableValue)(this, 0)),
							(this.g = (0, d.observableValue)(this, 0)),
							(this.h = (0, g.$Bwb)(this.t, this.g, this.B)),
							(this.j = (0, d.observableValue)(this, 0)),
							(this.q = (0, d.observableValue)(this, 0)),
							(this.s = (0, g.$Bwb)(this.t, this.q, this.B));
						const x = (0, d.observableValue)("invalidateAlignmentsState", 0),
							H = this.D(
								new w.$Yh(() => {
									x.set(x.get() + 1, void 0);
								}, 0),
							);
						this.D(
							this.u.original.onDidChangeViewZones((X) => {
								this.F() || H.schedule();
							}),
						),
							this.D(
								this.u.modified.onDidChangeViewZones((X) => {
									this.F() || H.schedule();
								}),
							),
							this.D(
								this.u.original.onDidChangeConfiguration((X) => {
									(X.hasChanged(p.EditorOption.wrappingInfo) ||
										X.hasChanged(p.EditorOption.lineHeight)) &&
										H.schedule();
								}),
							),
							this.D(
								this.u.modified.onDidChangeConfiguration((X) => {
									(X.hasChanged(p.EditorOption.wrappingInfo) ||
										X.hasChanged(p.EditorOption.lineHeight)) &&
										H.schedule();
								}),
							);
						const q = this.y
								.map((X) =>
									X
										? (0, d.observableFromEvent)(
												this,
												X.model.original.onDidChangeTokens,
												() =>
													X.model.original.tokenization
														.backgroundTokenizationState ===
													s.BackgroundTokenizationState.Completed,
											)
										: void 0,
								)
								.map((X, Y) => X?.read(Y)),
							V = (0, d.derived)((X) => {
								const Y = this.y.read(X),
									ie = Y?.diff.read(X);
								if (!Y || !ie) return null;
								x.read(X);
								const ee = this.z.renderSideBySide.read(X);
								return I(
									this.u.original,
									this.u.modified,
									ie.mappings,
									this.G,
									this.H,
									ee,
								);
							}),
							G = (0, d.derived)((X) => {
								const Y = this.y.read(X)?.movedTextToCompare.read(X);
								if (!Y) return null;
								x.read(X);
								const ie = Y.changes.map((ne) => new h.$9xb(ne));
								return I(
									this.u.original,
									this.u.modified,
									ie,
									this.G,
									this.H,
									!0,
								);
							});
						function K() {
							const X = document.createElement("div");
							return (X.className = "diagonal-fill"), X;
						}
						const J = this.D(new C.$Zc());
						this.viewZones = (0, d.derivedWithStore)(this, (X, Y) => {
							J.clear();
							const ie = V.read(X) || [],
								ne = [],
								ee = [],
								_ = this.j.read(X);
							_ > 0 &&
								ee.push({
									afterLineNumber: 0,
									domNode: document.createElement("div"),
									heightInPx: _,
									showInHiddenAreas: !0,
									suppressMouseDown: !0,
								});
							const te = this.b.read(X);
							te > 0 &&
								ne.push({
									afterLineNumber: 0,
									domNode: document.createElement("div"),
									heightInPx: te,
									showInHiddenAreas: !0,
									suppressMouseDown: !0,
								});
							const Q = this.z.renderSideBySide.read(X),
								Z = Q
									? void 0
									: this.u.modified._getViewModel()?.createLineBreaksComputer();
							if (Z) {
								const ye = this.u.original.getModel();
								for (const ue of ie)
									if (ue.diff)
										for (
											let fe = ue.originalRange.startLineNumber;
											fe < ue.originalRange.endLineNumberExclusive;
											fe++
										) {
											if (fe > ye.getLineCount()) return { orig: ne, mod: ee };
											Z?.addRequest(ye.getLineContent(fe), null, null);
										}
							}
							const se = Z?.finalize() ?? [];
							let re = 0;
							const le = this.u.modified.getOption(p.EditorOption.lineHeight),
								oe = this.y.read(X)?.movedTextToCompare.read(X),
								ae =
									this.u.original.getModel()?.mightContainNonBasicASCII() ?? !1,
								pe = this.u.original.getModel()?.mightContainRTL() ?? !1,
								$e = n.$2xb.fromEditor(this.u.modified);
							for (const ye of ie)
								if (
									ye.diff &&
									!Q &&
									(!this.z.useTrueInlineDiffRendering.read(X) || !P(ye.diff))
								) {
									if (!ye.originalRange.isEmpty) {
										q.read(X);
										const fe = document.createElement("div");
										fe.classList.add(
											"view-lines",
											"line-delete",
											"monaco-mouse-cursor-text",
										);
										const me = this.u.original.getModel();
										if (
											ye.originalRange.endLineNumberExclusive - 1 >
											me.getLineCount()
										)
											return { orig: ne, mod: ee };
										const ve = new n.$1xb(
												ye.originalRange.mapToLineArray((Fe) =>
													me.tokenization.getLineTokens(Fe),
												),
												ye.originalRange.mapToLineArray((Fe) => se[re++]),
												ae,
												pe,
											),
											ge = [];
										for (const Fe of ye.diff.innerChanges || [])
											ge.push(
												new l.$3sb(
													Fe.originalRange.delta(
														-(ye.diff.original.startLineNumber - 1),
													),
													a.$Sxb.className,
													l.InlineDecorationType.Regular,
												),
											);
										const be = (0, n.$Zxb)(ve, $e, ge, fe),
											Ce = document.createElement("div");
										if (
											((Ce.className = "inline-deleted-margin-view-zone"),
											(0, u.$jsb)(Ce, $e.fontInfo),
											this.z.renderIndicators.read(X))
										)
											for (let Fe = 0; Fe < be.heightInLines; Fe++) {
												const Oe = document.createElement("div");
												(Oe.className = `delete-sign ${m.ThemeIcon.asClassName(a.$Kxb)}`),
													Oe.setAttribute(
														"style",
														`position:absolute;top:${Fe * le}px;width:${$e.lineDecorationsWidth}px;height:${le}px;right:0;`,
													),
													Ce.appendChild(Oe);
											}
										let Le;
										J.add(
											new c.$Yxb(
												() => (0, r.$wg)(Le),
												Ce,
												this.u.modified,
												ye.diff,
												this.C,
												be.viewLineCounts,
												this.u.original.getModel(),
												this.J,
												this.I,
											),
										);
										for (let Fe = 0; Fe < be.viewLineCounts.length; Fe++) {
											const Oe = be.viewLineCounts[Fe];
											Oe > 1 &&
												ne.push({
													afterLineNumber:
														ye.originalRange.startLineNumber + Fe,
													domNode: K(),
													heightInPx: (Oe - 1) * le,
													showInHiddenAreas: !0,
													suppressMouseDown: !0,
												});
										}
										ee.push({
											afterLineNumber: ye.modifiedRange.startLineNumber - 1,
											domNode: fe,
											heightInPx: be.heightInLines * le,
											minWidthInPx: be.minWidthInPx,
											marginDomNode: Ce,
											setZoneId(Fe) {
												Le = Fe;
											},
											showInHiddenAreas: !0,
											suppressMouseDown: !0,
										});
									}
									const ue = document.createElement("div");
									(ue.className = "gutter-delete"),
										ne.push({
											afterLineNumber:
												ye.originalRange.endLineNumberExclusive - 1,
											domNode: K(),
											heightInPx: ye.modifiedHeightInPx,
											marginDomNode: ue,
											showInHiddenAreas: !0,
											suppressMouseDown: !0,
										});
								} else {
									const ue = ye.modifiedHeightInPx - ye.originalHeightInPx;
									if (ue > 0) {
										if (
											oe?.lineRangeMapping.original
												.delta(-1)
												.deltaLength(2)
												.contains(ye.originalRange.endLineNumberExclusive - 1)
										)
											continue;
										ne.push({
											afterLineNumber:
												ye.originalRange.endLineNumberExclusive - 1,
											domNode: K(),
											heightInPx: ue,
											showInHiddenAreas: !0,
											suppressMouseDown: !0,
										});
									} else {
										let fe = function () {
											const ve = document.createElement("div");
											return (
												(ve.className =
													"arrow-revert-change " +
													m.ThemeIcon.asClassName(E.$ak.arrowRight)),
												Y.add(
													(0, t.$0fb)(ve, "mousedown", (ge) =>
														ge.stopPropagation(),
													),
												),
												Y.add(
													(0, t.$0fb)(ve, "click", (ge) => {
														ge.stopPropagation(), R.revert(ye.diff);
													}),
												),
												(0, t.$)("div", {}, ve)
											);
										};
										if (
											oe?.lineRangeMapping.modified
												.delta(-1)
												.deltaLength(2)
												.contains(ye.modifiedRange.endLineNumberExclusive - 1)
										)
											continue;
										let me;
										ye.diff &&
											ye.diff.modified.isEmpty &&
											this.z.shouldRenderOldRevertArrows.read(X) &&
											(me = fe()),
											ee.push({
												afterLineNumber:
													ye.modifiedRange.endLineNumberExclusive - 1,
												domNode: K(),
												heightInPx: -ue,
												marginDomNode: me,
												showInHiddenAreas: !0,
												suppressMouseDown: !0,
											});
									}
								}
							for (const ye of G.read(X) ?? []) {
								if (
									!oe?.lineRangeMapping.original.intersect(ye.originalRange) ||
									!oe?.lineRangeMapping.modified.intersect(ye.modifiedRange)
								)
									continue;
								const ue = ye.modifiedHeightInPx - ye.originalHeightInPx;
								ue > 0
									? ne.push({
											afterLineNumber:
												ye.originalRange.endLineNumberExclusive - 1,
											domNode: K(),
											heightInPx: ue,
											showInHiddenAreas: !0,
											suppressMouseDown: !0,
										})
									: ee.push({
											afterLineNumber:
												ye.modifiedRange.endLineNumberExclusive - 1,
											domNode: K(),
											heightInPx: -ue,
											showInHiddenAreas: !0,
											suppressMouseDown: !0,
										});
							}
							return { orig: ne, mod: ee };
						});
						let W = !1;
						this.D(
							this.u.original.onDidScrollChange((X) => {
								X.scrollLeftChanged &&
									!W &&
									((W = !0),
									this.u.modified.setScrollLeft(X.scrollLeft),
									(W = !1));
							}),
						),
							this.D(
								this.u.modified.onDidScrollChange((X) => {
									X.scrollLeftChanged &&
										!W &&
										((W = !0),
										this.u.original.setScrollLeft(X.scrollLeft),
										(W = !1));
								}),
							),
							(this.f = (0, d.observableFromEvent)(
								this.u.original.onDidScrollChange,
								() => this.u.original.getScrollTop(),
							)),
							(this.n = (0, d.observableFromEvent)(
								this.u.modified.onDidScrollChange,
								() => this.u.modified.getScrollTop(),
							)),
							this.D(
								(0, d.autorun)((X) => {
									const Y =
										this.f.read(X) -
										(this.h.get() - this.s.read(X)) -
										(this.b.get() - this.j.read(X));
									Y !== this.u.modified.getScrollTop() &&
										this.u.modified.setScrollTop(Y, b.ScrollType.Immediate);
								}),
							),
							this.D(
								(0, d.autorun)((X) => {
									const Y =
										this.n.read(X) -
										(this.s.get() - this.h.read(X)) -
										(this.j.get() - this.b.read(X));
									Y !== this.u.original.getScrollTop() &&
										this.u.original.setScrollTop(Y, b.ScrollType.Immediate);
								}),
							),
							this.D(
								(0, d.autorun)((X) => {
									const Y = this.y.read(X)?.movedTextToCompare.read(X);
									let ie = 0;
									if (Y) {
										const ne =
											this.u.original.getTopForLineNumber(
												Y.lineRangeMapping.original.startLineNumber,
												!0,
											) - this.b.get();
										ie =
											this.u.modified.getTopForLineNumber(
												Y.lineRangeMapping.modified.startLineNumber,
												!0,
											) -
											this.j.get() -
											ne;
									}
									ie > 0
										? (this.j.set(0, void 0), this.b.set(ie, void 0))
										: ie < 0
											? (this.j.set(-ie, void 0), this.b.set(0, void 0))
											: setTimeout(() => {
													this.j.set(0, void 0), this.b.set(0, void 0);
												}, 400),
										this.u.modified.hasTextFocus()
											? this.g.set(this.q.get() - ie, void 0, !0)
											: this.q.set(this.g.get() + ie, void 0, !0);
								}),
							);
					}
				};
				(e.$3xb = S), (e.$3xb = S = Ne([j(8, y.$Vxb), j(9, $.$Xxb)], S));
				function I(L, D, M, N, A, R) {
					const O = new i.$cc(T(L, N)),
						B = new i.$cc(T(D, A)),
						U = L.getOption(p.EditorOption.lineHeight),
						z = D.getOption(p.EditorOption.lineHeight),
						F = [];
					let x = 0,
						H = 0;
					function q(V, G) {
						for (;;) {
							let K = O.peek(),
								J = B.peek();
							if (
								(K && K.lineNumber >= V && (K = void 0),
								J && J.lineNumber >= G && (J = void 0),
								!K && !J)
							)
								break;
							const W = K ? K.lineNumber - x : Number.MAX_VALUE,
								X = J ? J.lineNumber - H : Number.MAX_VALUE;
							W < X
								? (O.dequeue(),
									(J = { lineNumber: K.lineNumber - x + H, heightInPx: 0 }))
								: W > X
									? (B.dequeue(),
										(K = { lineNumber: J.lineNumber - H + x, heightInPx: 0 }))
									: (O.dequeue(), B.dequeue()),
								F.push({
									originalRange: o.$rL.ofLength(K.lineNumber, 1),
									modifiedRange: o.$rL.ofLength(J.lineNumber, 1),
									originalHeightInPx: U + K.heightInPx,
									modifiedHeightInPx: z + J.heightInPx,
									diff: void 0,
								});
						}
					}
					for (const V of M) {
						let X = function (Y, ie, ne = !1) {
							if (Y < W || ie < J) return;
							if (K) K = !1;
							else if (!ne && (Y === W || ie === J)) return;
							const ee = new o.$rL(W, Y),
								_ = new o.$rL(J, ie);
							if (ee.isEmpty && _.isEmpty) return;
							const te =
									O.takeWhile((Z) => Z.lineNumber < Y)?.reduce(
										(Z, se) => Z + se.heightInPx,
										0,
									) ?? 0,
								Q =
									B.takeWhile((Z) => Z.lineNumber < ie)?.reduce(
										(Z, se) => Z + se.heightInPx,
										0,
									) ?? 0;
							F.push({
								originalRange: ee,
								modifiedRange: _,
								originalHeightInPx: ee.length * U + te,
								modifiedHeightInPx: _.length * z + Q,
								diff: V.lineRangeMapping,
							}),
								(W = Y),
								(J = ie);
						};
						const G = V.lineRangeMapping;
						q(G.original.startLineNumber, G.modified.startLineNumber);
						let K = !0,
							J = G.modified.startLineNumber,
							W = G.original.startLineNumber;
						if (R)
							for (const Y of G.innerChanges || []) {
								Y.originalRange.startColumn > 1 &&
									Y.modifiedRange.startColumn > 1 &&
									X(
										Y.originalRange.startLineNumber,
										Y.modifiedRange.startLineNumber,
									);
								const ie = L.getModel(),
									ne =
										Y.originalRange.endLineNumber <= ie.getLineCount()
											? ie.getLineMaxColumn(Y.originalRange.endLineNumber)
											: Number.MAX_SAFE_INTEGER;
								Y.originalRange.endColumn < ne &&
									X(
										Y.originalRange.endLineNumber,
										Y.modifiedRange.endLineNumber,
									);
							}
						X(
							G.original.endLineNumberExclusive,
							G.modified.endLineNumberExclusive,
							!0,
						),
							(x = G.original.endLineNumberExclusive),
							(H = G.modified.endLineNumberExclusive);
					}
					return q(Number.MAX_VALUE, Number.MAX_VALUE), F;
				}
				function T(L, D) {
					const M = [],
						N = [],
						A = L.getOption(p.EditorOption.wrappingInfo).wrappingColumn !== -1,
						R = L._getViewModel().coordinatesConverter,
						O = L.getOption(p.EditorOption.lineHeight);
					if (A)
						for (let U = 1; U <= L.getModel().getLineCount(); U++) {
							const z = R.getModelLineViewLineCount(U);
							z > 1 && N.push({ lineNumber: U, heightInPx: O * (z - 1) });
						}
					for (const U of L.getWhitespaces()) {
						if (D.has(U.id)) continue;
						const z =
							U.afterLineNumber === 0
								? 0
								: R.convertViewPositionToModelPosition(
										new f.$hL(U.afterLineNumber, 1),
									).lineNumber;
						M.push({ lineNumber: z, heightInPx: U.height });
					}
					return (0, g.$wwb)(
						M,
						N,
						(U) => U.lineNumber,
						(U, z) => ({
							lineNumber: U.lineNumber,
							heightInPx: U.heightInPx + z.heightInPx,
						}),
					);
				}
				function P(L) {
					return L.innerChanges
						? L.innerChanges.every(
								(D) =>
									(k(D.modifiedRange) && k(D.originalRange)) ||
									D.originalRange.equalsRange(new v.$iL(1, 1, 1, 1)),
							)
						: !1;
				}
				function k(L) {
					return L.startLineNumber === L.endLineNumber;
				}
			},
		),
		