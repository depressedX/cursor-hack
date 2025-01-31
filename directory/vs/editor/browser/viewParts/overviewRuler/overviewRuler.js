import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../common/config/editorOptions.js';
import '../../../common/viewModel/overviewZoneManager.js';
import '../../../common/viewEventHandler.js';
define(
			de[2717],
			he([1, 0, 194, 38, 1546, 750]),
			function (ce /*require*/,
 e /*exports*/,
 t /*fastDomNode*/,
 i /*editorOptions*/,
 w /*overviewZoneManager*/,
 E /*viewEventHandler*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hvb = void 0);
				class C extends E.$Xsb {
					constructor(m, r) {
						super(), (this.a = m);
						const u = this.a.configuration.options;
						(this.b = (0, t.$Shb)(document.createElement("canvas"))),
							this.b.setClassName(r),
							this.b.setPosition("absolute"),
							this.b.setLayerHinting(!0),
							this.b.setContain("strict"),
							(this.c = new w.$9sb((a) =>
								this.a.viewLayout.getVerticalOffsetForLineNumber(a),
							)),
							this.c.setDOMWidth(0),
							this.c.setDOMHeight(0),
							this.c.setOuterHeight(this.a.viewLayout.getScrollHeight()),
							this.c.setLineHeight(u.get(i.EditorOption.lineHeight)),
							this.c.setPixelRatio(u.get(i.EditorOption.pixelRatio)),
							this.a.addEventHandler(this);
					}
					dispose() {
						this.a.removeEventHandler(this), super.dispose();
					}
					onConfigurationChanged(m) {
						const r = this.a.configuration.options;
						return (
							m.hasChanged(i.EditorOption.lineHeight) &&
								(this.c.setLineHeight(r.get(i.EditorOption.lineHeight)),
								this.g()),
							m.hasChanged(i.EditorOption.pixelRatio) &&
								(this.c.setPixelRatio(r.get(i.EditorOption.pixelRatio)),
								this.b.setWidth(this.c.getDOMWidth()),
								this.b.setHeight(this.c.getDOMHeight()),
								(this.b.domNode.width = this.c.getCanvasWidth()),
								(this.b.domNode.height = this.c.getCanvasHeight()),
								this.g()),
							!0
						);
					}
					onFlushed(m) {
						return this.g(), !0;
					}
					onScrollChanged(m) {
						return (
							m.scrollHeightChanged &&
								(this.c.setOuterHeight(m.scrollHeight), this.g()),
							!0
						);
					}
					onZonesChanged(m) {
						return this.g(), !0;
					}
					getDomNode() {
						return this.b.domNode;
					}
					setLayout(m) {
						this.b.setTop(m.top), this.b.setRight(m.right);
						let r = !1;
						(r = this.c.setDOMWidth(m.width) || r),
							(r = this.c.setDOMHeight(m.height) || r),
							r &&
								(this.b.setWidth(this.c.getDOMWidth()),
								this.b.setHeight(this.c.getDOMHeight()),
								(this.b.domNode.width = this.c.getCanvasWidth()),
								(this.b.domNode.height = this.c.getCanvasHeight()),
								this.g());
					}
					setZones(m) {
						this.c.setZones(m), this.g();
					}
					g() {
						if (this.c.getOuterHeight() === 0) return !1;
						const m = this.c.getCanvasWidth(),
							r = this.c.getCanvasHeight(),
							u = this.c.resolveColorZones(),
							a = this.c.getId2Color(),
							h = this.b.domNode.getContext("2d");
						return (
							h.clearRect(0, 0, m, r), u.length > 0 && this.j(h, u, a, m), !0
						);
					}
					j(m, r, u, a) {
						let h = 0,
							c = 0,
							n = 0;
						for (const g of r) {
							const p = g.colorId,
								o = g.from,
								f = g.to;
							p !== h
								? (m.fillRect(0, c, a, n - c),
									(h = p),
									(m.fillStyle = u[h]),
									(c = o),
									(n = f))
								: n >= o
									? (n = Math.max(n, f))
									: (m.fillRect(0, c, a, n - c), (c = o), (n = f));
						}
						m.fillRect(0, c, a, n - c);
					}
				}
				e.$Hvb = C;
			},
		)
