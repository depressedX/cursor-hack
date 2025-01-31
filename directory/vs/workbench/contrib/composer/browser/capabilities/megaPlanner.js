import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../composer.js';
import '../composerCapabilities.js';
import '../composerCapabilityDecorators.js';
import '../composerCapabilitySchemas.js';
import '../composerData.js';
import '../composerDataService.js';
define(
			de[3925],
			he([1, 0, 126, 167, 219, 262, 395, 351, 225, 209]),
			function (ce /*require*/,
 e /*exports*/,
 t /*chat_pb*/,
 i /*composer_pb*/,
 w /*composer*/,
 E /*composerCapabilities*/,
 C /*composerCapabilityDecorators*/,
 d /*composerCapabilitySchemas*/,
 m /*composerData*/,
 r /*composerDataService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.MegaPlanner = void 0);
				let u = class extends E.ComposerCapability {
					constructor(h, c, n, g) {
						super(h, c),
							(this.composerDataService = n),
							(this.composerService = g),
							(this.priority = 1),
							(this.type =
								i.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER),
							(this.name =
								E.capabilityTypeLabels[
									i.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER
								]),
							(this.schema = d.megaPlannerSchema),
							(this._needsToMutateRequest = !1);
					}
					shouldRunOnBeforeSubmitChat(h) {
						return !this._needsToMutateRequest && !h.isCapabilityIteration;
					}
					async onBeforeSubmitChat(h) {
						const { composerId: c } = h;
						let n = this.composerDataService.getComposerData(c);
						if (
							!n ||
							!this.composerDataService.getComposerBubble(c, h.humanBubbleId)
						)
							return;
						if (
							((this._needsToMutateRequest = !0),
							await this.composerService.submitChatMaybeAbortCurrent(c, "", {
								isThought: !0,
								isCapabilityIteration: !0,
								skipAddNewHumanMessage: !0,
								capabilityProcessesToSkip: ["composer-settled"],
								modelOverride: this.data.model,
							}),
							(this._needsToMutateRequest = !1),
							this.composerDataService.getComposerData(h.composerId)?.status ===
								"aborted" || this.isAborted())
						)
							throw new Error("[composer] User aborted mega planner chat");
						const p = (0, m.createDefaultConversationMessage)();
						(p.isCapabilityIteration = !0),
							this.composerDataService.updateComposerDataSetStore(c, (o) =>
								o("conversation", [
									...n.conversation,
									{
										...p,
										text: "Complete the above plan without missing any steps.",
									},
								]),
							);
					}
					silentRunInPlaceMutateRequestBeforeSubmit() {
						return !0;
					}
					shouldRunInPlaceMutateRequestBeforeSubmit() {
						return this._needsToMutateRequest;
					}
					async runInPlaceMutateRequestBeforeSubmit(h, c) {
						const { composerId: n } = c,
							g = this.composerDataService.getComposerData(n),
							p = h.conversation?.[h.conversation.length - 1];
						if (!p || !g || p.type !== t.ConversationMessage_MessageType.HUMAN)
							return;
						const o = new i.$1z({
							type: i.ComposerCapabilityRequest_ComposerCapabilityType
								.MEGA_PLANNER,
							data: {
								case: "megaPlanner",
								value: { customInstructions: this.data.customInstructions },
							},
						});
						p.capabilities = [...(p.capabilities ?? []), o];
					}
					async onComposerSettledReturnShouldLoop(h) {
						return !1;
					}
					silentOnComposerSettled(h) {
						return !1;
					}
				};
				(e.MegaPlanner = u),
					(e.MegaPlanner = u =
						Ne(
							[
								(0, C.autoCancellableAndStatusUpdater)(),
								j(2, r.IComposerDataService),
								j(3, w.IComposerService),
							],
							u,
						)),
					(0, E.registerComposerCapability)(
						i.ComposerCapabilityRequest_ComposerCapabilityType.MEGA_PLANNER,
						u,
					);
			},
		)
