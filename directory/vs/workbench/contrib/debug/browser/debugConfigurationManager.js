import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/json.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/workspace/common/workspace.js';
import './debugIcons.js';
import '../common/debug.js';
import '../common/debugSchemas.js';
import '../common/debugUtils.js';
import '../../../services/configuration/common/configuration.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/history/common/history.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/textfile/common/textfiles.js';
define(
			de[3681],
			he([
				1, 0, 24, 15, 33, 6, 187, 3, 82, 19, 26, 9, 4, 10, 8, 22, 5, 250, 34,
				63, 30, 21, 68, 25, 352, 112, 1812, 396, 261, 18, 53, 245, 131, 85,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*async*/,
				w /*cancellation*/,
				E /*event*/,
				C /*json*/,
				d /*lifecycle*/,
				m /*objects*/,
				r /*resources*/,
				u /*themables*/,
				a /*uri*/,
				h /*nls*/,
				c /*configuration*/,
				n /*contextkey*/,
				g /*files*/,
				p /*instantiation*/,
				o /*jsonContributionRegistry*/,
				f /*log*/,
				b /*quickInput*/,
				s /*platform*/,
				l /*storage*/,
				y /*uriIdentity*/,
				$ /*workspace*/,
				v /*debugIcons*/,
				S /*debug*/,
				I /*debugSchemas*/,
				T /*debugUtils*/,
				P /*configuration*/,
				k /*editorService*/,
				L /*extensions*/,
				D /*history*/,
				M /*preferences*/,
				N /*textfiles*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UQc = void 0),
					(C = mt(C)),
					(m = mt(m)),
					(r = mt(r)),
					(h = mt(h));
				const A = s.$Io.as(o.$Jo.JSONContribution);
				A.registerSchema(P.$EZ, I.$SQc);
				const R = "debug.selectedconfigname",
					O = "debug.selectedroot",
					B = "debug.selectedtype",
					U = "debug.recentdynamicconfigurations";
				let z = class {
					constructor(G, K, J, W, X, Y, ie, ne, ee, _, te) {
						(this.r = G),
							(this.s = K),
							(this.u = J),
							(this.v = W),
							(this.w = X),
							(this.x = Y),
							(this.y = ie),
							(this.z = ne),
							(this.A = ee),
							(this.B = te),
							(this.g = () => Promise.resolve(void 0)),
							(this.j = !1),
							(this.m = new E.$re()),
							(this.q = new E.$re()),
							(this.onDidChangeConfigurationProviders = this.q.event),
							(this.n = []),
							(this.k = [this.q]),
							this.D(),
							this.E(),
							this.C();
						const Q = this.x.get(O, l.StorageScope.WORKSPACE),
							Z = this.x.get(B, l.StorageScope.WORKSPACE),
							se = this.a.find((oe) => oe.uri.toString() === Q),
							re = this.x.get(R, l.StorageScope.WORKSPACE);
						this.o = S.$14.bindTo(_);
						const le = Z ? { type: Z } : void 0;
						se && se.getConfigurationNames().length
							? this.selectConfiguration(se, re, void 0, le)
							: this.a.length > 0 &&
								this.selectConfiguration(void 0, re, void 0, le);
					}
					registerDebugConfigurationProvider(G) {
						return (
							this.n.push(G),
							this.q.fire(),
							{
								dispose: () => {
									this.unregisterDebugConfigurationProvider(G), this.q.fire();
								},
							}
						);
					}
					unregisterDebugConfigurationProvider(G) {
						const K = this.n.indexOf(G);
						K >= 0 && this.n.splice(K, 1);
					}
					hasDebugConfigurationProvider(G, K) {
						return (
							K === void 0 &&
								(K = S.DebugConfigurationProviderTriggerKind.Initial),
							!!this.n.find(
								(W) =>
									W.provideDebugConfigurations &&
									W.type === G &&
									W.triggerKind === K,
							)
						);
					}
					async resolveConfigurationByProviders(G, K, J, W) {
						const X = async (ne, ee) => {
							ne !== "*" &&
								(await this.r.activateDebuggers("onDebugResolve", ne));
							for (const _ of this.n)
								_.type === ne &&
									_.resolveDebugConfiguration &&
									ee &&
									(ee = await _.resolveDebugConfiguration(G, ee, W));
							return ee;
						};
						let Y = J.type ?? K,
							ie = J;
						for (let ne = new Set(); ie && !ne.has(Y); )
							ne.add(Y),
								(ie = await X(Y, ie)),
								(ie = await X("*", ie)),
								(Y = ie?.type ?? K);
						return ie;
					}
					async resolveDebugConfigurationWithSubstitutedVariables(G, K, J, W) {
						const X = this.n
							.filter(
								(ie) =>
									ie.type === K &&
									ie.resolveDebugConfigurationWithSubstitutedVariables,
							)
							.concat(
								this.n.filter(
									(ie) =>
										ie.type === "*" &&
										ie.resolveDebugConfigurationWithSubstitutedVariables,
								),
							);
						let Y = J;
						return (
							await (0, i.$Ph)(
								X.map((ie) => async () => {
									Y &&
										(Y =
											await ie.resolveDebugConfigurationWithSubstitutedVariables(
												G,
												Y,
												W,
											));
								}),
							),
							Y
						);
					}
					async provideDebugConfigurations(G, K, J) {
						return (
							await this.r.activateDebuggers("onDebugInitialConfigurations"),
							(
								await Promise.all(
									this.n
										.filter(
											(X) =>
												X.type === K &&
												X.triggerKind ===
													S.DebugConfigurationProviderTriggerKind.Initial &&
												X.provideDebugConfigurations,
										)
										.map((X) => X.provideDebugConfigurations(G, J)),
								)
							).reduce((X, Y) => X.concat(Y), [])
						);
					}
					async getDynamicProviders() {
						await this.y.whenInstalledExtensionsRegistered();
						const G = "onDebugDynamicConfigurations",
							K = this.y.extensions.reduce((J, W) => {
								if (!W.activationEvents) return J;
								const X = [];
								let Y = !1;
								for (const ie of W.activationEvents)
									ie === G
										? (Y = !0)
										: ie.startsWith(`${G}:`) && X.push(ie.slice(G.length + 1));
								if (X.length) X.forEach((ie) => J.add(ie));
								else if (Y) {
									const ie = W.contributes?.debuggers?.[0].type;
									ie && J.add(ie);
								}
								return J;
							}, new Set());
						for (const J of this.n)
							J.triggerKind ===
								S.DebugConfigurationProviderTriggerKind.Dynamic &&
								K.add(J.type);
						return [...K].map((J) => ({
							label: this.r.getDebuggerLabel(J),
							getProvider: async () => (
								await this.r.activateDebuggers(G, J),
								this.n.find(
									(W) =>
										W.type === J &&
										W.triggerKind ===
											S.DebugConfigurationProviderTriggerKind.Dynamic &&
										W.provideDebugConfigurations,
								)
							),
							type: J,
							pick: async () => {
								await this.r.activateDebuggers(G, J);
								const W = new w.$Ce(),
									X = [],
									Y = this.n.find(
										(Z) =>
											Z.type === J &&
											Z.triggerKind ===
												S.DebugConfigurationProviderTriggerKind.Dynamic &&
											Z.provideDebugConfigurations,
									);
								this.getLaunches().forEach((Z) => {
									Z.workspace &&
										Y &&
										X.push(
											Y.provideDebugConfigurations(
												Z.workspace.uri,
												W.token,
											).then((se) =>
												se.map((re) => ({
													label: re.name,
													description: Z.name,
													config: re,
													buttons: [
														{
															iconClass: u.ThemeIcon.asClassName(v.$vKb),
															tooltip: h.localize(5465, null),
														},
													],
													launch: Z,
												})),
											),
										);
								});
								const ie = new d.$Zc(),
									ne = ie.add(this.v.createQuickPick());
								(ne.busy = !0), (ne.placeholder = h.localize(5466, null));
								const ee = new Promise((Z) => {
									ie.add(ne.onDidAccept(() => Z(ne.activeItems[0]))),
										ie.add(
											ne.onDidTriggerItemButton(async (se) => {
												Z(void 0);
												const { launch: re, config: le } = se.item;
												await re.openConfigFile({
													preserveFocus: !1,
													type: le.type,
													suppressInitialConfigs: !0,
												}),
													await re.writeConfiguration(le),
													await this.selectConfiguration(re, le.name),
													this.removeRecentDynamicConfigurations(
														le.name,
														le.type,
													);
											}),
										),
										ie.add(ne.onDidHide(() => Z(void 0)));
								});
								let _;
								try {
									_ = await Promise.all(X);
								} catch (Z) {
									this.B.error(Z), ie.dispose();
									return;
								}
								const te = _.flat();
								(ne.items = te), (ne.busy = !1), ne.show();
								const Q = await ee;
								if ((ie.dispose(), !Q)) {
									W.cancel();
									return;
								}
								return Q;
							},
						}));
					}
					getAllConfigurations() {
						const G = [];
						for (const K of this.a)
							for (const J of K.getConfigurationNames()) {
								const W = K.getConfiguration(J) || K.getCompound(J);
								W &&
									G.push({ launch: K, name: J, presentation: W.presentation });
							}
						return (0, T.$v3)(G);
					}
					removeRecentDynamicConfigurations(G, K) {
						const J = this.getRecentDynamicConfigurations().filter(
							(W) => W.name !== G || W.type !== K,
						);
						this.x.store(
							U,
							JSON.stringify(J),
							l.StorageScope.WORKSPACE,
							l.StorageTarget.MACHINE,
						),
							this.selectedConfiguration.name === G && this.h === K && this.j
								? this.selectConfiguration(void 0, void 0)
								: this.m.fire();
					}
					getRecentDynamicConfigurations() {
						return JSON.parse(this.x.get(U, l.StorageScope.WORKSPACE, "[]"));
					}
					C() {
						this.k.push(
							E.Event.any(
								this.s.onDidChangeWorkspaceFolders,
								this.s.onDidChangeWorkbenchState,
							)(() => {
								this.D(), this.selectConfiguration(void 0), this.E();
							}),
						),
							this.k.push(
								this.u.onDidChangeConfiguration(async (G) => {
									G.affectsConfiguration("launch") &&
										(await this.selectConfiguration(void 0), this.E());
								}),
							),
							this.k.push(
								this.r.onDidDebuggersExtPointRead(() => {
									this.E();
								}),
							);
					}
					D() {
						(this.a = this.s
							.getWorkspace()
							.folders.map((G) => this.w.createInstance(x, this, this.r, G))),
							this.s.getWorkbenchState() === $.WorkbenchState.WORKSPACE &&
								this.a.push(this.w.createInstance(H, this, this.r)),
							this.a.push(this.w.createInstance(q, this, this.r)),
							this.d &&
								this.a.indexOf(this.d) === -1 &&
								this.selectConfiguration(void 0);
					}
					E() {
						const G =
								I.$SQc.properties.compounds.items.properties.configurations,
							K = this.a
								.map((W) => W.getConfigurationNames(!0))
								.reduce((W, X) => W.concat(X), []);
						(G.items.oneOf[0].enum = K),
							(G.items.oneOf[1].properties.name.enum = K);
						const J = this.s.getWorkspace().folders.map((W) => W.name);
						(G.items.oneOf[1].properties.folder.enum = J),
							A.registerSchema(P.$EZ, I.$SQc);
					}
					getLaunches() {
						return this.a;
					}
					getLaunch(G) {
						if (a.URI.isUri(G))
							return this.a.find(
								(K) => K.workspace && this.A.extUri.isEqual(K.workspace.uri, G),
							);
					}
					get selectedConfiguration() {
						return {
							launch: this.d,
							name: this.b,
							getConfig: this.g,
							type: this.h,
						};
					}
					get onDidSelectConfiguration() {
						return this.m.event;
					}
					getWorkspaceLaunch() {
						if (this.s.getWorkbenchState() === $.WorkbenchState.WORKSPACE)
							return this.a[this.a.length - 1];
					}
					async selectConfiguration(G, K, J, W) {
						if (typeof G > "u") {
							const _ = this.z.getLastActiveWorkspaceRoot();
							(G = this.getLaunch(_)),
								(!G || G.getConfigurationNames().length === 0) &&
									(G =
										this.a.find(
											(te) => !!(te && te.getConfigurationNames().length),
										) ||
										G ||
										this.a[0]);
						}
						const X = this.d,
							Y = this.b,
							ie = this.j;
						(this.d = G),
							this.d
								? this.x.store(
										O,
										this.d.uri.toString(),
										l.StorageScope.WORKSPACE,
										l.StorageTarget.MACHINE,
									)
								: this.x.remove(O, l.StorageScope.WORKSPACE);
						const ne = G ? G.getConfigurationNames() : [];
						this.g = () => {
							const _ = this.b ? G?.getConfiguration(this.b) : void 0;
							return Promise.resolve(_ || J);
						};
						let ee = J?.type;
						if (K && ne.indexOf(K) >= 0) this.F(K);
						else if (W && W.type) {
							if (((ee = W.type), !J)) {
								const te = (await this.getDynamicProviders()).filter(
									(Q) => Q.type === ee,
								);
								this.g = async () => {
									const Q = await Promise.all(te.map((se) => se.getProvider())),
										Z = Q.length > 0 ? Q[0] : void 0;
									if (Z && G && G.workspace) {
										const se = new w.$Ce(),
											le = (
												await Z.provideDebugConfigurations(
													G.workspace.uri,
													se.token,
												)
											).find((oe) => oe.name === K);
										if (le) return le;
									}
								};
							}
							this.F(K);
							let _ = this.getRecentDynamicConfigurations();
							K &&
								W.type &&
								(_.unshift({ name: K, type: W.type }),
								(_ = (0, t.$Qb)(_, (te) => `${te.name} : ${te.type}`)),
								this.x.store(
									U,
									JSON.stringify(_),
									l.StorageScope.WORKSPACE,
									l.StorageTarget.MACHINE,
								));
						} else if (!this.b || ne.indexOf(this.b) === -1) {
							const _ = ne.length ? ne[0] : void 0;
							this.F(_);
						}
						!J &&
							G &&
							this.b &&
							((J = G.getConfiguration(this.b)), (ee = J?.type)),
							(this.h = W?.type || J?.type),
							(this.j = !!W),
							this.x.store(
								B,
								W ? this.h : void 0,
								l.StorageScope.WORKSPACE,
								l.StorageTarget.MACHINE,
							),
							ee ? this.o.set(ee) : this.o.reset(),
							(this.d !== X || this.b !== Y || ie !== this.j) && this.m.fire();
					}
					F(G) {
						(this.b = G),
							this.b
								? this.x.store(
										R,
										this.b,
										l.StorageScope.WORKSPACE,
										l.StorageTarget.MACHINE,
									)
								: this.x.remove(R, l.StorageScope.WORKSPACE);
					}
					dispose() {
						this.k = (0, d.$Vc)(this.k);
					}
				};
				(e.$UQc = z),
					(e.$UQc = z =
						Ne(
							[
								j(1, $.$Vi),
								j(2, c.$gj),
								j(3, b.$DJ),
								j(4, p.$Li),
								j(5, l.$lq),
								j(6, L.$q2),
								j(7, D.$Feb),
								j(8, y.$Vl),
								j(9, n.$6j),
								j(10, f.$ik),
							],
							z,
						));
				class F {
					constructor(G, K) {
						(this.b = G), (this.d = K);
					}
					getCompound(G) {
						const K = this.a();
						if (!(!K || !K.compounds))
							return K.compounds.find((J) => J.name === G);
					}
					getConfigurationNames(G = !1) {
						const K = this.a();
						if (
							!K ||
							(!Array.isArray(K.configurations) && !Array.isArray(K.compounds))
						)
							return [];
						{
							const J = [];
							return (
								K.configurations &&
									J.push(
										...K.configurations.filter(
											(W) => W && typeof W.name == "string",
										),
									),
								G
									? J.map((W) => W.name)
									: (K.compounds &&
											J.push(
												...K.compounds.filter(
													(W) =>
														typeof W.name == "string" &&
														W.configurations &&
														W.configurations.length,
												),
											),
										(0, T.$v3)(J).map((W) => W.name))
							);
						}
					}
					getConfiguration(G) {
						const K = m.$vo(this.a());
						if (!K || !K.configurations) return;
						const J = K.configurations.find((W) => W && W.name === G);
						return (
							J &&
								(this instanceof q
									? (J.__configurationTarget = c.ConfigurationTarget.USER)
									: this instanceof H
										? (J.__configurationTarget =
												c.ConfigurationTarget.WORKSPACE)
										: (J.__configurationTarget =
												c.ConfigurationTarget.WORKSPACE_FOLDER)),
							J
						);
					}
					async getInitialConfigurationContent(G, K, J, W) {
						let X = "";
						const Y = K
							? this.d.getEnabledDebugger(K)
							: await this.d.guessDebugger(!0);
						if (Y) {
							const ie = J
								? await this.b.provideDebugConfigurations(
										G,
										Y.type,
										W || w.CancellationToken.None,
									)
								: [];
							X = await Y.getInitialConfigurationContent(ie);
						}
						return X;
					}
					get hidden() {
						return !1;
					}
				}
				let x = class extends F {
					constructor(G, K, J, W, X, Y, ie) {
						super(G, K),
							(this.workspace = J),
							(this.g = W),
							(this.h = X),
							(this.j = Y),
							(this.k = ie);
					}
					get uri() {
						return r.$nh(this.workspace.uri, "/.vscode/launch.json");
					}
					get name() {
						return this.workspace.name;
					}
					a() {
						return this.k.inspect("launch", { resource: this.workspace.uri })
							.workspaceFolderValue;
					}
					async openConfigFile(
						{ preserveFocus: G, type: K, suppressInitialConfigs: J },
						W,
					) {
						const X = this.uri;
						let Y = !1,
							ie = "";
						try {
							ie = (await this.g.readFile(X)).value.toString();
						} catch {
							if (
								((ie = await this.getInitialConfigurationContent(
									this.workspace.uri,
									K,
									!J,
									W,
								)),
								!ie)
							)
								return { editor: null, created: !1 };
							Y = !0;
							try {
								await this.h.write(X, ie);
							} catch (Q) {
								throw new Error(h.localize(5467, null, Q.message));
							}
						}
						const ne = ie.indexOf(`"${this.b.selectedConfiguration.name}"`);
						let ee = 1;
						for (let Q = 0; Q < ne; Q++)
							ie.charAt(Q) ===
								`
` && ee++;
						const _ = ee > 1 ? { startLineNumber: ee, startColumn: 4 } : void 0;
						return {
							editor:
								(await this.j.openEditor(
									{
										resource: X,
										options: {
											selection: _,
											preserveFocus: G,
											pinned: Y,
											revealIfVisible: !0,
										},
									},
									k.$JY,
								)) ?? null,
							created: Y,
						};
					}
					async writeConfiguration(G) {
						const K = m.$vo(this.a());
						K.configurations || (K.configurations = []),
							K.configurations.push(G),
							await this.k.updateValue(
								"launch",
								K,
								{ resource: this.workspace.uri },
								c.ConfigurationTarget.WORKSPACE_FOLDER,
							);
					}
				};
				x = Ne([j(3, g.$ll), j(4, N.$kZ), j(5, k.$IY), j(6, c.$gj)], x);
				let H = class extends F {
					constructor(G, K, J, W, X) {
						super(G, K), (this.g = J), (this.h = W), (this.j = X);
					}
					get workspace() {}
					get uri() {
						return this.j.getWorkspace().configuration;
					}
					get name() {
						return h.localize(5468, null);
					}
					a() {
						return this.h.inspect("launch").workspaceValue;
					}
					async openConfigFile(
						{ preserveFocus: G, type: K, useInitialConfigs: J },
						W,
					) {
						if (!!!this.a()) {
							const ie = await this.getInitialConfigurationContent(
								void 0,
								K,
								J,
								W,
							);
							if (ie)
								await this.h.updateValue(
									"launch",
									C.$do(ie),
									c.ConfigurationTarget.WORKSPACE,
								);
							else return { editor: null, created: !1 };
						}
						return {
							editor:
								(await this.g.openEditor(
									{
										resource: this.j.getWorkspace().configuration,
										options: { preserveFocus: G },
									},
									k.$JY,
								)) ?? null,
							created: !1,
						};
					}
				};
				H = Ne([j(2, k.$IY), j(3, c.$gj), j(4, $.$Vi)], H);
				let q = class extends F {
					constructor(G, K, J, W) {
						super(G, K), (this.g = J), (this.h = W);
					}
					get workspace() {}
					get uri() {
						return this.h.userSettingsResource;
					}
					get name() {
						return h.localize(5469, null);
					}
					get hidden() {
						return !0;
					}
					a() {
						return this.g.inspect("launch").userValue;
					}
					async openConfigFile({
						preserveFocus: G,
						type: K,
						useInitialContent: J,
					}) {
						return {
							editor:
								(await this.h.openUserSettings({
									jsonEditor: !0,
									preserveFocus: G,
									revealSetting: { key: "launch" },
								})) ?? null,
							created: !1,
						};
					}
				};
				q = Ne([j(2, c.$gj), j(3, M.$7Z)], q);
			},
		),
		