import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/event.js';
import '../../../../base/common/map.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/async.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/configuration/common/configurationModels.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurations.js';
import '../common/configurationModels.js';
import '../common/configuration.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../common/configurationEditing.js';
import './configuration.js';
import '../../../../base/common/performance.js';
import '../../environment/common/environmentService.js';
import '../../../common/contributions.js';
import '../../lifecycle/common/lifecycle.js';
import '../../../../base/common/errorMessage.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../../base/common/arrays.js';
import '../../extensions/common/extensions.js';
import '../../assignment/common/assignmentService.js';
import '../../../../base/common/types.js';
import '../../../../nls.js';
import '../../../../platform/policy/common/policy.js';
import '../common/jsonEditing.js';
import '../../../../base/common/path.js';
import '../../../../base/common/resources.js';
import '../../../common/configuration.js';
import '../../../../base/browser/window.js';
import '../../../../base/browser/dom.js';
define(
			de[3780],
			he([
				1, 0, 9, 6, 59, 82, 3, 15, 250, 25, 950, 10, 1634, 1794, 261, 30, 81,
				256, 3779, 3251, 240, 78, 55, 52, 163, 174, 24, 53, 708, 28, 4, 940,
				423, 54, 19, 224, 75, 7,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*uri*/,
				i /*event*/,
				w /*map*/,
				E /*objects*/,
				C /*lifecycle*/,
				d /*async*/,
				m /*jsonContributionRegistry*/,
				r /*workspace*/,
				u /*configurationModels*/,
				a /*configuration*/,
				h /*configurations*/,
				c /*configurationModels*/,
				n /*configuration*/,
				g /*platform*/,
				p /*configurationRegistry*/,
				o /*workspaces*/,
				f /*configurationEditing*/,
				b /*configuration*/,
				s /*performance*/,
				l /*environmentService*/,
				y /*contributions*/,
				$ /*lifecycle*/,
				v /*errorMessage*/,
				S /*workspaceTrust*/,
				I /*arrays*/,
				T /*extensions*/,
				P /*assignmentService*/,
				k /*types*/,
				L /*nls*/,
				D /*policy*/,
				M /*jsonEditing*/,
				N /*path*/,
				A /*resources*/,
				R /*configuration*/,
				O /*window*/,
				B /*dom*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$F3c = void 0);
				function U(K, J) {
					return K.isDefault || K.useDefaultFlags?.settings
						? J
							? n.$JZ
							: void 0
						: J
							? n.$IZ
							: n.$HZ;
				}
				class z extends r.$6i {
					constructor() {
						super(...arguments), (this.initialized = !1);
					}
				}
				class F extends C.$1c {
					get restrictedSettings() {
						return this.M;
					}
					constructor(
						{ remoteAuthority: J, configurationCache: W },
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
					) {
						if (
							(super(),
							(this.R = Y),
							(this.S = ie),
							(this.U = ne),
							(this.W = ee),
							(this.X = _),
							(this.Y = te),
							(this.n = !1),
							(this.s = null),
							(this.w = null),
							(this.F = this.D(new i.$re())),
							(this.onDidChangeConfiguration = this.F.event),
							(this.G = this.D(new i.$re())),
							(this.onWillChangeWorkspaceFolders = this.G.event),
							(this.H = this.D(new i.$re())),
							(this.onDidChangeWorkspaceFolders = this.H.event),
							(this.I = this.D(new i.$re())),
							(this.onDidChangeWorkspaceName = this.I.event),
							(this.J = this.D(new i.$re())),
							(this.onDidChangeWorkbenchState = this.J.event),
							(this.L = !0),
							(this.M = { default: [] }),
							(this.N = this.D(new i.$re())),
							(this.onDidChangeRestrictedSettings = this.N.event),
							(this.O = g.$Io.as(p.$No.Configuration)),
							(this.g = new d.$Lh()),
							(this.h = new d.$Lh()),
							(this.q = this.D(new b.$z3c(W, X, te))),
							(this.r =
								Q instanceof D.$Mo
									? new h.$ap()
									: this.D(new h.$bp(this.q, Q, te))),
							(this.j = W),
							(this.m = new c.$w3c(
								this.q.configurationModel,
								this.r.configurationModel,
								u.$6o.createEmptyModel(te),
								u.$6o.createEmptyModel(te),
								u.$6o.createEmptyModel(te),
								u.$6o.createEmptyModel(te),
								new w.$Gc(),
								u.$6o.createEmptyModel(te),
								new w.$Gc(),
								this.c,
								te,
							)),
							(this.t = this.D(new C.$Zc())),
							this.Z(),
							(this.u = this.D(
								new b.$B3c(
									Y.currentProfile.settingsResource,
									Y.currentProfile.tasksResource,
									{ scopes: U(Y.currentProfile, !!J) },
									ne,
									_,
									te,
								),
							)),
							(this.z = new w.$Gc()),
							this.D(this.u.onDidChangeConfiguration((Z) => this.wb(Z))),
							J)
						) {
							const Z = (this.w = this.D(new b.$C3c(J, W, ne, _, ee, te)));
							this.D(
								Z.onDidInitialize((se) => {
									this.D(Z.onDidChangeConfiguration((re) => this.xb(re))),
										this.xb(se),
										this.g.open();
								}),
							);
						} else this.g.open();
						(this.y = this.D(new b.$D3c(W, ne, _, te))),
							this.D(
								this.y.onDidUpdateConfiguration((Z) => {
									this.yb(Z).then(() => {
										(this.c.initialized = this.y.initialized), this.gb(Z);
									});
								}),
							),
							this.D(
								this.q.onDidChangeConfiguration(
									({ properties: Z, defaults: se }) => this.tb(se, Z),
								),
							),
							this.D(this.r.onDidChangeConfiguration((Z) => this.ub(Z))),
							this.D(Y.onDidChangeCurrentProfile((Z) => this.sb(Z))),
							(this.C = new d.$Th());
					}
					Z() {
						this.t.clear(),
							this.R.currentProfile.isDefault ||
							this.R.currentProfile.useDefaultFlags?.settings
								? (this.s = null)
								: ((this.s = this.t.add(
										this.D(new b.$A3c(this.S, this.U, this.X, this.Y)),
									)),
									this.t.add(
										this.s.onDidChangeConfiguration((J) => this.vb(J)),
									));
					}
					async getCompleteWorkspace() {
						return await this.h.wait(), this.getWorkspace();
					}
					getWorkspace() {
						return this.c;
					}
					asRelativePath(J, W) {
						let X = this.getWorkspaceFolder(J);
						if (!X) {
							const ie = this.getWorkspace(),
								ne = (0, I.$Sb)(ie.folders);
							ne &&
								J.scheme !== ne.uri.scheme &&
								J.path.startsWith(N.$lc.sep) &&
								(X = this.getWorkspaceFolder(ne.uri.with({ path: J.path })));
						}
						if (!X) return J.fsPath;
						W === void 0 && (W = this.getWorkspace().folders.length > 1);
						let Y = (0, A.$ph)(X.uri, J);
						return (
							W && X.name && Y && (Y = N.$lc.join(X.name, Y)), Y ?? J.fsPath
						);
					}
					resolveRelativePath(J, W) {
						if (J[0] === N.$lc.sep) return t.URI.file(J);
						const X = this.getWorkspace().folders;
						if (((W = W ?? X.length > 1), X.length === 0)) return t.URI.file(J);
						if (W) {
							const ie = J.split(N.$lc.sep)[0],
								ne = X.find((ee) => ee.name === ie);
							if (ne)
								return (
									(J = J.substring(ie.length + 1)),
									ne.uri.with({ path: N.$lc.join(ne.uri.path, J) })
								);
						}
						const Y = X[0];
						return Y.uri.with({ path: N.$lc.join(Y.uri.path, J) });
					}
					getWorkbenchState() {
						return this.c.configuration
							? r.WorkbenchState.WORKSPACE
							: this.c.folders.length === 1
								? r.WorkbenchState.FOLDER
								: r.WorkbenchState.EMPTY;
					}
					getWorkspaceFolder(J) {
						return this.c.getFolder(J);
					}
					addFolders(J, W) {
						return this.updateFolders(J, [], W);
					}
					removeFolders(J) {
						return this.updateFolders([], J);
					}
					async updateFolders(J, W, X) {
						return this.C.queue(() => this.$(J, W, X));
					}
					isInsideWorkspace(J) {
						return !!this.getWorkspaceFolder(J);
					}
					isCurrentWorkspace(J) {
						switch (this.getWorkbenchState()) {
							case r.WorkbenchState.FOLDER: {
								let W;
								return (
									t.URI.isUri(J) ? (W = J) : (0, r.$Wi)(J) && (W = J.uri),
									t.URI.isUri(W) &&
										this.X.extUri.isEqual(W, this.c.folders[0].uri)
								);
							}
							case r.WorkbenchState.WORKSPACE:
								return (0, r.$2i)(J) && this.c.id === J.id;
						}
						return !1;
					}
					async $(J, W, X) {
						if (
							this.getWorkbenchState() !== r.WorkbenchState.WORKSPACE ||
							J.length + W.length === 0
						)
							return Promise.resolve(void 0);
						let Y = !1,
							ie = this.getWorkspace().folders,
							ne = ie
								.map((ee) => ee.raw)
								.filter((ee, _) =>
									(0, o.$gRb)(ee) ? !this.bb(W, ie[_].uri) : !0,
								);
						if (((Y = ie.length !== ne.length), J.length)) {
							const ee = this.getWorkspace().configuration,
								_ = this.X.extUri.dirname(ee);
							ie = (0, o.$iRb)(ne, ee, this.X.extUri);
							const te = ie.map((Z) => Z.uri),
								Q = [];
							for (const Z of J) {
								const se = Z.uri;
								if (!this.bb(te, se)) {
									try {
										if (!(await this.U.stat(se)).isDirectory) continue;
									} catch {}
									Q.push((0, o.$hRb)(se, !1, Z.name, _, this.X.extUri));
								}
							}
							Q.length > 0 &&
								((Y = !0),
								typeof X == "number" && X >= 0 && X < ne.length
									? ((ne = ne.slice(0)), ne.splice(X, 0, ...Q))
									: (ne = [...ne, ...Q]));
						}
						return Y ? this.ab(ne) : Promise.resolve(void 0);
					}
					async ab(J) {
						if (!this.P)
							throw new Error(
								"Cannot update workspace folders because workspace service is not yet ready to accept writes.",
							);
						return (
							await this.P.invokeFunction((W) =>
								this.y.setFolders(J, W.get(M.$$Qb)),
							),
							this.yb(!1)
						);
					}
					bb(J, W) {
						return J.some((X) => this.X.extUri.isEqual(X, W));
					}
					getConfigurationData() {
						return this.m.toData();
					}
					getValue(J, W) {
						const X = typeof J == "string" ? J : void 0,
							Y = (0, a.$hj)(J) ? J : (0, a.$hj)(W) ? W : void 0;
						return this.m.getValue(X, Y);
					}
					async updateValue(J, W, X, Y, ie) {
						const ne = (0, a.$ij)(X)
								? X
								: (0, a.$hj)(X)
									? {
											resource: X.resource,
											overrideIdentifiers: X.overrideIdentifier
												? [X.overrideIdentifier]
												: void 0,
										}
									: void 0,
							ee = ne ? Y : X,
							_ = ee ? [ee] : [];
						if (
							(ne?.overrideIdentifiers &&
								((ne.overrideIdentifiers = (0, I.$Qb)(ne.overrideIdentifiers)),
								(ne.overrideIdentifiers = ne.overrideIdentifiers.length
									? ne.overrideIdentifiers
									: void 0)),
							!_.length)
						) {
							if (ne?.overrideIdentifiers && ne.overrideIdentifiers.length > 1)
								throw new Error(
									"Configuration Target is required while updating the value for multiple override identifiers",
								);
							const te = this.inspect(J, {
								resource: ne?.resource,
								overrideIdentifier: ne?.overrideIdentifiers
									? ne.overrideIdentifiers[0]
									: void 0,
							});
							_.push(...this.Kb(J, W, te)),
								(0, E.$zo)(W, te.defaultValue) &&
									_.length === 1 &&
									(_[0] === a.ConfigurationTarget.USER ||
										_[0] === a.ConfigurationTarget.USER_LOCAL) &&
									(W = void 0);
						}
						await d.Promises.settled(_.map((te) => this.Hb(J, W, te, ne, ie)));
					}
					async reloadConfiguration(J) {
						if (J === void 0) {
							this.kb();
							const W = await this.lb(!0),
								{ local: X, remote: Y } = await this.mb();
							await this.ob(), await this.qb(W, X, Y, !0);
							return;
						}
						if ((0, r.$5i)(J)) {
							await this.pb(J);
							return;
						}
						switch (J) {
							case a.ConfigurationTarget.DEFAULT:
								this.kb();
								return;
							case a.ConfigurationTarget.USER: {
								const { local: W, remote: X } = await this.mb();
								await this.qb(this.m.applicationConfiguration, W, X, !0);
								return;
							}
							case a.ConfigurationTarget.USER_LOCAL:
								await this.reloadLocalUserConfiguration();
								return;
							case a.ConfigurationTarget.USER_REMOTE:
								await this.nb();
								return;
							case a.ConfigurationTarget.WORKSPACE:
							case a.ConfigurationTarget.WORKSPACE_FOLDER:
								await this.ob();
								return;
						}
					}
					hasCachedConfigurationDefaultsOverrides() {
						return this.q.hasCachedConfigurationDefaultsOverrides();
					}
					inspect(J, W) {
						return this.m.inspect(J, W);
					}
					keys() {
						return this.m.keys();
					}
					async whenRemoteConfigurationLoaded() {
						await this.g.wait();
					}
					async initialize(J) {
						(0, s.mark)("code/willInitWorkspaceService");
						const W = this.n;
						this.n = !1;
						const X = await this.cb(J);
						await this.hb(X, W),
							this.gb(!1),
							(0, s.mark)("code/didInitWorkspaceService");
					}
					updateWorkspaceTrust(J) {
						if (this.L !== J) {
							this.L = J;
							const W = this.m.toData(),
								X = [];
							for (const ie of this.c.folders) {
								const ne = this.z.get(ie.uri);
								let ee;
								ne &&
									((ee = ne.updateWorkspaceTrust(this.L)),
									this.m.updateFolderConfiguration(ie.uri, ee)),
									X.push(ee);
							}
							this.getWorkbenchState() === r.WorkbenchState.FOLDER
								? X[0] && this.m.updateWorkspaceConfiguration(X[0])
								: this.m.updateWorkspaceConfiguration(
										this.y.updateWorkspaceTrust(this.L),
									),
								this.zb();
							let Y = [];
							this.restrictedSettings.userLocal &&
								Y.push(...this.restrictedSettings.userLocal),
								this.restrictedSettings.userRemote &&
									Y.push(...this.restrictedSettings.userRemote),
								this.restrictedSettings.workspace &&
									Y.push(...this.restrictedSettings.workspace),
								this.restrictedSettings.workspaceFolder?.forEach((ie) =>
									Y.push(...ie),
								),
								(Y = (0, I.$Qb)(Y)),
								Y.length &&
									this.Lb(
										{ keys: Y, overrides: [] },
										{ data: W, workspace: this.c },
										a.ConfigurationTarget.WORKSPACE,
									);
						}
					}
					acquireInstantiationService(J) {
						this.P = J;
					}
					isSettingAppliedForAllProfiles(J) {
						if (
							this.O.getConfigurationProperties()[J]?.scope ===
							p.ConfigurationScope.APPLICATION
						)
							return !0;
						const W = this.getValue(n.$TZ) ?? [];
						return Array.isArray(W) && W.includes(J);
					}
					async cb(J) {
						return (0, r.$2i)(J)
							? this.db(J)
							: (0, r.$Wi)(J)
								? this.eb(J)
								: this.fb(J);
					}
					async db(J) {
						await this.y.initialize(
							{ id: J.id, configPath: J.configPath },
							this.L,
						);
						const W = J.configPath,
							X = (0, o.$iRb)(this.y.getFolders(), W, this.X.extUri),
							Y = J.id,
							ie = new z(Y, X, this.y.isTransient(), W, (ne) =>
								this.X.extUri.ignorePathCasing(ne),
							);
						return (ie.initialized = this.y.initialized), ie;
					}
					eb(J) {
						const W = new z(J.id, [(0, r.$8i)(J.uri)], !1, null, (X) =>
							this.X.extUri.ignorePathCasing(X),
						);
						return (W.initialized = !0), W;
					}
					fb(J) {
						const W = new z(J.id, [], !1, null, (X) =>
							this.X.extUri.ignorePathCasing(X),
						);
						return (W.initialized = !0), Promise.resolve(W);
					}
					gb(J) {
						!this.h.isOpen() &&
							this.c.initialized &&
							(this.h.open(), this.Fb(J));
					}
					async hb(J, W) {
						const X = !!this.c;
						let Y,
							ie,
							ne = [];
						if (
							(X
								? ((Y = this.getWorkbenchState()),
									(ie = this.c.configuration
										? this.c.configuration.fsPath
										: void 0),
									(ne = this.c.folders),
									this.c.update(J))
								: (this.c = J),
							await this.jb(W),
							X)
						) {
							const ee = this.getWorkbenchState();
							Y && ee !== Y && this.J.fire(ee);
							const _ = this.c.configuration
								? this.c.configuration.fsPath
								: void 0;
							((ie && _ !== ie) || ee !== Y) && this.I.fire();
							const te = this.ib(ne, this.c.folders);
							te &&
								(te.added.length || te.removed.length || te.changed.length) &&
								(await this.Bb(te, !1), this.H.fire(te));
						}
						this.u.hasTasksLoaded ||
							this.D(
								(0, B.$egb)(O.$Bfb, () =>
									this.reloadLocalUserConfiguration(
										!1,
										this.m.localUserConfiguration,
									),
								),
							);
					}
					ib(J, W) {
						const X = { added: [], removed: [], changed: [] };
						X.added = W.filter(
							(Y) => !J.some((ie) => Y.uri.toString() === ie.uri.toString()),
						);
						for (let Y = 0; Y < J.length; Y++) {
							const ie = J[Y];
							let ne = 0;
							for (
								ne = 0;
								ne < W.length && ie.uri.toString() !== W[ne].uri.toString();
								ne++
							);
							ne < W.length
								? (Y !== ne || ie.name !== W[ne].name) && X.changed.push(ie)
								: X.removed.push(ie);
						}
						return X;
					}
					async jb(J) {
						await this.q.initialize();
						const W = this.r.initialize(),
							X = this.s
								? this.s.initialize()
								: Promise.resolve(u.$6o.createEmptyModel(this.Y)),
							Y = async () => {
								(0, s.mark)("code/willInitUserConfiguration");
								const _ = await Promise.all([
									this.u.initialize(),
									this.w
										? this.w.initialize()
										: Promise.resolve(u.$6o.createEmptyModel(this.Y)),
								]);
								if (this.s) {
									const te = await X;
									_[0] = this.u.reparse({ exclude: te.getValue(n.$TZ) });
								}
								return (0, s.mark)("code/didInitUserConfiguration"), _;
							},
							[, ie, [ne, ee]] = await Promise.all([W, X, Y()]);
						(0, s.mark)("code/willInitWorkspaceConfiguration"),
							await this.qb(ie, ne, ee, J),
							(0, s.mark)("code/didInitWorkspaceConfiguration");
					}
					kb() {
						this.tb(this.q.reload());
					}
					async lb(J) {
						if (!this.s) return u.$6o.createEmptyModel(this.Y);
						const W = await this.s.loadConfiguration();
						return J || this.vb(W), W;
					}
					async mb() {
						const [J, W] = await Promise.all([
							this.reloadLocalUserConfiguration(!0),
							this.nb(!0),
						]);
						return { local: J, remote: W };
					}
					async reloadLocalUserConfiguration(J, W) {
						const X = await this.u.reload(W);
						return J || this.wb(X), X;
					}
					async nb(J) {
						if (this.w) {
							const W = await this.w.reload();
							return J || this.xb(W), W;
						}
						return u.$6o.createEmptyModel(this.Y);
					}
					async ob() {
						const J = this.getWorkbenchState();
						if (J === r.WorkbenchState.FOLDER)
							return this.Cb(this.c.folders[0]);
						if (J === r.WorkbenchState.WORKSPACE)
							return this.y.reload().then(() => this.yb(!1));
					}
					pb(J) {
						return this.Cb(J);
					}
					async qb(J, W, X, Y) {
						this.z = new w.$Gc();
						const ie = this.c.folders,
							ne = await this.Eb(ie),
							ee = this.rb(ne),
							_ = new w.$Gc();
						ne.forEach((Q, Z) => _.set(ie[Z].uri, Q));
						const te = this.m;
						if (
							((this.m = new c.$w3c(
								this.q.configurationModel,
								this.r.configurationModel,
								J,
								W,
								X,
								ee,
								_,
								u.$6o.createEmptyModel(this.Y),
								new w.$Gc(),
								this.c,
								this.Y,
							)),
							(this.n = !0),
							Y)
						) {
							const Q = this.m.compare(te);
							this.Lb(
								Q,
								{ data: te.toData(), workspace: this.c },
								a.ConfigurationTarget.WORKSPACE,
							);
						}
						this.zb();
					}
					rb(J) {
						switch (this.getWorkbenchState()) {
							case r.WorkbenchState.FOLDER:
								return J[0];
							case r.WorkbenchState.WORKSPACE:
								return this.y.getConfiguration();
							default:
								return u.$6o.createEmptyModel(this.Y);
						}
					}
					sb(J) {
						J.join(
							(async () => {
								const W = [];
								W.push(
									this.u.reset(
										J.profile.settingsResource,
										J.profile.tasksResource,
										{ scopes: U(J.profile, !!this.w) },
									),
								),
									(J.previous.isDefault !== J.profile.isDefault ||
										!!J.previous.useDefaultFlags?.settings !=
											!!J.profile.useDefaultFlags?.settings) &&
										(this.Z(), this.s && W.push(this.lb(!0)));
								let [X, Y] = await Promise.all(W);
								(Y = Y ?? this.m.applicationConfiguration),
									this.s &&
										(X = this.u.reparse({ exclude: Y.getValue(n.$TZ) })),
									await this.qb(Y, X, this.m.remoteUserConfiguration, !0);
							})(),
						);
					}
					tb(J, W) {
						if (this.c) {
							const X = this.m.toData(),
								Y = this.m.compareAndUpdateDefaultConfiguration(J, W);
							if (
								(this.s &&
									this.m.updateApplicationConfiguration(this.s.reparse()),
								this.w &&
									(this.m.updateLocalUserConfiguration(this.u.reparse()),
									this.m.updateRemoteUserConfiguration(this.w.reparse())),
								this.getWorkbenchState() === r.WorkbenchState.FOLDER)
							) {
								const ie = this.z.get(this.c.folders[0].uri);
								ie &&
									(this.m.updateWorkspaceConfiguration(ie.reparse()),
									this.m.updateFolderConfiguration(
										this.c.folders[0].uri,
										ie.reparse(),
									));
							} else {
								this.m.updateWorkspaceConfiguration(
									this.y.reparseWorkspaceSettings(),
								);
								for (const ie of this.c.folders) {
									const ne = this.z.get(ie.uri);
									ne && this.m.updateFolderConfiguration(ie.uri, ne.reparse());
								}
							}
							this.Lb(
								Y,
								{ data: X, workspace: this.c },
								a.ConfigurationTarget.DEFAULT,
							),
								this.zb();
						}
					}
					ub(J) {
						const W = { data: this.m.toData(), workspace: this.c },
							X = this.m.compareAndUpdatePolicyConfiguration(J);
						this.Lb(X, W, a.ConfigurationTarget.DEFAULT);
					}
					vb(J) {
						const W = { data: this.m.toData(), workspace: this.c },
							X = this.m.applicationConfiguration.getValue(n.$TZ) ?? [],
							Y = this.m.compareAndUpdateApplicationConfiguration(J),
							ie = this.getValue(n.$TZ) ?? [],
							ne = this.O.getConfigurationProperties(),
							ee = [];
						for (const _ of Y.keys)
							if (ne[_]?.scope === p.ConfigurationScope.APPLICATION) {
								if ((ee.push(_), _ === n.$TZ)) {
									for (const te of X) ie.includes(te) || ee.push(te);
									for (const te of ie) X.includes(te) || ee.push(te);
								}
							} else ie.includes(_) && ee.push(_);
						(Y.keys = ee),
							Y.keys.includes(n.$TZ) &&
								this.m.updateLocalUserConfiguration(
									this.u.reparse({ exclude: ie }),
								),
							this.Lb(Y, W, a.ConfigurationTarget.USER);
					}
					wb(J) {
						const W = { data: this.m.toData(), workspace: this.c },
							X = this.m.compareAndUpdateLocalUserConfiguration(J);
						this.Lb(X, W, a.ConfigurationTarget.USER);
					}
					xb(J) {
						const W = { data: this.m.toData(), workspace: this.c },
							X = this.m.compareAndUpdateRemoteUserConfiguration(J);
						this.Lb(X, W, a.ConfigurationTarget.USER);
					}
					async yb(J) {
						if (this.c && this.c.configuration) {
							let W = (0, o.$iRb)(
								this.y.getFolders(),
								this.c.configuration,
								this.X.extUri,
							);
							if (this.c.initialized) {
								const {
									added: X,
									removed: Y,
									changed: ie,
								} = this.ib(this.c.folders, W);
								X.length || Y.length || ie.length
									? (W = await this.Gb(W))
									: (W = this.c.folders);
							}
							await this.Ab(W, this.y.getConfiguration(), J);
						}
					}
					zb() {
						const J = [],
							W = this.O.getConfigurationProperties(),
							X = Object.keys(W)
								.filter((le) => W[le].restricted)
								.sort((le, oe) => le.localeCompare(oe)),
							Y = (0, I.$Ib)(X, this.M.default, (le, oe) =>
								le.localeCompare(oe),
							);
						J.push(...Y.added, ...Y.removed);
						const ie = (this.s?.getRestrictedSettings() || []).sort((le, oe) =>
								le.localeCompare(oe),
							),
							ne = (0, I.$Ib)(ie, this.M.application || [], (le, oe) =>
								le.localeCompare(oe),
							);
						J.push(...ne.added, ...ne.removed);
						const ee = this.u
								.getRestrictedSettings()
								.sort((le, oe) => le.localeCompare(oe)),
							_ = (0, I.$Ib)(ee, this.M.userLocal || [], (le, oe) =>
								le.localeCompare(oe),
							);
						J.push(..._.added, ..._.removed);
						const te = (this.w?.getRestrictedSettings() || []).sort((le, oe) =>
								le.localeCompare(oe),
							),
							Q = (0, I.$Ib)(te, this.M.userRemote || [], (le, oe) =>
								le.localeCompare(oe),
							);
						J.push(...Q.added, ...Q.removed);
						const Z = new w.$Gc();
						for (const le of this.c.folders) {
							const ae = (
								this.z.get(le.uri)?.getRestrictedSettings() || []
							).sort((ye, ue) => ye.localeCompare(ue));
							ae.length && Z.set(le.uri, ae);
							const pe = this.M.workspaceFolder?.get(le.uri) || [],
								$e = (0, I.$Ib)(ae, pe, (ye, ue) => ye.localeCompare(ue));
							J.push(...$e.added, ...$e.removed);
						}
						const se =
								this.getWorkbenchState() === r.WorkbenchState.WORKSPACE
									? this.y
											.getRestrictedSettings()
											.sort((le, oe) => le.localeCompare(oe))
									: this.c.folders[0]
										? Z.get(this.c.folders[0].uri) || []
										: [],
							re = (0, I.$Ib)(se, this.M.workspace || [], (le, oe) =>
								le.localeCompare(oe),
							);
						J.push(...re.added, ...re.removed),
							J.length &&
								((this.M = {
									default: X,
									application: ie.length ? ie : void 0,
									userLocal: ee.length ? ee : void 0,
									userRemote: te.length ? te : void 0,
									workspace: se.length ? se : void 0,
									workspaceFolder: Z.size ? Z : void 0,
								}),
								this.N.fire(this.restrictedSettings));
					}
					async Ab(J, W, X) {
						const Y = { data: this.m.toData(), workspace: this.c },
							ie = this.m.compareAndUpdateWorkspaceConfiguration(W),
							ne = this.ib(this.c.folders, J);
						if (ne.added.length || ne.removed.length || ne.changed.length) {
							this.c.folders = J;
							const ee = await this.Db();
							await this.Bb(ne, X),
								this.Lb(ee, Y, a.ConfigurationTarget.WORKSPACE_FOLDER),
								this.H.fire(ne);
						} else this.Lb(ie, Y, a.ConfigurationTarget.WORKSPACE);
						this.zb();
					}
					async Bb(J, W) {
						const X = [];
						this.G.fire({
							join(Y) {
								X.push(Y);
							},
							changes: J,
							fromCache: W,
						});
						try {
							await d.Promises.settled(X);
						} catch {}
					}
					async Cb(J) {
						const [W] = await this.Eb([J]),
							X = { data: this.m.toData(), workspace: this.c },
							Y = this.m.compareAndUpdateFolderConfiguration(J.uri, W);
						if (this.getWorkbenchState() === r.WorkbenchState.FOLDER) {
							const ie = this.m.compareAndUpdateWorkspaceConfiguration(W);
							this.Lb((0, u.$0o)(Y, ie), X, a.ConfigurationTarget.WORKSPACE);
						} else this.Lb(Y, X, a.ConfigurationTarget.WORKSPACE_FOLDER);
						this.zb();
					}
					async Db() {
						const J = [];
						for (const X of this.z.keys())
							this.c.folders.filter(
								(Y) => Y.uri.toString() === X.toString(),
							)[0] ||
								(this.z.get(X).dispose(),
								this.z.delete(X),
								J.push(this.m.compareAndDeleteFolderConfiguration(X)));
						const W = this.c.folders.filter((X) => !this.z.has(X.uri));
						return (
							W.length &&
								(await this.Eb(W)).forEach((Y, ie) => {
									J.push(
										this.m.compareAndUpdateFolderConfiguration(W[ie].uri, Y),
									);
								}),
							(0, u.$0o)(...J)
						);
					}
					Eb(J) {
						return Promise.all([
							...J.map((W) => {
								let X = this.z.get(W.uri);
								return (
									X ||
										((X = new b.$E3c(
											!this.n,
											W,
											n.$vZ,
											this.getWorkbenchState(),
											this.L,
											this.U,
											this.X,
											this.Y,
											this.j,
										)),
										this.D(X.onDidChange(() => this.Cb(W))),
										this.z.set(W.uri, this.D(X))),
									X.loadConfiguration()
								);
							}),
						]);
					}
					async Fb(J) {
						const W = await this.Gb(this.c.folders),
							{ removed: X } = this.ib(this.c.folders, W);
						X.length && (await this.Ab(W, this.y.getConfiguration(), J));
					}
					async Gb(J) {
						const W = [];
						for (const X of J) {
							try {
								if (!(await this.U.stat(X.uri)).isDirectory) continue;
							} catch (Y) {
								this.Y.warn(
									`Ignoring the error while validating workspace folder ${X.uri.toString()} - ${(0, v.$xj)(Y)}`,
								);
							}
							W.push(X);
						}
						return W;
					}
					async Hb(J, W, X, Y, ie) {
						if (!this.P)
							throw new Error(
								"Cannot write configuration because the configuration service is not yet ready to accept writes.",
							);
						if (X === a.ConfigurationTarget.DEFAULT)
							throw new Error("Invalid configuration target");
						if (X === a.ConfigurationTarget.MEMORY) {
							const ee = { data: this.m.toData(), workspace: this.c };
							this.m.updateValue(J, W, Y),
								this.Lb(
									{
										keys: Y?.overrideIdentifiers?.length
											? [(0, p.$Zo)(Y.overrideIdentifiers), J]
											: [J],
										overrides: Y?.overrideIdentifiers?.length
											? Y.overrideIdentifiers.map((_) => [_, [J]])
											: [],
									},
									ee,
									X,
								);
							return;
						}
						const ne = this.Mb(X, J);
						if (!ne) throw new Error("Invalid configuration target");
						if (ne === f.EditableConfigurationTarget.USER_REMOTE && !this.w)
							throw new Error("Invalid configuration target");
						if (
							Y?.overrideIdentifiers?.length &&
							Y.overrideIdentifiers.length > 1
						) {
							const ee = this.Jb(ne, Y.resource);
							if (ee) {
								const _ = Y.overrideIdentifiers.sort(),
									te = ee.overrides.find((Q) =>
										(0, I.$yb)([...Q.identifiers].sort(), _),
									);
								te && (Y.overrideIdentifiers = te.identifiers);
							}
						}
						switch (
							((this.Q = this.Q ?? this.Ib(this.P)),
							await (await this.Q).writeConfiguration(
								ne,
								{ key: J, value: W },
								{ scopes: Y, ...ie },
							),
							ne)
						) {
							case f.EditableConfigurationTarget.USER_LOCAL:
								this.s && this.isSettingAppliedForAllProfiles(J)
									? await this.lb()
									: await this.reloadLocalUserConfiguration();
								return;
							case f.EditableConfigurationTarget.USER_REMOTE:
								return this.nb().then(() => {});
							case f.EditableConfigurationTarget.WORKSPACE:
								return this.ob();
							case f.EditableConfigurationTarget.WORKSPACE_FOLDER: {
								const ee =
									Y && Y.resource ? this.c.getFolder(Y.resource) : null;
								if (ee) return this.pb(ee);
							}
						}
					}
					async Ib(J) {
						const W = (await this.W.getEnvironment())?.settingsPath ?? null;
						return J.createInstance(f.$y3c, W);
					}
					Jb(J, W) {
						switch (J) {
							case f.EditableConfigurationTarget.USER_LOCAL:
								return this.m.localUserConfiguration;
							case f.EditableConfigurationTarget.USER_REMOTE:
								return this.m.remoteUserConfiguration;
							case f.EditableConfigurationTarget.WORKSPACE:
								return this.m.workspaceConfiguration;
							case f.EditableConfigurationTarget.WORKSPACE_FOLDER:
								return W ? this.m.folderConfigurations.get(W) : void 0;
						}
					}
					getConfigurationModel(J, W) {
						switch (J) {
							case a.ConfigurationTarget.USER_LOCAL:
								return this.m.localUserConfiguration;
							case a.ConfigurationTarget.USER_REMOTE:
								return this.m.remoteUserConfiguration;
							case a.ConfigurationTarget.WORKSPACE:
								return this.m.workspaceConfiguration;
							case a.ConfigurationTarget.WORKSPACE_FOLDER:
								return W ? this.m.folderConfigurations.get(W) : void 0;
							default:
								return;
						}
					}
					Kb(J, W, X) {
						if ((0, E.$zo)(W, X.value)) return [];
						const Y = [];
						return (
							X.workspaceFolderValue !== void 0 &&
								Y.push(a.ConfigurationTarget.WORKSPACE_FOLDER),
							X.workspaceValue !== void 0 &&
								Y.push(a.ConfigurationTarget.WORKSPACE),
							X.userRemoteValue !== void 0 &&
								Y.push(a.ConfigurationTarget.USER_REMOTE),
							X.userLocalValue !== void 0 &&
								Y.push(a.ConfigurationTarget.USER_LOCAL),
							X.applicationValue !== void 0 &&
								Y.push(a.ConfigurationTarget.APPLICATION),
							W === void 0 ? Y : [Y[0] || a.ConfigurationTarget.USER]
						);
					}
					Lb(J, W, X) {
						if (J.keys.length) {
							X !== a.ConfigurationTarget.DEFAULT &&
								this.Y.debug(
									`Configuration keys changed in ${(0, a.$jj)(X)} target`,
									...J.keys,
								);
							const Y = new u.$$o(J, W, this.m, this.c, this.Y);
							(Y.source = X), this.F.fire(Y);
						}
					}
					Mb(J, W) {
						if (J === a.ConfigurationTarget.APPLICATION)
							return f.EditableConfigurationTarget.USER_LOCAL;
						if (J === a.ConfigurationTarget.USER) {
							if (this.w) {
								const X = this.O.getConfigurationProperties()[W]?.scope;
								if (
									X === p.ConfigurationScope.MACHINE ||
									X === p.ConfigurationScope.MACHINE_OVERRIDABLE ||
									this.inspect(W).userRemoteValue !== void 0
								)
									return f.EditableConfigurationTarget.USER_REMOTE;
							}
							return f.EditableConfigurationTarget.USER_LOCAL;
						}
						return J === a.ConfigurationTarget.USER_LOCAL
							? f.EditableConfigurationTarget.USER_LOCAL
							: J === a.ConfigurationTarget.USER_REMOTE
								? f.EditableConfigurationTarget.USER_REMOTE
								: J === a.ConfigurationTarget.WORKSPACE
									? f.EditableConfigurationTarget.WORKSPACE
									: J === a.ConfigurationTarget.WORKSPACE_FOLDER
										? f.EditableConfigurationTarget.WORKSPACE_FOLDER
										: null;
					}
				}
				e.$F3c = F;
				let x = class extends C.$1c {
					constructor(J, W, X, Y, ie) {
						super(),
							(this.c = J),
							(this.g = W),
							(this.h = X),
							Y.whenInstalledExtensionsRegistered().then(() => {
								this.j();
								const ne = g.$Io.as(p.$No.Configuration),
									ee = this.D(new d.$Jh(50));
								this.D(
									i.Event.any(
										ne.onDidUpdateConfiguration,
										ne.onDidSchemaChange,
										X.onDidChangeTrust,
									)(() =>
										ee.trigger(
											() => this.j(),
											ie.phase === $.LifecyclePhase.Eventually ? void 0 : 2500,
										),
									),
								);
							});
					}
					j() {
						const J = {
								properties: p.$Oo.properties,
								patternProperties: p.$Oo.patternProperties,
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							},
							W = this.g.remoteAuthority
								? {
										properties: Object.assign(
											{},
											p.$Po.properties,
											p.$So.properties,
											p.$To.properties,
										),
										patternProperties: p.$Oo.patternProperties,
										additionalProperties: !0,
										allowTrailingCommas: !0,
										allowComments: !0,
									}
								: J,
							X = {
								properties: Object.assign(
									{},
									p.$Qo.properties,
									p.$Ro.properties,
									p.$So.properties,
									p.$To.properties,
								),
								patternProperties: p.$Oo.patternProperties,
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							},
							Y = {
								properties: Object.assign(
									{},
									p.$Qo.properties,
									p.$Ro.properties,
									p.$So.properties,
									p.$To.properties,
								),
								patternProperties: p.$Oo.patternProperties,
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							},
							ie = {
								properties: Object.assign(
									{},
									this.n(p.$Ro.properties),
									this.n(p.$So.properties),
									this.n(p.$To.properties),
								),
								patternProperties: p.$Oo.patternProperties,
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							},
							ne = {
								properties: Object.keys(p.$Oo.properties).reduce(
									(te, Q) => (
										(te[Q] = Object.assign(
											{ deprecationMessage: void 0 },
											p.$Oo.properties[Q],
										)),
										te
									),
									{},
								),
								patternProperties: Object.keys(p.$Oo.patternProperties).reduce(
									(te, Q) => (
										(te[Q] = Object.assign(
											{ deprecationMessage: void 0 },
											p.$Oo.patternProperties[Q],
										)),
										te
									),
									{},
								),
								additionalProperties: !0,
								allowTrailingCommas: !0,
								allowComments: !0,
							},
							ee =
								r.WorkbenchState.WORKSPACE === this.c.getWorkbenchState()
									? {
											properties: Object.assign(
												{},
												this.n(p.$Ro.properties),
												this.n(p.$To.properties),
											),
											patternProperties: p.$Oo.patternProperties,
											additionalProperties: !0,
											allowTrailingCommas: !0,
											allowComments: !0,
										}
									: ie,
							_ = {
								type: "object",
								description: (0, L.localize)(12112, null),
								properties: Object.assign(
									{},
									this.q(p.$Ro.properties),
									this.q(p.$So.properties),
									this.q(p.$To.properties),
								),
								patternProperties: {
									[p.$Wo]: { type: "object", default: {}, $ref: p.$Uo },
								},
								additionalProperties: !1,
							};
						this.m({
							defaultSettingsSchema: ne,
							userSettingsSchema: W,
							profileSettingsSchema: X,
							machineSettingsSchema: Y,
							workspaceSettingsSchema: ie,
							folderSettingsSchema: ee,
							configDefaultsSchema: _,
						});
					}
					m(J) {
						const W = g.$Io.as(m.$Jo.JSONContribution);
						W.registerSchema(n.$yZ, J.defaultSettingsSchema),
							W.registerSchema(n.$zZ, J.userSettingsSchema),
							W.registerSchema(n.$AZ, J.profileSettingsSchema),
							W.registerSchema(n.$BZ, J.machineSettingsSchema),
							W.registerSchema(n.$CZ, J.workspaceSettingsSchema),
							W.registerSchema(n.$DZ, J.folderSettingsSchema),
							W.registerSchema(p.$Vo, J.configDefaultsSchema);
					}
					n(J) {
						if (this.h.isWorkspaceTrusted()) return J;
						const W = {};
						return (
							Object.entries(J).forEach(([X, Y]) => {
								Y.restricted || (W[X] = Y);
							}),
							W
						);
					}
					q(J) {
						const W = {};
						return (
							Object.entries(J).forEach(([X, Y]) => {
								Y.disallowConfigurationDefault || (W[X] = Y);
							}),
							W
						);
					}
				};
				x = Ne(
					[j(0, r.$Vi), j(1, l.$r8), j(2, S.$pO), j(3, T.$q2), j(4, $.$n6)],
					x,
				);
				let H = class extends C.$1c {
					constructor(J, W) {
						super(),
							J.hasCachedConfigurationDefaultsOverrides() &&
								W.whenInstalledExtensionsRegistered().then(() =>
									J.reloadConfiguration(a.ConfigurationTarget.DEFAULT),
								);
					}
				};
				H = Ne([j(0, a.$gj), j(1, T.$q2)], H);
				let q = class extends C.$1c {
					static {
						this.ID = "workbench.contrib.updateExperimentalSettingsDefaults";
					}
					constructor(J) {
						super(),
							(this.h = J),
							(this.c = new Set()),
							(this.g = g.$Io.as(p.$No.Configuration)),
							this.j(Object.keys(this.g.getConfigurationProperties())),
							this.D(
								this.g.onDidUpdateConfiguration(({ properties: W }) =>
									this.j(W),
								),
							);
					}
					async j(J) {
						const W = {},
							X = this.g.getConfigurationProperties();
						for (const Y of J) {
							const ie = X[Y];
							if (ie?.tags?.includes("experimental") && !this.c.has(Y)) {
								this.c.add(Y);
								try {
									const ne = await this.h.getTreatment(`config.${Y}`);
									!(0, k.$sg)(ne) && !(0, E.$zo)(ne, ie.default) && (W[Y] = ne);
								} catch {}
							}
						}
						Object.keys(W).length &&
							this.g.registerDefaultConfigurations([{ overrides: W }]);
					}
				};
				q = Ne([j(0, P.$h4b)], q);
				const V = g.$Io.as(y.Extensions.Workbench);
				V.registerWorkbenchContribution(x, $.LifecyclePhase.Restored),
					V.registerWorkbenchContribution(H, $.LifecyclePhase.Eventually),
					(0, y.$s6)(q.ID, q, y.WorkbenchPhase.BlockRestore),
					g.$Io
						.as(p.$No.Configuration)
						.registerConfiguration({
							...R.$v6,
							properties: {
								[n.$TZ]: {
									type: "array",
									description: (0, L.localize)(12113, null),
									default: [],
									scope: p.ConfigurationScope.APPLICATION,
									additionalProperties: !0,
									uniqueItems: !0,
								},
							},
						});
			},
		),
		