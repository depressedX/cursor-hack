import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
define(de[3659], he([1, 0, 24]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Gyc = e.$Fyc = e.$Eyc = e.$Dyc = void 0);
			class i {
				constructor(m) {
					this.edits = m.slice().sort((0, t.$0b)((r) => r.offset, t.$_b));
				}
				applyToArray(m) {
					for (let r = this.edits.length - 1; r >= 0; r--) {
						const u = this.edits[r];
						m.splice(u.offset, u.length, ...new Array(u.newLength));
					}
				}
			}
			e.$Dyc = i;
			class w {
				constructor(m, r, u) {
					(this.offset = m), (this.length = r), (this.newLength = u);
				}
				toString() {
					return `[${this.offset}, +${this.length}) -> +${this.newLength}}`;
				}
			}
			e.$Eyc = w;
			class E {
				static fromMany(m) {
					const r = m.map((u) => new E(u));
					return new C(r);
				}
				constructor(m) {
					(this.d = m), (this.a = 0), (this.b = 0);
				}
				transform(m) {
					let r = this.d.edits[this.a];
					for (; r && r.offset + r.length <= m; )
						(this.b += r.newLength - r.length),
							this.a++,
							(r = this.d.edits[this.a]);
					if (!(r && r.offset <= m)) return m + this.b;
				}
			}
			e.$Fyc = E;
			class C {
				constructor(m) {
					this.a = m;
				}
				transform(m) {
					for (const r of this.a) {
						const u = r.transform(m);
						if (u === void 0) return;
						m = u;
					}
					return m;
				}
			}
			e.$Gyc = C;
		}),
		