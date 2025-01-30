import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/fastDomNode.js';
import '../../editorBrowser.js';
import '../../view/viewPart.js';
import '../../../common/config/editorOptions.js';
import '../../../common/model.js';
define(
			de[2755],
			he([1, 0, 7, 194, 56, 303, 38, 64]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*fastDomNode*/,
 w /*editorBrowser*/,
 E /*viewPart*/,
 C /*editorOptions*/,
 d /*model*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ivb = void 0),
					(t = mt(t));
				class m extends E.$yub {
					constructor(g, p) {
						super(g),
							(this.a = p),
							(this.b = {}),
							(this.domNode = (0, i.$Shb)(document.createElement("div"))),
							E.$zub.write(this.domNode, E.PartFingerprint.ContentWidgets),
							this.domNode.setClassName("contentWidgets"),
							this.domNode.setPosition("absolute"),
							this.domNode.setTop(0),
							(this.overflowingContentWidgetsDomNode = (0, i.$Shb)(
								document.createElement("div"),
							)),
							E.$zub.write(
								this.overflowingContentWidgetsDomNode,
								E.PartFingerprint.OverflowingContentWidgets,
							),
							this.overflowingContentWidgetsDomNode.setClassName(
								"overflowingContentWidgets",
							);
					}
					dispose() {
						super.dispose(), (this.b = {});
					}
					onConfigurationChanged(g) {
						const p = Object.keys(this.b);
						for (const o of p) this.b[o].onConfigurationChanged(g);
						return !0;
					}
					onDecorationsChanged(g) {
						return !0;
					}
					onFlushed(g) {
						return !0;
					}
					onLineMappingChanged(g) {
						return this.c(), !0;
					}
					onLinesChanged(g) {
						return this.c(), !0;
					}
					onLinesDeleted(g) {
						return this.c(), !0;
					}
					onLinesInserted(g) {
						return this.c(), !0;
					}
					onScrollChanged(g) {
						return !0;
					}
					onZonesChanged(g) {
						return !0;
					}
					c() {
						const g = Object.keys(this.b);
						for (const p of g) this.b[p].updateAnchorViewPosition();
					}
					addWidget(g) {
						const p = new r(this._context, this.a, g);
						(this.b[p.id] = p),
							p.allowEditorOverflow
								? this.overflowingContentWidgetsDomNode.appendChild(p.domNode)
								: this.domNode.appendChild(p.domNode),
							this.h();
					}
					setWidgetPosition(g, p, o, f, b) {
						this.b[g.getId()].setPosition(p, o, f, b), this.h();
					}
					removeWidget(g) {
						const p = g.getId();
						if (this.b.hasOwnProperty(p)) {
							const o = this.b[p];
							delete this.b[p];
							const f = o.domNode.domNode;
							f.remove(),
								f.removeAttribute("monaco-visible-content-widget"),
								this.h();
						}
					}
					shouldSuppressMouseDownOnWidget(g) {
						return this.b.hasOwnProperty(g) ? this.b[g].suppressMouseDown : !1;
					}
					onBeforeRender(g) {
						const p = Object.keys(this.b);
						for (const o of p) this.b[o].onBeforeRender(g);
					}
					prepareRender(g) {
						const p = Object.keys(this.b);
						for (const o of p) this.b[o].prepareRender(g);
					}
					render(g) {
						const p = Object.keys(this.b);
						for (const o of p) this.b[o].render(g);
					}
				}
				e.$ivb = m;
				class r {
					constructor(g, p, o) {
						(this.i = new u(null, null)),
							(this.j = new u(null, null)),
							(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.domNode = (0, i.$Shb)(this.c.getDomNode())),
							(this.id = this.c.getId()),
							(this.allowEditorOverflow = this.c.allowEditorOverflow || !1),
							(this.suppressMouseDown = this.c.suppressMouseDown || !1);
						const f = this.a.configuration.options,
							b = f.get(C.EditorOption.layoutInfo);
						(this.d = f.get(C.EditorOption.fixedOverflowWidgets)),
							(this.f = b.contentWidth),
							(this.g = b.contentLeft),
							(this.h = f.get(C.EditorOption.lineHeight)),
							(this.k = null),
							(this.l = []),
							(this.m = -1),
							(this.n = -1),
							(this.o = this.s()),
							(this.p = !1),
							(this.q = null),
							this.domNode.setPosition(
								this.d && this.allowEditorOverflow ? "fixed" : "absolute",
							),
							this.domNode.setDisplay("none"),
							this.domNode.setVisibility("hidden"),
							this.domNode.setAttribute("widgetId", this.id),
							this.domNode.setMaxWidth(this.o);
					}
					onConfigurationChanged(g) {
						const p = this.a.configuration.options;
						if (
							((this.h = p.get(C.EditorOption.lineHeight)),
							g.hasChanged(C.EditorOption.layoutInfo))
						) {
							const o = p.get(C.EditorOption.layoutInfo);
							(this.g = o.contentLeft),
								(this.f = o.contentWidth),
								(this.o = this.s());
						}
					}
					updateAnchorViewPosition() {
						this.r(this.k, this.i.modelPosition, this.j.modelPosition);
					}
					r(g, p, o) {
						(this.k = g),
							(this.i = f(p, this.a.viewModel, this.k)),
							(this.j = f(o, this.a.viewModel, this.k));
						function f(b, s, l) {
							if (!b) return new u(null, null);
							const y = s.model.validatePosition(b);
							if (s.coordinatesConverter.modelPositionIsVisible(y)) {
								const $ =
									s.coordinatesConverter.convertModelPositionToViewPosition(
										y,
										l ?? void 0,
									);
								return new u(b, $);
							}
							return new u(b, null);
						}
					}
					s() {
						const g = this.domNode.domNode.ownerDocument,
							p = g.defaultView;
						return this.allowEditorOverflow
							? p?.innerWidth ||
									g.documentElement.offsetWidth ||
									g.body.offsetWidth
							: this.f;
					}
					setPosition(g, p, o, f) {
						this.r(f, g, p),
							(this.l = o),
							this.i.viewPosition && this.l && this.l.length > 0
								? this.domNode.setDisplay("block")
								: this.domNode.setDisplay("none"),
							(this.m = -1),
							(this.n = -1);
					}
					t(g, p, o, f) {
						const b = g.top,
							s = b,
							l = g.top + g.height,
							y = f.viewportHeight - l,
							$ = b - o,
							v = s >= o,
							S = l,
							I = y >= o;
						let T = g.left;
						return (
							T + p > f.scrollLeft + f.viewportWidth &&
								(T = f.scrollLeft + f.viewportWidth - p),
							T < f.scrollLeft && (T = f.scrollLeft),
							{ fitsAbove: v, aboveTop: $, fitsBelow: I, belowTop: S, left: T }
						);
					}
					u(g, p, o, f) {
						const l = Math.max(15, p.left - f),
							y = Math.min(p.left + p.width + f, g.width - 15),
							v = this.b.domNode.ownerDocument.defaultView;
						let S = p.left + o - (v?.scrollX ?? 0);
						if (S + f > y) {
							const I = S - (y - f);
							(S -= I), (o -= I);
						}
						if (S < l) {
							const I = S - l;
							(S -= I), (o -= I);
						}
						return [o, S];
					}
					v(g, p, o, f) {
						const b = g.top - o,
							s = g.top + g.height,
							l = t.$tgb(this.b.domNode),
							y = this.b.domNode.ownerDocument,
							$ = y.defaultView,
							v = l.top + b - ($?.scrollY ?? 0),
							S = l.top + s - ($?.scrollY ?? 0),
							I = t.$ogb(y.body),
							[T, P] = this.u(I, l, g.left - f.scrollLeft + this.g, p),
							k = 22,
							L = 22,
							D = v >= k,
							M = S + o <= I.height - L;
						return this.d
							? {
									fitsAbove: D,
									aboveTop: Math.max(v, k),
									fitsBelow: M,
									belowTop: S,
									left: P,
								}
							: {
									fitsAbove: D,
									aboveTop: b,
									fitsBelow: M,
									belowTop: s,
									left: T,
								};
					}
					w(g) {
						return new a(g.top, g.left + this.g);
					}
					x(g) {
						const p = b(this.i.viewPosition, this.k, this.h),
							o =
								this.j.viewPosition?.lineNumber ===
								this.i.viewPosition?.lineNumber
									? this.j.viewPosition
									: null,
							f = b(o, this.k, this.h);
						return { primary: p, secondary: f };
						function b(s, l, y) {
							if (!s) return null;
							const $ = g.visibleRangeForPosition(s);
							if (!$) return null;
							const v =
									s.column === 1 && l === d.PositionAffinity.LeftOfInjectedText
										? 0
										: $.left,
								S =
									g.getVerticalOffsetForLineNumber(s.lineNumber) - g.scrollTop;
							return new h(S, v, y);
						}
					}
					y(g, p, o) {
						if (!p) return g;
						const f = this.a.configuration.options.get(C.EditorOption.fontInfo);
						let b = p.left;
						return (
							b < g.left
								? (b = Math.max(
										b,
										g.left - o + f.typicalFullwidthCharacterWidth,
									))
								: (b = Math.min(
										b,
										g.left + o - f.typicalFullwidthCharacterWidth,
									)),
							new h(g.top, b, g.height)
						);
					}
					z(g) {
						if (!this.l || this.l.length === 0) return null;
						const { primary: p, secondary: o } = this.x(g);
						if (!p)
							return {
								kind: "offViewport",
								preserveFocus: this.domNode.domNode.contains(
									this.domNode.domNode.ownerDocument.activeElement,
								),
							};
						if (this.m === -1 || this.n === -1) {
							let s = null;
							if (
								(typeof this.c.beforeRender == "function" &&
									(s = c(this.c.beforeRender, this.c)),
								s)
							)
								(this.m = s.width), (this.n = s.height);
							else {
								const y = this.domNode.domNode.getBoundingClientRect();
								(this.m = Math.round(y.width)), (this.n = Math.round(y.height));
							}
						}
						const f = this.y(p, o, this.m);
						let b;
						this.allowEditorOverflow
							? (b = this.v(f, this.m, this.n, g))
							: (b = this.t(f, this.m, this.n, g));
						for (let s = 1; s <= 2; s++)
							for (const l of this.l)
								if (l === w.ContentWidgetPositionPreference.ABOVE) {
									if (!b) return null;
									if (s === 2 || b.fitsAbove)
										return {
											kind: "inViewport",
											coordinate: new a(b.aboveTop, b.left),
											position: w.ContentWidgetPositionPreference.ABOVE,
										};
								} else if (l === w.ContentWidgetPositionPreference.BELOW) {
									if (!b) return null;
									if (s === 2 || b.fitsBelow)
										return {
											kind: "inViewport",
											coordinate: new a(b.belowTop, b.left),
											position: w.ContentWidgetPositionPreference.BELOW,
										};
								} else
									return this.allowEditorOverflow
										? {
												kind: "inViewport",
												coordinate: this.w(new a(f.top, f.left)),
												position: w.ContentWidgetPositionPreference.EXACT,
											}
										: {
												kind: "inViewport",
												coordinate: new a(f.top, f.left),
												position: w.ContentWidgetPositionPreference.EXACT,
											};
						return null;
					}
					onBeforeRender(g) {
						!this.i.viewPosition ||
							!this.l ||
							this.i.viewPosition.lineNumber < g.startLineNumber ||
							this.i.viewPosition.lineNumber > g.endLineNumber ||
							this.domNode.setMaxWidth(this.o);
					}
					prepareRender(g) {
						this.q = this.z(g);
					}
					render(g) {
						if (!this.q || this.q.kind === "offViewport") {
							this.p &&
								(this.domNode.removeAttribute("monaco-visible-content-widget"),
								(this.p = !1),
								this.q?.kind === "offViewport" && this.q.preserveFocus
									? this.domNode.setTop(-1e3)
									: this.domNode.setVisibility("hidden")),
								typeof this.c.afterRender == "function" &&
									c(this.c.afterRender, this.c, null);
							return;
						}
						this.allowEditorOverflow
							? (this.domNode.setTop(this.q.coordinate.top),
								this.domNode.setLeft(this.q.coordinate.left))
							: (this.domNode.setTop(
									this.q.coordinate.top + g.scrollTop - g.bigNumbersDelta,
								),
								this.domNode.setLeft(this.q.coordinate.left)),
							this.p ||
								(this.domNode.setVisibility("inherit"),
								this.domNode.setAttribute(
									"monaco-visible-content-widget",
									"true",
								),
								(this.p = !0)),
							typeof this.c.afterRender == "function" &&
								c(this.c.afterRender, this.c, this.q.position);
					}
				}
				class u {
					constructor(g, p) {
						(this.modelPosition = g), (this.viewPosition = p);
					}
				}
				class a {
					constructor(g, p) {
						(this.top = g), (this.left = p), (this._coordinateBrand = void 0);
					}
				}
				class h {
					constructor(g, p, o) {
						(this.top = g),
							(this.left = p),
							(this.height = o),
							(this._anchorCoordinateBrand = void 0);
					}
				}
				function c(n, g, ...p) {
					try {
						return n.call(g, ...p);
					} catch {
						return null;
					}
				}
			},
		),
		