import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/lifecycle.js';
import '../../environment/electron-sandbox/environmentService.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/ipc/electron-sandbox/services.js';
import '../../../../platform/telemetry/common/telemetryIpc.js';
import '../../../../platform/storage/common/storage.js';
import '../common/workbenchCommonProperties.js';
import '../../../../platform/telemetry/common/telemetryService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/parts/sandbox/electron-sandbox/globals.js';
define(
			de[3657],
			he([1, 0, 32, 269, 10, 3, 151, 62, 230, 2815, 21, 3656, 2819, 20, 320]),
			function (ce /*require*/,
 e /*exports*/,
 t /*telemetry*/,
 i /*telemetryUtils*/,
 w /*configuration*/,
 E /*lifecycle*/,
 C /*environmentService*/,
 d /*productService*/,
 m /*services*/,
 r /*telemetryIpc*/,
 u /*storage*/,
 a /*workbenchCommonProperties*/,
 h /*telemetryService*/,
 c /*extensions*/,
 n /*globals*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Odd = void 0);
				let g = class extends E.$1c {
					get sessionId() {
						return this.a.sessionId;
					}
					get machineId() {
						return this.a.machineId;
					}
					get macMachineId() {
						return this.a.macMachineId;
					}
					get sqmId() {
						return this.a.sqmId;
					}
					get devDeviceId() {
						return this.a.devDeviceId;
					}
					get firstSessionDate() {
						return this.a.firstSessionDate;
					}
					get msftInternal() {
						return this.a.msftInternal;
					}
					constructor(o, f, b, s, l) {
						if ((super(), (0, i.$Xp)(f, o))) {
							const y = (0, i.$4p)(f, l),
								$ = b.getChannel("telemetryAppender"),
								v = {
									appenders: [new r.$17c($)],
									commonProperties: (0, a.$Ndd)(
										s,
										o.os.release,
										o.os.hostname,
										f.commit,
										f.version,
										o.machineId,
										o.macMachineId,
										o.sqmId,
										o.devDeviceId,
										y,
										n.$S,
										o.remoteAuthority,
									),
									piiPaths: (0, i.$5p)(o),
									sendErrorTelemetry: !0,
								};
							this.a = this.D(new h.$NJ(v, l, f));
						} else this.a = i.$Sp;
						this.sendErrorTelemetry = this.a.sendErrorTelemetry;
					}
					setExperimentProperty(o, f) {
						return this.a.setExperimentProperty(o, f);
					}
					get telemetryLevel() {
						return this.a.telemetryLevel;
					}
					registerAuthId(o) {
						this.a.registerAuthId(o);
					}
					publicLog(o, f) {
						this.a.publicLog(o, f);
					}
					publicLog2(o, f) {
						this.publicLog(o, f);
					}
					publicLogError(o, f) {
						this.a.publicLogError(o, f);
					}
					publicLogError2(o, f) {
						this.publicLogError(o, f);
					}
					publicLogCapture(o, f) {
						this.a.publicLogCapture(o, f);
					}
				};
				(e.$Odd = g),
					(e.$Odd = g =
						Ne(
							[
								j(0, C.$ucd),
								j(1, d.$Bk),
								j(2, m.$Vbd),
								j(3, u.$lq),
								j(4, w.$gj),
							],
							g,
						)),
					(0, c.$lK)(t.$km, g, c.InstantiationType.Delayed);
			},
		)
