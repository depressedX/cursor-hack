import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/labels.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../common/views.js';
import './rawDebugSession.js';
import '../common/debug.js';
import '../common/debugModel.js';
import '../common/debugSource.js';
import '../common/debugUtils.js';
import '../common/replModel.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/host/browser/host.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/types.js';
import '../../testing/common/testService.js';
import '../../testing/common/testResultService.js';
import '../../../../platform/accessibility/common/accessibility.js';
define(
		de[3685],
		he([
			1, 0, 127, 24, 15, 33, 29, 6, 222, 3, 82, 12, 19, 111, 9, 47, 4, 10, 5,
			34, 40, 62, 32, 68, 25, 60, 3054, 112, 300, 826, 396, 843, 78, 87, 52,
			142, 7, 75, 28, 379, 381, 91,
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
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
			N,
			A,
			R,
			O,
			B,
			U,
			z,
			F,
			x,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$YQc = e.$XQc = void 0),
				(t = mt(t)),
				(a = mt(a)),
				(h = mt(h)),
				(c = xi(c));
			const H = 1500;
			let q = class {
				constructor(
					K,
					J,
					W,
					X,
					Y,
					ie,
					ne,
					ee,
					_,
					te,
					Q,
					Z,
					se,
					re,
					le,
					oe,
					ae,
					pe,
					$e,
					ye,
					ue,
					fe,
				) {
					(this.I = K),
						(this.J = J),
						(this.root = W),
						(this.K = X),
						(this.L = ie),
						(this.M = ne),
						(this.N = ee),
						(this.O = _),
						(this.P = te),
						(this.Q = Q),
						(this.R = Z),
						(this.S = se),
						(this.T = le),
						(this.U = oe),
						(this.V = ae),
						(this.W = pe),
						(this.X = $e),
						(this.Y = ye),
						(this.Z = fe),
						(this.b = !1),
						(this.f = new Map()),
						(this.g = new Map()),
						(this.h = []),
						(this.j = new Map()),
						(this.k = new r.$Zc()),
						(this.l = new r.$Zc()),
						(this.r = []),
						(this.u = this.k.add(new V())),
						(this.w = new d.$re()),
						(this.x = new d.$re()),
						(this.y = new d.$re()),
						(this.z = new d.$re()),
						(this.A = new d.$re()),
						(this.B = new d.$re()),
						(this.C = new d.$re()),
						(this.D = new d.$re()),
						(this.E = new d.$re()),
						(this.G = new d.$re()),
						(this.c = Y || {}),
						(this.parentSession = this.c.parentSession),
						this.hasSeparateRepl()
							? (this.q = new D.$bIc(this.O))
							: (this.q = this.parentSession.q);
					const me = this.l,
						ve = me.add(new r.$2c());
					(ve.value = this.q.onDidChangeElements((Ce) => this.E.fire(Ce))),
						re &&
							me.add(
								re.onWillShutdown(() => {
									this.jb(), (0, r.$Vc)(me);
								}),
							),
						(this.correlatedTestRun = Y?.testRun
							? ue.getResult(Y.testRun.runId)
							: this.parentSession?.correlatedTestRun),
						this.correlatedTestRun &&
							me.add(this.correlatedTestRun.onComplete(() => this.terminate()));
					const ge = this.c.compoundRoot;
					ge && me.add(ge.onDidSessionStop(() => this.terminate())),
						(this.n = new w.$Yh(() => {
							if (
								this.L.getModel()
									.getSessions()
									.some((Ce) => Ce.state === T.State.Stopped) ||
								this.getAllThreads().some((Ce) => Ce.stopped)
							)
								if (typeof this.o == "number") {
									const Ce = this.L.getViewModel().focusedThread;
									if (Ce && Ce.threadId === this.o && !Ce.stopped) {
										const Le = this.getStoppedDetails()?.threadId,
											Fe = typeof Le == "number" ? this.getThread(Le) : void 0;
										this.L.focusStackFrame(void 0, Fe);
									}
								} else {
									const Ce = this.L.getViewModel().focusedSession;
									Ce &&
										Ce.getId() === this.getId() &&
										Ce.state !== T.State.Stopped &&
										this.L.focusStackFrame(void 0);
								}
						}, 800));
					const be = this.c.parentSession;
					be &&
						me.add(
							be.onDidEndAdapter(() => {
								!this.hasSeparateRepl() &&
									this.raw?.isInShutdown === !1 &&
									((this.q = this.q.clone()),
									(ve.value = this.q.onDidChangeElements((Ce) =>
										this.E.fire(Ce),
									)),
									(this.parentSession = void 0));
							}),
						);
				}
				getId() {
					return this.I;
				}
				setSubId(K) {
					this.a = K;
				}
				getMemory(K) {
					return new P.$Q3(K, this);
				}
				get subId() {
					return this.a;
				}
				get configuration() {
					return this.J.resolved;
				}
				get unresolvedConfiguration() {
					return this.J.unresolved;
				}
				get lifecycleManagedByParent() {
					return !!this.c.lifecycleManagedByParent;
				}
				get compact() {
					return !!this.c.compact;
				}
				get saveBeforeRestart() {
					return this.c.saveBeforeRestart ?? !this.c?.parentSession;
				}
				get compoundRoot() {
					return this.c.compoundRoot;
				}
				get suppressDebugStatusbar() {
					return this.c.suppressDebugStatusbar ?? !1;
				}
				get suppressDebugToolbar() {
					return this.c.suppressDebugToolbar ?? !1;
				}
				get suppressDebugView() {
					return this.c.suppressDebugView ?? !1;
				}
				get autoExpandLazyVariables() {
					const K = this.Z.isScreenReaderOptimized(),
						J = this.O.getValue("debug").autoExpandLazyVariables;
					return (J === "auto" && K) || J === "on";
				}
				setConfiguration(K) {
					this.J = K;
				}
				getLabel() {
					return this.Q.getWorkspace().folders.length > 1 && this.root
						? `${this.name} (${h.$jh(this.root.uri)})`
						: this.name;
				}
				setName(K) {
					(this.F = K), this.G.fire(K);
				}
				get name() {
					return this.F || this.configuration.name;
				}
				get state() {
					if (!this.b) return T.State.Initializing;
					if (!this.raw) return T.State.Inactive;
					const K = this.L.getViewModel().focusedThread;
					return K && K.session === this
						? K.stopped
							? T.State.Stopped
							: T.State.Running
						: this.getAllThreads().some((J) => J.stopped)
							? T.State.Stopped
							: T.State.Running;
				}
				get capabilities() {
					return this.raw ? this.raw.capabilities : Object.create(null);
				}
				get onDidChangeState() {
					return this.w.event;
				}
				get onDidEndAdapter() {
					return this.x.event;
				}
				get onDidChangeReplElements() {
					return this.E.event;
				}
				get onDidChangeName() {
					return this.G.event;
				}
				get onDidCustomEvent() {
					return this.z.event;
				}
				get onDidLoadedSource() {
					return this.y.event;
				}
				get onDidProgressStart() {
					return this.A.event;
				}
				get onDidProgressUpdate() {
					return this.B.event;
				}
				get onDidProgressEnd() {
					return this.C.event;
				}
				get onDidInvalidateMemory() {
					return this.D.event;
				}
				async initialize(K) {
					this.raw && (await this.jb());
					try {
						const J = await K.createDebugAdapter(this);
						(this.raw = this.U.createInstance(
							I.$WQc,
							J,
							K,
							this.I,
							this.configuration.name,
						)),
							await this.raw.start(),
							this.db(),
							await this.raw.initialize({
								clientID: "vscode",
								clientName: this.R.nameLong,
								adapterID: this.configuration.type,
								pathFormat: "path",
								linesStartAt1: !0,
								columnsStartAt1: !0,
								supportsVariableType: !0,
								supportsVariablePaging: !0,
								supportsRunInTerminalRequest: !0,
								locale: a.$z,
								supportsProgressReporting: !0,
								supportsInvalidatedEvent: !0,
								supportsMemoryReferences: !0,
								supportsArgsCanBeInterpretedByShell: !0,
								supportsMemoryEvent: !0,
								supportsStartDebuggingRequest: !0,
							}),
							(this.b = !0),
							this.w.fire(),
							this.L.setExceptionBreakpointsForSession(
								this,
								(this.raw &&
									this.raw.capabilities.exceptionBreakpointFilters) ||
									[],
							),
							this.L.getModel().registerBreakpointModes(
								this.configuration.type,
								this.raw.capabilities.breakpointModes || [],
							);
					} catch (J) {
						throw ((this.b = !0), this.w.fire(), await this.jb(), J);
					}
				}
				async launchOrAttach(K) {
					if (!this.raw)
						throw new Error((0, p.localize)(5589, null, "launch or attach"));
					if (
						this.parentSession &&
						this.parentSession.state === T.State.Inactive
					)
						throw (0, C.$0)();
					K.__sessionId = this.getId();
					try {
						await this.raw.launchOrAttach(K);
					} catch (J) {
						throw (this.jb(), J);
					}
				}
				async terminate(K = !1) {
					this.raw || this.hb(),
						this.mb(),
						this.c.lifecycleManagedByParent && this.parentSession
							? await this.parentSession.terminate(K)
							: this.correlatedTestRun &&
									!this.correlatedTestRun.completedAt &&
									!this.v
								? ((this.v = !0),
									this.Y.cancelTestRun(this.correlatedTestRun.id))
								: this.raw &&
									(this.raw.capabilities.supportsTerminateRequest &&
									this.J.resolved.request === "launch"
										? await this.raw.terminate(K)
										: await this.raw.disconnect({
												restart: K,
												terminateDebuggee: !0,
											})),
						K || this.c.compoundRoot?.sessionStopped();
				}
				async disconnect(K = !1, J = !1) {
					this.raw || this.hb(),
						this.mb(),
						this.c.lifecycleManagedByParent && this.parentSession
							? await this.parentSession.disconnect(K, J)
							: this.raw &&
								(await this.raw.disconnect({
									restart: K,
									terminateDebuggee: !1,
									suspendDebuggee: J,
								})),
						K || this.c.compoundRoot?.sessionStopped();
				}
				async restart() {
					if (!this.raw)
						throw new Error((0, p.localize)(5590, null, "restart"));
					this.mb(),
						this.c.lifecycleManagedByParent && this.parentSession
							? await this.parentSession.restart()
							: await this.raw.restart({ arguments: this.configuration });
				}
				async sendBreakpoints(K, J, W) {
					if (!this.raw)
						throw new Error((0, p.localize)(5591, null, "breakpoints"));
					if (!this.raw.readyForBreakpoints) return Promise.resolve(void 0);
					const X = this.kb(K);
					J.length && !X.adapterData && (X.adapterData = J[0].adapterData),
						X.path && (X.path = (0, m.$xO)(X.path));
					const Y = await this.raw.setBreakpoints({
						source: X,
						lines: J.map((ie) => ie.sessionAgnosticData.lineNumber),
						breakpoints: J.map((ie) => ie.toDAP()),
						sourceModified: W,
					});
					if (Y?.body) {
						const ie = new Map();
						for (let ne = 0; ne < J.length; ne++)
							ie.set(J[ne].getId(), Y.body.breakpoints[ne]);
						this.K.setBreakpointSessionData(
							this.getId(),
							this.capabilities,
							ie,
						);
					}
				}
				async sendFunctionBreakpoints(K) {
					if (!this.raw)
						throw new Error(
							(0, p.localize)(5592, null, "function breakpoints"),
						);
					if (this.raw.readyForBreakpoints) {
						const J = await this.raw.setFunctionBreakpoints({
							breakpoints: K.map((W) => W.toDAP()),
						});
						if (J?.body) {
							const W = new Map();
							for (let X = 0; X < K.length; X++)
								W.set(K[X].getId(), J.body.breakpoints[X]);
							this.K.setBreakpointSessionData(
								this.getId(),
								this.capabilities,
								W,
							);
						}
					}
				}
				async sendExceptionBreakpoints(K) {
					if (!this.raw)
						throw new Error(
							(0, p.localize)(5593, null, "exception breakpoints"),
						);
					if (this.raw.readyForBreakpoints) {
						const J = this.capabilities.supportsExceptionFilterOptions
								? {
										filters: [],
										filterOptions: K.map((X) =>
											X.condition
												? { filterId: X.filter, condition: X.condition }
												: { filterId: X.filter },
										),
									}
								: { filters: K.map((X) => X.filter) },
							W = await this.raw.setExceptionBreakpoints(J);
						if (W?.body && W.body.breakpoints) {
							const X = new Map();
							for (let Y = 0; Y < K.length; Y++)
								X.set(K[Y].getId(), W.body.breakpoints[Y]);
							this.K.setBreakpointSessionData(
								this.getId(),
								this.capabilities,
								X,
							);
						}
					}
				}
				dataBytesBreakpointInfo(K, J) {
					if (this.raw?.capabilities.supportsDataBreakpointBytes === !1)
						throw new Error((0, p.localize)(5594, null));
					return this.$({ name: K, bytes: J, asAddress: !0 });
				}
				dataBreakpointInfo(K, J) {
					return this.$({ name: K, variablesReference: J });
				}
				async $(K) {
					if (!this.raw)
						throw new Error(
							(0, p.localize)(5595, null, "data breakpoints info"),
						);
					if (!this.raw.readyForBreakpoints)
						throw new Error((0, p.localize)(5596, null));
					return (await this.raw.dataBreakpointInfo(K))?.body;
				}
				async sendDataBreakpoints(K) {
					if (!this.raw)
						throw new Error((0, p.localize)(5597, null, "data breakpoints"));
					if (this.raw.readyForBreakpoints) {
						const J = await Promise.all(
								K.map(async (X) => {
									try {
										return { dap: await X.toDAP(this), bp: X };
									} catch (Y) {
										return { bp: X, message: Y.message };
									}
								}),
							),
							W = await this.raw.setDataBreakpoints({
								breakpoints: J.map((X) => X.dap).filter(U.$tg),
							});
						if (W?.body) {
							const X = new Map();
							let Y = 0;
							for (const ie of J)
								ie.dap
									? Y < W.body.breakpoints.length &&
										X.set(ie.bp.getId(), W.body.breakpoints[Y++])
									: X.set(ie.bp.getId(), ie.message);
							this.K.setBreakpointSessionData(
								this.getId(),
								this.capabilities,
								X,
							);
						}
					}
				}
				async sendInstructionBreakpoints(K) {
					if (!this.raw)
						throw new Error(
							(0, p.localize)(5598, null, "instruction breakpoints"),
						);
					if (this.raw.readyForBreakpoints) {
						const J = await this.raw.setInstructionBreakpoints({
							breakpoints: K.map((W) => W.toDAP()),
						});
						if (J?.body) {
							const W = new Map();
							for (let X = 0; X < K.length; X++)
								W.set(K[X].getId(), J.body.breakpoints[X]);
							this.K.setBreakpointSessionData(
								this.getId(),
								this.capabilities,
								W,
							);
						}
					}
				}
				async breakpointsLocations(K, J) {
					if (!this.raw)
						throw new Error(
							(0, p.localize)(5599, null, "breakpoints locations"),
						);
					const W = this.kb(K),
						X = await this.raw.breakpointLocations({ source: W, line: J });
					if (!X || !X.body || !X.body.breakpoints) return [];
					const Y = X.body.breakpoints.map((ie) => ({
						lineNumber: ie.line,
						column: ie.column || 1,
					}));
					return (0, i.$Qb)(Y, (ie) => `${ie.lineNumber}:${ie.column}`);
				}
				getDebugProtocolBreakpoint(K) {
					return this.K.getDebugProtocolBreakpoint(K, this.getId());
				}
				customRequest(K, J) {
					if (!this.raw) throw new Error((0, p.localize)(5600, null, K));
					return this.raw.custom(K, J);
				}
				stackTrace(K, J, W, X) {
					if (!this.raw)
						throw new Error((0, p.localize)(5601, null, "stackTrace"));
					const Y = this.lb(K, X);
					return this.raw.stackTrace(
						{ threadId: K, startFrame: J, levels: W },
						Y,
					);
				}
				async exceptionInfo(K) {
					if (!this.raw)
						throw new Error((0, p.localize)(5602, null, "exceptionInfo"));
					const J = await this.raw.exceptionInfo({ threadId: K });
					if (J)
						return {
							id: J.body.exceptionId,
							description: J.body.description,
							breakMode: J.body.breakMode,
							details: J.body.details,
						};
				}
				scopes(K, J) {
					if (!this.raw) throw new Error((0, p.localize)(5603, null, "scopes"));
					const W = this.lb(J);
					return this.raw.scopes({ frameId: K }, W);
				}
				variables(K, J, W, X, Y) {
					if (!this.raw)
						throw new Error((0, p.localize)(5604, null, "variables"));
					const ie = J ? this.lb(J) : void 0;
					return this.raw.variables(
						{ variablesReference: K, filter: W, start: X, count: Y },
						ie,
					);
				}
				evaluate(K, J, W, X) {
					if (!this.raw)
						throw new Error((0, p.localize)(5605, null, "evaluate"));
					return this.raw.evaluate({
						expression: K,
						frameId: J,
						context: W,
						line: X?.line,
						column: X?.column,
						source: X?.source,
					});
				}
				async restartFrame(K, J) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5606, null, "restartFrame"));
					await this.raw.restartFrame({ frameId: K }, J);
				}
				ab(K, J) {
					const W = this.getThread(K);
					W && (W.lastSteppingGranularity = J);
				}
				async next(K, J) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5607, null, "next"));
					this.ab(K, J), await this.raw.next({ threadId: K, granularity: J });
				}
				async stepIn(K, J, W) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5608, null, "stepIn"));
					this.ab(K, W),
						await this.raw.stepIn({ threadId: K, targetId: J, granularity: W });
				}
				async stepOut(K, J) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5609, null, "stepOut"));
					this.ab(K, J),
						await this.raw.stepOut({ threadId: K, granularity: J });
				}
				async stepBack(K, J) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5610, null, "stepBack"));
					this.ab(K, J),
						await this.raw.stepBack({ threadId: K, granularity: J });
				}
				async continue(K) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5611, null, "continue"));
					await this.raw.continue({ threadId: K });
				}
				async reverseContinue(K) {
					if ((await this.bb(), !this.raw))
						throw new Error((0, p.localize)(5612, null, "reverse continue"));
					await this.raw.reverseContinue({ threadId: K });
				}
				async pause(K) {
					if (!this.raw) throw new Error((0, p.localize)(5613, null, "pause"));
					await this.raw.pause({ threadId: K });
				}
				async terminateThreads(K) {
					if (!this.raw)
						throw new Error((0, p.localize)(5614, null, "terminateThreads"));
					await this.raw.terminateThreads({ threadIds: K });
				}
				setVariable(K, J, W) {
					if (!this.raw)
						throw new Error((0, p.localize)(5615, null, "setVariable"));
					return this.raw.setVariable({
						variablesReference: K,
						name: J,
						value: W,
					});
				}
				setExpression(K, J, W) {
					if (!this.raw)
						throw new Error((0, p.localize)(5616, null, "setExpression"));
					return this.raw.setExpression({
						expression: J,
						value: W,
						frameId: K,
					});
				}
				gotoTargets(K, J, W) {
					if (!this.raw)
						throw new Error((0, p.localize)(5617, null, "gotoTargets"));
					return this.raw.gotoTargets({ source: K, line: J, column: W });
				}
				goto(K, J) {
					if (!this.raw) throw new Error((0, p.localize)(5618, null, "goto"));
					return this.raw.goto({ threadId: K, targetId: J });
				}
				loadSource(K) {
					if (!this.raw)
						return Promise.reject(
							new Error((0, p.localize)(5619, null, "loadSource")),
						);
					const J = this.getSourceForUri(K);
					let W;
					if (J) W = J.raw;
					else {
						const X = k.$z3.getEncodedDebugData(K);
						W = { path: X.path, sourceReference: X.sourceReference };
					}
					return this.raw.source({
						sourceReference: W.sourceReference || 0,
						source: W,
					});
				}
				async getLoadedSources() {
					if (!this.raw)
						return Promise.reject(
							new Error((0, p.localize)(5620, null, "getLoadedSources")),
						);
					const K = await this.raw.loadedSources({});
					return K?.body && K.body.sources
						? K.body.sources.map((J) => this.getSource(J))
						: [];
				}
				async completions(K, J, W, X, Y, ie) {
					if (!this.raw)
						return Promise.reject(
							new Error((0, p.localize)(5621, null, "completions")),
						);
					const ne = this.lb(J, ie);
					return this.raw.completions(
						{ frameId: K, text: W, column: X.column, line: X.lineNumber },
						ne,
					);
				}
				async stepInTargets(K) {
					return this.raw
						? (await this.raw.stepInTargets({ frameId: K }))?.body.targets
						: Promise.reject(
								new Error((0, p.localize)(5622, null, "stepInTargets")),
							);
				}
				async cancel(K) {
					return this.raw
						? this.raw.cancel({ progressId: K })
						: Promise.reject(new Error((0, p.localize)(5623, null, "cancel")));
				}
				async disassemble(K, J, W, X) {
					return this.raw
						? (
								await this.raw.disassemble({
									memoryReference: K,
									offset: J,
									instructionOffset: W,
									instructionCount: X,
									resolveSymbols: !0,
								})
							)?.body?.instructions
						: Promise.reject(
								new Error((0, p.localize)(5624, null, "disassemble")),
							);
				}
				readMemory(K, J, W) {
					return this.raw
						? this.raw.readMemory({ count: W, memoryReference: K, offset: J })
						: Promise.reject(
								new Error((0, p.localize)(5625, null, "readMemory")),
							);
				}
				writeMemory(K, J, W, X) {
					return this.raw
						? this.raw.writeMemory({
								memoryReference: K,
								offset: J,
								allowPartial: X,
								data: W,
							})
						: Promise.reject(
								new Error((0, p.localize)(5626, null, "disassemble")),
							);
				}
				async resolveLocationReference(K) {
					if (!this.raw)
						throw new Error((0, p.localize)(5627, null, "locations"));
					const J = await this.raw.locations({ locationReference: K });
					if (!J?.body)
						throw new Error((0, p.localize)(5628, null, "locations"));
					const W = this.getSource(J.body.source);
					return { column: 1, ...J.body, source: W };
				}
				getThread(K) {
					return this.g.get(K);
				}
				getAllThreads() {
					const K = [];
					return (
						this.h.forEach((J) => {
							const W = this.g.get(J);
							W && K.push(W);
						}),
						K
					);
				}
				clearThreads(K, J = void 0) {
					if (J != null) {
						const W = this.g.get(J);
						W &&
							(W.clearCallStack(),
							(W.stoppedDetails = void 0),
							(W.stopped = !1),
							K && this.g.delete(J));
					} else
						this.g.forEach((W) => {
							W.clearCallStack(), (W.stoppedDetails = void 0), (W.stopped = !1);
						}),
							K && (this.g.clear(), (this.h = []), P.$H3.allValues.clear());
				}
				getStoppedDetails() {
					return this.r.length >= 1 ? this.r[0] : void 0;
				}
				rawUpdate(K) {
					(this.h = []),
						K.threads.forEach((W) => {
							if ((this.h.push(W.id), !this.g.has(W.id)))
								this.g.set(W.id, new P.$O3(this, W.name, W.id));
							else if (W.name) {
								const X = this.g.get(W.id);
								X && (X.name = W.name);
							}
						}),
						this.g.forEach((W) => {
							this.h.indexOf(W.threadId) === -1 && this.g.delete(W.threadId);
						});
					const J = K.stoppedDetails;
					if (J)
						if (J.allThreadsStopped)
							this.g.forEach((W) => {
								(W.stoppedDetails =
									W.threadId === J.threadId
										? J
										: { reason: W.stoppedDetails?.reason }),
									(W.stopped = !0),
									W.clearCallStack();
							});
						else {
							const W =
								typeof J.threadId == "number" ? this.g.get(J.threadId) : void 0;
							W &&
								((W.stoppedDetails = J), W.clearCallStack(), (W.stopped = !0));
						}
				}
				bb() {
					if (this.H) return (0, w.$Dh)(this.H, H);
				}
				async cb(K) {
					if (this.raw) {
						const J = await this.raw.threads();
						J?.body &&
							J.body.threads &&
							this.K.rawUpdate({
								sessionId: this.getId(),
								threads: J.body.threads,
								stoppedDetails: K,
							});
					}
				}
				initializeForTest(K) {
					(this.raw = K), this.db();
				}
				db() {
					if (!this.raw) return;
					this.k.add(
						this.raw.onDidInitialize(async () => {
							t.$pib(
								this.configuration.noDebug
									? (0, p.localize)(5629, null)
									: (0, p.localize)(5630, null),
							);
							const W = async () => {
								if (
									this.raw &&
									this.raw.capabilities.supportsConfigurationDoneRequest
								)
									try {
										await this.raw.configurationDone();
									} catch (X) {
										this.S.error(X), this.raw?.disconnect({});
									}
							};
							try {
								await this.L.sendAllBreakpoints(this);
							} finally {
								await W(), await this.cb();
							}
						}),
					);
					const K = this.u;
					this.k.add(this.raw.onDidStop((W) => this.eb(W.body))),
						this.k.add(
							this.raw.onDidThread((W) => {
								if ((K.cancel([W.body.threadId]), W.body.reason === "started"))
									this.m ||
										((this.m = new w.$Yh(() => {
											this.cb();
										}, 100)),
										this.k.add(this.m)),
										this.m.isScheduled() || this.m.schedule();
								else if (W.body.reason === "exited") {
									this.K.clearThreads(this.getId(), !0, W.body.threadId);
									const X = this.L.getViewModel(),
										Y = X.focusedThread;
									this.n.cancel(),
										Y &&
											W.body.threadId === Y.threadId &&
											this.L.focusStackFrame(void 0, void 0, X.focusedSession, {
												explicit: !1,
											});
								}
							}),
						),
						this.k.add(
							this.raw.onDidTerminateDebugee(async (W) => {
								t.$pib((0, p.localize)(5631, null)),
									W.body && W.body.restart
										? await this.L.restartSession(this, W.body.restart)
										: this.raw &&
											(await this.raw.disconnect({ terminateDebuggee: !1 }));
							}),
						),
						this.k.add(
							this.raw.onDidContinued((W) => {
								const X = W.body.allThreadsContinued !== !1;
								K.cancel(X ? void 0 : [W.body.threadId]);
								const Y = X ? void 0 : W.body.threadId;
								if (typeof Y == "number") {
									this.r = this.r.filter((ne) => ne.threadId !== Y);
									const ie = this.j.get(Y);
									this.j.delete(Y), ie?.forEach((ne) => ne.dispose(!0));
								} else (this.r = []), this.mb();
								(this.o = Y),
									this.n.schedule(),
									this.K.clearThreads(this.getId(), !1, Y),
									this.w.fire();
							}),
						);
					const J = new w.$Th();
					this.k.add(
						this.raw.onDidOutput(async (W) => {
							const X =
								W.body.category === "stderr"
									? c.default.Error
									: W.body.category === "console"
										? c.default.Warning
										: c.default.Info;
							if (W.body.variablesReference) {
								const Y =
										W.body.source && W.body.line
											? {
													lineNumber: W.body.line,
													column: W.body.column ? W.body.column : 1,
													source: this.getSource(W.body.source),
												}
											: void 0,
									ne = new P.$H3(
										this,
										void 0,
										W.body.variablesReference,
										(0, g.$9g)(),
									).getChildren();
								J.queue(async () => {
									const ee = await ne;
									if (ee.length === 1) {
										this.appendToRepl(
											{
												output: W.body.output,
												expression: ee[0],
												sev: X,
												source: Y,
											},
											W.body.category === "important",
										);
										return;
									}
									ee.forEach((_) => {
										(_.name = null),
											this.appendToRepl(
												{ output: "", expression: _, sev: X, source: Y },
												W.body.category === "important",
											);
									});
								});
								return;
							}
							J.queue(async () => {
								if (!W.body || !this.raw) return;
								if (W.body.category === "telemetry") {
									const ie = this.raw.dbgr.getCustomTelemetryEndpoint();
									if (ie && this.M.telemetryLevel !== y.TelemetryLevel.NONE) {
										let ne = W.body.data;
										!ie.sendErrorTelemetry &&
											W.body.data &&
											(ne = (0, L.$m3)(W.body.data)),
											this.V.publicLog(ie, W.body.output, ne);
									}
									return;
								}
								const Y =
									W.body.source && W.body.line
										? {
												lineNumber: W.body.line,
												column: W.body.column ? W.body.column : 1,
												source: this.getSource(W.body.source),
											}
										: void 0;
								if (
									W.body.group === "start" ||
									W.body.group === "startCollapsed"
								) {
									const ie = W.body.group === "start";
									this.q.startGroup(W.body.output || "", ie, Y);
									return;
								}
								(W.body.group === "end" &&
									(this.q.endGroup(), !W.body.output)) ||
									(typeof W.body.output == "string" &&
										this.appendToRepl(
											{ output: W.body.output, sev: X, source: Y },
											W.body.category === "important",
										));
							});
						}),
					),
						this.k.add(
							this.raw.onDidBreakpoint((W) => {
								const X =
										W.body && W.body.breakpoint ? W.body.breakpoint.id : void 0,
									Y = this.K.getBreakpoints().find(
										(_) => _.getIdFromAdapter(this.getId()) === X,
									),
									ie = this.K.getFunctionBreakpoints().find(
										(_) => _.getIdFromAdapter(this.getId()) === X,
									),
									ne = this.K.getDataBreakpoints().find(
										(_) => _.getIdFromAdapter(this.getId()) === X,
									),
									ee = this.K.getExceptionBreakpoints().find(
										(_) => _.getIdFromAdapter(this.getId()) === X,
									);
								if (
									W.body.reason === "new" &&
									W.body.breakpoint.source &&
									W.body.breakpoint.line
								) {
									const _ = this.getSource(W.body.breakpoint.source),
										te = this.K.addBreakpoints(
											_.uri,
											[
												{
													column: W.body.breakpoint.column,
													enabled: !0,
													lineNumber: W.body.breakpoint.line,
												},
											],
											!1,
										);
									if (te.length === 1) {
										const Q = new Map([[te[0].getId(), W.body.breakpoint]]);
										this.K.setBreakpointSessionData(
											this.getId(),
											this.capabilities,
											Q,
										);
									}
								}
								if (
									(W.body.reason === "removed" &&
										(Y && this.K.removeBreakpoints([Y]),
										ie && this.K.removeFunctionBreakpoints(ie.getId()),
										ne && this.K.removeDataBreakpoints(ne.getId())),
									W.body.reason === "changed")
								) {
									if (Y) {
										Y.column || (W.body.breakpoint.column = void 0);
										const _ = new Map([[Y.getId(), W.body.breakpoint]]);
										this.K.setBreakpointSessionData(
											this.getId(),
											this.capabilities,
											_,
										);
									}
									if (ie) {
										const _ = new Map([[ie.getId(), W.body.breakpoint]]);
										this.K.setBreakpointSessionData(
											this.getId(),
											this.capabilities,
											_,
										);
									}
									if (ne) {
										const _ = new Map([[ne.getId(), W.body.breakpoint]]);
										this.K.setBreakpointSessionData(
											this.getId(),
											this.capabilities,
											_,
										);
									}
									if (ee) {
										const _ = new Map([[ee.getId(), W.body.breakpoint]]);
										this.K.setBreakpointSessionData(
											this.getId(),
											this.capabilities,
											_,
										);
									}
								}
							}),
						),
						this.k.add(
							this.raw.onDidLoadedSource((W) => {
								this.y.fire({
									reason: W.body.reason,
									source: this.getSource(W.body.source),
								});
							}),
						),
						this.k.add(
							this.raw.onDidCustomEvent((W) => {
								this.z.fire(W);
							}),
						),
						this.k.add(
							this.raw.onDidProgressStart((W) => {
								this.A.fire(W);
							}),
						),
						this.k.add(
							this.raw.onDidProgressUpdate((W) => {
								this.B.fire(W);
							}),
						),
						this.k.add(
							this.raw.onDidProgressEnd((W) => {
								this.C.fire(W);
							}),
						),
						this.k.add(
							this.raw.onDidInvalidateMemory((W) => {
								this.D.fire(W);
							}),
						),
						this.k.add(
							this.raw.onDidInvalidated(async (W) => {
								const X = W.body.areas || ["all"];
								if (
									X.includes("threads") ||
									X.includes("stacks") ||
									X.includes("all")
								) {
									this.mb(), this.K.clearThreads(this.getId(), !0);
									const ie = this.r;
									(this.r.length = 1),
										await Promise.all(ie.map((ne) => this.eb(ne)));
								}
								const Y = this.L.getViewModel();
								Y.focusedSession === this && Y.updateViews();
							}),
						),
						this.k.add(this.raw.onDidExitAdapter((W) => this.hb(W)));
				}
				async eb(K) {
					this.n.cancel(),
						this.r.push(K),
						K.hitBreakpointIds && (this.H = this.fb(K.hitBreakpointIds)),
						this.u.run(
							this.cb(K).then(() =>
								K.threadId === void 0 ? this.h : [K.threadId],
							),
							async (J, W) => {
								const X = K.threadId === void 0 && this.h.length > 10,
									Y = this.L.getViewModel().focusedThread,
									ie =
										Y !== void 0 &&
										Y.session === this &&
										!this.g.has(Y.threadId);
								ie && this.L.focusStackFrame(void 0, void 0);
								const ne = typeof J == "number" ? this.getThread(J) : void 0;
								if (ne) {
									const ee = this.K.refreshTopOfCallstack(ne, !X),
										_ = async () => {
											if (
												!this.L.getIsRecording() &&
												(ie ||
													(!K.preserveFocusHint && ne.getCallStack().length))
											) {
												const Q = this.L.getViewModel().focusedStackFrame;
												if (!Q || Q.thread.session === this) {
													const Z =
														!this.O.getValue("debug").focusEditorOnBreak;
													await this.L.focusStackFrame(void 0, ne, void 0, {
														preserveFocus: Z,
													});
												}
												ne.stoppedDetails &&
													!W.isCancellationRequested &&
													(ne.stoppedDetails.reason === "breakpoint" &&
														this.O.getValue("debug").openDebug ===
															"openOnDebugBreak" &&
														!this.suppressDebugView &&
														(await this.P.openPaneComposite(
															T.$Q4,
															S.ViewContainerLocation.Sidebar,
														)),
													this.O.getValue("debug").focusWindowOnBreak &&
														!this.W.extensionTestsLocationURI &&
														((0, O.$Ogb)().document.hasFocus() ||
															(await this.N.focus(B.$Bfb, { force: !0 }))));
											}
										};
									if (
										(await ee.topCallStack,
										K.hitBreakpointIds || (this.H = this.fb(ne)),
										W.isCancellationRequested ||
											(_(), await ee.wholeCallStack, W.isCancellationRequested))
									)
										return;
									const te = this.L.getViewModel().focusedStackFrame;
									(!te || (0, T.$65)(te)) && _();
								}
								this.w.fire();
							},
						);
				}
				async fb(K) {
					let J;
					if (Array.isArray(K))
						J = this.K.getBreakpoints().filter((Y) =>
							K.includes(Y.getIdFromAdapter(this.I)),
						);
					else {
						const Y = K.getTopStackFrame();
						if (
							Y === void 0 ||
							(K.stoppedDetails && K.stoppedDetails.reason !== "breakpoint")
						)
							return;
						J = this.gb(
							Y.source.uri,
							Y.range.startLineNumber,
							Y.range.endLineNumber,
							Y.range.startColumn,
							Y.range.endColumn,
						);
					}
					const W = new Set();
					this.K.getBreakpoints({ triggeredOnly: !0, enabledOnly: !0 }).forEach(
						(Y) => {
							J.forEach((ie) => {
								Y.enabled &&
									Y.triggeredBy === ie.getId() &&
									(Y.setSessionDidTrigger(this.getId()),
									W.add(Y.uri.toString()));
							});
						},
					);
					const X = [];
					return (
						W.forEach((Y) =>
							X.push(this.L.sendBreakpoints(n.URI.parse(Y), void 0, this)),
						),
						Promise.all(X)
					);
				}
				gb(K, J, W, X, Y) {
					return this.K.getBreakpoints({ uri: K }).filter(
						(ie) =>
							!(
								ie.lineNumber < J ||
								ie.lineNumber > W ||
								(ie.column && (ie.column < X || ie.column > Y))
							),
					);
				}
				hb(K) {
					(this.b = !0),
						this.K.setBreakpointSessionData(
							this.getId(),
							this.capabilities,
							void 0,
						),
						this.jb(),
						this.x.fire(K);
				}
				jb() {
					this.k.clear(),
						this.raw &&
							(this.raw.disconnect({}),
							this.raw.dispose(),
							(this.raw = void 0)),
						this.m?.dispose(),
						(this.m = void 0),
						this.n.cancel(),
						this.n.dispose(),
						this.K.clearThreads(this.getId(), !0),
						this.w.fire();
				}
				dispose() {
					this.mb(), this.k.dispose(), this.l.dispose();
				}
				getSourceForUri(K) {
					return this.f.get(this.T.asCanonicalUri(K).toString());
				}
				getSource(K) {
					let J = new k.$z3(K, this.getId(), this.T, this.X);
					const W = J.uri.toString(),
						X = this.f.get(W);
					return (
						X
							? ((J = X),
								(J.raw = (0, u.$yo)(J.raw, K)),
								J.raw && K && (J.raw.presentationHint = K.presentationHint))
							: this.f.set(W, J),
						J
					);
				}
				kb(K) {
					const J = this.getSourceForUri(K);
					if (J) return J.raw;
					{
						const W = k.$z3.getEncodedDebugData(K);
						return {
							name: W.name,
							path: W.path,
							sourceReference: W.sourceReference,
						};
					}
				}
				lb(K, J) {
					const W = new E.$Ce(J),
						X = this.j.get(K) || [];
					return X.push(W), this.j.set(K, X), W.token;
				}
				mb() {
					this.j.forEach((K) => K.forEach((J) => J.dispose(!0))),
						this.j.clear();
				}
				getReplElements() {
					return this.q.getReplElements();
				}
				hasSeparateRepl() {
					return !this.parentSession || this.c.repl !== "mergeWithParent";
				}
				removeReplExpressions() {
					this.q.removeReplExpressions();
				}
				async addReplExpression(K, J) {
					await this.q.addReplExpression(this, K, J),
						this.L.getViewModel().updateViews();
				}
				appendToRepl(K, J) {
					this.q.appendToRepl(this, K),
						J &&
							this.S.notify({
								message: K.output.toString(),
								severity: K.sev,
								source: this.name,
							});
				}
			};
			(e.$XQc = q),
				(e.$XQc = q =
					Ne(
						[
							j(5, T.$75),
							j(6, y.$km),
							j(7, N.$asb),
							j(8, o.$gj),
							j(9, R.$6Sb),
							j(10, v.$Vi),
							j(11, l.$Bk),
							j(12, s.$4N),
							j(13, A.$n6),
							j(14, $.$Vl),
							j(15, f.$Li),
							j(16, y.$nm),
							j(17, M.$r8),
							j(18, b.$ik),
							j(19, z.$sqc),
							j(20, F.$Kqc),
							j(21, x.$XK),
						],
						q,
					));
			class V extends r.$1c {
				constructor() {
					super(...arguments), (this.a = []), (this.b = this.D(new r.$0c()));
				}
				async run(K, J) {
					const W = new Set();
					this.a.push(W);
					const X = await K;
					for (let Y = 0; Y < this.a.length; Y++) {
						const ie = this.a[Y];
						if (ie === W) {
							this.a.splice(Y, 1);
							break;
						} else for (const ne of X) ie.add(ne);
					}
					W.has(void 0) ||
						(await Promise.all(
							X.map((Y) => {
								if (W.has(Y)) return;
								this.b.get(Y)?.cancel();
								const ie = new E.$Ce();
								return this.b.set(Y, ie), J(Y, ie.token);
							}),
						));
				}
				cancel(K) {
					if (K)
						for (const J of K) {
							this.b.get(J)?.cancel(), this.b.deleteAndDispose(J);
							for (const W of this.a) W.add(J);
						}
					else {
						for (const [J, W] of this.b) W.cancel();
						this.b.clearAndDisposeAll();
						for (const J of this.a) J.add(void 0);
					}
				}
			}
			e.$YQc = V;
		},
	),
		