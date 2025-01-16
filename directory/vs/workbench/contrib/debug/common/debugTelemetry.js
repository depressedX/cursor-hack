define(de[3053], he([1, 0, 32]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1Qc = void 0);
			let i = class {
				constructor(E, C) {
					(this.a = E), (this.b = C);
				}
				logDebugSessionStart(E, C) {
					const d = E.getMainExtensionDescriptor();
					this.b.publicLog("debugSessionStart", {
						type: E.type,
						breakpointCount: this.a.getBreakpoints().length,
						exceptionBreakpoints: this.a.getExceptionBreakpoints(),
						watchExpressionsCount: this.a.getWatchExpressions().length,
						extensionName: d.identifier.value,
						isBuiltin: d.isBuiltin,
						launchJsonExists: C,
					});
				}
				logDebugSessionStop(E, C) {
					const d = this.a.getBreakpoints();
					this.b.publicLog("debugSessionStop", {
						type: E && E.configuration.type,
						success: C.emittedStopped || d.length === 0,
						sessionLengthInSeconds: C.sessionLengthInSeconds,
						breakpointCount: d.length,
						watchExpressionsCount: this.a.getWatchExpressions().length,
					});
				}
			};
			(e.$1Qc = i), (e.$1Qc = i = Ne([j(1, t.$km)], i));
		}),
		define(
			de[396],
			he([1, 0, 37, 9, 54, 82, 23, 17, 33, 24]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$x3 = void 0),
					(e.$l3 = a),
					(e.$m3 = h),
					(e.$n3 = c),
					(e.$o3 = n),
					(e.$p3 = g),
					(e.$q3 = p),
					(e.$r3 = o),
					(e.$s3 = b),
					(e.$t3 = y),
					(e.$u3 = $),
					(e.$v3 = S),
					(e.$w3 = T);
				const u = /{([^}]+)}/g;
				function a(k, L, D) {
					return k.replace(u, function (M, N) {
						return L && N.length > 0 && N[0] !== "_"
							? M
							: D && D.hasOwnProperty(N)
								? D[N]
								: M;
					});
				}
				function h(k) {
					const L = {};
					for (const D of Object.keys(k)) D.startsWith("!") || (L[D] = k[D]);
					return L;
				}
				function c(k) {
					return (
						k.configuration.request === "attach" &&
						!n(k) &&
						(!k.parentSession || c(k.parentSession))
					);
				}
				function n(k) {
					let L = k.configuration.type;
					if (L)
						return (
							L === "vslsShare" &&
								(L = k.configuration.adapterProxy.configuration.type),
							(0, t.$Mf)(L, "extensionhost") ||
							(0, t.$Mf)(L, "pwa-extensionhost")
								? k
								: k.parentSession
									? n(k.parentSession)
									: void 0
						);
				}
				function g(k) {
					return k.type && (k.label || k.program || k.runtime);
				}
				function p(k, L, D) {
					let M,
						N = 0;
					const A = /([^()\[\]{}<>\s+\-/%~#^;=|,`!]|\->)+/g;
					let R = null;
					for (; (R = A.exec(k)); ) {
						const O = R.index + 1,
							B = O + R[0].length;
						if (O <= L && B >= D) {
							(M = R[0]), (N = O);
							break;
						}
					}
					if (M) {
						const O = /(\w|\p{L})+/gu;
						let B = null;
						for (; (B = O.exec(M)) && !(B.index + 1 + N + B[0].length >= D); );
						B && (M = M.substring(0, O.lastIndex));
					}
					return M ? { start: N, end: N + M.length - 1 } : { start: 0, end: 0 };
				}
				async function o(k, L, D, M) {
					if (k.evaluatableExpressionProvider.has(L)) {
						const N = k.evaluatableExpressionProvider.ordered(L),
							A = (0, r.$Lb)(
								await Promise.all(
									N.map(async (R) => {
										try {
											return await R.provideEvaluatableExpression(
												L,
												D,
												M ?? m.CancellationToken.None,
											);
										} catch {
											return;
										}
									}),
								),
							);
						if (A.length > 0) {
							let R = A[0].expression;
							const O = A[0].range;
							return (
								R ||
									(R = L.getLineContent(D.lineNumber).substring(
										O.startColumn - 1,
										O.endColumn - 1,
									)),
								{ range: O, matchingExpression: R }
							);
						}
					} else {
						const N = L.getLineContent(D.lineNumber),
							{ start: A, end: R } = p(N, D.column, D.column),
							O = N.substring(A - 1, R);
						return {
							matchingExpression: O,
							range: new d.$iL(D.lineNumber, A, D.lineNumber, A + O.length),
						};
					}
					return null;
				}
				const f = /^[a-zA-Z][a-zA-Z0-9\+\-\.]+:/;
				function b(k) {
					return !!(k && k.match(f));
				}
				function s(k) {
					if (
						typeof k.path == "string" &&
						!(typeof k.sourceReference == "number" && k.sourceReference > 0)
					) {
						if (b(k.path)) return i.URI.parse(k.path);
						if ((0, w.$nc)(k.path)) return i.URI.file(k.path);
					}
					return k.path;
				}
				function l(k) {
					if (typeof k.path == "object") {
						const L = i.URI.revive(k.path);
						if (L) return L.scheme === C.Schemas.file ? L.fsPath : L.toString();
					}
					return k.path;
				}
				function y(k, L) {
					const D = L ? s : l,
						M = (0, E.$vo)(k);
					return (
						v(M, (N, A) => {
							N && A && (A.path = D(A));
						}),
						M
					);
				}
				function $(k, L) {
					const D = L ? s : l,
						M = (0, E.$vo)(k);
					return (
						v(M, (N, A) => {
							!N && A && (A.path = D(A));
						}),
						M
					);
				}
				function v(k, L) {
					switch (k.type) {
						case "event": {
							const D = k;
							switch (D.event) {
								case "output":
									L(!1, D.body.source);
									break;
								case "loadedSource":
									L(!1, D.body.source);
									break;
								case "breakpoint":
									L(!1, D.body.breakpoint.source);
									break;
								default:
									break;
							}
							break;
						}
						case "request": {
							const D = k;
							switch (D.command) {
								case "setBreakpoints":
									L(!0, D.arguments.source);
									break;
								case "breakpointLocations":
									L(!0, D.arguments.source);
									break;
								case "source":
									L(!0, D.arguments.source);
									break;
								case "gotoTargets":
									L(!0, D.arguments.source);
									break;
								case "launchVSCode":
									D.arguments.args.forEach((M) => L(!1, M));
									break;
								default:
									break;
							}
							break;
						}
						case "response": {
							const D = k;
							if (D.success && D.body)
								switch (D.command) {
									case "stackTrace":
										D.body.stackFrames.forEach((M) => L(!1, M.source));
										break;
									case "loadedSources":
										D.body.sources.forEach((M) => L(!1, M));
										break;
									case "scopes":
										D.body.scopes.forEach((M) => L(!1, M.source));
										break;
									case "setFunctionBreakpoints":
										D.body.breakpoints.forEach((M) => L(!1, M.source));
										break;
									case "setBreakpoints":
										D.body.breakpoints.forEach((M) => L(!1, M.source));
										break;
									case "disassemble":
										D.body?.instructions.forEach((N) => L(!1, N.location));
										break;
									case "locations":
										L(!1, D.body?.source);
										break;
									default:
										break;
								}
							break;
						}
					}
				}
				function S(k) {
					return k
						.filter((L) => !L.presentation?.hidden)
						.sort((L, D) =>
							L.presentation
								? D.presentation
									? L.presentation.group
										? D.presentation.group
											? L.presentation.group !== D.presentation.group
												? L.presentation.group.localeCompare(
														D.presentation.group,
													)
												: I(L.presentation.order, D.presentation.order)
											: -1
										: D.presentation.group
											? 1
											: I(L.presentation.order, D.presentation.order)
									: -1
								: D.presentation
									? 1
									: 0,
						);
				}
				function I(k, L) {
					return typeof k != "number"
						? typeof L != "number"
							? 0
							: 1
						: typeof L != "number"
							? -1
							: k - L;
				}
				async function T(k, L) {
					const D = k.getValue("debug.saveBeforeStart", {
						overrideIdentifier: L.activeTextEditorLanguageId,
					});
					if (
						D !== "none" &&
						(await L.saveAll(), D === "allEditorsInActiveGroup")
					) {
						const M = L.activeEditorPane;
						M &&
							M.input.resource?.scheme === C.Schemas.untitled &&
							(await L.save({ editor: M.input, groupId: M.group.id }));
					}
					await k.reloadConfiguration();
				}
				const P = (k, L) =>
					!k || !L
						? k === L
						: k.name === L.name &&
							k.path === L.path &&
							k.sourceReference === L.sourceReference;
				e.$x3 = P;
			},
		),
		define(
			de[3054],
			he([1, 0, 4, 6, 82, 50, 29, 163, 396, 767, 9, 41, 3, 40, 57, 23]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WQc = void 0),
					(t = mt(t)),
					(w = mt(w)),
					(C = mt(C));
				let p = class {
					constructor(f, b, s, l, y, $, v, S) {
						(this.dbgr = b),
							(this.E = s),
							(this.F = l),
							(this.G = y),
							(this.H = $),
							(this.I = v),
							(this.J = S),
							(this.a = !0),
							(this.b = !1),
							(this.d = !1),
							(this.f = !1),
							(this.g = !1),
							(this.h = !1),
							(this.i = 0),
							(this.j = !1),
							(this.k = new i.$re()),
							(this.l = new i.$re()),
							(this.m = new i.$re()),
							(this.n = new i.$re()),
							(this.o = new i.$re()),
							(this.p = new i.$re()),
							(this.q = new i.$re()),
							(this.r = new i.$re()),
							(this.s = new i.$re()),
							(this.t = new i.$re()),
							(this.u = new i.$re()),
							(this.v = new i.$re()),
							(this.w = new i.$re()),
							(this.x = new i.$re()),
							(this.y = new i.$re()),
							(this.z = new i.$re()),
							(this.A = new i.$re()),
							(this.C = !1),
							(this.D = []),
							(this.B = f),
							(this.c = Object.create(null)),
							this.D.push(
								this.B.onError((I) => {
									this.K(I);
								}),
							),
							this.D.push(
								this.B.onExit((I) => {
									I !== 0 ? this.K(new Error(`exit code: ${I}`)) : this.K();
								}),
							),
							this.B.onEvent((I) => {
								switch (I.event) {
									case "initialized":
										(this.b = !0), this.k.fire(I);
										break;
									case "loadedSource":
										this.s.fire(I);
										break;
									case "capabilities":
										if (I.body) {
											const T = I.body.capabilities;
											this.S(T);
										}
										break;
									case "stopped":
										(this.j = !0), (this.C = !0), this.l.fire(I);
										break;
									case "continued":
										(this.a = I.body.allThreadsContinued !== !1),
											this.m.fire(I);
										break;
									case "thread":
										this.p.fire(I);
										break;
									case "output":
										this.q.fire(I);
										break;
									case "breakpoint":
										this.r.fire(I);
										break;
									case "terminated":
										this.n.fire(I);
										break;
									case "exited":
										this.o.fire(I);
										break;
									case "progressStart":
										this.t.fire(I);
										break;
									case "progressUpdate":
										this.u.fire(I);
										break;
									case "progressEnd":
										this.v.fire(I);
										break;
									case "invalidated":
										this.w.fire(I);
										break;
									case "memory":
										this.x.fire(I);
										break;
									case "process":
										break;
									case "module":
										break;
									default:
										this.y.fire(I);
										break;
								}
								this.z.fire(I);
							}),
							this.B.onRequest((I) => this.N(I));
					}
					get isInShutdown() {
						return this.f;
					}
					get onDidExitAdapter() {
						return this.A.event;
					}
					get capabilities() {
						return this.c;
					}
					get readyForBreakpoints() {
						return this.b;
					}
					get onDidInitialize() {
						return this.k.event;
					}
					get onDidStop() {
						return this.l.event;
					}
					get onDidContinued() {
						return this.m.event;
					}
					get onDidTerminateDebugee() {
						return this.n.event;
					}
					get onDidExitDebugee() {
						return this.o.event;
					}
					get onDidThread() {
						return this.p.event;
					}
					get onDidOutput() {
						return this.q.event;
					}
					get onDidBreakpoint() {
						return this.r.event;
					}
					get onDidLoadedSource() {
						return this.s.event;
					}
					get onDidCustomEvent() {
						return this.y.event;
					}
					get onDidProgressStart() {
						return this.t.event;
					}
					get onDidProgressUpdate() {
						return this.u.event;
					}
					get onDidProgressEnd() {
						return this.v.event;
					}
					get onDidInvalidated() {
						return this.w.event;
					}
					get onDidInvalidateMemory() {
						return this.x.event;
					}
					get onDidEvent() {
						return this.z.event;
					}
					async start() {
						if (!this.B)
							return Promise.reject(new Error(t.localize(5688, null)));
						await this.B.startSession(), (this.i = new Date().getTime());
					}
					async initialize(f) {
						const b = await this.P("initialize", f, void 0, void 0, !1);
						return b && this.S(b.body), b;
					}
					disconnect(f) {
						const b = this.capabilities.supportTerminateDebuggee
								? f.terminateDebuggee
								: void 0,
							s =
								this.capabilities.supportTerminateDebuggee &&
								this.capabilities.supportSuspendDebuggee
									? f.suspendDebuggee
									: void 0;
						return this.K(void 0, f.restart, b, s);
					}
					async launchOrAttach(f) {
						const b = await this.P(f.request, f, void 0, void 0, !1);
						return b && this.S(b.body), b;
					}
					terminate(f = !1) {
						return this.capabilities.supportsTerminateRequest
							? this.g
								? this.disconnect({ terminateDebuggee: !0, restart: f })
								: ((this.g = !0), this.P("terminate", { restart: f }, void 0))
							: Promise.reject(new Error("terminated not supported"));
					}
					restart(f) {
						return this.capabilities.supportsRestartRequest
							? this.P("restart", f)
							: Promise.reject(new Error("restart not supported"));
					}
					async next(f) {
						this.C = !1;
						const b = await this.P("next", f);
						return this.C || this.T(f.threadId), b;
					}
					async stepIn(f) {
						this.C = !1;
						const b = await this.P("stepIn", f);
						return this.C || this.T(f.threadId), b;
					}
					async stepOut(f) {
						this.C = !1;
						const b = await this.P("stepOut", f);
						return this.C || this.T(f.threadId), b;
					}
					async continue(f) {
						this.C = !1;
						const b = await this.P("continue", f);
						return (
							b &&
								b.body &&
								b.body.allThreadsContinued !== void 0 &&
								(this.a = b.body.allThreadsContinued),
							this.C || this.T(f.threadId, this.a),
							b
						);
					}
					pause(f) {
						return this.P("pause", f);
					}
					terminateThreads(f) {
						return this.capabilities.supportsTerminateThreadsRequest
							? this.P("terminateThreads", f)
							: Promise.reject(new Error("terminateThreads not supported"));
					}
					setVariable(f) {
						return this.capabilities.supportsSetVariable
							? this.P("setVariable", f)
							: Promise.reject(new Error("setVariable not supported"));
					}
					setExpression(f) {
						return this.capabilities.supportsSetExpression
							? this.P("setExpression", f)
							: Promise.reject(new Error("setExpression not supported"));
					}
					async restartFrame(f, b) {
						if (this.capabilities.supportsRestartFrame) {
							this.C = !1;
							const s = await this.P("restartFrame", f);
							return this.C || this.T(b), s;
						}
						return Promise.reject(new Error("restartFrame not supported"));
					}
					stepInTargets(f) {
						return this.capabilities.supportsStepInTargetsRequest
							? this.P("stepInTargets", f)
							: Promise.reject(new Error("stepInTargets not supported"));
					}
					completions(f, b) {
						return this.capabilities.supportsCompletionsRequest
							? this.P("completions", f, b)
							: Promise.reject(new Error("completions not supported"));
					}
					setBreakpoints(f) {
						return this.P("setBreakpoints", f);
					}
					setFunctionBreakpoints(f) {
						return this.capabilities.supportsFunctionBreakpoints
							? this.P("setFunctionBreakpoints", f)
							: Promise.reject(
									new Error("setFunctionBreakpoints not supported"),
								);
					}
					dataBreakpointInfo(f) {
						return this.capabilities.supportsDataBreakpoints
							? this.P("dataBreakpointInfo", f)
							: Promise.reject(new Error("dataBreakpointInfo not supported"));
					}
					setDataBreakpoints(f) {
						return this.capabilities.supportsDataBreakpoints
							? this.P("setDataBreakpoints", f)
							: Promise.reject(new Error("setDataBreakpoints not supported"));
					}
					setExceptionBreakpoints(f) {
						return this.P("setExceptionBreakpoints", f);
					}
					breakpointLocations(f) {
						return this.capabilities.supportsBreakpointLocationsRequest
							? this.P("breakpointLocations", f)
							: Promise.reject(
									new Error("breakpointLocations is not supported"),
								);
					}
					configurationDone() {
						return this.capabilities.supportsConfigurationDoneRequest
							? this.P("configurationDone", null)
							: Promise.reject(new Error("configurationDone not supported"));
					}
					stackTrace(f, b) {
						return this.P("stackTrace", f, b);
					}
					exceptionInfo(f) {
						return this.capabilities.supportsExceptionInfoRequest
							? this.P("exceptionInfo", f)
							: Promise.reject(new Error("exceptionInfo not supported"));
					}
					scopes(f, b) {
						return this.P("scopes", f, b);
					}
					variables(f, b) {
						return this.P("variables", f, b);
					}
					source(f) {
						return this.P("source", f);
					}
					locations(f) {
						return this.P("locations", f);
					}
					loadedSources(f) {
						return this.capabilities.supportsLoadedSourcesRequest
							? this.P("loadedSources", f)
							: Promise.reject(new Error("loadedSources not supported"));
					}
					threads() {
						return this.P("threads", null);
					}
					evaluate(f) {
						return this.P("evaluate", f);
					}
					async stepBack(f) {
						if (this.capabilities.supportsStepBack) {
							this.C = !1;
							const b = await this.P("stepBack", f);
							return this.C || this.T(f.threadId), b;
						}
						return Promise.reject(new Error("stepBack not supported"));
					}
					async reverseContinue(f) {
						if (this.capabilities.supportsStepBack) {
							this.C = !1;
							const b = await this.P("reverseContinue", f);
							return this.C || this.T(f.threadId), b;
						}
						return Promise.reject(new Error("reverseContinue not supported"));
					}
					gotoTargets(f) {
						return this.capabilities.supportsGotoTargetsRequest
							? this.P("gotoTargets", f)
							: Promise.reject(new Error("gotoTargets is not supported"));
					}
					async goto(f) {
						if (this.capabilities.supportsGotoTargetsRequest) {
							this.C = !1;
							const b = await this.P("goto", f);
							return this.C || this.T(f.threadId), b;
						}
						return Promise.reject(new Error("goto is not supported"));
					}
					async setInstructionBreakpoints(f) {
						return this.capabilities.supportsInstructionBreakpoints
							? await this.P("setInstructionBreakpoints", f)
							: Promise.reject(
									new Error("setInstructionBreakpoints is not supported"),
								);
					}
					async disassemble(f) {
						return this.capabilities.supportsDisassembleRequest
							? await this.P("disassemble", f)
							: Promise.reject(new Error("disassemble is not supported"));
					}
					async readMemory(f) {
						return this.capabilities.supportsReadMemoryRequest
							? await this.P("readMemory", f)
							: Promise.reject(new Error("readMemory is not supported"));
					}
					async writeMemory(f) {
						return this.capabilities.supportsWriteMemoryRequest
							? await this.P("writeMemory", f)
							: Promise.reject(new Error("writeMemory is not supported"));
					}
					cancel(f) {
						return this.P("cancel", f);
					}
					custom(f, b) {
						return this.P(f, b);
					}
					async K(f, b = !1, s = void 0, l = void 0) {
						if (!this.f)
							if (((this.f = !0), this.B))
								try {
									const y = { restart: b };
									typeof s == "boolean" && (y.terminateDebuggee = s),
										typeof l == "boolean" && (y.suspendDebuggee = l),
										await this.P("disconnect", y, void 0, f ? 200 : 2e3);
								} catch {
								} finally {
									await this.L(f);
								}
							else return this.L(f);
					}
					async L(f) {
						try {
							if (this.B) {
								const b = this.B;
								(this.B = null), await b.stopSession(), (this.d = !0);
							}
						} finally {
							this.M(f);
						}
					}
					M(f) {
						if (!this.h) {
							this.h = !0;
							const b = {
								emittedStopped: this.j,
								sessionLengthInSeconds: (new Date().getTime() - this.i) / 1e3,
							};
							f && !this.d && (b.error = f), this.A.fire(b);
						}
					}
					async N(f) {
						const b = {
								type: "response",
								seq: 0,
								command: f.command,
								request_seq: f.seq,
								success: !0,
							},
							s = (l) => this.B && this.B.sendResponse(l);
						if (f.command === "launchVSCode")
							try {
								let l = await this.O(f.arguments);
								if (!l.success) {
									const { confirmed: y } = await this.J.confirm({
										type: c.Severity.Warning,
										message: t.localize(5689, null),
										primaryButton: t.localize(5690, null),
									});
									y
										? (l = await this.O(f.arguments))
										: ((b.success = !1), s(b), await this.K());
								}
								(b.body = { rendererDebugPort: l.rendererDebugPort }), s(b);
							} catch (l) {
								(b.success = !1), (b.message = l.message), s(b);
							}
						else if (f.command === "runInTerminal")
							try {
								const l = await this.dbgr.runInTerminal(f.arguments, this.E),
									y = b;
								(y.body = {}),
									typeof l == "number" && (y.body.shellProcessId = l),
									s(y);
							} catch (l) {
								(b.success = !1), (b.message = l.message), s(b);
							}
						else if (f.command === "startDebugging")
							try {
								const l = f.arguments,
									y = {
										...l.configuration,
										request: l.request,
										type: this.dbgr.type,
										name: l.configuration.name || this.F,
									};
								(await this.dbgr.startDebugging(y, this.E)) ||
									((b.success = !1), (b.message = "Failed to start debugging")),
									s(b);
							} catch (l) {
								(b.success = !1), (b.message = l.message), s(b);
							}
						else
							(b.success = !1),
								(b.message = `unknown request '${f.command}'`),
								s(b);
					}
					O(f) {
						const b = [];
						for (const s of f.args) {
							const l = (s.prefix || "") + (s.path || ""),
								y = /^--(.+)=(.+)$/.exec(l);
							if (y && y.length === 3) {
								const $ = y[1];
								let v = y[2];
								($ === "file-uri" || $ === "folder-uri") &&
									!(0, m.$s3)(s.path) &&
									(v = (0, m.$s3)(v) ? v : u.URI.file(v).toString()),
									b.push(`--${$}=${v}`);
							} else b.push(l);
						}
						return (
							f.env &&
								b.push(`--extensionEnvironment=${JSON.stringify(f.env)}`),
							this.G.openExtensionDevelopmentHostWindow(b, !!f.debugRenderer)
						);
					}
					P(f, b, s, l, y = !0) {
						return new Promise(($, v) => {
							if (!this.B) {
								this.f ? $(void 0) : v(new Error(t.localize(5691, null, f)));
								return;
							}
							let S;
							const I = this.B.sendRequest(
								f,
								b,
								(T) => {
									S?.dispose(), T.success ? $(T) : v(T);
								},
								l,
							);
							s &&
								(S = s.onCancellationRequested(() => {
									S.dispose(),
										this.capabilities.supportsCancelRequest &&
											this.cancel({ requestId: I });
								}));
						}).then(void 0, ($) => Promise.reject(this.Q($, y)));
					}
					Q(f, b) {
						if (f.command === "canceled" && f.message === "canceled")
							return new C.$9();
						const s = f?.body?.error,
							l = f?.message || "",
							y = s ? (0, m.$l3)(s.format, !1, s.variables) : l,
							$ = s?.url;
						if (s && $) {
							const S = s.urlLabel ? s.urlLabel : t.localize(5692, null),
								I = u.URI.parse($),
								T =
									I.scheme === g.Schemas.command
										? "debug.moreInfo.command"
										: "debug.moreInfo";
							return (0, d.$zj)(y, [
								(0, E.$wj)({
									id: T,
									label: S,
									run: () => this.H.open(I, { allowCommands: !0 }),
								}),
							]);
						}
						b && s && s.format && s.showUser && this.I.error(y);
						const v = new C.$fb(y);
						return (v.showUser = s?.showUser), v;
					}
					S(f) {
						f && (this.c = w.$yo(this.c, f));
					}
					T(f, b = !1) {
						this.m.fire({
							type: "event",
							event: "continued",
							body: { threadId: f, allThreadsContinued: b },
							seq: void 0,
						});
					}
					dispose() {
						(0, h.$Vc)(this.D);
					}
				};
				(e.$WQc = p),
					(e.$WQc = p =
						Ne([j(4, r.$dp), j(5, a.$7rb), j(6, c.$4N), j(7, n.$GO)], p));
			},
		),
		