define(
			de[286],
			he([1, 0, 23, 19, 9, 113, 138, 29, 249, 34, 28, 5, 1178]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6rb = e.$5rb = void 0),
					(e.$5rb = (0, a.$Ni)(E.$Ti));
				class c {
					get remoteAuthority() {
						return this.options.remoteAuthority;
					}
					get expectsResolverExtension() {
						return (
							!!this.options.remoteAuthority?.includes("+") &&
							!this.options.webSocketFactory
						);
					}
					get isBuilt() {
						return !!this.f.commit;
					}
					get shadowWindowForWorkspaceId() {}
					get logLevel() {
						const g = this.b?.get("logLevel");
						return g
							? g.split(",").find((p) => !h.$hn.test(p))
							: this.options.developmentOptions?.logLevel !== void 0
								? (0, r.$xk)(this.options.developmentOptions?.logLevel)
								: void 0;
					}
					get extensionLogLevel() {
						const g = this.b?.get("logLevel");
						if (g) {
							const p = [];
							for (const o of g.split(",")) {
								const f = h.$hn.exec(o);
								f && f[1] && f[2] && p.push([f[1], f[2]]);
							}
							return p.length ? p : void 0;
						}
						return this.options.developmentOptions?.extensionLogLevel !== void 0
							? this.options.developmentOptions?.extensionLogLevel.map(
									([p, o]) => [p, (0, r.$xk)(o)],
								)
							: void 0;
					}
					get profDurationMarkers() {
						const g = this.b?.get("profDurationMarkers");
						if (g) {
							const p = [];
							for (const o of g.split(",")) p.push(o);
							return p.length === 2 ? p : void 0;
						}
					}
					get windowLogsPath() {
						return this.logsHome;
					}
					get logFile() {
						return (0, i.$nh)(this.windowLogsPath, "window.log");
					}
					get userRoamingDataHome() {
						return w.URI.file("/User").with({
							scheme: t.Schemas.vscodeUserData,
						});
					}
					get argvResource() {
						return (0, i.$nh)(this.userRoamingDataHome, "argv.json");
					}
					get cacheHome() {
						return (0, i.$nh)(this.userRoamingDataHome, "caches");
					}
					get workspaceStorageHome() {
						return (0, i.$nh)(this.userRoamingDataHome, "workspaceStorage");
					}
					get localHistoryHome() {
						return (0, i.$nh)(this.userRoamingDataHome, "History");
					}
					get stateResource() {
						return (0, i.$nh)(
							this.userRoamingDataHome,
							"State",
							"storage.json",
						);
					}
					get userDataSyncHome() {
						return (0, i.$nh)(this.userRoamingDataHome, "sync", this.d);
					}
					get sync() {}
					get keyboardLayoutResource() {
						return (0, i.$nh)(this.userRoamingDataHome, "keyboardLayout.json");
					}
					get untitledWorkspacesHome() {
						return (0, i.$nh)(this.userRoamingDataHome, "Workspaces");
					}
					get serviceMachineIdResource() {
						return (0, i.$nh)(this.userRoamingDataHome, "machineid");
					}
					get extHostLogsPath() {
						return (0, i.$nh)(this.logsHome, "exthost");
					}
					get extHostTelemetryLogFile() {
						return (0, i.$nh)(this.extHostLogsPath, "extensionTelemetry.log");
					}
					get debugExtensionHost() {
						return this.a || (this.a = this.g()), this.a.params;
					}
					get isExtensionDevelopment() {
						return this.a || (this.a = this.g()), this.a.isExtensionDevelopment;
					}
					get extensionDevelopmentLocationURI() {
						return (
							this.a || (this.a = this.g()),
							this.a.extensionDevelopmentLocationURI
						);
					}
					get extensionDevelopmentLocationKind() {
						return (
							this.a || (this.a = this.g()), this.a.extensionDevelopmentKind
						);
					}
					get extensionTestsLocationURI() {
						return (
							this.a || (this.a = this.g()), this.a.extensionTestsLocationURI
						);
					}
					get extensionEnabledProposedApi() {
						return (
							this.a || (this.a = this.g()), this.a.extensionEnabledProposedApi
						);
					}
					get debugRenderer() {
						return this.a || (this.a = this.g()), this.a.debugRenderer;
					}
					get enableSmokeTestDriver() {
						return this.options.developmentOptions?.enableSmokeTestDriver;
					}
					get disableExtensions() {
						return this.b?.get("disableExtensions") === "true";
					}
					get enableExtensions() {
						return this.options.enabledExtensions;
					}
					get webviewExternalEndpoint() {
						const g =
								this.options.webviewEndpoint ||
								this.f.webviewContentExternalBaseUrlTemplate ||
								"https://{{uuid}}.vscode-cdn.net/{{quality}}/{{commit}}/out/vs/workbench/contrib/webview/browser/pre/",
							p = this.b?.get("webviewExternalEndpointCommit");
						return g
							.replace(
								"{{commit}}",
								p ??
									this.f.commit ??
									"ef65ac1ba57f57f2a3961bfe94aa20481caca4c6",
							)
							.replace(
								"{{quality}}",
								(p ? "insider" : this.f.quality) ?? "insider",
							);
					}
					get extensionTelemetryLogResource() {
						return (0, i.$nh)(this.logsHome, "extensionTelemetry.log");
					}
					get disableTelemetry() {
						return !1;
					}
					get verbose() {
						return this.b?.get("verbose") === "true";
					}
					get logExtensionHostCommunication() {
						return this.b?.get("logExtensionHostCommunication") === "true";
					}
					get skipReleaseNotes() {
						return this.b?.get("skipReleaseNotes") === "true";
					}
					get skipWelcome() {
						return this.b?.get("skipWelcome") === "true";
					}
					get skipOnboarding() {
						return this.b?.get("skipOnboarding") === "true";
					}
					get overrideCursorAuthToken() {
						return this.b?.get("overrideCursorAuthToken");
					}
					get disableWorkspaceTrust() {
						return !this.options.enableWorkspaceTrust;
					}
					get profile() {
						return this.b?.get("profile");
					}
					constructor(g, p, o, f) {
						if (
							((this.d = g),
							(this.logsHome = p),
							(this.options = o),
							(this.f = f),
							(this.a = void 0),
							(this.editSessionId = this.options.editSessionId),
							o.workspaceProvider && Array.isArray(o.workspaceProvider.payload))
						)
							try {
								this.b = new Map(o.workspaceProvider.payload);
							} catch (b) {
								(0, d.$4)(b);
							}
					}
					g() {
						const g = {
							params: { port: null, break: !1 },
							debugRenderer: !1,
							isExtensionDevelopment: !1,
							extensionDevelopmentLocationURI: void 0,
							extensionDevelopmentKind: void 0,
						};
						if (this.b)
							for (const [o, f] of this.b)
								switch (o) {
									case "extensionDevelopmentPath":
										g.extensionDevelopmentLocationURI ||
											(g.extensionDevelopmentLocationURI = []),
											g.extensionDevelopmentLocationURI.push(w.URI.parse(f)),
											(g.isExtensionDevelopment = !0);
										break;
									case "extensionDevelopmentKind":
										g.extensionDevelopmentKind = [f];
										break;
									case "extensionTestsPath":
										g.extensionTestsLocationURI = w.URI.parse(f);
										break;
									case "debugRenderer":
										g.debugRenderer = f === "true";
										break;
									case "debugId":
										g.params.debugId = f;
										break;
									case "inspect-brk-extensions":
										(g.params.port = parseInt(f)), (g.params.break = !0);
										break;
									case "inspect-extensions":
										g.params.port = parseInt(f);
										break;
									case "enableProposedApi":
										g.extensionEnabledProposedApi = [];
										break;
								}
						const p = this.options.developmentOptions;
						return (
							p &&
								!g.isExtensionDevelopment &&
								(p.extensions?.length &&
									((g.extensionDevelopmentLocationURI = p.extensions.map((o) =>
										w.URI.revive(o),
									)),
									(g.isExtensionDevelopment = !0)),
								p.extensionTestsPath &&
									(g.extensionTestsLocationURI = w.URI.revive(
										p.extensionTestsPath,
									))),
							g
						);
					}
					get filesToOpenOrCreate() {
						if (this.b) {
							const g = this.b.get("openFile");
							if (g) {
								const p = w.URI.parse(g);
								if (this.b.has("gotoLineMode")) {
									const o = (0, m.$Tg)(p.path);
									return [
										{
											fileUri: p.with({ path: o.path }),
											options: {
												selection: (0, u.$sg)(o.line)
													? void 0
													: {
															startLineNumber: o.line,
															startColumn: o.column || 1,
														},
											},
										},
									];
								}
								return [{ fileUri: p }];
							}
						}
					}
					get filesToDiff() {
						if (this.b) {
							const g = this.b.get("diffFilePrimary"),
								p = this.b.get("diffFileSecondary");
							if (g && p)
								return [
									{ fileUri: w.URI.parse(p) },
									{ fileUri: w.URI.parse(g) },
								];
						}
					}
					get filesToMerge() {
						if (this.b) {
							const g = this.b.get("mergeFile1"),
								p = this.b.get("mergeFile2"),
								o = this.b.get("mergeFileBase"),
								f = this.b.get("mergeFileResult");
							if (g && p && o && f)
								return [
									{ fileUri: w.URI.parse(g) },
									{ fileUri: w.URI.parse(p) },
									{ fileUri: w.URI.parse(o) },
									{ fileUri: w.URI.parse(f) },
								];
						}
					}
				}
				(e.$6rb = c),
					Ne([C.$ei], c.prototype, "remoteAuthority", null),
					Ne([C.$ei], c.prototype, "expectsResolverExtension", null),
					Ne([C.$ei], c.prototype, "isBuilt", null),
					Ne([C.$ei], c.prototype, "shadowWindowForWorkspaceId", null),
					Ne([C.$ei], c.prototype, "logLevel", null),
					Ne([C.$ei], c.prototype, "windowLogsPath", null),
					Ne([C.$ei], c.prototype, "logFile", null),
					Ne([C.$ei], c.prototype, "userRoamingDataHome", null),
					Ne([C.$ei], c.prototype, "argvResource", null),
					Ne([C.$ei], c.prototype, "cacheHome", null),
					Ne([C.$ei], c.prototype, "workspaceStorageHome", null),
					Ne([C.$ei], c.prototype, "localHistoryHome", null),
					Ne([C.$ei], c.prototype, "stateResource", null),
					Ne([C.$ei], c.prototype, "userDataSyncHome", null),
					Ne([C.$ei], c.prototype, "sync", null),
					Ne([C.$ei], c.prototype, "keyboardLayoutResource", null),
					Ne([C.$ei], c.prototype, "untitledWorkspacesHome", null),
					Ne([C.$ei], c.prototype, "serviceMachineIdResource", null),
					Ne([C.$ei], c.prototype, "extHostLogsPath", null),
					Ne([C.$ei], c.prototype, "extHostTelemetryLogFile", null),
					Ne([C.$ei], c.prototype, "debugExtensionHost", null),
					Ne([C.$ei], c.prototype, "isExtensionDevelopment", null),
					Ne([C.$ei], c.prototype, "extensionDevelopmentLocationURI", null),
					Ne([C.$ei], c.prototype, "extensionDevelopmentLocationKind", null),
					Ne([C.$ei], c.prototype, "extensionTestsLocationURI", null),
					Ne([C.$ei], c.prototype, "extensionEnabledProposedApi", null),
					Ne([C.$ei], c.prototype, "debugRenderer", null),
					Ne([C.$ei], c.prototype, "enableSmokeTestDriver", null),
					Ne([C.$ei], c.prototype, "disableExtensions", null),
					Ne([C.$ei], c.prototype, "enableExtensions", null),
					Ne([C.$ei], c.prototype, "webviewExternalEndpoint", null),
					Ne([C.$ei], c.prototype, "extensionTelemetryLogResource", null),
					Ne([C.$ei], c.prototype, "disableTelemetry", null),
					Ne([C.$ei], c.prototype, "verbose", null),
					Ne([C.$ei], c.prototype, "logExtensionHostCommunication", null),
					Ne([C.$ei], c.prototype, "skipReleaseNotes", null),
					Ne([C.$ei], c.prototype, "skipWelcome", null),
					Ne([C.$ei], c.prototype, "skipOnboarding", null),
					Ne([C.$ei], c.prototype, "overrideCursorAuthToken", null),
					Ne([C.$ei], c.prototype, "disableWorkspaceTrust", null),
					Ne([C.$ei], c.prototype, "profile", null),
					Ne([C.$ei], c.prototype, "filesToOpenOrCreate", null),
					Ne([C.$ei], c.prototype, "filesToDiff", null),
					Ne([C.$ei], c.prototype, "filesToMerge", null);
			},
		),
		