import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import './beforeEditPositionMapper.js';
import './length.js';
define(de[1536], he([1, 0, 24, 914, 492]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*beforeEditPositionMapper*/,
 w /*length*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$7O = E);
			function E(m, r) {
				if (m.length === 0) return r;
				if (r.length === 0) return m;
				const u = new t.$cc(d(m)),
					a = d(r);
				a.push({ modified: !1, lengthBefore: void 0, lengthAfter: void 0 });
				let h = u.dequeue();
				function c(o) {
					if (o === void 0) {
						const b = u.takeWhile((s) => !0) || [];
						return h && b.unshift(h), b;
					}
					const f = [];
					for (; h && !(0, w.$EM)(o); ) {
						const [b, s] = h.splitAt(o);
						f.push(b),
							(o = (0, w.$MM)(b.lengthAfter, o)),
							(h = s ?? u.dequeue());
					}
					return (0, w.$EM)(o) || f.push(new C(!1, o, o)), f;
				}
				const n = [];
				function g(o, f, b) {
					if (n.length > 0 && (0, w.$LM)(n[n.length - 1].endOffset, o)) {
						const s = n[n.length - 1];
						n[n.length - 1] = new i.$1O(
							s.startOffset,
							f,
							(0, w.$JM)(s.newLength, b),
						);
					} else n.push({ startOffset: o, endOffset: f, newLength: b });
				}
				let p = w.$DM;
				for (const o of a) {
					const f = c(o.lengthBefore);
					if (o.modified) {
						const b = (0, w.$KM)(f, (l) => l.lengthBefore),
							s = (0, w.$JM)(p, b);
						g(p, s, o.lengthAfter), (p = s);
					} else
						for (const b of f) {
							const s = p;
							(p = (0, w.$JM)(p, b.lengthBefore)),
								b.modified && g(s, p, b.lengthAfter);
						}
				}
				return n;
			}
			class C {
				constructor(r, u, a) {
					(this.modified = r), (this.lengthBefore = u), (this.lengthAfter = a);
				}
				splitAt(r) {
					const u = (0, w.$MM)(r, this.lengthAfter);
					return (0, w.$LM)(u, w.$DM)
						? [this, void 0]
						: this.modified
							? [
									new C(this.modified, this.lengthBefore, r),
									new C(this.modified, w.$DM, u),
								]
							: [new C(this.modified, r, r), new C(this.modified, u, u)];
				}
				toString() {
					return `${this.modified ? "M" : "U"}:${(0, w.$GM)(this.lengthBefore)} -> ${(0, w.$GM)(this.lengthAfter)}`;
				}
			}
			function d(m) {
				const r = [];
				let u = w.$DM;
				for (const a of m) {
					const h = (0, w.$MM)(u, a.startOffset);
					(0, w.$EM)(h) || r.push(new C(!1, h, h));
					const c = (0, w.$MM)(a.startOffset, a.endOffset);
					r.push(new C(!0, c, a.newLength)), (u = a.endOffset);
				}
				return r;
			}
		}),
		