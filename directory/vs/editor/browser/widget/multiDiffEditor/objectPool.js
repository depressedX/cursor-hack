define(de[2548], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$BGc = void 0);
			class t {
				constructor(w) {
					(this.d = w),
						(this.a = new Set()),
						(this.b = new Set()),
						(this.c = new Map());
				}
				getUnusedObj(w) {
					let E;
					if (this.a.size === 0) (E = this.d(w)), this.c.set(E, w);
					else {
						const C = [...this.a.values()];
						(E = C.find((d) => this.c.get(d).getId() === w.getId()) ?? C[0]),
							this.a.delete(E),
							this.c.set(E, w),
							E.setData(w);
					}
					return (
						this.b.add(E),
						{
							object: E,
							dispose: () => {
								this.b.delete(E), this.a.size > 5 ? E.dispose() : this.a.add(E);
							},
						}
					);
				}
				dispose() {
					for (const w of this.b) w.dispose();
					for (const w of this.a) w.dispose();
					this.b.clear(), this.a.clear();
				}
			}
			e.$BGc = t;
		}),
		