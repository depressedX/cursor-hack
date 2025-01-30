import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import './ComposerAdvancedContextFollowup.js';
import './ComposerContextStep.js';
import '../hooks/useComposerDataHandle.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[4289],
			he([1, 0, 2, 2, 2, 2, 13, 126, 167, 4272, 4274, 177, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*chat_pb*/,
 m /*composer_pb*/,
 r /*ComposerAdvancedContextFollowup*/,
 u /*ComposerContextStep*/,
 a /*useComposerDataHandle*/,
 h /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerUsesCodebaseStatus = void 0);
				const c = (0, t.template)("<div>"),
					n = (g) => {
						const p = (0, h.$odc)(),
							{ composerDataService: o } = p,
							{
								composerDataHandle: f,
								currentComposer: b,
								updateCurrentComposer: s,
							} = (0, a.useComposerDataHandle)(() => g.composerDataHandle),
							l = (0, C.createMemo)(() =>
								o.getComposerCapability(
									b().composerId,
									m.ComposerCapabilityRequest_ComposerCapabilityType
										.USES_CODEBASE,
								),
							),
							y = (0, C.createMemo)(() =>
								o.getComposerBubble(b().composerId, g.bubbleId),
							),
							$ = (0, C.createMemo)(() => {
								const L = o.getComposerData(b().composerId),
									D = L?.conversation.findIndex(
										(N) => N.bubbleId === g.bubbleId,
									);
								if (D === -1 || D === void 0) return;
								const M = L?.conversation[D + 1];
								if (!(!M || M.type !== d.ConversationMessage_MessageType.AI))
									return M;
							}),
							v = (0, C.createMemo)(() => {
								const L = $();
								return L ? L.text.length > 0 : !1;
							}),
							S = (0, C.createMemo)(() => {
								const L = o.getComposerData(b().composerId);
								return L
									? L.conversation.flatMap((D) =>
											D.type === d.ConversationMessage_MessageType.HUMAN
												? (D.context?.folderSelections ?? [])
												: [],
										)
									: [];
							}),
							I = (0, C.createMemo)(() => g.status?.status),
							T = (0, C.createMemo)(() => {
								if (!o.getComposerData(b().composerId)) return !1;
								const D = o.getLastHumanBubbleId(b().composerId);
								return D
									? I() === "generating" ||
											(I() === "completed" && D === g.bubbleId)
									: !1;
							}),
							P = () => {
								const L = $();
								return L ? (L.steps ?? []) : [];
							},
							k = (0, C.createMemo)(() => {
								const L = o.getComposerData(b().composerId);
								if (!L) return !1;
								const D = y();
								if (!D) return !1;
								const M = o.getLastHumanBubbleId(b().composerId);
								return L.status === "generating" && M === D.bubbleId;
							});
						return (0, E.createComponent)(C.Show, {
							get when() {
								return l();
							},
							children: (L) => {
								const D = L();
								return (0, E.createComponent)(C.Show, {
									get when() {
										return P().length === 0;
									},
									get fallback() {
										return (() => {
											const M = c();
											return (
												M.style.setProperty("padding-bottom", "8px"),
												M.style.setProperty("display", "flex"),
												M.style.setProperty("flex-direction", "column"),
												M.style.setProperty("gap", "4px"),
												(0, w.insert)(
													M,
													(0, E.createComponent)(C.For, {
														get each() {
															return P();
														},
														children: (N, A) =>
															(0, E.createComponent)(u.ComposerContextStep, {
																step: N,
																get defaultExpanded() {
																	return k() && !v()
																		? N.type === "gathering" ||
																			N.type === "reranking"
																			? N.files.length > 0
																			: !0
																		: !1;
																},
																get index() {
																	return A();
																},
																get isStepGenerating() {
																	return (0, i.memo)(
																		() =>
																			N.type === "gathering" ||
																			N.type === "reranking",
																	)()
																		? N.files.length === 0
																		: !!(k() && !v());
																},
															}),
													}),
												),
												M
											);
										})();
									},
									get children() {
										return (0, E.createComponent)(
											r.ComposerGlobalContextAnimation,
											{
												get isContextGenerating() {
													return T();
												},
												get textIsGenerated() {
													return v();
												},
												get fileResults() {
													return D.fileResults();
												},
												get addFolders() {
													return S();
												},
												get hydeResults() {
													return D.hydeResults();
												},
												get repoStep() {
													return D.currentStep();
												},
												get composerDataHandle() {
													return g.composerDataHandle;
												},
												get nextAiBubbleId() {
													return $()?.bubbleId;
												},
											},
										);
									},
								});
							},
						});
					};
				e.ComposerUsesCodebaseStatus = n;
			},
		),
		