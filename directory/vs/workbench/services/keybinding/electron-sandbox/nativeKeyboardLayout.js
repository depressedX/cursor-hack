define(
			de[3395],
			he([1, 0, 3, 1188, 6, 12, 2737, 1825, 3392, 3394, 2780, 10, 1826, 20]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gdd = void 0);
				let n = class extends t.$1c {
					constructor(f, b) {
						super(),
							(this.c = f),
							(this.f = b),
							(this.a = this.D(new w.$re())),
							(this.onDidChangeKeyboardLayout = this.a.event),
							(this.b = null),
							this.D(
								this.c.onDidChangeKeyboardLayout(async () => {
									(this.b = null), this.a.fire();
								}),
							),
							this.D(
								b.onDidChangeConfiguration(async (s) => {
									s.affectsConfiguration("keyboard") &&
										((this.b = null), this.a.fire());
								}),
							);
					}
					getRawKeyboardMapping() {
						return this.c.getRawKeyboardMapping();
					}
					getCurrentKeyboardLayout() {
						return this.c.getCurrentKeyboardLayout();
					}
					getAllKeyboardLayouts() {
						return [];
					}
					getKeyboardMapper() {
						const f = (0, u.$w4c)(this.f);
						return f.dispatch === u.DispatchConfig.KeyCode
							? new m.$y4c(f.mapAltGrToCtrlAlt, E.OS)
							: (this.b ||
									(this.b = new C.$Gvc(
										g(
											this.getCurrentKeyboardLayout(),
											this.getRawKeyboardMapping(),
											f.mapAltGrToCtrlAlt,
										),
									)),
								this.b);
					}
					validateCurrentKeyboardMapping(f) {}
				};
				(e.$Gdd = n), (e.$Gdd = n = Ne([j(0, h.$Scd), j(1, a.$gj)], n));
				function g(o, f, b) {
					const s = p(o);
					return E.OS === E.OperatingSystem.Windows
						? new d.$gEc(s, f, b)
						: !f || Object.keys(f).length === 0
							? new m.$y4c(b, E.OS)
							: E.OS === E.OperatingSystem.Macintosh &&
									o.id === "com.apple.keylayout.DVORAK-QWERTYCMD"
								? new m.$y4c(b, E.OS)
								: new r.$A4c(s, f, b, E.OS);
				}
				function p(o) {
					if (!o) return !1;
					if (E.OS === E.OperatingSystem.Linux) {
						const f = o;
						return f.layout.split(/,/g)[f.group] === "us";
					}
					return E.OS === E.OperatingSystem.Macintosh
						? o.id === "com.apple.keylayout.US"
						: E.OS === E.OperatingSystem.Windows
							? o.name === "00000409"
							: !1;
				}
				(0, c.$lK)(i.$Hvc, n, c.InstantiationType.Delayed);
			},
		),
		