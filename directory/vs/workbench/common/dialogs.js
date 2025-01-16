define(de[2948], he([1, 0, 15, 6, 3]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hvc = void 0);
			class E extends w.$1c {
				constructor() {
					super(...arguments),
						(this.dialogs = []),
						(this.a = this.D(new i.$re())),
						(this.onWillShowDialog = this.a.event),
						(this.b = this.D(new i.$re())),
						(this.onDidShowDialog = this.b.event);
				}
				show(d) {
					const m = new t.$0h(),
						r = {
							args: d,
							close: (u) => {
								this.dialogs.splice(0, 1),
									u instanceof Error ? m.error(u) : m.complete(u),
									this.b.fire();
							},
						};
					return this.dialogs.push(r), this.a.fire(), { item: r, result: m.p };
				}
			}
			e.$hvc = E;
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	