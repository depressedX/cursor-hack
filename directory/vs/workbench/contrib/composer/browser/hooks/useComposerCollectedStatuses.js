import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import './useReactiveCodeBlocksOfStatuses.js';
import '../composerData.js';
import '../../../controlCommon/browser/solid.js';
import './useComposerDataHandle.js';
define(
			de[1366],
			he([1, 0, 13, 4156, 225, 36, 177]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*useReactiveCodeBlocksOfStatuses*/,
 w /*composerData*/,
 E /*solid*/,
 C /*useComposerDataHandle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useComposerCollectedStatuses = d);
				function d(m) {
					const r = (0, E.$odc)(),
						{ composerDataService: u, composerService: a } = r,
						{ currentComposer: h } = (0, C.useComposerDataHandle)(m),
						c = (0, t.createMemo)(() => h().composerId),
						n = (0, t.createMemo)(() =>
							r.composerUtilsService.shouldShowCancel(c()),
						),
						g = (0, i.useReactiveCodeBlocksOfStatuses)(
							m,
							w.SAVE_RELATED_STATUSES,
						),
						p = (0, t.createMemo)(() => g().length > 0 && !n()),
						o = (0, i.useReactiveCodeBlocksOfStatuses)(
							m,
							w.REAPPLY_RELATED_STATUSES,
						),
						f = (0, t.createMemo)(() => o().length > 0 && !n()),
						b = (0, t.createMemo)(
							() => a.shouldShowAcceptRejectAll(c()) && !n(),
						),
						s = (0, t.createMemo)(
							() => a.shouldShowAcceptRejectAll(c()) && !n(),
						),
						l = (0, i.useReactiveCodeBlocksOfStatuses)(m, w.COMPLETED_STATUSES),
						y = (0, t.createMemo)(() => l().length > 0),
						$ = (0, t.createMemo)(() => {
							if (n()) return !1;
							const v = u.getLastAiBubble(c());
							return v?.codeBlocks
								? v.codeBlocks.some((S) => {
										const I = u.getComposerCodeBlock(m(), S.uri, S.version);
										return I?.isNoOp || I?.status === "cancelled";
									})
								: !1;
						});
					return {
						shouldShowCancel: n,
						shouldShowSaveAll: p,
						shouldShowAcceptAll: b,
						shouldShowRejectAll: s,
						shouldShowReapplyAll: f,
						shouldShowReapplyLastMessage: $,
						shouldShowCompletedFiles: y,
					};
				}
			},
		)
