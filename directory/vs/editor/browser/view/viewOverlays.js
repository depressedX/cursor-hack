import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/fastDomNode.js';
import '../config/domFontInfo.js';
import './viewLayer.js';
import './viewPart.js';
import '../../common/config/editorOptions.js';
define(
			de[2713],
			he([1, 0, 194, 321, 1183, 303, 38]),
			function (ce /*require*/,
 e /*exports*/,
 t /*fastDomNode*/,
 i /*domFontInfo*/,
 w /*viewLayer*/,
 E /*viewPart*/,
 C /*editorOptions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gvb = e.$fvb = e.$evb = e.$dvb = void 0);
				class d extends E.$yub {
					constructor(h) {
						super(h),
							(this.c = []),
							(this.g = !1),
							(this.a = new w.$Bub({ createLine: () => new m(this.c) })),
							(this.b = this.a.domNode);
						const n = this._context.configuration.options.get(
							C.EditorOption.fontInfo,
						);
						(0, i.$jsb)(this.b, n), this.b.setClassName("view-overlays");
					}
					shouldRender() {
						if (super.shouldRender()) return !0;
						for (let h = 0, c = this.c.length; h < c; h++)
							if (this.c[h].shouldRender()) return !0;
						return !1;
					}
					dispose() {
						super.dispose();
						for (let h = 0, c = this.c.length; h < c; h++) this.c[h].dispose();
						this.c = [];
					}
					getDomNode() {
						return this.b;
					}
					addDynamicOverlay(h) {
						this.c.push(h);
					}
					onConfigurationChanged(h) {
						this.a.onConfigurationChanged(h);
						const n = this._context.configuration.options.get(
							C.EditorOption.fontInfo,
						);
						return (0, i.$jsb)(this.b, n), !0;
					}
					onFlushed(h) {
						return this.a.onFlushed(h);
					}
					onFocusChanged(h) {
						return (this.g = h.isFocused), !0;
					}
					onLinesChanged(h) {
						return this.a.onLinesChanged(h);
					}
					onLinesDeleted(h) {
						return this.a.onLinesDeleted(h);
					}
					onLinesInserted(h) {
						return this.a.onLinesInserted(h);
					}
					onScrollChanged(h) {
						return this.a.onScrollChanged(h) || !0;
					}
					onTokensChanged(h) {
						return this.a.onTokensChanged(h);
					}
					onZonesChanged(h) {
						return this.a.onZonesChanged(h);
					}
					prepareRender(h) {
						const c = this.c.filter((n) => n.shouldRender());
						for (let n = 0, g = c.length; n < g; n++) {
							const p = c[n];
							p.prepareRender(h), p.onDidRender();
						}
					}
					render(h) {
						this._viewOverlaysRender(h),
							this.b.toggleClassName("focused", this.g);
					}
					_viewOverlaysRender(h) {
						this.a.renderLines(h.viewportData);
					}
				}
				e.$dvb = d;
				class m {
					constructor(h) {
						(this.a = h), (this.b = null), (this.c = null);
					}
					getDomNode() {
						return this.b ? this.b.domNode : null;
					}
					setDomNode(h) {
						this.b = (0, t.$Shb)(h);
					}
					onContentChanged() {}
					onTokensChanged() {}
					renderLine(h, c, n, g, p) {
						let o = "";
						for (let f = 0, b = this.a.length; f < b; f++) {
							const s = this.a[f];
							o += s.render(g.startLineNumber, h);
						}
						return this.c === o
							? !1
							: ((this.c = o),
								p.appendString('<div style="top:'),
								p.appendString(String(c)),
								p.appendString("px;height:"),
								p.appendString(String(n)),
								p.appendString('px;">'),
								p.appendString(o),
								p.appendString("</div>"),
								!0);
					}
					layoutLine(h, c, n) {
						this.b && (this.b.setTop(c), this.b.setHeight(n));
					}
				}
				e.$evb = m;
				class r extends d {
					constructor(h) {
						super(h);
						const n = this._context.configuration.options.get(
							C.EditorOption.layoutInfo,
						);
						(this.j = n.contentWidth), this.b.setHeight(0);
					}
					onConfigurationChanged(h) {
						const n = this._context.configuration.options.get(
							C.EditorOption.layoutInfo,
						);
						return (
							(this.j = n.contentWidth), super.onConfigurationChanged(h) || !0
						);
					}
					onScrollChanged(h) {
						return super.onScrollChanged(h) || h.scrollWidthChanged;
					}
					_viewOverlaysRender(h) {
						super._viewOverlaysRender(h),
							this.b.setWidth(Math.max(h.scrollWidth, this.j));
					}
				}
				e.$fvb = r;
				class u extends d {
					constructor(h) {
						super(h);
						const c = this._context.configuration.options,
							n = c.get(C.EditorOption.layoutInfo);
						(this.j = n.contentLeft),
							this.b.setClassName("margin-view-overlays"),
							this.b.setWidth(1),
							(0, i.$jsb)(this.b, c.get(C.EditorOption.fontInfo));
					}
					onConfigurationChanged(h) {
						const c = this._context.configuration.options;
						(0, i.$jsb)(this.b, c.get(C.EditorOption.fontInfo));
						const n = c.get(C.EditorOption.layoutInfo);
						return (
							(this.j = n.contentLeft), super.onConfigurationChanged(h) || !0
						);
					}
					onScrollChanged(h) {
						return super.onScrollChanged(h) || h.scrollHeightChanged;
					}
					_viewOverlaysRender(h) {
						super._viewOverlaysRender(h);
						const c = Math.min(h.scrollHeight, 1e6);
						this.b.setHeight(c), this.b.setWidth(this.j);
					}
				}
				e.$gvb = u;
			},
		),
		