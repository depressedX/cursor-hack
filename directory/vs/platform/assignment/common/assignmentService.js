import '../../../../require.js';
import '../../../../exports.js';
import '../../telemetry/common/telemetry.js';
import '../../telemetry/common/telemetryUtils.js';
import './assignment.js';
import '../../../amdX.js';
define(
			de[2816],
			he([1, 0, 32, 269, 2702, 536]),
			function (ce /*require*/,
 e /*exports*/,
 t /*telemetry*/,
 i /*telemetryUtils*/,
 w /*assignment*/,
 E /*amdX*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$g4b = void 0);
				class C {
					get d() {
						return !0;
					}
					constructor(m, r, u, a, h, c) {
						(this.e = m),
							(this.f = r),
							(this.g = u),
							(this.h = a),
							(this.i = h),
							(this.j = c),
							(this.b = !1),
							!(a.extensionTestsLocationURI !== void 0) &&
								u.tasConfig &&
								this.d &&
								(0, i.$Zp)(this.f) === t.TelemetryLevel.USAGE &&
								(this.a = this.k());
						const g = this.f.getValue("experiments.overrideDelay"),
							p = typeof g == "number" ? g : 0;
						this.c = new Promise((o) => setTimeout(o, p));
					}
					async getTreatment(m) {
						await this.c;
						const r = this.f.getValue("experiments.override." + m);
						if (r !== void 0) return r;
						if (!this.a || !this.d) return;
						let u;
						const a = await this.a;
						return (
							this.b
								? (u = a.getTreatmentVariable("vscode", m))
								: (u = await a.getTreatmentVariableAsync("vscode", m, !0)),
							(u = a.getTreatmentVariable("vscode", m)),
							u
						);
					}
					async k() {
						const m =
								this.g.quality === "stable"
									? w.TargetPopulation.Public
									: this.g.quality === "exploration"
										? w.TargetPopulation.Exploration
										: w.TargetPopulation.Insiders,
							r = new w.$f4b(this.g.version, this.g.nameLong, this.e, m),
							u = this.g.tasConfig,
							a = new (
								await (0, E.$Tq)("tas-client-umd", "lib/tas-client-umd.js")
							).ExperimentationService({
								filterProviders: [r],
								telemetry: this.i,
								storageKey: w.$d4b,
								keyValueStorage: this.j,
								assignmentContextTelemetryPropertyName:
									u.assignmentContextTelemetryPropertyName,
								telemetryEventName: u.telemetryEventName,
								endpoint: u.endpoint,
								refetchInterval: w.$e4b,
							});
						return (
							await a.initializePromise,
							a.initialFetch.then(() => (this.b = !0)),
							a
						);
					}
				}
				e.$g4b = C;
			},
		),
		