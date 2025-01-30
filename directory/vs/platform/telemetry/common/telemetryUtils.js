import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/objects.js';
import '../../../base/common/types.js';
import '../../remote/common/remoteHosts.js';
import './commonProperties.js';
import './telemetry.js';
define(
			de[269],
			he([1, 0, 82, 28, 438, 1640, 32]),
			function (ce /*require*/,
 e /*exports*/,
 t /*objects*/,
 i /*types*/,
 w /*remoteHosts*/,
 E /*commonProperties*/,
 C /*telemetry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wp = e.$Vp = e.$Up = e.$Tp = e.$Sp = e.$Rp = e.$Qp = void 0),
					(e.$Xp = u),
					(e.$Yp = a),
					(e.$Zp = h),
					(e.$1p = c),
					(e.$2p = g),
					(e.$3p = p),
					(e.$4p = f),
					(e.$5p = b),
					(e.$6p = y);
				class d {
					constructor(v) {
						(this.value = v), (this.isTrustedTelemetryValue = !0);
					}
				}
				e.$Qp = d;
				class m {
					constructor() {
						(this.telemetryLevel = C.TelemetryLevel.NONE),
							(this.sessionId = "someValue.sessionId"),
							(this.machineId = "someValue.machineId"),
							(this.macMachineId = "someValue.macMachineId"),
							(this.sqmId = "someValue.sqmId"),
							(this.devDeviceId = "someValue.devDeviceId"),
							(this.firstSessionDate = "someValue.firstSessionDate"),
							(this.sendErrorTelemetry = !1);
					}
					registerAuthId() {}
					publicLog() {}
					publicLog2() {}
					publicLogError() {}
					publicLogError2() {}
					publicLogCapture() {}
					setExperimentProperty() {}
				}
				(e.$Rp = m), (e.$Sp = new m());
				class r {
					async publicLog(v, S, I) {}
					async publicLogError(v, S, I) {}
				}
				(e.$Tp = r),
					(e.$Up = "telemetry"),
					(e.$Vp = "extensionTelemetryLog"),
					(e.$Wp = {
						registerAuthId: () => null,
						log: () => null,
						flush: () => Promise.resolve(null),
						capture: () => null,
					});
				function u($, v) {
					return !v.isBuilt && !v.disableTelemetry
						? !0
						: !(v.disableTelemetry || !$.enableTelemetry);
				}
				function a($, v) {
					return v.extensionTestsLocationURI
						? !0
						: !(
								v.isBuilt ||
								v.disableTelemetry ||
								($.enableTelemetry && $.aiConfig?.ariaKey)
							);
				}
				function h($) {
					const v = $.getValue(C.$wm),
						S = $.getValue(C.$xm);
					if ($.getValue(C.$ym) === !1 || S === !1)
						return C.TelemetryLevel.NONE;
					switch (v ?? C.TelemetryConfiguration.ON) {
						case C.TelemetryConfiguration.ON:
							return C.TelemetryLevel.USAGE;
						case C.TelemetryConfiguration.OFF:
							return C.TelemetryLevel.NONE;
					}
				}
				function c($) {
					const v = {},
						S = {},
						I = {};
					o($, I);
					for (let T in I) {
						T = T.length > 150 ? T.substr(T.length - 149) : T;
						const P = I[T];
						typeof P == "number"
							? (S[T] = P)
							: typeof P == "boolean"
								? (S[T] = P ? 1 : 0)
								: typeof P == "string"
									? (P.length > 8192 &&
											console.warn(
												`Telemetry property: ${T} has been trimmed to 8192, the original length is ${P.length}`,
											),
										(v[T] = P.substring(0, 8191)))
									: typeof P < "u" && P !== null && (v[T] = P);
					}
					return { properties: v, measurements: S };
				}
				const n = new Set([
					"ssh-remote",
					"dev-container",
					"attached-container",
					"wsl",
					"tunnel",
					"codespaces",
					"amlext",
				]);
				function g($) {
					return $;
				}
				function p($) {
					if (!$) return "none";
					const v = (0, w.$xn)($);
					return n.has(v) ? v : "other";
				}
				function o($, v, S = 0, I) {
					if ($)
						for (const T of Object.getOwnPropertyNames($)) {
							const P = $[T],
								k = I ? I + T : T;
							Array.isArray(P)
								? (v[k] = (0, t.$Ao)(P))
								: P instanceof Date
									? (v[k] = P.toISOString())
									: (0, i.$ng)(P)
										? S < 2
											? o(P, v, S + 1, k + ".")
											: (v[k] = (0, t.$Ao)(P))
										: (v[k] = P);
						}
				}
				function f($, v) {
					const S = $.msftInternalDomains || [],
						I = v.getValue("telemetry.internalTesting");
					return (0, E.$Pp)(S) || I;
				}
				function b($) {
					return [
						$.appRoot,
						$.extensionsPath,
						$.userHome.fsPath,
						$.tmpDir.fsPath,
						$.userDataPath,
					];
				}
				function s($, v) {
					if (!$ || (!$.includes("/") && !$.includes("\\"))) return $;
					let S = $;
					const I = [];
					for (const L of v)
						for (;;) {
							const D = L.exec($);
							if (!D) break;
							I.push([D.index, L.lastIndex]);
						}
					const T = /^[\\\/]?(node_modules|node_modules\.asar)[\\\/]/,
						P =
							/(file:\/\/)?([a-zA-Z]:(\\\\|\\|\/)|(\\\\|\\|\/))?([\w-\._]+(\\\\|\\|\/))+[\w-\._]*/g;
					let k = 0;
					for (S = ""; ; ) {
						const L = P.exec($);
						if (!L) break;
						const D = I.some(([M, N]) => L.index < N && M < P.lastIndex);
						!T.test(L[0]) &&
							!D &&
							((S += $.substring(k, L.index) + "<REDACTED: user-file-path>"),
							(k = P.lastIndex));
					}
					return k < $.length && (S += $.substr(k)), S;
				}
				function l($) {
					if (!$) return $;
					const v = [
						{ label: "Google API Key", regex: /AIza[A-Za-z0-9_\\\-]{35}/ },
						{ label: "Slack Token", regex: /xox[pbar]\-[A-Za-z0-9]/ },
						{
							label: "GitHub Token",
							regex:
								/(gh[psuro]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})/,
						},
						{
							label: "Generic Secret",
							regex:
								/(key|token|sig|secret|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/i,
						},
						{
							label: "CLI Credentials",
							regex:
								/((login|psexec|(certutil|psexec)\.exe).{1,50}(\s-u(ser(name)?)?\s+.{3,100})?\s-(admin|user|vm|root)?p(ass(word)?)?\s+["']?[^$\-\/\s]|(^|[\s\r\n\\])net(\.exe)?.{1,5}(user\s+|share\s+\/user:| user -? secrets ? set) \s + [^ $\s \/])/,
						},
						{ label: "Email", regex: /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+/ },
					];
					for (const S of v)
						if (S.regex.test($)) return `<REDACTED: ${S.label}>`;
					return $;
				}
				function y($, v) {
					return (0, t.$xo)($, (S) => {
						if (
							S instanceof d ||
							Object.hasOwnProperty.call(S, "isTrustedTelemetryValue")
						)
							return S.value;
						if (typeof S == "string") {
							let I = S.replaceAll("%20", " ");
							I = s(I, v);
							for (const T of v) I = I.replace(T, "");
							return (I = l(I)), I;
						}
					});
				}
			},
		),
		