import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import './hoverOperation.js';
import './hoverTypes.js';
import '../../../../base/common/async.js';
define(
			de[2725],
			he([1, 0, 24, 601, 368, 15]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*hoverOperation*/,
 w /*hoverTypes*/,
 E /*async*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VDb = void 0);
				class C {
					get anchor() {
						return this.a;
					}
					set anchor(m) {
						this.a = m;
					}
					get shouldFocus() {
						return this.b;
					}
					set shouldFocus(m) {
						this.b = m;
					}
					get source() {
						return this.c;
					}
					set source(m) {
						this.c = m;
					}
					get insistOnKeepingHoverVisible() {
						return this.e;
					}
					set insistOnKeepingHoverVisible(m) {
						this.e = m;
					}
					constructor(m, r) {
						(this.f = m),
							(this.g = r),
							(this.a = null),
							(this.b = !1),
							(this.c = i.HoverStartSource.Mouse),
							(this.e = !1);
					}
					static h(m, r) {
						if (r.type !== w.HoverAnchorType.Range && !r.supportsMarkerHover)
							return [];
						const u = m.getModel(),
							a = r.range.startLineNumber;
						if (a > u.getLineCount()) return [];
						const h = u.getLineMaxColumn(a);
						return m.getLineDecorations(a).filter((c) => {
							if (c.options.isWholeLine) return !0;
							const n = c.range.startLineNumber === a ? c.range.startColumn : 1,
								g = c.range.endLineNumber === a ? c.range.endColumn : h;
							if (c.options.showIfCollapsed) {
								if (n > r.range.startColumn + 1 || r.range.endColumn - 1 > g)
									return !1;
							} else if (n > r.range.startColumn || r.range.endColumn > g)
								return !1;
							return !0;
						});
					}
					computeAsync(m) {
						const r = this.a;
						if (!this.f.hasModel() || !r) return E.$ai.EMPTY;
						const u = C.h(this.f, r);
						return E.$ai.merge(
							this.g.map((a) =>
								a.computeAsync ? a.computeAsync(r, u, m) : E.$ai.EMPTY,
							),
						);
					}
					computeSync() {
						if (!this.f.hasModel() || !this.a) return [];
						const m = C.h(this.f, this.a);
						let r = [];
						for (const u of this.g) r = r.concat(u.computeSync(this.a, m));
						return (0, t.$Lb)(r);
					}
				}
				e.$VDb = C;
			},
		)
