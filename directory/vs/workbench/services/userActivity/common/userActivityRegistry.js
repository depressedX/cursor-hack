define(de[1894], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ooc = void 0);
			class t {
				constructor() {
					(this.a = []),
						(this.add = (w) => {
							this.a.push(w);
						});
				}
				take(w, E) {
					(this.add = (C) => E.createInstance(C, w)),
						this.a.forEach(this.add),
						(this.a = []);
				}
			}
			e.$Ooc = new t();
		}),
		