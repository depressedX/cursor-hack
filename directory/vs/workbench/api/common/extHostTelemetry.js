import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../base/common/event.js';
import '../../../platform/telemetry/common/telemetry.js';
import '../../../platform/log/common/log.js';
import './extHostInitDataService.js';
import '../../services/extensions/common/extensionHostProtocol.js';
import '../../../platform/remote/common/remoteHosts.js';
import '../../../platform/telemetry/common/telemetryUtils.js';
import '../../../base/common/objects.js';
import '../../../base/common/uri.js';
import '../../../base/common/lifecycle.js';
import '../../../nls.js';
define(
			Pe[143],
			Ne([1, 0, 5, 4, 281, 14, 34, 142, 139, 140, 27, 2, 3, 10]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$6db = t.$4db = t.$3db = void 0),
					(t.$5db = h);
				let g = class extends d.$1c {
					constructor(T, a) {
						super(),
							(this.r = T),
							(this.s = a),
							(this.a = this.D(new r.$re())),
							(this.onDidChangeTelemetryEnabled = this.a.event),
							(this.b = this.D(new r.$re())),
							(this.onDidChangeTelemetryConfiguration = this.b.event),
							(this.c = { usage: !0, error: !0 }),
							(this.f = S.TelemetryLevel.NONE),
							(this.g = !1),
							(this.j = !1),
							(this.q = new Map()),
							(this.m = y.URI.revive(
								this.r.environment.extensionTelemetryLogResource,
							)),
							(this.j = this.r.environment.isExtensionTelemetryLoggingOnly),
							(this.n = a.createLogger(this.m, {
								id: n.$Vp,
								name: (0, k.localize)(2720, null, this.j ? " (Not Sent)" : ""),
								hidden: !0,
							})),
							this.D(this.n),
							this.D(
								a.onDidChangeLogLevel((u) => {
									(0, N.$kk)(u) && this.t();
								}),
							),
							this.n.info(
								"Below are logs for extension telemetry events sent to the telemetry output channel API once the log level is set to trace.",
							),
							this.n.info(
								"===========================================================",
							);
					}
					t() {
						this.s.setVisibility(
							this.m,
							this.g && this.s.getLogLevel() === N.LogLevel.Trace,
						);
					}
					getTelemetryConfiguration() {
						return this.f === S.TelemetryLevel.USAGE;
					}
					getTelemetryDetails() {
						return {
							isCrashEnabled: this.f >= S.TelemetryLevel.CRASH,
							isErrorsEnabled: this.c.error
								? this.f >= S.TelemetryLevel.ERROR
								: !1,
							isUsageEnabled: this.c.usage
								? this.f >= S.TelemetryLevel.USAGE
								: !1,
						};
					}
					instantiateLogger(T, a, u) {
						const s = this.getTelemetryDetails(),
							f = new c(
								a,
								u,
								T,
								this.n,
								this.j,
								this.getBuiltInCommonProperties(T),
								{
									isUsageEnabled: s.isUsageEnabled,
									isErrorsEnabled: s.isErrorsEnabled,
								},
							),
							o = this.q.get(T.identifier.value) ?? [];
						return (
							this.q.set(T.identifier.value, [...o, f]), f.apiTelemetryLogger
						);
					}
					$initializeTelemetryLevel(T, a, u) {
						(this.f = T),
							(this.g = a),
							(this.c = u ?? { usage: !0, error: !0 }),
							this.t();
					}
					getBuiltInCommonProperties(T) {
						const a = Object.create(null);
						switch (
							((a["common.extname"] = `${T.publisher}.${T.name}`),
							(a["common.extversion"] = T.version),
							(a["common.vscodemachineid"] = this.r.telemetryInfo.machineId),
							(a["common.vscodesessionid"] = this.r.telemetryInfo.sessionId),
							(a["common.macMachineId"] = this.r.telemetryInfo.macMachineId),
							(a["common.sqmid"] = this.r.telemetryInfo.sqmId),
							(a["common.devDeviceId"] = this.r.telemetryInfo.devDeviceId),
							(a["common.vscodeversion"] = this.r.version),
							(a["common.isnewappinstall"] = h(
								this.r.telemetryInfo.firstSessionDate,
							)),
							(a["common.product"] = this.r.environment.appHost),
							this.r.uiKind)
						) {
							case I.UIKind.Web:
								a["common.uikind"] = "web";
								break;
							case I.UIKind.Desktop:
								a["common.uikind"] = "desktop";
								break;
							default:
								a["common.uikind"] = "unknown";
						}
						return (
							(a["common.remotename"] = (0, l.$xn)(
								(0, n.$3p)(this.r.remote.authority),
							)),
							a
						);
					}
					$onDidChangeTelemetryLevel(T) {
						(this.h = this.getTelemetryConfiguration()), (this.f = T);
						const a = this.getTelemetryDetails();
						this.q.forEach((u, s) => {
							const f = u.filter((o) => !o.isDisposed);
							f.length === 0 ? this.q.delete(s) : this.q.set(s, f);
						}),
							this.q.forEach((u) => {
								for (const s of u)
									s.updateTelemetryEnablements(
										a.isUsageEnabled,
										a.isErrorsEnabled,
									);
							}),
							this.h !== this.getTelemetryConfiguration() &&
								this.a.fire(this.getTelemetryConfiguration()),
							this.b.fire(this.getTelemetryDetails()),
							this.t();
					}
					onExtensionError(T, a) {
						const s = this.q.get(T.value)?.filter((o) => !o.isDisposed);
						if (!s) return this.q.delete(T.value), !1;
						let f = !1;
						for (const o of s)
							o.ignoreUnhandledExtHostErrors || (o.logError(a), (f = !0));
						return f;
					}
				};
				(t.$3db = g), (t.$3db = g = wt([rt(0, P.$98), rt(1, N.$jk)], g));
				class c {
					static validateSender(T) {
						if (typeof T != "object")
							throw new TypeError("TelemetrySender argument is invalid");
						if (typeof T.sendEventData != "function")
							throw new TypeError(
								"TelemetrySender.sendEventData must be a function",
							);
						if (typeof T.sendErrorData != "function")
							throw new TypeError(
								"TelemetrySender.sendErrorData must be a function",
							);
						if (typeof T.flush < "u" && typeof T.flush != "function")
							throw new TypeError(
								"TelemetrySender.flush must be a function or undefined",
							);
					}
					constructor(T, a, u, s, f, o, w) {
						(this.g = u),
							(this.h = s),
							(this.i = f),
							(this.j = o),
							(this.a = new r.$re()),
							(this.ignoreUnhandledExtHostErrors =
								a?.ignoreUnhandledErrors ?? !1),
							(this.b = a?.ignoreBuiltInCommonProperties ?? !1),
							(this.c = a?.additionalCommonProperties),
							(this.f = T),
							(this.d = {
								isUsageEnabled: w.isUsageEnabled,
								isErrorsEnabled: w.isErrorsEnabled,
							});
					}
					updateTelemetryEnablements(T, a) {
						this.e &&
							((this.d = { isUsageEnabled: T, isErrorsEnabled: a }),
							this.a.fire(this.e));
					}
					mixInCommonPropsAndCleanData(T) {
						let a = "properties" in T ? (T.properties ?? {}) : T;
						return (
							(a = (0, n.$6p)(a, [])),
							this.c && (a = (0, p.$yo)(a, this.c)),
							this.b || (a = (0, p.$yo)(a, this.j)),
							"properties" in T ? (T.properties = a) : (T = a),
							T
						);
					}
					k(T, a) {
						this.f &&
							(this.g.publisher === "vscode"
								? (T = this.g.name + "/" + T)
								: (T = this.g.identifier.value + "/" + T),
							(a = this.mixInCommonPropsAndCleanData(a || {})),
							this.i || this.f?.sendEventData(T, a),
							this.h.trace(T, a));
					}
					logUsage(T, a) {
						this.d.isUsageEnabled && this.k(T, a);
					}
					logError(T, a) {
						if (!(!this.d.isErrorsEnabled || !this.f))
							if (typeof T == "string") this.k(T, a);
							else {
								const u = {
										name: T.name,
										message: T.message,
										stack: T.stack,
										cause: T.cause,
									},
									s = (0, n.$6p)(u, []),
									f = new Error(s.message, { cause: s.cause });
								(f.stack = s.stack),
									(f.name = s.name),
									(a = this.mixInCommonPropsAndCleanData(a || {})),
									this.i || this.f.sendErrorData(f, a),
									this.h.trace("exception", a);
							}
					}
					get apiTelemetryLogger() {
						if (!this.e) {
							const T = this,
								a = {
									logUsage: T.logUsage.bind(T),
									get isUsageEnabled() {
										return T.d.isUsageEnabled;
									},
									get isErrorsEnabled() {
										return T.d.isErrorsEnabled;
									},
									logError: T.logError.bind(T),
									dispose: T.dispose.bind(T),
									onDidChangeEnableStates: T.a.event.bind(T),
								};
							this.e = Object.freeze(a);
						}
						return this.e;
					}
					get isDisposed() {
						return !this.f;
					}
					dispose() {
						if (this.f?.flush) {
							let T = this.f;
							(this.f = void 0),
								Promise.resolve(T.flush()).then((T = void 0)),
								(this.e = void 0);
						} else this.f = void 0;
					}
				}
				t.$4db = c;
				function h($) {
					const T = Date.now() - new Date($).getTime();
					return isNaN(T) ? !1 : T < 1e3 * 60 * 60 * 24;
				}
				t.$6db = (0, e.$Mi)("IExtHostTelemetry");
			},
		),
		