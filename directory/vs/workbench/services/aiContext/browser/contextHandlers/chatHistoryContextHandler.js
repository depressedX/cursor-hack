import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../contrib/aichat/browser/chatDataService.js';
import '../../../ai/browser/fastContextService.js';
define(
			de[3932],
			he([1, 0, 228, 3, 45, 337, 400]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NZc = void 0);
				let d = class extends i.$1c {
					constructor(r, u, a, h) {
						super(),
							(this.a = r),
							(this.b = u),
							(this.c = a),
							(this.f = h),
							(this.g = new AbortController()),
							(this.h = !1),
							(this.j = void 0),
							(this.reactiveStorageRoot = this.D(this.b.createScoped(this)));
					}
					async process(r, u) {
						const a = this.c.getReactiveCurrentChat();
						if (a === void 0) {
							this.a.error({ message: "Failed to get current chat tab." });
							return;
						}
						let h = {
								userMessage: "",
								assistantResponse: "",
								chatHistory: void 0,
								activeForCmdK: !1,
								timestampDouble: this.f.getTimeOfLastChatMessage(),
							},
							c = !1;
						for (const g of a.bubbles)
							g.type === "user"
								? (c &&
										((h = {
											userMessage: "",
											assistantResponse: "",
											chatHistory: h,
											activeForCmdK: !1,
											timestampDouble: this.f.getTimeOfLastChatMessage(),
										}),
										(c = !1)),
									(h.userMessage = g.text ?? ""))
								: g.type === "ai" &&
									((h.assistantResponse = g.text ?? ""), (c = !0));
						(
							await this.a.newItems([
								{ intent: u, item: { case: "chatHistory", value: h } },
							])
						).ok() ||
							this.a.error({ message: "Failed to add in chat history." });
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(r, u) {
						this.g.signal.aborted ||
							this.h ||
							((this.h = !0),
							this.reactiveStorageRoot.createImplicitEffect(async () => {
								this.process(r, u);
							}));
					}
					async blockForFinalInput(r, u) {
						return u.type === t.ContextIntent_Type.AUTOMATIC
							? "fallBackToCachedReranked"
							: (await this.process(r, u), "useFreshItemsEvenIfNotRerankedYet");
					}
					freeze() {
						this.g.abort();
					}
					unfreeze() {
						this.g = new AbortController();
					}
					dispose() {
						super.dispose(), this.g.abort();
					}
				};
				(e.$NZc = d),
					(e.$NZc = d = Ne([j(1, w.$0zb), j(2, E.$kgc), j(3, C.$26b)], d));
			},
		),
		