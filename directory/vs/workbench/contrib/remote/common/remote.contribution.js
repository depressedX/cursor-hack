define(
			de[3562],
			he([
				1, 0, 55, 30, 52, 73, 12, 23, 143, 34, 4, 3, 81, 22, 57, 78, 25, 24, 11,
				99, 604, 665, 2706, 1620,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nXc = void 0);
				let v = class {
					static {
						this.ID = "workbench.contrib.remoteLabel";
					}
					constructor(D, M) {
						(this.a = D), (this.b = M), this.c();
					}
					c() {
						this.b.getEnvironment().then((D) => {
							const M = D?.os || C.OS,
								N = {
									label: "${path}",
									separator: M === C.OperatingSystem.Windows ? "\\" : "/",
									tildify: M !== C.OperatingSystem.Windows,
									normalizeDriveLetter: M === C.OperatingSystem.Windows,
									workspaceSuffix: C.$r ? void 0 : d.Schemas.vscodeRemote,
								};
							this.a.registerFormatter({
								scheme: d.Schemas.vscodeRemote,
								formatting: N,
							}),
								D &&
									this.a.registerFormatter({
										scheme: d.Schemas.vscodeUserData,
										formatting: N,
									});
						});
					}
				};
				(e.$nXc = v), (e.$nXc = v = Ne([j(0, E.$3N), j(1, m.$$m)], v));
				let S = class extends a.$1c {
					constructor(D, M, N) {
						super();
						const A = D.getConnection();
						A &&
							(A.registerChannel("download", new y.$hp(M)),
							A.withChannel("logger", async (R) => this.D(new $.$2J(N, R))));
					}
				};
				S = Ne([j(0, m.$$m), j(1, l.$gp), j(2, r.$jk)], S);
				let I = class extends a.$1c {
					static {
						this.ID = "workbench.contrib.remoteInvalidWorkspaceDetector";
					}
					constructor(D, M, N, A, R, O) {
						super(),
							(this.a = D),
							(this.b = M),
							(this.c = N),
							(this.f = A),
							(this.g = R),
							this.c.remoteAuthority &&
								O.getEnvironment().then((B) => {
									B && this.h();
								});
					}
					async h() {
						const D = this.f.getWorkspace(),
							M = D.configuration ?? (0, o.$Sb)(D.folders)?.uri;
						if (!M || (await this.a.exists(M))) return;
						if (
							(
								await this.b.confirm({
									type: "warning",
									message: (0, u.localize)(8870, null),
									detail: (0, u.localize)(8871, null),
									primaryButton: (0, u.localize)(8872, null),
								})
							).confirmed
						)
							return D.configuration
								? this.g.pickWorkspaceAndOpen({})
								: this.g.pickFolderAndOpen({});
					}
				};
				I = Ne(
					[
						j(0, c.$ll),
						j(1, n.$GO),
						j(2, g.$r8),
						j(3, p.$Vi),
						j(4, n.$IO),
						j(5, m.$$m),
					],
					I,
				);
				const T = i.$Io.as(t.Extensions.Workbench);
				if (
					((0, t.$s6)(v.ID, v, t.WorkbenchPhase.BlockStartup),
					T.registerWorkbenchContribution(S, w.LifecyclePhase.Restored),
					(0, t.$s6)(I.ID, I, t.WorkbenchPhase.BlockStartup),
					!0)
				) {
					class L extends f.$3X {
						constructor() {
							super({
								id: "workbench.action.triggerReconnect",
								title: (0, u.localize2)(8914, "Connection: Trigger Reconnect"),
								category: b.$ck.Developer,
								f1: !0,
							});
						}
						async run(N) {
							s.$hm.debugTriggerReconnection();
						}
					}
					class D extends f.$3X {
						constructor() {
							super({
								id: "workbench.action.pauseSocketWriting",
								title: (0, u.localize2)(
									8915,
									"Connection: Pause socket writing",
								),
								category: b.$ck.Developer,
								f1: !0,
							});
						}
						async run(N) {
							s.$hm.debugPauseSocketWriting();
						}
					}
					(0, f.$4X)(L), (0, f.$4X)(D);
				}
				const k = {
					type: "string",
					enum: ["ui", "workspace"],
					enumDescriptions: [
						(0, u.localize)(8873, null),
						(0, u.localize)(8874, null),
					],
				};
				i.$Io
					.as(h.$No.Configuration)
					.registerConfiguration({
						id: "remote",
						title: (0, u.localize)(8875, null),
						type: "object",
						properties: {
							"remote.extensionKind": {
								type: "object",
								markdownDescription: (0, u.localize)(8876, null),
								patternProperties: {
									"([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$": {
										oneOf: [{ type: "array", items: k }, k],
										default: ["ui"],
									},
								},
								default: { "pub.name": ["ui"] },
							},
							"remote.restoreForwardedPorts": {
								type: "boolean",
								markdownDescription: (0, u.localize)(8877, null),
								default: !0,
							},
							"remote.autoForwardPorts": {
								type: "boolean",
								markdownDescription: (0, u.localize)(8878, null),
								default: !0,
							},
							"remote.autoForwardPortsSource": {
								type: "string",
								markdownDescription: (0, u.localize)(
									8879,
									null,
									"`#remote.autoForwardPorts#`",
								),
								enum: ["process", "output", "hybrid"],
								enumDescriptions: [
									(0, u.localize)(8880, null),
									(0, u.localize)(8881, null),
									(0, u.localize)(8882, null),
								],
								default: "process",
							},
							"remote.autoForwardPortsFallback": {
								type: "number",
								default: 20,
								markdownDescription: (0, u.localize)(8883, null),
							},
							"remote.forwardOnOpen": {
								type: "boolean",
								description: (0, u.localize)(8884, null),
								default: !0,
							},
							"remote.portsAttributes": {
								type: "object",
								patternProperties: {
									"(^\\d+(-\\d+)?$)|(.+)": {
										type: "object",
										description: (0, u.localize)(8885, null),
										properties: {
											onAutoForward: {
												type: "string",
												enum: [
													"notify",
													"openBrowser",
													"openBrowserOnce",
													"openPreview",
													"silent",
													"ignore",
												],
												enumDescriptions: [
													(0, u.localize)(8886, null),
													(0, u.localize)(8887, null),
													(0, u.localize)(8888, null),
													(0, u.localize)(8889, null),
													(0, u.localize)(8890, null),
													(0, u.localize)(8891, null),
												],
												description: (0, u.localize)(8892, null),
												default: "notify",
											},
											elevateIfNeeded: {
												type: "boolean",
												description: (0, u.localize)(8893, null),
												default: !1,
											},
											label: {
												type: "string",
												description: (0, u.localize)(8894, null),
												default: (0, u.localize)(8895, null),
											},
											requireLocalPort: {
												type: "boolean",
												markdownDescription: (0, u.localize)(8896, null),
												default: !1,
											},
											protocol: {
												type: "string",
												enum: ["http", "https"],
												description: (0, u.localize)(8897, null),
											},
										},
										default: {
											label: (0, u.localize)(8898, null),
											onAutoForward: "notify",
										},
									},
								},
								markdownDescription: (0, u.localize)(8899, null),
								defaultSnippets: [
									{
										body: {
											"${1:3000}": {
												label: "${2:Application}",
												onAutoForward: "openPreview",
											},
										},
									},
								],
								errorMessage: (0, u.localize)(8900, null),
								additionalProperties: !1,
								default: {
									443: { protocol: "https" },
									8443: { protocol: "https" },
								},
							},
							"remote.otherPortsAttributes": {
								type: "object",
								properties: {
									onAutoForward: {
										type: "string",
										enum: [
											"notify",
											"openBrowser",
											"openPreview",
											"silent",
											"ignore",
										],
										enumDescriptions: [
											(0, u.localize)(8901, null),
											(0, u.localize)(8902, null),
											(0, u.localize)(8903, null),
											(0, u.localize)(8904, null),
											(0, u.localize)(8905, null),
										],
										description: (0, u.localize)(8906, null),
										default: "notify",
									},
									elevateIfNeeded: {
										type: "boolean",
										description: (0, u.localize)(8907, null),
										default: !1,
									},
									label: {
										type: "string",
										description: (0, u.localize)(8908, null),
										default: (0, u.localize)(8909, null),
									},
									requireLocalPort: {
										type: "boolean",
										markdownDescription: (0, u.localize)(8910, null),
										default: !1,
									},
									protocol: {
										type: "string",
										enum: ["http", "https"],
										description: (0, u.localize)(8911, null),
									},
								},
								defaultSnippets: [{ body: { onAutoForward: "ignore" } }],
								markdownDescription: (0, u.localize)(
									8912,
									null,
									"`#remote.portsAttributes#`",
								),
								additionalProperties: !1,
							},
							"remote.localPortHost": {
								type: "string",
								enum: ["localhost", "allInterfaces"],
								default: "localhost",
								description: (0, u.localize)(8913, null),
							},
						},
					});
			},
		),
		