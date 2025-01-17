import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../ai/browser/fastContextService.js';
define(de[3646], he([1, 0, 228, 25, 400]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$VZc = void 0);
			let E = class {
				constructor(d, m, r) {
					(this.a = d),
						(this.b = m),
						(this.c = r),
						(this.d = new AbortController()),
						(this.e = !1),
						(this.f = void 0);
				}
				update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(d, m) {
					this.d.signal.aborted ||
						this.e ||
						((this.e = !0),
						(this.f = (async () => {
							const r = this.b.getCmdKQueryHistoryInAllContextSessions();
							(
								await this.a.newItems([
									{
										intent: m,
										item: {
											case: "cmdKQueryHistoryInDiffSession",
											value: {
												pastCmdkQueries: r,
												currTimestampDouble: Date.now(),
											},
										},
									},
								])
							).ok() ||
								this.a.error({
									message: "Failed to add in past cmdk messages.",
								});
						})()));
				}
				async blockForFinalInput(d, m) {
					return m.type === t.ContextIntent_Type.AUTOMATIC
						? "fallBackToCachedReranked"
						: (await this.f, "useFreshItemsEvenIfNotRerankedYet");
				}
				freeze() {
					this.d.abort();
				}
				unfreeze() {
					this.d = new AbortController();
				}
				dispose() {
					this.d.abort();
				}
			};
			(e.$VZc = E), (e.$VZc = E = Ne([j(1, w.$26b), j(2, i.$Vi)], E));
		}),
		