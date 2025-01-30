import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import './extHost.protocol.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../base/common/uri.js';
import './extHostRpcService.js';
import '../../../base/common/lifecycle.js';
import './extHostTypes.js';
import '../../../nls.js';
import '../../../base/common/errors.js';
import '../../../platform/terminal/common/environmentVariableShared.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/uuid.js';
import '../../../platform/terminal/common/terminal.js';
import '../../../platform/terminal/common/terminalDataBuffering.js';
import '../../../base/common/themables.js';
import '../../../base/common/async.js';
import './extHostTypeConverters.js';
import './extHostCommands.js';
import '../../../base/common/marshallingIds.js';
define(
			Pe[62],
			Ne([
				1, 0, 4, 6, 5, 2, 21, 3, 11, 10, 12, 505, 23, 38, 506, 507, 72, 9, 17,
				44, 55,
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
			) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Thd = t.$Shd = t.$Rhd = t.$Qhd = void 0),
					(t.$Qhd = (0, S.$Mi)("IExtHostTerminalService"));
				class s extends I.$1c {
					constructor(L, b, F, D) {
						super(),
							(this.s = L),
							(this._id = b),
							(this.u = F),
							(this.w = D),
							(this.a = !1),
							(this.m = { isInteractedWith: !1 }),
							(this.isOpen = !1),
							(this.q = this.D(new e.$re())),
							(this.onWillDispose = this.q.event),
							(this.u = Object.freeze(this.u)),
							(this.b = new Promise((z) => (this.g = z)));
						const M = this;
						this.value = {
							get name() {
								return M.w || "";
							},
							get processId() {
								return M.b;
							},
							get creationOptions() {
								return M.u;
							},
							get exitStatus() {
								return M.j;
							},
							get state() {
								return M.m;
							},
							get selection() {
								return M.n;
							},
							get shellIntegration() {
								return M.shellIntegration;
							},
							sendText(z, Q = !0) {
								M.z(), M.s.$sendText(M._id, z, Q);
							},
							show(z) {
								M.z(), M.s.$show(M._id, z);
							},
							hide() {
								M.z(), M.s.$hide(M._id);
							},
							dispose() {
								M.a || ((M.a = !0), M.s.$dispose(M._id));
							},
							get dimensions() {
								if (!(M.f === void 0 || M.h === void 0))
									return { columns: M.f, rows: M.h };
							},
						};
					}
					dispose() {
						this.q.fire(), super.dispose();
					}
					async create(L, b) {
						if (typeof this._id != "string")
							throw new Error("Terminal has already been created");
						await this.s.$createTerminal(this._id, {
							name: L.name,
							shellPath: L.shellPath ?? void 0,
							shellArgs: L.shellArgs ?? void 0,
							cwd: L.cwd ?? b?.cwd ?? void 0,
							env: L.env ?? void 0,
							icon: C(L.iconPath) ?? void 0,
							color: h.ThemeColor.isThemeColor(L.color) ? L.color.id : void 0,
							initialText: L.message ?? void 0,
							strictEnv: L.strictEnv ?? void 0,
							hideFromUser: L.hideFromUser ?? void 0,
							forceShellIntegration: b?.forceShellIntegration ?? void 0,
							isFeatureTerminal: b?.isFeatureTerminal ?? void 0,
							isExtensionOwnedTerminal: !0,
							useShellEnvironment: b?.useShellEnvironment ?? void 0,
							location:
								b?.location || this.y(L.location, b?.resolvedExtHostIdentifier),
							isTransient: L.isTransient ?? void 0,
						});
					}
					async createExtensionTerminal(L, b, F, D, M) {
						if (typeof this._id != "string")
							throw new Error("Terminal has already been created");
						if (
							(await this.s.$createTerminal(this._id, {
								name: this.w,
								isExtensionCustomPtyTerminal: !0,
								icon: D,
								color: h.ThemeColor.isThemeColor(M) ? M.id : void 0,
								location: b?.location || this.y(L, F),
								isTransient: !0,
							}),
							typeof this._id == "string")
						)
							throw new Error("Terminal creation failed");
						return this._id;
					}
					y(L, b) {
						return typeof L == "object"
							? "parentTerminal" in L && L.parentTerminal && b
								? { parentTerminal: b }
								: "viewColumn" in L
									? {
											viewColumn: T.ViewColumn.from(L.viewColumn),
											preserveFocus: L.preserveFocus,
										}
									: void 0
							: L;
					}
					z() {
						if (this.a) throw new Error("Terminal has already been disposed");
					}
					set name(L) {
						this.w = L;
					}
					setExitStatus(L, b) {
						this.j = Object.freeze({ code: L, reason: b });
					}
					setDimensions(L, b) {
						return (L === this.f && b === this.h) || L === 0 || b === 0
							? !1
							: ((this.f = L), (this.h = b), !0);
					}
					setInteractedWith() {
						return this.m.isInteractedWith
							? !1
							: ((this.m = { isInteractedWith: !0 }), !0);
					}
					setSelection(L) {
						this.n = L;
					}
					_setProcessId(L) {
						this.g
							? (this.g(L), (this.g = void 0))
							: this.b.then((b) => {
									b !== L && (this.b = Promise.resolve(L));
								});
					}
				}
				t.$Rhd = s;
				class f {
					get onProcessReady() {
						return this.b.event;
					}
					constructor(L) {
						(this.g = L),
							(this.id = 0),
							(this.shouldPersist = !1),
							(this.a = new e.$re()),
							(this.onProcessData = this.a.event),
							(this.b = new e.$re()),
							(this.d = new e.$re()),
							(this.onDidChangeProperty = this.d.event),
							(this.f = new e.$re()),
							(this.onProcessExit = this.f.event);
					}
					refreshProperty(L) {
						throw new Error(
							`refreshProperty is not suppported in extension owned terminals. property: ${L}`,
						);
					}
					updateProperty(L, b) {
						throw new Error(
							`updateProperty is not suppported in extension owned terminals. property: ${L}, value: ${b}`,
						);
					}
					async start() {}
					shutdown() {
						this.g.close();
					}
					input(L) {
						this.g.handleInput?.(L);
					}
					resize(L, b) {
						this.g.setDimensions?.({ columns: L, rows: b });
					}
					clearBuffer() {}
					async processBinary(L) {}
					acknowledgeDataEvent(L) {}
					async setUnicodeVersion(L) {}
					getInitialCwd() {
						return Promise.resolve("");
					}
					getCwd() {
						return Promise.resolve("");
					}
					startSendingEvents(L) {
						this.g.onDidWrite((b) => this.a.fire(b)),
							this.g.onDidClose?.((b = void 0) => {
								this.f.fire(b === void 0 ? void 0 : b);
							}),
							this.g.onDidOverrideDimensions?.((b) => {
								b &&
									this.d.fire({
										type: g.ProcessPropertyType.OverrideDimensions,
										value: { cols: b.columns, rows: b.rows },
									});
							}),
							this.g.onDidChangeName?.((b) => {
								this.d.fire({ type: g.ProcessPropertyType.Title, value: b });
							}),
							this.g.open(L || void 0),
							L && this.g.setDimensions?.(L),
							this.b.fire({ pid: -1, cwd: "", windowsPty: void 0 });
					}
				}
				let o = 1,
					w = class extends I.$1c {
						get activeTerminal() {
							return this.b?.value;
						}
						get terminals() {
							return this.f.map((L) => L.value);
						}
						constructor(L, b, F) {
							super(),
								(this.Q = b),
								(this.f = []),
								(this.g = new Map()),
								(this.h = {}),
								(this.j = {}),
								(this.m = {}),
								(this.n = new Map()),
								(this.u = this.D(new I.$2c())),
								(this.y = new Set()),
								(this.z = new Map()),
								(this.C = new Map()),
								(this.F = new Map()),
								(this.G = new Map()),
								(this.H = new e.$re()),
								(this.onDidCloseTerminal = this.H.event),
								(this.I = new e.$re()),
								(this.onDidOpenTerminal = this.I.event),
								(this.J = new e.$re()),
								(this.onDidChangeActiveTerminal = this.J.event),
								(this.L = new e.$re()),
								(this.onDidChangeTerminalDimensions = this.L.event),
								(this.M = new e.$re()),
								(this.onDidChangeTerminalState = this.M.event),
								(this.N = new e.$re()),
								(this.onDidChangeShell = this.N.event),
								(this.O = new e.$re({
									onWillAddFirstListener: () =>
										this.a.$startSendingDataEvents(),
									onDidRemoveLastListener: () =>
										this.a.$stopSendingDataEvents(),
								})),
								(this.onDidWriteTerminalData = this.O.event),
								(this.P = new e.$re({
									onWillAddFirstListener: () =>
										this.a.$startSendingCommandEvents(),
									onDidRemoveLastListener: () =>
										this.a.$stopSendingCommandEvents(),
								})),
								(this.onDidExecuteTerminalCommand = this.P.event),
								(this.a = F.getProxy(r.$lbb.MainThreadTerminalService)),
								(this.w = new c.$uoc(this.a.$sendProcessData)),
								this.a.$registerProcessSupport(L),
								this.Q.registerArgumentProcessor({
									processArgument: (D) => {
										const M = (z) => {
											const Q = z;
											return this.getTerminalById(Q.instanceId)?.value;
										};
										switch (D?.$mid) {
											case u.MarshalledId.TerminalContext:
												return M(D);
											default: {
												if (Array.isArray(D))
													for (
														let z = 0;
														z < D.length &&
														D[z].$mid === u.MarshalledId.TerminalContext;
														z++
													)
														D[z] = M(D[z]);
												return D;
											}
										}
									},
								}),
								this.D({
									dispose: () => {
										for (const [D, M] of this.g) M.shutdown(!0);
									},
								});
						}
						getDefaultShell(L) {
							return (L ? this.s : this.q)?.path || "";
						}
						getDefaultShellArgs(L) {
							return (L ? this.s : this.q)?.args || [];
						}
						createExtensionTerminal(L, b) {
							const F = new s(this.a, (0, k.$9g)(), L, L.name),
								D = new f(L.pty);
							return (
								F.createExtensionTerminal(
									L.location,
									b,
									this.R(L, b).resolvedExtHostIdentifier,
									C(L.iconPath),
									O(L.color),
								).then((M) => {
									const z = this.S(M, D);
									this.h[M] = z;
								}),
								this.f.push(F),
								F.value
							);
						}
						R(L, b) {
							if (
								((b = b || {}),
								L.location &&
									typeof L.location == "object" &&
									"parentTerminal" in L.location)
							) {
								const F = L.location.parentTerminal;
								if (F) {
									const D = this.f.find((M) => M.value === F);
									D && (b.resolvedExtHostIdentifier = D._id);
								}
							} else
								L.location && typeof L.location != "object"
									? (b.location = L.location)
									: b.location &&
										typeof b.location == "object" &&
										"splitActiveTerminal" in b.location &&
										(b.location = { splitActiveTerminal: !0 });
							return b;
						}
						attachPtyToTerminal(L, b) {
							if (!this.getTerminalById(L))
								throw new Error(
									`Cannot resolve terminal with id ${L} for virtual process`,
								);
							const D = new f(b),
								M = this.S(L, D);
							this.h[L] = M;
						}
						async $acceptActiveTerminalChanged(L) {
							const b = this.b;
							if (L === null) {
								(this.b = void 0), b !== this.b && this.J.fire(this.b);
								return;
							}
							const F = this.getTerminalById(L);
							F && ((this.b = F), b !== this.b && this.J.fire(this.b.value));
						}
						async $acceptTerminalProcessData(L, b) {
							const F = this.getTerminalById(L);
							F && this.O.fire({ terminal: F.value, data: b });
						}
						async $acceptTerminalDimensions(L, b, F) {
							const D = this.getTerminalById(L);
							D &&
								D.setDimensions(b, F) &&
								this.L.fire({
									terminal: D.value,
									dimensions: D.value.dimensions,
								});
						}
						async $acceptDidExecuteCommand(L, b) {
							const F = this.getTerminalById(L);
							F && this.P.fire({ terminal: F.value, ...b });
						}
						async $acceptTerminalMaximumDimensions(L, b, F) {
							this.g.get(L)?.resize(b, F);
						}
						async $acceptTerminalTitleChange(L, b) {
							const F = this.getTerminalById(L);
							F && (F.name = b);
						}
						async $acceptTerminalClosed(L, b, F) {
							const D = this.X(this.f, L);
							if (D !== null) {
								const M = this.f.splice(D, 1)[0];
								M.setExitStatus(b, F), this.H.fire(M.value);
							}
						}
						$acceptTerminalOpened(L, b, F, D) {
							if (b) {
								const Q = this.X(this.f, b);
								if (Q !== null) {
									(this.f[Q]._id = L),
										this.I.fire(this.terminals[Q]),
										(this.f[Q].isOpen = !0);
									return;
								}
							}
							const M = {
									name: D.name,
									shellPath: D.executable,
									shellArgs: D.args,
									cwd: typeof D.cwd == "string" ? D.cwd : N.URI.revive(D.cwd),
									env: D.env,
									hideFromUser: D.hideFromUser,
								},
								z = new s(this.a, L, M, F);
							this.f.push(z), this.I.fire(z.value), (z.isOpen = !0);
						}
						async $acceptTerminalProcessId(L, b) {
							this.getTerminalById(L)?._setProcessId(b);
						}
						async $startExtensionTerminal(L, b) {
							const F = this.getTerminalById(L);
							if (!F) return { message: (0, n.localize)(2721, null, L) };
							F.isOpen ||
								(await new Promise((M) => {
									const z = this.onDidOpenTerminal(async (Q) => {
										Q === F.value && (z.dispose(), M());
									});
								}));
							const D = this.g.get(L);
							D
								? D.startSendingEvents(b)
								: (this.j[L] = { initialDimensions: b });
						}
						S(L, b) {
							const F = new I.$Zc();
							F.add(
								b.onProcessReady((M) =>
									this.a.$sendProcessReady(L, M.pid, M.cwd, M.windowsPty),
								),
							),
								F.add(
									b.onDidChangeProperty((M) =>
										this.a.$sendProcessProperty(L, M),
									),
								),
								this.w.startBuffering(L, b.onProcessData),
								F.add(b.onProcessExit((M) => this.U(L, M))),
								this.g.set(L, b);
							const D = this.j[L];
							return (
								D &&
									b instanceof f &&
									(b.startSendingEvents(D.initialDimensions), delete this.j[L]),
								F
							);
						}
						$acceptProcessAckDataEvent(L, b) {
							this.g.get(L)?.acknowledgeDataEvent(b);
						}
						$acceptProcessInput(L, b) {
							this.g.get(L)?.input(b);
						}
						$acceptTerminalInteraction(L) {
							const b = this.getTerminalById(L);
							b?.setInteractedWith() && this.M.fire(b.value);
						}
						$acceptTerminalSelection(L, b) {
							this.getTerminalById(L)?.setSelection(b);
						}
						$acceptProcessResize(L, b, F) {
							try {
								this.g.get(L)?.resize(b, F);
							} catch (D) {
								if (D.code !== "EPIPE" && D.code !== "ERR_IPC_CHANNEL_CLOSED")
									throw D;
							}
						}
						$acceptProcessShutdown(L, b) {
							this.g.get(L)?.shutdown(b);
						}
						$acceptProcessRequestInitialCwd(L) {
							this.g
								.get(L)
								?.getInitialCwd()
								.then((b) =>
									this.a.$sendProcessProperty(L, {
										type: g.ProcessPropertyType.InitialCwd,
										value: b,
									}),
								);
						}
						$acceptProcessRequestCwd(L) {
							this.g
								.get(L)
								?.getCwd()
								.then((b) =>
									this.a.$sendProcessProperty(L, {
										type: g.ProcessPropertyType.Cwd,
										value: b,
									}),
								);
						}
						$acceptProcessRequestLatency(L) {
							return Promise.resolve(L);
						}
						registerLinkProvider(L) {
							return (
								this.y.add(L),
								this.y.size === 1 && this.a.$startLinkProvider(),
								new l.$nbb(() => {
									this.y.delete(L),
										this.y.size === 0 && this.a.$stopLinkProvider();
								})
							);
						}
						registerProfileProvider(L, b, F) {
							if (this.z.has(b))
								throw new Error(
									`Terminal profile provider "${b}" already registered`,
								);
							return (
								this.z.set(b, F),
								this.a.$registerProfileProvider(b, L.identifier.value),
								new l.$nbb(() => {
									this.z.delete(b), this.a.$unregisterProfileProvider(b);
								})
							);
						}
						registerTerminalQuickFixProvider(L, b, F) {
							if (this.C.has(L))
								throw new Error(
									`Terminal quick fix provider "${L}" is already registered`,
								);
							return (
								this.C.set(L, F),
								this.a.$registerQuickFixProvider(L, b),
								new l.$nbb(() => {
									this.C.delete(L), this.a.$unregisterQuickFixProvider(L);
								})
							);
						}
						async $provideTerminalQuickFixes(L, b) {
							const F = new d.$Ce().token;
							if (F.isCancellationRequested) return;
							const D = this.C.get(L);
							if (!D) return;
							const M = await D.provideTerminalQuickFixes(b, F);
							if (M === null || (Array.isArray(M) && M.length === 0)) return;
							const z = new I.$Zc();
							if (((this.u.value = z), !Array.isArray(M)))
								return M
									? T.TerminalQuickFix.from(M, this.Q.converter, z)
									: void 0;
							const Q = [];
							for (const H of M) {
								const B = T.TerminalQuickFix.from(H, this.Q.converter, z);
								B && Q.push(B);
							}
							return Q;
						}
						async $createContributedProfileTerminal(L, b) {
							const F = new d.$Ce().token;
							let D = await this.z.get(L)?.provideTerminalProfile(F);
							if (!F.isCancellationRequested) {
								if (
									(D && !("options" in D) && (D = { options: D }),
									!D || !("options" in D))
								)
									throw new Error(
										`No terminal profile options provided for id "${L}"`,
									);
								if ("pty" in D.options) {
									this.createExtensionTerminal(D.options, b);
									return;
								}
								this.createTerminalFromOptions(D.options, b);
							}
						}
						async $provideLinks(L, b) {
							const F = this.getTerminalById(L);
							if (!F) return [];
							this.F.delete(L), this.G.get(L)?.dispose(!0);
							const M = new d.$Ce();
							this.G.set(L, M);
							const z = [],
								Q = { terminal: F.value, line: b },
								H = [];
							for (const Z of this.y)
								H.push(
									$.Promises.withAsyncBody(async (W) => {
										M.token.onCancellationRequested(() =>
											W({ provider: Z, links: [] }),
										);
										const G = (await Z.provideTerminalLinks(Q, M.token)) || [];
										M.token.isCancellationRequested ||
											W({ provider: Z, links: G });
									}),
								);
							const B = await Promise.all(H);
							if (M.token.isCancellationRequested) return [];
							const U = new Map();
							for (const Z of B)
								Z &&
									Z.links.length > 0 &&
									z.push(
										...Z.links.map((W) => {
											const G = {
												id: o++,
												startIndex: W.startIndex,
												length: W.length,
												label: W.tooltip,
											};
											return U.set(G.id, { provider: Z.provider, link: W }), G;
										}),
									);
							return this.F.set(L, U), z;
						}
						$activateLink(L, b) {
							const F = this.F.get(L)?.get(b);
							F && F.provider.handleTerminalLink(F.link);
						}
						U(L, b) {
							this.w.stopBuffering(L), this.g.delete(L), delete this.j[L];
							const F = this.h[L];
							F && (F.dispose(), delete this.h[L]),
								this.a.$sendProcessExit(L, b);
						}
						getTerminalById(L) {
							return this.W(this.f, L);
						}
						getTerminalIdByApiObject(L) {
							const b = this.f.findIndex((F) => F.value === L);
							return b >= 0 ? b : null;
						}
						W(L, b) {
							const F = this.X(L, b);
							return F !== null ? L[F] : null;
						}
						X(L, b) {
							const F = L.findIndex((D) => D._id === b);
							return F >= 0 ? F : null;
						}
						getEnvironmentVariableCollection(L) {
							let b = this.n.get(L.identifier.value);
							return (
								b || ((b = this.D(new m())), this.Z(L.identifier.value, b)),
								b.getScopedEnvironmentVariableCollection(void 0)
							);
						}
						Y(L, b) {
							const F = (0, y.$_J)(b.map),
								D = (0, y.$aK)(b.descriptionMap);
							this.a.$setEnvironmentVariableCollection(
								L,
								b.persistent,
								F.length === 0 ? void 0 : F,
								D,
							);
						}
						$initEnvironmentVariableCollections(L) {
							L.forEach((b) => {
								const F = b[0],
									D = this.D(new m(b[1]));
								this.Z(F, D);
							});
						}
						$acceptDefaultProfile(L, b) {
							const F = this.q;
							(this.q = L),
								(this.s = b),
								F?.path !== L.path && this.N.fire(L.path);
						}
						Z(L, b) {
							this.n.set(L, b),
								this.D(
									b.onDidChangeCollection(() => {
										this.Y(L, b);
									}),
								);
						}
					};
				(t.$Shd = w), (t.$Shd = w = wt([rt(1, a.$8db), rt(2, P.$08)], w));
				class m extends I.$1c {
					get persistent() {
						return this.b;
					}
					set persistent(L) {
						(this.b = L), this.f.fire();
					}
					get onDidChangeCollection() {
						return this.f && this.f.event;
					}
					constructor(L) {
						super(),
							(this.map = new Map()),
							(this.a = new Map()),
							(this.descriptionMap = new Map()),
							(this.b = !0),
							(this.f = new e.$re()),
							(this.map = new Map(L));
					}
					getScopedEnvironmentVariableCollection(L) {
						const b = this.j(L);
						let F = this.a.get(b);
						return (
							F ||
								((F = new E(this, L)),
								this.a.set(b, F),
								this.D(F.onDidChangeCollection(() => this.f.fire()))),
							F
						);
					}
					replace(L, b, F, D) {
						this.g(L, {
							value: b,
							type: l.EnvironmentVariableMutatorType.Replace,
							options: F ?? { applyAtProcessCreation: !0 },
							scope: D,
						});
					}
					append(L, b, F, D) {
						this.g(L, {
							value: b,
							type: l.EnvironmentVariableMutatorType.Append,
							options: F ?? { applyAtProcessCreation: !0 },
							scope: D,
						});
					}
					prepend(L, b, F, D) {
						this.g(L, {
							value: b,
							type: l.EnvironmentVariableMutatorType.Prepend,
							options: F ?? { applyAtProcessCreation: !0 },
							scope: D,
						});
					}
					g(L, b) {
						if (
							b.options &&
							b.options.applyAtProcessCreation === !1 &&
							!b.options.applyAtShellIntegration
						)
							throw new Error(
								"EnvironmentVariableMutatorOptions must apply at either process creation or shell integration",
							);
						const F = this.h(L, b.scope),
							D = this.map.get(F),
							M = b.options
								? {
										applyAtProcessCreation:
											b.options.applyAtProcessCreation ?? !1,
										applyAtShellIntegration:
											b.options.applyAtShellIntegration ?? !1,
									}
								: { applyAtProcessCreation: !0 };
						if (
							!D ||
							D.value !== b.value ||
							D.type !== b.type ||
							D.options?.applyAtProcessCreation !== M.applyAtProcessCreation ||
							D.options?.applyAtShellIntegration !==
								M.applyAtShellIntegration ||
							D.scope?.workspaceFolder?.index !==
								b.scope?.workspaceFolder?.index
						) {
							const z = this.h(L, b.scope),
								Q = { variable: L, ...b, options: M };
							this.map.set(z, Q), this.f.fire();
						}
					}
					get(L, b) {
						const F = this.h(L, b),
							D = this.map.get(F);
						return D ? A(D) : void 0;
					}
					h(L, b) {
						const F = this.j(b);
						return F.length ? `${L}:::${F}` : L;
					}
					j(L) {
						return this.m(L?.workspaceFolder) ?? "";
					}
					m(L) {
						return L ? L.uri.toString() : void 0;
					}
					getVariableMap(L) {
						const b = new Map();
						for (const [F, D] of this.map)
							this.j(D.scope) === this.j(L) && b.set(D.variable, A(D));
						return b;
					}
					delete(L, b) {
						const F = this.h(L, b);
						this.map.delete(F), this.f.fire();
					}
					clear(L) {
						if (L?.workspaceFolder) {
							for (const [b, F] of this.map)
								F.scope?.workspaceFolder?.index === L.workspaceFolder.index &&
									this.map.delete(b);
							this.n(L);
						} else this.map.clear(), this.descriptionMap.clear();
						this.f.fire();
					}
					setDescription(L, b) {
						const F = this.j(b),
							D = this.descriptionMap.get(F);
						if (!D || D.description !== L) {
							let M;
							typeof L == "string"
								? (M = L)
								: (M = L?.value.split(`

`)[0]);
							const z = { description: M, scope: b };
							this.descriptionMap.set(F, z), this.f.fire();
						}
					}
					getDescription(L) {
						const b = this.j(L);
						return this.descriptionMap.get(b)?.description;
					}
					n(L) {
						const b = this.j(L);
						this.descriptionMap.delete(b);
					}
				}
				class E {
					get persistent() {
						return this.b.persistent;
					}
					set persistent(L) {
						this.b.persistent = L;
					}
					get onDidChangeCollection() {
						return this.a && this.a.event;
					}
					constructor(L, b) {
						(this.b = L), (this.d = b), (this.a = new e.$re());
					}
					getScoped(L) {
						return this.b.getScopedEnvironmentVariableCollection(L);
					}
					replace(L, b, F) {
						this.b.replace(L, b, F, this.d);
					}
					append(L, b, F) {
						this.b.append(L, b, F, this.d);
					}
					prepend(L, b, F) {
						this.b.prepend(L, b, F, this.d);
					}
					get(L) {
						return this.b.get(L, this.d);
					}
					forEach(L, b) {
						this.b
							.getVariableMap(this.d)
							.forEach((F, D) => L.call(b, D, F, this), this.d);
					}
					[Symbol.iterator]() {
						return this.b.getVariableMap(this.d).entries();
					}
					delete(L) {
						this.b.delete(L, this.d), this.a.fire(void 0);
					}
					clear() {
						this.b.clear(this.d);
					}
					set description(L) {
						this.b.setDescription(L, this.d);
					}
					get description() {
						return this.b.getDescription(this.d);
					}
				}
				let R = class extends w {
					constructor(L, b) {
						super(!1, L, b);
					}
					createTerminal(L, b, F) {
						throw new p.$db();
					}
					createTerminalFromOptions(L, b) {
						throw new p.$db();
					}
				};
				(t.$Thd = R), (t.$Thd = R = wt([rt(0, a.$8db), rt(1, P.$08)], R));
				function C(J) {
					if (!(!J || typeof J == "string"))
						return "id" in J ? { id: J.id, color: J.color } : J;
				}
				function O(J) {
					return h.ThemeColor.isThemeColor(J) ? J : void 0;
				}
				function A(J) {
					const L = { ...J };
					return (
						delete L.scope,
						(L.options = L.options ?? void 0),
						delete L.variable,
						L
					);
				}
			},
		),
		