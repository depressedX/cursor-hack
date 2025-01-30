import '../../../../../../require.js';
import '../../../../../../exports.js';
import './length.js';
define(de[2562], he([1, 0, 492]), function (ce /*require*/,
 e /*exports*/,
 t /*length*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$5O = void 0);
			class i {
				constructor(d) {
					(this.d = t.$DM), (this.a = [d]), (this.b = [t.$DM]), (this.c = []);
				}
				readLongestNodeAt(d, m) {
					if ((0, t.$NM)(d, this.d)) throw new Error("Invalid offset");
					for (this.d = d; ; ) {
						const r = E(this.a);
						if (!r) return;
						const u = E(this.b);
						if ((0, t.$NM)(d, u)) return;
						if ((0, t.$NM)(u, d))
							if ((0, t.$JM)(u, r.length) <= d) this.e();
							else {
								const a = w(r);
								a !== -1
									? (this.a.push(r.getChild(a)), this.b.push(u), this.c.push(a))
									: this.e();
							}
						else {
							if (m(r)) return this.e(), r;
							{
								const a = w(r);
								if (a === -1) {
									this.e();
									return;
								} else
									this.a.push(r.getChild(a)), this.b.push(u), this.c.push(a);
							}
						}
					}
				}
				e() {
					for (;;) {
						const d = E(this.b),
							m = E(this.a);
						if ((this.a.pop(), this.b.pop(), this.c.length === 0)) break;
						const r = E(this.a),
							u = w(r, this.c[this.c.length - 1]);
						if (u !== -1) {
							this.a.push(r.getChild(u)),
								this.b.push((0, t.$JM)(d, m.length)),
								(this.c[this.c.length - 1] = u);
							break;
						} else this.c.pop();
					}
				}
			}
			e.$5O = i;
			function w(C, d = -1) {
				for (;;) {
					if ((d++, d >= C.childrenLength)) return -1;
					if (C.getChild(d)) return d;
				}
			}
			function E(C) {
				return C.length > 0 ? C[C.length - 1] : void 0;
			}
		}),
		