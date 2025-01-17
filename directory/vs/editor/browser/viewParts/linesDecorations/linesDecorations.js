import '../../../../../require.js';
import '../../../../../exports.js';
import '../glyphMargin/glyphMargin.js';
import '../../../common/config/editorOptions.js';
import '../../../../css!vs/editor/browser/viewParts/linesDecorations/linesDecorations.js';
define(de[2756], he([1, 0, 1191, 38, 2269]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$vvb = void 0);
			class w extends t.$rvb {
				constructor(C) {
					super(), (this.g = C);
					const m = this.g.configuration.options.get(i.EditorOption.layoutInfo);
					(this.j = m.decorationsLeft),
						(this.m = m.decorationsWidth),
						(this.n = null),
						this.g.addEventHandler(this);
				}
				dispose() {
					this.g.removeEventHandler(this), (this.n = null), super.dispose();
				}
				onConfigurationChanged(C) {
					const m = this.g.configuration.options.get(i.EditorOption.layoutInfo);
					return (
						(this.j = m.decorationsLeft), (this.m = m.decorationsWidth), !0
					);
				}
				onDecorationsChanged(C) {
					return !0;
				}
				onFlushed(C) {
					return !0;
				}
				onLinesChanged(C) {
					return !0;
				}
				onLinesDeleted(C) {
					return !0;
				}
				onLinesInserted(C) {
					return !0;
				}
				onScrollChanged(C) {
					return C.scrollTopChanged;
				}
				onZonesChanged(C) {
					return !0;
				}
				q(C) {
					const d = C.getDecorationsInViewport(),
						m = [];
					let r = 0;
					for (let u = 0, a = d.length; u < a; u++) {
						const h = d[u],
							c = h.options.linesDecorationsClassName,
							n = h.options.zIndex;
						c &&
							(m[r++] = new t.$ovb(
								h.range.startLineNumber,
								h.range.endLineNumber,
								c,
								h.options.linesDecorationsTooltip ?? null,
								n,
							));
						const g = h.options.firstLineDecorationClassName;
						g &&
							(m[r++] = new t.$ovb(
								h.range.startLineNumber,
								h.range.startLineNumber,
								g,
								h.options.linesDecorationsTooltip ?? null,
								n,
							));
					}
					return m;
				}
				prepareRender(C) {
					const d = C.visibleRange.startLineNumber,
						m = C.visibleRange.endLineNumber,
						r = this.c(d, m, this.q(C)),
						u = this.j.toString(),
						a = this.m.toString(),
						h = '" style="left:' + u + "px;width:" + a + 'px;"></div>',
						c = [];
					for (let n = d; n <= m; n++) {
						const g = n - d,
							p = r[g].getDecorations();
						let o = "";
						for (const f of p) {
							let b = '<div class="cldr ' + f.className;
							f.tooltip !== null && (b += '" title="' + f.tooltip),
								(b += h),
								(o += b);
						}
						c[g] = o;
					}
					this.n = c;
				}
				render(C, d) {
					return this.n ? this.n[d - C] : "";
				}
			}
			e.$vvb = w;
		}),
		