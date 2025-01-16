define(de[2719], he([1, 0, 194, 303, 38, 2275]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Jvb = void 0);
			class E extends i.$yub {
				constructor(d) {
					super(d), (this.b = 0), (this.c = 0), this.n(), (this.g = !1);
					const r = this._context.configuration.options.get(
						w.EditorOption.scrollbar,
					);
					(this.j = r.useShadows),
						(this.a = (0, t.$Shb)(document.createElement("div"))),
						this.a.setAttribute("role", "presentation"),
						this.a.setAttribute("aria-hidden", "true");
				}
				dispose() {
					super.dispose();
				}
				m() {
					const d = this.j && this.b > 0;
					return this.g !== d ? ((this.g = d), !0) : !1;
				}
				getDomNode() {
					return this.a;
				}
				n() {
					const m = this._context.configuration.options.get(
						w.EditorOption.layoutInfo,
					);
					m.minimap.renderMinimap === 0 ||
					(m.minimap.minimapWidth > 0 && m.minimap.minimapLeft === 0)
						? (this.c = m.width)
						: (this.c = m.width - m.verticalScrollbarWidth);
				}
				onConfigurationChanged(d) {
					const r = this._context.configuration.options.get(
						w.EditorOption.scrollbar,
					);
					return (this.j = r.useShadows), this.n(), this.m(), !0;
				}
				onScrollChanged(d) {
					return (this.b = d.scrollTop), this.m();
				}
				prepareRender(d) {}
				render(d) {
					this.a.setWidth(this.c),
						this.a.setClassName(this.g ? "scroll-decoration" : "");
				}
			}
			e.$Jvb = E;
		}),
		