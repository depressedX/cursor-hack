define(de[310], he([1, 0, 1776]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$A_b =
					e.$z_b =
					e.$y_b =
					e.$x_b =
					e.$w_b =
					e.$v_b =
					e.$u_b =
					e.$t_b =
					e.$s_b =
					e.$r_b =
					e.TypeaheadOptionType =
						void 0);
			var i;
			(function (E) {
				(E.none = "none"),
					(E.doc = "doc"),
					(E.web = "web"),
					(E.repo_map = "repo_map"),
					(E.code = "code"),
					(E.file = "file"),
					(E.folder = "folder"),
					(E.git_commit = "commits"),
					(E.git_pr = "pr"),
					(E.git_diff = "diffs"),
					(E.git = "git"),
					(E.heading = "heading"),
					(E.staticheading = "staticheading"),
					(E.lint = "lint"),
					(E.link = "link"),
					(E.codebase = "codebase"),
					(E.current_file = "current_file"),
					(E.toggle_commit_options = "toggle_commit_options"),
					(E.commit_notes = "commit_notes"),
					(E.text_search = "text_search"),
					(E.image = "image"),
					(E.notepad = "notepad"),
					(E.diff_review = "diff_review"),
					(E.reset = "reset"),
					(E.reference_open_editors = "reference_open_editors"),
					(E.reference_active_editors = "reference_active_editors"),
					(E.reset_context = "reset_context"),
					(E.context_picking = "context_picking"),
					(E.auto_context = "auto_context"),
					(E.remember_this = "remember_this");
			})(i || (e.TypeaheadOptionType = i = {})),
				(e.$r_b = [
					i.auto_context,
					i.code,
					i.doc,
					i.file,
					i.folder,
					i.git,
					i.repo_map,
					i.web,
					i.text_search,
					i.notepad,
					i.diff_review,
					i.codebase,
					i.reset,
					i.reference_open_editors,
					i.reference_active_editors,
					i.reset_context,
					i.context_picking,
					i.remember_this,
				]),
				(e.$s_b = {
					[i.code]: "Code",
					[i.web]: "Web",
					[i.doc]: "Docs",
					[i.file]: "Files",
					[i.folder]: "Folders",
					[i.lint]: "Lint errors",
					[i.repo_map]: "Repo Map",
					[i.codebase]: "Codebase",
					[i.auto_context]: "Suggested",
					[i.git]: "Git",
					[i.commit_notes]: "Commit History",
					[i.text_search]: "Search",
					[i.notepad]: "Notepad",
					[i.diff_review]: "Review Changes",
					[i.reset]: "Reset",
					[i.reference_open_editors]: "Reference Open Editors",
					[i.reference_active_editors]: "Reference Active Editors",
					[i.reset_context]: "Reset Context",
					[i.context_picking]: "Pick Context",
					[i.remember_this]: "Remember This",
				}),
				(e.$t_b = [
					i.reset,
					i.reset_context,
					i.reference_open_editors,
					i.reference_active_editors,
					i.diff_review,
				]);
			class w extends t.$z7b {
				constructor(C, d, m, r, u, a, h, c, n, g) {
					super(C),
						(this.type = m),
						(this.selectionPrecursor = u),
						(this.docSelection = a),
						(this.secondaryText = h),
						(this.onSettingClick = c),
						(this.name = C),
						(this.picture = d),
						(this._score = r),
						(this.sizeBytes = g),
						(this.isSlash = e.$t_b.includes(m)),
						n &&
							((this.pr = n.pr),
							(this.diff = n.diff),
							(this.notepadId = n.notepadId),
							(this.isLoadMore = n.isLoadMore));
				}
				overrideScore(C) {
					this._score = C;
				}
				get score() {
					return this._score;
				}
			}
			(e.$u_b = w),
				(e.$v_b = {
					"cmd-k": ["cmdKDefinitions"],
					generic: [],
					"terminal-cmd-k": [],
				}),
				(e.$w_b = {
					insertTextSearch: () => {},
					selectedTextSearches: [],
					removeTextSearch: () => {},
					insertDocs: () => {},
					selectedDocs: [],
					removeDocs: () => {},
					insertSelection: () => {},
					selections: [],
					removeSelection: () => {},
					insertFileSelection: () => {},
					fileSelections: [],
					removeFileSelection: () => {},
					insertImage: () => {},
					imageUuids: [],
					removeImage: () => {},
					insertCommit: () => {},
					commits: [],
					removeCommit: () => {},
					insertPullRequest: () => {},
					pullRequests: [],
					removePullRequest: () => {},
					insertGitDiff: () => {},
					removeGitDiff: () => {},
					gitDiffUuid: void 0,
					insertDiffToMain: () => {},
					removeDiffToMain: () => {},
					diffToMainUuid: void 0,
					addCurrentFile: () => {},
					removeCurrentFile: () => {},
					addLinterErrors: () => {},
					removeLinterErrors: () => {},
					addCodebase: () => {},
					removeCodebase: () => {},
					addWeb: () => {},
					removeWeb: () => {},
					insertFolderSelection: () => {},
					folderSelections: [],
					removeFolderSelection: () => {},
					mentionIdToDelete: null,
					setMentionIdToDelete: () => {},
					insertLink: () => {},
					linksSelections: [],
					removeLink: () => {},
					addCommitNotes: () => {},
					removeCommitNotes: () => {},
					insertNotepad: () => {},
					notepadIds: [],
					removeNotepad: () => {},
					addDiffReview: () => {},
					removeDiffReview: () => {},
					addContextPicking: () => {},
					removeContextPicking: () => {},
					removeMention: (E) => !1,
					addRememberThis: () => {},
					removeRememberThis: () => {},
				}),
				(e.$x_b = "Commit (Diff of Working State)"),
				(e.$y_b = "PR (Diff with Main Branch)"),
				(e.$z_b = 8),
				(e.$A_b = 3);
		}),
		define(
			de[354],
			he([1, 0, 9, 56, 17, 104, 83, 310]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tfc = m),
					(e.$Ufc = r),
					(e.$Vfc = u),
					(e.$Wfc = a),
					(e.$Xfc = c),
					(e.$Yfc = n),
					(e.$Zfc = p),
					(e.$1fc = o),
					(e.$2fc = f),
					(e.$3fc = b),
					(e.$4fc = s),
					(e.$5fc = l),
					(e.$6fc = y),
					(e.$7fc = v);
				function m(S) {
					if (S === void 0) return;
					const I = S.split(`
`),
						T = I.filter((L) => L.trim().length > 0),
						P = Math.min(...T.map((L) => L.search(/\S|$/)));
					return I.map((L) => (L.trim().length === 0 ? L : L.slice(P))).join(`
`);
				}
				function r(S) {
					if (S) return S;
				}
				async function u(S, I, T, P) {
					let k;
					try {
						k = await S.createModelReference(T);
						const L = k.object.textEditorModel;
						let D;
						P === void 0 ? (D = L.getFullModelRange()) : (D = P);
						const M = Math.max(D.startLineNumber, 1),
							N = Math.max(D.startColumn, 1),
							A = Math.min(D.endLineNumber, L.getLineCount()),
							R = Math.min(L.getLineMaxColumn(A), D.endColumn),
							O = new w.$iL(M, N, A, R);
						return await a({
							model: L,
							dataScrubbingService: I,
							inBoundsSelectionRange: O,
						});
					} finally {
						k?.dispose();
					}
				}
				async function a({
					model: S,
					dataScrubbingService: I,
					inBoundsSelectionRange: T,
					dontScrub: P,
				}) {
					let k, L, D;
					return (
						(L = S?.getValueInRange(T)),
						(L = r(L)),
						(k = m(L)),
						(k = `\`\`\`${S?.getLanguageIdAtPosition(T.startLineNumber, T.startColumn) ?? ""}
${k ?? ""}
\`\`\``),
						(D = S?.uri),
						P !== void 0 && !P && (k = await I.cleanText(k, D?.path)),
						{
							text: k,
							rawText: L,
							range: {
								selectionStartLineNumber: T.startLineNumber,
								selectionStartColumn: T.startColumn,
								positionLineNumber: T.endLineNumber,
								positionColumn: T.endColumn,
							},
							uri: D,
						}
					);
				}
				function h(S, I, T) {
					if (((T = T ?? !0), !S || S?.isEmpty())) return;
					let P = S;
					T && (P = P.setStartPosition(S.startLineNumber, 1));
					const k = I?.getLineMaxColumn(S.endLineNumber) ?? S.endColumn;
					return T && (P = P.setEndPosition(S.endLineNumber, k)), P;
				}
				function c(S, I, T) {
					const P = S.getLastActiveFileEditor(),
						k = I.activeInstance,
						L = [];
					if (P !== void 0) {
						const D = P.getControl();
						if (D && (0, i.$0sb)(D)) {
							const M = h(
								D.getSelection() ?? void 0,
								D.getModel() ?? void 0,
								!1,
							);
							if (M !== void 0) {
								const A = D.getModel()?.getValueInRange(M);
								A !== void 0 &&
									L.push({ source: "editor", raw: A, get: () => n(S, T) });
							}
						}
					}
					if (k !== void 0) {
						const D = k.selection;
						D && L.push({ source: "terminal", raw: D, get: () => p(I, T, !0) });
					}
					return L;
				}
				async function n(S, I, T, P) {
					let k = P ?? S.getLastActiveFileEditor()?.getControl(),
						L,
						D,
						M,
						N;
					if (k) {
						let A;
						if (
							("activeCodeEditor" in k && (k = k.activeCodeEditor),
							(0, i.$0sb)(k))
						)
							(A = k.getModel() ?? void 0),
								T ? (L = T) : (L = h(k.getSelection() ?? void 0, A));
						else if ((0, i.$$sb)(k)) {
							const O = k.getModel();
							O &&
								((A = O.modified),
								(L = h(k.getSelection() ?? void 0, O.modified)));
						}
						if (L === void 0) return;
						(M = A?.getValueInRange(L)), (N = A?.uri);
						const R = N?.path;
						if (
							(M !== void 0 && (M = await I.cleanText(M, R)), (D = m(M)), D)
						) {
							let O = A?.getLanguageId();
							O ||
								(O =
									A?.getLanguageIdAtPosition(
										L.startLineNumber,
										L.startColumn,
									) ?? ""),
								(D = `\`\`\`${O}
${D ?? ""}
\`\`\``);
						} else return;
					} else return;
					if (D && L && N)
						return {
							text: D,
							rawText: M,
							range: {
								selectionStartLineNumber: L.startLineNumber,
								selectionStartColumn: L.startColumn,
								positionLineNumber: L.endLineNumber,
								positionColumn: L.endColumn,
							},
							uri: N,
						};
				}
				const g = {
					authority: "",
					fragment: "",
					path: "",
					query: "",
					scheme: "terminal",
				};
				async function p(S, I, T = !1, P) {
					const k = S.activeInstance;
					if (!k || !k.xterm) return;
					let D, M;
					if (k.hasSelection()) (D = k.selection), (M = k.selectionRange);
					else {
						if (T) return;
						const O = k.selectedCommand();
						if (!O) return;
						let B = O.executedMarker?.line;
						const U = O.endMarker?.line;
						if (B === void 0 || U === void 0 || B > U) return;
						P && (B = Math.max(U - P, B));
						const z = k.xterm?.getBufferLines(B - 1, U);
						(D = z.join(`
`)),
							(M = new E.$kL(B, 1, U, z[z.length - 1].length));
					}
					return !D || !M
						? void 0
						: ((D = await I.cleanText(D)),
							{
								text: `\`\`\`bash
${m(D) ?? ""}
\`\`\``,
								rawText: D,
								range: M,
								uri: g,
							});
				}
				async function o(S, I) {
					let T = S.text;
					const P = S.range;
					let k = S.languageId;
					const L = S.uri,
						D = L?.path;
					T !== void 0 && (T = await I.cleanText(T, D));
					let M = m(T);
					if (M)
						M = `\`\`\`${k}
${M ?? ""}
\`\`\``;
					else return;
					if (M && P) return { text: M, rawText: T, range: P, uri: L ?? g };
				}
				async function f(S, I, T) {
					const P = await u(S, I, t.URI.revive(T.uri));
					if (P !== void 0)
						return {
							...P,
							uuid: T.uuid,
							summarizationStrategy: T.summarizationStrategy,
						};
				}
				async function b(S, I, T) {
					const P = t.URI.parse(T.docId + "_pages");
					let k = await S.getPages({ docIdentifier: T.docId });
					const L = k.pages.reduce(
						(M, N, A) => (
							N !== "" && M.push({ page: N, url: k.pageUrls[A] }), M
						),
						[],
					);
					let D = "";
					if (L.length > 0) {
						const M = `
- `;
						D = L.map((N) => `${M}[${N.page}](${N.url})`).join("");
					}
					return {
						name: T.name,
						uuid: T.uuid,
						text: D,
						uri: P,
						url: T.url,
						doc: I.applicationUserPersistentStorage.personalDocs.find(
							(M) => M.identifier === T.docId,
						),
					};
				}
				async function s(S, I) {
					let T;
					I == C.GitDiff_DiffType.DIFF_FROM_BRANCH_TO_MAIN
						? (T = await S.getDiffDetailsFromGitDiff({
								gitDiff: void 0,
								gitDiffFromBranchToMain: !0,
							}))
						: (T = await S.getDiffDetailsFromGitDiff({
								gitDiff: !0,
								gitDiffFromBranchToMain: void 0,
							}));
					let P = "",
						k = [];
					for (const L of T) {
						L.diffType === C.GitDiff_DiffType.DIFF_FROM_BRANCH_TO_MAIN
							? (P = d.$y_b)
							: L.diffType === C.GitDiff_DiffType.DIFF_TO_HEAD && (P = d.$x_b);
						for (const D of L.diffs) k.push(D);
					}
					return { title: P, diffs: k };
				}
				async function l(S, I) {
					const T = [I],
						P = await S.getCommitDetailsFromPartialCommits(T);
					let k = [];
					if (P.length === 0) return { title: "", diffs: k };
					const L = P[0];
					for (const D of L.diff) k.push(D);
					return { title: L.message, diffs: k };
				}
				async function y(S, I) {
					const T = [I],
						P = await S.getPullRequestDetailsFromPartialPullRequests(T);
					let k = [];
					if (P.length === 0) return { title: "", diffs: k };
					const L = P[0];
					for (const D of L.diff) k.push(D);
					return { title: L.title, diffs: k };
				}
				const $ = 1e4;
				async function v(S, I) {
					const T = S.getInstanceFromResource(I);
					if (!T || !T.xterm) return;
					let P = "",
						k = 0,
						L = 0;
					for (const A of T.xterm.getBufferReverseIterator()) {
						if (P.length + A.length > $) break;
						(P =
							A +
							(P
								? `
` + P
								: "")),
							k++,
							k === 1 && (L = A.length);
					}
					const D = T.xterm.getBufferLength(),
						M = Math.max(1, D - k + 1),
						N = D;
					return {
						text: `\`\`\`bash
${P}
\`\`\``,
						rawText: P,
						range: {
							selectionStartLineNumber: M,
							selectionStartColumn: 1,
							positionLineNumber: N,
							positionColumn: L,
						},
						uri: g,
					};
				}
			},
		),
		