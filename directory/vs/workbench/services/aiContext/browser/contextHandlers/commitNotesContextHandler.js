import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../contrib/aiCommitNotes/browser/commitNotesService.js';
define(de[3240], he([1, 0, 228, 134, 1703]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$TZc = void 0);
			class E {
				constructor(d, m) {
					(this.a = d), (this.b = m), (this.c = new AbortController());
				}
				update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(d, m) {
					this.c.signal.aborted || this.d(w.$e0b, m);
				}
				async d(d, m) {
					const r = await this.b.provider?.runCommand(
						i.CommitNotesServiceActions.GetCommitNotes,
						{ workspaceId: d },
					);
					if ((console.log("[Fetched Commit Notes]", r), r && r.length > 0)) {
						const u = r.map((a) => ({
							intent: m,
							item: { case: "commitNoteChunk", value: { note: a.note } },
						}));
						this.a.newItems(u).then((a) => {
							a.ok() ||
								this.a.error({
									message: "Failed to integrate commit notes into context.",
								});
						});
					}
				}
				async blockForFinalInput(d, m) {
					return m.type === t.ContextIntent_Type.AUTOMATIC
						? "fallBackToCachedReranked"
						: "useFreshItemsEvenIfNotRerankedYet";
				}
				freeze() {
					this.c.abort();
				}
				unfreeze() {
					this.c = new AbortController();
				}
				dispose() {
					this.c.abort();
				}
			}
			e.$TZc = E;
		}),
		