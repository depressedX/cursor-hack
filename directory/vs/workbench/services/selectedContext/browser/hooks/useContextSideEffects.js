import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/network.js';
import '../../../../../base/common/uri.js';
import '../../../../contrib/controlCommon/browser/solid.js';
import '../../../../contrib/ui/browser/aiInput/plugins/mentions/types.js';
define(
			de[2011],
			he([1, 0, 13, 23, 9, 36, 310]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*network*/,
 w /*uri*/,
 E /*solid*/,
 C /*types*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bbc = void 0);
				const d = {
						...C.$w_b,
						insertQuote: () => {},
						removeQuote: () => {},
						addImage: () => {},
						insertEditTrailContext: () => {},
						removeEditTrailContext: () => {},
					},
					m = (r, u, a, h, c) => {
						const n = (0, E.$odc)();
						return (0, t.createMemo)(() => ({
							...d,
							...(h().supportsEditTrail
								? {
										insertEditTrailContext: (p, o) => {
											r("editTrailContexts", p, void 0, o ?? !1);
										},
										removeEditTrailContext: (p) => {
											u("editTrailContexts", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsGit
								? {
										insertCommit: (p, o) => {
											r("selectedCommits", p, p.uuid, o ?? !1);
										},
										commits: c().selectedCommits ?? [],
										removeCommit: (p, o) => {
											u("selectedCommits", p, o ?? !1);
										},
										insertPullRequest: (p, o) => {
											r("selectedPullRequests", p, p.uuid, o ?? !1);
										},
										pullRequests: c().selectedPullRequests ?? [],
										removePullRequest: (p, o) => {
											u("selectedPullRequests", p, o ?? !1);
										},
										insertGitDiff: (p, o) => {
											r("gitDiff", !0, p, o ?? !1);
										},
										removeGitDiff: (p) => {
											u("gitDiff", void 0, p ?? !1);
										},
										insertDiffToMain: (p, o) => {
											r("gitDiffFromBranchToMain", !0, p, o ?? !1);
										},
										removeDiffToMain: (p) => {
											u("gitDiffFromBranchToMain", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsFolderSelections
								? {
										folderSelections: c().folderSelections ?? [],
										insertFolderSelection: (p, o) => {
											r("folderSelections", p, p.uuid, o ?? !1);
										},
										removeFolderSelection: (p, o) => {
											u("folderSelections", p, o ?? !1);
										},
									}
								: {}),
							selections: c().selections ?? [],
							insertSelection(p, o) {
								r("selections", p, p.uuid, o ?? !1),
									n.aiChatService.maybeCheckLongFilesFit(!0);
							},
							removeSelection: (p, o) => {
								u("selections", p, o ?? !1);
							},
							...(h().supportsDocs !== !1
								? {
										selectedDocs: c().selectedDocs ?? [],
										insertDocs(p, o) {
											r("selectedDocs", p, p.uuid, o ?? !1);
										},
										removeDocs: (p, o) => {
											const f =
												c().selectedDocs?.findIndex((b) => b.uuid === p) ?? -1;
											f !== -1 && u("selectedDocs", f, o ?? !1);
										},
									}
								: {}),
							...(h().supportsLint
								? {
										addLinterErrors: (p, o) => {
											r("useLinterErrors", !0, p, o ?? !1);
										},
										removeLinterErrors: (p) => {
											u("useLinterErrors", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsCodebase
								? {
										addCodebase: (p, o) => {
											r("usesCodebase", !0, p, o ?? !1);
										},
										removeCodebase: (p) => {
											u("usesCodebase", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsWeb
								? {
										addWeb: (p, o) => {
											r("useWeb", !0, p, o ?? !1);
										},
										removeWeb: (p) => {
											u("useWeb", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsLink
								? {
										insertLink: (p, o) => {
											r("externalLinks", p, p.uuid, o ?? !1);
										},
										linksSelections: c().externalLinks ?? [],
										removeLink: (p, o) => {
											const f =
												c().externalLinks?.findIndex((b) => b.uuid === p) ?? -1;
											f !== -1 && u("externalLinks", f, o ?? !1);
										},
									}
								: {}),
							addImage: (p, o) => {
								r("selectedImages", {
									uuid: p,
									path: o.path,
									dimension: o.dimension,
									loadedAt: o.loadedAt,
								});
							},
							insertImage: (p, o) => {
								const f = new Image();
								(f.src = i.$7g.uriToBrowserUri(w.URI.from(p.uri)).toString()),
									(f.onload = () => {
										r(
											"selectedImages",
											{
												uuid: p.uuid,
												path: w.URI.from(p.uri).fsPath,
												dimension: {
													width: f.naturalWidth,
													height: f.naturalHeight,
												},
												loadedAt: Date.now(),
											},
											p.uuid,
											o ?? !1,
										);
									});
							},
							imageUuids: c().selectedImages
								? c().selectedImages.map((p) => p.uuid)
								: [],
							removeImage: (p, o) => {
								const f =
									c().selectedImages?.findIndex((b) => b.uuid === p) ?? -1;
								f !== -1 && u("selectedImages", f, o ?? !1);
							},
							...(h().supportsQuotes
								? {
										insertQuote: (p, o) => {
											r("quotes", p, void 0, o ?? !1);
										},
										quotes: c().quotes ?? [],
										removeQuote: (p, o) => {
											u("quotes", p, o ?? !1);
										},
									}
								: {}),
							insertFileSelection: (p, o) => {
								r("fileSelections", p, p.uuid, o ?? !1);
							},
							fileSelections: c().fileSelections ?? [],
							removeFileSelection: (p, o) => {
								u("fileSelections", p, o ?? !1);
							},
							terminalSelections: c().terminalSelections ?? [],
							insertTerminalSelection(p, o) {
								r("terminalSelections", p, p.uuid, o ?? !1),
									n.aiChatService.maybeCheckLongFilesFit(!0);
							},
							removeTerminalSelection(p, o) {
								u("terminalSelections", p, o ?? !1);
							},
							terminalFiles: c().terminalFiles ?? [],
							insertTerminalFile(p, o) {
								r("terminalFiles", p, p.uuid, o ?? !1),
									n.aiChatService.maybeCheckLongFilesFit(!0);
							},
							removeTerminalFile(p, o) {
								u("terminalFiles", p, o ?? !1);
							},
							removeMention: (p) => (a(p), !0),
							...(h().supportsNotepads
								? {
										insertNotepad: (p, o) => {
											r(
												"notepads",
												{ notepadId: p.notepadId },
												p.uuid,
												o ?? !1,
											);
										},
										notepads: c().notepads ?? [],
										removeNotepad: (p, o) => {
											const f =
												c().notepads?.findIndex((b) => b.notepadId === p) ?? -1;
											f !== -1 && u("notepads", f, o ?? !1);
										},
									}
								: {}),
							...(h().supportsDiffReview
								? {
										addDiffReview: (p, o) => {
											r("useDiffReview", !0, p, o ?? !1);
										},
										removeDiffReview: (p) => {
											u("useDiffReview", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsContextPicking
								? {
										addContextPicking: (p, o) => {
											r("useContextPicking", !0, p, o ?? !1);
										},
										removeContextPicking: (p) => {
											u("useContextPicking", void 0, p ?? !1);
										},
									}
								: {}),
							...(h().supportsRememberThis
								? {
										addRememberThis: (p, o) => {
											r("useRememberThis", !0, p, o ?? !1);
										},
										removeRememberThis: (p) => {
											u("useRememberThis", void 0, p ?? !1);
										},
									}
								: {}),
						}));
					};
				e.$bbc = m;
			},
		)
