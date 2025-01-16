define(de[705], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$0Sb = e.$9Sb = void 0),
				(e.$9Sb = "rendererLog"),
				(e.$0Sb = "workbench.action.showWindowLog");
		}),
		define(
			de[3460],
			he([1, 0, 4, 11, 39, 99, 31, 705]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				class m extends i.$3X {
					constructor() {
						super({
							id: "workbench.action.toggleKeybindingsLog",
							title: t.localize2(
								7327,
								"Toggle Keyboard Shortcuts Troubleshooting",
							),
							category: E.$ck.Developer,
							f1: !0,
						});
					}
					run(u) {
						u.get(w.$uZ).toggleLogging() && u.get(C.$ek).executeCommand(d.$0Sb);
					}
				}
				(0, i.$4X)(m);
			},
		),
		define(
			de[3461],
			he([1, 0, 34, 3, 4, 705, 1621, 2871]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ucd = void 0);
				class m extends C.$_eb {
					constructor(u, a) {
						const h = new i.$Zc(),
							c = u.createLogger(a.logFile, {
								id: E.$9Sb,
								name: (0, w.localize)(12569, null),
							}),
							n = h.add(new d.$U8c(c));
						let g;
						a.isExtensionDevelopment && a.extensionTestsLocationURI
							? (g = u.createConsoleMainLogger())
							: (g = new t.$qk(n.getLevel())),
							super(n, [g]),
							this.D(h);
					}
				}
				e.$Ucd = m;
			},
		),
		