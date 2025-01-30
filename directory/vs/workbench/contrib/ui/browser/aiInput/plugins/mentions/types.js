import '../../../../../../../../require.js';
import '../../../../../../../../exports.js';
import '../../types.js';
define(de[310], he([1, 0, 1776]), function (ce /*require*/,
 e /*exports*/,
 t /*types*/) {
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
		