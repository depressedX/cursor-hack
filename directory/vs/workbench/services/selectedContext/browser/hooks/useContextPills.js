import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/uri.js';
import '../../../../contrib/aichat/browser/utils.js';
import '../../../../contrib/controlCommon/browser/solid.js';
import '../utils.js';
import '../../../../contrib/ui/browser/utils/getUnrepeatedFileNames.js';
import '../../../../../base/common/path.js';
define(
			de[1385],
			he([1, 0, 13, 9, 397, 36, 299, 1273, 54]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*uri*/,
 w /*utils*/,
 E /*solid*/,
 C /*utils*/,
 d /*getUnrepeatedFileNames*/,
 m /*path*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jbc = a);
				const r = 20,
					u = 3;
				function a(h, c, n = {}) {
					const g = (0, E.$odc)(),
						p = (0, t.createMemo)(
							() =>
								g.reactiveStorageService.applicationUserPersistentStorage
									.notepadState.isNotepadEnabled ?? !0,
						),
						{ readonly: o = !1 } = n,
						f = (s) => (n.disablePillClicks ? void 0 : s);
					return (0, t.createMemo)(() => {
						const s = h(),
							l = c?.(),
							y = [];
						if (
							(s.editTrailContexts &&
								s.editTrailContexts.length > 0 &&
								s.editTrailContexts.forEach(($) => {
									y.push({
										type: "editTrailContext",
										extraString: "Edit trail",
										data: $,
										onRemove: o
											? void 0
											: (v = !0) => l?.removeEditTrailContext(v),
										onAdd: (v = !0) => {
											l?.insertEditTrailContext($, v);
										},
										secondaryTextOverride: `${$.editTrailSorted.length} edit${$.editTrailSorted.length === 1 ? "" : "s"}`,
									});
								}),
							s.notepads && s.notepads.length > 0 && p())
						)
							for (const $ of s.notepads) {
								const v =
									g.notepadDataService.notepadsData.notepads[$.notepadId];
								v &&
									y.push({
										type: "notepad",
										extraString: v.name,
										onRemove: o
											? void 0
											: (S = !0) => l?.removeNotepad($.notepadId, S),
										onAdd: (S = !0) => {
											l?.insertNotepad({ notepadId: $.notepadId }, S);
										},
										onClick: f(() => {
											g.notepadService.openNotepad($.notepadId);
										}),
										data: $.notepadId,
									});
							}
						if (
							(s.quotes &&
								s.quotes.length > 0 &&
								s.quotes.forEach(($, v) => {
									y.push({
										type: "quote",
										extraString: (0, C.$_gc)($.markdown),
										extraStringCutoff: 10,
										onRemove: o ? void 0 : (S = !0) => l?.removeQuote(v, S),
										onAdd: (S = !0) => {
											l?.insertQuote($, S);
										},
										data: $,
									});
								}),
							s.selectedCommits &&
								s.selectedCommits.length > 0 &&
								s.selectedCommits.forEach(($, v) => {
									y.push({
										type: "commit",
										extraString:
											$.message.length > r
												? $.message.slice(0, r) + "..."
												: $.message,
										onRemove: o ? void 0 : (S = !0) => l?.removeCommit(v, S),
										mentionPayload: { type: "selectedCommits", index: v },
										data: $,
										onAdd: (S = !0) => {
											l?.insertCommit($, S);
										},
									});
								}),
							s.selectedPullRequests &&
								s.selectedPullRequests.length > 0 &&
								s.selectedPullRequests.forEach(($, v) => {
									y.push({
										type: "pr",
										extraString: `#${$.number}`,
										onRemove: o
											? void 0
											: (S = !0) => l?.removePullRequest(v, S),
										mentionPayload: { type: "selectedPullRequests", index: v },
										data: $,
										onAdd: (S = !0) => {
											l?.insertPullRequest($, S);
										},
									});
								}),
							s.gitDiff &&
								y.push({
									type: "diff",
									onRemove: o ? void 0 : ($ = !0) => l?.removeGitDiff($),
									mentionPayload: { type: "gitDiff" },
									data: s.gitDiff,
								}),
							s.gitDiffFromBranchToMain &&
								y.push({
									type: "diffToMain",
									extraString: "PR",
									onRemove: o ? void 0 : ($ = !0) => l?.removeDiffToMain($),
									mentionPayload: { type: "gitDiffFromBranchToMain" },
									data: s.gitDiffFromBranchToMain,
								}),
							s.selectedImages &&
								s.selectedImages.forEach(($) => {
									y.push({
										type: "image",
										data: $,
										onRemove: o
											? void 0
											: (v = !0) => l?.removeImage($.uuid, v),
										onAdd: (v = !0) => {
											l?.insertImage(
												{ uri: i.URI.file($.path), uuid: $.uuid },
												v,
											);
										},
									});
								}),
							s.usesCodebase &&
								(!s.folderSelections || s.folderSelections.length === 0) &&
								y.push({
									type: "codebase",
									onRemove: o ? void 0 : ($ = !0) => l?.removeCodebase($),
									data: void 0,
									onAdd: ($ = !0) => {
										l?.addCodebase(void 0, $);
									},
									mentionPayload: { type: "usesCodebase" },
								}),
							s.useWeb &&
								y.push({
									type: "web",
									onRemove: o ? void 0 : ($ = !0) => l?.removeWeb($),
									data: void 0,
								}),
							s.folderSelections &&
								s.folderSelections.length > 0 &&
								s.folderSelections.forEach(($, v) => {
									y.push({
										type: "folder",
										extraString: (0, C.$$gc)($.relativePath),
										onRemove: o
											? void 0
											: (S = !0) => l?.removeFolderSelection(v, S),
										mentionPayload: { type: "folderSelections", index: v },
										onAdd: (S = !0) => {
											l?.insertFolderSelection($, S);
										},
									});
								}),
							(s.fileSelections && s.fileSelections.length > 0) ||
								(s.selections && s.selections.length > 0))
						) {
							const $ = [
									...(s.fileSelections || []).map((S) => ({
										type: "file",
										...S,
									})),
									...(s.selections || []).map((S) => ({ type: "code", ...S })),
								],
								v = (0, d.$j$b)($, (S) => i.URI.parse(S.uri.path ?? ""), {
									renderFolder: (S) => S,
									rootFolder:
										g.workspaceContextService.getWorkspace().folders[0].uri
											.fsPath,
								});
							$.forEach((S, I) => {
								const T = v[I],
									P = T.folderPath
										? `${T.folderPath}${m.sep}${T.fileName}`
										: T.fileName,
									k = I,
									L = I - (s.fileSelections?.length ?? 0);
								S.type === "file"
									? y.push({
											type: "file",
											extraString: P,
											hideTypeTitle: !0,
											onRemove: o
												? void 0
												: (D = !0) => {
														l?.removeFileSelection(k, D);
													},
											onAdd: (D = !0) => {
												l?.insertFileSelection(S, D);
											},
											fileName: S.uri.path ?? "",
											hoverText: g.labelService.getUriLabel(i.URI.from(S.uri), {
												relative: !0,
											}),
											onClick: f(() =>
												(0, C.$9gc)(g, { filePathOrUri: S.uri.path ?? "" }),
											),
											mentionPayload: { type: "fileSelections", index: k },
											data: S,
										})
									: S.type === "code" &&
										y.push({
											type: "code",
											extraString: `${P} (${S.range.selectionStartLineNumber}-${S.range.positionLineNumber})`,
											hideTypeTitle: !0,
											fileName: S.uri.path ?? "",
											hoverText: g.labelService.getUriLabel(i.URI.from(S.uri), {
												relative: !0,
											}),
											onClick: f(() =>
												(0, C.$9gc)(g, {
													filePathOrUri: S.uri.path ?? "",
													selection: {
														startLineNumber: S.range.selectionStartLineNumber,
														startColumn: S.range.selectionStartColumn,
														endLineNumber: S.range.positionLineNumber,
														endColumn: S.range.positionColumn,
													},
												}),
											),
											onRemove: o
												? void 0
												: (D = !0) => {
														l?.removeSelection(L, D);
													},
											onAdd: (D = !0) => {
												l?.insertSelection(S, D);
											},
											mentionPayload: { type: "selections", index: L },
											data: S,
										});
							});
						}
						return (
							s.terminalFiles &&
								s.terminalFiles.length > 0 &&
								s.terminalFiles.forEach(($, v) => {
									y.push({
										type: "terminalFile",
										extraString: $.text
											? $.text
											: (0, C.$$gc)($.uri.path ?? ""),
										onRemove: o
											? void 0
											: (S = !0) => {
													l?.removeTerminalFile?.(v, S);
												},
										fileName: $.text ?? $.uri.path ?? "",
										onClick: f(() =>
											(0, C.$9gc)(g, { filePathOrUri: $.uri.path ?? "" }),
										),
										mentionPayload: { type: "terminalFiles", index: v },
										data: $,
									});
								}),
							s.terminalSelections &&
								s.terminalSelections.length > 0 &&
								s.terminalSelections.forEach(($, v) => {
									y.push({
										type: "terminal",
										extraString: `Lines ${$.range.selectionStartLineNumber}-${$.range.positionLineNumber}`,
										fileName: $.uri.path ?? "",
										onClick: f(() =>
											(0, w.$fgc)(g.terminalService, {
												startLineNumber: $.range.selectionStartLineNumber,
												startColumn: $.range.selectionStartColumn,
												endLineNumber: $.range.positionLineNumber,
												endColumn: $.range.positionColumn,
											}),
										),
										onAdd: (S = !0) => {
											l?.insertTerminalSelection?.($, S);
										},
										onRemove: o
											? void 0
											: (S = !0) => {
													l?.removeTerminalSelection?.(v, S);
												},
										data: $,
									});
								}),
							s.selectedDocs &&
								s.selectedDocs.length > 0 &&
								(s.selectedDocs.length > u
									? (s.selectedDocs.slice(0, u).forEach(($) => {
											y.push({
												type: "docs",
												extraString: $.name,
												onRemove:
													o || !$.uuid
														? void 0
														: (v = !0) => l?.removeDocs($.uuid ?? "", v),
												onAdd: (v = !0) => {
													l?.insertDocs($, v);
												},
												data: $,
											});
										}),
										y.push({
											type: "docs",
											extraString: `+${s.selectedDocs.length - u} more`,
											data: void 0,
										}))
									: s.selectedDocs.forEach(($) => {
											y.push({
												type: "docs",
												extraString: $.name,
												hoverText: $.url,
												onRemove: o
													? void 0
													: (v = !0) => l?.removeDocs($.uuid ?? "", v),
												onAdd: (v = !0) => {
													l?.insertDocs($, v);
												},
												data: $,
												mentionPayload: { type: "selectedDocs", uuid: $.uuid },
											});
										})),
							s.externalLinks &&
								s.externalLinks.length > 0 &&
								s.externalLinks.forEach(($) => {
									y.push({
										type: "link",
										extraString: $.url,
										hoverText: $.url,
										onRemove: o ? void 0 : (v = !0) => l?.removeLink($.uuid, v),
										onAdd: (v = !0) => {
											l?.insertLink($, v);
										},
										data: $,
									});
								}),
							s.useLinterErrors &&
								y.push({
									type: "lint",
									onRemove: o ? void 0 : ($ = !0) => l?.removeLinterErrors($),
									mentionPayload: { type: "useLinterErrors" },
								}),
							y
						);
					});
				}
			},
		)
