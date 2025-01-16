define(de[143], he([1, 0, 5, 15]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$_m = e.$$m = void 0),
				(e.$$m = (0, t.$Mi)("remoteAgentService")),
				(e.$_m = new (class {
					constructor() {
						(this.maxSampleCount = 5),
							(this.sampleDelay = 2e3),
							(this.initial = []),
							(this.maxInitialCount = 3),
							(this.average = []),
							(this.maxAverageCount = 100),
							(this.highLatencyMultiple = 2),
							(this.highLatencyMinThreshold = 500),
							(this.highLatencyMaxThreshold = 1500),
							(this.lastMeasurement = void 0);
					}
					get latency() {
						return this.lastMeasurement;
					}
					async measure(w) {
						let E = 1 / 0;
						for (let d = 0; d < this.maxSampleCount; d++) {
							const m = await w.getRoundTripTime();
							if (m === void 0) return;
							(E = Math.min(E, m / 2)), await (0, i.$Nh)(this.sampleDelay);
						}
						this.average.push(E),
							this.average.length > this.maxAverageCount &&
								this.average.shift();
						let C;
						return (
							this.initial.length < this.maxInitialCount
								? this.initial.push(E)
								: (C =
										this.initial.reduce((d, m) => d + m, 0) /
										this.initial.length),
							(this.lastMeasurement = {
								initial: C,
								current: E,
								average:
									this.average.reduce((d, m) => d + m, 0) / this.average.length,
								high:
									typeof C > "u"
										? !1
										: E > this.highLatencyMaxThreshold ||
											(E > this.highLatencyMinThreshold &&
												E > C * this.highLatencyMultiple),
							}),
							this.lastMeasurement
						);
					}
				})());
		}),
		define(
			de[3543],
			he([
				1, 0, 3, 88, 101, 9, 5, 34, 117, 2826, 107, 1758, 807, 774, 145, 143,
				12, 15, 513, 998, 189,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Foc = void 0),
					(e.$Goc = v);
				let l = class {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						(this.l = T),
							(this.m = P),
							(this.n = k),
							(this.o = L),
							(this.p = D),
							(this.q = M),
							(this.s = N),
							(this.t = A),
							(this.u = O),
							(this.v = B),
							(this.w = U),
							(this.a = new t.$Zc()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new Map()),
							(this.g = new Map()),
							(this.h = new t.$2c()),
							(this.i = new t.$2c()),
							(this.j = this.a.add(new t.$2c())),
							(this.k = p.OS),
							(this.b = T.getProxy(i.$mbb.ExtHostTerminalService)),
							this.a.add(
								P.onDidCreateInstance((F) => {
									this.F(F), this.H(F);
								}),
							),
							this.a.add(P.onDidDisposeInstance((F) => this.E(F))),
							this.a.add(P.onAnyInstanceProcessIdReady((F) => this.G(F))),
							this.a.add(P.onDidChangeInstanceDimensions((F) => this.H(F))),
							this.a.add(
								P.onAnyInstanceMaximumDimensionsChange((F) => this.I(F)),
							),
							this.a.add(
								P.onDidRequestStartExtensionTerminal((F) => this.J(F)),
							),
							this.a.add(
								P.onDidChangeActiveInstance((F) =>
									this.A(F ? F.instanceId : null),
								),
							),
							this.a.add(
								P.onAnyInstanceTitleChange(
									(F) => F && this.D(F.instanceId, F.title),
								),
							),
							this.a.add(
								P.onAnyInstanceDataInput((F) =>
									this.b.$acceptTerminalInteraction(F.instanceId),
								),
							),
							this.a.add(
								P.onAnyInstanceSelectionChange((F) =>
									this.b.$acceptTerminalSelection(F.instanceId, F.selection),
								),
							);
						for (const F of this.m.instances)
							this.F(F), F.processReady.then(() => this.G(F));
						const z = this.m.activeInstance;
						if (
							(z && this.b.$acceptActiveTerminalChanged(z.instanceId),
							this.q.collections.size > 0)
						) {
							const x = [...this.q.collections.entries()].map((H) => [
								H[0],
								(0, c.$_J)(H[1].map),
							]);
							this.b.$initEnvironmentVariableCollections(x);
						}
						R.getEnvironment().then(async (F) => {
							(this.k = F?.os || p.OS), this.x();
						}),
							this.a.add(this.w.onDidChangeAvailableProfiles(() => this.x()));
					}
					dispose() {
						this.a.dispose();
						for (const T of this.f.values()) T.dispose();
						for (const T of this.g.values()) T.dispose();
					}
					async x() {
						const T = this.l.remoteAuthority ?? void 0,
							P = this.t.getDefaultProfile({ remoteAuthority: T, os: this.k }),
							k = this.t.getDefaultProfile({
								remoteAuthority: T,
								os: this.k,
								allowAutomationShell: !0,
							});
						this.b.$acceptDefaultProfile(...(await Promise.all([P, k])));
					}
					async y(T) {
						return typeof T == "string"
							? this.c.get(T)
							: this.m.getInstanceFromId(T);
					}
					async $createTerminal(T, P) {
						const k = {
								name: P.name,
								executable: P.shellPath,
								args: P.shellArgs,
								cwd: typeof P.cwd == "string" ? P.cwd : E.URI.revive(P.cwd),
								icon: P.icon,
								color: P.color,
								initialText: P.initialText,
								waitOnExit: P.waitOnExit,
								ignoreConfigurationCwd: !0,
								env: P.env,
								strictEnv: P.strictEnv,
								hideFromUser: P.hideFromUser,
								customPtyImplementation: P.isExtensionCustomPtyTerminal
									? (M, N, A) => new a.$voc(M, N, A, this.m)
									: void 0,
								extHostTerminalId: T,
								forceShellIntegration: P.forceShellIntegration,
								isFeatureTerminal: P.isFeatureTerminal,
								isExtensionOwnedTerminal: P.isExtensionOwnedTerminal,
								useShellEnvironment: P.useShellEnvironment,
								isTransient: P.isTransient,
							},
							L = o.Promises.withAsyncBody(async (M) => {
								const N = await this.m.createTerminal({
									config: k,
									location: await this.z(P.location),
								});
								M(N);
							});
						this.c.set(T, L);
						const D = await L;
						this.a.add(
							D.onDisposed(() => {
								this.c.delete(T);
							}),
						);
					}
					async z(T) {
						if (typeof T == "object" && "parentTerminal" in T) {
							const P = await this.c.get(T.parentTerminal.toString());
							return P ? { parentTerminal: P } : void 0;
						}
						return T;
					}
					async $show(T, P) {
						const k = await this.y(T);
						k &&
							(this.m.setActiveInstance(k),
							k.target === m.TerminalLocation.Editor
								? await this.v.revealActiveEditor(P)
								: await this.u.showPanel(!P));
					}
					async $hide(T) {
						const P = await this.y(T),
							k = this.m.activeInstance;
						k &&
							k.instanceId === P?.instanceId &&
							k.target !== m.TerminalLocation.Editor &&
							this.u.hidePanel();
					}
					async $dispose(T) {
						(await this.y(T))?.dispose(m.TerminalExitReason.Extension);
					}
					async $sendText(T, P, k) {
						await (await this.y(T))?.sendText(P, k);
					}
					$sendProcessExit(T, P) {
						this.d.get(T)?.emitExit(P);
					}
					$startSendingDataEvents() {
						if (!this.h.value) {
							this.h.value = this.p.createInstance(y, (T, P) => {
								this.B(T, P);
							});
							for (const T of this.m.instances)
								for (const P of T.initialDataEvents || [])
									this.B(T.instanceId, P);
						}
					}
					$stopSendingDataEvents() {
						this.h.clear();
					}
					$startSendingCommandEvents() {
						if (this.i.value) return;
						const T = this.m.createOnInstanceCapabilityEvent(
								s.TerminalCapability.CommandDetection,
								(k) => k.onCommandFinished,
							),
							P = T.event((k) => {
								this.C(k.instance.instanceId, {
									commandLine: k.data.command,
									cwd: k.data.cwd,
									exitCode: k.data.exitCode,
									output: k.data.getOutput(),
								});
							});
						this.i.value = (0, t.$Xc)(T, P);
					}
					$stopSendingCommandEvents() {
						this.i.clear();
					}
					$startLinkProvider() {
						this.j.value = this.n.registerLinkProvider(new $(this.b));
					}
					$stopLinkProvider() {
						this.j.clear();
					}
					$registerProcessSupport(T) {
						this.m.registerProcessSupport(T);
					}
					$registerProfileProvider(T, P) {
						this.f.set(
							T,
							this.w.registerTerminalProfileProvider(P, T, {
								createContributedTerminalProfile: async (k) =>
									this.b.$createContributedProfileTerminal(T, k),
							}),
						);
					}
					$unregisterProfileProvider(T) {
						this.f.get(T)?.dispose(), this.f.delete(T);
					}
					async $registerQuickFixProvider(T, P) {
						this.g.set(
							T,
							this.o.registerQuickFixProvider(T, {
								provideTerminalQuickFixes: async (k, L, D, M) => {
									if (M.isCancellationRequested) return;
									D.outputMatcher?.length &&
										D.outputMatcher.length > 40 &&
										((D.outputMatcher.length = 40),
										this.s.warn("Cannot exceed output matcher length of 40"));
									const N = k.command.match(D.commandLineMatcher);
									if (!N || !L) return;
									const A = D.outputMatcher;
									let R;
									if ((A && (R = v(L, A)), !R)) return;
									const O = {
										commandLineMatch: N,
										outputMatch: R,
										commandLine: k.command,
									};
									if (O) {
										const B = await this.b.$provideTerminalQuickFixes(T, O, M);
										if (B && Array.isArray(B)) return B.map((U) => S(T, P, U));
										if (B) return S(T, P, B);
									}
								},
							}),
						);
					}
					$unregisterQuickFixProvider(T) {
						this.g.get(T)?.dispose(), this.g.delete(T);
					}
					A(T) {
						this.b.$acceptActiveTerminalChanged(T);
					}
					B(T, P) {
						this.b.$acceptTerminalProcessData(T, P);
					}
					C(T, P) {
						this.b.$acceptDidExecuteCommand(T, P);
					}
					D(T, P) {
						this.b.$acceptTerminalTitleChange(T, P);
					}
					E(T) {
						this.b.$acceptTerminalClosed(
							T.instanceId,
							T.exitCode,
							T.exitReason ?? m.TerminalExitReason.Unknown,
						);
					}
					F(T) {
						const P = T.shellLaunchConfig.extHostTerminalId,
							k = {
								name: T.shellLaunchConfig.name,
								executable: T.shellLaunchConfig.executable,
								args: T.shellLaunchConfig.args,
								cwd: T.shellLaunchConfig.cwd,
								env: T.shellLaunchConfig.env,
								hideFromUser: T.shellLaunchConfig.hideFromUser,
							};
						this.b.$acceptTerminalOpened(T.instanceId, P, T.title, k);
					}
					G(T) {
						T.processId !== void 0 &&
							this.b.$acceptTerminalProcessId(T.instanceId, T.processId);
					}
					H(T) {
						this.b.$acceptTerminalDimensions(T.instanceId, T.cols, T.rows);
					}
					I(T) {
						this.b.$acceptTerminalMaximumDimensions(
							T.instanceId,
							T.maxCols,
							T.maxRows,
						);
					}
					J(T) {
						const P = T.proxy;
						this.d.set(P.instanceId, P);
						const k =
							T.cols && T.rows ? { columns: T.cols, rows: T.rows } : void 0;
						this.b.$startExtensionTerminal(P.instanceId, k).then(T.callback),
							P.onInput((L) => this.b.$acceptProcessInput(P.instanceId, L)),
							P.onShutdown((L) =>
								this.b.$acceptProcessShutdown(P.instanceId, L),
							),
							P.onRequestCwd(() =>
								this.b.$acceptProcessRequestCwd(P.instanceId),
							),
							P.onRequestInitialCwd(() =>
								this.b.$acceptProcessRequestInitialCwd(P.instanceId),
							);
					}
					$sendProcessData(T, P) {
						this.d.get(T)?.emitData(P);
					}
					$sendProcessReady(T, P, k, L) {
						this.d.get(T)?.emitReady(P, k, L);
					}
					$sendProcessProperty(T, P) {
						P.type === m.ProcessPropertyType.Title &&
							this.m.getInstanceFromId(T)?.rename(P.value),
							this.d.get(T)?.emitProcessProperty(P);
					}
					$setEnvironmentVariableCollection(T, P, k, L) {
						if (k) {
							const D = {
								persistent: P,
								map: (0, c.$bK)(k),
								descriptionMap: (0, c.$cK)(L),
							};
							this.q.set(T, D);
						} else this.q.delete(T);
					}
				};
				(e.$Foc = l),
					(e.$Foc = l =
						Ne(
							[
								(0, w.$tmc)(i.$lbb.MainThreadTerminalService),
								j(1, u.$iIb),
								j(2, f.$Doc),
								j(3, b.$Eoc),
								j(4, C.$Li),
								j(5, h.$ceb),
								j(6, d.$ik),
								j(7, n.$reb),
								j(8, g.$$m),
								j(9, u.$lIb),
								j(10, u.$kIb),
								j(11, n.$teb),
							],
							l,
						));
				let y = class extends t.$1c {
					constructor(T, P) {
						super(),
							(this.b = T),
							(this.c = P),
							this.D((this.a = new r.$uoc(this.b)));
						for (const k of this.c.instances) this.f(k);
						this.D(this.c.onDidCreateInstance((k) => this.f(k))),
							this.D(
								this.c.onDidDisposeInstance((k) =>
									this.a.stopBuffering(k.instanceId),
								),
							);
					}
					f(T) {
						this.D(this.a.startBuffering(T.instanceId, T.onData));
					}
				};
				y = Ne([j(1, u.$iIb)], y);
				class $ {
					constructor(T) {
						this.a = T;
					}
					async provideLinks(T, P) {
						const k = this.a;
						return (await k.$provideLinks(T.instanceId, P)).map((D) => ({
							id: D.id,
							startIndex: D.startIndex,
							length: D.length,
							label: D.label,
							activate: () => k.$activateLink(T.instanceId, D.id),
						}));
					}
				}
				function v(I, T) {
					const P = I.join(`
`).match(T.lineMatcher);
					return P ? { regexMatch: P, outputLines: I } : void 0;
				}
				function S(I, T, P) {
					let k = b.TerminalQuickFixType.TerminalCommand;
					return (
						"uri" in P
							? ((P.uri = E.URI.revive(P.uri)),
								(k = b.TerminalQuickFixType.Opener))
							: "id" in P && (k = b.TerminalQuickFixType.VscodeCommand),
						{ id: I, type: k, source: T, ...P }
					);
				}
			},
		),
		define(
			de[224],
			he([1, 0, 4, 81, 30, 25, 10, 3, 6, 143, 12, 82, 15, 129]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$D6 =
						e.$C6 =
						e.$B6 =
						e.$A6 =
						e.$z6 =
						e.$y6 =
						e.$x6 =
						e.$w6 =
						e.$v6 =
						e.$u6 =
							void 0),
					(e.$u6 = Object.freeze({
						id: "application",
						order: 100,
						title: (0, t.localize)(3994, null),
						type: "object",
					})),
					(e.$v6 = Object.freeze({
						id: "workbench",
						order: 7,
						title: (0, t.localize)(3995, null),
						type: "object",
					})),
					(e.$w6 = Object.freeze({
						id: "security",
						scope: i.ConfigurationScope.APPLICATION,
						title: (0, t.localize)(3996, null),
						type: "object",
						order: 7,
					})),
					(e.$x6 = Object.freeze({
						id: "problems",
						title: (0, t.localize)(3997, null),
						type: "object",
						order: 101,
					})),
					(e.$y6 = Object.freeze({
						id: "window",
						order: 8,
						title: (0, t.localize)(3998, null),
						type: "object",
					})),
					(e.$z6 = {
						ConfigurationMigration:
							"base.contributions.configuration.migration",
					});
				class n {
					constructor() {
						(this.migrations = []),
							(this.a = new m.$re()),
							(this.onDidRegisterConfigurationMigration = this.a.event);
					}
					registerConfigurationMigrations(s) {
						this.migrations.push(...s);
					}
				}
				const g = new n();
				w.$Io.add(e.$z6.ConfigurationMigration, g);
				let p = class extends d.$1c {
					static {
						this.ID = "workbench.contrib.configurationMigration";
					}
					constructor(s, l) {
						super(),
							(this.a = s),
							(this.b = l),
							this.D(
								this.b.onDidChangeWorkspaceFolders(async (y) => {
									for (const $ of y.added) await this.f($, g.migrations);
								}),
							),
							this.c(g.migrations),
							this.D(g.onDidRegisterConfigurationMigration((y) => this.c(y)));
					}
					async c(s) {
						await this.f(void 0, s);
						for (const l of this.b.getWorkspace().folders) await this.f(l, s);
					}
					async f(s, l) {
						await Promise.all([l.map((y) => this.g(y, s?.uri))]);
					}
					async g(s, l) {
						const y = this.a.inspect(s.key, { resource: l }),
							$ =
								this.b.getWorkbenchState() === E.WorkbenchState.WORKSPACE
									? [
											["user", C.ConfigurationTarget.USER],
											["userLocal", C.ConfigurationTarget.USER_LOCAL],
											["userRemote", C.ConfigurationTarget.USER_REMOTE],
											["workspace", C.ConfigurationTarget.WORKSPACE],
											[
												"workspaceFolder",
												C.ConfigurationTarget.WORKSPACE_FOLDER,
											],
										]
									: [
											["user", C.ConfigurationTarget.USER],
											["userLocal", C.ConfigurationTarget.USER_LOCAL],
											["userRemote", C.ConfigurationTarget.USER_REMOTE],
											["workspace", C.ConfigurationTarget.WORKSPACE],
										];
						for (const [v, S] of $) {
							const I = y[v];
							if (!I) continue;
							const T = [];
							if (I.value !== void 0) {
								const P = await this.h(s, v, I.value, l, void 0);
								for (const k of P ?? []) T.push([k, []]);
							}
							for (const { identifiers: P, value: k } of I.overrides ?? [])
								if (k !== void 0) {
									const L = await this.h(s, v, k, l, P);
									for (const D of L ?? []) T.push([D, P]);
								}
							T.length &&
								(await Promise.allSettled(
									T.map(async ([[P, k], L]) =>
										this.a.updateValue(
											P,
											k.value,
											{ resource: l, overrideIdentifiers: L },
											S,
										),
									),
								));
						}
					}
					async h(s, l, y, $, v) {
						const S = (T) => {
								const k = this.a.inspect(T, { resource: $ })[l];
								if (k)
									return v
										? k.overrides?.find(({ identifiers: L }) =>
												(0, a.$zo)(L, v),
											)?.value
										: k.value;
							},
							I = await s.migrateFn(y, S);
						return Array.isArray(I) ? I : [[s.key, I]];
					}
				};
				(e.$A6 = p), (e.$A6 = p = Ne([j(0, C.$gj), j(1, E.$Vi)], p));
				let o = class extends d.$1c {
					static {
						this.ID = "workbench.contrib.dynamicWorkbenchSecurityConfiguration";
					}
					constructor(s) {
						super(),
							(this.b = s),
							(this.a = new h.$0h()),
							(this.ready = this.a.p),
							this.c();
					}
					async c() {
						try {
							await this.f();
						} finally {
							this.a.complete();
						}
					}
					async f() {
						if (
							!u.$l &&
							(await this.b.getEnvironment())?.os !== u.OperatingSystem.Windows
						)
							return;
						w.$Io
							.as(i.$No.Configuration)
							.registerConfiguration({
								...e.$w6,
								properties: {
									"security.allowedUNCHosts": {
										type: "array",
										items: {
											type: "string",
											pattern: "^[^\\\\]+$",
											patternErrorMessage: (0, t.localize)(3999, null),
										},
										default: [],
										markdownDescription: (0, t.localize)(4e3, null),
										scope: i.ConfigurationScope.MACHINE,
									},
									"security.restrictUNCAccess": {
										type: "boolean",
										default: !0,
										markdownDescription: (0, t.localize)(4001, null),
										scope: i.ConfigurationScope.MACHINE,
									},
								},
							});
					}
				};
				(e.$B6 = o),
					(e.$B6 = o = Ne([j(0, r.$$m)], o)),
					(e.$C6 = "window.newWindowProfile");
				let f = class extends d.$1c {
					static {
						this.ID = "workbench.contrib.dynamicWindowConfiguration";
					}
					constructor(s, l) {
						super(),
							(this.c = s),
							(this.f = l),
							this.g(),
							this.D(this.c.onDidChangeProfiles((y) => this.g())),
							this.h(),
							this.j(),
							this.D(
								l.onDidChangeConfiguration((y) => {
									y.source !== C.ConfigurationTarget.DEFAULT &&
										y.affectsConfiguration(e.$C6) &&
										this.h();
								}),
							),
							this.D(this.c.onDidChangeProfiles(() => this.j()));
					}
					g() {
						const s = w.$Io.as(i.$No.Configuration),
							l = {
								...e.$y6,
								properties: {
									[e.$C6]: {
										type: ["string", "null"],
										default: null,
										enum: [...this.c.profiles.map((y) => y.name), null],
										enumItemLabels: [
											...this.c.profiles.map((y) => ""),
											(0, t.localize)(4002, null),
										],
										description: (0, t.localize)(4003, null),
										scope: i.ConfigurationScope.APPLICATION,
									},
								},
							};
						this.a
							? s.updateConfigurations({ add: [l], remove: [this.a] })
							: s.registerConfiguration(l),
							(this.a = l);
					}
					h() {
						const s = this.f.getValue(e.$C6);
						this.b = s ? this.c.profiles.find((l) => l.name === s) : void 0;
					}
					j() {
						const s = this.f.getValue(e.$C6);
						if (!s) return;
						const l = this.b
							? this.c.profiles.find((y) => y.id === this.b.id)
							: void 0;
						s !== l?.name && this.f.updateValue(e.$C6, l?.name);
					}
				};
				(e.$D6 = f), (e.$D6 = f = Ne([j(0, c.$Xl), j(1, C.$gj)], f));
			},
		),
		define(
			de[130],
			he([1, 0, 4, 81, 30, 8, 224, 184, 511, 3, 6, 28, 62]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Lb =
						e.$2Lb =
						e.AccessibilityVoiceSettingId =
						e.$ZLb =
						e.$YLb =
						e.$XLb =
						e.AccessibilityVerbositySettingId =
						e.ViewDimUnfocusedOpacityProperties =
						e.AccessibilityWorkbenchSettingId =
						e.$WLb =
						e.$VLb =
						e.$ULb =
						e.$TLb =
						e.$SLb =
						e.$RLb =
						e.$QLb =
						e.$PLb =
						e.$OLb =
						e.$NLb =
						e.$MLb =
							void 0),
					(e.$1Lb = s),
					Object.defineProperty(e, "AccessibilityVoiceSettingId", {
						enumerable: !0,
						get: function () {
							return m.AccessibilityVoiceSettingId;
						},
					}),
					(e.$MLb = new E.$5j("accessibilityHelpIsShown", !1, !0)),
					(e.$NLb = new E.$5j("accessibleViewIsShown", !1, !0)),
					(e.$OLb = new E.$5j("accessibleViewSupportsNavigation", !1, !0)),
					(e.$PLb = new E.$5j("accessibleViewVerbosityEnabled", !1, !0)),
					(e.$QLb = new E.$5j("accessibleViewGoToSymbolSupported", !1, !0)),
					(e.$RLb = new E.$5j("accessibleViewOnLastLine", !1, !0)),
					(e.$SLb = new E.$5j(
						"accessibleViewCurrentProviderId",
						void 0,
						void 0,
					)),
					(e.$TLb = new E.$5j("accessibleViewInCodeBlock", void 0, void 0)),
					(e.$ULb = new E.$5j(
						"accessibleViewContainsCodeBlocks",
						void 0,
						void 0,
					)),
					(e.$VLb = new E.$5j(
						"accessibleViewHasUnassignedKeybindings",
						void 0,
						void 0,
					)),
					(e.$WLb = new E.$5j(
						"accessibleViewHasAssignedKeybindings",
						void 0,
						void 0,
					));
				var c;
				(function (S) {
					(S.DimUnfocusedEnabled = "accessibility.dimUnfocused.enabled"),
						(S.DimUnfocusedOpacity = "accessibility.dimUnfocused.opacity"),
						(S.HideAccessibleView = "accessibility.hideAccessibleView"),
						(S.AccessibleViewCloseOnKeyPress =
							"accessibility.accessibleView.closeOnKeyPress");
				})(c || (e.AccessibilityWorkbenchSettingId = c = {}));
				var n;
				(function (S) {
					(S[(S.Default = 0.75)] = "Default"),
						(S[(S.Minimum = 0.2)] = "Minimum"),
						(S[(S.Maximum = 1)] = "Maximum");
				})(n || (e.ViewDimUnfocusedOpacityProperties = n = {}));
				var g;
				(function (S) {
					(S.Terminal = "accessibility.verbosity.terminal"),
						(S.DiffEditor = "accessibility.verbosity.diffEditor"),
						(S.Chat = "accessibility.verbosity.panelChat"),
						(S.InlineChat = "accessibility.verbosity.inlineChat"),
						(S.TerminalChat = "accessibility.verbosity.terminalChat"),
						(S.InlineCompletions = "accessibility.verbosity.inlineCompletions"),
						(S.KeybindingsEditor = "accessibility.verbosity.keybindingsEditor"),
						(S.Notebook = "accessibility.verbosity.notebook"),
						(S.Editor = "accessibility.verbosity.editor"),
						(S.Hover = "accessibility.verbosity.hover"),
						(S.Notification = "accessibility.verbosity.notification"),
						(S.EmptyEditorHint = "accessibility.verbosity.emptyEditorHint"),
						(S.ReplInputHint = "accessibility.verbosity.replInputHint"),
						(S.Comments = "accessibility.verbosity.comments"),
						(S.DiffEditorActive = "accessibility.verbosity.diffEditorActive"),
						(S.Debug = "accessibility.verbosity.debug");
				})(g || (e.AccessibilityVerbositySettingId = g = {}));
				const p = { type: "boolean", default: !0, tags: ["accessibility"] };
				(e.$XLb = Object.freeze({
					id: "accessibility",
					title: (0, t.localize)(4241, null),
					type: "object",
				})),
					(e.$YLb = {
						type: "string",
						enum: ["auto", "on", "off"],
						default: "auto",
						enumDescriptions: [
							(0, t.localize)(4242, null),
							(0, t.localize)(4243, null),
							(0, t.localize)(4244, null),
						],
						tags: ["accessibility"],
					});
				const o = {
					type: "object",
					tags: ["accessibility"],
					additionalProperties: !1,
					default: { sound: "auto", announcement: "auto" },
				};
				e.$ZLb = {
					type: "string",
					enum: ["auto", "off"],
					default: "auto",
					enumDescriptions: [
						(0, t.localize)(4245, null),
						(0, t.localize)(4246, null),
					],
					tags: ["accessibility"],
				};
				const f = {
						type: "object",
						tags: ["accessibility"],
						additionalProperties: !1,
						default: { sound: "auto" },
					},
					b = {
						...e.$XLb,
						scope: i.ConfigurationScope.RESOURCE,
						properties: {
							[g.Terminal]: { description: (0, t.localize)(4247, null), ...p },
							[g.DiffEditor]: {
								description: (0, t.localize)(4248, null),
								...p,
							},
							[g.Chat]: { description: (0, t.localize)(4249, null), ...p },
							[g.InlineChat]: {
								description: (0, t.localize)(4250, null),
								...p,
							},
							[g.InlineCompletions]: {
								description: (0, t.localize)(4251, null),
								...p,
							},
							[g.KeybindingsEditor]: {
								description: (0, t.localize)(4252, null),
								...p,
							},
							[g.Notebook]: { description: (0, t.localize)(4253, null), ...p },
							[g.Hover]: { description: (0, t.localize)(4254, null), ...p },
							[g.Notification]: {
								description: (0, t.localize)(4255, null),
								...p,
							},
							[g.EmptyEditorHint]: {
								description: (0, t.localize)(4256, null),
								...p,
							},
							[g.ReplInputHint]: {
								description: (0, t.localize)(4257, null),
								...p,
							},
							[g.Comments]: { description: (0, t.localize)(4258, null), ...p },
							[g.DiffEditorActive]: {
								description: (0, t.localize)(4259, null),
								...p,
							},
							[g.Debug]: { description: (0, t.localize)(4260, null), ...p },
							[c.AccessibleViewCloseOnKeyPress]: {
								markdownDescription: (0, t.localize)(4261, null),
								type: "boolean",
								default: !0,
							},
							"accessibility.signalOptions.volume": {
								description: (0, t.localize)(4262, null),
								type: "number",
								minimum: 0,
								maximum: 100,
								default: 70,
								tags: ["accessibility"],
							},
							"accessibility.signalOptions.debouncePositionChanges": {
								description: (0, t.localize)(4263, null),
								type: "boolean",
								default: !1,
								tags: ["accessibility"],
							},
							"accessibility.signalOptions.experimental.delays.general": {
								type: "object",
								description:
									"Delays for all signals besides error and warning at position",
								additionalProperties: !1,
								properties: {
									announcement: {
										description: (0, t.localize)(4264, null),
										type: "number",
										minimum: 0,
										default: 3e3,
									},
									sound: {
										description: (0, t.localize)(4265, null),
										type: "number",
										minimum: 0,
										default: 400,
									},
								},
								tags: ["accessibility"],
							},
							"accessibility.signalOptions.experimental.delays.warningAtPosition":
								{
									type: "object",
									additionalProperties: !1,
									properties: {
										announcement: {
											description: (0, t.localize)(4266, null),
											type: "number",
											minimum: 0,
											default: 3e3,
										},
										sound: {
											description: (0, t.localize)(4267, null),
											type: "number",
											minimum: 0,
											default: 1e3,
										},
									},
									tags: ["accessibility"],
								},
							"accessibility.signalOptions.experimental.delays.errorAtPosition":
								{
									type: "object",
									additionalProperties: !1,
									properties: {
										announcement: {
											description: (0, t.localize)(4268, null),
											type: "number",
											minimum: 0,
											default: 3e3,
										},
										sound: {
											description: (0, t.localize)(4269, null),
											type: "number",
											minimum: 0,
											default: 1e3,
										},
									},
									tags: ["accessibility"],
								},
							"accessibility.signals.lineHasBreakpoint": {
								...o,
								description: (0, t.localize)(4270, null),
								properties: {
									sound: {
										description: (0, t.localize)(4271, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4272, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.lineHasInlineSuggestion": {
								...f,
								description: (0, t.localize)(4273, null),
								properties: {
									sound: {
										description: (0, t.localize)(4274, null),
										...e.$YLb,
										default: "off",
									},
								},
							},
							"accessibility.signals.lineHasError": {
								...o,
								description: (0, t.localize)(4275, null),
								properties: {
									sound: {
										description: (0, t.localize)(4276, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4277, null),
										...e.$ZLb,
										default: "off",
									},
								},
							},
							"accessibility.signals.lineHasFoldedArea": {
								...o,
								description: (0, t.localize)(4278, null),
								properties: {
									sound: {
										description: (0, t.localize)(4279, null),
										...e.$YLb,
										default: "off",
									},
									announcement: {
										description: (0, t.localize)(4280, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.lineHasWarning": {
								...o,
								description: (0, t.localize)(4281, null),
								properties: {
									sound: {
										description: (0, t.localize)(4282, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4283, null),
										...e.$ZLb,
										default: "off",
									},
								},
							},
							"accessibility.signals.positionHasError": {
								...o,
								description: (0, t.localize)(4284, null),
								properties: {
									sound: {
										description: (0, t.localize)(4285, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4286, null),
										...e.$ZLb,
										default: "on",
									},
								},
							},
							"accessibility.signals.positionHasWarning": {
								...o,
								description: (0, t.localize)(4287, null),
								properties: {
									sound: {
										description: (0, t.localize)(4288, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4289, null),
										...e.$ZLb,
										default: "on",
									},
								},
							},
							"accessibility.signals.onDebugBreak": {
								...o,
								description: (0, t.localize)(4290, null),
								properties: {
									sound: {
										description: (0, t.localize)(4291, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4292, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.noInlayHints": {
								...o,
								description: (0, t.localize)(4293, null),
								properties: {
									sound: {
										description: (0, t.localize)(4294, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4295, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.taskCompleted": {
								...o,
								description: (0, t.localize)(4296, null),
								properties: {
									sound: {
										description: (0, t.localize)(4297, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4298, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.taskFailed": {
								...o,
								description: (0, t.localize)(4299, null),
								properties: {
									sound: {
										description: (0, t.localize)(4300, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4301, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.terminalCommandFailed": {
								...o,
								description: (0, t.localize)(4302, null),
								properties: {
									sound: {
										description: (0, t.localize)(4303, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4304, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.terminalCommandSucceeded": {
								...o,
								description: (0, t.localize)(4305, null),
								properties: {
									sound: {
										description: (0, t.localize)(4306, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4307, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.terminalQuickFix": {
								...o,
								description: (0, t.localize)(4308, null),
								properties: {
									sound: {
										description: (0, t.localize)(4309, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4310, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.terminalBell": {
								...o,
								description: (0, t.localize)(4311, null),
								properties: {
									sound: {
										description: (0, t.localize)(4312, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4313, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.diffLineInserted": {
								...f,
								description: (0, t.localize)(4314, null),
								properties: {
									sound: {
										description: (0, t.localize)(4315, null),
										...e.$YLb,
									},
								},
							},
							"accessibility.signals.diffLineModified": {
								...f,
								description: (0, t.localize)(4316, null),
								properties: {
									sound: {
										description: (0, t.localize)(4317, null),
										...e.$YLb,
									},
								},
							},
							"accessibility.signals.diffLineDeleted": {
								...f,
								description: (0, t.localize)(4318, null),
								properties: {
									sound: {
										description: (0, t.localize)(4319, null),
										...e.$YLb,
									},
								},
							},
							"accessibility.signals.notebookCellCompleted": {
								...o,
								description: (0, t.localize)(4320, null),
								properties: {
									sound: {
										description: (0, t.localize)(4321, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4322, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.notebookCellFailed": {
								...o,
								description: (0, t.localize)(4323, null),
								properties: {
									sound: {
										description: (0, t.localize)(4324, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4325, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.chatRequestSent": {
								...o,
								description: (0, t.localize)(4326, null),
								properties: {
									sound: {
										description: (0, t.localize)(4327, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4328, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.progress": {
								...o,
								description: (0, t.localize)(4329, null),
								properties: {
									sound: {
										description: (0, t.localize)(4330, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4331, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.chatResponseReceived": {
								...f,
								description: (0, t.localize)(4332, null),
								properties: {
									sound: {
										description: (0, t.localize)(4333, null),
										...e.$YLb,
									},
								},
							},
							"accessibility.signals.voiceRecordingStarted": {
								...f,
								description: (0, t.localize)(4334, null),
								properties: {
									sound: {
										description: (0, t.localize)(4335, null),
										...e.$YLb,
									},
								},
								default: { sound: "on" },
							},
							"accessibility.signals.voiceRecordingStopped": {
								...f,
								description: (0, t.localize)(4336, null),
								properties: {
									sound: {
										description: (0, t.localize)(4337, null),
										...e.$YLb,
										default: "off",
									},
								},
							},
							"accessibility.signals.clear": {
								...o,
								description: (0, t.localize)(4338, null),
								properties: {
									sound: {
										description: (0, t.localize)(4339, null),
										...e.$YLb,
									},
									announcement: {
										description: (0, t.localize)(4340, null),
										...e.$ZLb,
									},
								},
							},
							"accessibility.signals.save": {
								type: "object",
								tags: ["accessibility"],
								additionalProperties: !1,
								markdownDescription: (0, t.localize)(4341, null),
								properties: {
									sound: {
										description: (0, t.localize)(4342, null),
										type: "string",
										enum: ["userGesture", "always", "never"],
										default: "never",
										enumDescriptions: [
											(0, t.localize)(4343, null),
											(0, t.localize)(4344, null),
											(0, t.localize)(4345, null),
										],
									},
									announcement: {
										description: (0, t.localize)(4346, null),
										type: "string",
										enum: ["userGesture", "always", "never"],
										default: "never",
										enumDescriptions: [
											(0, t.localize)(4347, null),
											(0, t.localize)(4348, null),
											(0, t.localize)(4349, null),
										],
									},
								},
								default: { sound: "never", announcement: "never" },
							},
							"accessibility.signals.format": {
								type: "object",
								tags: ["accessibility"],
								additionalProperties: !1,
								markdownDescription: (0, t.localize)(4350, null),
								properties: {
									sound: {
										description: (0, t.localize)(4351, null),
										type: "string",
										enum: ["userGesture", "always", "never"],
										default: "never",
										enumDescriptions: [
											(0, t.localize)(4352, null),
											(0, t.localize)(4353, null),
											(0, t.localize)(4354, null),
										],
									},
									announcement: {
										description: (0, t.localize)(4355, null),
										type: "string",
										enum: ["userGesture", "always", "never"],
										default: "never",
										enumDescriptions: [
											(0, t.localize)(4356, null),
											(0, t.localize)(4357, null),
											(0, t.localize)(4358, null),
										],
									},
								},
								default: { sound: "never", announcement: "never" },
							},
							"accessibility.underlineLinks": {
								type: "boolean",
								description: (0, t.localize)(4359, null),
								default: !1,
							},
							"accessibility.debugWatchVariableAnnouncements": {
								type: "boolean",
								description: (0, t.localize)(4360, null),
								default: !0,
							},
						},
					};
				function s() {
					const S = w.$Io.as(i.$No.Configuration);
					S.registerConfiguration(b),
						S.registerConfiguration({
							...C.$v6,
							properties: {
								[c.DimUnfocusedEnabled]: {
									description: (0, t.localize)(4361, null),
									type: "boolean",
									default: !1,
									tags: ["accessibility"],
									scope: i.ConfigurationScope.APPLICATION,
								},
								[c.DimUnfocusedOpacity]: {
									markdownDescription: (0, t.localize)(
										4362,
										null,
										`\`#${c.DimUnfocusedEnabled}#\``,
									),
									type: "number",
									minimum: n.Minimum,
									maximum: n.Maximum,
									default: n.Default,
									tags: ["accessibility"],
									scope: i.ConfigurationScope.APPLICATION,
								},
								[c.HideAccessibleView]: {
									description: (0, t.localize)(4363, null),
									type: "boolean",
									default: !1,
									tags: ["accessibility"],
								},
							},
						});
				}
				e.$2Lb = 1200;
				let l = class extends r.$1c {
					static {
						this.ID =
							"workbench.contrib.dynamicSpeechAccessibilityConfiguration";
					}
					constructor(I, T) {
						super(),
							(this.a = I),
							(this.b = T),
							this.D(
								u.Event.runAndSubscribe(I.onDidChangeHasSpeechProvider, () =>
									this.c(),
								),
							);
					}
					c() {
						if (!this.a.hasSpeechProvider) return;
						const I = this.f(),
							T = Object.keys(I).sort((k, L) =>
								I[k].name.localeCompare(I[L].name),
							);
						w.$Io
							.as(i.$No.Configuration)
							.registerConfiguration({
								...e.$XLb,
								properties: {
									[m.AccessibilityVoiceSettingId.SpeechTimeout]: {
										markdownDescription: (0, t.localize)(4364, null),
										type: "number",
										default: e.$2Lb,
										minimum: 0,
										tags: ["accessibility"],
									},
									[m.AccessibilityVoiceSettingId.SpeechLanguage]: {
										markdownDescription: (0, t.localize)(4365, null),
										type: "string",
										enum: T,
										default: "auto",
										tags: ["accessibility"],
										enumDescriptions: T.map((k) => I[k].name),
										enumItemLabels: T.map((k) => I[k].name),
									},
									[m.AccessibilityVoiceSettingId.AutoSynthesize]: {
										type: "string",
										enum: ["on", "off", "auto"],
										enumDescriptions: [
											(0, t.localize)(4366, null),
											(0, t.localize)(4367, null),
											(0, t.localize)(4368, null),
										],
										markdownDescription: (0, t.localize)(4369, null),
										default: this.b.quality !== "stable" ? "auto" : "off",
										tags: ["accessibility"],
									},
								},
							});
					}
					f() {
						return { auto: { name: (0, t.localize)(4370, null) }, ...m.$17 };
					}
				};
				(e.$3Lb = l),
					(e.$3Lb = l = Ne([j(0, m.$V7), j(1, h.$Bk)], l)),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "audioCues.volume",
								migrateFn: (S, I) => [
									["accessibility.signalOptions.volume", { value: S }],
									["audioCues.volume", { value: void 0 }],
								],
							},
						]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "audioCues.debouncePositionChanges",
								migrateFn: (S) => [
									[
										"accessibility.signalOptions.debouncePositionChanges",
										{ value: S },
									],
									["audioCues.debouncePositionChanges", { value: void 0 }],
								],
							},
						]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "accessibility.signalOptions",
								migrateFn: (S, I) => {
									const T = y(I, "general"),
										P = y(I, "errorAtPosition"),
										k = y(I, "warningAtPosition"),
										L = $(I),
										D = v(I),
										M = [];
									return (
										L &&
											M.push([
												"accessibility.signalOptions.volume",
												{ value: L },
											]),
										T &&
											M.push([
												"accessibility.signalOptions.experimental.delays.general",
												{ value: T },
											]),
										P &&
											M.push([
												"accessibility.signalOptions.experimental.delays.errorAtPosition",
												{ value: P },
											]),
										k &&
											M.push([
												"accessibility.signalOptions.experimental.delays.warningAtPosition",
												{ value: k },
											]),
										D &&
											M.push([
												"accessibility.signalOptions.debouncePositionChanges",
												{ value: D },
											]),
										M.push(["accessibility.signalOptions", { value: void 0 }]),
										M
									);
								},
							},
						]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "accessibility.signals.sounds.volume",
								migrateFn: (S) => [
									["accessibility.signalOptions.volume", { value: S }],
									["accessibility.signals.sounds.volume", { value: void 0 }],
								],
							},
						]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "accessibility.signals.debouncePositionChanges",
								migrateFn: (S) => [
									[
										"accessibility.signalOptions.debouncePositionChanges",
										{ value: S },
									],
									[
										"accessibility.signals.debouncePositionChanges",
										{ value: void 0 },
									],
								],
							},
						]);
				function y(S, I) {
					return (
						S(`accessibility.signalOptions.experimental.delays.${I}`) ||
						S("accessibility.signalOptions")?.["experimental.delays"]?.[
							`${I}`
						] ||
						S("accessibility.signalOptions")?.delays?.[`${I}`]
					);
				}
				function $(S) {
					return (
						S("accessibility.signalOptions.volume") ||
						S("accessibility.signalOptions")?.volume ||
						S("accessibility.signals.sounds.volume") ||
						S("audioCues.volume")
					);
				}
				function v(S) {
					return (
						S("accessibility.signalOptions.debouncePositionChanges") ||
						S("accessibility.signalOptions")?.debouncePositionChanges ||
						S("accessibility.signals.debouncePositionChanges") ||
						S("audioCues.debouncePositionChanges")
					);
				}
				w.$Io.as(C.$z6.ConfigurationMigration).registerConfigurationMigrations([
					{
						key: m.AccessibilityVoiceSettingId.AutoSynthesize,
						migrateFn: (S) => {
							let I;
							if (S === !0) I = "on";
							else if (S === !1) I = "off";
							else return [];
							return [
								[m.AccessibilityVoiceSettingId.AutoSynthesize, { value: I }],
							];
						},
					},
				]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: "accessibility.signals.chatResponsePending",
								migrateFn: (S, I) => [
									["accessibility.signals.progress", { value: S }],
									[
										"accessibility.signals.chatResponsePending",
										{ value: void 0 },
									],
								],
							},
						]),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations(
							d.$Twb.allAccessibilitySignals
								.map((S) =>
									S.legacySoundSettingsKey
										? {
												key: S.legacySoundSettingsKey,
												migrateFn: (I, T) => {
													const P = [],
														k = S.legacyAnnouncementSettingsKey;
													let L;
													return (
														k &&
															((L = T(k) ?? void 0),
															L !== void 0 &&
																typeof L != "string" &&
																(L = L ? "auto" : "off")),
														P.push([
															`${S.legacySoundSettingsKey}`,
															{ value: void 0 },
														]),
														P.push([
															`${S.settingsKey}`,
															{
																value:
																	L !== void 0
																		? { announcement: L, sound: I }
																		: { sound: I },
															},
														]),
														P
													);
												},
											}
										: void 0,
								)
								.filter(a.$tg),
						),
					w.$Io
						.as(C.$z6.ConfigurationMigration)
						.registerConfigurationMigrations(
							d.$Twb.allAccessibilitySignals
								.filter(
									(S) =>
										!!S.legacyAnnouncementSettingsKey &&
										!!S.legacySoundSettingsKey,
								)
								.map((S) => ({
									key: S.legacyAnnouncementSettingsKey,
									migrateFn: (I, T) => {
										const P = [],
											k =
												T(S.settingsKey)?.sound || T(S.legacySoundSettingsKey);
										return (
											I !== void 0 &&
												typeof I != "string" &&
												(I = I ? "auto" : "off"),
											P.push([
												`${S.settingsKey}`,
												{
													value:
														I !== void 0
															? { announcement: I, sound: k }
															: { sound: k },
												},
											]),
											P.push([
												`${S.legacyAnnouncementSettingsKey}`,
												{ value: void 0 },
											]),
											P.push([
												`${S.legacySoundSettingsKey}`,
												{ value: void 0 },
											]),
											P
										);
									},
								})),
						);
			},
		),
		define(
			de[1032],
			he([1, 0, 14, 27, 46, 4, 11, 8, 43, 417, 130, 178, 65, 501]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tpc = e.$spc = void 0);
				const n = {
						id: C.$XX.AccessibleView,
						group: "navigation",
						when: u.$NLb,
					},
					g = { id: C.$XX.CommandPalette, group: "", order: 1 };
				class p extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.ShowNext,
							precondition: d.$Kj.and(u.$NLb, u.$OLb),
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.BracketRight,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							menu: [g, { ...n, when: d.$Kj.and(u.$NLb, u.$OLb) }],
							icon: t.$ak.arrowDown,
							title: (0, E.localize)(4405, null),
						});
					}
					run(P) {
						P.get(a.$HLb).next();
					}
				}
				(0, C.$4X)(p);
				class o extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.NextCodeBlock,
							precondition: d.$Kj.and(
								u.$ULb,
								d.$Kj.equals(u.$SLb.key, a.AccessibleViewProviderId.Chat),
							),
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.PageDown,
								mac: {
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.PageDown,
								},
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							icon: t.$ak.arrowRight,
							menu: { ...n, when: d.$Kj.and(u.$NLb, u.$ULb) },
							title: (0, E.localize)(4406, null),
						});
					}
					run(P) {
						P.get(a.$HLb).navigateToCodeBlock("next");
					}
				}
				(0, C.$4X)(o);
				class f extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.PreviousCodeBlock,
							precondition: d.$Kj.and(
								u.$ULb,
								d.$Kj.equals(u.$SLb.key, a.AccessibleViewProviderId.Chat),
							),
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.PageUp,
								mac: {
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.PageUp,
								},
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							icon: t.$ak.arrowLeft,
							menu: { ...n, when: d.$Kj.and(u.$NLb, u.$ULb) },
							title: (0, E.localize)(4407, null),
						});
					}
					run(P) {
						P.get(a.$HLb).navigateToCodeBlock("previous");
					}
				}
				(0, C.$4X)(f);
				class b extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.ShowPrevious,
							precondition: d.$Kj.and(u.$NLb, u.$OLb),
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.BracketLeft,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							icon: t.$ak.arrowUp,
							menu: [g, { ...n, when: d.$Kj.and(u.$NLb, u.$OLb) }],
							title: (0, E.localize)(4408, null),
						});
					}
					run(P) {
						P.get(a.$HLb).previous();
					}
				}
				(0, C.$4X)(b);
				class s extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.GoToSymbol,
							precondition: d.$Kj.and(d.$Kj.or(u.$NLb, u.$MLb), u.$QLb),
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyO,
								secondary: [
									i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.Period,
								],
								weight: m.KeybindingWeight.WorkbenchContrib + 10,
							},
							icon: t.$ak.symbolField,
							menu: [
								g,
								{ ...n, when: d.$Kj.and(d.$Kj.or(u.$NLb, u.$MLb), u.$QLb) },
							],
							title: (0, E.localize)(4409, null),
						});
					}
					run(P) {
						P.get(a.$HLb).goToSymbol();
					}
				}
				(0, C.$4X)(s);
				function l(T) {
					return T.register(), T;
				}
				(e.$spc = l(
					new w.$ftb({
						id: r.AccessibilityCommandId.OpenAccessibilityHelp,
						precondition: void 0,
						kbOpts: {
							primary: i.KeyMod.Alt | i.KeyCode.F1,
							weight: m.KeybindingWeight.WorkbenchContrib,
							linux: {
								primary: i.KeyMod.Alt | i.KeyMod.Shift | i.KeyCode.F1,
								secondary: [i.KeyMod.Alt | i.KeyCode.F1],
							},
							kbExpr: u.$MLb.toNegated(),
						},
						menuOpts: [
							{
								menuId: C.$XX.CommandPalette,
								group: "",
								title: (0, E.localize)(4410, null),
								order: 1,
							},
						],
					}),
				)),
					(e.$tpc = l(
						new w.$ftb({
							id: r.AccessibilityCommandId.OpenAccessibleView,
							precondition: void 0,
							kbOpts: {
								primary: i.KeyMod.Alt | i.KeyCode.F2,
								weight: m.KeybindingWeight.WorkbenchContrib,
								linux: {
									primary: i.KeyMod.Alt | i.KeyMod.Shift | i.KeyCode.F2,
									secondary: [i.KeyMod.Alt | i.KeyCode.F2],
								},
							},
							menuOpts: [
								{
									menuId: C.$XX.CommandPalette,
									group: "",
									title: (0, E.localize)(4411, null),
									order: 1,
								},
							],
						}),
					));
				class y extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.DisableVerbosityHint,
							precondition: d.$Kj.and(d.$Kj.or(u.$NLb, u.$MLb), u.$PLb),
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.F6,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							icon: t.$ak.bellSlash,
							menu: [
								g,
								{
									id: C.$XX.AccessibleView,
									group: "navigation",
									when: d.$Kj.and(d.$Kj.or(u.$NLb, u.$MLb), u.$PLb),
								},
							],
							title: (0, E.localize)(4412, null),
						});
					}
					run(P) {
						P.get(a.$HLb).disableHint();
					}
				}
				(0, C.$4X)(y);
				class $ extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId
								.AccessibilityHelpConfigureKeybindings,
							precondition: d.$Kj.and(u.$MLb, u.$VLb),
							icon: t.$ak.key,
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.KeyK,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							menu: [
								{
									id: C.$XX.AccessibleView,
									group: "navigation",
									order: 3,
									when: u.$VLb,
								},
							],
							title: (0, E.localize)(4413, null),
						});
					}
					async run(P) {
						await P.get(a.$HLb).configureKeybindings(!0);
					}
				}
				(0, C.$4X)($);
				class v extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId
								.AccessibilityHelpConfigureAssignedKeybindings,
							precondition: d.$Kj.and(u.$MLb, u.$WLb),
							icon: t.$ak.key,
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.KeyA,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							menu: [
								{
									id: C.$XX.AccessibleView,
									group: "navigation",
									order: 4,
									when: u.$WLb,
								},
							],
							title: (0, E.localize)(4414, null),
						});
					}
					async run(P) {
						await P.get(a.$HLb).configureKeybindings(!1);
					}
				}
				(0, C.$4X)(v);
				class S extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.AccessibilityHelpOpenHelpLink,
							precondition: d.$Kj.and(u.$MLb),
							keybinding: {
								primary: i.KeyMod.Alt | i.KeyCode.KeyH,
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							title: (0, E.localize)(4415, null),
						});
					}
					run(P) {
						P.get(a.$HLb).openHelpLink();
					}
				}
				(0, C.$4X)(S);
				class I extends C.$3X {
					constructor() {
						super({
							id: r.AccessibilityCommandId.AccessibleViewAcceptInlineCompletion,
							precondition: d.$Kj.and(
								u.$NLb,
								d.$Kj.equals(
									u.$SLb.key,
									a.AccessibleViewProviderId.InlineCompletions,
								),
							),
							keybinding: {
								primary: i.KeyMod.CtrlCmd | i.KeyCode.Slash,
								mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.Slash },
								weight: m.KeybindingWeight.WorkbenchContrib,
							},
							icon: t.$ak.check,
							menu: [
								g,
								{
									id: C.$XX.AccessibleView,
									group: "navigation",
									order: 0,
									when: d.$Kj.and(
										u.$NLb,
										d.$Kj.equals(
											u.$SLb.key,
											a.AccessibleViewProviderId.InlineCompletions,
										),
									),
								},
							],
							title: (0, E.localize)(4416, null),
						});
					}
					async run(P) {
						const k = P.get(h.$dtb),
							L = k.getActiveCodeEditor() || k.getFocusedCodeEditor();
						if (!L) return;
						const D = c.$O1b.get(L)?.model.get(),
							M = D?.state.get();
						!D || !M || (await D.accept(L), D.stop(), L.focus());
					}
				}
				(0, C.$4X)(I);
			},
		),
		define(
			de[3544],
			he([1, 0, 3, 130, 1032, 178, 412]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J2c = e.$I2c = void 0);
				class d extends t.$1c {
					constructor() {
						super(),
							this.D(
								w.$spc.addImplementation(
									115,
									"accessible-view-help",
									(u) => (u.get(E.$HLb).showAccessibleViewHelp(), !0),
									i.$NLb,
								),
							);
					}
				}
				e.$I2c = d;
				class m extends t.$1c {
					constructor() {
						super(),
							C.$Whc.getImplementations().forEach((u) => {
								const a = (h) => {
									const c = u.getProvider(h);
									if (!c) return !1;
									try {
										return h.get(E.$HLb).show(c), !0;
									} catch {
										return c.dispose(), !1;
									}
								};
								u.type === E.AccessibleViewType.View
									? this.D(
											w.$tpc.addImplementation(u.priority, u.name, a, u.when),
										)
									: this.D(
											w.$spc.addImplementation(u.priority, u.name, a, u.when),
										);
							});
					}
				}
				e.$J2c = m;
			},
		),
		define(
			de[3545],
			he([1, 0, 7, 6, 3, 201, 10, 130]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$A2c = void 0);
				let m = class extends w.$1c {
					constructor(h) {
						super(),
							(this.b = void 0),
							this.D((0, w.$Yc)(() => this.f())),
							this.D(
								i.Event.runAndSubscribe(h.onDidChangeConfiguration, (c) => {
									if (
										c &&
										!c.affectsConfiguration(
											d.AccessibilityWorkbenchSettingId.DimUnfocusedEnabled,
										) &&
										!c.affectsConfiguration(
											d.AccessibilityWorkbenchSettingId.DimUnfocusedOpacity,
										)
									)
										return;
									let n = "";
									if (
										r(
											h.getValue(
												d.AccessibilityWorkbenchSettingId.DimUnfocusedEnabled,
											),
											!1,
										)
									) {
										const p = (0, E.$Zm)(
											u(
												h.getValue(
													d.AccessibilityWorkbenchSettingId.DimUnfocusedOpacity,
												),
												d.ViewDimUnfocusedOpacityProperties.Default,
											),
											d.ViewDimUnfocusedOpacityProperties.Minimum,
											d.ViewDimUnfocusedOpacityProperties.Maximum,
										);
										if (p !== 1) {
											const o = new Set(),
												f = `filter: opacity(${p});`;
											o.add(
												`.monaco-workbench .pane-body.integrated-terminal:not(:focus-within) .tabs-container { ${f} }`,
											),
												o.add(
													`.monaco-workbench .pane-body.integrated-terminal .terminal-wrapper:not(:focus-within) { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .monaco-editor { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .breadcrumbs-below-tabs { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .terminal-wrapper { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .settings-editor { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .keybindings-editor { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .monaco-editor-pane-placeholder { ${f} }`,
												),
												o.add(
													`.monaco-workbench .editor-instance:not(:focus-within) .gettingStartedContainer { ${f} }`,
												),
												(n = [...o].join(`
`));
										}
									}
									n.length === 0 ? this.f() : (this.c().textContent = n);
								}),
							);
					}
					c() {
						return (
							this.a ||
								((this.b = new w.$Zc()),
								(this.a = (0, t.$Rgb)(void 0, void 0, this.b)),
								(this.a.className = "accessibilityUnfocusedViewOpacity")),
							this.a
						);
					}
					f() {
						this.b?.dispose(), (this.b = void 0), (this.a = void 0);
					}
				};
				(e.$A2c = m), (e.$A2c = m = Ne([j(0, C.$gj)], m));
				function r(a, h) {
					return typeof a == "boolean" ? a : h;
				}
				function u(a, h) {
					return typeof a == "number" ? a : h;
				}
			},
		),
		define(
			de[3546],
			he([1, 0, 3, 56, 4, 91, 10, 18, 6, 130]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$D2c = void 0);
				let u = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.diffEditorActiveAnnouncement";
					}
					constructor(h, c, n) {
						super(),
							(this.b = h),
							(this.c = c),
							(this.f = n),
							this.D(
								m.Event.runAndSubscribe(
									c.onDidChangeScreenReaderOptimized,
									() => this.g(),
								),
							),
							this.D(
								n.onDidChangeConfiguration((g) => {
									g.affectsConfiguration(
										r.AccessibilityVerbositySettingId.DiffEditorActive,
									) && this.g();
								}),
							);
					}
					g() {
						const h = this.f.getValue(
								r.AccessibilityVerbositySettingId.DiffEditorActive,
							),
							c = this.c.isScreenReaderOptimized();
						if (!h || !c) {
							this.a?.dispose(), (this.a = void 0);
							return;
						}
						this.a ||
							(this.a = this.D(
								this.b.onDidActiveEditorChange(() => {
									(0, i.$$sb)(this.b.activeTextEditorControl) &&
										this.c.alert((0, w.localize)(4426, null));
								}),
							));
					}
				};
				(e.$D2c = u),
					(e.$D2c = u = Ne([j(0, d.$IY), j(1, E.$XK), j(2, C.$gj)], u));
			},
		),
		define(
			de[3547],
			he([
				1, 0, 30, 55, 3, 8, 31, 32, 357, 11, 260, 62, 119, 109, 21, 53, 81, 224,
				4, 10, 327, 33, 57, 12,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const v = "workbench.accounts.experimental.showEntitlements";
				let S = class extends w.$1c {
					constructor(P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.f = P),
							(this.g = k),
							(this.h = L),
							(this.j = D),
							(this.m = M),
							(this.n = N),
							(this.q = A),
							(this.r = R),
							(this.s = O),
							(this.t = B),
							(this.a = !1),
							(this.b = new E.$5j(v, !1).bindTo(this.f)),
							(this.c = this.D(new w.$2c())),
							!(!this.j.gitHubEntitlement || $.$r) &&
								this.n.getInstalled().then(async (U) => {
									U.find((F) =>
										c.$Gn.equals(
											F.identifier.id,
											this.j.gitHubEntitlement.extensionId,
										),
									)
										? this.z()
										: this.u();
								});
					}
					u() {
						this.m.getBoolean(v, n.StorageScope.APPLICATION) !== !1 &&
							(this.D(
								this.r.onDidChangeExtensions(async (P) => {
									for (const k of P.added)
										if (
											c.$Gn.equals(
												this.j.gitHubEntitlement.extensionId,
												k.identifier,
											)
										) {
											this.z();
											return;
										}
								}),
							),
							this.D(
								this.h.onDidChangeSessions(async (P) => {
									P.providerId === this.j.gitHubEntitlement.providerId &&
									P.event.added?.length
										? await this.y(P.event.added[0])
										: P.providerId === this.j.gitHubEntitlement.providerId &&
											P.event.removed?.length &&
											(this.b.set(!1), this.c.clear());
								}),
							),
							this.D(
								this.h.onDidRegisterAuthenticationProvider(async (P) => {
									P.id === this.j.gitHubEntitlement.providerId &&
										(await this.y((await this.h.getSessions(P.id))[0]));
								}),
							));
					}
					async w(P) {
						if (this.a) return [!1, ""];
						const k = await this.t.request(
							{
								type: "GET",
								url: this.j.gitHubEntitlement.entitlementUrl,
								headers: { Authorization: `Bearer ${P.accessToken}` },
							},
							l.CancellationToken.None,
						);
						if (k.res.statusCode && k.res.statusCode !== 200) return [!1, ""];
						const L = await (0, s.$Eq)(k);
						if (!L) return [!1, ""];
						let D;
						try {
							D = JSON.parse(L);
						} catch {
							return [!1, ""];
						}
						if (
							!(this.j.gitHubEntitlement.enablementKey in D) ||
							!D[this.j.gitHubEntitlement.enablementKey]
						)
							return (
								this.g.publicLog2("entitlements.enabled", { enabled: !1 }),
								[!1, ""]
							);
						this.g.publicLog2("entitlements.enabled", { enabled: !0 }),
							(this.a = !0);
						const M = D.organization_list;
						return [
							!0,
							M && M.length > 0 ? (M[0].name ? M[0].name : M[0].login) : void 0,
						];
					}
					async y(P) {
						if (!P) return;
						const k = this.s.inspect(v).value ?? !1,
							[L, D] = await this.w(P);
						L &&
							k &&
							(this.C(D), this.b.set(k), this.g.publicLog2(v, { enabled: !0 }));
					}
					z() {
						this.m.store(
							v,
							!1,
							n.StorageScope.APPLICATION,
							n.StorageTarget.MACHINE,
						),
							this.b.set(!1),
							this.c.clear();
					}
					async C(P) {
						const k = P
								? this.j.gitHubEntitlement.command.title.replace("{{org}}", P)
								: this.j.gitHubEntitlement.command.titleWithoutPlaceHolder,
							L = new u.$8qc(1, () => k);
						(this.c.value = this.q.showAccountsActivity({ badge: L })),
							this.f.onDidChangeContext((D) => {
								D.affectsSome(new Set([v])) &&
									(this.f.getContextKeyValue(v) || this.c.clear());
							}),
							this.D(
								(0, r.$4X)(
									class extends r.$3X {
										constructor() {
											super({
												id: "workbench.action.entitlementAction",
												title: k,
												f1: !1,
												menu: {
													id: r.$XX.AccountsContext,
													group: "5_AccountsEntitlements",
													when: E.$Kj.equals(v, !0),
												},
											});
										}
										async run(D) {
											const M = D.get(a.$Bk),
												N = D.get(C.$ek),
												A = D.get(E.$6j),
												R = D.get(n.$lq),
												O = D.get(y.$GO),
												B = D.get(d.$km);
											(
												await O.confirm({
													type: "question",
													message: M.gitHubEntitlement.confirmationMessage,
													primaryButton: M.gitHubEntitlement.confirmationAction,
												})
											).confirmed
												? (N.executeCommand(
														M.gitHubEntitlement.command.action,
														M.gitHubEntitlement.extensionId,
													),
													B.publicLog2("accountsEntitlements.action", {
														command: M.gitHubEntitlement.command.action,
													}))
												: B.publicLog2("accountsEntitlements.action", {
														command:
															M.gitHubEntitlement.command.action + "-dismissed",
													}),
												new E.$5j(v, !1).bindTo(A).set(!1),
												R.store(
													v,
													!1,
													n.StorageScope.APPLICATION,
													n.StorageTarget.MACHINE,
												);
										}
									},
								),
							);
					}
				};
				(S = Ne(
					[
						j(0, E.$6j),
						j(1, d.$km),
						j(2, m.$$7),
						j(3, a.$Bk),
						j(4, n.$lq),
						j(5, h.$Hp),
						j(6, u.$7qc),
						j(7, g.$q2),
						j(8, b.$gj),
						j(9, s.$Aq),
					],
					S,
				)),
					t.$Io
						.as(p.$No.Configuration)
						.registerConfiguration({
							...o.$u6,
							properties: {
								"workbench.accounts.experimental.showEntitlements": {
									scope: p.ConfigurationScope.MACHINE,
									type: "boolean",
									default: !1,
									tags: ["experimental"],
									description: (0, f.localize)(4427, null),
								},
							},
						}),
					(0, i.$s6)(
						"workbench.contrib.entitlements",
						S,
						i.WorkbenchPhase.BlockRestore,
					);
			},
		),
		define(
			de[1857],
			he([1, 0, 4, 208, 178, 130, 1217, 257, 65, 8, 207, 153]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vIc = void 0),
					(e.$wIc = c),
					(e.$xIc = n);
				class h {
					constructor() {
						(this.priority = 107),
							(this.name = "panelChat"),
							(this.type = w.AccessibleViewType.Help),
							(this.when = r.$Kj.and(
								u.$01.isEqualTo(a.ChatAgentLocation.Panel),
								r.$Kj.or(u.$41, u.$X1, u.$Y1),
							));
					}
					getProvider(p) {
						const o =
							p.get(m.$dtb).getActiveCodeEditor() ||
							p.get(m.$dtb).getFocusedCodeEditor();
						return n(p, o ?? void 0, "panelChat");
					}
				}
				e.$vIc = h;
				function c(g) {
					const p = [];
					return (
						g === "panelChat"
							? (p.push((0, t.localize)(4540, null)),
								p.push((0, t.localize)(4541, null)),
								p.push(
									(0, t.localize)(
										4542,
										null,
										"<keybinding:editor.action.accessibleView>",
									),
								),
								p.push((0, t.localize)(4543, null)),
								p.push((0, t.localize)(4544, null)),
								p.push(
									(0, t.localize)(4545, null, "<keybinding:chat.action.focus>"),
								),
								p.push(
									(0, t.localize)(
										4546,
										null,
										"<keybinding:workbench.action.chat.focusInput>",
									),
								),
								p.push(
									(0, t.localize)(
										4547,
										null,
										"<keybinding:workbench.action.chat.nextCodeBlock>",
									),
								),
								p.push(
									(0, t.localize)(
										4548,
										null,
										"<keybinding:workbench.action.chat.nextFileTree>",
									),
								),
								p.push(
									(0, t.localize)(
										4549,
										null,
										"<keybinding:workbench.action.chat.new>",
									),
								))
							: (p.push((0, t.localize)(4550, null)),
								p.push(
									(0, t.localize)(4551, null, "<keybinding:inlineChat.start>"),
								),
								p.push(
									(0, t.localize)(
										4552,
										null,
										"<keybinding:history.showPrevious>",
										"<keybinding:history.showNext>",
									),
								),
								p.push(
									(0, t.localize)(
										4553,
										null,
										"<keybinding:editor.action.accessibleView>",
									),
								),
								p.push((0, t.localize)(4554, null)),
								p.push((0, t.localize)(4555, null)),
								p.push((0, t.localize)(4556, null, C.$_yb.id)),
								p.push((0, t.localize)(4557, null))),
						p.push((0, t.localize)(4558, null)),
						p.join(`
`)
					);
				}
				function n(g, p, o) {
					const f = g.get(i.$GYb),
						b = o === "panelChat" ? f.lastFocusedWidget?.inputEditor : p;
					if (!b || !(b.getDomNode() ?? void 0)) return;
					const l = b.getPosition();
					b.getSupportedActions();
					const y = c(o);
					return new w.$ILb(
						o === "panelChat"
							? w.AccessibleViewProviderId.Chat
							: w.AccessibleViewProviderId.InlineChat,
						{ type: w.AccessibleViewType.Help },
						() => y,
						() => {
							o === "panelChat" && l
								? (b.setPosition(l), b.focus())
								: o === "inlineChat" && p?.getContribution(d.$TKb)?.focus();
						},
						o === "panelChat"
							? E.AccessibilityVerbositySettingId.Chat
							: E.AccessibilityVerbositySettingId.InlineChat,
					);
				}
			},
		),
		define(
			de[3548],
			he([1, 0, 434, 4, 130, 178, 283]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NYb = void 0);
				let d = class {
					constructor(r) {
						this.a = r;
					}
					getWidgetRole() {
						return "list";
					}
					getRole(r) {
						return "listitem";
					}
					getWidgetAriaLabel() {
						return (0, i.localize)(4636, null);
					}
					getAriaLabel(r) {
						return (0, C.$0Tb)(r)
							? r.messageText
							: (0, C.$$Tb)(r)
								? this.b(r)
								: (0, C.$_Tb)(r)
									? r.content
											.map((u) =>
												"value" in u
													? u.value
													: u
															.map((a) => a.message)
															.join(`
`),
											)
											.join(`
`)
									: "";
					}
					b(r) {
						const u = this.a.getOpenAriaHint(
							w.AccessibilityVerbositySettingId.Chat,
						);
						let a = "";
						const h =
							r.response.value.filter((g) => !("value" in g))?.length ?? 0;
						let c = "";
						switch (h) {
							case 0:
								break;
							case 1:
								c = (0, i.localize)(4637, null);
								break;
							default:
								c = (0, i.localize)(4638, null, h);
								break;
						}
						const n =
							t.marked
								.lexer(r.response.toString())
								.filter((g) => g.type === "code")?.length ?? 0;
						switch (n) {
							case 0:
								a = u
									? (0, i.localize)(4639, null, c, r.response.toString(), u)
									: (0, i.localize)(4640, null, c, r.response.toString());
								break;
							case 1:
								a = u
									? (0, i.localize)(4641, null, c, r.response.toString(), u)
									: (0, i.localize)(4642, null, c, r.response.toString());
								break;
							default:
								a = u
									? (0, i.localize)(4643, null, c, n, r.response.toString(), u)
									: (0, i.localize)(4644, null, c, n, r.response.toString());
								break;
						}
						return a;
					}
				};
				(e.$NYb = d), (e.$NYb = d = Ne([j(0, E.$HLb)], d));
			},
		),
		define(
			de[3549],
			he([1, 0, 127, 3, 184, 5, 1650, 267, 94, 10, 130]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MIc = void 0);
				const a = 4e3;
				let h = class extends i.$1c {
					constructor(n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.a = this.D(new i.$0c())),
							(this.b = 0);
					}
					acceptRequest() {
						return (
							this.b++,
							this.c.playSignal(w.$Twb.chatRequestSent, {
								allowManyInParallel: !0,
							}),
							this.a.set(this.b, this.f.createInstance(C.$LIc, a, void 0)),
							this.b
						);
					}
					acceptResponse(n, g) {
						this.a.deleteAndDispose(g);
						const p = typeof n != "string",
							o = typeof n == "string" ? n : n?.response.toString();
						if (
							(this.c.playSignal(w.$Twb.chatResponseReceived, {
								allowManyInParallel: !0,
							}),
							!n || !o)
						)
							return;
						const f = p && n.errorDetails ? ` ${n.errorDetails.message}` : "",
							b = (0, d.$Wib)(new m.$cl(o));
						this.g.getValue(u.AccessibilityVoiceSettingId.AutoSynthesize) !==
							"on" && (0, t.$pib)(b + f);
					}
				};
				(e.$MIc = h),
					(e.$MIc = h = Ne([j(0, w.$Owb), j(1, E.$Li), j(2, r.$gj)], h));
			},
		),
		define(
			de[3550],
			he([1, 0, 267, 94, 178, 130, 208, 207, 441, 283, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QIc = void 0);
				class a {
					constructor() {
						(this.priority = 100),
							(this.name = "panelChat"),
							(this.type = w.AccessibleViewType.View),
							(this.when = d.$41);
					}
					getProvider(n) {
						const p = n.get(C.$GYb).lastFocusedWidget;
						if (!p) return;
						const o = p.hasInputFocus();
						o && p.focusLastMessage();
						const f = p,
							b = f.getFocus();
						if (b) return new h(f, b, o);
					}
				}
				e.$QIc = a;
				class h extends u.$1c {
					constructor(n, g, p) {
						super(),
							(this.b = n),
							(this.c = p),
							(this.id = w.AccessibleViewProviderId.Chat),
							(this.verbositySettingKey =
								E.AccessibilityVerbositySettingId.Chat),
							(this.options = { type: w.AccessibleViewType.View }),
							(this.a = g);
					}
					provideContent() {
						return this.f(this.a);
					}
					f(n) {
						const g = n instanceof m.$92;
						let p = (0, r.$$Tb)(n) ? n.response.toString() : "";
						if (g) {
							const o = [];
							for (const f of n.content)
								Array.isArray(f)
									? o.push(...f.map((b) => b.message))
									: o.push(f.value);
							p = o.join(`
`);
						}
						return (
							!p &&
								"errorDetails" in n &&
								n.errorDetails &&
								(p = n.errorDetails.message),
							(0, t.$Xib)(new i.$cl(p), !0)
						);
					}
					onClose() {
						this.b.reveal(this.a),
							this.c ? this.b.focusInput() : this.b.focus(this.a);
					}
					provideNextContent() {
						const n = this.b.getSibling(this.a, "next");
						if (n) return (this.a = n), this.f(n);
					}
					providePreviousContent() {
						const n = this.b.getSibling(this.a, "previous");
						if (n) return (this.a = n), this.f(n);
					}
				}
			},
		),
		define(
			de[3551],
			he([1, 0, 4, 10, 91, 11, 130, 43, 27, 127, 761, 2396]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				class a extends E.$3X {
					constructor() {
						super({
							id: "editor.action.toggleScreenReaderAccessibilityMode",
							title: t.localize2(
								4845,
								"Toggle Screen Reader Accessibility Mode",
							),
							metadata: {
								description: t.localize2(
									4846,
									"Toggles an optimized mode for usage with screen readers, braille devices, and other assistive technologies.",
								),
							},
							f1: !0,
							keybinding: [
								{
									primary: m.KeyMod.CtrlCmd | m.KeyCode.KeyE,
									weight: d.KeybindingWeight.WorkbenchContrib + 10,
									when: C.$MLb,
								},
								{
									primary: m.KeyMod.Alt | m.KeyCode.F1 | m.KeyMod.Shift,
									linux: {
										primary: m.KeyMod.Alt | m.KeyCode.F4 | m.KeyMod.Shift,
									},
									weight: d.KeybindingWeight.WorkbenchContrib + 10,
								},
							],
						});
					}
					async run(c) {
						const n = c.get(w.$XK),
							g = c.get(i.$gj),
							p = n.isScreenReaderOptimized();
						g.updateValue(
							"editor.accessibilitySupport",
							p ? "off" : "on",
							i.ConfigurationTarget.USER,
						),
							(0, r.$oib)(
								p
									? u.AccessibilityHelpNLS.screenReaderModeDisabled
									: u.AccessibilityHelpNLS.screenReaderModeEnabled,
							);
					}
				}
				(0, E.$4X)(a);
			},
		),
		