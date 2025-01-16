define(
		de[2819],
		he([1, 0, 3, 82, 12, 37, 4, 10, 81, 372, 62, 30, 32, 269]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$NJ = void 0),
				(r = xi(r));
			let n = class {
				static {
					this.IDLE_START_EVENT_NAME = "UserIdleStart";
				}
				static {
					this.IDLE_STOP_EVENT_NAME = "UserIdleStop";
				}
				constructor(o, f, b) {
					(this.k = f),
						(this.l = b),
						(this.d = {}),
						(this.i = new t.$Zc()),
						(this.j = []),
						(this.b = o.appenders),
						(this.c = o.commonProperties ?? Object.create(null)),
						(this.sessionId = this.c.sessionID),
						(this.machineId = this.c["common.machineId"]),
						(this.macMachineId = this.c["common.macMachineId"]),
						(this.sqmId = this.c["common.sqmId"]),
						(this.devDeviceId = this.c["common.devDeviceId"]),
						(this.firstSessionDate = this.c["common.firstSessionDate"]),
						(this.msftInternal = this.c["common.msftInternal"]),
						(this.f = o.piiPaths || []),
						(this.g = h.TelemetryLevel.USAGE),
						(this.h = !!o.sendErrorTelemetry),
						(this.j = [/(vscode-)?file:\/\/\/.*?\/resources\/app\//gi]);
					for (const s of this.f)
						this.j.push(new RegExp((0, E.$of)(s), "gi")),
							s.indexOf("\\") >= 0 &&
								this.j.push(
									new RegExp((0, E.$of)(s.replace(/\\/g, "/")), "gi"),
								);
					this.m(),
						this.i.add(
							this.k.onDidChangeConfiguration((s) => {
								(s.affectsConfiguration(h.$wm) ||
									s.affectsConfiguration(h.$ym) ||
									s.affectsConfiguration(h.$xm)) &&
									this.m();
							}),
						);
				}
				setExperimentProperty(o, f) {
					this.d[o] = f;
				}
				m() {
					let o = (0, c.$Zp)(this.k);
					const f = this.l.enabledTelemetryLevels;
					if (f) {
						this.h = this.sendErrorTelemetry ? f.error : !1;
						const b = f.usage
							? h.TelemetryLevel.USAGE
							: f.error
								? h.TelemetryLevel.ERROR
								: h.TelemetryLevel.NONE;
						o = Math.min(o, b);
					}
					this.g = o;
				}
				get sendErrorTelemetry() {
					return this.h;
				}
				get telemetryLevel() {
					return this.g;
				}
				dispose() {
					this.i.dispose();
				}
				n(o, f, b) {
					this.g < f ||
						((b = (0, i.$yo)(b, this.d)),
						(b = (0, c.$6p)(b, this.j)),
						(b = (0, i.$yo)(b, this.c)),
						this.b.forEach((s) => s.log(o, b)));
				}
				o(o, f, b) {
					this.g < f ||
						((b = (0, i.$yo)(b, this.d)),
						(b = (0, c.$6p)(b, this.j)),
						(b = (0, i.$yo)(b, this.c)),
						this.b.forEach((s) => {
							s.capture(o, b);
						}));
				}
				registerAuthId(o) {
					this.b.forEach((f) => f.registerAuthId(o));
				}
				publicLog(o, f) {
					this.n(o, h.TelemetryLevel.USAGE, f);
				}
				publicLog2(o, f) {
					this.publicLog(o, f);
				}
				publicLogError(o, f) {
					this.h && this.n(o, h.TelemetryLevel.ERROR, f);
				}
				publicLogError2(o, f) {
					this.publicLogError(o, f);
				}
				publicLogCapture(o, f) {
					this.o(o, h.TelemetryLevel.USAGE, f);
				}
			};
			(e.$NJ = n), (e.$NJ = n = Ne([j(1, d.$gj), j(2, u.$Bk)], n));
			function g() {
				const p = (0, C.localize)(2087, null, r.default.nameLong),
					o = (0, C.localize)(
						2088,
						null,
						"https://cursor.com/privacy",
						"https://cursor.com/security",
					),
					f = w.$r ? "" : (0, C.localize)(2089, null);
				return `
${p} ${o} ${f}
`;
			}
			a.$Io
				.as(m.$No.Configuration)
				.registerConfiguration({
					id: h.$vm,
					order: 1,
					type: "object",
					title: "Crash Reporting",
					properties: {
						[h.$wm]: {
							type: "string",
							enum: [h.TelemetryConfiguration.ON, h.TelemetryConfiguration.OFF],
							enumDescriptions: [
								"Send OS-level crash reports.",
								"Disable crash reporting.",
							],
							markdownDescription: g(),
							default: h.TelemetryConfiguration.ON,
							restricted: !0,
							scope: m.ConfigurationScope.APPLICATION,
						},
					},
				});
		},
	),
		