import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../contrib/debug/common/debug.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/severity.js';
import '../../contrib/debug/common/abstractDebugAdapter.js';
import '../../contrib/debug/common/debugUtils.js';
import '../../../base/common/errors.js';
import '../../contrib/debug/common/debugVisualizers.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../base/common/event.js';
import '../../../base/common/types.js';
define(
		de[3684],
		he([1, 0, 3, 9, 112, 88, 101, 111, 3048, 396, 29, 1039, 109, 6, 28]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Xmc = void 0),
				(d = xi(d));
			let g = class {
				constructor(f, b, s) {
					(this.k = b),
						(this.m = s),
						(this.b = new t.$Zc()),
						(this.d = 1),
						(this.i = new Map()),
						(this.j = new Map()),
						(this.a = f.getProxy(E.$mbb.ExtHostDebugService));
					const l = new t.$0c();
					this.b.add(l),
						this.b.add(
							b.onDidNewSession(($) => {
								this.a.$acceptDebugSessionStarted(this.getSessionDto($)),
									l.get($).add(
										$.onDidChangeName((S) => {
											this.a.$acceptDebugSessionNameChanged(
												this.getSessionDto($),
												S,
											);
										}),
									);
							}),
						),
						this.b.add(
							b.onWillNewSession(($) => {
								let v = l.get($);
								v || ((v = new t.$Zc()), l.set($, v)),
									v.add(
										$.onDidCustomEvent((S) =>
											this.a.$acceptDebugSessionCustomEvent(
												this.getSessionDto($),
												S,
											),
										),
									);
							}),
						),
						this.b.add(
							b.onDidEndSession(({ session: $, restart: v }) => {
								this.a.$acceptDebugSessionTerminated(this.getSessionDto($)),
									this.h.delete($.getId()),
									v || l.deleteAndDispose($);
								for (const [S, I] of this.c)
									I.session === $ && this.c.delete(S);
							}),
						),
						this.b.add(
							b.getViewModel().onDidFocusSession(($) => {
								this.a.$acceptDebugSessionActiveChanged(this.getSessionDto($));
							}),
						),
						this.b.add(
							(0, t.$Yc)(() => {
								for (const [$, v] of this.c)
									v.fireError($, new Error("Extension host shut down"));
							}),
						),
						(this.c = new Map()),
						(this.f = new Map()),
						(this.g = new Map()),
						(this.h = new Set());
					const y = this.k.getViewModel();
					this.b.add(
						c.Event.any(
							y.onDidFocusStackFrame,
							y.onDidFocusThread,
						)(() => {
							const $ = y.focusedStackFrame,
								v = y.focusedThread;
							$
								? this.a.$acceptStackFrameFocus({
										kind: "stackFrame",
										threadId: $.thread.threadId,
										frameId: $.frameId,
										sessionId: $.thread.session.getId(),
									})
								: v
									? this.a.$acceptStackFrameFocus({
											kind: "thread",
											threadId: v.threadId,
											sessionId: v.session.getId(),
										})
									: this.a.$acceptStackFrameFocus(void 0);
						}),
					),
						this.n();
				}
				$registerDebugVisualizerTree(f, b) {
					this.m.registerTree(f, {
						disposeItem: (s) => this.a.$disposeVisualizedTree(s),
						getChildren: (s) => this.a.$getVisualizerTreeItemChildren(f, s),
						getTreeItem: (s) => this.a.$getVisualizerTreeItem(f, s),
						editItem: b
							? (s, l) => this.a.$editVisualizerTreeItem(s, l)
							: void 0,
					});
				}
				$unregisterDebugVisualizerTree(f) {
					this.j.get(f)?.dispose(), this.j.delete(f);
				}
				$registerDebugVisualizer(f, b) {
					const s = this.m.register({
						extensionId: new h.$Gn(f),
						id: b,
						disposeDebugVisualizers: (l) => this.a.$disposeDebugVisualizers(l),
						executeDebugVisualizerCommand: (l) =>
							this.a.$executeDebugVisualizerCommand(l),
						provideDebugVisualizers: (l, y) =>
							this.a
								.$provideDebugVisualizers(f, b, l, y)
								.then(($) => $.map(w.IDebugVisualization.deserialize)),
						resolveDebugVisualizer: (l, y) =>
							this.a.$resolveDebugVisualizer(l.id, y),
					});
					this.i.set(`${f}/${b}`, s);
				}
				$unregisterDebugVisualizer(f, b) {
					const s = `${f}/${b}`;
					this.i.get(s)?.dispose(), this.i.delete(s);
				}
				n() {
					this.b.add(
						this.k.getModel().onDidChangeBreakpoints((l) => {
							if (l && !l.sessionOnly) {
								const y = {};
								l.added && (y.added = this.q(l.added)),
									l.removed && (y.removed = l.removed.map(($) => $.getId())),
									l.changed && (y.changed = this.q(l.changed)),
									(y.added || y.removed || y.changed) &&
										this.a.$acceptBreakpointsDelta(y);
							}
						}),
					);
					const f = this.k.getModel().getBreakpoints(),
						b = this.k.getModel().getFunctionBreakpoints(),
						s = this.k.getModel().getDataBreakpoints();
					(f.length > 0 || b.length > 0) &&
						this.a.$acceptBreakpointsDelta({
							added: this.q(f).concat(this.q(b)).concat(this.q(s)),
						});
				}
				dispose() {
					this.b.dispose();
				}
				createDebugAdapter(f) {
					const b = this.d++,
						s = new p(this, b, this.a, f);
					return this.c.set(b, s), s;
				}
				substituteVariables(f, b) {
					return Promise.resolve(
						this.a.$substituteVariables(f ? f.uri : void 0, b),
					);
				}
				runInTerminal(f, b) {
					return this.a.$runInTerminal(f, b);
				}
				$registerDebugTypes(f) {
					this.b.add(
						this.k.getAdapterManager().registerDebugAdapterFactory(f, this),
					);
				}
				$registerBreakpoints(f) {
					for (const b of f)
						if (b.type === "sourceMulti") {
							const s = b.lines.map((l) => ({
								id: l.id,
								enabled: l.enabled,
								lineNumber: l.line + 1,
								column: l.character > 0 ? l.character + 1 : void 0,
								condition: l.condition,
								hitCondition: l.hitCondition,
								logMessage: l.logMessage,
								mode: l.mode,
							}));
							this.k.addBreakpoints(i.URI.revive(b.uri), s);
						} else
							b.type === "function"
								? this.k.addFunctionBreakpoint(
										{
											name: b.functionName,
											mode: b.mode,
											condition: b.condition,
											hitCondition: b.hitCondition,
											enabled: b.enabled,
											logMessage: b.logMessage,
										},
										b.id,
									)
								: b.type === "data" &&
									this.k.addDataBreakpoint({
										description: b.label,
										src: {
											type: w.DataBreakpointSetType.Variable,
											dataId: b.dataId,
										},
										canPersist: b.canPersist,
										accessTypes: b.accessTypes,
										accessType: b.accessType,
										mode: b.mode,
									});
					return Promise.resolve();
				}
				$unregisterBreakpoints(f, b, s) {
					return (
						f.forEach((l) => this.k.removeBreakpoints(l)),
						b.forEach((l) => this.k.removeFunctionBreakpoints(l)),
						s.forEach((l) => this.k.removeDataBreakpoints(l)),
						Promise.resolve()
					);
				}
				$registerDebugConfigurationProvider(f, b, s, l, y, $) {
					const v = { type: f, triggerKind: b };
					return (
						s &&
							(v.provideDebugConfigurations = (S, I) =>
								this.a.$provideDebugConfigurations($, S, I)),
						l &&
							(v.resolveDebugConfiguration = (S, I, T) =>
								this.a.$resolveDebugConfiguration($, S, I, T)),
						y &&
							(v.resolveDebugConfigurationWithSubstitutedVariables = (
								S,
								I,
								T,
							) =>
								this.a.$resolveDebugConfigurationWithSubstitutedVariables(
									$,
									S,
									I,
									T,
								)),
						this.f.set($, v),
						this.b.add(
							this.k
								.getConfigurationManager()
								.registerDebugConfigurationProvider(v),
						),
						Promise.resolve(void 0)
					);
				}
				$unregisterDebugConfigurationProvider(f) {
					const b = this.f.get(f);
					b &&
						(this.f.delete(f),
						this.k
							.getConfigurationManager()
							.unregisterDebugConfigurationProvider(b));
				}
				$registerDebugAdapterDescriptorFactory(f, b) {
					const s = {
						type: f,
						createDebugAdapterDescriptor: (l) =>
							Promise.resolve(
								this.a.$provideDebugAdapter(b, this.getSessionDto(l)),
							),
					};
					return (
						this.g.set(b, s),
						this.b.add(
							this.k
								.getAdapterManager()
								.registerDebugAdapterDescriptorFactory(s),
						),
						Promise.resolve(void 0)
					);
				}
				$unregisterDebugAdapterDescriptorFactory(f) {
					const b = this.g.get(f);
					b &&
						(this.g.delete(f),
						this.k
							.getAdapterManager()
							.unregisterDebugAdapterDescriptorFactory(b));
				}
				o(f) {
					if (f) return this.k.getModel().getSession(f, !0);
				}
				async $startDebugging(f, b, s) {
					const l = f ? i.URI.revive(f) : void 0,
						y = this.k.getConfigurationManager().getLaunch(l),
						$ = this.o(s.parentSessionID),
						v =
							typeof s.suppressSaveBeforeStart == "boolean"
								? !s.suppressSaveBeforeStart
								: void 0,
						S = {
							noDebug: s.noDebug,
							parentSession: $,
							lifecycleManagedByParent: s.lifecycleManagedByParent,
							repl: s.repl,
							compact: s.compact,
							compoundRoot: $?.compoundRoot,
							saveBeforeRestart: v,
							testRun: s.testRun,
							suppressDebugStatusbar: s.suppressDebugStatusbar,
							suppressDebugToolbar: s.suppressDebugToolbar,
							suppressDebugView: s.suppressDebugView,
						};
					try {
						return this.k.startDebugging(y, b, S, v);
					} catch (I) {
						throw new u.$fb(
							I && I.message ? I.message : "cannot start debugging",
						);
					}
				}
				$setDebugSessionName(f, b) {
					this.k.getModel().getSession(f)?.setName(b);
				}
				$customDebugAdapterRequest(f, b, s) {
					const l = this.k.getModel().getSession(f, !0);
					return l
						? l
								.customRequest(b, s)
								.then((y) =>
									y && y.success
										? y.body
										: Promise.reject(
												new u.$fb(y ? y.message : "custom request failed"),
											),
								)
						: Promise.reject(new u.$fb("debug session not found"));
				}
				$getDebugProtocolBreakpoint(f, b) {
					const s = this.k.getModel().getSession(f, !0);
					return s
						? Promise.resolve(s.getDebugProtocolBreakpoint(b))
						: Promise.reject(new u.$fb("debug session not found"));
				}
				$stopDebugging(f) {
					if (f) {
						const b = this.k.getModel().getSession(f, !0);
						if (b) return this.k.stopSession(b, (0, r.$n3)(b));
					} else return this.k.stopSession(void 0);
					return Promise.reject(new u.$fb("debug session not found"));
				}
				$appendDebugConsole(f) {
					this.k
						.getViewModel()
						.focusedSession?.appendToRepl({
							output: f,
							sev: d.default.Warning,
						});
				}
				$acceptDAMessage(f, b) {
					this.p(f).acceptMessage((0, r.$u3)(b, !1));
				}
				$acceptDAError(f, b, s, l) {
					this.c.get(f)?.fireError(
						f,
						new Error(`${b}: ${s}
${l}`),
					);
				}
				$acceptDAExit(f, b, s) {
					this.p(f).fireExit(f, b, s);
				}
				p(f) {
					const b = this.c.get(f);
					if (!b) throw new Error("Invalid debug adapter");
					return b;
				}
				$sessionCached(f) {
					this.h.add(f);
				}
				getSessionDto(f) {
					if (f) {
						const b = f.getId();
						return this.h.has(b)
							? b
							: {
									id: b,
									type: f.configuration.type,
									name: f.name,
									folderUri: f.root ? f.root.uri : void 0,
									configuration: f.configuration,
									parent: f.parentSession?.getId(),
								};
					}
				}
				q(f) {
					return f
						.map((b) => {
							if ("name" in b) {
								const s = b;
								return {
									type: "function",
									id: s.getId(),
									enabled: s.enabled,
									condition: s.condition,
									hitCondition: s.hitCondition,
									logMessage: s.logMessage,
									functionName: s.name,
								};
							} else if ("src" in b) {
								const s = b;
								return {
									type: "data",
									id: s.getId(),
									dataId:
										s.src.type === w.DataBreakpointSetType.Variable
											? s.src.dataId
											: s.src.address,
									enabled: s.enabled,
									condition: s.condition,
									hitCondition: s.hitCondition,
									logMessage: s.logMessage,
									accessType: s.accessType,
									label: s.description,
									canPersist: s.canPersist,
								};
							} else if ("uri" in b) {
								const s = b;
								return {
									type: "source",
									id: s.getId(),
									enabled: s.enabled,
									condition: s.condition,
									hitCondition: s.hitCondition,
									logMessage: s.logMessage,
									uri: s.uri,
									line: s.lineNumber > 0 ? s.lineNumber - 1 : 0,
									character:
										typeof s.column == "number" && s.column > 0
											? s.column - 1
											: 0,
								};
							} else return;
						})
						.filter(n.$tg);
				}
			};
			(e.$Xmc = g),
				(e.$Xmc = g =
					Ne(
						[
							(0, C.$tmc)(E.$lbb.MainThreadDebugService),
							j(1, w.$75),
							j(2, a.$D3),
						],
						g,
					));
			class p extends m.$Wmc {
				constructor(f, b, s, l) {
					super(), (this.a = f), (this.b = b), (this.c = s), (this.session = l);
				}
				fireError(f, b) {
					this.n.fire(b);
				}
				fireExit(f, b, s) {
					this.o.fire(b);
				}
				startSession() {
					return Promise.resolve(
						this.c.$startDASession(this.b, this.a.getSessionDto(this.session)),
					);
				}
				sendMessage(f) {
					this.c.$sendDAMessage(this.b, (0, r.$t3)(f, !0));
				}
				async stopSession() {
					return await this.w(), Promise.resolve(this.c.$stopDASession(this.b));
				}
			}
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	