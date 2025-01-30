import '../../../../../require.js';
import '../../../../../exports.js';
import '../glyphMargin/glyphMargin.js';
import '../../../../css!vs/editor/browser/viewParts/marginDecorations/marginDecorations.js';
define(de[2757], he([1, 0, 1191, 2271]), function (ce /*require*/,
 e /*exports*/,
 t /*glyphMargin*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$wvb = void 0);
			class i extends t.$rvb {
				constructor(E) {
					super(), (this.g = E), (this.j = null), this.g.addEventHandler(this);
				}
				dispose() {
					this.g.removeEventHandler(this), (this.j = null), super.dispose();
				}
				onConfigurationChanged(E) {
					return !0;
				}
				onDecorationsChanged(E) {
					return !0;
				}
				onFlushed(E) {
					return !0;
				}
				onLinesChanged(E) {
					return !0;
				}
				onLinesDeleted(E) {
					return !0;
				}
				onLinesInserted(E) {
					return !0;
				}
				onScrollChanged(E) {
					return E.scrollTopChanged;
				}
				onZonesChanged(E) {
					return !0;
				}
				m(E) {
					const C = E.getDecorationsInViewport(),
						d = [];
					let m = 0;
					for (let r = 0, u = C.length; r < u; r++) {
						const a = C[r],
							h = a.options.marginClassName,
							c = a.options.zIndex;
						h &&
							(d[m++] = new t.$ovb(
								a.range.startLineNumber,
								a.range.endLineNumber,
								h,
								null,
								c,
							));
					}
					return d;
				}
				prepareRender(E) {
					const C = E.visibleRange.startLineNumber,
						d = E.visibleRange.endLineNumber,
						m = this.c(C, d, this.m(E)),
						r = [];
					for (let u = C; u <= d; u++) {
						const a = u - C,
							h = m[a].getDecorations();
						let c = "";
						for (const n of h)
							c += '<div class="cmdr ' + n.className + '" style=""></div>';
						r[a] = c;
					}
					this.j = r;
				}
				render(E, C) {
					return this.j ? this.j[C - E] : "";
				}
			}
			e.$wvb = i;
		}),
		