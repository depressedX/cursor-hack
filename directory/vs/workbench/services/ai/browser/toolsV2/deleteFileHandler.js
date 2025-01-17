import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../platform/files/common/files.js';
import './toolsV2HandlerRegistryService.js';
import '../../../magicLink/browser/magicLinkService.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../contrib/composer/browser/composerDataService.js';
import '../../../selectedContext/browser/selectedContext.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../contrib/composer/browser/composerUtilsService.js';
import '../../../../contrib/composer/browser/composerData.js';
import '../../../../../../external/solid/store.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../contrib/composer/browser/composer.js';
define(
			de[3976],
			he([1, 0, 124, 22, 398, 241, 167, 209, 271, 45, 426, 225, 193, 42, 219]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_yc = void 0);
				let g = class extends w.$Xyc {
					constructor(o, f, b, s, l, y, $, v) {
						super(),
							(this.a = o),
							(this.b = f),
							(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.f = y),
							(this.g = $),
							(this.h = v);
					}
					async setup(o, f, b, s) {
						const l = this.c.getComposerData(s),
							y = l
								? this.c.getComposerCapability(
										s,
										C.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_FORMER,
									)
								: void 0;
						if (!y)
							throw new Error("[composer] ToolFormer: capability not found");
						const $ = y.getBubbleIdByToolCallId(b);
						if (!$) throw new Error("[composer] ToolFormer: bubble not found");
						const v = this.c.getLastBubbleWhere(s, (I) => !!I.checkpoint),
							S = v?.checkpoint;
						if (o?.relativeWorkspacePath) {
							const I = await this.a.getMagicURIForText(
								o.relativeWorkspacePath,
							);
							if (
								I &&
								!S?.files.some((P) => P.uri.toString() === I.toString()) &&
								v
							) {
								if (!l?.originalModelLines[I.toString()]) {
									const M = (await this.f.getContentsOfFile(s, I)) ?? [" "];
									this.c.updateComposerDataSetStore(s, (N) =>
										N("originalModelLines", I.toString(), M),
									);
								}
								const k = (
										await this.g.createModelReference(I)
									).object.textEditorModel.getLinesContent(),
									L = await this.f.computeLineDiffs(s, I, k),
									D = [
										"conversation",
										(M) => M.bubbleId === v.bubbleId,
										"checkpoint",
									];
								S === void 0 &&
									this.c.updateComposerDataSetStore(s, (M) =>
										M(...D, (0, a.createEmptyCheckpoint)()),
									),
									this.c.updateComposerDataSetStore(s, (M) =>
										M(
											...D,
											(0, h.produce)((N) => {
												N &&
													N.files.push({
														uri: I,
														originalModelDiffWrtV0: L,
														isNewlyCreated: !1,
													});
											}),
										),
									);
							}
						}
						!y.shouldUseYoloMode() ||
						this.e.applicationUserPersistentStorage.composerState
							.yoloDeleteFileDisabled
							? await new Promise((I, T) => {
									y.addPendingDecision(
										$,
										t.ClientSideToolV2.DELETE_FILE,
										b,
										(P) => {
											P ? I() : T(new w.$Vyc("User rejected the tool call"));
										},
										!0,
									);
								})
							: y.setBubbleData($, { userDecision: "accepted" });
					}
					async call(o, f, b) {
						if (!o)
							throw new Error(
								"No delete file parameters provided. Need to give at least the path.",
							);
						if (!o.relativeWorkspacePath)
							throw new Error(
								"relativeWorkspacePath is required to delete a file.",
							);
						const s = await this.a.getMagicURIForText(o.relativeWorkspacePath),
							l = s ? this.d.shouldIgnoreUri(s) : !1;
						if (!s || l)
							throw new Error(
								`Could not find file ${o.relativeWorkspacePath} in the workspace.`,
							);
						return (await this.b.exists(s))
							? (await this.h.deleteFile(s),
								new t.$Iy({ fileDeletedSuccessfully: !0 }))
							: new t.$Iy({ fileNonExistent: !0 });
					}
				};
				(e.$_yc = g),
					(e.$_yc = g =
						Ne(
							[
								j(0, E.$q8b),
								j(1, i.$ll),
								j(2, d.IComposerDataService),
								j(3, m.$Q9b),
								j(4, r.$0zb),
								j(5, u.IComposerUtilsService),
								j(6, c.$MO),
								j(7, n.IComposerService),
							],
							g,
						));
			},
		),
		