import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../contrib/aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../../ai/browser/fastContextService.js';
define(
			de[3994],
			he([1, 0, 228, 25, 287, 400]),
			function (ce /*require*/,
 e /*exports*/,
 t /*context_pb*/,
 i /*workspace*/,
 w /*aiFeatureStatusService*/,
 E /*fastContextService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MZc = void 0);
				let C = class {
					constructor(m, r, u, a) {
						(this.a = m),
							(this.b = r),
							(this.c = u),
							(this.d = a),
							(this.e = new AbortController()),
							(this.f = !1),
							(this.g = void 0);
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(m, r) {
						this.e.signal.aborted ||
							this.f ||
							((this.f = !0),
							(this.g = (async () => {
								Promise.resolve()
									.then(() => {
										this.d.maybeRefreshFeatureStatus("shouldUseReranking");
									})
									.catch(() => {});
								const u = this.d.getCachedFeatureStatus("shouldUseReranking"),
									a = u ? 500 : 50,
									h = u ? 50 : 5;
								let c = await this.b.getRecentChunks(a);
								if (m.case === "cmd-k") {
									const p = this.c.asRelativePath(m.fileUri);
									c = c.filter(
										(o) =>
											!(
												o.relativeWorkspacePath === p &&
												Math.min(
													Math.abs(
														(o.range?.startLineNumber ?? 1) -
															m.replaceRange.endLineNumberExclusive,
													),
													Math.abs(
														(o.range?.endLineNumber ?? 1) -
															m.replaceRange.startLineNumber,
													),
												) < 100
											),
									);
								}
								c = c.filter((p) => p.contents.trim().length > 0);
								const n = c.slice(0, h);
								(
									await this.a.newItems([
										...n.map((p) => ({
											intent: r,
											item: {
												case: "fileChunk",
												value: {
													startLineNumber: p.range?.startLineNumber ?? 1,
													chunkContents: p.contents,
													relativeWorkspacePath: p.relativeWorkspacePath,
												},
											},
										})),
									])
								).ok() ||
									this.a.error({
										message: "Failed to add in recent locations.",
									});
							})()));
					}
					async blockForFinalInput(m, r) {
						return r.type === t.ContextIntent_Type.AUTOMATIC
							? "fallBackToCachedReranked"
							: (await this.g, "useFreshItemsEvenIfNotRerankedYet");
					}
					freeze() {
						this.e.abort();
					}
					unfreeze() {
						this.e = new AbortController();
					}
					dispose() {
						this.e.abort();
					}
				};
				(e.$MZc = C),
					(e.$MZc = C = Ne([j(1, E.$26b), j(2, i.$Vi), j(3, w.$H7b)], C));
			},
		)
