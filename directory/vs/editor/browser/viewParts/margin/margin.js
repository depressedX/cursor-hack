import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/fastDomNode.js';
import '../../view/viewPart.js';
import '../../../common/config/editorOptions.js';
import '../../../../css!vs/editor/browser/viewParts/margin/margin.js';
define(de[1605], he([1, 0, 194, 303, 38, 2270]), function (ce /*require*/,
 e /*exports*/,
 t /*fastDomNode*/,
 i /*viewPart*/,
 w /*editorOptions*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bvb = void 0);
			class E extends i.$yub {
				static {
					this.CLASS_NAME = "glyph-margin";
				}
				static {
					this.OUTER_CLASS_NAME = "margin";
				}
				constructor(d) {
					super(d);
					const m = this._context.configuration.options,
						r = m.get(w.EditorOption.layoutInfo);
					(this.b = !m.get(w.EditorOption.disableLayerHinting)),
						(this.c = r.contentLeft),
						(this.g = r.glyphMarginLeft),
						(this.j = r.glyphMarginWidth),
						(this.a = (0, t.$Shb)(document.createElement("div"))),
						this.a.setClassName(E.OUTER_CLASS_NAME),
						this.a.setPosition("absolute"),
						this.a.setAttribute("role", "presentation"),
						this.a.setAttribute("aria-hidden", "true"),
						(this.m = (0, t.$Shb)(document.createElement("div"))),
						this.m.setClassName(E.CLASS_NAME),
						this.a.appendChild(this.m);
				}
				dispose() {
					super.dispose();
				}
				getDomNode() {
					return this.a;
				}
				onConfigurationChanged(d) {
					const m = this._context.configuration.options,
						r = m.get(w.EditorOption.layoutInfo);
					return (
						(this.b = !m.get(w.EditorOption.disableLayerHinting)),
						(this.c = r.contentLeft),
						(this.g = r.glyphMarginLeft),
						(this.j = r.glyphMarginWidth),
						!0
					);
				}
				onScrollChanged(d) {
					return super.onScrollChanged(d) || d.scrollTopChanged;
				}
				prepareRender(d) {}
				render(d) {
					this.a.setLayerHinting(this.b), this.a.setContain("strict");
					const m = d.scrollTop - d.bigNumbersDelta;
					this.a.setTop(-m);
					const r = Math.min(d.scrollHeight, 1e6);
					this.a.setHeight(r),
						this.a.setWidth(this.c),
						this.m.setLeft(this.g),
						this.m.setWidth(this.j),
						this.m.setHeight(r);
				}
			}
			e.$bvb = E;
		})
