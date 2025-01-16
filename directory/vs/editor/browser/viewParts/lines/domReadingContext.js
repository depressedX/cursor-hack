define(de[2543], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Cub = void 0);
			class t {
				get didDomLayout() {
					return this.a;
				}
				e() {
					if (!this.d) {
						this.d = !0;
						const w = this.f.getBoundingClientRect();
						this.markDidDomLayout(),
							(this.b = w.left),
							(this.c = w.width / this.f.offsetWidth);
					}
				}
				get clientRectDeltaLeft() {
					return this.d || this.e(), this.b;
				}
				get clientRectScale() {
					return this.d || this.e(), this.c;
				}
				constructor(w, E) {
					(this.f = w),
						(this.endNode = E),
						(this.a = !1),
						(this.b = 0),
						(this.c = 1),
						(this.d = !1);
				}
				markDidDomLayout() {
					this.a = !0;
				}
			}
			e.$Cub = t;
		}),
		