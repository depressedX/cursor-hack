import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arraysFind.js';
import '../../../../base/common/event.js';
import '../../../common/core/range.js';
import '../../../common/core/eolCounter.js';
define(de[2584], he([1, 0, 214, 6, 17, 531]), function (ce /*require*/,
 e /*exports*/,
 t /*arraysFind*/,
 i /*event*/,
 w /*range*/,
 E /*eolCounter*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ONb = void 0);
			class C {
				get onDidChange() {
					return this.d.event;
				}
				get hiddenRanges() {
					return this.b;
				}
				constructor(u) {
					(this.d = new i.$re()),
						(this.f = !1),
						(this.a = u),
						(this.c = u.onDidChange((a) => this.g())),
						(this.b = []),
						u.regions.length && this.g();
				}
				notifyChangeModelContent(u) {
					this.b.length &&
						!this.f &&
						(this.f = u.changes.some(
							(a) =>
								a.range.endLineNumber !== a.range.startLineNumber ||
								(0, E.$6L)(a.text)[0] !== 0,
						));
				}
				g() {
					let u = !1;
					const a = [];
					let h = 0,
						c = 0,
						n = Number.MAX_VALUE,
						g = -1;
					const p = this.a.regions;
					for (; h < p.length; h++) {
						if (!p.isCollapsed(h)) continue;
						const o = p.getStartLineNumber(h) + 1,
							f = p.getEndLineNumber(h);
						(n <= o && f <= g) ||
							(!u &&
							c < this.b.length &&
							this.b[c].startLineNumber === o &&
							this.b[c].endLineNumber === f
								? (a.push(this.b[c]), c++)
								: ((u = !0), a.push(new w.$iL(o, 1, f, 1))),
							(n = o),
							(g = f));
					}
					(this.f || u || c < this.b.length) && this.h(a);
				}
				h(u) {
					(this.b = u), (this.f = !1), this.d.fire(u);
				}
				hasRanges() {
					return this.b.length > 0;
				}
				isHidden(u) {
					return m(this.b, u) !== null;
				}
				adjustSelections(u) {
					let a = !1;
					const h = this.a.textModel;
					let c = null;
					const n = (g) => (
						(!c || !d(g, c)) && (c = m(this.b, g)),
						c ? c.startLineNumber - 1 : null
					);
					for (let g = 0, p = u.length; g < p; g++) {
						let o = u[g];
						const f = n(o.startLineNumber);
						f && ((o = o.setStartPosition(f, h.getLineMaxColumn(f))), (a = !0));
						const b = n(o.endLineNumber);
						b && ((o = o.setEndPosition(b, h.getLineMaxColumn(b))), (a = !0)),
							(u[g] = o);
					}
					return a;
				}
				dispose() {
					this.hiddenRanges.length > 0 && ((this.b = []), this.d.fire(this.b)),
						this.c && (this.c.dispose(), (this.c = null));
				}
			}
			e.$ONb = C;
			function d(r, u) {
				return r >= u.startLineNumber && r <= u.endLineNumber;
			}
			function m(r, u) {
				const a = (0, t.$ob)(r, (h) => u < h.startLineNumber) - 1;
				return a >= 0 && r[a].endLineNumber >= u ? r[a] : null;
			}
		}),
		