define(
			de[3924],
			he([1, 0, 262, 351, 617, 209, 126, 167, 395]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.LoopOnCommand = void 0);
				let r = class extends t.ComposerCapability {
					constructor(a, h, c, n) {
						super(a, h),
							(this.terminalExecutionService = c),
							(this.composerDataService = n),
							(this.type =
								d.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_COMMAND),
							(this.name =
								t.capabilityTypeLabels[
									d.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_COMMAND
								]),
							(this.priority = 2),
							(this.schema = i.loopOnCommandSchema),
							(this.lastExecutionResult = null),
							(this.sessionId = void 0),
							this.terminalExecutionService
								.startSession()
								.then(({ sessionId: g }) => (this.sessionId = g));
					}
					silentRunInPlaceMutateRequestBeforeSubmit() {
						return !0;
					}
					async executeCommand() {
						if (!this.lastExecutionResult) {
							let a = this.sessionId;
							if (!a) {
								const { sessionId: c, terminalInstance: n } =
									await this.terminalExecutionService.startSession();
								(this.sessionId = c), (a = c);
							}
							const h = await this.terminalExecutionService.execute(
								a,
								this.data.command,
							);
							this.lastExecutionResult = {
								output: h.output,
								exitCode: h.exitCode ?? 0,
							};
						}
						return this.lastExecutionResult;
					}
					async runInPlaceMutateRequestBeforeSubmit(a, h) {
						const { composerId: c } = h,
							n = this.composerDataService.getComposerData(c),
							g = a.conversation?.[a.conversation.length - 1];
						if (!g || !n || g.type !== C.ConversationMessage_MessageType.HUMAN)
							return;
						const p = await this.executeCommand(),
							o = new d.$1z({
								type: d.ComposerCapabilityRequest_ComposerCapabilityType
									.LOOP_ON_COMMAND,
								data: {
									case: "loopOnCommand",
									value: {
										command: this.data.command,
										customInstructions: this.data.customInstructions,
										output: p.output,
										exitCode: p.exitCode,
									},
								},
							});
						(g.capabilities = [...(g.capabilities ?? []), o]),
							(this.lastExecutionResult = null);
					}
					async onComposerSettledReturnShouldLoop(a) {
						const { composerId: h } = a,
							c = this.composerDataService.getComposerData(h);
						if (!c) return !1;
						const n = (0,
							t.countCapabilityIterationsFromLastHumanMessageExcludingCurrent)(
								c.conversation,
							),
							g = this.data.maxIterations ?? 5;
						if (n >= g) return !1;
						const p = await this.executeCommand();
						return (this.lastExecutionResult = null), p.exitCode !== 0;
					}
					silentOnComposerSettled(a) {
						return !1;
					}
				};
				(e.LoopOnCommand = r),
					(e.LoopOnCommand = r =
						Ne(
							[
								(0, m.autoCancellableAndStatusUpdater)(),
								j(2, w.$Ycc),
								j(3, E.IComposerDataService),
							],
							r,
						)),
					(0, t.registerComposerCapability)(
						d.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_COMMAND,
						r,
					);
			},
		),
		