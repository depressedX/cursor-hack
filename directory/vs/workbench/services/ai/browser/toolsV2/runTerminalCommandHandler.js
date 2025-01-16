define(
			de[3931],
			he([1, 0, 167, 124, 3, 19, 9, 45, 219, 209, 107, 617, 226, 398]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2yc = void 0);
				function n(p) {
					return p && typeof p == "object" && "command" in p;
				}
				let g = class {
					constructor(o, f, b, s, l, y) {
						(this.a = o),
							(this.b = f),
							(this.d = b),
							(this.e = s),
							(this.f = l),
							(this.g = y);
					}
					streamedCall(o, f, b, s, l) {
						throw new Error("Method not implemented.");
					}
					finishStream(o, f, b, s) {
						throw new Error("Method not implemented.");
					}
					matchesYoloConfig(o) {
						const f =
								this.d.applicationUserPersistentStorage.composerState
									.yoloCommandAllowlist,
							b =
								this.d.applicationUserPersistentStorage.composerState
									.yoloCommandDenylist;
						return !(
							(b && b.findIndex((s) => o.startsWith(s)) !== -1) ||
							(f && f.length > 0 && f.findIndex((s) => o.startsWith(s)) === -1)
						);
					}
					async setup(o, f, b, s) {
						const y = this.b.getComposerData(s)
							? this.b.getComposerCapability(
									s,
									t.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
							: void 0;
						if (!y)
							throw new Error("[composer] ToolFormer: capability not found");
						const $ = y.getBubbleIdByToolCallId(b);
						if (!$) throw new Error("[composer] ToolFormer: bubble not found");
						o?.newSession === !0 && y.clearSessionId();
						const v = y.getSessionIdAndTerminalInstance();
						return (
							(o?.command &&
								y.shouldUseYoloMode() &&
								(this.d.applicationUserPersistentStorage.composerState
									.yoloPrompt === "" ||
									!o?.requireUserApproval) &&
								this.matchesYoloConfig(o.command)) ||
								(await new Promise((S, I) => {
									y.addPendingDecision(
										$,
										i.ClientSideToolV2.RUN_TERMINAL_COMMAND,
										b,
										(T) => {
											T ? S() : I(new c.$Vyc("User rejected the tool call"));
										},
										!0,
									);
								})),
							{ promise: v }
						);
					}
					async call(o, f, b, s, l) {
						if (!o || !n(o))
							throw new Error("Invalid params for RunTerminalCommandV2");
						const $ = this.b.getComposerData(s)
							? this.b.getComposerCapability(
									s,
									t.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
							: void 0;
						if (!$)
							throw new Error("[composer] ToolFormer: capability not found");
						const v = $.getBubbleIdByToolCallId(b);
						if (!v) throw new Error("[composer] ToolFormer: bubble not found");
						const S = new w.$Zc();
						try {
							$.setBubbleData(v, { additionalData: { status: "loading" } });
							const I = await l.promise,
								T = this.e.getLastLineNumber(I.terminalInstance);
							$.setBubbleData(v, {
								additionalData: {
									sessionId: I.sessionId,
									startAtBufferLine: T,
								},
							});
							const P = f.signal,
								k = new AbortController();
							S.add(
								$.onTerminalPoppedOutIntoBackground(() => {
									k.abort();
								}),
							);
							let L = !1;
							if (
								(f.signal.addEventListener("abort", () => {
									L || $.clearSessionId();
								}),
								o.isBackground)
							)
								return (
									(async () => {
										const M = await this.e.startSession(void 0);
										this.f.setActiveInstance(M.terminalInstance),
											this.f.moveToEditor(M.terminalInstance),
											this.g.addContext({
												composerId: s,
												contextType: "terminalFiles",
												value: {
													uri: M.terminalInstance.resource,
													collapseByDefault: !0,
													text: o.command,
												},
											}),
											M.terminalInstance.rename(o.command),
											$.addDisposable(
												M.terminalInstance.onExit(() => {
													const O = this.b.getComposerData(s);
													if (!O) return;
													const B =
														O.context.terminalFiles?.findIndex((U) =>
															E.$dh.isEqual(
																C.URI.revive(U.uri),
																M.terminalInstance.resource,
															),
														) ?? -1;
													B !== -1 &&
														this.g.removeContext({
															composerId: s,
															contextType: "terminalFiles",
															index: B,
														});
												}),
											);
										const N = this.e.executeStream(M.sessionId, o.command, {});
										let A = "",
											R = !1;
										for await (const O of N) {
											try {
												$.setBubbleData(v, {
													additionalData: {
														status: "success",
														sessionId: M.sessionId,
													},
												}),
													(A = O.content),
													$.handleToolResult(
														new i.$Mx({
															tool: i.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2,
															result: {
																case: "runTerminalCommandResult",
																value: new i.$Uz({ output: A }),
															},
														}),
														b,
														!1,
													);
											} catch {
												R = !0;
											}
											break;
										}
										$.setBubbleData(v, {
											additionalData: {
												status: R
													? "error"
													: P.aborted
														? "cancelled"
														: "success",
											},
										});
									})(),
									new i.$Uz({
										output: "",
										exitCode: void 0,
										poppedOutIntoBackground: !1,
										isRunningInBackground: !0,
										notInterrupted: !1,
									})
								);
							{
								const D = $.getBubbleData(v);
								let M = o.command,
									N = !1;
								n(D?.params) &&
									((M = D.params.command), M !== o.command && (N = !0));
								const A = this.e.executeStream(I.sessionId, M, {
									signal: P,
									stopListenSignal: k.signal,
								});
								let R = "",
									O = !1;
								$.getAbortSignal().addEventListener("abort", () => {
									this.e.cancelStream(I.sessionId);
								});
								let B, U;
								for (;;)
									try {
										const { value: z, done: F } = await A.next();
										if (F) {
											(B = z.exitCode), (U = z.endedReason);
											break;
										}
										z.endedReason !== void 0 && (U = z.endedReason),
											$.setBubbleData(v, {
												additionalData: { status: "running" },
											}),
											(R = z.content),
											$.handleToolResult(
												new i.$Mx({
													tool: i.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2,
													result: {
														case: "runTerminalCommandResult",
														value: new i.$Uz({ output: R }),
													},
												}),
												b,
												!1,
											);
									} catch {
										O = !0;
										break;
									}
								return (
									$.setBubbleData(v, {
										additionalData: {
											status: O ? "error" : P.aborted ? "cancelled" : "success",
										},
									}),
									(L = !0),
									new i.$Uz({
										output: R,
										exitCodeV2: B,
										poppedOutIntoBackground: k.signal.aborted,
										isRunningInBackground: !1,
										notInterrupted: !P.aborted,
										resultingWorkingDirectory: I.terminalInstance.cwd,
										didUserChange: N,
										endedReason: U,
									})
								);
							}
						} finally {
							S.dispose();
						}
					}
				};
				(e.$2yc = g),
					(e.$2yc = g =
						Ne(
							[
								j(0, h.$J6b),
								j(1, r.IComposerDataService),
								j(2, d.$0zb),
								j(3, a.$Ycc),
								j(4, u.$iIb),
								j(5, m.IComposerService),
							],
							g,
						));
			},
		),
		