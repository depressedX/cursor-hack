import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/constants.js';
import '../chatData.js';
import './useBubble.js';
import '../../../aiConfig/browser/aiConfigHelper.js';
import '../../../../services/selectedContext/browser/hooks/useContextPills.js';
import '../../../../services/selectedContext/browser/utils.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/uri.js';
import '../../../ui/browser/utils/getUnrepeatedFileNames.js';
import '../../../../../base/common/path.js';
import '../../../utils/browser/chatAndComposerSuggestedFileReranking.js';
define(
			de[2010],
			he([1, 0, 13, 58, 140, 1712, 270, 1385, 299, 36, 15, 9, 1273, 54, 1007]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$kbc = o);
				const g = 100,
					p = 300;
				function o(f, b, s, l = {}) {
					const y = (0, r.$odc)(),
						{ chatService: $ } = (0, w.$zgc)(),
						v = (0, E.$abc)(f, b),
						[S] = (0, C.$K0b)(i.$CW, y.configurationService, !1),
						[I] = (0, C.$K0b)(i.$oW, y.configurationService, !1),
						[T, P] = (0, t.createSignal)([]),
						[k, L] = (0, t.createSignal)(!1);
					let D;
					const M = () => {
						D && D.dispose(),
							L(!0),
							(D = (0, u.$Oh)(() => {
								y.aiChatService
									.getSortedCandidateFilesForBubble(f(), b())
									.then((A) => {
										P(A.slice(0, g).map((R) => ({ uri: R.uri }))), L(!1);
									});
							}, p));
					};
					return (
						(0, t.createEffect)(
							(0, t.on)([() => v().fileSelections, () => v().text], () => {
								l.readonly || !S() || M();
							}),
						),
						(0, t.createMemo)(() => {
							let A = (0, d.$jbc)(v, s, l)();
							if (!s || l.readonly || !S()) return A;
							const R = s();
							if (
								(I() && (A = A.filter((U) => U.data.isCurrentFile !== !0)),
								v().fileSelections.length === 0)
							)
								return A;
							const O = T().filter(
								(U) =>
									!v().fileSelections.some((z) => (0, a.$Ac)(z.uri, U.uri)),
							);
							return (
								(0, h.$j$b)(O, (U) => a.URI.parse(U.uri.path ?? ""), {
									renderFolder: (U) => U,
									rootFolder:
										y.workspaceContextService.getWorkspace().folders[0].uri
											.fsPath,
								})
									.slice(0, n.$k0b)
									.forEach((U, z) => {
										const F = O[z];
										if (
											v().fileSelections.find((H) => (0, a.$Ac)(H.uri, F.uri))
										)
											return;
										const x = U.folderPath
											? `${U.folderPath}${c.sep}${U.fileName}`
											: U.fileName;
										A.push({
											type: "gitGraphFileSuggestion",
											extraString: (0, m.$$gc)(F.uri.path ?? ""),
											isLoading: k(),
											keyboardHint: z < n.$k0b ? `\u2387${z + 1}` : void 0,
											fileName: F.uri.path ?? "",
											onClick: k()
												? void 0
												: () => {
														$.addContext({
															tabId: f(),
															bubbleId: b(),
															contextType: "fileSelections",
															value: F,
															shouldShowPreview: !1,
														}),
															P(T().filter((H, q) => q !== z));
													},
											onAdd: k()
												? void 0
												: (H = !0) => {
														$.addContext({
															tabId: f(),
															bubbleId: b(),
															contextType: "fileSelections",
															value: F,
															shouldShowPreview: !1,
														});
													},
											onRemove: k()
												? void 0
												: () => {
														P(T().filter((H, q) => q !== z));
													},
											data: F,
										});
									}),
								A
							);
						})
					);
				}
			},
		),
		