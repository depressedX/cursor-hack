define(de[3542], he([1, 0, 9, 197]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$qK = void 0);
			class w {
				static async getEnvironmentData(C, d, m) {
					const r = { remoteAuthority: d, profile: m },
						u = await C.call("getEnvironmentData", r);
					return {
						pid: u.pid,
						connectionToken: u.connectionToken,
						appRoot: t.URI.revive(u.appRoot),
						settingsPath: t.URI.revive(u.settingsPath),
						logsPath: t.URI.revive(u.logsPath),
						extensionHostLogsPath: t.URI.revive(u.extensionHostLogsPath),
						globalStorageHome: t.URI.revive(u.globalStorageHome),
						workspaceStorageHome: t.URI.revive(u.workspaceStorageHome),
						localHistoryHome: t.URI.revive(u.localHistoryHome),
						userHome: t.URI.revive(u.userHome),
						os: u.os,
						arch: u.arch,
						marks: u.marks,
						useHostProxy: u.useHostProxy,
						profiles: (0, i.$ji)(u.profiles),
						isUnsupportedGlibc: u.isUnsupportedGlibc,
					};
				}
				static async getExtensionHostExitInfo(C, d, m) {
					const r = { remoteAuthority: d, reconnectionToken: m };
					return C.call("getExtensionHostExitInfo", r);
				}
				static getDiagnosticInfo(C, d) {
					return C.call("getDiagnosticInfo", d);
				}
				static updateTelemetryLevel(C, d) {
					return C.call("updateTelemetryLevel", { telemetryLevel: d });
				}
				static logTelemetry(C, d, m) {
					return C.call("logTelemetry", { eventName: d, data: m });
				}
				static registerAuthId(C, d) {
					return C.call("registerAuthId", { authId: d });
				}
				static flushTelemetry(C) {
					return C.call("flushTelemetry");
				}
				static async ping(C) {
					await C.call("ping");
				}
			}
			e.$qK = w;
		}),
		