define(de[116], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.TextEditorSelectionSource =
					e.TextEditorSelectionRevealType =
					e.EditorOpenSource =
					e.EditorResolution =
					e.EditorActivation =
						void 0),
				(e.$vO = t);
			function t(m) {
				const r = m;
				return (
					typeof r?.resolve == "function" && typeof r?.isResolved == "function"
				);
			}
			var i;
			(function (m) {
				(m[(m.ACTIVATE = 1)] = "ACTIVATE"),
					(m[(m.RESTORE = 2)] = "RESTORE"),
					(m[(m.PRESERVE = 3)] = "PRESERVE");
			})(i || (e.EditorActivation = i = {}));
			var w;
			(function (m) {
				(m[(m.PICK = 0)] = "PICK"),
					(m[(m.EXCLUSIVE_ONLY = 1)] = "EXCLUSIVE_ONLY");
			})(w || (e.EditorResolution = w = {}));
			var E;
			(function (m) {
				(m[(m.API = 0)] = "API"), (m[(m.USER = 1)] = "USER");
			})(E || (e.EditorOpenSource = E = {}));
			var C;
			(function (m) {
				(m[(m.Center = 0)] = "Center"),
					(m[(m.CenterIfOutsideViewport = 1)] = "CenterIfOutsideViewport"),
					(m[(m.NearTop = 2)] = "NearTop"),
					(m[(m.NearTopIfOutsideViewport = 3)] = "NearTopIfOutsideViewport");
			})(C || (e.TextEditorSelectionRevealType = C = {}));
			var d;
			(function (m) {
				(m.PROGRAMMATIC = "api"),
					(m.NAVIGATION = "code.navigation"),
					(m.JUMP = "code.jump");
			})(d || (e.TextEditorSelectionSource = d = {}));
		}),
		define(
			de[1178],
			he([1, 0, 275, 138, 23, 54, 344, 19, 9]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$in = e.$hn = void 0),
					(e.$jn = u),
					(e.$kn = a),
					(e.$hn = /^([^.]+\..+)[:=](.+)$/);
				class r {
					get appRoot() {
						return (0, E.$rc)(w.$7g.asFileUri("").fsPath);
					}
					get userHome() {
						return m.URI.file(this.b.homeDir);
					}
					get userDataPath() {
						return this.b.userDataDir;
					}
					get appSettingsHome() {
						return m.URI.file((0, E.$oc)(this.userDataPath, "User"));
					}
					get tmpDir() {
						return m.URI.file(this.b.tmpDir);
					}
					get cacheHome() {
						return m.URI.file(this.userDataPath);
					}
					get stateResource() {
						return (0, d.$nh)(
							this.appSettingsHome,
							"globalStorage",
							"storage.json",
						);
					}
					get userRoamingDataHome() {
						return this.appSettingsHome.with({
							scheme: w.Schemas.vscodeUserData,
						});
					}
					get userDataSyncHome() {
						return (0, d.$nh)(this.appSettingsHome, "sync");
					}
					get logsHome() {
						if (!this.args.logsPath) {
							const c = (0, t.$gn)(new Date()).replace(/-|:|\.\d+Z$/g, "");
							this.args.logsPath = (0, E.$oc)(this.userDataPath, "logs", c);
						}
						return m.URI.file(this.args.logsPath);
					}
					get sync() {
						return this.args.sync;
					}
					get machineSettingsResource() {
						return (0, d.$nh)(
							m.URI.file((0, E.$oc)(this.userDataPath, "Machine")),
							"settings.json",
						);
					}
					get workspaceStorageHome() {
						return (0, d.$nh)(this.appSettingsHome, "workspaceStorage");
					}
					get localHistoryHome() {
						return (0, d.$nh)(this.appSettingsHome, "History");
					}
					get keyboardLayoutResource() {
						return (0, d.$nh)(this.userRoamingDataHome, "keyboardLayout.json");
					}
					get argvResource() {
						const c = C.env.VSCODE_PORTABLE;
						return c
							? m.URI.file((0, E.$oc)(c, "argv.json"))
							: (0, d.$nh)(this.userHome, this.c.dataFolderName, "argv.json");
					}
					get isExtensionDevelopment() {
						return !!this.args.extensionDevelopmentPath;
					}
					get untitledWorkspacesHome() {
						return m.URI.file((0, E.$oc)(this.userDataPath, "Workspaces"));
					}
					get builtinExtensionsPath() {
						const c = this.args["builtin-extensions-dir"];
						return c
							? (0, E.$pc)(c)
							: (0, E.$mc)(
									(0, E.$oc)(w.$7g.asFileUri("").fsPath, "..", "extensions"),
								);
					}
					get extensionsDownloadLocation() {
						const c = this.args["extensions-download-dir"];
						return c
							? m.URI.file((0, E.$pc)(c))
							: m.URI.file(
									(0, E.$oc)(this.userDataPath, "CachedExtensionVSIXs"),
								);
					}
					get extensionsPath() {
						const c = this.args["extensions-dir"];
						if (c) return (0, E.$pc)(c);
						const n = C.env.VSCODE_EXTENSIONS;
						if (n) return n;
						const g = C.env.VSCODE_PORTABLE;
						return g
							? (0, E.$oc)(g, "extensions")
							: (0, d.$nh)(this.userHome, this.c.dataFolderName, "extensions")
									.fsPath;
					}
					get extensionDevelopmentLocationURI() {
						const c = this.args.extensionDevelopmentPath;
						if (Array.isArray(c))
							return c.map((n) =>
								/^[^:/?#]+?:\/\//.test(n)
									? m.URI.parse(n)
									: m.URI.file((0, E.$mc)(n)),
							);
					}
					get extensionDevelopmentKind() {
						return this.args.extensionDevelopmentKind?.map((c) =>
							c === "ui" || c === "workspace" || c === "web" ? c : "workspace",
						);
					}
					get extensionTestsLocationURI() {
						const c = this.args.extensionTestsPath;
						if (c)
							return /^[^:/?#]+?:\/\//.test(c)
								? m.URI.parse(c)
								: m.URI.file((0, E.$mc)(c));
					}
					get disableExtensions() {
						if (this.args["disable-extensions"]) return !0;
						const c = this.args["disable-extension"];
						if (c) {
							if (typeof c == "string") return [c];
							if (Array.isArray(c) && c.length > 0) return c;
						}
						return !1;
					}
					get debugExtensionHost() {
						return u(this.args, this.isBuilt);
					}
					get debugRenderer() {
						return !!this.args.debugRenderer;
					}
					get isBuilt() {
						return !C.env.VSCODE_DEV;
					}
					get verbose() {
						return !!this.args.verbose;
					}
					get logLevel() {
						return this.args.log?.find((c) => !e.$hn.test(c));
					}
					get extensionLogLevel() {
						const c = [];
						for (const n of this.args.log || []) {
							const g = e.$hn.exec(n);
							g && g[1] && g[2] && c.push([g[1], g[2]]);
						}
						return c.length ? c : void 0;
					}
					get serviceMachineIdResource() {
						return (0, d.$nh)(m.URI.file(this.userDataPath), "machineid");
					}
					get crashReporterId() {
						return this.args["crash-reporter-id"];
					}
					get crashReporterDirectory() {
						return this.args["crash-reporter-directory"];
					}
					get disableTelemetry() {
						return !!this.args["disable-telemetry"];
					}
					get disableWorkspaceTrust() {
						return !!this.args["disable-workspace-trust"];
					}
					get useInMemorySecretStorage() {
						return !!this.args["use-inmemory-secretstorage"];
					}
					get policyFile() {
						if (this.args["__enable-file-policy"]) {
							const c = C.env.VSCODE_PORTABLE;
							return c
								? m.URI.file((0, E.$oc)(c, "policy.json"))
								: (0, d.$nh)(
										this.userHome,
										this.c.dataFolderName,
										"policy.json",
									);
						}
					}
					get continueOn() {
						return this.args.continueOn;
					}
					set continueOn(c) {
						this.args.continueOn = c;
					}
					get args() {
						return this.a;
					}
					constructor(c, n, g) {
						(this.a = c),
							(this.b = n),
							(this.c = g),
							(this.editSessionId = this.args.editSessionId);
					}
				}
				(e.$in = r),
					Ne([i.$ei], r.prototype, "appRoot", null),
					Ne([i.$ei], r.prototype, "userHome", null),
					Ne([i.$ei], r.prototype, "userDataPath", null),
					Ne([i.$ei], r.prototype, "appSettingsHome", null),
					Ne([i.$ei], r.prototype, "tmpDir", null),
					Ne([i.$ei], r.prototype, "cacheHome", null),
					Ne([i.$ei], r.prototype, "stateResource", null),
					Ne([i.$ei], r.prototype, "userRoamingDataHome", null),
					Ne([i.$ei], r.prototype, "userDataSyncHome", null),
					Ne([i.$ei], r.prototype, "sync", null),
					Ne([i.$ei], r.prototype, "machineSettingsResource", null),
					Ne([i.$ei], r.prototype, "workspaceStorageHome", null),
					Ne([i.$ei], r.prototype, "localHistoryHome", null),
					Ne([i.$ei], r.prototype, "keyboardLayoutResource", null),
					Ne([i.$ei], r.prototype, "argvResource", null),
					Ne([i.$ei], r.prototype, "isExtensionDevelopment", null),
					Ne([i.$ei], r.prototype, "untitledWorkspacesHome", null),
					Ne([i.$ei], r.prototype, "builtinExtensionsPath", null),
					Ne([i.$ei], r.prototype, "extensionsPath", null),
					Ne([i.$ei], r.prototype, "extensionDevelopmentLocationURI", null),
					Ne([i.$ei], r.prototype, "extensionDevelopmentKind", null),
					Ne([i.$ei], r.prototype, "extensionTestsLocationURI", null),
					Ne([i.$ei], r.prototype, "debugExtensionHost", null),
					Ne([i.$ei], r.prototype, "logLevel", null),
					Ne([i.$ei], r.prototype, "extensionLogLevel", null),
					Ne([i.$ei], r.prototype, "serviceMachineIdResource", null),
					Ne([i.$ei], r.prototype, "disableTelemetry", null),
					Ne([i.$ei], r.prototype, "disableWorkspaceTrust", null),
					Ne([i.$ei], r.prototype, "useInMemorySecretStorage", null),
					Ne([i.$ei], r.prototype, "policyFile", null);
				function u(h, c) {
					return a(
						h["inspect-extensions"],
						h["inspect-brk-extensions"],
						5870,
						c,
						h.debugId,
						h.extensionEnvironment,
					);
				}
				function a(h, c, n, g, p, o) {
					const b = Number(c || h) || (g ? null : n),
						s = b ? !!c : !1;
					let l;
					if (o)
						try {
							l = JSON.parse(o);
						} catch {}
					return { port: b, break: s, debugId: p, env: l };
				}
			},
		),
		