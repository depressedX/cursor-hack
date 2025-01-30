import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/arraysFind.js';
import '../../../../base/common/async.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/common/core/range.js';
import '../../../../nls.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import './debug.js';
import './debugSource.js';
import './disassemblyViewInput.js';
import '../../../services/textfile/common/textfiles.js';
define(
			de[300],
			he([
				1, 0, 24, 214, 15, 76, 33, 6, 136, 3, 82, 77, 19, 28, 9, 47, 17, 4, 34,
				68, 112, 826, 797, 85,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*arraysFind*/,
				w /*async*/,
				E /*buffer*/,
				C /*cancellation*/,
				d /*event*/,
				m /*hash*/,
				r /*lifecycle*/,
				u /*objects*/,
				a /*observable*/,
				h /*resources*/,
				c /*types*/,
				n /*uri*/,
				g /*uuid*/,
				p /*range*/,
				o /*nls*/,
				f /*log*/,
				b /*uriIdentity*/,
				s /*debug*/,
				l /*debugSource*/,
				y /*disassemblyViewInput*/,
				$ /*textfiles*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Z3 =
						e.$Y3 =
						e.$X3 =
						e.$W3 =
						e.$V3 =
						e.$U3 =
						e.$T3 =
						e.$S3 =
						e.$R3 =
						e.$Q3 =
						e.$P3 =
						e.$O3 =
						e.$N3 =
						e.$M3 =
						e.$L3 =
						e.$K3 =
						e.$J3 =
						e.$I3 =
						e.$H3 =
							void 0),
					(h = mt(h)),
					(o = mt(o));
				const v = !1;
				class S {
					static {
						this.allValues = new Map();
					}
					static {
						this.allValuesWithHistory = new Map();
					}
					static {
						this.watchExpressions = new Map();
					}
					static {
						this.a = 100;
					}
					constructor(
						W,
						X,
						Y,
						ie,
						ne = 0,
						ee = 0,
						_ = void 0,
						te = 0,
						Q = void 0,
						Z = void 0,
						se = void 0,
					) {
						(this.g = W),
							(this.h = X),
							(this.j = Y),
							(this.k = ie),
							(this.namedVariables = ne),
							(this.indexedVariables = ee),
							(this.memoryReference = _),
							(this.l = te),
							(this.presentationHint = Q),
							(this.valueLocationReference = Z),
							(this.m = se),
							(this.valueChanged = !1),
							(this.b = "");
					}
					get reference() {
						return this.j;
					}
					set reference(W) {
						(this.j = W), (this.f = void 0);
					}
					async evaluateLazy() {
						if (typeof this.reference > "u") return;
						const W = await this.g.variables(
							this.reference,
							this.h,
							void 0,
							void 0,
							void 0,
						);
						if (
							!W ||
							!W.body ||
							!W.body.variables ||
							W.body.variables.length !== 1
						)
							return;
						const X = W.body.variables[0];
						(this.reference = X.variablesReference),
							(this.b = X.value),
							(this.namedVariables = X.namedVariables),
							(this.indexedVariables = X.indexedVariables),
							(this.memoryReference = X.memoryReference),
							(this.presentationHint = X.presentationHint),
							(this.valueLocationReference = X.valueLocationReference),
							this.n(X);
					}
					n(W) {}
					getChildren() {
						return this.f || (this.f = this.o()), this.f;
					}
					async o() {
						if (!this.hasChildren) return [];
						if (!this.t) return this.q(void 0, void 0, void 0);
						const W = this.namedVariables
							? await this.q(void 0, void 0, "named")
							: [];
						let X = S.a;
						for (; this.indexedVariables && this.indexedVariables > X * S.a; )
							X *= S.a;
						if (this.indexedVariables && this.indexedVariables > X) {
							const ie = Math.ceil(this.indexedVariables / X);
							for (let ne = 0; ne < ie; ne++) {
								const ee = (this.l || 0) + ne * X,
									_ = Math.min(X, this.indexedVariables - ne * X);
								W.push(
									new k(
										this.g,
										this.h,
										this,
										this.reference,
										`[${ee}..${ee + _ - 1}]`,
										"",
										"",
										void 0,
										_,
										void 0,
										{ kind: "virtual" },
										void 0,
										void 0,
										!0,
										ee,
									),
								);
							}
							return W;
						}
						const Y = await this.q(this.l, this.indexedVariables, "indexed");
						return W.concat(Y);
					}
					getId() {
						return this.k;
					}
					getSession() {
						return this.g;
					}
					get value() {
						return this.b;
					}
					get hasChildren() {
						return (
							!!this.reference &&
							this.reference > 0 &&
							!this.presentationHint?.lazy
						);
					}
					async q(W, X, Y) {
						try {
							const ie = await this.g.variables(
								this.reference || 0,
								this.h,
								Y,
								W,
								X,
							);
							if (!ie || !ie.body || !ie.body.variables) return [];
							const ne = new Map(),
								ee = ie.body.variables
									.filter((_) => !!_)
									.map((_) => {
										if (
											(0, c.$lg)(_.value) &&
											(0, c.$lg)(_.name) &&
											typeof _.variablesReference == "number"
										) {
											const te = ne.get(_.name) || 0,
												Q = te > 0 ? te.toString() : "";
											return (
												ne.set(_.name, te + 1),
												new k(
													this.g,
													this.h,
													this,
													_.variablesReference,
													_.name,
													_.evaluateName,
													_.value,
													_.namedVariables,
													_.indexedVariables,
													_.memoryReference,
													_.presentationHint,
													_.type,
													_.__vscodeVariableMenuContext,
													!0,
													0,
													Q,
													_.declarationLocationReference,
													_.valueLocationReference,
												)
											);
										}
										return new k(
											this.g,
											this.h,
											this,
											0,
											"",
											void 0,
											o.localize(5850, null),
											0,
											0,
											void 0,
											{ kind: "virtual" },
											void 0,
											void 0,
											!1,
										);
									});
							return (
								this.g.autoExpandLazyVariables &&
									(await Promise.all(
										ee.map((_) => _.presentationHint?.lazy && _.evaluateLazy()),
									)),
								ee
							);
						} catch (ie) {
							return [
								new k(
									this.g,
									this.h,
									this,
									0,
									"",
									void 0,
									ie.message,
									0,
									0,
									void 0,
									{ kind: "virtual" },
									void 0,
									void 0,
									!1,
								),
							];
						}
					}
					get t() {
						return !!this.indexedVariables;
					}
					set value(W) {
						if (
							((this.b = W),
							(this.valueChanged =
								!!S.allValues.get(this.getId()) &&
								S.allValues.get(this.getId()) !== P.DEFAULT_VALUE &&
								S.allValues.get(this.getId()) !== W),
							v &&
								(this.valueChanged ||
									!S.allValuesWithHistory.has(this.getId())) &&
								S.watchExpressions.has(this.getId()) &&
								W !== "not available")
						) {
							let X;
							if (
								(this.m !== void 0 &&
									(X = {
										uri: this.m.source.uri,
										line: this.m.range.startLineNumber,
										column: this.m.range.startColumn,
									}),
								S.allValuesWithHistory.has(this.getId()))
							) {
								const Y = S.allValuesWithHistory.get(this.getId());
								Y.push({ value: W, source: X }), Y.length > 200 && Y.shift();
							} else
								S.allValuesWithHistory.set(this.getId(), [
									{ value: W, source: X },
								]);
							for (const [Y, ie] of S.allValuesWithHistory)
								S.watchExpressions.has(Y) || S.allValuesWithHistory.delete(Y);
						}
						S.allValues.set(this.getId(), W);
					}
					toString() {
						return this.value;
					}
					async evaluateExpression(W, X, Y, ie, ne = !1, ee) {
						if (!X || (!Y && ie !== "repl"))
							return (
								(this.value =
									ie === "repl" ? o.localize(5851, null) : P.DEFAULT_VALUE),
								(this.reference = 0),
								!1
							);
						(this.g = X), (this.m = Y);
						try {
							const _ = await X.evaluate(W, Y ? Y.frameId : void 0, ie, ee);
							return _ && _.body
								? ((this.value = _.body.result || ""),
									(this.reference = _.body.variablesReference),
									(this.namedVariables = _.body.namedVariables),
									(this.indexedVariables = _.body.indexedVariables),
									(this.memoryReference = _.body.memoryReference),
									(this.type = _.body.type || this.type),
									(this.presentationHint = _.body.presentationHint),
									(this.valueLocationReference = _.body.valueLocationReference),
									!ne &&
										_.body.presentationHint?.lazy &&
										(await this.evaluateLazy()),
									!0)
								: !1;
						} catch (_) {
							return (this.value = _.message || ""), (this.reference = 0), !1;
						} finally {
							this.m = void 0;
						}
					}
				}
				e.$H3 = S;
				function I(J, W) {
					W &&
						W.body &&
						((J.value = W.body.value || ""),
						(J.type = W.body.type || J.type),
						(J.reference = W.body.variablesReference),
						(J.namedVariables = W.body.namedVariables),
						(J.indexedVariables = W.body.indexedVariables));
				}
				class T {
					evaluateLazy() {
						return Promise.resolve();
					}
					getChildren() {
						return this.b.getVisualizedChildren(this.treeId, this.treeItem.id);
					}
					getId() {
						return this.a;
					}
					get name() {
						return this.treeItem.label;
					}
					get value() {
						return this.treeItem.description || "";
					}
					get hasChildren() {
						return (
							this.treeItem.collapsibleState !==
							s.DebugTreeItemCollapsibleState.None
						);
					}
					constructor(W, X, Y, ie) {
						(this.b = W),
							(this.treeId = X),
							(this.treeItem = Y),
							(this.original = ie),
							(this.a = (0, g.$9g)());
					}
					async edit(W) {
						try {
							return (
								await this.b.editTreeItem(this.treeId, this.treeItem, W), !0
							);
						} catch (X) {
							return (this.errorMessage = X.message), !1;
						}
					}
				}
				e.$I3 = T;
				class P extends S {
					static {
						this.DEFAULT_VALUE = o.localize(5852, null);
					}
					constructor(W, X = (0, g.$9g)()) {
						super(void 0, void 0, 0, X),
							(this.name = W),
							(this.u = new d.$re()),
							(this.onDidChangeValue = this.u.event),
							(this.available = !1),
							W && (this.value = P.DEFAULT_VALUE);
					}
					async evaluate(W, X, Y, ie, ne) {
						const ee = this.value === P.DEFAULT_VALUE;
						(this.available = await this.evaluateExpression(
							this.name,
							W,
							X,
							Y,
							ie,
							ne,
						)),
							(ee || this.valueChanged) && this.u.fire(this);
					}
					toString() {
						return `${this.name}
${this.value}`;
					}
					async setExpression(W, X) {
						if (!this.g) return;
						const Y = await this.g.setExpression(X.frameId, this.name, W);
						I(this, Y);
					}
				}
				e.$J3 = P;
				class k extends S {
					constructor(
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
						re = void 0,
						le = void 0,
						oe = !0,
						ae = 0,
						pe = "",
						$e = void 0,
						ye = void 0,
					) {
						super(
							W,
							X,
							ie,
							`variable:${Y.getId()}:${ne}:${pe}`,
							te,
							Q,
							Z,
							ae,
							se,
							ye,
						),
							(this.parent = Y),
							(this.name = ne),
							(this.evaluateName = ee),
							(this.variableMenuContext = le),
							(this.available = oe),
							(this.declarationLocationReference = $e),
							(this.value = _ || ""),
							(this.type = re);
					}
					getThreadId() {
						return this.h;
					}
					async setVariable(W, X) {
						if (this.g)
							try {
								if (
									this.g.capabilities.supportsSetExpression &&
									!this.g.capabilities.supportsSetVariable &&
									this.evaluateName
								)
									return this.setExpression(W, X);
								const Y = await this.g.setVariable(
									this.parent.reference,
									this.name,
									W,
								);
								I(this, Y);
							} catch (Y) {
								this.errorMessage = Y.message;
							}
					}
					async setExpression(W, X) {
						if (!this.g || !this.evaluateName) return;
						const Y = await this.g.setExpression(
							X.frameId,
							this.evaluateName,
							W,
						);
						I(this, Y);
					}
					toString() {
						return this.name ? `${this.name}: ${this.value}` : this.value;
					}
					n(W) {
						this.evaluateName = W.evaluateName;
					}
					toDebugProtocolObject() {
						return {
							name: this.name,
							variablesReference: this.reference || 0,
							memoryReference: this.memoryReference,
							value: this.value,
							evaluateName: this.evaluateName,
						};
					}
				}
				e.$K3 = k;
				class L extends S {
					constructor(W, X, Y, ie, ne, ee, _, te) {
						super(
							W.thread.session,
							W.thread.threadId,
							ie,
							`scope:${Y}:${X}`,
							ee,
							_,
						),
							(this.stackFrame = W),
							(this.name = Y),
							(this.expensive = ne),
							(this.range = te);
					}
					toString() {
						return this.name;
					}
					toDebugProtocolObject() {
						return {
							name: this.name,
							variablesReference: this.reference || 0,
							expensive: this.expensive,
						};
					}
				}
				e.$L3 = L;
				class D extends L {
					constructor(W, X, Y) {
						super(W, X, Y, 0, !1);
					}
					toString() {
						return this.name;
					}
				}
				e.$M3 = D;
				class M {
					constructor(W, X, Y, ie, ne, ee, _, te, Q) {
						(this.thread = W),
							(this.frameId = X),
							(this.source = Y),
							(this.name = ie),
							(this.presentationHint = ne),
							(this.range = ee),
							(this.b = _),
							(this.canRestart = te),
							(this.instructionPointerReference = Q);
					}
					getId() {
						return `stackframe:${this.thread.getId()}:${this.b}:${this.source.name}`;
					}
					getScopes() {
						return (
							this.a ||
								(this.a = this.thread.session
									.scopes(this.frameId, this.thread.threadId)
									.then(
										(W) => {
											if (!W || !W.body || !W.body.scopes) return [];
											const X = new Set();
											return W.body.scopes.map((Y) => {
												let ie = 0;
												do
													ie = (0, m.$Dj)(
														`${Y.name}:${Y.line}:${Y.column}`,
														ie,
													);
												while (X.has(ie));
												return (
													X.add(ie),
													new L(
														this,
														ie,
														Y.name,
														Y.variablesReference,
														Y.expensive,
														Y.namedVariables,
														Y.indexedVariables,
														Y.line && Y.column && Y.endLine && Y.endColumn
															? new p.$iL(
																	Y.line,
																	Y.column,
																	Y.endLine,
																	Y.endColumn,
																)
															: void 0,
													)
												);
											});
										},
										(W) => [new D(this, 0, W.message)],
									)),
							this.a
						);
					}
					async getMostSpecificScopes(W) {
						const Y = (await this.getScopes()).filter((ee) => !ee.expensive);
						if (!Y.some((ee) => !!ee.range)) return Y;
						const ne = Y.filter(
							(ee) => ee.range && p.$iL.containsRange(ee.range, W),
						).sort(
							(ee, _) =>
								ee.range.endLineNumber -
								ee.range.startLineNumber -
								(_.range.endLineNumber - _.range.startLineNumber),
						);
						return ne.length ? ne : Y;
					}
					restart() {
						return this.thread.session.restartFrame(
							this.frameId,
							this.thread.threadId,
						);
					}
					forgetScopes() {
						this.a = void 0;
					}
					toString() {
						const W =
								typeof this.range.startLineNumber == "number"
									? `:${this.range.startLineNumber}`
									: "",
							X = `${this.source.inMemory ? this.source.name : this.source.uri.fsPath}${W}`;
						return X === l.$y3 ? this.name : `${this.name} (${X})`;
					}
					async openInEditor(W, X, Y, ie) {
						const ne = this.thread.stoppedDetails?.reason;
						if (
							this.instructionPointerReference &&
							(ne === "instruction breakpoint" ||
								(ne === "step" &&
									this.thread.lastSteppingGranularity === "instruction") ||
								W.activeEditor instanceof y.$G3)
						)
							return W.openEditor(y.$G3.instance, {
								pinned: !0,
								revealIfOpened: !0,
							});
						if (this.source.available)
							return this.source.openInEditor(W, this.range, X, Y, ie);
					}
					equals(W) {
						return (
							this.name === W.name &&
							W.thread === this.thread &&
							this.frameId === W.frameId &&
							W.source === this.source &&
							p.$iL.equalsRange(this.range, W.range)
						);
					}
				}
				e.$N3 = M;
				const N = ["breakpoint", "step", "function breakpoint"];
				class A {
					constructor(W, X, Y) {
						(this.session = W),
							(this.name = X),
							(this.threadId = Y),
							(this.f = []),
							(this.reachedEndOfCallStack = !1),
							(this.lastRecordingCallStackHistory = []),
							(this.a = []),
							(this.b = []),
							(this.stopped = !1);
					}
					getId() {
						return `thread:${this.session.getId()}:${this.threadId}`;
					}
					clearCallStack() {
						this.a.length && (this.b = this.a),
							(this.a = []),
							this.f.forEach((W) => W.dispose(!0)),
							(this.f = []);
					}
					getCallStack() {
						return this.a;
					}
					getStaleCallStack() {
						return this.b;
					}
					getTopStackFrame() {
						const W = this.getCallStack(),
							X = this.stoppedDetails?.reason;
						return W.find(
							(ie) =>
								!!(
									((X === "instruction breakpoint" ||
										(X === "step" &&
											this.lastSteppingGranularity === "instruction")) &&
										ie.instructionPointerReference) ||
									(ie.source &&
										ie.source.available &&
										(N.includes(X) || !(0, s.$65)(ie)))
								),
						);
					}
					get stateLabel() {
						return this.stoppedDetails
							? this.stoppedDetails.description ||
									(this.stoppedDetails.reason
										? o.localize(5853, null, this.stoppedDetails.reason)
										: o.localize(5854, null))
							: o.localize(5855, null);
					}
					async fetchCallStack(W = 20) {
						if (this.stopped) {
							const X = this.a.length,
								Y = await this.g(X, W);
							(this.reachedEndOfCallStack = Y.length < W),
								X < this.a.length && this.a.splice(X, this.a.length - X),
								(this.a = this.a.concat(Y || [])),
								typeof this.stoppedDetails?.totalFrames == "number" &&
									this.stoppedDetails.totalFrames === this.a.length &&
									(this.reachedEndOfCallStack = !0);
						}
					}
					async g(W, X) {
						try {
							const Y = new C.$Ce();
							this.f.push(Y);
							const ie = await this.session.stackTrace(
								this.threadId,
								W,
								X,
								Y.token,
							);
							return !ie || !ie.body || Y.token.isCancellationRequested
								? []
								: (this.stoppedDetails &&
										(this.stoppedDetails.totalFrames = ie.body.totalFrames),
									ie.body.stackFrames.map((ne, ee) => {
										const _ = this.session.getSource(ne.source);
										return new M(
											this,
											ne.id,
											_,
											ne.name,
											ne.presentationHint,
											new p.$iL(
												ne.line,
												ne.column,
												ne.endLine || ne.line,
												ne.endColumn || ne.column,
											),
											W + ee,
											typeof ne.canRestart == "boolean" ? ne.canRestart : !0,
											ne.instructionPointerReference,
										);
									}));
						} catch (Y) {
							return (
								this.stoppedDetails &&
									(this.stoppedDetails.framesErrorMessage = Y.message),
								[]
							);
						}
					}
					get exceptionInfo() {
						return this.stoppedDetails &&
							this.stoppedDetails.reason === "exception"
							? this.session.capabilities.supportsExceptionInfoRequest
								? this.session.exceptionInfo(this.threadId)
								: Promise.resolve({
										description: this.stoppedDetails.text,
										breakMode: null,
									})
							: Promise.resolve(void 0);
					}
					next(W) {
						return this.session.next(this.threadId, W);
					}
					stepIn(W) {
						return this.session.stepIn(this.threadId, void 0, W);
					}
					stepOut(W) {
						return this.session.stepOut(this.threadId, W);
					}
					stepBack(W) {
						return this.session.stepBack(this.threadId, W);
					}
					continue() {
						return this.session.continue(this.threadId);
					}
					pause() {
						return this.session.pause(this.threadId);
					}
					terminate() {
						return this.session.terminateThreads([this.threadId]);
					}
					reverseContinue() {
						return this.session.reverseContinue(this.threadId);
					}
					async recordStepByStep(W, X) {
						this.lastRecordingCallStackHistory = [];
						const Y = new Set();
						let ie = 0;
						for (W.setIsRecording(!0); W.getIsRecording(); ) {
							if (!this.stopped) await this.pause();
							else {
								this.a.length === 0 && (await this.fetchCallStack(1));
								const _ = this.a.at(0);
								if (_ === void 0) continue;
								const te = `${_.source.uri.path}::${_.range.startLineNumber}:${_.range.startColumn}-${_.range.endLineNumber}:${_.range.endColumn}`;
								_.source.uri.path.includes("/node_modules/")
									? await this.session.stepOut(this.threadId, "instruction")
									: await this.session.stepIn(
											this.threadId,
											void 0,
											"instruction",
										),
									Y.add(te);
							}
							let ne = 0;
							for (; !this.stopped && ne < 1e5 && W.getIsRecording(); )
								await new Promise((_) => setTimeout(_, 0)), ne++;
							if (!W.getIsRecording()) break;
							await this.fetchCallStack(1);
							const ee = this.a.at(0);
							if (
								ee !== void 0 &&
								!ee.source.uri.path.includes("/node_modules/")
							) {
								const _ = { ...this.a[0] };
								this.lastRecordingCallStackHistory.push(_);
							}
							ie++;
						}
						return this.session.continue(this.threadId);
					}
				}
				e.$O3 = A;
				const R = (J, W, X, Y = "memory") =>
					n.URI.from({
						scheme: s.$55,
						authority: J,
						path: "/" + encodeURIComponent(W) + `/${encodeURIComponent(Y)}.bin`,
						query: X ? `?range=${X.fromOffset}:${X.toOffset}` : void 0,
					});
				e.$P3 = R;
				class O extends r.$1c {
					constructor(W, X) {
						super(),
							(this.b = W),
							(this.f = X),
							(this.a = this.D(new d.$re())),
							(this.onDidInvalidate = this.a.event),
							(this.writable =
								!!this.f.capabilities.supportsWriteMemoryRequest),
							this.D(
								X.onDidInvalidateMemory((Y) => {
									Y.body.memoryReference === W &&
										this.g(Y.body.offset, Y.body.count - Y.body.offset);
								}),
							);
					}
					async read(W, X) {
						const Y = X - W,
							ie = W,
							ne = await this.f.readMemory(this.b, ie, Y);
						if (ne === void 0 || !ne.body?.data)
							return [
								{ type: s.MemoryRangeType.Unreadable, offset: ie, length: Y },
							];
						let ee;
						try {
							ee = (0, E.$af)(ne.body.data);
						} catch {
							return [
								{
									type: s.MemoryRangeType.Error,
									offset: ie,
									length: Y,
									error: "Invalid base64 data from debug adapter",
								},
							];
						}
						const _ = ne.body.unreadableBytes || 0,
							te = Y - _;
						if (ee.byteLength < te) {
							const Q = E.$Te.alloc(te - ee.byteLength);
							Q.buffer.fill(0), (ee = E.$Te.concat([ee, Q], te));
						} else ee.byteLength > te && (ee = ee.slice(0, te));
						return _
							? [
									{
										type: s.MemoryRangeType.Valid,
										offset: ie,
										length: te,
										data: ee,
									},
									{
										type: s.MemoryRangeType.Unreadable,
										offset: ie + te,
										length: _,
									},
								]
							: [
									{
										type: s.MemoryRangeType.Valid,
										offset: ie,
										length: Y,
										data: ee,
									},
								];
					}
					async write(W, X) {
						const ie =
							(await this.f.writeMemory(this.b, W, (0, E.$cf)(X), !0))?.body
								?.bytesWritten ?? X.byteLength;
						return this.g(W, W + ie), ie;
					}
					dispose() {
						super.dispose();
					}
					g(W, X) {
						this.a.fire({ fromOffset: W, toOffset: X });
					}
				}
				e.$Q3 = O;
				class B {
					constructor(W, X) {
						(this.enabled = W), (this.a = X);
					}
					getId() {
						return this.a;
					}
				}
				e.$R3 = B;
				function U(J, W) {
					return (0, u.$yo)(
						{
							supportsConditionalBreakpoints:
								!!W.supportsConditionalBreakpoints,
							supportsHitConditionalBreakpoints:
								!!W.supportsHitConditionalBreakpoints,
							supportsLogPoints: !!W.supportsLogPoints,
							supportsFunctionBreakpoints: !!W.supportsFunctionBreakpoints,
							supportsDataBreakpoints: !!W.supportsDataBreakpoints,
							supportsInstructionBreakpoints:
								!!W.supportsInstructionBreakpoints,
						},
						J,
					);
				}
				class z extends B {
					constructor(W, X) {
						super(X.enabled ?? !0, W),
							(this.b = new Map()),
							(this.condition = X.condition),
							(this.hitCondition = X.hitCondition),
							(this.logMessage = X.logMessage),
							(this.mode = X.mode),
							(this.modeLabel = X.modeLabel);
					}
					setSessionData(W, X) {
						X ? ((X.sessionId = W), this.b.set(W, X)) : this.b.delete(W);
						const Y = Array.from(this.b.values()),
							ie = (0, t.$Qb)(
								Y.filter((ne) => ne.verified),
								(ne) => `${ne.line}:${ne.column}`,
							);
						ie.length
							? (this.f = ie.length === 1 ? ie[0] : void 0)
							: (this.f = Y.length ? Y[0] : void 0);
					}
					get message() {
						if (this.f) return this.f.message;
					}
					get verified() {
						return this.f ? this.f.verified : !0;
					}
					get sessionsThatVerified() {
						const W = [];
						for (const [X, Y] of this.b) Y.verified && W.push(X);
						return W;
					}
					getIdFromAdapter(W) {
						const X = this.b.get(W);
						return X ? X.id : void 0;
					}
					getDebugProtocolBreakpoint(W) {
						const X = this.b.get(W);
						if (X)
							return {
								id: X.id,
								verified: X.verified,
								message: X.message,
								source: X.source,
								line: X.line,
								column: X.column,
								endLine: X.endLine,
								endColumn: X.endColumn,
								instructionReference: X.instructionReference,
								offset: X.offset,
							};
					}
					toJSON() {
						return {
							id: this.getId(),
							enabled: this.enabled,
							condition: this.condition,
							hitCondition: this.hitCondition,
							logMessage: this.logMessage,
							mode: this.mode,
							modeLabel: this.modeLabel,
						};
					}
				}
				e.$S3 = z;
				class F extends z {
					constructor(W, X, Y, ie, ne = (0, g.$9g)()) {
						super(ne, W),
							(this.m = X),
							(this.n = Y),
							(this.o = ie),
							(this.h = W.uri),
							(this.k = W.lineNumber),
							(this.l = W.column),
							(this.j = W.adapterData),
							(this.triggeredBy = W.triggeredBy);
					}
					toDAP() {
						return {
							line: this.sessionAgnosticData.lineNumber,
							column: this.sessionAgnosticData.column,
							condition: this.condition,
							hitCondition: this.hitCondition,
							logMessage: this.logMessage,
							mode: this.mode,
						};
					}
					get originalUri() {
						return this.h;
					}
					get lineNumber() {
						return this.verified && this.f && typeof this.f.line == "number"
							? this.f.line
							: this.k;
					}
					get verified() {
						return this.f ? this.f.verified && !this.m.isDirty(this.h) : !0;
					}
					get pending() {
						return this.f ? !1 : this.triggeredBy !== void 0;
					}
					get uri() {
						return this.verified && this.f && this.f.source
							? (0, l.$A3)(
									this.f.source,
									this.f.source.path,
									this.f.sessionId,
									this.n,
									this.o,
								)
							: this.h;
					}
					get column() {
						return this.verified && this.f && typeof this.f.column == "number"
							? this.f.column
							: this.l;
					}
					get message() {
						return this.m.isDirty(this.uri)
							? o.localize(5856, null)
							: super.message;
					}
					get adapterData() {
						return this.f && this.f.source && this.f.source.adapterData
							? this.f.source.adapterData
							: this.j;
					}
					get endLineNumber() {
						return this.verified && this.f ? this.f.endLine : void 0;
					}
					get endColumn() {
						return this.verified && this.f ? this.f.endColumn : void 0;
					}
					get sessionAgnosticData() {
						return { lineNumber: this.k, column: this.l };
					}
					get supported() {
						return this.f
							? !(
									(this.logMessage && !this.f.supportsLogPoints) ||
									(this.condition && !this.f.supportsConditionalBreakpoints) ||
									(this.hitCondition &&
										!this.f.supportsHitConditionalBreakpoints)
								)
							: !0;
					}
					setSessionData(W, X) {
						super.setSessionData(W, X), this.j || (this.j = this.adapterData);
					}
					toJSON() {
						return {
							...super.toJSON(),
							uri: this.h,
							lineNumber: this.k,
							column: this.l,
							adapterData: this.adapterData,
							triggeredBy: this.triggeredBy,
						};
					}
					toString() {
						return `${h.$jh(this.uri)} ${this.lineNumber}`;
					}
					setSessionDidTrigger(W) {
						(this.g ??= new Set()), this.g.add(W);
					}
					getSessionDidTrigger(W) {
						return !!this.g?.has(W);
					}
					update(W) {
						W.hasOwnProperty("lineNumber") &&
							!(0, c.$ug)(W.lineNumber) &&
							(this.k = W.lineNumber),
							W.hasOwnProperty("column") && (this.l = W.column),
							W.hasOwnProperty("condition") && (this.condition = W.condition),
							W.hasOwnProperty("hitCondition") &&
								(this.hitCondition = W.hitCondition),
							W.hasOwnProperty("logMessage") &&
								(this.logMessage = W.logMessage),
							W.hasOwnProperty("mode") &&
								((this.mode = W.mode), (this.modeLabel = W.modeLabel)),
							W.hasOwnProperty("triggeredBy") &&
								((this.triggeredBy = W.triggeredBy), (this.g = void 0));
					}
				}
				e.$T3 = F;
				class x extends z {
					constructor(W, X = (0, g.$9g)()) {
						super(X, W), (this.name = W.name);
					}
					toDAP() {
						return {
							name: this.name,
							condition: this.condition,
							hitCondition: this.hitCondition,
						};
					}
					toJSON() {
						return { ...super.toJSON(), name: this.name };
					}
					get supported() {
						return this.f ? this.f.supportsFunctionBreakpoints : !0;
					}
					toString() {
						return this.name;
					}
				}
				e.$U3 = x;
				class H extends z {
					constructor(W, X = (0, g.$9g)()) {
						super(X, W),
							(this.g = new WeakMap()),
							(this.description = W.description),
							"dataId" in W &&
								(W.src = {
									type: s.DataBreakpointSetType.Variable,
									dataId: W.dataId,
								}),
							(this.src = W.src),
							(this.canPersist = W.canPersist),
							(this.accessTypes = W.accessTypes),
							(this.accessType = W.accessType),
							W.initialSessionData &&
								this.g.set(
									W.initialSessionData.session,
									W.initialSessionData.dataId,
								);
					}
					async toDAP(W) {
						let X;
						if (this.src.type === s.DataBreakpointSetType.Variable)
							X = this.src.dataId;
						else {
							let Y = this.g.get(W);
							if (!Y) {
								if (
									((Y = (
										await W.dataBytesBreakpointInfo(
											this.src.address,
											this.src.bytes,
										)
									)?.dataId),
									!Y)
								)
									return;
								this.g.set(W, Y);
							}
							X = Y;
						}
						return {
							dataId: X,
							accessType: this.accessType,
							condition: this.condition,
							hitCondition: this.hitCondition,
						};
					}
					toJSON() {
						return {
							...super.toJSON(),
							description: this.description,
							src: this.src,
							accessTypes: this.accessTypes,
							accessType: this.accessType,
							canPersist: this.canPersist,
						};
					}
					get supported() {
						return this.f ? this.f.supportsDataBreakpoints : !0;
					}
					toString() {
						return this.description;
					}
				}
				e.$V3 = H;
				class q extends z {
					constructor(W, X = (0, g.$9g)()) {
						super(X, W),
							(this.g = new Set()),
							(this.h = !1),
							(this.filter = W.filter),
							(this.label = W.label),
							(this.supportsCondition = W.supportsCondition),
							(this.description = W.description),
							(this.conditionDescription = W.conditionDescription),
							(this.h = W.fallback || !1);
					}
					toJSON() {
						return {
							...super.toJSON(),
							filter: this.filter,
							label: this.label,
							enabled: this.enabled,
							supportsCondition: this.supportsCondition,
							conditionDescription: this.conditionDescription,
							condition: this.condition,
							fallback: this.h,
							description: this.description,
						};
					}
					setSupportedSession(W, X) {
						X ? this.g.add(W) : this.g.delete(W);
					}
					setFallback(W) {
						this.h = W;
					}
					get supported() {
						return !0;
					}
					isSupportedSession(W) {
						return W ? this.g.has(W) : this.h;
					}
					matches(W) {
						return (
							this.filter === W.filter &&
							this.label === W.label &&
							this.supportsCondition === !!W.supportsCondition &&
							this.conditionDescription === W.conditionDescription &&
							this.description === W.description
						);
					}
					toString() {
						return this.label;
					}
				}
				e.$W3 = q;
				class V extends z {
					constructor(W, X = (0, g.$9g)()) {
						super(X, W),
							(this.instructionReference = W.instructionReference),
							(this.offset = W.offset),
							(this.canPersist = W.canPersist),
							(this.address = W.address);
					}
					toDAP() {
						return {
							instructionReference: this.instructionReference,
							condition: this.condition,
							hitCondition: this.hitCondition,
							mode: this.mode,
							offset: this.offset,
						};
					}
					toJSON() {
						return {
							...super.toJSON(),
							instructionReference: this.instructionReference,
							offset: this.offset,
							canPersist: this.canPersist,
							address: this.address,
						};
					}
					get supported() {
						return this.f ? this.f.supportsInstructionBreakpoints : !0;
					}
					toString() {
						return this.instructionReference;
					}
				}
				e.$X3 = V;
				class G {
					constructor(W, X) {
						(this.sessionId = W), (this.threadId = X);
					}
					getId() {
						return `${this.sessionId}:${this.threadId}`;
					}
				}
				e.$Y3 = G;
				let K = class extends r.$1c {
					constructor(W, X, Y, ie) {
						super(),
							(this.F = X),
							(this.G = Y),
							(this.H = ie),
							(this.b = new Map()),
							(this.f = !0),
							(this.g = this.D(new d.$re())),
							(this.h = this.D(new d.$re())),
							(this.j = this.D(new d.$re())),
							(this.m = this.D(new d.$re())),
							(this.n = new Map()),
							(this.z = this.D(new r.$0c())),
							this.D(
								(0, a.autorun)((ne) => {
									(this.q = W.breakpoints.read(ne)),
										(this.t = W.functionBreakpoints.read(ne)),
										(this.u = W.exceptionBreakpoints.read(ne)),
										(this.w = W.dataBreakpoints.read(ne)),
										this.g.fire(void 0);
								}),
							),
							this.D(
								(0, a.autorun)((ne) => {
									(this.y = W.watchExpressions.read(ne)), this.j.fire(void 0);
								}),
							),
							(this.C = []),
							(this.a = []);
						for (const ne of this.y)
							this.z.set(
								ne.getId(),
								ne.onDidChangeValue((ee) => this.m.fire(ee)),
							);
					}
					getId() {
						return "root";
					}
					getSession(W, X = !1) {
						if (W) return this.getSessions(X).find((Y) => Y.getId() === W);
					}
					getSessions(W = !1) {
						return this.a.filter((X) => W || X.state !== s.State.Inactive);
					}
					addSession(W) {
						this.a = this.a.filter(
							(ie) =>
								!(
									ie.getId() === W.getId() ||
									(ie.state === s.State.Inactive &&
										ie.configuration.name === W.configuration.name)
								),
						);
						let X = 1;
						for (; this.a.some((ie) => ie.getLabel() === W.getLabel()); )
							W.setName(`${W.configuration.name} ${++X}`);
						let Y = -1;
						W.parentSession &&
							(Y = (0, i.$kb)(
								this.a,
								(ie) =>
									ie.parentSession === W.parentSession ||
									ie === W.parentSession,
							)),
							Y >= 0 ? this.a.splice(Y + 1, 0, W) : this.a.push(W),
							this.h.fire(void 0);
					}
					get onDidChangeBreakpoints() {
						return this.g.event;
					}
					get onDidChangeCallStack() {
						return this.h.event;
					}
					get onDidChangeWatchExpressions() {
						return this.j.event;
					}
					get onDidChangeWatchExpressionValue() {
						return this.m.event;
					}
					rawUpdate(W) {
						const X = this.a.find((Y) => Y.getId() === W.sessionId);
						X && (X.rawUpdate(W), this.h.fire(void 0));
					}
					clearThreads(W, X, Y = void 0) {
						const ie = this.a.find((ne) => ne.getId() === W);
						this.b.forEach((ne) => {
							ne.scheduler.dispose(), ne.completeDeferred.complete();
						}),
							this.b.clear(),
							ie && (ie.clearThreads(X, Y), this.h.fire(void 0));
					}
					async fetchCallstack(W, X) {
						if (W.reachedEndOfCallStack) return;
						const Y = W.stoppedDetails?.totalFrames,
							ie = typeof Y == "number" ? Y - W.getCallStack().length : void 0;
						(!X || (ie && X > ie)) && (X = ie),
							X && X > 0 && (await W.fetchCallStack(X), this.h.fire());
					}
					refreshTopOfCallstack(W, X = !0) {
						if (W.session.capabilities.supportsDelayedStackTraceLoading) {
							let ie = Promise.resolve();
							const ne = new Promise((ee, _) => {
								ie = W.fetchCallStack(1).then(() => {
									if (!X) {
										ee(), this.h.fire();
										return;
									}
									if (!this.b.has(W.getId())) {
										const Q = new w.$0h();
										this.b.set(W.getId(), {
											completeDeferred: Q,
											scheduler: new w.$Yh(() => {
												W.fetchCallStack(19)
													.then(() => {
														const Z = W.getStaleCallStack(),
															se = W.getCallStack();
														let re = Z.length !== se.length;
														for (let le = 1; le < Z.length && !re; le++)
															re = !Z[le].equals(se[le]);
														re && this.h.fire();
													})
													.finally(() => {
														Q.complete(), this.b.delete(W.getId());
													});
											}, 420),
										});
									}
									const te = this.b.get(W.getId());
									te.scheduler.schedule(),
										te.completeDeferred.p.then(ee, _),
										this.h.fire();
								});
							});
							return { topCallStack: ie, wholeCallStack: ne };
						}
						const Y = W.fetchCallStack();
						return { wholeCallStack: Y, topCallStack: Y };
					}
					getBreakpoints(W) {
						if (W) {
							const X = W.uri?.toString(),
								Y = W.originalUri?.toString();
							return this.q.filter(
								(ie) =>
									!(
										(X && ie.uri.toString() !== X) ||
										(Y && ie.originalUri.toString() !== Y) ||
										(W.lineNumber && ie.lineNumber !== W.lineNumber) ||
										(W.column && ie.column !== W.column) ||
										(W.enabledOnly && (!this.f || !ie.enabled)) ||
										(W.triggeredOnly && ie.triggeredBy === void 0)
									),
							);
						}
						return this.q;
					}
					getFunctionBreakpoints() {
						return this.t;
					}
					getDataBreakpoints() {
						return this.w;
					}
					getExceptionBreakpoints() {
						return this.u;
					}
					getExceptionBreakpointsForSession(W) {
						return this.u.filter((X) => X.isSupportedSession(W));
					}
					getInstructionBreakpoints() {
						return this.C;
					}
					setExceptionBreakpointsForSession(W, X) {
						if (!X) return;
						let Y = !1;
						X.forEach((ie) => {
							let ne = this.u.filter((ee) => ee.matches(ie)).pop();
							ne ||
								((Y = !0),
								(ne = new q({
									filter: ie.filter,
									label: ie.label,
									enabled: !!ie.default,
									supportsCondition: !!ie.supportsCondition,
									description: ie.description,
									conditionDescription: ie.conditionDescription,
								})),
								this.u.push(ne)),
								ne.setSupportedSession(W, !0);
						}),
							Y && this.g.fire(void 0);
					}
					removeExceptionBreakpointsForSession(W) {
						this.u.forEach((X) => X.setSupportedSession(W, !1));
					}
					setExceptionBreakpointFallbackSession(W) {
						this.u.forEach((X) => X.setFallback(X.isSupportedSession(W)));
					}
					setExceptionBreakpointCondition(W, X) {
						(W.condition = X), this.g.fire(void 0);
					}
					areBreakpointsActivated() {
						return this.f;
					}
					setBreakpointsActivated(W) {
						(this.f = W), this.g.fire(void 0);
					}
					addBreakpoints(W, X, Y = !0) {
						const ie = X.map(
							(ne) =>
								new F(
									{
										uri: W,
										lineNumber: ne.lineNumber,
										column: ne.column,
										enabled: ne.enabled ?? !0,
										condition: ne.condition,
										hitCondition: ne.hitCondition,
										logMessage: ne.logMessage,
										triggeredBy: ne.triggeredBy,
										adapterData: void 0,
										mode: ne.mode,
										modeLabel: ne.modeLabel,
									},
									this.F,
									this.G,
									this.H,
									ne.id,
								),
						);
						return (
							(this.q = this.q.concat(ie)),
							(this.f = !0),
							this.I(),
							Y && this.g.fire({ added: ie, sessionOnly: !1 }),
							ie
						);
					}
					removeBreakpoints(W) {
						(this.q = this.q.filter(
							(X) => !W.some((Y) => Y.getId() === X.getId()),
						)),
							this.g.fire({ removed: W, sessionOnly: !1 });
					}
					updateBreakpoints(W) {
						const X = [];
						this.q.forEach((Y) => {
							const ie = W.get(Y.getId());
							ie && (Y.update(ie), X.push(Y));
						}),
							this.I(),
							this.g.fire({ changed: X, sessionOnly: !1 });
					}
					setBreakpointSessionData(W, X, Y) {
						this.q.forEach((ie) => {
							if (!Y) ie.setSessionData(W, void 0);
							else {
								const ne = Y.get(ie.getId());
								ne && ie.setSessionData(W, U(ne, X));
							}
						}),
							this.t.forEach((ie) => {
								if (!Y) ie.setSessionData(W, void 0);
								else {
									const ne = Y.get(ie.getId());
									ne && ie.setSessionData(W, U(ne, X));
								}
							}),
							this.w.forEach((ie) => {
								if (!Y) ie.setSessionData(W, void 0);
								else {
									const ne = Y.get(ie.getId());
									ne && ie.setSessionData(W, U(ne, X));
								}
							}),
							this.u.forEach((ie) => {
								if (!Y) ie.setSessionData(W, void 0);
								else {
									const ne = Y.get(ie.getId());
									ne && ie.setSessionData(W, U(ne, X));
								}
							}),
							this.C.forEach((ie) => {
								if (!Y) ie.setSessionData(W, void 0);
								else {
									const ne = Y.get(ie.getId());
									ne && ie.setSessionData(W, U(ne, X));
								}
							}),
							this.g.fire({ sessionOnly: !0 });
					}
					getDebugProtocolBreakpoint(W, X) {
						const Y = this.q.find((ie) => ie.getId() === W);
						if (Y) return Y.getDebugProtocolBreakpoint(X);
					}
					getBreakpointModes(W) {
						return [...this.n.values()].filter((X) => X.appliesTo.includes(W));
					}
					registerBreakpointModes(W, X) {
						for (const Y of X) {
							const ie = `${Y.mode}/${Y.label}`,
								ne = this.n.get(ie);
							if (ne)
								for (const ee of Y.appliesTo)
									ne.appliesTo.includes(ee) || ne.appliesTo.push(ee);
							else {
								const ee = [...this.n.values()].find(
									(_) => _ !== ne && _.label === Y.label,
								);
								ee && (ee.label = `${ee.label} (${ee.firstFromDebugType})`),
									this.n.set(ie, {
										mode: Y.mode,
										label: ee ? `${Y.label} (${W})` : Y.label,
										firstFromDebugType: W,
										description: Y.description,
										appliesTo: Y.appliesTo.slice(),
									});
							}
						}
					}
					I() {
						(this.q = this.q.sort((W, X) =>
							W.uri.toString() !== X.uri.toString()
								? h.$jh(W.uri).localeCompare(h.$jh(X.uri))
								: W.lineNumber === X.lineNumber
									? W.column && X.column
										? W.column - X.column
										: 1
									: W.lineNumber - X.lineNumber,
						)),
							(this.q = (0, t.$Qb)(
								this.q,
								(W) => `${W.uri.toString()}:${W.lineNumber}:${W.column}`,
							));
					}
					setEnablement(W, X) {
						if (
							W instanceof F ||
							W instanceof x ||
							W instanceof q ||
							W instanceof H ||
							W instanceof V
						) {
							const Y = [];
							W.enabled !== X &&
								(W instanceof F ||
									W instanceof x ||
									W instanceof H ||
									W instanceof V) &&
								Y.push(W),
								(W.enabled = X),
								X && (this.f = !0),
								this.g.fire({ changed: Y, sessionOnly: !1 });
						}
					}
					enableOrDisableAllBreakpoints(W) {
						const X = [];
						this.q.forEach((Y) => {
							Y.enabled !== W && X.push(Y), (Y.enabled = W);
						}),
							this.t.forEach((Y) => {
								Y.enabled !== W && X.push(Y), (Y.enabled = W);
							}),
							this.w.forEach((Y) => {
								Y.enabled !== W && X.push(Y), (Y.enabled = W);
							}),
							this.C.forEach((Y) => {
								Y.enabled !== W && X.push(Y), (Y.enabled = W);
							}),
							W && (this.f = !0),
							this.g.fire({ changed: X, sessionOnly: !1 });
					}
					addFunctionBreakpoint(W, X) {
						const Y = new x(W, X);
						return (
							this.t.push(Y), this.g.fire({ added: [Y], sessionOnly: !1 }), Y
						);
					}
					updateFunctionBreakpoint(W, X) {
						const Y = this.t.find((ie) => ie.getId() === W);
						Y &&
							(typeof X.name == "string" && (Y.name = X.name),
							typeof X.condition == "string" && (Y.condition = X.condition),
							typeof X.hitCondition == "string" &&
								(Y.hitCondition = X.hitCondition),
							this.g.fire({ changed: [Y], sessionOnly: !1 }));
					}
					removeFunctionBreakpoints(W) {
						let X;
						W
							? ((X = this.t.filter((Y) => Y.getId() === W)),
								(this.t = this.t.filter((Y) => Y.getId() !== W)))
							: ((X = this.t), (this.t = [])),
							this.g.fire({ removed: X, sessionOnly: !1 });
					}
					addDataBreakpoint(W, X) {
						const Y = new H(W, X);
						this.w.push(Y), this.g.fire({ added: [Y], sessionOnly: !1 });
					}
					updateDataBreakpoint(W, X) {
						const Y = this.w.find((ie) => ie.getId() === W);
						Y &&
							(typeof X.condition == "string" && (Y.condition = X.condition),
							typeof X.hitCondition == "string" &&
								(Y.hitCondition = X.hitCondition),
							this.g.fire({ changed: [Y], sessionOnly: !1 }));
					}
					removeDataBreakpoints(W) {
						let X;
						W
							? ((X = this.w.filter((Y) => Y.getId() === W)),
								(this.w = this.w.filter((Y) => Y.getId() !== W)))
							: ((X = this.w), (this.w = [])),
							this.g.fire({ removed: X, sessionOnly: !1 });
					}
					addInstructionBreakpoint(W) {
						const X = new V(W);
						this.C.push(X), this.g.fire({ added: [X], sessionOnly: !0 });
					}
					removeInstructionBreakpoints(W, X) {
						let Y = [];
						if (W)
							for (let ie = 0; ie < this.C.length; ie++) {
								const ne = this.C[ie];
								ne.instructionReference === W &&
									(X === void 0 || ne.offset === X) &&
									(Y.push(ne), this.C.splice(ie--, 1));
							}
						else (Y = this.C), (this.C = []);
						this.g.fire({ removed: Y, sessionOnly: !1 });
					}
					getWatchExpressions() {
						return this.y;
					}
					addWatchExpression(W) {
						const X = new P(W || "");
						return (
							this.z.set(
								X.getId(),
								X.onDidChangeValue((Y) => this.m.fire(Y)),
							),
							this.y.push(X),
							this.j.fire(X),
							X
						);
					}
					renameWatchExpression(W, X) {
						const Y = this.y.filter((ie) => ie.getId() === W);
						Y.length === 1 && ((Y[0].name = X), this.j.fire(Y[0]));
					}
					removeWatchExpressions(W = null) {
						if (
							((this.y = W ? this.y.filter((X) => X.getId() !== W) : []),
							this.j.fire(void 0),
							!W)
						) {
							this.z.clearAndDisposeAll();
							return;
						}
						this.z.deleteAndDispose(W);
					}
					moveWatchExpression(W, X) {
						const Y = this.y.find((ie) => ie.getId() === W);
						Y &&
							((this.y = this.y.filter((ie) => ie.getId() !== W)),
							(this.y = this.y.slice(0, X).concat(Y, this.y.slice(X))),
							this.j.fire(void 0));
					}
					sourceIsNotAvailable(W) {
						this.a.forEach((X) => {
							const Y = X.getSourceForUri(W);
							Y && (Y.available = !1);
						}),
							this.h.fire(void 0);
					}
				};
				(e.$Z3 = K),
					(e.$Z3 = K = Ne([j(1, $.$kZ), j(2, b.$Vl), j(3, f.$ik)], K));
			},
		),
		