import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../composer.js';
import '../composerCapabilities.js';
import '../composerCapabilityDecorators.js';
import '../composerCapabilitySchemas.js';
import '../composerDataService.js';
define(
			de[3926],
			he([1, 0, 126, 167, 45, 219, 262, 395, 351, 209]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.RememberThis = void 0);
				let u = class extends C.ComposerCapability {
					constructor(h, c, n, g, p) {
						super(h, c),
							(this.composerDataService = n),
							(this.composerService = g),
							(this.reactiveStorageService = p),
							(this.priority = 1),
							(this.type =
								i.ComposerCapabilityRequest_ComposerCapabilityType.REMEMBER_THIS),
							(this.name = "Remember This"),
							(this.schema = m.rememberThisSchema),
							(this._needsToMutateRequest = { type: "inject-memory" });
					}
					get memories() {
						return (
							this.reactiveStorageService.workspaceUserPersistentStorage
								.composerState?.memories ?? []
						);
					}
					updateMemories(h) {
						this.reactiveStorageService.setWorkspaceUserPersistentStorage(
							"composerState",
							{ memories: h },
						);
					}
					shouldRunOnAfterSubmitChat(h) {
						const c = this.composerDataService.getComposerBubble(
							h.composerId,
							h.humanBubbleId,
						);
						return (
							!h.isCapabilityIteration && c?.context?.useRememberThis === !0
						);
					}
					async onAfterSubmitChat(h) {
						const { composerId: c } = h;
						let n = this.composerDataService.getComposerData(c);
						if (
							!n ||
							!this.composerDataService.getComposerBubble(c, h.humanBubbleId) ||
							((this._needsToMutateRequest = {
								type: "produce-memory",
								humanBubbleId: h.humanBubbleId,
							}),
							await this.composerService.submitChatMaybeAbortCurrent(
								c,
								"Based on the above conversation, give me back a short summary of the most important points to remember. Just output the summary, nothing else.",
								{
									isThought: !0,
									isCapabilityIteration: !0,
									capabilityProcessesToSkip: [
										"composer-settled",
										"after-submit-chat",
										"before-submit-chat",
										"start-submit-chat",
									],
									modelOverride: "gpt-4o-mini",
								},
							),
							(n = this.composerDataService.getComposerData(c)),
							!n)
						)
							return;
						const p = n.conversation[n.conversation.length - 1].text;
						this.updateMemories([...this.memories, p]),
							(this._needsToMutateRequest = { type: "inject-memory" });
					}
					silentRunInPlaceMutateRequestBeforeSubmit() {
						return !0;
					}
					async runInPlaceMutateRequestBeforeSubmit(h, c) {
						const { composerId: n } = c,
							g = this.composerDataService.getComposerData(n),
							p = h.conversation?.[h.conversation.length - 1];
						if (
							!(
								!p ||
								!g ||
								p.type !== t.ConversationMessage_MessageType.HUMAN ||
								!h.conversation
							)
						) {
							if (this._needsToMutateRequest.type === "inject-memory") {
								const o = new i.$1z({
									type: i.ComposerCapabilityRequest_ComposerCapabilityType
										.REMEMBER_THIS,
									data: {
										case: "rememberThis",
										value: {
											customInstructions: this.data.customInstructions,
											memory: this.memories.join(`
`),
										},
									},
								});
								p.capabilities = [...(p.capabilities ?? []), o];
							} else if (this._needsToMutateRequest.type === "produce-memory") {
								const o = h.conversation.findIndex(
									(f) =>
										f.bubbleId === this._needsToMutateRequest.humanBubbleId,
								);
								if (o === -1) return;
								h.conversation = h.conversation.slice(o);
							}
						}
					}
					deleteLastMemory() {
						this.updateMemories(this.memories.slice(0, -1));
					}
				};
				(e.RememberThis = u),
					(e.RememberThis = u =
						Ne(
							[
								(0, d.autoCancellableAndStatusUpdater)(),
								j(2, r.IComposerDataService),
								j(3, E.IComposerService),
								j(4, w.$0zb),
							],
							u,
						)),
					(0, C.registerComposerCapability)(
						i.ComposerCapabilityRequest_ComposerCapabilityType.REMEMBER_THIS,
						u,
					);
			},
		),
		