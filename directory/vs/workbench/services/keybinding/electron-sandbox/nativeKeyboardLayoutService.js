define(
			de[1826],
			he([1, 0, 3, 1188, 6, 12, 371, 305, 5]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tcd = e.$Scd = void 0),
					(e.$Scd = (0, m.$Mi)("nativeKeyboardLayoutService"));
				let r = class extends t.$1c {
					constructor(h) {
						super(),
							(this.c = this.D(new w.$re())),
							(this.onDidChangeKeyboardLayout = this.c.event),
							(this.f = d.ProxyChannel.toService(
								h.getChannel("keyboardLayout"),
							)),
							(this.g = null),
							(this.h = null),
							(this.j = null),
							this.D(
								this.f.onDidChangeKeyboardLayout(
									async ({ keyboardLayoutInfo: c, keyboardMapping: n }) => {
										await this.initialize(),
											!u(this.h, n) &&
												((this.h = n), (this.j = c), this.c.fire());
									},
								),
							);
					}
					initialize() {
						return this.g || (this.g = this.m()), this.g;
					}
					async m() {
						const h = await this.f.getKeyboardLayoutData(),
							{ keyboardLayoutInfo: c, keyboardMapping: n } = h;
						(this.h = n), (this.j = c);
					}
					getRawKeyboardMapping() {
						return this.h;
					}
					getCurrentKeyboardLayout() {
						return this.j;
					}
				};
				(e.$Tcd = r), (e.$Tcd = r = Ne([j(0, C.$V8c)], r));
				function u(a, h) {
					return E.OS === E.OperatingSystem.Windows
						? (0, i.$Lvc)(a, h)
						: (0, i.$Mvc)(a, h);
				}
			},
		),
		