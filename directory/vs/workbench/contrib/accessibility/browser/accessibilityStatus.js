define(
		de[3627],
		he([1, 0, 3, 6, 111, 4, 91, 31, 10, 40, 166]),
		function (ce, e, t, i, w, E, C, d, m, r, u) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$B2c = void 0),
				(w = xi(w));
			let a = class extends t.$1c {
				static {
					this.ID = "workbench.contrib.accessibilityStatus";
				}
				constructor(c, n, g, p) {
					super(),
						(this.g = c),
						(this.h = n),
						(this.j = g),
						(this.m = p),
						(this.a = null),
						(this.b = !1),
						(this.f = this.D(new t.$2c())),
						this.D(
							d.$fk.registerCommand({
								id: "showEditorScreenReaderNotification",
								handler: () => this.q(),
							}),
						),
						this.r(this.j.isScreenReaderOptimized()),
						this.n();
				}
				n() {
					this.D(this.j.onDidChangeScreenReaderOptimized(() => this.s())),
						this.D(
							this.g.onDidChangeConfiguration((c) => {
								c.affectsConfiguration("editor.accessibilitySupport") &&
									this.s();
							}),
						);
				}
				q() {
					(this.a = this.h.prompt(
						w.default.Info,
						(0, E.localize)(4371, null),
						[
							{
								label: (0, E.localize)(4372, null),
								run: () => {
									this.g.updateValue(
										"editor.accessibilitySupport",
										"on",
										m.ConfigurationTarget.USER,
									);
								},
							},
							{
								label: (0, E.localize)(4373, null),
								run: () => {
									this.g.updateValue(
										"editor.accessibilitySupport",
										"off",
										m.ConfigurationTarget.USER,
									);
								},
							},
						],
						{ sticky: !0, priority: r.NotificationPriority.URGENT },
					)),
						i.Event.once(this.a.onDidClose)(() => (this.a = null));
				}
				r(c) {
					if (c) {
						if (!this.f.value) {
							const n = (0, E.localize)(4374, null);
							this.f.value = this.m.addEntry(
								{
									name: (0, E.localize)(4375, null),
									text: n,
									ariaLabel: n,
									command: "showEditorScreenReaderNotification",
									kind: "prominent",
									showInAllWindows: !0,
								},
								"status.editor.screenReaderMode",
								u.StatusbarAlignment.RIGHT,
								100.6,
							);
						}
					} else this.f.clear();
				}
				s() {
					this.j.isScreenReaderOptimized() &&
						this.g.getValue("editor.accessibilitySupport") === "auto" &&
						(this.b || ((this.b = !0), setTimeout(() => this.q(), 100))),
						this.a && this.a.close(),
						this.r(this.j.isScreenReaderOptimized());
				}
			};
			(e.$B2c = a),
				(e.$B2c = a =
					Ne([j(0, m.$gj), j(1, r.$4N), j(2, C.$XK), j(3, u.$d6b)], a));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	