import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/environment/common/environmentService.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/network.js';
import '../../../../base/common/resources.js';
define(
			de[151],
			he([1, 0, 113, 5, 1178, 138, 23, 19]),
			function (ce /*require*/,
 e /*exports*/,
 t /*environment*/,
 i /*instantiation*/,
 w /*environmentService*/,
 E /*decorators*/,
 C /*network*/,
 d /*resources*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vcd = e.$ucd = void 0),
					(e.$ucd = (0, i.$Ni)(t.$Ti));
				class m extends w.$in {
					get mainPid() {
						return this.d.mainPid;
					}
					get machineId() {
						return this.d.machineId;
					}
					get macMachineId() {
						return this.d.macMachineId;
					}
					get sqmId() {
						return this.d.sqmId;
					}
					get devDeviceId() {
						return this.d.devDeviceId;
					}
					get remoteAuthority() {
						return this.d.remoteAuthority;
					}
					get expectsResolverExtension() {
						return !!this.d.remoteAuthority?.includes("+");
					}
					get execPath() {
						return this.d.execPath;
					}
					get backupPath() {
						return this.d.backupPath;
					}
					get window() {
						return {
							id: this.d.windowId,
							colorScheme: this.d.colorScheme,
							maximized: this.d.maximized,
							accessibilitySupport: this.d.accessibilitySupport,
							perfMarks: this.d.perfMarks,
							isInitialStartup: this.d.isInitialStartup,
							isCodeCaching: typeof this.d.codeCachePath == "string",
						};
					}
					get shadowWindowForWorkspaceId() {
						return this.d.shadowWindowForWorkspaceId;
					}
					get windowLogsPath() {
						return (0, d.$nh)(this.logsHome, `window${this.d.windowId}`);
					}
					get logFile() {
						return (0, d.$nh)(this.windowLogsPath, "renderer.log");
					}
					get extHostLogsPath() {
						return (0, d.$nh)(this.windowLogsPath, "exthost");
					}
					get extHostTelemetryLogFile() {
						return (0, d.$nh)(this.extHostLogsPath, "extensionTelemetry.log");
					}
					get webviewExternalEndpoint() {
						return `${C.Schemas.vscodeWebview}://{{uuid}}`;
					}
					get skipReleaseNotes() {
						return !!this.args["skip-release-notes"];
					}
					get skipWelcome() {
						return !!this.args["skip-welcome"];
					}
					get skipOnboarding() {
						return !!this.args["skip-onboarding"];
					}
					get overrideCursorAuthToken() {
						return this.args["override-cursor-auth-token"];
					}
					get logExtensionHostCommunication() {
						return !!this.args.logExtensionHostCommunication;
					}
					get enableSmokeTestDriver() {
						return !!this.args["enable-smoke-test-driver"];
					}
					get extensionEnabledProposedApi() {
						if (Array.isArray(this.args["enable-proposed-api"]))
							return this.args["enable-proposed-api"];
						if ("enable-proposed-api" in this.args) return [];
					}
					get os() {
						return this.d.os;
					}
					get filesToOpenOrCreate() {
						return this.d.filesToOpenOrCreate;
					}
					get filesToDiff() {
						return this.d.filesToDiff;
					}
					get filesToMerge() {
						return this.d.filesToMerge;
					}
					get filesToWait() {
						return this.d.filesToWait;
					}
					constructor(u, a) {
						super(
							u,
							{
								homeDir: u.homeDir,
								tmpDir: u.tmpDir,
								userDataDir: u.userDataDir,
							},
							a,
						),
							(this.d = u);
					}
				}
				(e.$vcd = m),
					Ne([E.$ei], m.prototype, "mainPid", null),
					Ne([E.$ei], m.prototype, "machineId", null),
					Ne([E.$ei], m.prototype, "macMachineId", null),
					Ne([E.$ei], m.prototype, "sqmId", null),
					Ne([E.$ei], m.prototype, "devDeviceId", null),
					Ne([E.$ei], m.prototype, "remoteAuthority", null),
					Ne([E.$ei], m.prototype, "expectsResolverExtension", null),
					Ne([E.$ei], m.prototype, "execPath", null),
					Ne([E.$ei], m.prototype, "backupPath", null),
					Ne([E.$ei], m.prototype, "window", null),
					Ne([E.$ei], m.prototype, "shadowWindowForWorkspaceId", null),
					Ne([E.$ei], m.prototype, "windowLogsPath", null),
					Ne([E.$ei], m.prototype, "logFile", null),
					Ne([E.$ei], m.prototype, "extHostLogsPath", null),
					Ne([E.$ei], m.prototype, "extHostTelemetryLogFile", null),
					Ne([E.$ei], m.prototype, "webviewExternalEndpoint", null),
					Ne([E.$ei], m.prototype, "skipReleaseNotes", null),
					Ne([E.$ei], m.prototype, "skipWelcome", null),
					Ne([E.$ei], m.prototype, "skipOnboarding", null),
					Ne([E.$ei], m.prototype, "overrideCursorAuthToken", null),
					Ne([E.$ei], m.prototype, "logExtensionHostCommunication", null),
					Ne([E.$ei], m.prototype, "enableSmokeTestDriver", null),
					Ne([E.$ei], m.prototype, "extensionEnabledProposedApi", null),
					Ne([E.$ei], m.prototype, "os", null),
					Ne([E.$ei], m.prototype, "filesToOpenOrCreate", null),
					Ne([E.$ei], m.prototype, "filesToDiff", null),
					Ne([E.$ei], m.prototype, "filesToMerge", null),
					Ne([E.$ei], m.prototype, "filesToWait", null);
			},
		)
