import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/event.js';
import '../../../base/common/uri.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHost.protocol.js';
import './extHostEditorTabs.js';
import './extHostExtensionService.js';
import './extHostRpcService.js';
import './extHostTypes.js';
import './extHostWorkspace.js';
import '../../contrib/debug/common/abstractDebugAdapter.js';
import '../../contrib/debug/common/debug.js';
import '../../contrib/debug/common/debugUtils.js';
import './extHostConfiguration.js';
import './extHostVariableResolverService.js';
import '../../../base/common/themables.js';
import './extHostCommands.js';
import './extHostTypeConverters.js';
import '../../../base/common/arrays.js';
import './extHostTesting.js';
define(
			Pe[149],
			Ne([
				1, 0, 9, 4, 2, 3, 25, 5, 6, 117, 75, 21, 11, 63, 290, 187, 523, 56, 94,
				72, 44, 17, 20, 147,
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
			) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$hid = t.$gid = t.$fid = t.$eid = t.$did = void 0),
					(s = tt(s)),
					(t.$did = (0, I.$Mi)("IExtHostDebugService"));
				let w = class extends N.$1c {
					get onDidStartDebugSession() {
						return this.w.event;
					}
					get onDidTerminateDebugSession() {
						return this.y.event;
					}
					get onDidChangeActiveDebugSession() {
						return this.z.event;
					}
					get activeDebugSession() {
						return this.C?.api;
					}
					get onDidReceiveDebugSessionCustomEvent() {
						return this.F.event;
					}
					get activeDebugConsole() {
						return this.G.value;
					}
					constructor(J, L, b, F, D, M, z, Q) {
						super(),
							(this.Y = L),
							(this.Z = b),
							(this.$ = F),
							(this.ab = D),
							(this.bb = M),
							(this.cb = z),
							(this.db = Q),
							(this.u = new Map()),
							(this.O = 0),
							(this.P = new Map()),
							(this.Q = new Map()),
							(this.R = new WeakMap()),
							(this.S = new Map()),
							(this.W = new Map()),
							(this.X = 0),
							(this.f = 0),
							(this.g = []),
							(this.h = 0),
							(this.j = []),
							(this.m = 0),
							(this.n = []),
							(this.M = new Map()),
							(this.N = new Map()),
							(this.w = this.D(new r.$re())),
							(this.y = this.D(new r.$re())),
							(this.z = this.D(new r.$re())),
							(this.F = this.D(new r.$re())),
							(this.q = J.getProxy(l.$lbb.MainThreadDebugService)),
							(this.I = this.D(new r.$re())),
							(this.L = this.D(new r.$re())),
							(this.G = new E(this.q)),
							(this.H = new Map()),
							this.Z.getExtensionRegistry().then((H) => {
								this.D(
									H.onDidChange((B) => {
										this.fb(H);
									}),
								),
									this.fb(H);
							});
					}
					async $getVisualizerTreeItem(J, L) {
						const b = this.gb(L);
						if (!b) return;
						const F = await this.Q.get(J)?.getTreeItem?.(b);
						return F ? this.eb(J, F) : void 0;
					}
					registerDebugVisualizationTree(J, L, b) {
						const F = P.$Gn.toKey(J.identifier),
							D = this.ub(F, L);
						if (this.P.has(D))
							throw new Error(
								`A debug visualization provider with id '${L}' is already registered`,
							);
						return (
							this.Q.set(D, b),
							this.q.$registerDebugVisualizerTree(D, !!b.editItem),
							(0, N.$Yc)(() => {
								this.q.$unregisterDebugVisualizerTree(D), this.Q.delete(L);
							})
						);
					}
					async $getVisualizerTreeItemChildren(J, L) {
						const b = this.S.get(L)?.item;
						return b
							? (await this.Q.get(J)?.getChildren?.(b))?.map((D) =>
									this.eb(J, D),
								) || []
							: [];
					}
					async $editVisualizerTreeItem(J, L) {
						const b = this.S.get(J);
						if (!b) return;
						const F = await this.Q.get(b.provider)?.editItem?.(b.item, L);
						return this.eb(b.provider, F || b.item);
					}
					$disposeVisualizedTree(J) {
						const L = this.S.get(J);
						if (!L) return;
						const b = [L.children];
						for (const F of b)
							if (F)
								for (const D of F)
									b.push(this.S.get(D)?.children), this.S.delete(D);
					}
					eb(J, L) {
						let b = this.R.get(L);
						return (
							b ||
								((b = this.O++),
								this.R.set(L, b),
								this.S.set(b, { provider: J, item: L })),
							s.DebugTreeItem.from(L, b)
						);
					}
					asDebugSourceUri(J, L) {
						const b = J;
						if (typeof b.sourceReference == "number" && b.sourceReference > 0) {
							let F = `debug:${encodeURIComponent(b.path || "")}`,
								D = "?";
							return (
								L &&
									((F += `${D}session=${encodeURIComponent(L.id)}`), (D = "&")),
								(F += `${D}ref=${b.sourceReference}`),
								S.URI.parse(F)
							);
						} else {
							if (b.path) return S.URI.file(b.path);
							throw new Error(
								"cannot create uri from DAP 'source' object; properties 'path' and 'sourceReference' are both missing.",
							);
						}
					}
					fb(J) {
						const L = [];
						for (const b of J.getAllExtensionDescriptions())
							if (b.contributes) {
								const F = b.contributes.debuggers;
								if (F && F.length > 0)
									for (const D of F) (0, h.$p3)(D) && L.push(D.type);
							}
						this.q.$registerDebugTypes(L);
					}
					get activeStackItem() {
						return this.J;
					}
					get onDidChangeActiveStackItem() {
						return this.L.event;
					}
					get onDidChangeBreakpoints() {
						return this.I.event;
					}
					get breakpoints() {
						const J = [];
						return this.H.forEach((L) => J.push(L)), J;
					}
					async $resolveDebugVisualizer(J, L) {
						const b = this.W.get(J);
						if (!b) throw new Error(`No debug visualizer found with id '${J}'`);
						let { v: F, provider: D, extensionId: M } = b;
						if (
							(F.visualization ||
								((F = (await D.resolveDebugVisualization?.(F, L)) || F),
								(b.v = F)),
							!F.visualization)
						)
							throw new Error(
								`No visualization returned from resolveDebugVisualization in '${D}'`,
							);
						return this.vb(M, F.visualization);
					}
					async $executeDebugVisualizerCommand(J) {
						const L = this.W.get(J);
						if (!L) throw new Error(`No debug visualizer found with id '${J}'`);
						const b = L.v.visualization;
						b &&
							"command" in b &&
							this.cb.executeCommand(b.command, ...(b.arguments || []));
					}
					gb(J) {
						const L = this.u.get(J.sessionId);
						return (
							L && {
								session: L.api,
								variable: J.variable,
								containerId: J.containerId,
								frameId: J.frameId,
								threadId: J.threadId,
							}
						);
					}
					async $provideDebugVisualizers(J, L, b, F) {
						const D = this.gb(b),
							M = this.ub(J, L),
							z = this.P.get(M);
						if (!D || !z) return [];
						const Q = await z.provideDebugVisualization(D, F);
						return Q
							? Q.map((H) => {
									const B = ++this.X;
									this.W.set(B, { v: H, provider: z, extensionId: J });
									const U = H.iconPath ? this.wb(H.iconPath) : void 0;
									return {
										id: B,
										name: H.name,
										iconClass: U?.iconClass,
										iconPath: U?.iconPath,
										visualization: this.vb(J, H.visualization),
									};
								})
							: [];
					}
					$disposeDebugVisualizers(J) {
						for (const L of J) this.W.delete(L);
					}
					registerDebugVisualizationProvider(J, L, b) {
						if (!J.contributes?.debugVisualizers?.some((M) => M.id === L))
							throw new Error(
								`Extensions may only call registerDebugVisualizationProvider() for renderers they contribute (got ${L})`,
							);
						const F = P.$Gn.toKey(J.identifier),
							D = this.ub(F, L);
						if (this.P.has(D))
							throw new Error(
								`A debug visualization provider with id '${L}' is already registered`,
							);
						return (
							this.P.set(D, b),
							this.q.$registerDebugVisualizer(F, L),
							(0, N.$Yc)(() => {
								this.q.$unregisterDebugVisualizer(F, L), this.P.delete(L);
							})
						);
					}
					addBreakpoints(J) {
						const L = J.filter((D) => {
							const M = D.id;
							return this.H.has(M) ? !1 : (this.H.set(M, D), !0);
						});
						this.rb(L, [], []);
						const b = [],
							F = new Map();
						for (const D of L)
							if (D instanceof d.$rcb) {
								let M = F.get(D.location.uri.toString());
								M ||
									((M = {
										type: "sourceMulti",
										uri: D.location.uri,
										lines: [],
									}),
									F.set(D.location.uri.toString(), M),
									b.push(M)),
									M.lines.push({
										id: D.id,
										enabled: D.enabled,
										condition: D.condition,
										hitCondition: D.hitCondition,
										logMessage: D.logMessage,
										line: D.location.range.start.line,
										character: D.location.range.start.character,
										mode: D.mode,
									});
							} else
								D instanceof d.$scb &&
									b.push({
										type: "function",
										id: D.id,
										enabled: D.enabled,
										hitCondition: D.hitCondition,
										logMessage: D.logMessage,
										condition: D.condition,
										functionName: D.functionName,
										mode: D.mode,
									});
						return this.q.$registerBreakpoints(b);
					}
					removeBreakpoints(J) {
						const L = J.filter((M) => this.H.delete(M.id));
						this.rb([], L, []);
						const b = L.filter((M) => M instanceof d.$rcb).map((M) => M.id),
							F = L.filter((M) => M instanceof d.$scb).map((M) => M.id),
							D = L.filter((M) => M instanceof d.$tcb).map((M) => M.id);
						return this.q.$unregisterBreakpoints(b, F, D);
					}
					startDebugging(J, L, b) {
						const F = b.testRun && this.db.getMetadataForRun(b.testRun);
						return this.q.$startDebugging(J ? J.uri : void 0, L, {
							parentSessionID: b.parentSession ? b.parentSession.id : void 0,
							lifecycleManagedByParent: b.lifecycleManagedByParent,
							repl:
								b.consoleMode === d.DebugConsoleMode.MergeWithParent
									? "mergeWithParent"
									: "separate",
							noDebug: b.noDebug,
							compact: b.compact,
							suppressSaveBeforeStart: b.suppressSaveBeforeStart,
							testRun: F && { runId: F.runId, taskId: F.taskId },
							suppressDebugStatusbar:
								b.suppressDebugStatusbar ?? b.debugUI?.simple,
							suppressDebugToolbar: b.suppressDebugToolbar ?? b.debugUI?.simple,
							suppressDebugView: b.suppressDebugView ?? b.debugUI?.simple,
						});
					}
					stopDebugging(J) {
						return this.q.$stopDebugging(J ? J.id : void 0);
					}
					registerDebugConfigurationProvider(J, L, b) {
						if (!L) return new d.$nbb(() => {});
						const F = this.f++;
						return (
							this.g.push({ type: J, handle: F, provider: L }),
							this.q.$registerDebugConfigurationProvider(
								J,
								b,
								!!L.provideDebugConfigurations,
								!!L.resolveDebugConfiguration,
								!!L.resolveDebugConfigurationWithSubstitutedVariables,
								F,
							),
							new d.$nbb(() => {
								(this.g = this.g.filter((D) => D.provider !== L)),
									this.q.$unregisterDebugConfigurationProvider(F);
							})
						);
					}
					registerDebugAdapterDescriptorFactory(J, L, b) {
						if (!b) return new d.$nbb(() => {});
						if (!this.nb(J, L))
							throw new Error(
								`a DebugAdapterDescriptorFactory can only be registered from the extension that defines the '${L}' debugger.`,
							);
						if (this.kb(L))
							throw new Error(
								"a DebugAdapterDescriptorFactory can only be registered once per a type.",
							);
						const F = this.h++;
						return (
							this.j.push({ type: L, handle: F, factory: b }),
							this.q.$registerDebugAdapterDescriptorFactory(L, F),
							new d.$nbb(() => {
								(this.j = this.j.filter((D) => D.factory !== b)),
									this.q.$unregisterDebugAdapterDescriptorFactory(F);
							})
						);
					}
					registerDebugAdapterTrackerFactory(J, L) {
						if (!L) return new d.$nbb(() => {});
						const b = this.m++;
						return (
							this.n.push({ type: J, handle: b, factory: L }),
							new d.$nbb(() => {
								this.n = this.n.filter((F) => F.factory !== L);
							})
						);
					}
					async $runInTerminal(J, L) {
						return Promise.resolve(void 0);
					}
					async $substituteVariables(J, L) {
						let b;
						const F = await this.tb(J);
						return (
							F &&
								(b = {
									uri: F.uri,
									name: F.name,
									index: F.index,
									toResource: () => {
										throw new Error("Not implemented");
									},
								}),
							(await this.bb.getResolver()).resolveAnyAsync(b, L)
						);
					}
					hb(J, L) {
						if (J.type === "implementation") return new C(J.implementation);
					}
					ib() {}
					async $startDASession(J, L) {
						const b = this,
							F = await this.sb(L);
						return this.pb(this.kb(F.type), F).then((D) => {
							if (!D)
								throw new Error(
									`Couldn't find a debug adapter descriptor for debug type '${F.type}' (extension might have failed to activate)`,
								);
							const M = this.jb(D),
								z = this.hb(M, F);
							if (!z)
								throw new Error(
									`Couldn't create a debug adapter for type '${F.type}'.`,
								);
							const Q = z;
							return (
								this.M.set(J, Q),
								this.ob(F).then(
									(H) => (
										H && this.N.set(J, H),
										Q.onMessage(async (B) => {
											if (B.type === "request" && B.command === "handshake") {
												const U = B,
													Z = {
														type: "response",
														seq: 0,
														command: U.command,
														request_seq: U.seq,
														success: !0,
													};
												this.U || (this.U = this.ib());
												try {
													if (this.U) {
														const W = await this.U.sign(U.arguments.value);
														(Z.body = { signature: W }), Q.sendResponse(Z);
													} else throw new Error("no signer");
												} catch (W) {
													(Z.success = !1),
														(Z.message = W.message),
														Q.sendResponse(Z);
												}
											} else
												H && H.onDidSendMessage && H.onDidSendMessage(B),
													(B = (0, h.$u3)(B, !0)),
													b.q.$acceptDAMessage(J, B);
										}),
										Q.onError((B) => {
											H && H.onError && H.onError(B),
												this.q.$acceptDAError(J, B.name, B.message, B.stack);
										}),
										Q.onExit((B) => {
											H && H.onExit && H.onExit(B ?? void 0, void 0),
												this.q.$acceptDAExit(J, B ?? void 0, void 0);
										}),
										H && H.onWillStartSession && H.onWillStartSession(),
										Q.startSession()
									),
								)
							);
						});
					}
					$sendDAMessage(J, L) {
						L = (0, h.$t3)(L, !1);
						const b = this.N.get(J);
						b && b.onWillReceiveMessage && b.onWillReceiveMessage(L),
							this.M.get(J)?.sendMessage(L);
					}
					$stopDASession(J) {
						const L = this.N.get(J);
						this.N.delete(J), L && L.onWillStopSession && L.onWillStopSession();
						const b = this.M.get(J);
						return (
							this.M.delete(J), b ? b.stopSession() : Promise.resolve(void 0)
						);
					}
					$acceptBreakpointsDelta(J) {
						const L = [],
							b = [],
							F = [];
						if (J.added)
							for (const D of J.added) {
								const M = D.id;
								if (M && !this.H.has(M)) {
									let z;
									if (D.type === "function")
										z = new d.$scb(
											D.functionName,
											D.enabled,
											D.condition,
											D.hitCondition,
											D.logMessage,
											D.mode,
										);
									else if (D.type === "data")
										z = new d.$tcb(
											D.label,
											D.dataId,
											D.canPersist,
											D.enabled,
											D.hitCondition,
											D.condition,
											D.logMessage,
											D.mode,
										);
									else {
										const Q = S.URI.revive(D.uri);
										z = new d.$rcb(
											new d.$Bbb(Q, new d.$obb(D.line, D.character)),
											D.enabled,
											D.condition,
											D.hitCondition,
											D.logMessage,
											D.mode,
										);
									}
									(0, d.$pcb)(z, M), this.H.set(M, z), L.push(z);
								}
							}
						if (J.removed)
							for (const D of J.removed) {
								const M = this.H.get(D);
								M && (this.H.delete(D), b.push(M));
							}
						if (J.changed) {
							for (const D of J.changed)
								if (D.id) {
									const M = this.H.get(D.id);
									if (M) {
										if (M instanceof d.$scb && D.type === "function") {
											const z = M;
											(z.enabled = D.enabled),
												(z.condition = D.condition),
												(z.hitCondition = D.hitCondition),
												(z.logMessage = D.logMessage),
												(z.functionName = D.functionName);
										} else if (M instanceof d.$rcb && D.type === "source") {
											const z = M;
											(z.enabled = D.enabled),
												(z.condition = D.condition),
												(z.hitCondition = D.hitCondition),
												(z.logMessage = D.logMessage),
												(z.location = new d.$Bbb(
													S.URI.revive(D.uri),
													new d.$obb(D.line, D.character),
												));
										}
										F.push(M);
									}
								}
						}
						this.rb(L, b, F);
					}
					async $acceptStackFrameFocus(J) {
						let L;
						if (J) {
							const b = await this.sb(J.sessionId);
							J.kind === "thread"
								? (L = new d.$zcb(b.api, J.threadId))
								: (L = new d.$ycb(b.api, J.threadId, J.frameId));
						}
						(this.J = L), this.L.fire(this.J);
					}
					$provideDebugConfigurations(J, L, b) {
						return (0, e.$Eh)(async () => {
							const F = this.mb(J);
							if (!F) throw new Error("no DebugConfigurationProvider found");
							if (!F.provideDebugConfigurations)
								throw new Error(
									"DebugConfigurationProvider has no method provideDebugConfigurations",
								);
							const D = await this.tb(L);
							return F.provideDebugConfigurations(D, b);
						}).then((F) => {
							if (!F)
								throw new Error(
									"nothing returned from DebugConfigurationProvider.provideDebugConfigurations",
								);
							return F;
						});
					}
					$resolveDebugConfiguration(J, L, b, F) {
						return (0, e.$Eh)(async () => {
							const D = this.mb(J);
							if (!D) throw new Error("no DebugConfigurationProvider found");
							if (!D.resolveDebugConfiguration)
								throw new Error(
									"DebugConfigurationProvider has no method resolveDebugConfiguration",
								);
							const M = await this.tb(L);
							return D.resolveDebugConfiguration(M, b, F);
						});
					}
					$resolveDebugConfigurationWithSubstitutedVariables(J, L, b, F) {
						return (0, e.$Eh)(async () => {
							const D = this.mb(J);
							if (!D) throw new Error("no DebugConfigurationProvider found");
							if (!D.resolveDebugConfigurationWithSubstitutedVariables)
								throw new Error(
									"DebugConfigurationProvider has no method resolveDebugConfigurationWithSubstitutedVariables",
								);
							const M = await this.tb(L);
							return D.resolveDebugConfigurationWithSubstitutedVariables(
								M,
								b,
								F,
							);
						});
					}
					async $provideDebugAdapter(J, L) {
						const b = this.lb(J);
						if (!b)
							return Promise.reject(
								new Error("no adapter descriptor factory found for handle"),
							);
						const F = await this.sb(L);
						return this.pb(b, F).then((D) => {
							if (!D)
								throw new Error(
									`Couldn't find a debug adapter descriptor for debug type '${F.type}'`,
								);
							return this.jb(D);
						});
					}
					async $acceptDebugSessionStarted(J) {
						const L = await this.sb(J);
						this.w.fire(L.api);
					}
					async $acceptDebugSessionTerminated(J) {
						const L = await this.sb(J);
						L && (this.y.fire(L.api), this.u.delete(L.id));
					}
					async $acceptDebugSessionActiveChanged(J) {
						(this.C = J ? await this.sb(J) : void 0), this.z.fire(this.C?.api);
					}
					async $acceptDebugSessionNameChanged(J, L) {
						(await this.sb(J))?._acceptNameChanged(L);
					}
					async $acceptDebugSessionCustomEvent(J, L) {
						const F = {
							session: (await this.sb(J)).api,
							event: L.event,
							body: L.body,
						};
						this.F.fire(F);
					}
					jb(J) {
						if (J instanceof d.$ucb)
							return {
								type: "executable",
								command: J.command,
								args: J.args,
								options: J.options,
							};
						if (J instanceof d.$vcb)
							return { type: "server", port: J.port, host: J.host };
						if (J instanceof d.$wcb)
							return { type: "pipeServer", path: J.path };
						if (J instanceof d.$xcb)
							return {
								type: "implementation",
								implementation: J.implementation,
							};
						throw new Error("convertToDto unexpected type");
					}
					kb(J) {
						const L = this.j.filter((b) => b.type === J);
						if (L.length > 0) return L[0].factory;
					}
					lb(J) {
						const L = this.j.filter((b) => b.handle === J);
						if (L.length > 0) return L[0].factory;
					}
					mb(J) {
						const L = this.g.filter((b) => b.handle === J);
						if (L.length > 0) return L[0].provider;
					}
					nb(J, L) {
						if (J.contributes) {
							const b = J.contributes.debuggers;
							if (b && b.length > 0) {
								for (const F of b)
									if (F.label && F.type && F.type === L) return !0;
							}
						}
						return !1;
					}
					ob(J) {
						const b = J.configuration.type,
							F = this.n
								.filter((D) => D.type === b || D.type === "*")
								.map((D) =>
									(0, e.$Eh)(() =>
										D.factory.createDebugAdapterTracker(J.api),
									).then(
										(M) => M,
										(M) => null,
									),
								);
						return Promise.race([
							Promise.all(F).then((D) => {
								const M = (0, f.$Lb)(D);
								if (M.length > 0) return new R(M);
							}),
							new Promise((D) => setTimeout(() => D(void 0), 1e3)),
						]).catch((D) => {});
					}
					async pb(J, L) {
						const b = L.configuration.debugServer;
						if (typeof b == "number") return Promise.resolve(new d.$vcb(b));
						if (J) {
							const D = await this.Z.getExtensionRegistry();
							return (0, e.$Eh)(() =>
								J.createDebugAdapterDescriptor(L.api, this.qb(L, D)),
							).then((M) => {
								if (M) return M;
							});
						}
						const F = await this.Z.getExtensionRegistry();
						return Promise.resolve(this.qb(L, F));
					}
					qb(J, L) {}
					rb(J, L, b) {
						(J.length > 0 || L.length > 0 || b.length > 0) &&
							this.I.fire(Object.freeze({ added: J, removed: L, changed: b }));
					}
					async sb(J) {
						if (J)
							if (typeof J == "string") {
								const L = this.u.get(J);
								if (L) return L;
							} else {
								let L = this.u.get(J.id);
								if (!L) {
									const b = await this.tb(J.folderUri),
										F = J.parent ? this.u.get(J.parent) : void 0;
									(L = new m(
										this.q,
										J.id,
										J.type,
										J.name,
										b,
										J.configuration,
										F?.api,
									)),
										this.u.set(L.id, L),
										this.q.$sessionCached(L.id);
								}
								return L;
							}
						throw new Error("cannot find session");
					}
					tb(J) {
						if (J) {
							const L = S.URI.revive(J);
							return this.Y.resolveWorkspaceFolder(L);
						}
						return Promise.resolve(void 0);
					}
					ub(J, L) {
						return `${J}\0${L}`;
					}
					vb(J, L) {
						if (L) {
							if ("title" in L && "command" in L)
								return { type: c.DebugVisualizationType.Command };
							if ("treeId" in L)
								return {
									type: c.DebugVisualizationType.Tree,
									id: `${J}\0${L.treeId}`,
								};
							throw new Error("Unsupported debug visualization type");
						}
					}
					wb(J) {
						const L = this.xb(J);
						let b, F;
						return (
							"id" in L ? (F = a.ThemeIcon.asClassName(L)) : (b = L),
							{ iconPath: b, iconClass: F }
						);
					}
					xb(J) {
						if (J instanceof d.$mcb) return { id: J.id };
						const L = typeof J == "object" && "dark" in J ? J.dark : J,
							b = typeof J == "object" && "light" in J ? J.light : J;
						return {
							dark: typeof L == "string" ? S.URI.file(L) : L,
							light: typeof b == "string" ? S.URI.file(b) : b,
						};
					}
				};
				(t.$eid = w),
					(t.$eid = w =
						wt(
							[
								rt(0, y.$08),
								rt(1, k.$m9),
								rt(2, p.$6hd),
								rt(3, $.$phd),
								rt(4, n.$Ehd),
								rt(5, T.$9hd),
								rt(6, u.$8db),
								rt(7, o.$$hd),
							],
							w,
						));
				class m {
					constructor(J, L, b, F, D, M, z) {
						(this.f = J),
							(this.g = L),
							(this.h = b),
							(this.j = F),
							(this.k = D),
							(this.l = M),
							(this.m = z);
					}
					get api() {
						const J = this;
						return (this.d ??= Object.freeze({
							id: J.g,
							type: J.h,
							get name() {
								return J.j;
							},
							set name(L) {
								(J.j = L), J.f.$setDebugSessionName(J.g, L);
							},
							parentSession: J.m,
							workspaceFolder: J.k,
							configuration: J.l,
							customRequest(L, b) {
								return J.f.$customDebugAdapterRequest(J.g, L, b);
							},
							getDebugProtocolBreakpoint(L) {
								return J.f.$getDebugProtocolBreakpoint(J.g, L.id);
							},
						}));
					}
					get id() {
						return this.g;
					}
					get type() {
						return this.h;
					}
					_acceptNameChanged(J) {
						this.j = J;
					}
					get configuration() {
						return this.l;
					}
				}
				t.$fid = m;
				class E {
					constructor(J) {
						this.value = Object.freeze({
							append(L) {
								J.$appendDebugConsole(L);
							},
							appendLine(L) {
								this.append(
									L +
										`
`,
								);
							},
						});
					}
				}
				t.$gid = E;
				class R {
					constructor(J) {
						this.d = J;
					}
					onWillStartSession() {
						this.d.forEach((J) =>
							J.onWillStartSession ? J.onWillStartSession() : void 0,
						);
					}
					onWillReceiveMessage(J) {
						this.d.forEach((L) =>
							L.onWillReceiveMessage ? L.onWillReceiveMessage(J) : void 0,
						);
					}
					onDidSendMessage(J) {
						this.d.forEach((L) =>
							L.onDidSendMessage ? L.onDidSendMessage(J) : void 0,
						);
					}
					onWillStopSession() {
						this.d.forEach((J) =>
							J.onWillStopSession ? J.onWillStopSession() : void 0,
						);
					}
					onError(J) {
						this.d.forEach((L) => (L.onError ? L.onError(J) : void 0));
					}
					onExit(J, L) {
						this.d.forEach((b) => (b.onExit ? b.onExit(J, L) : void 0));
					}
				}
				class C extends g.$Wmc {
					constructor(J) {
						super(),
							(this.h = J),
							J.onDidSendMessage((L) => {
								this.acceptMessage(L);
							});
					}
					startSession() {
						return Promise.resolve(void 0);
					}
					sendMessage(J) {
						this.h.handleMessage(J);
					}
					stopSession() {
						return this.h.dispose(), Promise.resolve(void 0);
					}
				}
				let O = class extends w {
					constructor(J, L, b, F, D, M, z, Q) {
						super(J, L, b, F, D, M, z, Q);
					}
				};
				(t.$hid = O),
					(t.$hid = O =
						wt(
							[
								rt(0, y.$08),
								rt(1, k.$m9),
								rt(2, p.$6hd),
								rt(3, $.$phd),
								rt(4, n.$Ehd),
								rt(5, T.$9hd),
								rt(6, u.$8db),
								rt(7, o.$$hd),
							],
							O,
						));
			},
		),
		