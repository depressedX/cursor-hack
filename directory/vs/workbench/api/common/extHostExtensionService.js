import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/path.js';
import '../../../base/common/performance.js';
import '../../../base/common/resources.js';
import '../../../base/common/async.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/ternarySearchTree.js';
import '../../../base/common/uri.js';
import '../../../platform/log/common/log.js';
import './extHost.protocol.js';
import './extHostConfiguration.js';
import './extHostExtensionActivator.js';
import './extHostStorage.js';
import './extHostWorkspace.js';
import '../../services/extensions/common/extensions.js';
import '../../services/extensions/common/extensionDescriptionRegistry.js';
import '../../../base/common/errors.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../base/common/buffer.js';
import './extHostMemento.js';
import './extHostTypes.js';
import '../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHostInitDataService.js';
import './extHostStoragePaths.js';
import './extHostRpcService.js';
import '../../../platform/instantiation/common/serviceCollection.js';
import './extHostTunnelService.js';
import './extHostTerminalService.js';
import './extHostLanguageModels.js';
import '../../../base/common/event.js';
import '../../services/extensions/common/workspaceContains.js';
import './extHostSecretState.js';
import './extHostSecrets.js';
import '../../../base/common/network.js';
import './extHostLocalizationService.js';
import '../../../base/common/stopwatch.js';
import '../../../base/common/platform.js';
import './extHostManagedSockets.js';
define(
			Pe[75],
			Ne([
				1, 0, 10, 18, 91, 24, 9, 3, 90, 2, 14, 6, 56, 536, 193, 63, 29, 295, 12,
				25, 22, 514, 11, 111, 5, 34, 146, 21, 180, 116, 62, 196, 4, 604, 192,
				516, 16, 190, 57, 13, 191,
			]),
			function (
				we,
				t,
				e,
				r,
				S,
				N,
				P,
				I,
				l,
				n,
				p,
				y,
				d,
				k,
				g,
				c,
				h,
				$,
				T,
				a,
				u,
				s,
				f,
				o,
				w,
				m,
				E,
				R,
				C,
				O,
				A,
				J,
				L,
				b,
				F,
				D,
				M,
				z,
				Q,
				H,
				B,
			) {
				"use strict";
				var U;
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$8hd = t.$7hd = t.$6hd = t.$5hd = t.$4hd = void 0),
					(e = tt(e)),
					(r = tt(r)),
					(S = tt(S)),
					(T = tt(T)),
					(t.$4hd = (0, w.$Mi)("IHostUtils"));
				let Z = (U = class extends I.$1c {
					constructor(ke, ge, ee, me, ne, de, Le, Ce, je, We, pe, Re, lt) {
						super(),
							(this.Y = Re),
							(this.Z = lt),
							(this.a = this.D(new L.$re())),
							(this.onDidChangeRemoteConnectionData = this.a.event),
							(this.R = new Map()),
							(this.W = !1),
							(this.ib = !1),
							(this.c = ge),
							(this.g = ee),
							(this.f = Le),
							(this.j = me),
							(this.m = ne),
							(this.q = de),
							(this.s = je),
							(this.t = We),
							(this.u = pe),
							(this.w = this.g.getProxy(y.$lbb.MainThreadWorkspace)),
							(this.y = this.g.getProxy(y.$lbb.MainThreadTelemetry)),
							(this.z = this.g.getProxy(y.$lbb.MainThreadExtensionService)),
							(this.C = new P.$Lh()),
							(this.F = new P.$Lh()),
							(this.G = new P.$Lh()),
							(this.H = new P.$Lh()),
							(this.I = new _(this.f.extensions.activationEvents)),
							(this.L = new $.$I4c(this.I, this.f.extensions.allExtensions));
						const Ye = new a.$Hn(this.f.extensions.myExtensions);
						(this.J = new $.$I4c(this.I, Se(this.L, Ye))),
							H.$w &&
								(this.q.info(
									`Creating extension host with the following global extensions: ${fe(this.L)}`,
								),
								this.q.info(
									`Creating extension host with the following local extensions: ${fe(this.J)}`,
								)),
							(this.M = new g.$Mhd(this.g, this.q)),
							(this.N = new F.$Whd(this.g)),
							(this.O = Ce),
							(this.h = this.B.add(
								ke.createChild(new C.$Ki([g.$Nhd, this.M], [F.$Xhd, this.N])),
							)),
							(this.P = this.D(
								new k.$Lhd(
									this.J,
									this.L,
									{
										onExtensionActivationError: (Ze, Ge, se) => {
											this.z.$onExtensionActivationError(Ze, T.$6(Ge), se);
										},
										actualActivateExtension: async (Ze, Ge) => {
											if ($.$I4c.isHostExtension(Ze, this.J, this.L))
												return (
													await this.z.$activateExtension(Ze, Ge), new k.$Khd()
												);
											const se = this.J.getExtensionDescription(Ze);
											return this.fb(se, Ge);
										},
									},
									this.q,
								),
							)),
							(this.Q = null),
							(this.S = Object.create(null)),
							(this.U = !1),
							(this.X = this.f.remote.connectionData);
					}
					getRemoteConnectionData() {
						return this.X;
					}
					async initialize() {
						try {
							await this.wb(),
								this.C.open(),
								await this.j.waitForInitializeCall(),
								S.mark("code/extHost/ready"),
								this.F.open(),
								this.f.autoStart && this.ub();
						} catch (ke) {
							T.$4(ke);
						}
					}
					async $() {
						this.O.onWillDeactivateAll();
						let ke = [];
						try {
							ke = this.J.getAllExtensionDescriptions()
								.map((ne) => ne.identifier)
								.filter((ne) => this.isActivated(ne))
								.map((ne) => this.eb(ne));
						} catch {}
						await Promise.all(ke);
					}
					terminate(ke, ge = 0) {
						if (this.W) return;
						(this.W = !0),
							this.q.info(`Extension host terminating: ${ke}`),
							this.q.flush(),
							this.t.dispose(),
							this.P.dispose(),
							T.setUnexpectedErrorHandler((me) => {
								this.q.error(me);
							}),
							this.g.dispose();
						const ee = this.$();
						Promise.race([(0, P.$Nh)(5e3), ee]).finally(() => {
							this.c.pid
								? this.q.info(
										`Extension host with pid ${this.c.pid} exiting with code ${ge}`,
									)
								: this.q.info(`Extension host exiting with code ${ge}`),
								this.q.flush(),
								this.q.dispose(),
								this.c.exit(ge);
						});
					}
					isActivated(ke) {
						return this.G.isOpen() ? this.P.isActivated(ke) : !1;
					}
					async getExtension(ke) {
						const ge = await this.z.$getExtension(ke);
						return (
							ge && {
								...ge,
								identifier: new a.$Gn(ge.identifier.value),
								extensionLocation: n.URI.revive(ge.extensionLocation),
							}
						);
					}
					ab(ke, ge) {
						return this.P.activateByEvent(ke, ge);
					}
					bb(ke, ge) {
						return this.P.activateById(ke, ge);
					}
					activateByIdWithErrors(ke, ge) {
						return this.bb(ke, ge).then(() => {
							const ee = this.P.getActivatedExtension(ke);
							if (ee.activationFailed)
								return Promise.reject(ee.activationFailedError);
						});
					}
					getExtensionRegistry() {
						return this.G.wait().then((ke) => this.J);
					}
					getExtensionExports(ke) {
						if (this.G.isOpen())
							return this.P.getActivatedExtension(ke).exports;
						try {
							return this.P.getActivatedExtension(ke).exports;
						} catch {
							return null;
						}
					}
					async cb(ke) {
						if (ke.scheme === M.Schemas.file && this.c.fsRealpath) {
							const ge = ke.fsPath;
							this.R.has(ge) || this.R.set(ge, this.c.fsRealpath(ge));
							const ee = await this.R.get(ge);
							return n.URI.file(ee);
						}
						return ke;
					}
					async getExtensionPathIndex() {
						return (
							this.Q ||
								(this.Q = this.db(this.J.getAllExtensionDescriptions()).then(
									(ke) => new he(ke),
								)),
							this.Q
						);
					}
					async db(ke) {
						const ge = l.$Si.forUris((ee) => N.$eh.ignorePathCasing(ee));
						return (
							await Promise.all(
								ke.map(async (ee) => {
									if (this.xb(ee)) {
										const me = await this.cb(ee.extensionLocation);
										ge.set(me, ee);
									}
								}),
							),
							ge
						);
					}
					eb(ke) {
						let ge = Promise.resolve(void 0);
						if (!this.G.isOpen() || !this.P.isActivated(ke)) return ge;
						const ee = this.P.getActivatedExtension(ke);
						if (!ee) return ge;
						try {
							typeof ee.module.deactivate == "function" &&
								(ge = Promise.resolve(ee.module.deactivate()).then(
									void 0,
									(me) => (this.q.error(me), Promise.resolve(void 0)),
								));
						} catch (me) {
							this.q.error(
								`An error occurred when deactivating the extension '${ke.value}':`,
							),
								this.q.error(me);
						}
						try {
							ee.disposable.dispose();
						} catch (me) {
							this.q.error(
								`An error occurred when disposing the subscriptions for extension '${ke.value}':`,
							),
								this.q.error(me);
						}
						return ge;
					}
					async fb(ke, ge) {
						return (
							this.f.remote.isRemote
								? this.z.$onWillActivateExtension(ke.identifier)
								: await this.z.$onWillActivateExtension(ke.identifier),
							this.hb(ke, ge).then(
								(ee) => {
									const me = ee.activationTimes;
									return (
										this.z.$onDidActivateExtension(
											ke.identifier,
											me.codeLoadingTime,
											me.activateCallTime,
											me.activateResolvedTime,
											ge,
										),
										this.gb(ke, ge, "success", me),
										ee
									);
								},
								(ee) => {
									throw (this.gb(ke, ge, "failure"), ee);
								},
							)
						);
					}
					gb(ke, ge, ee, me) {
						const ne = G(ke, ge);
						this.y.$publicLog2("extensionActivationTimes", {
							...ne,
							...(me || {}),
							outcome: ee,
						});
					}
					hb(ke, ge) {
						const ee = G(ke, ge);
						this.y.$publicLog2("activatePlugin", ee);
						const me = this.xb(ke);
						if (!me) return Promise.resolve(new k.$Jhd(k.$Ghd.NONE));
						this.q.info(
							`ExtensionService#_doActivateExtension ${ke.identifier.value}, startup: ${ge.startup}, activationEvent: '${ge.activationEvent}'${ke.identifier.value !== ge.extensionId.value ? `, root cause: ${ge.extensionId.value}` : ""}`,
						),
							this.q.flush();
						const ne = new I.$Zc(),
							de = new k.$Hhd(ge.startup);
						return Promise.all([
							this.yb(ke, (0, N.$nh)(ke.extensionLocation, me), de),
							this.jb(ke, ne),
						])
							.then(
								(Le) => (
									S.mark(
										`code/extHost/willActivateExtension/${ke.identifier.value}`,
									),
									U.kb(this.q, ke.identifier, Le[0], Le[1], ne, de)
								),
							)
							.then(
								(Le) => (
									S.mark(
										`code/extHost/didActivateExtension/${ke.identifier.value}`,
									),
									Le
								),
							);
					}
					jb(ke, ge) {
						const ee = this.Z.createLanguageModelAccessInformation(ke),
							me = ge.add(new s.$Phd(ke, this.M)),
							ne = ge.add(new s.$Ohd(ke.identifier.value, !1, this.M)),
							de = ge.add(new D.$Yhd(ke, this.N)),
							Le = ke.isUnderDevelopment
								? this.f.environment.extensionTestsLocationURI
									? f.ExtensionMode.Test
									: f.ExtensionMode.Development
								: f.ExtensionMode.Production,
							Ce = this.f.remote.isRemote
								? f.ExtensionKind.Workspace
								: f.ExtensionKind.UI;
						return (
							this.q.trace(
								`ExtensionService#loadExtensionContext ${ke.identifier.value}`,
							),
							Promise.all([me.whenReady, ne.whenReady, this.O.whenReady]).then(
								() => {
									const je = this;
									let We, pe;
									const Re = (0, h.$t2)(ke, "ipc")
										? this.f.messagePorts?.get(a.$Gn.toKey(ke.identifier))
										: void 0;
									return Object.freeze({
										globalState: me,
										workspaceState: ne,
										secrets: de,
										subscriptions: [],
										get languageModelAccessInformation() {
											return ee;
										},
										get extensionUri() {
											return ke.extensionLocation;
										},
										get extensionPath() {
											return ke.extensionLocation.fsPath;
										},
										asAbsolutePath(lt) {
											return r.$oc(ke.extensionLocation.fsPath, lt);
										},
										get storagePath() {
											return je.O.workspaceValue(ke)?.fsPath;
										},
										get globalStoragePath() {
											return je.O.globalValue(ke).fsPath;
										},
										get logPath() {
											return r.$oc(
												je.f.logsLocation.fsPath,
												ke.identifier.value,
											);
										},
										get logUri() {
											return n.URI.joinPath(
												je.f.logsLocation,
												ke.identifier.value,
											);
										},
										get storageUri() {
											return je.O.workspaceValue(ke);
										},
										get globalStorageUri() {
											return je.O.globalValue(ke);
										},
										get extensionMode() {
											return Le;
										},
										get extension() {
											return (
												We === void 0 &&
													(We = new ae(je, ke.identifier, ke, Ce, !1)),
												We
											);
										},
										get extensionRuntime() {
											return (
												(0, h.$u2)(ke, "extensionRuntime"), je.extensionRuntime
											);
										},
										get environmentVariableCollection() {
											return je.t.getEnvironmentVariableCollection(ke);
										},
										get messagePassingProtocol() {
											if (!pe) {
												if (!Re) return;
												const lt = L.Event.buffer(
													L.Event.fromDOMEventEmitter(
														Re,
														"message",
														(Ye) => Ye.data,
													),
												);
												Re.start(),
													(pe = {
														onDidReceiveMessage: lt,
														postMessage: Re.postMessage.bind(Re),
													});
											}
											return pe;
										},
										get isDevelopment() {
											return je.ib;
										},
									});
								},
							)
						);
					}
					static kb(ke, ge, ee, me, ne, de) {
						return (
							(ee = ee || { activate: void 0, deactivate: void 0 }),
							this.lb(ke, ge, ee, me, de).then(
								(Le) =>
									new k.$Ihd(
										!1,
										null,
										de.build(),
										ee,
										Le,
										(0, I.$Yc)(() => {
											ne.dispose(), (0, I.$Vc)(me.subscriptions);
										}),
									),
							)
						);
					}
					static lb(ke, ge, ee, me, ne) {
						if (typeof ee.activate == "function")
							try {
								ne.activateCallStart(),
									ke.trace(
										`ExtensionService#_callActivateOptional ${ge.value}`,
									);
								const de = typeof global == "object" ? global : self,
									Le = ee.activate.apply(de, [me]);
								return (
									ne.activateCallStop(),
									ne.activateResolveStart(),
									Promise.resolve(Le).then(
										(Ce) => (ne.activateResolveStop(), Ce),
									)
								);
							} catch (de) {
								return Promise.reject(de);
							}
						else return Promise.resolve(ee);
					}
					mb(ke, ge) {
						this.bb(ke.identifier, {
							startup: !1,
							extensionId: ke.identifier,
							activationEvent: ge,
						}).then(void 0, (ee) => {
							this.q.error(ee);
						});
					}
					nb(ke, ge = 0) {
						const me = Date.now();
						(0, H.$E)(() => {
							for (let ne = ge; ne < ke.length; ne += 1) {
								const de = ke[ne];
								for (const Le of de.activationEvents ?? [])
									if (Le === "onStartupFinished")
										if (Date.now() - me > 50) {
											this.nb(ke, ne);
											break;
										} else this.mb(de, Le);
							}
						});
					}
					ob() {
						this.z.$setPerformanceMarks(S.getMarks()),
							this.m.getConfigProvider().then((ke) => {
								const ge = ke
										.getConfiguration("extensions.experimental")
										.get("deferredStartupFinishedActivation"),
									ee = this.J.getAllExtensionDescriptions();
								if (ge) this.nb(ee);
								else
									for (const me of ee)
										if (me.activationEvents)
											for (const ne of me.activationEvents)
												ne === "onStartupFinished" && this.mb(me, ne);
							});
					}
					pb() {
						const ke = this.ab("*", !0).then(void 0, (de) => {
							this.q.error(de);
						});
						this.D(this.j.onDidChangeWorkspace((de) => this.qb(de.added)));
						const ge = this.j.workspace ? this.j.workspace.folders : [],
							ee = this.qb(ge),
							me = this.sb(),
							ne = Promise.all([me, ke, ee]).then(() => {});
						return (
							Promise.race([ne, (0, P.$Nh)(1e4)]).then(() => {
								this.ob();
							}),
							ne
						);
					}
					qb(ke) {
						return ke.length === 0
							? Promise.resolve(void 0)
							: Promise.all(
									this.J.getAllExtensionDescriptions().map((ge) =>
										this.rb(ke, ge),
									),
								).then(() => {});
					}
					async rb(ke, ge) {
						if (this.isActivated(ge.identifier)) return;
						const ee = !this.f.remote.isRemote && !!this.f.remote.authority,
							me = {
								logService: this.q,
								folders: ke.map((de) => de.uri),
								forceUsingSearch: ee || !this.c.fsExists,
								exists: (de) => this.c.fsExists(de.fsPath),
								checkExists: (de, Le, Ce) => this.w.$checkExists(de, Le, Ce),
							},
							ne = await (0, b.$6oc)(me, ge);
						if (ne)
							return this.bb(ge.identifier, {
								startup: !0,
								extensionId: ge.identifier,
								activationEvent: ne.activationEvent,
							}).then(void 0, (de) => this.q.error(de));
					}
					async sb() {
						if (this.f.remote.authority)
							return this.ab(
								`onResolveRemoteAuthority:${this.f.remote.authority}`,
								!1,
							);
					}
					async $extensionTestsExecute() {
						await this.H.wait();
						try {
							return await this.tb();
						} catch (ke) {
							throw (console.error(ke), ke);
						}
					}
					async tb() {
						const {
							extensionDevelopmentLocationURI: ke,
							extensionTestsLocationURI: ge,
						} = this.f.environment;
						if (!ke || !ge) throw new Error(e.localize(2708, null));
						const ee = await this.yb(null, ge, new k.$Hhd(!1));
						if (!ee || typeof ee.run != "function")
							throw new Error(e.localize(2709, null, ge.toString()));
						return new Promise((me, ne) => {
							const de = (je, We) => {
									je
										? (H.$w &&
												this.q.error("Test runner called back with error", je),
											ne(je))
										: (H.$w &&
												(We
													? this.q.info(
															`Test runner called back with ${We} failures.`,
														)
													: this.q.info(
															"Test runner called back with successful outcome.",
														)),
											me(typeof We == "number" && We > 0 ? 1 : 0));
								},
								Le = (0, N.$bh)(ge),
								Ce = ee.run(Le, de);
							Ce &&
								Ce.then &&
								Ce.then(() => {
									H.$w && this.q.info("Test runner finished successfully."),
										me(0);
								}).catch((je) => {
									H.$w && this.q.error("Test runner finished with error", je),
										ne(je instanceof Error && je.stack ? je.stack : String(je));
								});
						});
					}
					ub() {
						if (this.U) throw new Error("Extension host is already started!");
						return (
							(this.U = !0),
							this.F.wait()
								.then(() => this.G.open())
								.then(() =>
									Promise.race([
										this.P.waitForActivatingExtensions(),
										(0, P.$Nh)(1e3),
									]),
								)
								.then(() => this.pb())
								.then(() => {
									this.H.open(), this.q.info("Eager extensions activated");
								})
						);
					}
					registerRemoteAuthorityResolver(ke, ge) {
						return (
							(this.S[ke] = ge),
							(0, I.$Yc)(() => {
								delete this.S[ke];
							})
						);
					}
					async getRemoteExecServer(ke) {
						const { resolver: ge } = await this.vb(ke);
						return ge?.resolveExecServer?.(ke, { resolveAttempt: 0 });
					}
					async vb(ke) {
						const ge = ke.indexOf("+");
						if (ge === -1)
							throw new f.$vbb(
								"Not an authority that can be resolved!",
								o.RemoteAuthorityResolverErrorCode.InvalidAuthority,
							);
						const ee = ke.substr(0, ge);
						return (
							await this.C.wait(),
							await this.ab(`onResolveRemoteAuthority:${ee}`, !1),
							{ authorityPrefix: ee, resolver: this.S[ee] }
						);
					}
					async $resolveAuthority(ke, ge) {
						const ee = Q.$le.create(!1),
							me = () =>
								`[resolveAuthority(${(0, o.$7l)(ke)},${ge})][${ee.elapsed()}ms] `,
							ne = (re) => this.q.info(`${me()}${re}`),
							de = (re) => this.q.warn(`${me()}${re}`),
							Le = (re, x = void 0) => this.q.error(`${me()}${re}`, x),
							Ce = (re) => {
								if (re instanceof f.$vbb)
									return {
										type: "error",
										error: {
											code: re._code,
											message: re._message,
											detail: re._detail,
										},
									};
								throw re;
							},
							je = async (re) => {
								ne(`activating resolver for ${re}...`);
								const { resolver: x, authorityPrefix: V } = await this.vb(re);
								if (!x)
									throw (
										(Le(`no resolver for ${V}`),
										new f.$vbb(
											`No remote extension installed to resolve ${V}.`,
											o.RemoteAuthorityResolverErrorCode.NoResolverFound,
										))
									);
								return { resolver: x, authorityPrefix: V, remoteAuthority: re };
							},
							We = ke.split(/@|%40/g).reverse();
						ne(`activating remote resolvers ${We.join(" -> ")}`);
						let pe;
						try {
							pe = await Promise.all(We.map(je)).catch(async (re) => {
								if (
									!(re instanceof f.$vbb) ||
									re._code !==
										o.RemoteAuthorityResolverErrorCode.InvalidAuthority
								)
									throw re;
								return (
									de(`resolving nested authorities failed: ${re.message}`),
									[await je(ke)]
								);
							});
						} catch (re) {
							return Ce(re);
						}
						const Re = new P.$Xh();
						Re.cancelAndSet(() => ne("waiting..."), 1e3);
						let lt, Ye;
						for (const [
							re,
							{ authorityPrefix: x, resolver: V, remoteAuthority: te },
						] of pe.entries())
							try {
								if (re === pe.length - 1)
									ne("invoking final resolve()..."),
										S.mark(`code/extHost/willResolveAuthority/${x}`),
										(lt = await V.resolve(te, {
											resolveAttempt: ge,
											execServer: Ye,
										})),
										S.mark(`code/extHost/didResolveAuthorityOK/${x}`),
										ne("setting tunnel factory..."),
										this.D(
											await this.s.setTunnelFactory(
												V,
												f.$ubb.isManagedResolvedAuthority(lt) ? lt : void 0,
											),
										);
								else {
									if (
										(ne(`invoking resolveExecServer() for ${te}`),
										S.mark(`code/extHost/willResolveExecServer/${x}`),
										(Ye = await V.resolveExecServer?.(te, {
											resolveAttempt: ge,
											execServer: Ye,
										})),
										!Ye)
									)
										throw new f.$vbb(
											`Exec server was not available for ${te}`,
											o.RemoteAuthorityResolverErrorCode.NoResolverFound,
										);
									S.mark(`code/extHost/didResolveExecServerOK/${x}`);
								}
							} catch (Me) {
								return (
									S.mark(`code/extHost/didResolveAuthorityError/${x}`),
									Le("returned an error", Me),
									Re.dispose(),
									Ce(Me)
								);
							}
						Re.dispose();
						const Ze = {
								environmentTunnels: lt.environmentTunnels,
								features: lt.tunnelFeatures
									? {
											elevation: lt.tunnelFeatures.elevation,
											privacyOptions: lt.tunnelFeatures.privacyOptions,
											protocol:
												lt.tunnelFeatures.protocol === void 0
													? !0
													: lt.tunnelFeatures.protocol,
										}
									: void 0,
							},
							Ge = {
								extensionHostEnv: lt.extensionHostEnv,
								isTrusted: lt.isTrusted,
								authenticationSession:
									lt.authenticationSessionForInitializingExtensions
										? {
												id: lt.authenticationSessionForInitializingExtensions
													.id,
												providerId:
													lt.authenticationSessionForInitializingExtensions
														.providerId,
											}
										: void 0,
							};
						ne(
							`returned ${f.$ubb.isManagedResolvedAuthority(lt) ? "managed authority" : `${lt.host}:${lt.port}`}`,
						);
						let se;
						if (f.$ubb.isManagedResolvedAuthority(lt)) {
							const re = ge;
							this.Y.setFactory(re, lt.makeConnection),
								(se = {
									authority: ke,
									connectTo: new o.$4l(re),
									connectionToken: lt.connectionToken,
								});
						} else
							se = {
								authority: ke,
								connectTo: new o.$5l(lt.host, lt.port),
								connectionToken: lt.connectionToken,
							};
						return {
							type: "ok",
							value: { authority: se, options: Ge, tunnelInformation: Ze },
						};
					}
					async $getCanonicalURI(ke, ge) {
						this.q.info(
							`$getCanonicalURI invoked for authority (${(0, o.$7l)(ke)})`,
						);
						const { resolver: ee } = await this.vb(ke);
						if (!ee) return null;
						const me = n.URI.revive(ge);
						if (typeof ee.getCanonicalURI > "u") return me;
						const ne = await (0, P.$Eh)(() => ee.getCanonicalURI(me));
						return ne || me;
					}
					async $startExtensionHost(ke) {
						ke.toAdd.forEach(
							(de) =>
								(de.extensionLocation = n.URI.revive(de.extensionLocation)),
						);
						const { globalRegistry: ge, myExtensions: ee } = W(
								this.I,
								this.L,
								this.J,
								ke,
							),
							me = await this.db(ee);
						return (
							(await this.getExtensionPathIndex()).setSearchTree(me),
							this.L.set(ge.getAllExtensionDescriptions()),
							this.J.set(ee),
							H.$w &&
								(this.q.info(
									`$startExtensionHost: global extensions: ${fe(this.L)}`,
								),
								this.q.info(
									`$startExtensionHost: local extensions: ${fe(this.J)}`,
								)),
							this.ub()
						);
					}
					$activateByEvent(ke, ge) {
						return ge === h.ActivationKind.Immediate
							? this.C.wait().then((ee) => this.ab(ke, !1))
							: this.G.wait().then((ee) => this.ab(ke, !1));
					}
					async $activate(ke, ge) {
						return (
							await this.G.wait(),
							this.J.getExtensionDescription(ke)
								? (await this.bb(ke, ge), !0)
								: !1
						);
					}
					async $deltaExtensions(ke) {
						ke.toAdd.forEach(
							(de) =>
								(de.extensionLocation = n.URI.revive(de.extensionLocation)),
						);
						const { globalRegistry: ge, myExtensions: ee } = W(
								this.I,
								this.L,
								this.J,
								ke,
							),
							me = await this.db(ee);
						return (
							(await this.getExtensionPathIndex()).setSearchTree(me),
							this.L.set(ge.getAllExtensionDescriptions()),
							this.J.set(ee),
							H.$w &&
								(this.q.info(
									`$deltaExtensions: global extensions: ${fe(this.L)}`,
								),
								this.q.info(
									`$deltaExtensions: local extensions: ${fe(this.J)}`,
								)),
							Promise.resolve(void 0)
						);
					}
					async $test_latency(ke) {
						return ke;
					}
					async $test_up(ke) {
						return ke.byteLength;
					}
					async $test_down(ke) {
						const ge = u.$Te.alloc(ke),
							ee = Math.random() % 256;
						for (let me = 0; me < ke; me++) ge.writeUInt8(ee, me);
						return ge;
					}
					async $updateRemoteConnectionData(ke) {
						(this.X = ke), this.a.fire();
					}
				});
				(t.$5hd = Z),
					(t.$5hd =
						Z =
						U =
							wt(
								[
									rt(0, w.$Li),
									rt(1, t.$4hd),
									rt(2, R.$08),
									rt(3, c.$m9),
									rt(4, d.$phd),
									rt(5, p.$ik),
									rt(6, m.$98),
									rt(7, E.$vhd),
									rt(8, O.$3pc),
									rt(9, A.$Qhd),
									rt(10, z.$1hd),
									rt(11, B.$2hd),
									rt(12, J.$Uhd),
								],
								Z,
							));
				function W(oe, ke, ge, ee) {
					oe.addActivationEvents(ee.addActivationEvents);
					const me = new $.$I4c(oe, ke.getAllExtensionDescriptions());
					me.deltaExtensions(ee.toAdd, ee.toRemove);
					const ne = new a.$Hn(
						ge.getAllExtensionDescriptions().map((Le) => Le.identifier),
					);
					for (const Le of ee.myToRemove) ne.delete(Le);
					for (const Le of ee.myToAdd) ne.add(Le);
					const de = Se(me, ne);
					return { globalRegistry: me, myExtensions: de };
				}
				function G(oe, ke) {
					return {
						id: oe.identifier.value,
						name: oe.name,
						extensionVersion: oe.version,
						publisherDisplayName: oe.publisher,
						activationEvents: oe.activationEvents
							? oe.activationEvents.join(",")
							: null,
						isBuiltin: oe.isBuiltin,
						reason: ke.activationEvent,
						reasonId: ke.extensionId.value,
					};
				}
				function fe(oe) {
					return oe
						.getAllExtensionDescriptions()
						.map((ke) => ke.identifier.value)
						.join(",");
				}
				t.$6hd = (0, w.$Mi)("IExtHostExtensionService");
				class ae {
					#e;
					#t;
					#n;
					constructor(ke, ge, ee, me, ne) {
						(this.#e = ke),
							(this.#t = ge),
							(this.#n = ee.identifier),
							(this.id = ee.identifier.value),
							(this.extensionUri = ee.extensionLocation),
							(this.extensionPath = r.$mc((0, N.$bh)(ee.extensionLocation))),
							(this.packageJSON = ee),
							(this.extensionKind = me),
							(this.isFromDifferentExtensionHost = ne);
					}
					get isActive() {
						return this.#e.isActivated(this.#n);
					}
					get exports() {
						if (
							!(
								this.packageJSON.api === "none" ||
								this.isFromDifferentExtensionHost
							)
						)
							return this.#e.getExtensionExports(this.#n);
					}
					async activate() {
						if (this.isFromDifferentExtensionHost)
							throw new Error("Cannot activate foreign extension");
						return (
							await this.#e.activateByIdWithErrors(this.#n, {
								startup: !1,
								extensionId: this.#t,
								activationEvent: "api",
							}),
							this.exports
						);
					}
				}
				t.$7hd = ae;
				function Se(oe, ke) {
					return oe
						.getAllExtensionDescriptions()
						.filter((ge) => ke.has(ge.identifier));
				}
				class he {
					constructor(ke) {
						this.a = ke;
					}
					setSearchTree(ke) {
						this.a = ke;
					}
					findSubstr(ke) {
						return this.a.findSubstr(ke);
					}
					forEach(ke) {
						return this.a.forEach(ke);
					}
				}
				t.$8hd = he;
				class _ {
					constructor(ke) {
						(this.a = new a.$In()), this.addActivationEvents(ke);
					}
					readActivationEvents(ke) {
						return this.a.get(ke.identifier) ?? [];
					}
					addActivationEvents(ke) {
						for (const ge of Object.keys(ke)) this.a.set(ge, ke[ge]);
					}
				}
			},
		),
		