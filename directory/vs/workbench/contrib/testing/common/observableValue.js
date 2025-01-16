define(de[810], he([1, 0, 6, 3]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$qqc = e.$pqc = void 0);
			const w = (C) => ({ onDidChange: t.Event.None, value: C });
			e.$pqc = w;
			class E extends i.$1c {
				get value() {
					return this.b;
				}
				set value(d) {
					d !== this.b && ((this.b = d), this.a.fire(d));
				}
				static stored(d, m) {
					const r = new E(d.get(m));
					return r.D(d), r.D(r.onDidChange((u) => d.store(u))), r;
				}
				constructor(d) {
					super(),
						(this.b = d),
						(this.a = this.D(new t.$re())),
						(this.onDidChange = this.a.event);
				}
			}
			e.$qqc = E;
		}),
		