define(
			de[3445],
			he([1, 0, 91, 12, 151, 8, 10, 2739, 20, 32, 423, 55, 110, 180]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fdd = void 0);
				let n = class extends d.$25c {
					constructor(o, f, b, s, l, y) {
						super(f, s, b),
							(this.y = l),
							(this.z = y),
							(this.u = !1),
							(this.w = void 0),
							this.setAccessibilitySupport(
								o.window.accessibilitySupport
									? t.AccessibilitySupport.Enabled
									: t.AccessibilitySupport.Disabled,
							);
					}
					async alwaysUnderlineAccessKeys() {
						if (!i.$l) return !1;
						if (typeof this.w != "boolean") {
							const o = await this.z.windowsGetStringRegKey(
								"HKEY_CURRENT_USER",
								"Control Panel\\Accessibility\\Keyboard Preference",
								"On",
							);
							this.w = o === "1";
						}
						return this.w;
					}
					setAccessibilitySupport(o) {
						super.setAccessibilitySupport(o),
							!this.u &&
								o === t.AccessibilitySupport.Enabled &&
								(this.y.publicLog2("accessibility", { enabled: !0 }),
								(this.u = !0));
					}
				};
				(e.$Fdd = n),
					(e.$Fdd = n =
						Ne(
							[
								j(0, w.$ucd),
								j(1, E.$6j),
								j(2, C.$gj),
								j(3, c.$jEb),
								j(4, r.$km),
								j(5, h.$y7c),
							],
							n,
						)),
					(0, m.$lK)(t.$XK, n, m.InstantiationType.Delayed);
				let g = class {
					static {
						this.ID = "workbench.contrib.linuxAccessibility";
					}
					constructor(o, f, b) {
						const s = () => {
							f.isScreenReaderOptimized() &&
								o.write(
									b.argvResource,
									[{ path: ["force-renderer-accessibility"], value: !0 }],
									!0,
								);
						};
						s(), f.onDidChangeScreenReaderOptimized(s);
					}
				};
				(g = Ne([j(0, u.$$Qb), j(1, t.$XK), j(2, w.$ucd)], g)),
					i.$n && (0, a.$s6)(g.ID, g, a.WorkbenchPhase.BlockRestore);
			},
		),
		