define(de[83], he([1, 0, 86]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.CodeChunk_SummarizationStrategy =
					e.CodeChunk_Intent =
					e.$pt =
					e.$ot =
					e.$nt =
					e.$mt =
					e.$lt =
					e.$kt =
					e.$jt =
					e.$it =
					e.$ht =
					e.$gt =
					e.$ft =
					e.$et =
					e.$dt =
					e.$ct =
					e.$bt =
					e.ErrorDetails_Error =
					e.$at =
					e.$_s =
					e.$$s =
					e.$0s =
					e.$9s =
					e.DocumentSymbol_SymbolKind =
					e.$8s =
					e.PureMessage_MessageType =
					e.$7s =
					e.$6s =
					e.$5s =
					e.$4s =
					e.$3s =
					e.$2s =
					e.$1s =
					e.$Zs =
					e.$Ys =
					e.$Xs =
					e.$Ws =
					e.$Vs =
					e.$Us =
					e.$Ts =
					e.Diagnostic_DiagnosticSeverity =
					e.$Ss =
					e.$Rs =
					e.$Qs =
					e.$Ps =
					e.$Os =
					e.$Ns =
					e.$Ms =
					e.$Ls =
					e.$Ks =
					e.$Js =
					e.$Is =
					e.$Hs =
					e.$Gs =
					e.$Fs =
					e.$Es =
					e.$Ds =
					e.GitDiff_DiffType =
					e.$Cs =
					e.$Bs =
					e.$As =
					e.$zs =
					e.$ys =
					e.EmbeddingModel =
					e.FeatureType =
					e.LintSeverity =
						void 0);
			var i;
			(function (ve) {
				(ve[(ve.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(ve[(ve.ERROR = 1)] = "ERROR"),
					(ve[(ve.WARNING = 2)] = "WARNING"),
					(ve[(ve.INFO = 3)] = "INFO"),
					(ve[(ve.HINT = 4)] = "HINT"),
					(ve[(ve.AI = 5)] = "AI");
			})(i || (e.LintSeverity = i = {})),
				t.proto3.util.setEnumType(i, "aiserver.v1.LintSeverity", [
					{ no: 0, name: "LINT_SEVERITY_UNSPECIFIED" },
					{ no: 1, name: "LINT_SEVERITY_ERROR" },
					{ no: 2, name: "LINT_SEVERITY_WARNING" },
					{ no: 3, name: "LINT_SEVERITY_INFO" },
					{ no: 4, name: "LINT_SEVERITY_HINT" },
					{ no: 5, name: "LINT_SEVERITY_AI" },
				]);
			var w;
			(function (ve) {
				(ve[(ve.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(ve[(ve.EDIT = 1)] = "EDIT"),
					(ve[(ve.GENERATE = 2)] = "GENERATE"),
					(ve[(ve.INLINE_LONG_COMPLETION = 3)] = "INLINE_LONG_COMPLETION");
			})(w || (e.FeatureType = w = {})),
				t.proto3.util.setEnumType(w, "aiserver.v1.FeatureType", [
					{ no: 0, name: "FEATURE_TYPE_UNSPECIFIED" },
					{ no: 1, name: "FEATURE_TYPE_EDIT" },
					{ no: 2, name: "FEATURE_TYPE_GENERATE" },
					{ no: 3, name: "FEATURE_TYPE_INLINE_LONG_COMPLETION" },
				]);
			var E;
			(function (ve) {
				(ve[(ve.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(ve[(ve.VOYAGE_CODE_2 = 1)] = "VOYAGE_CODE_2"),
					(ve[(ve.TEXT_EMBEDDINGS_LARGE_3 = 2)] = "TEXT_EMBEDDINGS_LARGE_3"),
					(ve[(ve.QWEN_1_5B_CUSTOM = 3)] = "QWEN_1_5B_CUSTOM");
			})(E || (e.EmbeddingModel = E = {})),
				t.proto3.util.setEnumType(E, "aiserver.v1.EmbeddingModel", [
					{ no: 0, name: "EMBEDDING_MODEL_UNSPECIFIED" },
					{ no: 1, name: "EMBEDDING_MODEL_VOYAGE_CODE_2" },
					{ no: 2, name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3" },
					{ no: 3, name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM" },
				]);
			class C extends t.Message {
				constructor(ge) {
					super(),
						(this.line = 0),
						(this.column = 0),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CursorPosition";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "line", kind: "scalar", T: 5 },
						{ no: 2, name: "column", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ge, be) {
					return new C().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new C().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new C().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(C, ge, be);
				}
			}
			e.$ys = C;
			class d extends t.Message {
				constructor(ge) {
					super(),
						(this.selectionStartLineNumber = 0),
						(this.selectionStartColumn = 0),
						(this.positionLineNumber = 0),
						(this.positionColumn = 0),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SelectionWithOrientation";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "selection_start_line_number",
							kind: "scalar",
							T: 5,
						},
						{ no: 2, name: "selection_start_column", kind: "scalar", T: 5 },
						{ no: 3, name: "position_line_number", kind: "scalar", T: 5 },
						{ no: 4, name: "position_column", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ge, be) {
					return new d().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new d().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new d().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(d, ge, be);
				}
			}
			e.$zs = d;
			class m extends t.Message {
				constructor(ge) {
					super(),
						(this.startLine = 0),
						(this.endLineInclusive = 0),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SimplestRange";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_line", kind: "scalar", T: 5 },
						{ no: 2, name: "end_line_inclusive", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ge, be) {
					return new m().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new m().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new m().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(m, ge, be);
				}
			}
			e.$As = m;
			class r extends t.Message {
				constructor(ge) {
					super(),
						(this.original = []),
						(this.modified = []),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ComputeLinesDiffOriginalAndModified";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "original", kind: "scalar", T: 9, repeated: !0 },
						{ no: 2, name: "modified", kind: "scalar", T: 9, repeated: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new r().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new r().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new r().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(r, ge, be);
				}
			}
			e.$Bs = r;
			class u extends t.Message {
				constructor(ge) {
					super(),
						(this.diffs = []),
						(this.diffType = a.UNSPECIFIED),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GitDiff";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "diffs", kind: "message", T: h, repeated: !0 },
						{
							no: 2,
							name: "diff_type",
							kind: "enum",
							T: t.proto3.getEnumType(a),
						},
					]);
				}
				static fromBinary(ge, be) {
					return new u().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new u().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new u().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(u, ge, be);
				}
			}
			e.$Cs = u;
			var a;
			(function (ve) {
				(ve[(ve.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(ve[(ve.DIFF_TO_HEAD = 1)] = "DIFF_TO_HEAD"),
					(ve[(ve.DIFF_FROM_BRANCH_TO_MAIN = 2)] = "DIFF_FROM_BRANCH_TO_MAIN");
			})(a || (e.GitDiff_DiffType = a = {})),
				t.proto3.util.setEnumType(a, "aiserver.v1.GitDiff.DiffType", [
					{ no: 0, name: "DIFF_TYPE_UNSPECIFIED" },
					{ no: 1, name: "DIFF_TYPE_DIFF_TO_HEAD" },
					{ no: 2, name: "DIFF_TYPE_DIFF_FROM_BRANCH_TO_MAIN" },
				]);
			class h extends t.Message {
				constructor(ge) {
					super(),
						(this.from = ""),
						(this.to = ""),
						(this.chunks = []),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FileDiff";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "from", kind: "scalar", T: 9 },
						{ no: 2, name: "to", kind: "scalar", T: 9 },
						{ no: 3, name: "chunks", kind: "message", T: c, repeated: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new h().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new h().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new h().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(h, ge, be);
				}
			}
			e.$Ds = h;
			class c extends t.Message {
				constructor(ge) {
					super(),
						(this.content = ""),
						(this.lines = []),
						(this.oldStart = 0),
						(this.oldLines = 0),
						(this.newStart = 0),
						(this.newLines = 0),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FileDiff.Chunk";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "content", kind: "scalar", T: 9 },
						{ no: 2, name: "lines", kind: "scalar", T: 9, repeated: !0 },
						{ no: 3, name: "old_start", kind: "scalar", T: 5 },
						{ no: 4, name: "old_lines", kind: "scalar", T: 5 },
						{ no: 5, name: "new_start", kind: "scalar", T: 5 },
						{ no: 6, name: "new_lines", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ge, be) {
					return new c().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new c().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new c().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(c, ge, be);
				}
			}
			e.$Es = c;
			class n extends t.Message {
				constructor(ge) {
					super(),
						(this.startLineNumber = 0),
						(this.startColumn = 0),
						(this.endLineNumberInclusive = 0),
						(this.endColumn = 0),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SimpleRange";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_line_number", kind: "scalar", T: 5 },
						{ no: 2, name: "start_column", kind: "scalar", T: 5 },
						{ no: 3, name: "end_line_number_inclusive", kind: "scalar", T: 5 },
						{ no: 4, name: "end_column", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ge, be) {
					return new n().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new n().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new n().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(n, ge, be);
				}
			}
			e.$Fs = n;
			class g extends t.Message {
				constructor(ge) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.chunkHash = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SimpleFileChunk";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: m },
						{ no: 3, name: "chunk_hash", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new g().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new g().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new g().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(g, ge, be);
				}
			}
			e.$Gs = g;
			class p extends t.Message {
				constructor(ge) {
					super(),
						(this.remoteUrl = ""),
						(this.commitId = ""),
						(this.gitPatch = ""),
						(this.unsavedFiles = []),
						(this.unixTimestampMs = 0),
						(this.openEditors = []),
						(this.fileDiffHistories = []),
						(this.branchName = ""),
						(this.branchNotes = ""),
						(this.branchNotesRich = ""),
						(this.globalNotes = ""),
						(this.pastThoughts = []),
						(this.baseBranchName = ""),
						(this.baseBranchCommitId = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKDebugInfo";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "remote_url", kind: "scalar", T: 9 },
						{ no: 2, name: "commit_id", kind: "scalar", T: 9 },
						{ no: 3, name: "git_patch", kind: "scalar", T: 9 },
						{
							no: 4,
							name: "unsaved_files",
							kind: "message",
							T: o,
							repeated: !0,
						},
						{ no: 5, name: "unix_timestamp_ms", kind: "scalar", T: 1 },
						{
							no: 6,
							name: "open_editors",
							kind: "message",
							T: f,
							repeated: !0,
						},
						{
							no: 7,
							name: "file_diff_histories",
							kind: "message",
							T: b,
							repeated: !0,
						},
						{ no: 8, name: "branch_name", kind: "scalar", T: 9 },
						{ no: 9, name: "branch_notes", kind: "scalar", T: 9 },
						{ no: 12, name: "branch_notes_rich", kind: "scalar", T: 9 },
						{ no: 10, name: "global_notes", kind: "scalar", T: 9 },
						{
							no: 11,
							name: "past_thoughts",
							kind: "message",
							T: s,
							repeated: !0,
						},
						{ no: 13, name: "base_branch_name", kind: "scalar", T: 9 },
						{ no: 14, name: "base_branch_commit_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new p().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new p().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new p().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(p, ge, be);
				}
			}
			e.$Hs = p;
			class o extends t.Message {
				constructor(ge) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.contents = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKDebugInfo.UnsavedFiles";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "contents", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new o().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new o().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new o().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(o, ge, be);
				}
			}
			e.$Is = o;
			class f extends t.Message {
				constructor(ge) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.editorGroupIndex = 0),
						(this.editorGroupId = 0),
						(this.isActive = !1),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKDebugInfo.OpenEditor";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "editor_group_index", kind: "scalar", T: 5 },
						{ no: 3, name: "editor_group_id", kind: "scalar", T: 5 },
						{ no: 4, name: "is_active", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(ge, be) {
					return new f().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new f().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new f().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(f, ge, be);
				}
			}
			e.$Js = f;
			class b extends t.Message {
				constructor(ge) {
					super(),
						(this.fileName = ""),
						(this.diffHistory = []),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKDebugInfo.CppFileDiffHistory";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "file_name", kind: "scalar", T: 9 },
						{ no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new b().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new b().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new b().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(b, ge, be);
				}
			}
			e.$Ks = b;
			class s extends t.Message {
				constructor(ge) {
					super(),
						(this.text = ""),
						(this.timeInUnixSeconds = 0),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKDebugInfo.PastThought";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "text", kind: "scalar", T: 9 },
						{ no: 2, name: "time_in_unix_seconds", kind: "scalar", T: 1 },
					]);
				}
				static fromBinary(ge, be) {
					return new s().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new s().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new s().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(s, ge, be);
				}
			}
			e.$Ls = s;
			class l extends t.Message {
				constructor(ge) {
					super(),
						(this.startLineNumber = 0),
						(this.endLineNumberInclusive = 0),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LineRange";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_line_number", kind: "scalar", T: 5 },
						{ no: 2, name: "end_line_number_inclusive", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ge, be) {
					return new l().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new l().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new l().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(l, ge, be);
				}
			}
			e.$Ms = l;
			class y extends t.Message {
				constructor(ge) {
					super(), t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CursorRange";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_position", kind: "message", T: C },
						{ no: 2, name: "end_position", kind: "message", T: C },
					]);
				}
				static fromBinary(ge, be) {
					return new y().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new y().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new y().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(y, ge, be);
				}
			}
			e.$Ns = y;
			class $ extends t.Message {
				constructor(ge) {
					super(),
						(this.text = ""),
						(this.lineNumber = 0),
						(this.isSignature = !1),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DetailedLine";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "text", kind: "scalar", T: 9 },
						{ no: 2, name: "line_number", kind: "scalar", T: 2 },
						{ no: 3, name: "is_signature", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(ge, be) {
					return new $().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new $().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new $().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals($, ge, be);
				}
			}
			e.$Os = $;
			class v extends t.Message {
				constructor(ge) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.contents = ""),
						(this.detailedLines = []),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CodeBlock";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "file_contents", kind: "scalar", T: 9, opt: !0 },
						{
							no: 9,
							name: "file_contents_length",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{ no: 3, name: "range", kind: "message", T: y },
						{ no: 4, name: "contents", kind: "scalar", T: 9 },
						{ no: 5, name: "signatures", kind: "message", T: S },
						{ no: 6, name: "override_contents", kind: "scalar", T: 9, opt: !0 },
						{ no: 7, name: "original_contents", kind: "scalar", T: 9, opt: !0 },
						{
							no: 8,
							name: "detailed_lines",
							kind: "message",
							T: $,
							repeated: !0,
						},
					]);
				}
				static fromBinary(ge, be) {
					return new v().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new v().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new v().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(v, ge, be);
				}
			}
			e.$Ps = v;
			class S extends t.Message {
				constructor(ge) {
					super(), (this.ranges = []), t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CodeBlock.Signatures";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "ranges", kind: "message", T: y, repeated: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new S().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new S().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new S().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(S, ge, be);
				}
			}
			e.$Qs = S;
			class I extends t.Message {
				constructor(ge) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.contents = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.File";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "contents", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new I().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new I().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new I().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(I, ge, be);
				}
			}
			e.$Rs = I;
			class T extends t.Message {
				constructor(ge) {
					super(),
						(this.message = ""),
						(this.severity = P.UNSPECIFIED),
						(this.relatedInformation = []),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.Diagnostic";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "message", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: y },
						{
							no: 3,
							name: "severity",
							kind: "enum",
							T: t.proto3.getEnumType(P),
						},
						{
							no: 4,
							name: "related_information",
							kind: "message",
							T: k,
							repeated: !0,
						},
					]);
				}
				static fromBinary(ge, be) {
					return new T().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new T().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new T().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(T, ge, be);
				}
			}
			e.$Ss = T;
			var P;
			(function (ve) {
				(ve[(ve.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(ve[(ve.ERROR = 1)] = "ERROR"),
					(ve[(ve.WARNING = 2)] = "WARNING"),
					(ve[(ve.INFORMATION = 3)] = "INFORMATION"),
					(ve[(ve.HINT = 4)] = "HINT");
			})(P || (e.Diagnostic_DiagnosticSeverity = P = {})),
				t.proto3.util.setEnumType(
					P,
					"aiserver.v1.Diagnostic.DiagnosticSeverity",
					[
						{ no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED" },
						{ no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR" },
						{ no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING" },
						{ no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION" },
						{ no: 4, name: "DIAGNOSTIC_SEVERITY_HINT" },
					],
				);
			class k extends t.Message {
				constructor(ge) {
					super(), (this.message = ""), t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.Diagnostic.RelatedInformation";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "message", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: y },
					]);
				}
				static fromBinary(ge, be) {
					return new k().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new k().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new k().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(k, ge, be);
				}
			}
			e.$Ts = k;
			class L extends t.Message {
				constructor(ge) {
					super(),
						(this.message = ""),
						(this.severity = i.UNSPECIFIED),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.Lint";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "message", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: n },
						{
							no: 3,
							name: "severity",
							kind: "enum",
							T: t.proto3.getEnumType(i),
						},
					]);
				}
				static fromBinary(ge, be) {
					return new L().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new L().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new L().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(L, ge, be);
				}
			}
			e.$Us = L;
			class D extends t.Message {
				constructor(ge) {
					super(),
						(this.content = ""),
						(this.score = 0),
						(this.relativePath = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BM25Chunk";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "content", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: m },
						{ no: 3, name: "score", kind: "scalar", T: 5 },
						{ no: 4, name: "relative_path", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new D().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new D().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new D().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(D, ge, be);
				}
			}
			e.$Vs = D;
			class M extends t.Message {
				constructor(ge) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.contents = ""),
						(this.relyOnFilesync = !1),
						(this.cells = []),
						(this.topChunks = []),
						(this.contentsStartAtLine = 0),
						(this.dataframes = []),
						(this.totalNumberOfLines = 0),
						(this.languageId = ""),
						(this.diagnostics = []),
						(this.cellStartLines = []),
						(this.workspaceRootPath = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CurrentFileInfo";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "contents", kind: "scalar", T: 9 },
						{ no: 18, name: "rely_on_filesync", kind: "scalar", T: 8 },
						{ no: 17, name: "sha_256_hash", kind: "scalar", T: 9, opt: !0 },
						{ no: 16, name: "cells", kind: "message", T: N, repeated: !0 },
						{ no: 10, name: "top_chunks", kind: "message", T: D, repeated: !0 },
						{ no: 9, name: "contents_start_at_line", kind: "scalar", T: 5 },
						{ no: 3, name: "cursor_position", kind: "message", T: C },
						{ no: 4, name: "dataframes", kind: "message", T: O, repeated: !0 },
						{ no: 8, name: "total_number_of_lines", kind: "scalar", T: 5 },
						{ no: 5, name: "language_id", kind: "scalar", T: 9 },
						{ no: 6, name: "selection", kind: "message", T: y },
						{
							no: 11,
							name: "alternative_version_id",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{ no: 7, name: "diagnostics", kind: "message", T, repeated: !0 },
						{ no: 14, name: "file_version", kind: "scalar", T: 5, opt: !0 },
						{
							no: 15,
							name: "cell_start_lines",
							kind: "scalar",
							T: 5,
							repeated: !0,
						},
						{ no: 19, name: "workspace_root_path", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new M().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new M().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new M().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(M, ge, be);
				}
			}
			e.$Ws = M;
			class N extends t.Message {
				constructor(ge) {
					super(), t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CurrentFileInfo.NotebookCell";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ge, be) {
					return new N().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new N().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new N().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(N, ge, be);
				}
			}
			e.$Xs = N;
			class A extends t.Message {
				constructor(ge) {
					super(),
						(this.apiKey = ""),
						(this.baseUrl = ""),
						(this.deployment = ""),
						(this.useAzure = !1),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AzureState";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "api_key", kind: "scalar", T: 9 },
						{ no: 2, name: "base_url", kind: "scalar", T: 9 },
						{ no: 3, name: "deployment", kind: "scalar", T: 9 },
						{ no: 4, name: "use_azure", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(ge, be) {
					return new A().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new A().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new A().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(A, ge, be);
				}
			}
			e.$Ys = A;
			class R extends t.Message {
				constructor(ge) {
					super(), t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ModelDetails";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_name", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "api_key", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "enable_ghost_mode", kind: "scalar", T: 8, opt: !0 },
						{ no: 4, name: "azure_state", kind: "message", T: A, opt: !0 },
						{ no: 5, name: "enable_slow_pool", kind: "scalar", T: 8, opt: !0 },
						{
							no: 6,
							name: "openai_api_base_url",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
					]);
				}
				static fromBinary(ge, be) {
					return new R().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new R().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new R().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(R, ge, be);
				}
			}
			e.$Zs = R;
			class O extends t.Message {
				constructor(ge) {
					super(),
						(this.name = ""),
						(this.shape = ""),
						(this.dataDimensionality = 0),
						(this.columns = []),
						(this.rowCount = 0),
						(this.indexColumn = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DataframeInfo";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9 },
						{ no: 2, name: "shape", kind: "scalar", T: 9 },
						{ no: 3, name: "data_dimensionality", kind: "scalar", T: 5 },
						{ no: 6, name: "columns", kind: "message", T: B, repeated: !0 },
						{ no: 7, name: "row_count", kind: "scalar", T: 5 },
						{ no: 8, name: "index_column", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new O().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new O().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new O().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(O, ge, be);
				}
			}
			e.$1s = O;
			class B extends t.Message {
				constructor(ge) {
					super(),
						(this.key = ""),
						(this.type = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DataframeInfo.Column";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "key", kind: "scalar", T: 9 },
						{ no: 2, name: "type", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new B().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new B().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new B().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(B, ge, be);
				}
			}
			e.$2s = B;
			class U extends t.Message {
				constructor(ge) {
					super(),
						(this.message = ""),
						(this.relatedInformation = []),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LinterError";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "message", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: y },
						{ no: 3, name: "source", kind: "scalar", T: 9, opt: !0 },
						{
							no: 4,
							name: "related_information",
							kind: "message",
							T: k,
							repeated: !0,
						},
						{
							no: 5,
							name: "severity",
							kind: "enum",
							T: t.proto3.getEnumType(P),
							opt: !0,
						},
					]);
				}
				static fromBinary(ge, be) {
					return new U().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new U().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new U().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(U, ge, be);
				}
			}
			e.$3s = U;
			class z extends t.Message {
				constructor(ge) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.errors = []),
						(this.fileContents = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LinterErrors";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "errors", kind: "message", T: U, repeated: !0 },
						{ no: 3, name: "file_contents", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new z().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new z().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new z().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(z, ge, be);
				}
			}
			e.$4s = z;
			class F extends t.Message {
				constructor(ge) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.errors = []),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LinterErrorsWithoutFileContents";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "errors", kind: "message", T: U, repeated: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new F().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new F().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new F().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(F, ge, be);
				}
			}
			e.$5s = F;
			class x extends t.Message {
				constructor(ge) {
					super(), (this.context = ""), t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ExplicitContext";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "context", kind: "scalar", T: 9 },
						{ no: 2, name: "repo_context", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new x().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new x().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new x().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(x, ge, be);
				}
			}
			e.$6s = x;
			class H extends t.Message {
				constructor(ge) {
					super(),
						(this.messageType = q.UNSPECIFIED),
						(this.content = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.PureMessage";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "message_type",
							kind: "enum",
							T: t.proto3.getEnumType(q),
						},
						{ no: 2, name: "content", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new H().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new H().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new H().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(H, ge, be);
				}
			}
			e.$7s = H;
			var q;
			(function (ve) {
				(ve[(ve.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(ve[(ve.SYSTEM = 1)] = "SYSTEM"),
					(ve[(ve.USER = 2)] = "USER"),
					(ve[(ve.ASSISTANT = 3)] = "ASSISTANT");
			})(q || (e.PureMessage_MessageType = q = {})),
				t.proto3.util.setEnumType(q, "aiserver.v1.PureMessage.MessageType", [
					{ no: 0, name: "MESSAGE_TYPE_UNSPECIFIED" },
					{ no: 1, name: "MESSAGE_TYPE_SYSTEM" },
					{ no: 2, name: "MESSAGE_TYPE_USER" },
					{ no: 3, name: "MESSAGE_TYPE_ASSISTANT" },
				]);
			class V extends t.Message {
				constructor(ge) {
					super(),
						(this.name = ""),
						(this.detail = ""),
						(this.kind = G.UNSPECIFIED),
						(this.containerName = ""),
						(this.children = []),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DocumentSymbol";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9 },
						{ no: 2, name: "detail", kind: "scalar", T: 9 },
						{ no: 3, name: "kind", kind: "enum", T: t.proto3.getEnumType(G) },
						{ no: 5, name: "container_name", kind: "scalar", T: 9 },
						{ no: 6, name: "range", kind: "message", T: K },
						{ no: 7, name: "selection_range", kind: "message", T: K },
						{ no: 8, name: "children", kind: "message", T: V, repeated: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new V().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new V().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new V().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(V, ge, be);
				}
			}
			e.$8s = V;
			var G;
			(function (ve) {
				(ve[(ve.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(ve[(ve.FILE = 1)] = "FILE"),
					(ve[(ve.MODULE = 2)] = "MODULE"),
					(ve[(ve.NAMESPACE = 3)] = "NAMESPACE"),
					(ve[(ve.PACKAGE = 4)] = "PACKAGE"),
					(ve[(ve.CLASS = 5)] = "CLASS"),
					(ve[(ve.METHOD = 6)] = "METHOD"),
					(ve[(ve.PROPERTY = 7)] = "PROPERTY"),
					(ve[(ve.FIELD = 8)] = "FIELD"),
					(ve[(ve.CONSTRUCTOR = 9)] = "CONSTRUCTOR"),
					(ve[(ve.ENUM = 10)] = "ENUM"),
					(ve[(ve.INTERFACE = 11)] = "INTERFACE"),
					(ve[(ve.FUNCTION = 12)] = "FUNCTION"),
					(ve[(ve.VARIABLE = 13)] = "VARIABLE"),
					(ve[(ve.CONSTANT = 14)] = "CONSTANT"),
					(ve[(ve.STRING = 15)] = "STRING"),
					(ve[(ve.NUMBER = 16)] = "NUMBER"),
					(ve[(ve.BOOLEAN = 17)] = "BOOLEAN"),
					(ve[(ve.ARRAY = 18)] = "ARRAY"),
					(ve[(ve.OBJECT = 19)] = "OBJECT"),
					(ve[(ve.KEY = 20)] = "KEY"),
					(ve[(ve.NULL = 21)] = "NULL"),
					(ve[(ve.ENUM_MEMBER = 22)] = "ENUM_MEMBER"),
					(ve[(ve.STRUCT = 23)] = "STRUCT"),
					(ve[(ve.EVENT = 24)] = "EVENT"),
					(ve[(ve.OPERATOR = 25)] = "OPERATOR"),
					(ve[(ve.TYPE_PARAMETER = 26)] = "TYPE_PARAMETER");
			})(G || (e.DocumentSymbol_SymbolKind = G = {})),
				t.proto3.util.setEnumType(G, "aiserver.v1.DocumentSymbol.SymbolKind", [
					{ no: 0, name: "SYMBOL_KIND_UNSPECIFIED" },
					{ no: 1, name: "SYMBOL_KIND_FILE" },
					{ no: 2, name: "SYMBOL_KIND_MODULE" },
					{ no: 3, name: "SYMBOL_KIND_NAMESPACE" },
					{ no: 4, name: "SYMBOL_KIND_PACKAGE" },
					{ no: 5, name: "SYMBOL_KIND_CLASS" },
					{ no: 6, name: "SYMBOL_KIND_METHOD" },
					{ no: 7, name: "SYMBOL_KIND_PROPERTY" },
					{ no: 8, name: "SYMBOL_KIND_FIELD" },
					{ no: 9, name: "SYMBOL_KIND_CONSTRUCTOR" },
					{ no: 10, name: "SYMBOL_KIND_ENUM" },
					{ no: 11, name: "SYMBOL_KIND_INTERFACE" },
					{ no: 12, name: "SYMBOL_KIND_FUNCTION" },
					{ no: 13, name: "SYMBOL_KIND_VARIABLE" },
					{ no: 14, name: "SYMBOL_KIND_CONSTANT" },
					{ no: 15, name: "SYMBOL_KIND_STRING" },
					{ no: 16, name: "SYMBOL_KIND_NUMBER" },
					{ no: 17, name: "SYMBOL_KIND_BOOLEAN" },
					{ no: 18, name: "SYMBOL_KIND_ARRAY" },
					{ no: 19, name: "SYMBOL_KIND_OBJECT" },
					{ no: 20, name: "SYMBOL_KIND_KEY" },
					{ no: 21, name: "SYMBOL_KIND_NULL" },
					{ no: 22, name: "SYMBOL_KIND_ENUM_MEMBER" },
					{ no: 23, name: "SYMBOL_KIND_STRUCT" },
					{ no: 24, name: "SYMBOL_KIND_EVENT" },
					{ no: 25, name: "SYMBOL_KIND_OPERATOR" },
					{ no: 26, name: "SYMBOL_KIND_TYPE_PARAMETER" },
				]);
			class K extends t.Message {
				constructor(ge) {
					super(),
						(this.startLineNumber = 0),
						(this.startColumn = 0),
						(this.endLineNumber = 0),
						(this.endColumn = 0),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DocumentSymbol.Range";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_line_number", kind: "scalar", T: 5 },
						{ no: 2, name: "start_column", kind: "scalar", T: 5 },
						{ no: 3, name: "end_line_number", kind: "scalar", T: 5 },
						{ no: 4, name: "end_column", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ge, be) {
					return new K().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new K().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new K().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(K, ge, be);
				}
			}
			e.$9s = K;
			class J extends t.Message {
				constructor(ge) {
					super(),
						(this.codeDetails = ""),
						(this.markdownBlocks = []),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.HoverDetails";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "code_details", kind: "scalar", T: 9 },
						{
							no: 2,
							name: "markdown_blocks",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
					]);
				}
				static fromBinary(ge, be) {
					return new J().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new J().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new J().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(J, ge, be);
				}
			}
			e.$0s = J;
			class W extends t.Message {
				constructor(ge) {
					super(), (this.scheme = ""), t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UriComponents";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "scheme", kind: "scalar", T: 9 },
						{ no: 2, name: "authority", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "path", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "query", kind: "scalar", T: 9, opt: !0 },
						{ no: 5, name: "fragment", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new W().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new W().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new W().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(W, ge, be);
				}
			}
			e.$$s = W;
			class X extends t.Message {
				constructor(ge) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.textInSymbolRange = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DocumentSymbolWithText";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "symbol", kind: "message", T: V },
						{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 3, name: "text_in_symbol_range", kind: "scalar", T: 9 },
						{ no: 4, name: "uri_components", kind: "message", T: W },
					]);
				}
				static fromBinary(ge, be) {
					return new X().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new X().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new X().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(X, ge, be);
				}
			}
			e.$_s = X;
			class Y extends t.Message {
				constructor(ge) {
					super(),
						(this.error = ie.UNSPECIFIED),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ErrorDetails";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "error", kind: "enum", T: t.proto3.getEnumType(ie) },
						{ no: 2, name: "details", kind: "message", T: ne },
						{ no: 3, name: "is_expected", kind: "scalar", T: 8, opt: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new Y().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new Y().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new Y().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(Y, ge, be);
				}
			}
			e.$at = Y;
			var ie;
			(function (ve) {
				(ve[(ve.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(ve[(ve.BAD_API_KEY = 1)] = "BAD_API_KEY"),
					(ve[(ve.BAD_USER_API_KEY = 42)] = "BAD_USER_API_KEY"),
					(ve[(ve.NOT_LOGGED_IN = 2)] = "NOT_LOGGED_IN"),
					(ve[(ve.INVALID_AUTH_ID = 3)] = "INVALID_AUTH_ID"),
					(ve[(ve.NOT_HIGH_ENOUGH_PERMISSIONS = 4)] =
						"NOT_HIGH_ENOUGH_PERMISSIONS"),
					(ve[(ve.AGENT_REQUIRES_LOGIN = 18)] = "AGENT_REQUIRES_LOGIN"),
					(ve[(ve.BAD_MODEL_NAME = 5)] = "BAD_MODEL_NAME"),
					(ve[(ve.NOT_FOUND = 39)] = "NOT_FOUND"),
					(ve[(ve.DEPRECATED = 40)] = "DEPRECATED"),
					(ve[(ve.USER_NOT_FOUND = 6)] = "USER_NOT_FOUND"),
					(ve[(ve.FREE_USER_RATE_LIMIT_EXCEEDED = 7)] =
						"FREE_USER_RATE_LIMIT_EXCEEDED"),
					(ve[(ve.PRO_USER_RATE_LIMIT_EXCEEDED = 8)] =
						"PRO_USER_RATE_LIMIT_EXCEEDED"),
					(ve[(ve.FREE_USER_USAGE_LIMIT = 9)] = "FREE_USER_USAGE_LIMIT"),
					(ve[(ve.PRO_USER_USAGE_LIMIT = 10)] = "PRO_USER_USAGE_LIMIT"),
					(ve[(ve.RESOURCE_EXHAUSTED = 41)] = "RESOURCE_EXHAUSTED"),
					(ve[(ve.AUTH_TOKEN_NOT_FOUND = 11)] = "AUTH_TOKEN_NOT_FOUND"),
					(ve[(ve.AUTH_TOKEN_EXPIRED = 12)] = "AUTH_TOKEN_EXPIRED"),
					(ve[(ve.OPENAI = 13)] = "OPENAI"),
					(ve[(ve.OPENAI_RATE_LIMIT_EXCEEDED = 14)] =
						"OPENAI_RATE_LIMIT_EXCEEDED"),
					(ve[(ve.OPENAI_ACCOUNT_LIMIT_EXCEEDED = 15)] =
						"OPENAI_ACCOUNT_LIMIT_EXCEEDED"),
					(ve[(ve.TASK_UUID_NOT_FOUND = 16)] = "TASK_UUID_NOT_FOUND"),
					(ve[(ve.TASK_NO_PERMISSIONS = 17)] = "TASK_NO_PERMISSIONS"),
					(ve[(ve.AGENT_ENGINE_NOT_FOUND = 19)] = "AGENT_ENGINE_NOT_FOUND"),
					(ve[(ve.MAX_TOKENS = 20)] = "MAX_TOKENS"),
					(ve[(ve.PRO_USER_ONLY = 23)] = "PRO_USER_ONLY"),
					(ve[(ve.API_KEY_NOT_SUPPORTED = 24)] = "API_KEY_NOT_SUPPORTED"),
					(ve[(ve.USER_ABORTED_REQUEST = 21)] = "USER_ABORTED_REQUEST"),
					(ve[(ve.TIMEOUT = 25)] = "TIMEOUT"),
					(ve[(ve.GENERIC_RATE_LIMIT_EXCEEDED = 22)] =
						"GENERIC_RATE_LIMIT_EXCEEDED"),
					(ve[(ve.SLASH_EDIT_FILE_TOO_LONG = 26)] = "SLASH_EDIT_FILE_TOO_LONG"),
					(ve[(ve.FILE_UNSUPPORTED = 27)] = "FILE_UNSUPPORTED"),
					(ve[(ve.GPT_4_VISION_PREVIEW_RATE_LIMIT = 28)] =
						"GPT_4_VISION_PREVIEW_RATE_LIMIT"),
					(ve[(ve.CUSTOM_MESSAGE = 29)] = "CUSTOM_MESSAGE"),
					(ve[(ve.OUTDATED_CLIENT = 30)] = "OUTDATED_CLIENT"),
					(ve[(ve.CLAUDE_IMAGE_TOO_LARGE = 31)] = "CLAUDE_IMAGE_TOO_LARGE"),
					(ve[(ve.GITGRAPH_NOT_FOUND = 32)] = "GITGRAPH_NOT_FOUND"),
					(ve[(ve.FILE_NOT_FOUND = 33)] = "FILE_NOT_FOUND"),
					(ve[(ve.API_KEY_RATE_LIMIT = 34)] = "API_KEY_RATE_LIMIT"),
					(ve[(ve.DEBOUNCED = 35)] = "DEBOUNCED"),
					(ve[(ve.BAD_REQUEST = 36)] = "BAD_REQUEST"),
					(ve[(ve.REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED = 37)] =
						"REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"),
					(ve[(ve.UNAUTHORIZED = 38)] = "UNAUTHORIZED");
			})(ie || (e.ErrorDetails_Error = ie = {})),
				t.proto3.util.setEnumType(ie, "aiserver.v1.ErrorDetails.Error", [
					{ no: 0, name: "ERROR_UNSPECIFIED" },
					{ no: 1, name: "ERROR_BAD_API_KEY" },
					{ no: 42, name: "ERROR_BAD_USER_API_KEY" },
					{ no: 2, name: "ERROR_NOT_LOGGED_IN" },
					{ no: 3, name: "ERROR_INVALID_AUTH_ID" },
					{ no: 4, name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS" },
					{ no: 18, name: "ERROR_AGENT_REQUIRES_LOGIN" },
					{ no: 5, name: "ERROR_BAD_MODEL_NAME" },
					{ no: 39, name: "ERROR_NOT_FOUND" },
					{ no: 40, name: "ERROR_DEPRECATED" },
					{ no: 6, name: "ERROR_USER_NOT_FOUND" },
					{ no: 7, name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED" },
					{ no: 8, name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED" },
					{ no: 9, name: "ERROR_FREE_USER_USAGE_LIMIT" },
					{ no: 10, name: "ERROR_PRO_USER_USAGE_LIMIT" },
					{ no: 41, name: "ERROR_RESOURCE_EXHAUSTED" },
					{ no: 11, name: "ERROR_AUTH_TOKEN_NOT_FOUND" },
					{ no: 12, name: "ERROR_AUTH_TOKEN_EXPIRED" },
					{ no: 13, name: "ERROR_OPENAI" },
					{ no: 14, name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED" },
					{ no: 15, name: "ERROR_OPENAI_ACCOUNT_LIMIT_EXCEEDED" },
					{ no: 16, name: "ERROR_TASK_UUID_NOT_FOUND" },
					{ no: 17, name: "ERROR_TASK_NO_PERMISSIONS" },
					{ no: 19, name: "ERROR_AGENT_ENGINE_NOT_FOUND" },
					{ no: 20, name: "ERROR_MAX_TOKENS" },
					{ no: 23, name: "ERROR_PRO_USER_ONLY" },
					{ no: 24, name: "ERROR_API_KEY_NOT_SUPPORTED" },
					{ no: 21, name: "ERROR_USER_ABORTED_REQUEST" },
					{ no: 25, name: "ERROR_TIMEOUT" },
					{ no: 22, name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED" },
					{ no: 26, name: "ERROR_SLASH_EDIT_FILE_TOO_LONG" },
					{ no: 27, name: "ERROR_FILE_UNSUPPORTED" },
					{ no: 28, name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT" },
					{ no: 29, name: "ERROR_CUSTOM_MESSAGE" },
					{ no: 30, name: "ERROR_OUTDATED_CLIENT" },
					{ no: 31, name: "ERROR_CLAUDE_IMAGE_TOO_LARGE" },
					{ no: 32, name: "ERROR_GITGRAPH_NOT_FOUND" },
					{ no: 33, name: "ERROR_FILE_NOT_FOUND" },
					{ no: 34, name: "ERROR_API_KEY_RATE_LIMIT" },
					{ no: 35, name: "ERROR_DEBOUNCED" },
					{ no: 36, name: "ERROR_BAD_REQUEST" },
					{
						no: 37,
						name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED",
					},
					{ no: 38, name: "ERROR_UNAUTHORIZED" },
				]);
			class ne extends t.Message {
				constructor(ge) {
					super(),
						(this.title = ""),
						(this.detail = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CustomErrorDetails";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "title", kind: "scalar", T: 9 },
						{ no: 2, name: "detail", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
						{ no: 4, name: "is_retryable", kind: "scalar", T: 8, opt: !0 },
						{ no: 5, name: "show_request_id", kind: "scalar", T: 8, opt: !0 },
						{
							no: 6,
							name: "should_show_immediate_error",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
					]);
				}
				static fromBinary(ge, be) {
					return new ne().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new ne().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new ne().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(ne, ge, be);
				}
			}
			e.$bt = ne;
			class ee extends t.Message {
				constructor(ge) {
					super(),
						(this.data = new Uint8Array(0)),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ImageProto";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "data", kind: "scalar", T: 12 },
						{ no: 2, name: "dimension", kind: "message", T: _ },
					]);
				}
				static fromBinary(ge, be) {
					return new ee().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new ee().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new ee().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(ee, ge, be);
				}
			}
			e.$ct = ee;
			class _ extends t.Message {
				constructor(ge) {
					super(),
						(this.width = 0),
						(this.height = 0),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ImageProto.Dimension";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "width", kind: "scalar", T: 5 },
						{ no: 2, name: "height", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ge, be) {
					return new _().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new _().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new _().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(_, ge, be);
				}
			}
			e.$dt = _;
			class te extends t.Message {
				constructor(ge) {
					super(),
						(this.markdown = ""),
						(this.bubbleId = ""),
						(this.sectionIndex = 0),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ChatQuote";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "markdown", kind: "scalar", T: 9 },
						{ no: 2, name: "bubble_id", kind: "scalar", T: 9 },
						{ no: 3, name: "section_index", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ge, be) {
					return new te().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new te().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new te().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(te, ge, be);
				}
			}
			e.$et = te;
			class Q extends t.Message {
				constructor(ge) {
					super(),
						(this.url = ""),
						(this.uuid = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ChatExternalLink";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "url", kind: "scalar", T: 9 },
						{ no: 2, name: "uuid", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new Q().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new Q().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new Q().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(Q, ge, be);
				}
			}
			e.$ft = Q;
			class Z extends t.Message {
				constructor(ge) {
					super(),
						(this.url = ""),
						(this.uuid = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ComposerExternalLink";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "url", kind: "scalar", T: 9 },
						{ no: 2, name: "uuid", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new Z().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new Z().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new Z().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(Z, ge, be);
				}
			}
			e.$gt = Z;
			class se extends t.Message {
				constructor(ge) {
					super(),
						(this.url = ""),
						(this.uuid = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKExternalLink";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "url", kind: "scalar", T: 9 },
						{ no: 2, name: "uuid", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new se().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new se().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new se().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(se, ge, be);
				}
			}
			e.$ht = se;
			class re extends t.Message {
				constructor(ge) {
					super(),
						(this.note = ""),
						(this.commitHash = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CommitNote";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "note", kind: "scalar", T: 9 },
						{ no: 2, name: "commit_hash", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new re().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new re().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new re().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(re, ge, be);
				}
			}
			e.$it = re;
			class le extends t.Message {
				constructor(ge) {
					super(),
						(this.note = ""),
						(this.commitHash = ""),
						(this.embeddings = []),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CommitNoteWithEmbeddings";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "note", kind: "scalar", T: 9 },
						{ no: 2, name: "commit_hash", kind: "scalar", T: 9 },
						{ no: 3, name: "embeddings", kind: "scalar", T: 1, repeated: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new le().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new le().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new le().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(le, ge, be);
				}
			}
			e.$jt = le;
			class oe extends t.Message {
				constructor(ge) {
					super(), (this.diff = ""), t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CommitDiffString";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "diff", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new oe().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new oe().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new oe().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(oe, ge, be);
				}
			}
			e.$kt = oe;
			class ae extends t.Message {
				constructor(ge) {
					super(),
						(this.notes = []),
						(this.commitHash = ""),
						(this.repoUrl = ""),
						(this.filesChangedRelativePath = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FullCommitNotes";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "notes", kind: "message", T: re, repeated: !0 },
						{ no: 2, name: "commit_hash", kind: "scalar", T: 9 },
						{ no: 3, name: "repo_url", kind: "scalar", T: 9 },
						{
							no: 4,
							name: "files_changed_relative_path",
							kind: "scalar",
							T: 9,
						},
					]);
				}
				static fromBinary(ge, be) {
					return new ae().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new ae().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new ae().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(ae, ge, be);
				}
			}
			e.$lt = ae;
			class pe extends t.Message {
				constructor(ge) {
					super(),
						(this.key = ""),
						(this.value = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CrossExtHostHeader";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "key", kind: "scalar", T: 9 },
						{ no: 2, name: "value", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new pe().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new pe().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new pe().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(pe, ge, be);
				}
			}
			e.$mt = pe;
			class $e extends t.Message {
				constructor(ge) {
					super(), (this.headers = []), t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CrossExtHostHeaders";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "headers", kind: "message", T: pe, repeated: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new $e().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new $e().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new $e().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals($e, ge, be);
				}
			}
			e.$nt = $e;
			class ye extends t.Message {
				constructor(ge) {
					super(),
						(this.message = new Uint8Array(0)),
						(this.isError = !1),
						(this.connectError = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SimpleUnaryCrossExtensionHostMessage";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "message", kind: "scalar", T: 12 },
						{ no: 2, name: "header", kind: "message", T: $e },
						{ no: 3, name: "trailer", kind: "message", T: $e },
						{ no: 4, name: "is_error", kind: "scalar", T: 8 },
						{ no: 5, name: "connect_error", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ge, be) {
					return new ye().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new ye().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new ye().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(ye, ge, be);
				}
			}
			e.$ot = ye;
			class ue extends t.Message {
				constructor(ge) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.startLineNumber = 0),
						(this.lines = []),
						(this.languageIdentifier = ""),
						t.proto3.util.initPartial(ge, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CodeChunk";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "start_line_number", kind: "scalar", T: 5 },
						{ no: 3, name: "lines", kind: "scalar", T: 9, repeated: !0 },
						{
							no: 4,
							name: "summarization_strategy",
							kind: "enum",
							T: t.proto3.getEnumType(me),
							opt: !0,
						},
						{ no: 5, name: "language_identifier", kind: "scalar", T: 9 },
						{
							no: 6,
							name: "intent",
							kind: "enum",
							T: t.proto3.getEnumType(fe),
							opt: !0,
						},
						{ no: 7, name: "is_final_version", kind: "scalar", T: 8, opt: !0 },
						{ no: 8, name: "is_first_version", kind: "scalar", T: 8, opt: !0 },
					]);
				}
				static fromBinary(ge, be) {
					return new ue().fromBinary(ge, be);
				}
				static fromJson(ge, be) {
					return new ue().fromJson(ge, be);
				}
				static fromJsonString(ge, be) {
					return new ue().fromJsonString(ge, be);
				}
				static equals(ge, be) {
					return t.proto3.util.equals(ue, ge, be);
				}
			}
			e.$pt = ue;
			var fe;
			(function (ve) {
				(ve[(ve.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(ve[(ve.COMPOSER_FILE = 1)] = "COMPOSER_FILE"),
					(ve[(ve.COMPRESSED_COMPOSER_FILE = 2)] = "COMPRESSED_COMPOSER_FILE");
			})(fe || (e.CodeChunk_Intent = fe = {})),
				t.proto3.util.setEnumType(fe, "aiserver.v1.CodeChunk.Intent", [
					{ no: 0, name: "INTENT_UNSPECIFIED" },
					{ no: 1, name: "INTENT_COMPOSER_FILE" },
					{ no: 2, name: "INTENT_COMPRESSED_COMPOSER_FILE" },
				]);
			var me;
			(function (ve) {
				(ve[(ve.NONE_UNSPECIFIED = 0)] = "NONE_UNSPECIFIED"),
					(ve[(ve.SUMMARIZED = 1)] = "SUMMARIZED"),
					(ve[(ve.EMBEDDED = 2)] = "EMBEDDED");
			})(me || (e.CodeChunk_SummarizationStrategy = me = {})),
				t.proto3.util.setEnumType(
					me,
					"aiserver.v1.CodeChunk.SummarizationStrategy",
					[
						{ no: 0, name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED" },
						{ no: 1, name: "SUMMARIZATION_STRATEGY_SUMMARIZED" },
						{ no: 2, name: "SUMMARIZATION_STRATEGY_EMBEDDED" },
					],
				);
		}),
		