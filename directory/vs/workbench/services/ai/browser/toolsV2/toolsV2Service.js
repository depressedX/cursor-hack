import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/instantiation/common/extensions.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './toolsV2HandlerRegistryService.js';
import './readSemsearchFilesHandler.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../contrib/composer/browser/composerDataService.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import './ripgrepSearchHandler.js';
import './runTerminalCommandHandler.js';
import './readFileHandler.js';
import './listDirHandler.js';
import './editHandler.js';
import './fileSearchHandler.js';
import './semanticSearchFullHandler.js';
import './createFileHandler.js';
import './deleteFileHandler.js';
import './errors.js';
import './reapplyHandler.js';
import '../../../../../base/common/errors.js';
import './parallelApplyHandler.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../../external/bufbuild/protobuf.js';
define(
			de[4363],
			he([
				1, 0, 124, 3, 20, 5, 398, 3644, 126, 209, 167, 3930, 3931, 4362, 3929,
				3977, 4361, 3645, 3975, 3976, 821, 3979, 29, 3978, 45, 86,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ezc = e.$dzc = void 0),
					(e.$dzc = (0, E.$Mi)("toolV2Service"));
				let I = class extends i.$1c {
					constructor(k, L, D) {
						super(),
							(this.a = k),
							(this.b = L),
							(this.c = D),
							this.a.registerHandler(
								t.ClientSideToolV2.READ_SEMSEARCH_FILES,
								d.$Yyc,
							),
							this.a.registerHandler(t.ClientSideToolV2.RIPGREP_SEARCH, a.$1yc),
							this.a.registerHandler(t.ClientSideToolV2.READ_FILE, c.$4yc),
							this.a.registerHandler(t.ClientSideToolV2.LIST_DIR, n.$5yc),
							this.a.registerHandler(t.ClientSideToolV2.EDIT_FILE, g.$8yc),
							this.a.registerHandler(t.ClientSideToolV2.FILE_SEARCH, p.$9yc),
							this.a.registerHandler(
								t.ClientSideToolV2.SEMANTIC_SEARCH_FULL,
								o.$0yc,
							),
							this.a.registerHandler(t.ClientSideToolV2.CREATE_FILE, f.$$yc),
							this.a.registerHandler(t.ClientSideToolV2.DELETE_FILE, b.$_yc),
							this.a.registerHandler(t.ClientSideToolV2.REAPPLY, l.$azc),
							this.a.registerHandler(t.ClientSideToolV2.PARALLEL_APPLY, $.$bzc),
							this.a.registerHandler(
								t.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2,
								h.$2yc,
							),
							this.a.registerHandler(
								t.ClientSideToolV2.RUN_TERMINAL_COMMAND,
								T(t.ClientSideToolV2.RUN_TERMINAL_COMMAND),
								!0,
							),
							this.a.registerHandler(
								t.ClientSideToolV2.READ_FILE_FOR_IMPORTS,
								T(t.ClientSideToolV2.READ_FILE_FOR_IMPORTS),
								!0,
							);
					}
					async runStreamingTool(k, L, D, M) {
						if (k.tool === t.ClientSideToolV2.UNSPECIFIED)
							throw new Error(
								"[composer] ToolFormer: tool call is unspecified",
							);
						await this.a
							.getHandler(k.tool)
							.streamedCall(k.params.value, L, k.toolCallId, D, M);
					}
					async finishStreamingTool(k, L, D) {
						if (k.tool === t.ClientSideToolV2.UNSPECIFIED)
							throw new Error(
								"[composer] ToolFormer: tool call is unspecified",
							);
						const N = await this.a
							.getHandler(k.tool)
							.finishStream(k.params.value, L, k.toolCallId, D);
						return new t.$Mx({
							tool: k.tool,
							result: { case: C.$Uyc[k.tool].returnName, value: N },
						});
					}
					async runTool(k, L, D, M) {
						const N = this.b.getToolFormer(D);
						if (!N)
							throw new Error("[composer] ToolFormer: capability not found");
						const A = N.getAbortSignal();
						return new Promise((R, O) => {
							(async () => {
								try {
									if (k.tool === t.ClientSideToolV2.UNSPECIFIED)
										throw new Error(
											"[composer] ToolFormer: tool call is unspecified",
										);
									const z = await this.a
											.getHandler(k.tool)
											.call(k.params.value, L, k.toolCallId, D, M),
										F = new t.$Mx({
											tool: k.tool,
											result: { case: C.$Uyc[k.tool].returnName, value: z },
										});
									R(F);
								} catch (U) {
									O(U);
								}
							})(),
								A.addEventListener("abort", () => {
									try {
										if (k.tool === t.ClientSideToolV2.UNSPECIFIED)
											throw new Error(
												"[composer] ToolFormer: tool call is unspecified",
											);
										const U = N.getBubbleDataByToolCallId(k.toolCallId);
										U
											? R(
													new t.$Mx({
														tool: k.tool,
														result: {
															case: C.$Uyc[k.tool].returnName,
															value: U.result,
														},
													}),
												)
											: O(new y.$9());
									} catch (U) {
										O(U);
									}
								});
						});
					}
					async setupTool(k, L, D) {
						if (k.tool === t.ClientSideToolV2.UNSPECIFIED)
							throw new Error(
								"[composer] ToolFormer: tool call is unspecified",
							);
						return await this.a
							.getHandler(k.tool)
							.setup(k.params.value, L, k.toolCallId, D);
					}
					async *toolWrappedStream(k, L, D, M) {
						const A = (
							M?.composerId
								? this.b.getComposerData(M.composerId)
								: void 0
						)
							? this.b.getComposerCapability(
									M?.composerId,
									u.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
							: void 0;
						if (!A)
							throw new Error("[composer] ToolFormer: capability not found");
						let R, O;
						try {
							for await (const B of L)
								if (B.response.case === "conversationSummary") {
									const U = B.response.value;
									this.b.updateComposerDataSetStore(M?.composerId || "", (z) =>
										z(
											"conversation",
											(F) =>
												F.serverBubbleId ===
													U.truncationLastBubbleIdInclusive ||
												F.bubbleId === U.truncationLastBubbleIdInclusive,
											"cachedConversationSummary",
											U,
										),
									);
								} else if (B.response.case === "clientSideToolV2Call") {
									const U = B.response.value;
									try {
										if (U.tool === t.ClientSideToolV2.UNSPECIFIED)
											throw new Error(
												"[composer] ToolFormer: tool call is unspecified",
											);
										if (R !== U.toolCallId) {
											await A.handleInitialToolCall({
												toolCallId: U.toolCallId,
												toolCallType: U.tool,
												params: U.params,
												name: U.name,
												rawArgs: U.rawArgs,
												isStreaming: U.isStreaming,
											});
											try {
												O = await this.setupTool(U, D, M?.composerId || "");
											} catch (F) {
												if (F instanceof C.$Vyc) {
													k.push(
														new m.$hA({
															request: {
																case: "clientSideToolV2Result",
																value: this.f(U),
															},
														}),
													);
													continue;
												}
												throw F;
											}
											A.startShowCancelAndResumeTimeout(U.isStreaming);
										}
										let z = D;
										if (
											(U.timeoutMs &&
												((z = new AbortController()),
												D.signal.addEventListener("abort", () => {
													z.abort();
												}),
												setTimeout(() => {
													z.abort();
												}, U.timeoutMs)),
											this.c.nonPersistentStorage.composerState
												.shouldSimulateToolFormerError)
										)
											throw new s.$3yc({
												clientVisibleErrorMessage: "Simulated tool call error",
												modelVisibleErrorMessage: "Simulated tool call error",
												actualErrorMessage: "Simulated tool call error",
											});
										if (U.isStreaming)
											if (R === void 0)
												if (U.isLastMessage) {
													const F = await this.runTool(
														U,
														z,
														M?.composerId || "",
														O,
													);
													A.handleToolResult(F, U.toolCallId),
														k.push(
															new m.$hA({
																request: {
																	case: "clientSideToolV2Result",
																	value: F,
																},
															}),
														),
														(R = void 0);
												} else
													this.runStreamingTool(U, z, M?.composerId || "", !0),
														(R = U.toolCallId);
											else if (!U.isLastMessage)
												this.runStreamingTool(U, z, M?.composerId || "", !1);
											else {
												const F = await this.finishStreamingTool(
													U,
													z,
													M?.composerId || "",
												);
												A.handleToolResult(F, U.toolCallId),
													k.push(
														new m.$hA({
															request: {
																case: "clientSideToolV2Result",
																value: F,
															},
														}),
													),
													(R = void 0);
											}
										else {
											const F = await this.runTool(
												U,
												z,
												M?.composerId || "",
												O,
											);
											F.result.case !== void 0 &&
												A.handleToolResult(F, U.toolCallId),
												k.push(
													new m.$hA({
														request: {
															case: "clientSideToolV2Result",
															value: F,
														},
													}),
												);
										}
									} catch (z) {
										const F = U.tool,
											x = F in C.$Uyc ? C.$Uyc[F]?.paramName : "unknown";
										console.error(
											`[ToolV2Service] Error executing tool ${U.tool} (${x}):`,
											{
												toolCallId: U.toolCallId,
												name: U.name,
												isStreaming: U.isStreaming,
												error:
													z instanceof Error
														? {
																name: z.name,
																message: z.message,
																stack: z.stack,
															}
														: z,
											},
										);
										let H = z.message,
											q = z.message;
										z instanceof s.$3yc &&
											((H = z.modelVisibleErrorMessage),
											(q = z.clientVisibleErrorMessage),
											console.error("[ToolV2Service] ToolCallError details:", {
												clientMessage: q,
												modelMessage: H,
												actualError: z.actualErrorMessage,
											}));
										const V = new t.$Mx({
											tool: U.tool,
											error: {
												clientVisibleErrorMessage: q,
												modelVisibleErrorMessage: H,
											},
										});
										k.push(
											new m.$hA({
												request: { case: "clientSideToolV2Result", value: V },
											}),
										);
									}
								} else
									B.response.case === "streamUnifiedChatResponse" &&
										(yield B.response.value);
						} catch (B) {
							throw (
								(console.error(
									"[composer] ToolFormer: error in toolWrappedStream",
									R,
								),
								A.handleToolError(B),
								B)
							);
						}
					}
					f(k) {
						switch (k.tool) {
							case t.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2:
								return new t.$Mx({
									tool: k.tool,
									result: {
										case: "runTerminalCommandV2Result",
										value: new t.$My({ output: "", rejected: !0 }),
									},
								});
							case t.ClientSideToolV2.DELETE_FILE:
								return new t.$Mx({
									tool: k.tool,
									result: {
										case: "deleteFileResult",
										value: new t.$Iy({ rejected: !0 }),
									},
								});
							default:
								throw new Error(
									`[composer] ToolFormer: no rejected tool result for tool ${k.tool}`,
								);
						}
					}
				};
				(e.$ezc = I),
					(e.$ezc = I =
						Ne([j(0, C.$Tyc), j(1, r.IComposerDataService), j(2, v.$0zb)], I)),
					(0, w.$lK)(e.$dzc, I, w.InstantiationType.Delayed);
				function T(P) {
					const k = S.proto3.getEnumType(t.ClientSideToolV2).values[P].name,
						L = P;
					return class {
						async call(D, M, N, A, R) {
							throw new s.$3yc({
								clientVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								modelVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								actualErrorMessage: `Tool ${k} with id ${L} is not supported in this client`,
							});
						}
						async streamedCall(D, M, N, A, R) {
							throw new s.$3yc({
								clientVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								modelVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								actualErrorMessage: `Tool ${k} with id ${L} is not supported in this client`,
							});
						}
						async finishStream(D, M, N, A) {
							throw new s.$3yc({
								clientVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								modelVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								actualErrorMessage: `Tool ${k} with id ${L} is not supported in this client`,
							});
						}
						async setup(D, M, N, A) {
							throw new s.$3yc({
								clientVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								modelVisibleErrorMessage: `Tool ${k} is not supported in this client`,
								actualErrorMessage: `Tool ${k} with id ${L} is not supported in this client`,
							});
						}
					};
				}
			},
		);
	var ms =
			(this && this.__addDisposableResource) ||
			function (ce, e, t) {
				if (e != null) {
					if (typeof e != "object" && typeof e != "function")
						throw new TypeError("Object expected.");
					var i, w;
					if (t) {
						if (!Symbol.asyncDispose)
							throw new TypeError("Symbol.asyncDispose is not defined.");
						i = e[Symbol.asyncDispose];
					}
					if (i === void 0) {
						if (!Symbol.dispose)
							throw new TypeError("Symbol.dispose is not defined.");
						(i = e[Symbol.dispose]), t && (w = i);
					}
					if (typeof i != "function")
						throw new TypeError("Object not disposable.");
					w &&
						(i = function () {
							try {
								w.call(this);
							} catch (E) {
								return Promise.reject(E);
							}
						}),
						ce.stack.push({ value: e, dispose: i, async: t });
				} else t && ce.stack.push({ async: !0 });
				return e;
			},
		ps =
			(this && this.__disposeResources) ||
			(function (ce) {
				return function (e) {
					function t(C) {
						(e.error = e.hasError
							? new ce(C, e.error, "An error was suppressed during disposal.")
							: C),
							(e.hasError = !0);
					}
					var i,
						w = 0;
					function E() {
						for (; (i = e.stack.pop()); )
							try {
								if (!i.async && w === 1)
									return (w = 0), e.stack.push(i), Promise.resolve().then(E);
								if (i.dispose) {
									var C = i.dispose.call(i.value);
									if (i.async)
										return (
											(w |= 2),
											Promise.resolve(C).then(E, function (d) {
												return t(d), E();
											})
										);
								} else w |= 1;
							} catch (d) {
								t(d);
							}
						if (w === 1)
							return e.hasError ? Promise.reject(e.error) : Promise.resolve();
						if (e.hasError) throw e.error;
					}
					return E();
				};
			})(
				typeof SuppressedError == "function"
					? SuppressedError
					: function (ce, e, t) {
							var i = new Error(t);
							return (
								(i.name = "SuppressedError"),
								(i.error = ce),
								(i.suppressed = e),
								i
							);
						},
			);
	