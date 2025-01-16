define(de[744], he([1, 0, 33]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gf = e.$ff = e.$df = void 0),
				(e.$ef = w);
			class i {
				constructor(m) {
					(this.b = m), (this.a = null);
				}
				get() {
					if (this.a) return this.a;
					const m = new t.$Ce(),
						r = this.b(m.token);
					return (
						(this.a = {
							promise: r,
							dispose: () => {
								(this.a = null), m.cancel(), m.dispose();
							},
						}),
						this.a
					);
				}
			}
			e.$df = i;
			function w(d) {
				return d;
			}
			class E {
				constructor(m, r) {
					(this.a = void 0),
						(this.b = void 0),
						typeof m == "function"
							? ((this.c = m), (this.d = w))
							: ((this.c = r), (this.d = m.getCacheKey));
				}
				get(m) {
					const r = this.d(m);
					return this.b !== r && ((this.b = r), (this.a = this.c(m))), this.a;
				}
			}
			e.$ff = E;
			class C {
				get cachedValues() {
					return this.a;
				}
				constructor(m, r) {
					(this.a = new Map()),
						(this.b = new Map()),
						typeof m == "function"
							? ((this.c = m), (this.d = w))
							: ((this.c = r), (this.d = m.getCacheKey));
				}
				get(m) {
					const r = this.d(m);
					if (this.b.has(r)) return this.b.get(r);
					const u = this.c(m);
					return this.a.set(m, u), this.b.set(r, u), u;
				}
			}
			e.$gf = C;
		}),
		