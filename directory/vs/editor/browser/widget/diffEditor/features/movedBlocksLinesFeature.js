import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../../base/common/actions.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/arraysFind.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/themables.js';
import '../utils.js';
import '../../../../common/core/offsetRange.js';
import '../../../../../nls.js';
define(
			de[1587],
			he([1, 0, 7, 105, 50, 24, 214, 14, 3, 77, 26, 370, 289, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*actionbar*/,
 w /*actions*/,
 E /*arrays*/,
 C /*arraysFind*/,
 d /*codicons*/,
 m /*lifecycle*/,
 r /*observable*/,
 u /*themables*/,
 a /*utils*/,
 h /*offsetRange*/,
 c /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cyb = void 0);
				class n extends m.$1c {
					static {
						this.movedCodeBlockPadding = 4;
					}
					constructor(f, b, s, l, y) {
						super(),
							(this.n = f),
							(this.q = b),
							(this.r = s),
							(this.s = l),
							(this.t = y),
							(this.c = (0, r.observableFromEvent)(
								this,
								this.t.original.onDidScrollChange,
								() => this.t.original.getScrollTop(),
							)),
							(this.f = (0, r.observableFromEvent)(
								this,
								this.t.modified.onDidScrollChange,
								() => this.t.modified.getScrollTop(),
							)),
							(this.j = (0, r.observableSignalFromEvent)(
								"onDidChangeViewZones",
								this.t.modified.onDidChangeViewZones,
							)),
							(this.width = (0, r.observableValue)(this, 0)),
							(this.u = (0, r.observableSignalFromEvent)(
								"modified.onDidChangeViewZones",
								this.t.modified.onDidChangeViewZones,
							)),
							(this.w = (0, r.observableSignalFromEvent)(
								"original.onDidChangeViewZones",
								this.t.original.onDidChangeViewZones,
							)),
							(this.y = (0, r.derivedWithStore)(this, (T, P) => {
								this.a.replaceChildren();
								const k = this.q.read(T),
									L = k?.diff.read(T)?.movedTexts;
								if (!L || L.length === 0) {
									this.width.set(0, void 0);
									return;
								}
								this.j.read(T);
								const D = this.r.read(T),
									M = this.s.read(T);
								if (!D || !M) {
									this.width.set(0, void 0);
									return;
								}
								this.u.read(T), this.w.read(T);
								const N = L.map((F) => {
									function x(Y, ie) {
										const ne = ie.getTopForLineNumber(Y.startLineNumber, !0),
											ee = ie.getTopForLineNumber(Y.endLineNumberExclusive, !0);
										return (ne + ee) / 2;
									}
									const H = x(F.lineRangeMapping.original, this.t.original),
										q = this.c.read(T),
										V = x(F.lineRangeMapping.modified, this.t.modified),
										G = this.f.read(T),
										K = H - q,
										J = V - G,
										W = Math.min(H, V),
										X = Math.max(H, V);
									return {
										range: new h.$pL(W, X),
										from: K,
										to: J,
										fromWithoutScroll: H,
										toWithoutScroll: V,
										move: F,
									};
								});
								N.sort(
									(0, E.$$b)(
										(0, E.$0b)(
											(F) => F.fromWithoutScroll > F.toWithoutScroll,
											E.$ac,
										),
										(0, E.$0b)(
											(F) =>
												F.fromWithoutScroll > F.toWithoutScroll
													? F.fromWithoutScroll
													: -F.toWithoutScroll,
											E.$_b,
										),
									),
								);
								const A = g.compute(N.map((F) => F.range)),
									R = 10,
									O = D.verticalScrollbarWidth,
									B = (A.getTrackCount() - 1) * 10 + R * 2,
									U = O + B + (M.contentLeft - n.movedCodeBlockPadding);
								let z = 0;
								for (const F of N) {
									const x = A.getTrack(z),
										H = O + R + x * 10,
										q = 15,
										V = 15,
										G = U,
										K = M.glyphMarginWidth + M.lineNumbersWidth,
										J = 18,
										W = document.createElementNS(
											"http://www.w3.org/2000/svg",
											"rect",
										);
									W.classList.add("arrow-rectangle"),
										W.setAttribute("x", `${G - K}`),
										W.setAttribute("y", `${F.to - J / 2}`),
										W.setAttribute("width", `${K}`),
										W.setAttribute("height", `${J}`),
										this.a.appendChild(W);
									const X = document.createElementNS(
											"http://www.w3.org/2000/svg",
											"g",
										),
										Y = document.createElementNS(
											"http://www.w3.org/2000/svg",
											"path",
										);
									Y.setAttribute(
										"d",
										`M 0 ${F.from} L ${H} ${F.from} L ${H} ${F.to} L ${G - V} ${F.to}`,
									),
										Y.setAttribute("fill", "none"),
										X.appendChild(Y);
									const ie = document.createElementNS(
										"http://www.w3.org/2000/svg",
										"polygon",
									);
									ie.classList.add("arrow"),
										P.add(
											(0, r.autorun)((ne) => {
												Y.classList.toggle(
													"currentMove",
													F.move === k.activeMovedText.read(ne),
												),
													ie.classList.toggle(
														"currentMove",
														F.move === k.activeMovedText.read(ne),
													);
											}),
										),
										ie.setAttribute(
											"points",
											`${G - V},${F.to - q / 2} ${G},${F.to} ${G - V},${F.to + q / 2}`,
										),
										X.appendChild(ie),
										this.a.appendChild(X),
										z++;
								}
								this.width.set(B, void 0);
							})),
							(this.a = document.createElementNS(
								"http://www.w3.org/2000/svg",
								"svg",
							)),
							this.a.setAttribute("class", "moved-blocks-lines"),
							this.n.appendChild(this.a),
							this.D((0, m.$Yc)(() => this.a.remove())),
							this.D(
								(0, r.autorun)((T) => {
									const P = this.r.read(T),
										k = this.s.read(T);
									!P ||
										!k ||
										((this.a.style.left = `${P.width - P.verticalScrollbarWidth}px`),
										(this.a.style.height = `${P.height}px`),
										(this.a.style.width = `${P.verticalScrollbarWidth + P.contentLeft - n.movedCodeBlockPadding + this.width.read(T)}px`));
								}),
							),
							this.D((0, r.recomputeInitiallyAndOnChange)(this.y));
						const $ = (0, r.derived)((T) => {
							const k = this.q.read(T)?.diff.read(T);
							return k
								? k.movedTexts.map((L) => ({
										move: L,
										original: new a.$Ewb(
											(0, r.constObservable)(
												L.lineRangeMapping.original.startLineNumber - 1,
											),
											18,
										),
										modified: new a.$Ewb(
											(0, r.constObservable)(
												L.lineRangeMapping.modified.startLineNumber - 1,
											),
											18,
										),
									}))
								: [];
						});
						this.D(
							(0, a.$Hwb)(
								this.t.original,
								$.map((T) => T.map((P) => P.original)),
							),
						),
							this.D(
								(0, a.$Hwb)(
									this.t.modified,
									$.map((T) => T.map((P) => P.modified)),
								),
							),
							this.D(
								(0, r.autorunWithStore)((T, P) => {
									const k = $.read(T);
									for (const L of k)
										P.add(
											new p(
												this.t.original,
												L.original,
												L.move,
												"original",
												this.q.get(),
											),
										),
											P.add(
												new p(
													this.t.modified,
													L.modified,
													L.move,
													"modified",
													this.q.get(),
												),
											);
								}),
							);
						const v = (0, r.observableSignalFromEvent)(
								"original.onDidFocusEditorWidget",
								(T) =>
									this.t.original.onDidFocusEditorWidget(() =>
										setTimeout(() => T(void 0), 0),
									),
							),
							S = (0, r.observableSignalFromEvent)(
								"modified.onDidFocusEditorWidget",
								(T) =>
									this.t.modified.onDidFocusEditorWidget(() =>
										setTimeout(() => T(void 0), 0),
									),
							);
						let I = "modified";
						this.D(
							(0, r.autorunHandleChanges)(
								{
									createEmptyChangeSummary: () => {},
									handleChange: (T, P) => (
										T.didChange(v) && (I = "original"),
										T.didChange(S) && (I = "modified"),
										!0
									),
								},
								(T) => {
									v.read(T), S.read(T);
									const P = this.q.read(T);
									if (!P) return;
									const k = P.diff.read(T);
									let L;
									if (k && I === "original") {
										const D = this.t.originalCursor.read(T);
										D &&
											(L = k.movedTexts.find((M) =>
												M.lineRangeMapping.original.contains(D.lineNumber),
											));
									}
									if (k && I === "modified") {
										const D = this.t.modifiedCursor.read(T);
										D &&
											(L = k.movedTexts.find((M) =>
												M.lineRangeMapping.modified.contains(D.lineNumber),
											));
									}
									L !== P.movedTextToCompare.get() &&
										P.movedTextToCompare.set(void 0, void 0),
										P.setActiveMovedText(L);
								},
							),
						);
					}
				}
				e.$cyb = n;
				class g {
					static compute(f) {
						const b = [],
							s = [];
						for (const l of f) {
							let y = b.findIndex(($) => !$.intersectsStrict(l));
							y === -1 &&
								(b.length >= 6
									? (y = (0, C.$ub)(
											b,
											(0, E.$0b)((v) => v.intersectWithRangeLength(l), E.$_b),
										))
									: ((y = b.length), b.push(new h.$qL()))),
								b[y].addRange(l),
								s.push(y);
						}
						return new g(b.length, s);
					}
					constructor(f, b) {
						(this.a = f), (this.c = b);
					}
					getTrack(f) {
						return this.c[f];
					}
					getTrackCount() {
						return this.a;
					}
				}
				class p extends a.$Dwb {
					constructor(f, b, s, l, y) {
						const $ = (0, t.h)("div.diff-hidden-lines-widget");
						super(f, b, $.root),
							(this.n = f),
							(this.q = s),
							(this.r = l),
							(this.u = y),
							(this.f = (0, t.h)(
								"div.diff-moved-code-block",
								{ style: { marginRight: "4px" } },
								[
									(0, t.h)("div.text-content@textContent"),
									(0, t.h)("div.action-bar@actionBar"),
								],
							)),
							$.root.appendChild(this.f.root);
						const v = (0, r.observableFromEvent)(this.n.onDidLayoutChange, () =>
							this.n.getLayoutInfo(),
						);
						this.D(
							(0, a.$Gwb)(this.f.root, {
								paddingRight: v.map((k) => k.verticalScrollbarWidth),
							}),
						);
						let S;
						s.changes.length > 0
							? (S =
									this.r === "original"
										? (0, c.localize)(
												237,
												null,
												this.q.lineRangeMapping.modified.startLineNumber,
												this.q.lineRangeMapping.modified
													.endLineNumberExclusive - 1,
											)
										: (0, c.localize)(
												238,
												null,
												this.q.lineRangeMapping.original.startLineNumber,
												this.q.lineRangeMapping.original
													.endLineNumberExclusive - 1,
											))
							: (S =
									this.r === "original"
										? (0, c.localize)(
												239,
												null,
												this.q.lineRangeMapping.modified.startLineNumber,
												this.q.lineRangeMapping.modified
													.endLineNumberExclusive - 1,
											)
										: (0, c.localize)(
												240,
												null,
												this.q.lineRangeMapping.original.startLineNumber,
												this.q.lineRangeMapping.original
													.endLineNumberExclusive - 1,
											));
						const I = this.D(
								new i.$eib(this.f.actionBar, { highlightToggledItems: !0 }),
							),
							T = new w.$rj("", S, "", !1);
						I.push(T, { icon: !1, label: !0 });
						const P = new w.$rj(
							"",
							"Compare",
							u.ThemeIcon.asClassName(d.$ak.compareChanges),
							!0,
							() => {
								this.n.focus(),
									this.u.movedTextToCompare.set(
										this.u.movedTextToCompare.get() === s ? void 0 : this.q,
										void 0,
									);
							},
						);
						this.D(
							(0, r.autorun)((k) => {
								const L = this.u.movedTextToCompare.read(k) === s;
								P.checked = L;
							}),
						),
							I.push(P, { icon: !1, label: !0 });
					}
				}
			},
		)
