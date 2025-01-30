import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/map.js';
import '../../../base/common/uri.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../platform/log/common/log.js';
import './extHost.protocol.js';
import './extHostCommands.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../contrib/webview/common/webview.js';
import '../../contrib/notebook/common/notebookExecutionService.js';
import '../../services/extensions/common/extensions.js';
import '../../services/extensions/common/proxyIdentifier.js';
import '../../contrib/notebook/common/notebookKernelService.js';
define(
			Pe[586],
			Ne([
				1, 0, 20, 9, 23, 4, 3, 33, 2, 25, 14, 6, 44, 17, 11, 189, 526, 29, 74,
				527,
			]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h, $, T, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Qid = void 0),
					(t.$Rid = E),
					(k = tt(k));
				let u = class {
					constructor(C, O, A, J, L) {
						(this.m = O),
							(this.n = A),
							(this.o = J),
							(this.q = L),
							(this.b = new I.$Gc()),
							(this.c = new I.$Gc()),
							(this.f = new Map()),
							(this.g = 0),
							(this.h = new Map()),
							(this.i = 0),
							(this.j = new Map()),
							(this.k = 0),
							(this.l = new N.$re()),
							(this.onDidChangeNotebookCellExecutionState = this.l.event),
							(this.r = 0),
							(this.s = {}),
							(this.a = C.getProxy(y.$lbb.MainThreadNotebookKernels));
						const b = new d.$_db(
								"notebook.selectKernel",
								"_notebook.selectKernel",
								"Trigger kernel picker for specified notebook editor widget",
								[
									new d.$0db(
										"options",
										"Select kernel options",
										(D) => !0,
										(D) => {
											if (D && "notebookEditor" in D && "id" in D) {
												const M = this.n.getIdByEditor(D.notebookEditor);
												return {
													id: D.id,
													extension: D.extension,
													notebookEditorId: M,
												};
											} else if (D && "notebookEditor" in D) {
												const M = this.n.getIdByEditor(D.notebookEditor);
												if (M === void 0)
													throw new Error(
														`Cannot invoke 'notebook.selectKernel' for unrecognized notebook editor ${D.notebookEditor.notebook.uri.toString()}`,
													);
												return { notebookEditorId: M };
											}
											return D;
										},
									),
								],
								d.$$db.Void,
							),
							F = new d.$_db(
								"vscode.executeNotebookVariableProvider",
								"_executeNotebookVariableProvider",
								"Execute notebook variable provider",
								[d.$0db.Uri],
								new d.$$db(
									"A promise that resolves to an array of variables",
									(D, M) =>
										D.map((z) => ({
											variable: {
												name: z.name,
												value: z.value,
												expression: z.expression,
												type: z.type,
												language: z.language,
											},
											hasNamedChildren: z.hasNamedChildren,
											indexedChildrenCount: z.indexedChildrenCount,
										})),
								),
							);
						this.o.registerApiCommand(b), this.o.registerApiCommand(F);
					}
					createNotebookController(C, O, A, J, L, b) {
						for (const he of this.j.values())
							if (
								he.controller.id === O &&
								n.$Gn.equals(C.identifier, he.extensionId)
							)
								throw new Error(
									`notebook controller with id '${O}' ALREADY exist`,
								);
						const F = this.k++,
							D = this;
						this.q.trace(
							`NotebookController[${F}], CREATED by ${C.identifier.value}, ${O}`,
						);
						const M = () =>
							console.warn(
								`NO execute handler from notebook controller '${B.id}' of extension: '${C.identifier}'`,
							);
						let z = !1;
						const Q = new N.$re(),
							H = new N.$re(),
							B = {
								id: E(C.identifier, O),
								notebookType: A,
								extensionId: C.identifier,
								extensionLocation: C.extensionLocation,
								label: J || C.identifier.value,
								preloads: b ? b.map(k.NotebookRendererScript.from) : [],
							};
						let U = L ?? M,
							Z,
							W;
						this.a.$addKernel(F, B).catch((he) => {
							console.log(he), (z = !0);
						});
						let G = 0;
						const fe = () => {
								if (z) return;
								const he = ++G;
								Promise.resolve().then(() => {
									he === G && this.a.$updateKernel(F, B);
								});
							},
							ae = new I.$Gc(),
							Se = {
								get id() {
									return O;
								},
								get notebookType() {
									return B.notebookType;
								},
								onDidChangeSelectedNotebooks: Q.event,
								get label() {
									return B.label;
								},
								set label(he) {
									(B.label = he ?? C.displayName ?? C.name), fe();
								},
								get detail() {
									return B.detail ?? "";
								},
								set detail(he) {
									(B.detail = he), fe();
								},
								get description() {
									return B.description ?? "";
								},
								set description(he) {
									(B.description = he), fe();
								},
								get supportedLanguages() {
									return B.supportedLanguages;
								},
								set supportedLanguages(he) {
									(B.supportedLanguages = he), fe();
								},
								get supportsExecutionOrder() {
									return B.supportsExecutionOrder ?? !1;
								},
								set supportsExecutionOrder(he) {
									(B.supportsExecutionOrder = he), fe();
								},
								get rendererScripts() {
									return B.preloads
										? B.preloads.map(k.NotebookRendererScript.to)
										: [];
								},
								get executeHandler() {
									return U;
								},
								set executeHandler(he) {
									U = he ?? M;
								},
								get interruptHandler() {
									return Z;
								},
								set interruptHandler(he) {
									(Z = he), (B.supportsInterrupt = !!he), fe();
								},
								set variableProvider(he) {
									(0, $.$u2)(C, "notebookVariableProvider"),
										(W = he),
										(B.hasVariableProvider = !!he),
										he?.onDidChangeVariables((_) =>
											D.a.$variablesUpdated(_.uri),
										),
										fe();
								},
								get variableProvider() {
									return W;
								},
								createNotebookCellExecution(he) {
									if (z) throw new Error("notebook controller is DISPOSED");
									if (!ae.has(he.notebook.uri))
										throw (
											(D.q.trace(
												`NotebookController[${F}] NOT associated to notebook, associated to THESE notebooks:`,
												Array.from(ae.keys()).map((_) => _.toString()),
											),
											new Error(
												`notebook controller is NOT associated to notebook: ${he.notebook.uri.toString()}`,
											))
										);
									return D._createNotebookCellExecution(
										he,
										E(C.identifier, this.id),
									);
								},
								createNotebookExecution(he) {
									if (((0, $.$u2)(C, "notebookExecution"), z))
										throw new Error("notebook controller is DISPOSED");
									if (!ae.has(he.uri))
										throw (
											(D.q.trace(
												`NotebookController[${F}] NOT associated to notebook, associated to THESE notebooks:`,
												Array.from(ae.keys()).map((_) => _.toString()),
											),
											new Error(
												`notebook controller is NOT associated to notebook: ${he.uri.toString()}`,
											))
										);
									return D._createNotebookExecution(
										he,
										E(C.identifier, this.id),
									);
								},
								dispose: () => {
									z ||
										(this.q.trace(`NotebookController[${F}], DISPOSED`),
										(z = !0),
										this.j.delete(F),
										Q.dispose(),
										H.dispose(),
										this.a.$removeKernel(F));
								},
								updateNotebookAffinity(he, _) {
									_ === g.NotebookControllerAffinity2.Hidden &&
										(0, $.$u2)(C, "notebookControllerAffinityHidden"),
										D.a.$updateNotebookPriority(F, he.uri, _);
								},
								onDidReceiveMessage: H.event,
								postMessage(he, _) {
									return (
										(0, $.$u2)(C, "notebookMessaging"),
										D.a.$postMessage(F, _ && D.n.getIdByEditor(_), he)
									);
								},
								asWebviewUri(he) {
									return (
										(0, $.$u2)(C, "notebookMessaging"),
										(0, c.$V2b)(he, D.m.remote)
									);
								},
							};
						return (
							this.j.set(F, {
								extensionId: C.identifier,
								controller: Se,
								onDidReceiveMessage: H,
								onDidChangeSelection: Q,
								associatedNotebooks: ae,
							}),
							Se
						);
					}
					getIdByController(C) {
						for (const [O, A] of this.j)
							if (A.controller === C) return E(A.extensionId, C.id);
						return null;
					}
					createNotebookControllerDetectionTask(C, O) {
						const A = this.g++,
							J = this;
						this.q.trace(
							`NotebookControllerDetectionTask[${A}], CREATED by ${C.identifier.value}`,
						),
							this.a.$addKernelDetectionTask(A, O);
						const L = {
							dispose: () => {
								this.f.delete(A), J.a.$removeKernelDetectionTask(A);
							},
						};
						return this.f.set(A, L), L;
					}
					registerKernelSourceActionProvider(C, O, A) {
						const J = this.i++,
							L =
								typeof A.onDidChangeNotebookKernelSourceActions == "function"
									? J
									: void 0,
							b = this;
						this.h.set(J, A),
							this.q.trace(
								`NotebookKernelSourceActionProvider[${J}], CREATED by ${C.identifier.value}`,
							),
							this.a.$addKernelSourceActionProvider(J, J, O);
						let F;
						return (
							L !== void 0 &&
								(F = A.onDidChangeNotebookKernelSourceActions((D) =>
									this.a.$emitNotebookKernelSourceActionsChangeEvent(L),
								)),
							{
								dispose: () => {
									this.h.delete(J),
										b.a.$removeKernelSourceActionProvider(J, J),
										F?.dispose();
								},
							}
						);
					}
					async $provideKernelSourceActions(C, O) {
						const A = this.h.get(C);
						if (A) {
							const J = new P.$Zc();
							return (
								(await A.provideNotebookKernelSourceActions(O)) ?? []
							).map((b) =>
								k.NotebookKernelSourceAction.from(b, this.o.converter, J),
							);
						}
						return [];
					}
					$acceptNotebookAssociation(C, O, A) {
						const J = this.j.get(C);
						if (J) {
							const L = this.n.getNotebookDocument(l.URI.revive(O));
							A
								? J.associatedNotebooks.set(L.uri, !0)
								: J.associatedNotebooks.delete(L.uri),
								this.q.trace(
									`NotebookController[${C}] ASSOCIATE notebook`,
									L.uri.toString(),
									A,
								),
								J.onDidChangeSelection.fire({
									selected: A,
									notebook: L.apiNotebook,
								});
						}
					}
					async $executeCells(C, O, A) {
						const J = this.j.get(C);
						if (!J) return;
						const L = this.n.getNotebookDocument(l.URI.revive(O)),
							b = [];
						for (const F of A) {
							const D = L.getCell(F);
							D && b.push(D.apiCell);
						}
						try {
							this.q.trace(
								`NotebookController[${C}] EXECUTE cells`,
								L.uri.toString(),
								b.length,
							),
								await J.controller.executeHandler.call(
									J.controller,
									b,
									L.apiNotebook,
									J.controller,
								);
						} catch (F) {
							this.q.error(`NotebookController[${C}] execute cells FAILED`, F),
								console.error(F);
						}
					}
					async $cancelCells(C, O, A) {
						const J = this.j.get(C);
						if (!J) return;
						const L = this.n.getNotebookDocument(l.URI.revive(O));
						if (J.controller.interruptHandler)
							await J.controller.interruptHandler.call(
								J.controller,
								L.apiNotebook,
							);
						else
							for (const b of A) {
								const F = L.getCell(b);
								F && this.b.get(F.uri)?.cancel();
							}
						if (J.controller.interruptHandler) {
							const b = this.c.get(L.uri);
							this.c.delete(L.uri),
								A.length &&
									Array.isArray(b) &&
									b.length &&
									b.forEach((F) => F.dispose());
						}
					}
					async $provideVariables(C, O, A, J, L, b, F) {
						const D = this.j.get(C);
						if (!D) return;
						const M = this.n.getNotebookDocument(l.URI.revive(A)),
							z = D.controller.variableProvider;
						if (!z) return;
						let Q;
						if (J !== void 0) {
							if (((Q = this.s[J]), !Q)) return;
						} else this.s = {};
						const H =
								L === "named"
									? g.NotebookVariablesRequestKind.Named
									: g.NotebookVariablesRequestKind.Indexed,
							B = z.provideVariables(M.apiNotebook, Q, H, b, F);
						let U = 0;
						for await (const Z of B) {
							if (F.isCancellationRequested) return;
							const W = {
								id: this.r++,
								name: Z.variable.name,
								value: Z.variable.value,
								type: Z.variable.type,
								interfaces: Z.variable.interfaces,
								language: Z.variable.language,
								expression: Z.variable.expression,
								hasNamedChildren: Z.hasNamedChildren,
								indexedChildrenCount: Z.indexedChildrenCount,
								extensionId: D.extensionId.value,
							};
							if (
								((this.s[W.id] = Z.variable),
								this.a.$receiveVariable(O, W),
								U++ >= a.$e6)
							)
								return;
						}
					}
					$acceptKernelMessageFromRenderer(C, O, A) {
						const J = this.j.get(C);
						if (!J) return;
						const L = this.n.getEditorById(O);
						J.onDidReceiveMessage.fire(
							Object.freeze({ editor: L.apiEditor, message: A }),
						);
					}
					$cellExecutionChanged(C, O, A) {
						const L = this.n.getNotebookDocument(l.URI.revive(C)).getCell(O);
						if (L) {
							const b = A
								? k.NotebookCellExecutionState.to(A)
								: g.NotebookCellExecutionState.Idle;
							b !== void 0 && this.l.fire({ cell: L.apiCell, state: b });
						}
					}
					_createNotebookCellExecution(C, O) {
						if (C.index < 0)
							throw new Error(
								"CANNOT execute cell that has been REMOVED from notebook",
							);
						const J = this.n
							.getNotebookDocument(C.notebook.uri)
							.getCellFromApiCell(C);
						if (!J) throw new Error("invalid cell");
						if (this.b.has(J.uri))
							throw new Error(`duplicate execution for ${J.uri}`);
						const L = new f(O, J, this.a);
						this.b.set(J.uri, L);
						const b = L.onDidChangeState(() => {
							L.state === s.Resolved &&
								(L.dispose(), b.dispose(), this.b.delete(J.uri));
						});
						return L.asApiObject();
					}
					_createNotebookExecution(C, O) {
						const A = this.n.getNotebookDocument(C.uri),
							J = C.getCells().find((F) => {
								const D = A.getCellFromApiCell(F);
								return D && this.b.has(D.uri);
							});
						if (J)
							throw new Error(`duplicate cell execution for ${J.document.uri}`);
						if (this.c.has(A.uri))
							throw new Error(`duplicate notebook execution for ${A.uri}`);
						const L = new w(O, A, this.a),
							b = L.onDidChangeState(() => {
								L.state === o.Resolved &&
									(L.dispose(), b.dispose(), this.c.delete(A.uri));
							});
						return this.c.set(A.uri, [L, b]), L.asApiObject();
					}
				};
				(t.$Qid = u), (t.$Qid = u = wt([rt(4, p.$ik)], u));
				var s;
				(function (R) {
					(R[(R.Init = 0)] = "Init"),
						(R[(R.Started = 1)] = "Started"),
						(R[(R.Resolved = 2)] = "Resolved");
				})(s || (s = {}));
				class f extends P.$1c {
					static {
						this.a = 0;
					}
					get state() {
						return this.f;
					}
					constructor(C, O, A) {
						super(),
							(this.m = O),
							(this.n = A),
							(this.b = f.a++),
							(this.c = new N.$re()),
							(this.onDidChangeState = this.c.event),
							(this.f = s.Init),
							(this.g = this.D(new S.$Ce())),
							(this.h = new m(10, (J) => this.r(J))),
							(this.j = O.internalMetadata.executionOrder),
							this.n.$createExecution(
								this.b,
								C,
								this.m.notebook.uri,
								this.m.handle,
							);
					}
					cancel() {
						this.g.cancel();
					}
					async q(C) {
						await this.h.addItem(C);
					}
					async r(C) {
						const O = Array.isArray(C) ? C : [C];
						return this.n.$updateExecution(this.b, new T.$uO(O));
					}
					s() {
						if (this.f === s.Init)
							throw new Error("Must call start before modifying cell output");
						if (this.f === s.Resolved)
							throw new Error(
								"Cannot modify cell output after calling resolve",
							);
					}
					t(C) {
						let O = this.m;
						if ((C && (O = this.m.notebook.getCellFromApiCell(C)), !O))
							throw new Error("INVALID cell");
						return O.handle;
					}
					w(C) {
						return C.map((O) => {
							const A = g.$Vcb.ensureUniqueMimeTypes(O.items, !0);
							return A === O.items
								? k.NotebookCellOutput.from(O)
								: k.NotebookCellOutput.from({
										items: A,
										id: O.id,
										metadata: O.metadata,
									});
						});
					}
					async y(C, O, A) {
						const J = this.t(O),
							L = this.w((0, e.$6b)(C));
						return this.q({
							editType: h.CellExecutionUpdateType.Output,
							cellHandle: J,
							append: A,
							outputs: L,
						});
					}
					async z(C, O, A) {
						return (
							(C = g.$Vcb.ensureUniqueMimeTypes((0, e.$6b)(C), !0)),
							this.q({
								editType: h.CellExecutionUpdateType.OutputItems,
								items: C.map(k.NotebookCellOutputItem.from),
								outputId: O.id,
								append: A,
							})
						);
					}
					asApiObject() {
						const C = this;
						return Object.freeze({
							get token() {
								return C.g.token;
							},
							get cell() {
								return C.m.apiCell;
							},
							get executionOrder() {
								return C.j;
							},
							set executionOrder(A) {
								(C.j = A),
									C.r([
										{
											editType: h.CellExecutionUpdateType.ExecutionState,
											executionOrder: C.j,
										},
									]);
							},
							start(A) {
								if (C.f === s.Resolved || C.f === s.Started)
									throw new Error("Cannot call start again");
								(C.f = s.Started),
									C.c.fire(),
									C.r({
										editType: h.CellExecutionUpdateType.ExecutionState,
										runStartTime: A,
									});
							},
							end(A, J, L) {
								if (C.f === s.Resolved)
									throw new Error("Cannot call resolve twice");
								(C.f = s.Resolved), C.c.fire(), C.h.flush();
								const b = L
									? {
											message: L.message,
											stack: L.stack,
											location: L?.location
												? {
														startLineNumber: L.location.start.line,
														startColumn: L.location.start.character,
														endLineNumber: L.location.end.line,
														endColumn: L.location.end.character,
													}
												: void 0,
											uri: L.uri,
										}
									: void 0;
								C.n.$completeExecution(
									C.b,
									new T.$uO({ runEndTime: J, lastRunSuccess: A, error: b }),
								);
							},
							clearOutput(A) {
								return C.s(), C.y([], A, !1);
							},
							appendOutput(A, J) {
								return C.s(), C.y(A, J, !0);
							},
							replaceOutput(A, J) {
								return C.s(), C.y(A, J, !1);
							},
							appendOutputItems(A, J) {
								return C.s(), C.z(A, J, !0);
							},
							replaceOutputItems(A, J) {
								return C.s(), C.z(A, J, !1);
							},
						});
					}
				}
				var o;
				(function (R) {
					(R[(R.Init = 0)] = "Init"),
						(R[(R.Started = 1)] = "Started"),
						(R[(R.Resolved = 2)] = "Resolved");
				})(o || (o = {}));
				class w extends P.$1c {
					static {
						this.a = 0;
					}
					get state() {
						return this.f;
					}
					constructor(C, O, A) {
						super(),
							(this.h = O),
							(this.j = A),
							(this.b = w.a++),
							(this.c = new N.$re()),
							(this.onDidChangeState = this.c.event),
							(this.f = o.Init),
							(this.g = this.D(new S.$Ce())),
							this.j.$createNotebookExecution(this.b, C, this.h.uri);
					}
					cancel() {
						this.g.cancel();
					}
					asApiObject() {
						return Object.freeze({
							start: () => {
								if (this.f === o.Resolved || this.f === o.Started)
									throw new Error("Cannot call start again");
								(this.f = o.Started),
									this.c.fire(),
									this.j.$beginNotebookExecution(this.b);
							},
							end: () => {
								if (this.f === o.Resolved)
									throw new Error("Cannot call resolve twice");
								(this.f = o.Resolved),
									this.c.fire(),
									this.j.$completeNotebookExecution(this.b);
							},
						});
					}
				}
				class m {
					constructor(C, O) {
						(this.f = C), (this.g = O), (this.a = []), (this.b = Date.now());
					}
					addItem(C) {
						return (
							this.a.push(C),
							this.c ||
								((this.c = new r.$0h()),
								(this.b = Date.now()),
								(0, r.$Nh)(this.f).then(() => this.flush())),
							Date.now() - this.b > this.f ? this.flush() : this.c.p
						);
					}
					flush() {
						if (this.a.length === 0 || !this.c) return Promise.resolve();
						const C = this.c;
						this.c = void 0;
						const O = this.a;
						return (this.a = []), this.g(O).finally(() => C.complete());
					}
				}
				function E(R, C) {
					return `${R.value}/${C}`;
				}
			},
		),
		