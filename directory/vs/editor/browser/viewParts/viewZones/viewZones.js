import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../../base/common/errors.js';
import '../../view/viewPart.js';
import '../../../common/core/position.js';
import '../../../common/config/editorOptions.js';
define(
			de[2721],
			he([1, 0, 194, 29, 303, 48, 38]),
			function (ce /*require*/,
 e /*exports*/,
 t /*fastDomNode*/,
 i /*errors*/,
 w /*viewPart*/,
 E /*position*/,
 C /*editorOptions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mvb = void 0);
				const d = () => {
					throw new Error("Invalid change accessor");
				};
				class m extends w.$yub {
					constructor(a) {
						super(a);
						const h = this._context.configuration.options,
							c = h.get(C.EditorOption.layoutInfo);
						(this.b = h.get(C.EditorOption.lineHeight)),
							(this.c = c.contentWidth),
							(this.g = c.contentLeft),
							(this.domNode = (0, t.$Shb)(document.createElement("div"))),
							this.domNode.setClassName("view-zones"),
							this.domNode.setPosition("absolute"),
							this.domNode.setAttribute("role", "presentation"),
							this.domNode.setAttribute("aria-hidden", "true"),
							(this.marginDomNode = (0, t.$Shb)(document.createElement("div"))),
							this.marginDomNode.setClassName("margin-view-zones"),
							this.marginDomNode.setPosition("absolute"),
							this.marginDomNode.setAttribute("role", "presentation"),
							this.marginDomNode.setAttribute("aria-hidden", "true"),
							(this.a = {});
					}
					dispose() {
						super.dispose(), (this.a = {});
					}
					j() {
						const a = this._context.viewLayout.getWhitespaces(),
							h = new Map();
						for (const n of a) h.set(n.id, n);
						let c = !1;
						return (
							this._context.viewModel.changeWhitespace((n) => {
								const g = Object.keys(this.a);
								for (let p = 0, o = g.length; p < o; p++) {
									const f = g[p],
										b = this.a[f],
										s = this.n(b.delegate);
									b.isInHiddenArea = s.isInHiddenArea;
									const l = h.get(f);
									l &&
										(l.afterLineNumber !== s.afterViewLineNumber ||
											l.height !== s.heightInPx) &&
										(n.changeOneWhitespace(
											f,
											s.afterViewLineNumber,
											s.heightInPx,
										),
										this.y(b.delegate, s.heightInPx),
										(c = !0));
								}
							}),
							c
						);
					}
					onConfigurationChanged(a) {
						const h = this._context.configuration.options,
							c = h.get(C.EditorOption.layoutInfo);
						return (
							(this.b = h.get(C.EditorOption.lineHeight)),
							(this.c = c.contentWidth),
							(this.g = c.contentLeft),
							a.hasChanged(C.EditorOption.lineHeight) && this.j(),
							!0
						);
					}
					onLineMappingChanged(a) {
						return this.j();
					}
					onLinesDeleted(a) {
						return !0;
					}
					onScrollChanged(a) {
						return a.scrollTopChanged || a.scrollWidthChanged;
					}
					onZonesChanged(a) {
						return !0;
					}
					onLinesInserted(a) {
						return !0;
					}
					m(a) {
						return a.ordinal ?? a.afterColumn ?? 1e4;
					}
					n(a) {
						if (a.afterLineNumber === 0)
							return {
								isInHiddenArea: !1,
								afterViewLineNumber: 0,
								heightInPx: this.u(a),
								minWidthInPx: this.w(a),
							};
						let h;
						if (typeof a.afterColumn < "u")
							h = this._context.viewModel.model.validatePosition({
								lineNumber: a.afterLineNumber,
								column: a.afterColumn,
							});
						else {
							const p = this._context.viewModel.model.validatePosition({
								lineNumber: a.afterLineNumber,
								column: 1,
							}).lineNumber;
							h = new E.$hL(
								p,
								this._context.viewModel.model.getLineMaxColumn(p),
							);
						}
						let c;
						h.column ===
						this._context.viewModel.model.getLineMaxColumn(h.lineNumber)
							? (c = this._context.viewModel.model.validatePosition({
									lineNumber: h.lineNumber + 1,
									column: 1,
								}))
							: (c = this._context.viewModel.model.validatePosition({
									lineNumber: h.lineNumber,
									column: h.column + 1,
								}));
						const n =
								this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(
									h,
									a.afterColumnAffinity,
									!0,
								),
							g =
								a.showInHiddenAreas ||
								this._context.viewModel.coordinatesConverter.modelPositionIsVisible(
									c,
								);
						return {
							isInHiddenArea: !g,
							showEvenWhenNotInViewport: a.showEvenWhenNotInViewport,
							afterViewLineNumber: n.lineNumber,
							heightInPx: g ? this.u(a) : 0,
							minWidthInPx: this.w(a),
						};
					}
					changeViewZones(a) {
						let h = !1;
						return (
							this._context.viewModel.changeWhitespace((c) => {
								const n = {
									addZone: (g) => ((h = !0), this.q(c, g)),
									removeZone: (g) => {
										g && (h = this.s(c, g) || h);
									},
									layoutZone: (g) => {
										g && (h = this.t(c, g) || h);
									},
								};
								r(a, n),
									(n.addZone = d),
									(n.removeZone = d),
									(n.layoutZone = d);
							}),
							h
						);
					}
					q(a, h) {
						const c = this.n(h),
							g = {
								whitespaceId: a.insertWhitespace(
									c.afterViewLineNumber,
									this.m(h),
									c.heightInPx,
									c.minWidthInPx,
								),
								delegate: h,
								isInHiddenArea: c.isInHiddenArea,
								isVisible: !1,
								domNode: (0, t.$Shb)(h.domNode),
								marginDomNode: h.marginDomNode
									? (0, t.$Shb)(h.marginDomNode)
									: null,
								showEvenWhenNotInViewport: h.showEvenWhenNotInViewport,
							};
						return (
							this.y(g.delegate, c.heightInPx),
							g.domNode.setPosition("absolute"),
							(g.domNode.domNode.style.width = "100%"),
							g.domNode.setDisplay("none"),
							g.domNode.setAttribute("monaco-view-zone", g.whitespaceId),
							this.domNode.appendChild(g.domNode),
							g.marginDomNode &&
								(g.marginDomNode.setPosition("absolute"),
								(g.marginDomNode.domNode.style.width = "100%"),
								g.marginDomNode.setDisplay("none"),
								g.marginDomNode.setAttribute(
									"monaco-view-zone",
									g.whitespaceId,
								),
								this.marginDomNode.appendChild(g.marginDomNode)),
							(this.a[g.whitespaceId] = g),
							this.h(),
							g.whitespaceId
						);
					}
					s(a, h) {
						if (this.a.hasOwnProperty(h)) {
							const c = this.a[h];
							return (
								delete this.a[h],
								a.removeWhitespace(c.whitespaceId),
								c.domNode.removeAttribute("monaco-visible-view-zone"),
								c.domNode.removeAttribute("monaco-view-zone"),
								c.domNode.domNode.remove(),
								c.marginDomNode &&
									(c.marginDomNode.removeAttribute("monaco-visible-view-zone"),
									c.marginDomNode.removeAttribute("monaco-view-zone"),
									c.marginDomNode.domNode.remove()),
								this.h(),
								!0
							);
						}
						return !1;
					}
					t(a, h) {
						if (this.a.hasOwnProperty(h)) {
							const c = this.a[h],
								n = this.n(c.delegate);
							return (
								(c.isInHiddenArea = n.isInHiddenArea),
								a.changeOneWhitespace(
									c.whitespaceId,
									n.afterViewLineNumber,
									n.heightInPx,
								),
								this.y(c.delegate, n.heightInPx),
								this.h(),
								!0
							);
						}
						return !1;
					}
					shouldSuppressMouseDownOnViewZone(a) {
						return this.a.hasOwnProperty(a)
							? !!this.a[a].delegate.suppressMouseDown
							: !1;
					}
					u(a) {
						return typeof a.heightInPx == "number"
							? a.heightInPx
							: typeof a.heightInLines == "number"
								? this.b * a.heightInLines
								: this.b;
					}
					w(a) {
						return typeof a.minWidthInPx == "number" ? a.minWidthInPx : 0;
					}
					y(a, h) {
						if (typeof a.onComputedHeight == "function")
							try {
								a.onComputedHeight(h);
							} catch (c) {
								(0, i.$4)(c);
							}
					}
					z(a, h) {
						if (typeof a.onDomNodeTop == "function")
							try {
								a.onDomNodeTop(h);
							} catch (c) {
								(0, i.$4)(c);
							}
					}
					prepareRender(a) {}
					render(a) {
						const h = a.viewportData.whitespaceViewportData,
							c = {};
						let n = !1;
						for (const p of h)
							(this.a[p.id].isInHiddenArea &&
								!this.a[p.id].showEvenWhenNotInViewport) ||
								((c[p.id] = p), (n = !0));
						const g = Object.keys(this.a);
						for (let p = 0, o = g.length; p < o; p++) {
							const f = g[p],
								b = this.a[f];
							if (!c.hasOwnProperty(f) && b.showEvenWhenNotInViewport) continue;
							let s = 0,
								l = 0,
								y = "none";
							c.hasOwnProperty(f)
								? ((s = c[f].verticalOffset - a.bigNumbersDelta),
									(l = c[f].height),
									(y = "block"),
									b.isVisible ||
										(b.domNode.setAttribute("monaco-visible-view-zone", "true"),
										(b.isVisible = !0)),
									this.z(
										b.delegate,
										a.getScrolledTopFromAbsoluteTop(c[f].verticalOffset),
									))
								: (b.isVisible &&
										(b.domNode.removeAttribute("monaco-visible-view-zone"),
										(b.isVisible = !1)),
									this.z(b.delegate, a.getScrolledTopFromAbsoluteTop(-1e6))),
								b.domNode.setTop(s),
								b.domNode.setHeight(l),
								b.domNode.setDisplay(y),
								b.marginDomNode &&
									(b.marginDomNode.setTop(s),
									b.marginDomNode.setHeight(l),
									b.marginDomNode.setDisplay(y));
						}
						n &&
							(this.domNode.setWidth(Math.max(a.scrollWidth, this.c)),
							this.marginDomNode.setWidth(this.g));
					}
				}
				e.$Mvb = m;
				function r(u, a) {
					try {
						return u(a);
					} catch (h) {
						(0, i.$4)(h);
					}
				}
			},
		),
		