import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/environment/common/environment.js';
import '../../../platform/product/common/productService.js';
import '../../../platform/telemetry/common/telemetry.js';
import '../../../platform/telemetry/common/telemetryUtils.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHost.protocol.js';
define(
			de[3370],
			he([1, 0, 3, 10, 113, 62, 32, 269, 101, 88]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*configuration*/,
 w /*environment*/,
 E /*productService*/,
 C /*telemetry*/,
 d /*telemetryUtils*/,
 m /*extHostCustomers*/,
 r /*extHost.protocol*/) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$toc = void 0);
				let a = class extends t.$1c {
					static {
						u = this;
					}
					static {
						this.b = "pluginHostTelemetry";
					}
					constructor(c, n, g, p, o) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.a = c.getProxy(r.$mbb.ExtHostTelemetry)),
							(0, d.$Xp)(this.h, this.g) &&
								this.D(
									this.f.onDidChangeConfiguration((f) => {
										(f.affectsConfiguration(C.$wm) ||
											f.affectsConfiguration(C.$ym)) &&
											this.a.$onDidChangeTelemetryLevel(this.j);
									}),
								),
							this.a.$initializeTelemetryLevel(
								this.j,
								(0, d.$Xp)(this.h, this.g),
								this.h.enabledTelemetryLevels,
							);
					}
					get j() {
						return (0, d.$Xp)(this.h, this.g)
							? this.c.telemetryLevel
							: C.TelemetryLevel.NONE;
					}
					$publicLog(c, n = Object.create(null)) {
						(n[u.b] = !0), this.c.publicLog(c, n);
					}
					$publicLog2(c, n) {
						this.$publicLog(c, n);
					}
				};
				(e.$toc = a),
					(e.$toc =
						a =
						u =
							Ne(
								[
									(0, m.$tmc)(r.$lbb.MainThreadTelemetry),
									j(1, C.$km),
									j(2, i.$gj),
									j(3, w.$Ti),
									j(4, E.$Bk),
								],
								a,
							));
			},
		),
		