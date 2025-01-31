import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import '../../platform/configuration/common/configurationRegistry.js';
import '../../platform/registry/common/platform.js';
import '../../platform/workspace/common/workspace.js';
import '../../platform/configuration/common/configuration.js';
import '../../base/common/lifecycle.js';
import '../../base/common/event.js';
import '../services/remote/common/remoteAgentService.js';
import '../../base/common/platform.js';
import '../../base/common/objects.js';
import '../../base/common/async.js';
import '../../platform/userDataProfile/common/userDataProfile.js';
define(
			de[224],
			he([1, 0, 4, 81, 30, 25, 10, 3, 6, 143, 12, 82, 15, 129]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*configurationRegistry*/,
 w /*platform*/,
 E /*workspace*/,
 C /*configuration*/,
 d /*lifecycle*/,
 m /*event*/,
 r /*remoteAgentService*/,
 u /*platform*/,
 a /*objects*/,
 h /*async*/,
 c /*userDataProfile*/) {
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
		)
