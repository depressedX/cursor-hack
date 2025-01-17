import '../../../../../require.js';
import '../../../../../exports.js';
import '../../view/dynamicViewOverlay.js';
import '../../../common/core/editorColorRegistry.js';
import '../../../../base/common/arrays.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/core/selection.js';
import '../../../common/config/editorOptions.js';
import '../../../../platform/theme/common/theme.js';
import '../../../common/core/position.js';
import '../../../../css!vs/editor/browser/viewParts/currentLineHighlight/currentLineHighlight.js';
define(
			de[2847],
			he([1, 0, 591, 307, 24, 35, 104, 38, 212, 48, 2263]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lvb = e.$kvb = e.$jvb = void 0),
					(w = mt(w));
				class u extends t.$_ub {
					constructor(n) {
						super(), (this.c = n);
						const g = this.c.configuration.options,
							p = g.get(d.EditorOption.layoutInfo);
						(this.g = g.get(d.EditorOption.renderLineHighlight)),
							(this.r = g.get(d.EditorOption.renderLineHighlightOnlyWhenFocus)),
							(this.j = p.isViewportWrapping),
							(this.m = p.contentLeft),
							(this.n = p.contentWidth),
							(this.q = !0),
							(this.t = !1),
							(this.u = [1]),
							(this.w = [new C.$kL(1, 1, 1, 1)]),
							(this.y = null),
							this.c.addEventHandler(this);
					}
					dispose() {
						this.c.removeEventHandler(this), super.dispose();
					}
					z() {
						let n = !1;
						const g = new Set();
						for (const f of this.w) g.add(f.positionLineNumber);
						const p = Array.from(g);
						p.sort((f, b) => f - b),
							w.$yb(this.u, p) || ((this.u = p), (n = !0));
						const o = this.w.every((f) => f.isEmpty());
						return this.q !== o && ((this.q = o), (n = !0)), n;
					}
					onThemeChanged(n) {
						return this.z();
					}
					onConfigurationChanged(n) {
						const g = this.c.configuration.options,
							p = g.get(d.EditorOption.layoutInfo);
						return (
							(this.g = g.get(d.EditorOption.renderLineHighlight)),
							(this.r = g.get(d.EditorOption.renderLineHighlightOnlyWhenFocus)),
							(this.j = p.isViewportWrapping),
							(this.m = p.contentLeft),
							(this.n = p.contentWidth),
							!0
						);
					}
					onCursorStateChanged(n) {
						return (this.w = n.selections), this.z();
					}
					onFlushed(n) {
						return !0;
					}
					onLinesDeleted(n) {
						return !0;
					}
					onLinesInserted(n) {
						return !0;
					}
					onScrollChanged(n) {
						return n.scrollWidthChanged || n.scrollTopChanged;
					}
					onZonesChanged(n) {
						return !0;
					}
					onFocusChanged(n) {
						return this.r ? ((this.t = n.isFocused), !0) : !1;
					}
					prepareRender(n) {
						if (!this.G()) {
							this.y = null;
							return;
						}
						const g = n.visibleRange.startLineNumber,
							p = n.visibleRange.endLineNumber,
							o = [];
						for (let b = g; b <= p; b++) {
							const s = b - g;
							o[s] = "";
						}
						if (this.j) {
							const b = this.I(n, !1);
							for (const s of this.u) {
								const l = this.c.viewModel.coordinatesConverter,
									y = l.convertViewPositionToModelPosition(
										new r.$hL(s, 1),
									).lineNumber,
									$ = l.convertModelPositionToViewPosition(
										new r.$hL(y, 1),
									).lineNumber,
									v = l.convertModelPositionToViewPosition(
										new r.$hL(y, this.c.viewModel.model.getLineMaxColumn(y)),
									).lineNumber,
									S = Math.max($, g),
									I = Math.min(v, p);
								for (let T = S; T <= I; T++) {
									const P = T - g;
									o[P] = b;
								}
							}
						}
						const f = this.I(n, !0);
						for (const b of this.u) {
							if (b < g || b > p) continue;
							const s = b - g;
							o[s] = f;
						}
						this.y = o;
					}
					render(n, g) {
						if (!this.y) return "";
						const p = g - n;
						return p >= this.y.length ? "" : this.y[p];
					}
					C() {
						return (
							(this.g === "gutter" || this.g === "all") && (!this.r || this.t)
						);
					}
					F() {
						return (
							(this.g === "line" || this.g === "all") &&
							this.q &&
							(!this.r || this.t)
						);
					}
				}
				e.$jvb = u;
				class a extends u {
					I(n, g) {
						return `<div class="${"current-line" + (this.C() ? " current-line-both" : "") + (g ? " current-line-exact" : "")}" style="width:${Math.max(n.scrollWidth, this.n)}px;"></div>`;
					}
					G() {
						return this.F();
					}
					H() {
						return this.C();
					}
				}
				e.$kvb = a;
				class h extends u {
					I(n, g) {
						return `<div class="${"current-line" + (this.C() ? " current-line-margin" : "") + (this.H() ? " current-line-margin-both" : "") + (this.C() && g ? " current-line-exact-margin" : "")}" style="width:${this.m}px"></div>`;
					}
					G() {
						return !0;
					}
					H() {
						return this.F();
					}
				}
				(e.$lvb = h),
					(0, E.$oP)((c, n) => {
						const g = c.getColor(i.$rT);
						if (
							(g &&
								(n.addRule(
									`.monaco-editor .view-overlays .current-line { background-color: ${g}; }`,
								),
								n.addRule(
									`.monaco-editor .margin-view-overlays .current-line-margin { background-color: ${g}; border: none; }`,
								)),
							!g || g.isTransparent() || c.defines(i.$sT))
						) {
							const p = c.getColor(i.$sT);
							p &&
								(n.addRule(
									`.monaco-editor .view-overlays .current-line-exact { border: 2px solid ${p}; }`,
								),
								n.addRule(
									`.monaco-editor .margin-view-overlays .current-line-exact-margin { border: 2px solid ${p}; }`,
								),
								(0, m.$gP)(c.type) &&
									(n.addRule(
										".monaco-editor .view-overlays .current-line-exact { border-width: 1px; }",
									),
									n.addRule(
										".monaco-editor .margin-view-overlays .current-line-exact-margin { border-width: 1px; }",
									)));
						}
					});
			},
		),
		