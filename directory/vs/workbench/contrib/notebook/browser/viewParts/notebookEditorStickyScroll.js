import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/touch.js';
import '../../../../../base/browser/mouseEvent.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../notebookBrowser.js';
import '../../common/notebookCommon.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/themables.js';
import '../../../../../editor/contrib/folding/browser/foldingDecorations.js';
import '../controller/foldingController.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../viewModel/notebookOutlineDataSourceFactory.js';
define(
			de[3521],
			he([
				1, 0, 7, 159, 168, 6, 3, 11, 49, 108, 70, 15, 26, 1219, 1031, 5, 1306,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$T4b = e.$S4b = void 0),
					(e.$U4b = l),
					(t = mt(t));
				class f extends C.$1c {
					constructor($, v, S, I, T) {
						super(),
							(this.element = $),
							(this.foldingIcon = v),
							(this.header = S),
							(this.entry = I),
							(this.notebookEditor = T),
							this.D(
								t.$0fb(this.header, t.$$gb.CLICK || i.EventType.Tap, () => {
									this.b();
								}),
							),
							this.D(
								t.$0fb(
									this.foldingIcon.domNode,
									t.$$gb.CLICK || i.EventType.Tap,
									() => {
										if (this.entry.cell.cellKind === u.CellKind.Markup) {
											const P = this.entry.cell.foldingState;
											this.a(P);
										}
									},
								),
							);
					}
					a($) {
						const v = this.notebookEditor.getContribution(n.$83b.id),
							S = this.entry.index,
							I = this.entry.level,
							T =
								$ === r.CellFoldingState.Collapsed
									? r.CellFoldingState.Expanded
									: r.CellFoldingState.Collapsed;
						v.setFoldingStateDown(S, T, I), this.b();
					}
					b() {
						this.notebookEditor.focusNotebookCell(this.entry.cell, "container");
						const $ = this.notebookEditor.getAbsoluteTopOfElement(
								this.entry.cell,
							),
							v = f.getParentCount(this.entry);
						this.notebookEditor.setScrollTop($ - (v + 1.1) * 22);
					}
					static getParentCount($) {
						let v = 0;
						for (; $.parent; ) v++, ($ = $.parent);
						return v;
					}
				}
				e.$S4b = f;
				class b {
					constructor($, v) {
						(this.isCollapsed = $),
							(this.dimension = v),
							(this.domNode = document.createElement("div")),
							(this.domNode.style.width = `${v}px`),
							(this.domNode.style.height = `${v}px`),
							(this.domNode.className = h.ThemeIcon.asClassName(
								$ ? c.$TNb : c.$SNb,
							));
					}
					setVisible($) {
						(this.domNode.style.cursor = $ ? "pointer" : "default"),
							(this.domNode.style.opacity = $ ? "1" : "0");
					}
				}
				let s = (o = class extends C.$1c {
					getDomNode() {
						return this.m;
					}
					getCurrentStickyHeight() {
						let $ = 0;
						return (
							this.b.forEach((v) => {
								v.rendered && ($ += 22);
							}),
							$
						);
					}
					h($) {
						this.b = $;
					}
					j($, v) {
						if ($.size !== v.size) return !1;
						for (const [S, I] of $) {
							const T = v.get(S);
							if (!T || I.rendered !== T.rendered) return !1;
						}
						return !0;
					}
					constructor($, v, S, I, T, P) {
						super(),
							(this.m = $),
							(this.n = v),
							(this.q = S),
							(this.r = I),
							(this.s = T),
							(this.t = P),
							(this.a = new C.$Zc()),
							(this.b = new Map()),
							(this.c = this.D(new E.$re())),
							(this.onDidChangeNotebookStickyScroll = this.c.event),
							(this.g = this.D(new C.$Zc())),
							this.n.notebookOptions.getDisplayOptions().stickyScrollEnabled &&
								this.y(),
							this.D(
								this.n.notebookOptions.onDidChangeOptions((k) => {
									(k.stickyScrollEnabled || k.stickyScrollMode) && this.w(k);
								}),
							),
							this.D(
								t.$0fb(this.m, t.$$gb.CONTEXT_MENU, async (k) => {
									this.u(k);
								}),
							);
					}
					u($) {
						const v = new w.$2fb(t.getWindow(this.m), $),
							S = v.target.parentElement,
							I = Array.from(this.b.values()).find((P) =>
								P.line.element.contains(S),
							)?.line.entry;
						if (!I) return;
						const T = { outlineEntry: I, notebookEditor: this.n };
						this.s.showContextMenu({
							menuId: d.$XX.NotebookStickyScrollContext,
							getAnchor: () => v,
							menuActionOptions: { shouldForwardArgs: !0, arg: T },
						});
					}
					w($) {
						$.stickyScrollEnabled
							? this.n.notebookOptions.getDisplayOptions().stickyScrollEnabled
								? this.y()
								: (this.a.clear(),
									this.f?.dispose(),
									this.G(),
									t.$9fb(this.m),
									this.C())
							: $.stickyScrollMode &&
								this.n.notebookOptions.getDisplayOptions()
									.stickyScrollEnabled &&
								this.f?.object &&
								this.z(
									l(
										this.n,
										this.q,
										this.f?.object?.entries,
										this.getCurrentStickyHeight(),
									),
								);
					}
					y() {
						const { object: $ } = (this.f = this.t.invokeFunction((v) =>
							v.get(p.$G4b).getOrCreate(this.n),
						));
						this.D(this.f),
							this.z(
								l(this.n, this.q, $.entries, this.getCurrentStickyHeight()),
							),
							this.a.add(
								$.onDidChange(() => {
									const v = l(
										this.n,
										this.q,
										$.entries,
										this.getCurrentStickyHeight(),
									);
									this.j(v, this.b) || this.z(v);
								}),
							),
							this.a.add(
								this.n.onDidAttachViewModel(() => {
									this.z(
										l(this.n, this.q, $.entries, this.getCurrentStickyHeight()),
									);
								}),
							),
							this.a.add(
								this.n.onDidScroll(() => {
									const v = new a.$Jh(100);
									v.trigger(() => {
										v.dispose();
										const S = l(
											this.n,
											this.q,
											$.entries,
											this.getCurrentStickyHeight(),
										);
										this.j(S, this.b) || this.z(S);
									});
								}),
							);
					}
					static getVisibleOutlineEntry($, v) {
						let S = 0,
							I = v.length - 1,
							T = -1;
						for (; S <= I; ) {
							const P = Math.floor((S + I) / 2);
							if (v[P].index === $) {
								T = P;
								break;
							} else v[P].index < $ ? ((T = P), (S = P + 1)) : (I = P - 1);
						}
						if (T !== -1) {
							const P = v[T],
								k = [];
							return P.asFlatList(k), k.find((L) => L.index === $);
						}
					}
					z($) {
						t.$9fb(this.m), this.G(), this.F($, this.m);
						const v = this.getCurrentStickyHeight();
						this.h($);
						const S = this.getCurrentStickyHeight() - v;
						if (S !== 0) {
							this.c.fire(S);
							const I = this.g.add(
								t.$hgb(t.getWindow(this.getDomNode()), () => {
									this.r(S), this.C(), this.g.delete(I);
								}),
							);
						} else this.C();
					}
					C() {
						this.getCurrentStickyHeight() > 0
							? (this.m.style.display = "block")
							: (this.m.style.display = "none");
					}
					static computeStickyHeight($) {
						let v = 0;
						for (
							$.cell.cellKind === u.CellKind.Markup && $.level < 7 && (v += 22);
							$.parent;
						)
							(v += 22), ($ = $.parent);
						return v;
					}
					static checkCollapsedStickyLines($, v, S) {
						let I = $;
						const T = new Map(),
							P = [];
						for (; I; ) {
							if (I.level >= 7) {
								I = I.parent;
								continue;
							}
							const k = o.createStickyElement(I, S);
							T.set(I, { line: k, rendered: !1 }), P.unshift(k), (I = I.parent);
						}
						for (let k = 0; k < P.length && !(k >= v); k++)
							T.set(P[k].entry, { line: P[k], rendered: !0 });
						return T;
					}
					F($, v) {
						const S = Array.from($.entries()).reverse();
						for (const [, I] of S) I.rendered && v.append(I.line.element);
					}
					static createStickyElement($, v) {
						const S = document.createElement("div");
						S.classList.add("notebook-sticky-scroll-element"),
							v.notebookOptions.getLayoutConfiguration().stickyScrollMode ===
								"indented" &&
								(S.style.paddingLeft = f.getParentCount($) * 10 + "px");
						let T = !1;
						$.cell.cellKind === u.CellKind.Markup &&
							(T = $.cell.foldingState === r.CellFoldingState.Collapsed);
						const P = new b(T, 16);
						P.domNode.classList.add("notebook-sticky-scroll-folding-icon"),
							P.setVisible(!0);
						const k = document.createElement("div");
						return (
							k.classList.add("notebook-sticky-scroll-header"),
							(k.innerText = $.label),
							S.append(P.domNode, k),
							new f(S, P, k, $, v)
						);
					}
					G() {
						this.b.forEach(($) => {
							$.line.dispose();
						});
					}
					dispose() {
						this.a.dispose(), this.G(), this.f?.dispose(), super.dispose();
					}
				});
				(e.$T4b = s), (e.$T4b = s = o = Ne([j(4, m.$Xxb), j(5, g.$Li)], s));
				function l(y, $, v, S) {
					const I = y.scrollTop - S,
						T = y.visibleRanges[0];
					if (!T) return new Map();
					if (T.start === 0) {
						const A = y.cellAt(0),
							R = s.getVisibleOutlineEntry(0, v);
						if (
							A &&
							R &&
							A.cellKind === u.CellKind.Markup &&
							R.level < 7 &&
							y.scrollTop > 22
						)
							return s.checkCollapsedStickyLines(R, 100, y);
					}
					let P, k;
					const L = T.start - 1;
					for (let A = L; A < T.end; A++) {
						if (((P = y.cellAt(A)), !P)) return new Map();
						if (((k = s.getVisibleOutlineEntry(A, v)), !k)) continue;
						const R = y.cellAt(A + 1);
						if (!R) {
							const B = y.getLayoutInfo().scrollHeight,
								U = Math.floor(B / 22);
							return s.checkCollapsedStickyLines(k, U, y);
						}
						const O = s.getVisibleOutlineEntry(A + 1, v);
						if (O && R.cellKind === u.CellKind.Markup && O.level < 7) {
							const B = $.getCellViewScrollTop(R),
								U = s.computeStickyHeight(k),
								z = s.computeStickyHeight(O);
							if (I + U < B) {
								const F = Math.floor((B - I) / 22);
								return s.checkCollapsedStickyLines(k, F, y);
							} else {
								if (z >= U) return s.checkCollapsedStickyLines(O, 100, y);
								if (z < U) {
									const F = B - I;
									if (F >= z) {
										const x = Math.floor(F / 22);
										return s.checkCollapsedStickyLines(k, x, y);
									} else return s.checkCollapsedStickyLines(O, 100, y);
								}
							}
						}
					}
					const D = y.getLayoutInfo().scrollHeight,
						M = Math.floor((D - I) / 22);
					return s.checkCollapsedStickyLines(k, M, y);
				}
			},
		),
		