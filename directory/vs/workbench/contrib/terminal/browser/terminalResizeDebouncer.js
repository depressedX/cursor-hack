define(de[3145], he([1, 0, 7, 138, 3]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$nVc = void 0);
			var E;
			(function (d) {
				d[(d.StartDebouncingThreshold = 200)] = "StartDebouncingThreshold";
			})(E || (E = {}));
			class C extends w.$1c {
				constructor(m, r, u, a, h) {
					super(),
						(this.g = m),
						(this.h = r),
						(this.j = u),
						(this.m = a),
						(this.n = h),
						(this.a = 0),
						(this.b = 0),
						(this.c = this.D(new w.$2c())),
						(this.f = this.D(new w.$2c()));
				}
				async resize(m, r, u) {
					if (
						((this.a = m),
						(this.b = r),
						u || this.h().raw.buffer.normal.length < E.StartDebouncingThreshold)
					) {
						this.c.clear(), this.f.clear(), this.j(m, r);
						return;
					}
					const a = (0, t.getWindow)(this.h().raw.element);
					if (a && !this.g()) {
						this.c.value ||
							(this.c.value = (0, t.$egb)(a, async () => {
								this.m(this.a), this.c.clear();
							})),
							this.f.value ||
								(this.f.value = (0, t.$egb)(a, async () => {
									this.n(this.b), this.f.clear();
								}));
						return;
					}
					this.n(r), (this.a = m), this.q(m);
				}
				flush() {
					(this.c.value || this.f.value) &&
						(this.c.clear(), this.f.clear(), this.j(this.a, this.b));
				}
				q(m) {
					this.m(m);
				}
			}
			(e.$nVc = C), Ne([(0, i.$fi)(100)], C.prototype, "q", null);
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	