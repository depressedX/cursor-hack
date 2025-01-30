import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/async.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/configuration/common/configurationModels.js';
import '../common/configurationModels.js';
import '../common/configuration.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/resources.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/types.js';
import '../../../../platform/configuration/common/configurations.js';
define(
			de[3251],
			he([
				1, 0, 6, 29, 3, 15, 22, 950, 1794, 261, 25, 81, 82, 136, 19, 30, 28,
				1634,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*errors*/,
 w /*lifecycle*/,
 E /*async*/,
 C /*files*/,
 d /*configurationModels*/,
 m /*configurationModels*/,
 r /*configuration*/,
 u /*workspace*/,
 a /*configurationRegistry*/,
 h /*objects*/,
 c /*hash*/,
 n /*resources*/,
 g /*platform*/,
 p /*types*/,
 o /*configurations*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$E3c = e.$D3c = e.$C3c = e.$B3c = e.$A3c = e.$z3c = void 0),
					(i = mt(i));
				class f extends o.$_o {
					static {
						this.DEFAULT_OVERRIDES_CACHE_EXISTS_KEY =
							"DefaultOverridesCacheExists";
					}
					constructor(D, M, N) {
						super(N),
							(this.s = D),
							(this.m = g.$Io.as(a.$No.Configuration)),
							(this.n = {}),
							(this.q = {
								type: "defaults",
								key: "configurationDefaultsOverrides",
							}),
							(this.r = !1),
							M.options?.configurationDefaults &&
								this.m.registerDefaultConfigurations([
									{ overrides: M.options.configurationDefaults },
								]);
					}
					g() {
						return this.n;
					}
					async initialize() {
						return await this.w(), super.initialize();
					}
					reload() {
						return (this.r = !0), (this.n = {}), this.z(), super.reload();
					}
					hasCachedConfigurationDefaultsOverrides() {
						return !(0, p.$yg)(this.n);
					}
					w() {
						return (
							this.u ||
								(this.u = (async () => {
									try {
										if (
											localStorage.getItem(f.DEFAULT_OVERRIDES_CACHE_EXISTS_KEY)
										) {
											const D = await this.s.read(this.q);
											D && (this.n = JSON.parse(D));
										}
									} catch {}
									this.n = (0, p.$ng)(this.n) ? this.n : {};
								})()),
							this.u
						);
					}
					f(D, M) {
						super.f(D, M), M && this.z();
					}
					async z() {
						if (!this.r) return;
						const D = {},
							M = this.m.getConfigurationDefaultsOverrides();
						for (const [N, A] of M)
							!a.$Xo.test(N) && A.value !== void 0 && (D[N] = A.value);
						try {
							Object.keys(D).length
								? (localStorage.setItem(
										f.DEFAULT_OVERRIDES_CACHE_EXISTS_KEY,
										"yes",
									),
									await this.s.write(this.q, JSON.stringify(D)))
								: (localStorage.removeItem(
										f.DEFAULT_OVERRIDES_CACHE_EXISTS_KEY,
									),
									await this.s.remove(this.q));
						} catch {}
					}
				}
				e.$z3c = f;
				class b extends d.$8o {
					constructor(D, M, N, A) {
						super(
							D.defaultProfile.settingsResource,
							{ scopes: [a.ConfigurationScope.APPLICATION] },
							N.extUri,
							M,
							A,
						),
							(this.j = this.D(new t.$re())),
							(this.onDidChangeConfiguration = this.j.event),
							this.D(this.onDidChange(() => this.m.schedule())),
							(this.m = this.D(
								new E.$Yh(
									() => this.loadConfiguration().then((R) => this.j.fire(R)),
									50,
								),
							));
					}
					async initialize() {
						return this.loadConfiguration();
					}
					async loadConfiguration() {
						const D = await super.loadConfiguration(),
							M = D.getValue(r.$TZ),
							N = Array.isArray(M) ? M : [];
						return this.f.include || N.length
							? this.reparse({ ...this.f, include: N })
							: D;
					}
				}
				e.$A3c = b;
				class s extends w.$1c {
					get hasTasksLoaded() {
						return this.b.value instanceof l;
					}
					constructor(D, M, N, A, R, O) {
						super(),
							(this.g = D),
							(this.h = M),
							(this.j = N),
							(this.m = A),
							(this.n = R),
							(this.q = O),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeConfiguration = this.a.event),
							(this.b = this.D(new w.$2c())),
							(this.c = this.D(new w.$2c())),
							(this.b.value = new d.$8o(D, this.j, R.extUri, this.m, O)),
							(this.c.value = this.b.value.onDidChange(() =>
								this.f.schedule(),
							)),
							(this.f = this.D(
								new E.$Yh(
									() =>
										this.b.value
											.loadConfiguration()
											.then((B) => this.a.fire(B)),
									50,
								),
							));
					}
					async reset(D, M, N) {
						return (this.g = D), (this.h = M), (this.j = N), this.r();
					}
					async r(D) {
						const M = this.n.extUri.dirname(this.g),
							N = this.h ? [[r.$NZ, this.h]] : [],
							A = new l(
								M.toString(),
								this.g,
								N,
								this.j,
								this.m,
								this.n,
								this.q,
							),
							R = await A.loadConfiguration(D);
						return (
							(this.b.value = A),
							this.c.value &&
								(this.c.value = this.b.value.onDidChange(() =>
									this.f.schedule(),
								)),
							R
						);
					}
					async initialize() {
						return this.b.value.loadConfiguration();
					}
					async reload(D) {
						return this.hasTasksLoaded
							? this.b.value.loadConfiguration()
							: this.r(D);
					}
					reparse(D) {
						return (this.j = { ...this.j, ...D }), this.b.value.reparse(this.j);
					}
					getRestrictedSettings() {
						return this.b.value.getRestrictedSettings();
					}
				}
				e.$B3c = s;
				class l extends w.$1c {
					constructor(D, M, N, A, R, O, B) {
						super(),
							(this.j = M),
							(this.m = N),
							(this.n = R),
							(this.q = O),
							(this.r = B),
							(this.h = this.D(new t.$re())),
							(this.onDidChange = this.h.event),
							(this.a = [this.j, ...this.m.map(([, U]) => U)]),
							this.D(
								(0, w.$Xc)(
									...this.a.map((U) =>
										(0, w.$Xc)(
											this.n.watch(O.extUri.dirname(U)),
											this.n.watch(U),
										),
									),
								),
							),
							(this.b = new d.$7o(D, B)),
							(this.c = A),
							(this.f = []),
							(this.g = d.$6o.createEmptyModel(this.r)),
							this.D(
								t.Event.debounce(
									t.Event.any(
										t.Event.filter(this.n.onDidFilesChange, (U) => this.t(U)),
										t.Event.filter(this.n.onDidRunOperation, (U) => this.u(U)),
									),
									() => {},
									100,
								)(() => this.h.fire()),
							);
					}
					async resolveContents(D) {
						const M = async (R) =>
								Promise.all(
									R.map(async (O) => {
										try {
											return (
												await this.n.readFile(O, { atomic: !0 })
											).value.toString();
										} catch (B) {
											this.r.trace(
												`Error while resolving configuration file '${O.toString()}': ${i.$bb(B)}`,
											),
												B.fileOperationResult !==
													C.FileOperationResult.FILE_NOT_FOUND &&
													B.fileOperationResult !==
														C.FileOperationResult.FILE_NOT_DIRECTORY &&
													this.r.error(B);
										}
										return "{}";
									}),
								),
							[[N], A] = await Promise.all([
								D ? Promise.resolve([void 0]) : M([this.j]),
								M(this.m.map(([, R]) => R)),
							]);
						return [N, A.map((R, O) => [this.m[O][0], R])];
					}
					async loadConfiguration(D) {
						const [M, N] = await this.resolveContents(!!D);
						(this.f = []),
							this.b.parse("", this.c),
							M !== void 0 && this.b.parse(M, this.c);
						for (let A = 0; A < N.length; A++) {
							const R = N[A][1];
							if (R !== void 0) {
								const O = new m.$v3c(
									this.m[A][1].toString(),
									this.m[A][0],
									this.r,
								);
								O.parse(R), this.f.push(O.configurationModel);
							}
						}
						return this.s(D), this.g;
					}
					getRestrictedSettings() {
						return this.b.restrictedConfigurations;
					}
					reparse(D) {
						const M = this.b.configurationModel.contents;
						return (
							(this.c = D),
							this.b.reparse(this.c),
							(0, h.$zo)(M, this.b.configurationModel.contents) || this.s(),
							this.g
						);
					}
					s(D) {
						this.g = (D ?? this.b.configurationModel).merge(...this.f);
					}
					t(D) {
						return !!(
							this.a.some((M) => D.contains(M)) ||
							this.a.some((M) =>
								D.contains(this.q.extUri.dirname(M), C.FileChangeType.DELETED),
							)
						);
					}
					u(D) {
						return !!(
							((D.isOperation(C.FileOperation.CREATE) ||
								D.isOperation(C.FileOperation.COPY) ||
								D.isOperation(C.FileOperation.DELETE) ||
								D.isOperation(C.FileOperation.WRITE)) &&
								this.a.some((M) => this.q.extUri.isEqual(D.resource, M))) ||
							(D.isOperation(C.FileOperation.DELETE) &&
								this.a.some((M) =>
									this.q.extUri.isEqual(D.resource, this.q.extUri.dirname(M)),
								))
						);
					}
				}
				class y extends w.$1c {
					constructor(D, M, N, A, R, O) {
						super(),
							(this.f = null),
							(this.g = this.D(new t.$re())),
							(this.onDidChangeConfiguration = this.g.event),
							(this.h = this.D(new t.$re())),
							(this.onDidInitialize = this.h.event),
							(this.b = N),
							(this.c = this.a = new v(D, M, { scopes: r.$KZ }, O)),
							R.getEnvironment().then(async (B) => {
								if (B) {
									const U = this.D(
										new $(B.settingsPath, { scopes: r.$KZ }, this.b, A, O),
									);
									this.D(U.onDidChangeConfiguration((F) => this.j(F))),
										(this.f = U.initialize());
									const z = await this.f;
									this.c.dispose(), (this.c = U), this.j(z), this.h.fire(z);
								}
							});
					}
					async initialize() {
						if (this.c instanceof $) return this.c.initialize();
						let D = await this.c.initialize();
						return this.f && ((D = await this.f), (this.f = null)), D;
					}
					reload() {
						return this.c.reload();
					}
					reparse() {
						return this.c.reparse({ scopes: r.$KZ });
					}
					getRestrictedSettings() {
						return this.c.getRestrictedSettings();
					}
					j(D) {
						this.m(), this.g.fire(D);
					}
					async m() {
						if (this.c instanceof $) {
							let D;
							try {
								D = await this.c.resolveContent();
							} catch (M) {
								if (
									M.fileOperationResult !== C.FileOperationResult.FILE_NOT_FOUND
								)
									return;
							}
							await this.a.updateConfiguration(D);
						}
					}
				}
				e.$C3c = y;
				class $ extends w.$1c {
					constructor(D, M, N, A, R) {
						super(),
							(this.j = D),
							(this.m = N),
							(this.n = A),
							(this.q = R),
							(this.f = this.D(new t.$re())),
							(this.onDidChangeConfiguration = this.f.event),
							(this.g = this.D(new w.$2c())),
							(this.h = this.D(new w.$2c())),
							(this.a = new d.$7o(this.j.toString(), R)),
							(this.b = M),
							this.D(N.onDidFilesChange((O) => this.w(O))),
							this.D(N.onDidRunOperation((O) => this.y(O))),
							(this.c = this.D(
								new E.$Yh(() => this.reload().then((O) => this.f.fire(O)), 50),
							)),
							this.D(
								(0, w.$Yc)(() => {
									this.s(), this.u();
								}),
							);
					}
					r() {
						this.g.value = this.m.watch(this.j);
					}
					s() {
						this.g.value = void 0;
					}
					t() {
						const D = this.n.extUri.dirname(this.j);
						this.h.value = this.m.watch(D);
					}
					u() {
						this.h.value = void 0;
					}
					async initialize() {
						const D = await this.m.exists(this.j);
						return this.z(D), this.reload();
					}
					async resolveContent() {
						return (
							await this.m.readFile(this.j, { atomic: !0 })
						).value.toString();
					}
					async reload() {
						try {
							const D = await this.resolveContent();
							return this.a.parse(D, this.b), this.a.configurationModel;
						} catch {
							return d.$6o.createEmptyModel(this.q);
						}
					}
					reparse(D) {
						return (
							(this.b = D), this.a.reparse(this.b), this.a.configurationModel
						);
					}
					getRestrictedSettings() {
						return this.a.restrictedConfigurations;
					}
					w(D) {
						let M = D.contains(this.j, C.FileChangeType.UPDATED);
						D.contains(this.j, C.FileChangeType.ADDED)
							? ((M = !0), this.z(!0))
							: D.contains(this.j, C.FileChangeType.DELETED) &&
								((M = !0), this.z(!1)),
							M && this.c.schedule();
					}
					y(D) {
						(D.isOperation(C.FileOperation.CREATE) ||
							D.isOperation(C.FileOperation.COPY) ||
							D.isOperation(C.FileOperation.DELETE) ||
							D.isOperation(C.FileOperation.WRITE)) &&
							this.n.extUri.isEqual(D.resource, this.j) &&
							this.c.schedule();
					}
					z(D) {
						D ? (this.u(), this.r()) : (this.s(), this.t());
					}
				}
				class v extends w.$1c {
					constructor(D, M, N, A) {
						super(),
							(this.h = M),
							(this.a = this.D(new t.$re())),
							(this.onDidChange = this.a.event),
							(this.b = { type: "user", key: D }),
							(this.c = new d.$7o("CachedRemoteUserConfiguration", A)),
							(this.f = N),
							(this.g = d.$6o.createEmptyModel(A));
					}
					getConfigurationModel() {
						return this.g;
					}
					initialize() {
						return this.reload();
					}
					reparse(D) {
						return (
							(this.f = D),
							this.c.reparse(this.f),
							(this.g = this.c.configurationModel),
							this.g
						);
					}
					getRestrictedSettings() {
						return this.c.restrictedConfigurations;
					}
					async reload() {
						try {
							const D = await this.h.read(this.b),
								M = JSON.parse(D);
							M.content &&
								(this.c.parse(M.content, this.f),
								(this.g = this.c.configurationModel));
						} catch {}
						return this.g;
					}
					async updateConfiguration(D) {
						return D
							? this.h.write(this.b, JSON.stringify({ content: D }))
							: this.h.remove(this.b);
					}
				}
				class S extends w.$1c {
					get initialized() {
						return this.j;
					}
					constructor(D, M, N, A) {
						super(),
							(this.m = D),
							(this.n = M),
							(this.q = N),
							(this.r = A),
							(this.c = this.D(new w.$Zc())),
							(this.f = null),
							(this.g = !1),
							(this.h = this.D(new t.$re())),
							(this.onDidUpdateConfiguration = this.h.event),
							(this.j = !1),
							(this.n = M),
							(this.b = this.a = new T(D, A));
					}
					async initialize(D, M) {
						(this.f = D),
							(this.g = M),
							this.j ||
								(this.m.needsCaching(this.f.configPath)
									? ((this.b = this.a), this.s(this.f))
									: this.t(new I(this.n, this.q, this.r))),
							await this.reload();
					}
					async reload() {
						this.f &&
							(await this.b.load(this.f, {
								scopes: r.$LZ,
								skipRestricted: this.u(),
							}));
					}
					getFolders() {
						return this.b.getFolders();
					}
					setFolders(D, M) {
						return this.f
							? M.write(
									this.f.configPath,
									[{ path: ["folders"], value: D }],
									!0,
								).then(() => this.reload())
							: Promise.resolve();
					}
					isTransient() {
						return this.b.isTransient();
					}
					getConfiguration() {
						return this.b.getWorkspaceSettings();
					}
					updateWorkspaceTrust(D) {
						return (this.g = D), this.reparseWorkspaceSettings();
					}
					reparseWorkspaceSettings() {
						return (
							this.b.reparseWorkspaceSettings({
								scopes: r.$LZ,
								skipRestricted: this.u(),
							}),
							this.getConfiguration()
						);
					}
					getRestrictedSettings() {
						return this.b.getRestrictedSettings();
					}
					async s(D) {
						if (
							(await (0, C.$Sl)(D.configPath, this.n), !(this.b instanceof I))
						) {
							const M = this.D(new I(this.n, this.q, this.r));
							await M.load(D, { scopes: r.$LZ, skipRestricted: this.u() }),
								this.t(M),
								this.w(!1, !0);
						}
					}
					t(D) {
						this.c.clear(),
							(this.b = this.c.add(D)),
							this.c.add(this.b.onDidChange((M) => this.w(!0, !1))),
							(this.j = !0);
					}
					u() {
						return !this.g;
					}
					async w(D, M) {
						D && (await this.reload()), this.y(), this.h.fire(M);
					}
					async y() {
						if (
							this.f &&
							this.m.needsCaching(this.f.configPath) &&
							this.b instanceof I
						) {
							const D = await this.b.resolveContent(this.f);
							await this.a.updateWorkspace(this.f, D);
						}
					}
				}
				e.$D3c = S;
				class I extends w.$1c {
					constructor(D, M, N) {
						super(),
							(this.g = D),
							(this.h = N),
							(this.a = null),
							(this.f = this.D(new t.$re())),
							(this.onDidChange = this.f.event),
							(this.workspaceConfigurationModelParser = new m.$u3c("", N)),
							(this.workspaceSettings = d.$6o.createEmptyModel(N)),
							this.D(
								t.Event.any(
									t.Event.filter(
										this.g.onDidFilesChange,
										(A) => !!this.a && A.contains(this.a.configPath),
									),
									t.Event.filter(
										this.g.onDidRunOperation,
										(A) =>
											!!this.a &&
											(A.isOperation(C.FileOperation.CREATE) ||
												A.isOperation(C.FileOperation.COPY) ||
												A.isOperation(C.FileOperation.DELETE) ||
												A.isOperation(C.FileOperation.WRITE)) &&
											M.extUri.isEqual(A.resource, this.a.configPath),
									),
								)(() => this.c.schedule()),
							),
							(this.c = this.D(new E.$Yh(() => this.f.fire(), 50))),
							(this.b = this.D(this.m()));
					}
					get workspaceIdentifier() {
						return this.a;
					}
					async resolveContent(D) {
						return (
							await this.g.readFile(D.configPath, { atomic: !0 })
						).value.toString();
					}
					async load(D, M) {
						(!this.a || this.a.id !== D.id) &&
							((this.a = D),
							(this.workspaceConfigurationModelParser = new m.$u3c(
								this.a.id,
								this.h,
							)),
							(0, w.$Vc)(this.b),
							(this.b = this.D(this.m())));
						let N = "";
						try {
							N = await this.resolveContent(this.a);
						} catch (A) {
							(await this.g.exists(this.a.configPath)) && this.h.error(A);
						}
						this.workspaceConfigurationModelParser.parse(N, M), this.j();
					}
					getConfigurationModel() {
						return this.workspaceConfigurationModelParser.configurationModel;
					}
					getFolders() {
						return this.workspaceConfigurationModelParser.folders;
					}
					isTransient() {
						return this.workspaceConfigurationModelParser.transient;
					}
					getWorkspaceSettings() {
						return this.workspaceSettings;
					}
					reparseWorkspaceSettings(D) {
						return (
							this.workspaceConfigurationModelParser.reparseWorkspaceSettings(
								D,
							),
							this.j(),
							this.getWorkspaceSettings()
						);
					}
					getRestrictedSettings() {
						return this.workspaceConfigurationModelParser.getRestrictedWorkspaceSettings();
					}
					j() {
						this.workspaceSettings =
							this.workspaceConfigurationModelParser.settingsModel.merge(
								this.workspaceConfigurationModelParser.launchModel,
								this.workspaceConfigurationModelParser.tasksModel,
							);
					}
					m() {
						return this.a ? this.g.watch(this.a.configPath) : w.$1c.None;
					}
				}
				class T {
					constructor(D, M) {
						(this.a = D),
							(this.b = M),
							(this.onDidChange = t.Event.None),
							(this.workspaceConfigurationModelParser = new m.$u3c("", M)),
							(this.workspaceSettings = d.$6o.createEmptyModel(M));
					}
					async load(D, M) {
						try {
							const N = this.d(D),
								A = await this.a.read(N),
								R = JSON.parse(A);
							R.content &&
								((this.workspaceConfigurationModelParser = new m.$u3c(
									N.key,
									this.b,
								)),
								this.workspaceConfigurationModelParser.parse(R.content, M),
								this.c());
						} catch {}
					}
					get workspaceIdentifier() {
						return null;
					}
					getConfigurationModel() {
						return this.workspaceConfigurationModelParser.configurationModel;
					}
					getFolders() {
						return this.workspaceConfigurationModelParser.folders;
					}
					isTransient() {
						return this.workspaceConfigurationModelParser.transient;
					}
					getWorkspaceSettings() {
						return this.workspaceSettings;
					}
					reparseWorkspaceSettings(D) {
						return (
							this.workspaceConfigurationModelParser.reparseWorkspaceSettings(
								D,
							),
							this.c(),
							this.getWorkspaceSettings()
						);
					}
					getRestrictedSettings() {
						return this.workspaceConfigurationModelParser.getRestrictedWorkspaceSettings();
					}
					c() {
						this.workspaceSettings =
							this.workspaceConfigurationModelParser.settingsModel.merge(
								this.workspaceConfigurationModelParser.launchModel,
								this.workspaceConfigurationModelParser.tasksModel,
							);
					}
					async updateWorkspace(D, M) {
						try {
							const N = this.d(D);
							M
								? await this.a.write(N, JSON.stringify({ content: M }))
								: await this.a.remove(N);
						} catch {}
					}
					d(D) {
						return { type: "workspaces", key: D.id };
					}
				}
				class P {
					constructor(D, M, N, A, R) {
						(this.g = A),
							(this.h = R),
							(this.onDidChange = t.Event.None),
							(this.f = {
								type: "folder",
								key: (0, c.$Aj)((0, n.$nh)(D, M).toString()).toString(16),
							}),
							(this.a = new d.$7o("CachedFolderConfiguration", R)),
							(this.b = N),
							(this.c = []),
							(this.d = d.$6o.createEmptyModel(R));
					}
					async loadConfiguration() {
						try {
							const D = await this.g.read(this.f),
								{ content: M } = JSON.parse(D.toString());
							if (M)
								for (const N of Object.keys(M))
									if (N === r.$wZ) this.a.parse(M[N], this.b);
									else {
										const A = new m.$v3c(N, N, this.h);
										A.parse(M[N]), this.c.push(A.configurationModel);
									}
							this.i();
						} catch {}
						return this.d;
					}
					async updateConfiguration(D, M) {
						const N = {};
						D && (N[r.$wZ] = D),
							M.forEach(([A, R]) => {
								R && (N[A] = R);
							}),
							Object.keys(N).length
								? await this.g.write(this.f, JSON.stringify({ content: N }))
								: await this.g.remove(this.f);
					}
					getRestrictedSettings() {
						return this.a.restrictedConfigurations;
					}
					reparse(D) {
						return (this.b = D), this.a.reparse(this.b), this.i(), this.d;
					}
					i() {
						this.d = this.a.configurationModel.merge(...this.c);
					}
					getUnsupportedKeys() {
						return [];
					}
				}
				class k extends w.$1c {
					constructor(D, M, N, A, R, O, B, U, z) {
						super(),
							(this.workspaceFolder = M),
							(this.h = A),
							(this.j = R),
							(this.m = z),
							(this.a = this.D(new t.$re())),
							(this.onDidChange = this.a.event),
							(this.c = u.WorkbenchState.WORKSPACE === this.h ? r.$MZ : r.$LZ),
							(this.f = B.extUri.joinPath(M.uri, N)),
							(this.g = new P(
								M.uri,
								N,
								{ scopes: this.c, skipRestricted: this.n() },
								z,
								U,
							)),
							D && this.m.needsCaching(M.uri)
								? ((this.b = this.g),
									(0, C.$Sl)(M.uri, O).then(() => {
										(this.b = this.D(this.r(O, B, U))),
											this.D(this.b.onDidChange((F) => this.q())),
											this.q();
									}))
								: ((this.b = this.D(this.r(O, B, U))),
									this.D(this.b.onDidChange((F) => this.q())));
					}
					loadConfiguration() {
						return this.b.loadConfiguration();
					}
					updateWorkspaceTrust(D) {
						return (this.j = D), this.reparse();
					}
					reparse() {
						const D = this.b.reparse({
							scopes: this.c,
							skipRestricted: this.n(),
						});
						return this.s(), D;
					}
					getRestrictedSettings() {
						return this.b.getRestrictedSettings();
					}
					n() {
						return !this.j;
					}
					q() {
						this.s(), this.a.fire();
					}
					r(D, M, N) {
						const A = M.extUri.joinPath(this.f, `${r.$wZ}.json`),
							R = [r.$NZ, r.$OZ].map((O) => [
								O,
								M.extUri.joinPath(this.f, `${O}.json`),
							]);
						return new l(
							this.f.toString(),
							A,
							R,
							{ scopes: this.c, skipRestricted: this.n() },
							D,
							M,
							N,
						);
					}
					async s() {
						if (this.m.needsCaching(this.f) && this.b instanceof l) {
							const [D, M] = await this.b.resolveContents();
							this.g.updateConfiguration(D, M);
						}
					}
				}
				e.$E3c = k;
			},
		),
		