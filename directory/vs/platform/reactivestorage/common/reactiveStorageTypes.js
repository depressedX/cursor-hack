import '../../../../require.js';
import '../../../../exports.js';
define(de[134], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerEditHistoryActions =
					e.$zJ =
					e.$yJ =
					e.$xJ =
					e.$tJ =
					e.MembershipType =
					e.CppSource =
					e.DevOnlyRedisComands =
					e.DevOnlyRedisActions =
					e.LspActions =
					e.GitActions =
					e.TreeSitterActions =
					e.MiscActions =
					e.FileRetrievalActions =
					e.ContextGraphActions =
					e.CommitNotesServiceActions =
					e.FileSyncActions =
					e.ExtHostInfoActions =
					e.EditHistoryActions =
					e.ConfigServiceActions =
					e.$oJ =
					e.LocalRepoId =
					e.LintResult =
					e.LspSubgraphContextType =
					e.UploadType =
					e.DiffOrPrType =
					e.DiffType =
					e.PRState =
					e.SearchType =
						void 0),
				(e.$pJ = a),
				(e.$qJ = h),
				(e.$rJ = c),
				(e.$sJ = k),
				(e.$uJ = L),
				(e.$vJ = D),
				(e.$wJ = M);
			var t;
			(function (A) {
				(A.keyword = "keyword"), (A.vector = "vector");
			})(t || (e.SearchType = t = {}));
			var i;
			(function (A) {
				(A.OPEN = "open"), (A.CLOSED = "closed"), (A.MERGED = "merged");
			})(i || (e.PRState = i = {}));
			var w;
			(function (A) {
				(A.TO_MAIN_FROM_BRANCH = "to_main_from_branch"),
					(A.TO_HEAD = "to_head");
			})(w || (e.DiffType = w = {}));
			var E;
			(function (A) {
				(A.Diff = "diff"), (A.Pr = "pr");
			})(E || (e.DiffOrPrType = E = {}));
			var C;
			(function (A) {
				(A.Upload = "upload"), (A.Syncing = "syncing");
			})(C || (e.UploadType = C = {}));
			var d;
			(function (A) {
				(A.Hover = "Hover"),
					(A.Definition = "Definition"),
					(A.TypeDefinition = "TypeDefinition"),
					(A.Reference = "Reference"),
					(A.Implementation = "Implementation");
			})(d || (e.LspSubgraphContextType = d = {}));
			var m;
			(function (A) {
				(A.OK = "OK"),
					(A.ERROR = "ERROR"),
					(A.NO_CHANGES_FOUND = "NO_CHANGES_FOUND"),
					(A.NONE = "NONE");
			})(m || (e.LintResult = m = {}));
			var r;
			(function (A) {
				A.id = "local";
			})(r || (e.LocalRepoId = r = {}));
			const u = "x-client-key";
			e.$oJ = "x-ghost-mode";
			function a(A) {
				if (A === !0) return "true";
				if (A === !1) return "false";
				if (A === void 0) return "implicit-false";
				{
					let R = A;
					return (R = R), "true";
				}
			}
			function h(A) {
				let R = 165;
				for (let O = 0; O < A.length; O++)
					(A[O] = (A[O] ^ R) + (O % 256)), (R = A[O]);
				return A;
			}
			function c({
				req: A,
				machineId: R,
				macMachineId: O,
				base64Fn: B,
				cursorVersion: U,
				privacyMode: z,
				backupRequestId: F,
				clientKey: x,
			}) {
				try {
					const H = Math.floor(Date.now() / 1e6),
						q = new Uint8Array([
							(H >> 40) & 255,
							(H >> 32) & 255,
							(H >> 24) & 255,
							(H >> 16) & 255,
							(H >> 8) & 255,
							H & 255,
						]),
						V = h(q),
						G = B(V);
					A.header.set(
						"x-cursor-checksum",
						O === void 0 ? `${G}${R}` : `${G}${R}/${O}`,
					);
				} catch {}
				A.header.set("x-cursor-client-version", U),
					A.header.set(e.$oJ, a(z)),
					x !== void 0 && A.header.set(u, x);
				try {
					const H = Intl.DateTimeFormat().resolvedOptions().timeZone;
					A.header.set("x-cursor-timezone", H);
				} catch {}
				try {
					F &&
						(A.header.has("x-request-id") || A.header.set("x-request-id", F),
						A.header.has("x-amzn-trace-id") ||
							A.header.set("x-amzn-trace-id", `Root=${F}`));
				} catch {}
			}
			var n;
			(function (A) {
				A.GetCachedServerConfig = "aiServerConfigService.getCachedServerConfig";
			})(n || (e.ConfigServiceActions = n = {}));
			var g;
			(function (A) {
				(A.Ack = "editHistoryDiffFormatter.ack"),
					(A.GetModelValueInRanges =
						"editHistoryDiffFormatter.getModelValueInRanges"),
					(A.GetModelValue = "editHistoryDiffFormatter.getModelValue"),
					(A.ProcessModelChange =
						"editHistoryDiffFormatter.processModelChange"),
					(A.FormatDiffHistory = "editHistoryDiffFormatter.formatDiffHistory"),
					(A.CloseCurrentCmdkDiffHistoryPatch =
						"editHistoryDiffFormatter.closeCurrentCmdkDiffHistoryPatch"),
					(A.InitModel = "editHistoryDiffFormatter.initModel"),
					(A.CompileGlobalDiffTrajectories =
						"editHistoryDiffFormatter.compileGlobalDiffTrajectories"),
					(A.CompileGlobalDiffTrajectoriesForCmdk =
						"editHistoryDiffFormatter.compileGlobalDiffTrajectoriesForCmdk"),
					(A.IsRevertingToRecentModel =
						"editHistoryDiffFormatter.isRevertingToRecentModel"),
					(A.IsSuggestingRecentlyRejectedEdit =
						"editHistoryDiffFormatter.isSuggestingRecentlyRejectedEdit"),
					(A.RecordRejectedEdit =
						"editHistoryDiffFormatter.recordRejectedEdit"),
					(A.ProcessModelChangeLoop =
						"editHistoryDiffFormatter.processModelChangeLoop"),
					(A.SetEnableCppWhitespaceDiffHistoryMode =
						"editHistoryDiffFormatter.setEnableCppWhitespaceDiffHistoryMode"),
					(A.SetEnableCppIncludeUnchangedLines =
						"editHistoryDiffFormatter.setEnableCppIncludeUnchangedLines");
			})(g || (e.EditHistoryActions = g = {}));
			var p;
			(function (A) {
				A.GetExtHostInfo = "extHostInfo.getExtHostInfo";
			})(p || (e.ExtHostInfoActions = p = {}));
			var o;
			(function (A) {
				(A.GetFileSyncUpdates = "fileSync.getFileSyncUpdates"),
					(A.ShouldRelyOnFileSyncForFile =
						"fileSync.shouldRelyOnFileSyncForFile"),
					(A.GetFileSyncEncryptionHeader =
						"fileSync.getFileSyncEncryptionHeader"),
					(A.ResetSequentialSuccessfulSync =
						"fileSync.resetSequentialSuccessfulSync");
			})(o || (e.FileSyncActions = o = {}));
			var f;
			(function (A) {
				(A.GetCommitNotes = "commitNotesService.getCommitNotes"),
					(A.SearchCommitNotes = "commitNotesService.searchCommitNotes"),
					(A.InitializeNotes = "commitNotesService.initialiezNotes");
			})(f || (e.CommitNotesServiceActions = f = {}));
			var b;
			(function (A) {
				(A.GetRelatedFiles = "contextGraph.getRelatedFiles"),
					(A.InitializeWorkspace = "contextGraph.initializeWorkspace"),
					(A.GetWorkspaceSyncStatus = "contextGraph.getWorkspaceSyncStatus"),
					(A.ResetWorkspace = "contextGraph.resetWorkspace");
			})(b || (e.ContextGraphActions = b = {}));
			var s;
			(function (A) {
				A.GetDirectory = "fileRetrievalActions.readDirectory";
			})(s || (e.FileRetrievalActions = s = {}));
			var l;
			(function (A) {
				(A.CheckClaudeAPIKey = "misc.checkClaudeAPIKey"),
					(A.CheckGoogleAPIKey = "misc.checkGoogleAPIKey");
			})(l || (e.MiscActions = l = {}));
			var y;
			(function (A) {
				(A.GetReferencedSymbols = "treesitter.getReferencedSymbols"),
					(A.GetDefinedSymbols = "treesitter.getDefinedSymbols"),
					(A.GetImportantDefinitionNames =
						"treesitter.getImportantDefinitionNames");
			})(y || (e.TreeSitterActions = y = {}));
			var $;
			(function (A) {
				(A.GetRecentCommits = "git.getRecentCommits"),
					(A.GetRecentCommitHashesTouchingFile =
						"git.getRecentCommitHashesTouchingFile"),
					(A.GetCommitByHash = "git.getCommitByHash"),
					(A.GetCommitDetailsByHashes = "git.getCommitDetailsByHashes"),
					(A.GetCurrentIndexAndRecentCommits =
						"git.getCurrentIndexAndRecentCommits");
			})($ || (e.GitActions = $ = {}));
			var v;
			(function (A) {
				A.GetFileImports = "lsp.getFileImports";
			})(v || (e.LspActions = v = {}));
			var S;
			(function (A) {
				(A.Get = "devOnlyRedis.get"),
					(A.Set = "devOnlyRedis.set"),
					(A.SubscribeToChannelForKey =
						"devOnlyRedis.subscribeToChannelForKey"),
					(A.UnsubscribeFromChannelForKey =
						"devOnlyRedis.unsubscribeFromChannelForKey");
			})(S || (e.DevOnlyRedisActions = S = {}));
			var I;
			(function (A) {
				A.ValueChanged = "devOnlyRedis.valueChanged";
			})(I || (e.DevOnlyRedisComands = I = {}));
			var T;
			(function (A) {
				(A.Unknown = "unknown"),
					(A.LineChange = "line_change"),
					(A.Typing = "typing"),
					(A.OptionHold = "option_hold"),
					(A.LinterErrors = "lint_errors"),
					(A.ParameterHints = "parameter_hints"),
					(A.CursorPrediction = "cursor_prediction"),
					(A.ManualTrigger = "manual_trigger"),
					(A.EditorChange = "editor_change");
			})(T || (e.CppSource = T = {}));
			var P;
			(function (A) {
				(A.FREE = "free"),
					(A.PRO = "pro"),
					(A.ENTERPRISE = "enterprise"),
					(A.FREE_TRIAL = "free_trial");
			})(P || (e.MembershipType = P = {}));
			function k(A) {
				return A === P.PRO || A === P.ENTERPRISE || A === P.FREE_TRIAL;
			}
			e.$tJ = "cursor.cpp.disabledLanguages";
			function L(A, R, O) {
				return A === void 0 || A.isOn === !1
					? !1
					: !(R === !1 || (O === !1 && !A.shouldLetUserEnableCppEvenIfNotPro));
			}
			function D(A, R, O) {
				if (R !== void 0) {
					const B = [
						".env",
						".env.local",
						".env.development",
						".env.production",
						".env.test",
						".env.testing",
						".env.development.local",
						".env.production.local",
						".env.test.local",
						".env.testing.local",
					];
					if (
						(R.languageId === "plaintext" &&
							B.some((U) => R.fsPath.endsWith(U))) ||
						M(R.languageId, O)
					)
						return !1;
				}
				return A === !0;
			}
			function M(A, R) {
				return !!(Array.isArray(R) && R.includes(A));
			}
			(e.$xJ = "cursor.general.disableHttp2"),
				(e.$yJ = "cursor.general.gitGraphIndexing"),
				(e.$zJ = [
					"hyper-mode",
					"regular-cmdk",
					"cursor-motion",
					"coalesce-chain",
					"finetuned-instructions",
					"chat-and-apply",
				]);
			var N;
			(function (A) {
				(A.Ack = "composerEditHistoryDiffFormatter.ack"),
					(A.CompileGlobalDiffTrajectories =
						"composerEditHistoryDiffFormatter.compileGlobalDiffTrajectories"),
					(A.FormatDiffHistory =
						"composerEditHistoryDiffFormatter.formatDiffHistory"),
					(A.InitModel = "composerEditHistoryDiffFormatter.initModel"),
					(A.ResetModel = "composerEditHistoryDiffFormatter.resetModel"),
					(A.ProcessModelChange =
						"composerEditHistoryDiffFormatter.processModelChange"),
					(A.GetModelValue = "composerEditHistoryDiffFormatter.getModelValue");
			})(N || (e.ComposerEditHistoryActions = N = {}));
		}),
		