import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './utils_pb.js';
import './cpp_pb.js';
import './lsp_subgraph_pb.js';
define(
			de[228],
			he([1, 0, 86, 83, 367, 1477]),
			function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*utils_pb*/,
 w /*cpp_pb*/,
 E /*lsp_subgraph_pb*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oC =
						e.$nC =
						e.$mC =
						e.$lC =
						e.$kC =
						e.$jC =
						e.$iC =
						e.$hC =
						e.$gC =
						e.$fC =
						e.$eC =
						e.$dC =
						e.$cC =
						e.$bC =
						e.$aC =
						e.$_B =
						e.$$B =
						e.$0B =
						e.$9B =
						e.ContextIntent_File_Mode =
						e.$8B =
						e.$7B =
						e.ContextIntent_Type =
						e.$6B =
						e.$5B =
						e.$4B =
						e.$3B =
						e.$2B =
						e.$1B =
						e.$ZB =
						e.$YB =
						e.$XB =
						e.$WB =
						e.$VB =
						e.$UB =
						e.$TB =
						e.$SB =
						e.$RB =
						e.$QB =
						e.$PB =
						e.$OB =
						e.$NB =
						e.$MB =
						e.$LB =
						e.$KB =
						e.$JB =
						e.$IB =
						e.$HB =
						e.$GB =
						e.ContextItemStatus_PostGenerationEvaluation =
						e.$FB =
						e.$EB =
						e.$DB =
						e.$CB =
							void 0);
				class C extends t.Message {
					constructor(oe) {
						super(),
							(this.item = { case: void 0 }),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PotentiallyCachedContextItem";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_item",
								kind: "message",
								T: a,
								oneof: "item",
							},
							{
								no: 2,
								name: "context_item_hash",
								kind: "scalar",
								T: 9,
								oneof: "item",
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new C().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new C().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new C().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(C, oe, ae);
					}
				}
				e.$CB = C;
				class d extends t.Message {
					constructor(oe) {
						super(),
							(this.contextItemStatuses = []),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextStatusUpdate";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_item_statuses",
								kind: "message",
								T: r,
								repeated: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new d().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new d().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new d().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(d, oe, ae);
					}
				}
				e.$DB = d;
				class m extends t.Message {
					constructor(oe) {
						super(),
							(this.missingContextItemHashes = []),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.MissingContextItems";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 2,
								name: "missing_context_item_hashes",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new m().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new m().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new m().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(m, oe, ae);
					}
				}
				e.$EB = m;
				class r extends t.Message {
					constructor(oe) {
						super(),
							(this.contextItemHash = ""),
							(this.shownToTheModel = !1),
							(this.score = 0),
							(this.percentageOfAvailableSpace = 0),
							(this.postGenerationEvaluation = u.UNSPECIFIED),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItemStatus";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "context_item_hash", kind: "scalar", T: 9 },
							{ no: 2, name: "shown_to_the_model", kind: "scalar", T: 8 },
							{ no: 3, name: "score", kind: "scalar", T: 2 },
							{
								no: 4,
								name: "percentage_of_available_space",
								kind: "scalar",
								T: 2,
							},
							{
								no: 5,
								name: "post_generation_evaluation",
								kind: "enum",
								T: t.proto3.getEnumType(u),
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new r().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new r().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new r().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(r, oe, ae);
					}
				}
				e.$FB = r;
				var u;
				(function (le) {
					(le[(le.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(le[(le.USEFUL = 1)] = "USEFUL"),
						(le[(le.USELESS = 2)] = "USELESS");
				})(u || (e.ContextItemStatus_PostGenerationEvaluation = u = {})),
					t.proto3.util.setEnumType(
						u,
						"aiserver.v1.ContextItemStatus.PostGenerationEvaluation",
						[
							{ no: 0, name: "POST_GENERATION_EVALUATION_UNSPECIFIED" },
							{ no: 1, name: "POST_GENERATION_EVALUATION_USEFUL" },
							{ no: 2, name: "POST_GENERATION_EVALUATION_USELESS" },
						],
					);
				class a extends t.Message {
					constructor(oe) {
						super(),
							(this.item = { case: void 0 }),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "intent", kind: "message", T: O },
							{
								no: 2,
								name: "file_chunk",
								kind: "message",
								T: h,
								oneof: "item",
							},
							{
								no: 3,
								name: "outline_chunk",
								kind: "message",
								T: g,
								oneof: "item",
							},
							{
								no: 4,
								name: "cmd_k_selection",
								kind: "message",
								T: p,
								oneof: "item",
							},
							{
								no: 5,
								name: "cmd_k_immediate_context",
								kind: "message",
								T: f,
								oneof: "item",
							},
							{
								no: 6,
								name: "cmd_k_query",
								kind: "message",
								T: s,
								oneof: "item",
							},
							{
								no: 7,
								name: "cmd_k_query_history",
								kind: "message",
								T: $,
								oneof: "item",
							},
							{
								no: 8,
								name: "custom_instructions",
								kind: "message",
								T: P,
								oneof: "item",
							},
							{
								no: 9,
								name: "go_to_definition_result",
								kind: "message",
								T: k,
								oneof: "item",
							},
							{
								no: 10,
								name: "documentation_chunk",
								kind: "message",
								T: L,
								oneof: "item",
							},
							{ no: 11, name: "lints", kind: "message", T: D, oneof: "item" },
							{
								no: 12,
								name: "chat_history",
								kind: "message",
								T: I,
								oneof: "item",
							},
							{
								no: 13,
								name: "notebook_cell_output",
								kind: "message",
								T: N,
								oneof: "item",
							},
							{
								no: 14,
								name: "terminal_history",
								kind: "message",
								T,
								oneof: "item",
							},
							{
								no: 15,
								name: "terminal_cmd_k_query",
								kind: "message",
								T: l,
								oneof: "item",
							},
							{
								no: 16,
								name: "terminal_cmd_k_query_history",
								kind: "message",
								T: y,
								oneof: "item",
							},
							{
								no: 17,
								name: "sparse_file_chunk",
								kind: "message",
								T: c,
								oneof: "item",
							},
							{
								no: 18,
								name: "lsp_subgraph_chunk",
								kind: "message",
								T: A,
								oneof: "item",
							},
							{
								no: 19,
								name: "commit_note_chunk",
								kind: "message",
								T: R,
								oneof: "item",
							},
							{
								no: 20,
								name: "file_diff_history",
								kind: "message",
								T: o,
								oneof: "item",
							},
							{
								no: 21,
								name: "cmd_k_query_history_in_diff_session",
								kind: "message",
								T: v,
								oneof: "item",
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new a().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new a().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new a().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(a, oe, ae);
					}
				}
				e.$GB = a;
				class h extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.chunkContents = ""),
							(this.startLineNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.FileChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "chunk_contents", kind: "scalar", T: 9 },
							{ no: 3, name: "start_line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new h().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new h().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new h().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(h, oe, ae);
					}
				}
				e.$HB = h;
				class c extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.lines = []),
							(this.totalNumberOfLinesInFile = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.SparseFileChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "lines", kind: "message", T: n, repeated: !0 },
							{
								no: 3,
								name: "total_number_of_lines_in_file",
								kind: "scalar",
								T: 5,
							},
							{ no: 4, name: "cell_number", kind: "scalar", T: 5, opt: !0 },
						]);
					}
					static fromBinary(oe, ae) {
						return new c().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new c().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new c().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(c, oe, ae);
					}
				}
				e.$IB = c;
				class n extends t.Message {
					constructor(oe) {
						super(),
							(this.line = ""),
							(this.lineNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.SparseFileChunk.Line";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "line", kind: "scalar", T: 9 },
							{ no: 2, name: "line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new n().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new n().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new n().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(n, oe, ae);
					}
				}
				e.$JB = n;
				class g extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.contents = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.OutlineChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "contents", kind: "scalar", T: 9 },
							{ no: 3, name: "full_range", kind: "message", T: i.$Ms },
						]);
					}
					static fromBinary(oe, ae) {
						return new g().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new g().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new g().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(g, oe, ae);
					}
				}
				e.$KB = g;
				class p extends t.Message {
					constructor(oe) {
						super(),
							(this.lines = []),
							(this.startLineNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CmdKSelection";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "lines", kind: "scalar", T: 9, repeated: !0 },
							{ no: 2, name: "start_line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new p().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new p().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new p().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(p, oe, ae);
					}
				}
				e.$LB = p;
				class o extends t.Message {
					constructor(oe) {
						super(),
							(this.howManyDiffsAgo = 0),
							(this.isVeryRecent = !1),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.FileDiffHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "cpp_file_diff_history",
								kind: "message",
								T: w.$Hv,
							},
							{ no: 2, name: "how_many_diffs_ago", kind: "scalar", T: 5 },
							{ no: 3, name: "is_very_recent", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(oe, ae) {
						return new o().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new o().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new o().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(o, oe, ae);
					}
				}
				e.$MB = o;
				class f extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.lines = []),
							(this.totalNumberOfLinesInFile = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CmdKImmediateContext";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "lines", kind: "message", T: b, repeated: !0 },
							{
								no: 3,
								name: "total_number_of_lines_in_file",
								kind: "scalar",
								T: 5,
							},
							{ no: 4, name: "cell_number", kind: "scalar", T: 5, opt: !0 },
						]);
					}
					static fromBinary(oe, ae) {
						return new f().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new f().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new f().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(f, oe, ae);
					}
				}
				e.$NB = f;
				class b extends t.Message {
					constructor(oe) {
						super(),
							(this.line = ""),
							(this.lineNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CmdKImmediateContext.Line";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "line", kind: "scalar", T: 9 },
							{ no: 2, name: "line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new b().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new b().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new b().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(b, oe, ae);
					}
				}
				e.$OB = b;
				class s extends t.Message {
					constructor(oe) {
						super(), (this.query = ""), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CmdKQuery";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new s().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new s().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new s().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(s, oe, ae);
					}
				}
				e.$PB = s;
				class l extends t.Message {
					constructor(oe) {
						super(), (this.query = ""), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.TerminalCmdKQuery";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new l().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new l().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new l().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(l, oe, ae);
					}
				}
				e.$QB = l;
				class y extends t.Message {
					constructor(oe) {
						super(),
							(this.contextItemHashes = []),
							(this.suggestedCommand = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.TerminalCmdKQueryHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "message", T: l },
							{ no: 2, name: "query_history", kind: "message", T: y },
							{
								no: 5,
								name: "context_item_hashes",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 6, name: "suggested_command", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new y().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new y().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new y().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(y, oe, ae);
					}
				}
				e.$RB = y;
				class $ extends t.Message {
					constructor(oe) {
						super(),
							(this.contextItemHashes = []),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CmdKQueryHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "message", T: s },
							{ no: 2, name: "immediate_context", kind: "message", T: f },
							{ no: 3, name: "selection", kind: "message", T: p },
							{ no: 4, name: "query_history", kind: "message", T: $ },
							{
								no: 5,
								name: "context_item_hashes",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 6, name: "timestamp", kind: "scalar", T: 3, opt: !0 },
							{
								no: 7,
								name: "timestamp_double",
								kind: "scalar",
								T: 1,
								opt: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new $().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new $().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new $().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals($, oe, ae);
					}
				}
				e.$SB = $;
				class v extends t.Message {
					constructor(oe) {
						super(),
							(this.pastCmdkQueries = []),
							(this.currTimestampDouble = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "past_cmdk_queries",
								kind: "message",
								T: S,
								repeated: !0,
							},
							{ no: 3, name: "curr_timestamp_double", kind: "scalar", T: 1 },
						]);
					}
					static fromBinary(oe, ae) {
						return new v().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new v().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new v().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(v, oe, ae);
					}
				}
				e.$TB = v;
				class S extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.timestampDouble = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "message", T: s },
							{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 5,
								name: "cmdk_was_accepted",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 6, name: "timestamp_double", kind: "scalar", T: 1 },
							{
								no: 7,
								name: "timestamp_for_diff_interleaving",
								kind: "scalar",
								T: 1,
								opt: !0,
							},
							{ no: 8, name: "request_id", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(oe, ae) {
						return new S().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new S().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new S().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(S, oe, ae);
					}
				}
				e.$UB = S;
				class I extends t.Message {
					constructor(oe) {
						super(),
							(this.userMessage = ""),
							(this.assistantResponse = ""),
							(this.activeForCmdK = !1),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.ChatHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "user_message", kind: "scalar", T: 9 },
							{ no: 2, name: "assistant_response", kind: "scalar", T: 9 },
							{ no: 3, name: "chat_history", kind: "message", T: I },
							{ no: 4, name: "active_for_cmd_k", kind: "scalar", T: 8 },
							{ no: 5, name: "timestamp", kind: "scalar", T: 3, opt: !0 },
							{
								no: 6,
								name: "timestamp_double",
								kind: "scalar",
								T: 1,
								opt: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new I().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new I().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new I().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(I, oe, ae);
					}
				}
				e.$VB = I;
				class T extends t.Message {
					constructor(oe) {
						super(),
							(this.history = ""),
							(this.cwdFull = ""),
							(this.cwdRelativeWorkspacePath = ""),
							(this.activeForCmdK = !1),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.TerminalHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "history", kind: "scalar", T: 9 },
							{ no: 5, name: "cwd_full", kind: "scalar", T: 9 },
							{
								no: 6,
								name: "cwd_relative_workspace_path",
								kind: "scalar",
								T: 9,
							},
							{ no: 4, name: "active_for_cmd_k", kind: "scalar", T: 8 },
							{ no: 7, name: "timestamp", kind: "scalar", T: 3, opt: !0 },
							{
								no: 8,
								name: "timestamp_double",
								kind: "scalar",
								T: 1,
								opt: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new T().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new T().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new T().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(T, oe, ae);
					}
				}
				e.$WB = T;
				class P extends t.Message {
					constructor(oe) {
						super(),
							(this.instructions = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CustomInstructions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "instructions", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new P().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new P().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new P().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(P, oe, ae);
					}
				}
				e.$XB = P;
				class k extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.line = ""),
							(this.lineNumber = 0),
							(this.columnNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.GoToDefinitionResult";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "line", kind: "scalar", T: 9 },
							{ no: 3, name: "line_number", kind: "scalar", T: 5 },
							{ no: 4, name: "column_number", kind: "scalar", T: 5 },
							{ no: 5, name: "definition_chunk", kind: "message", T: h },
						]);
					}
					static fromBinary(oe, ae) {
						return new k().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new k().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new k().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(k, oe, ae);
					}
				}
				e.$YB = k;
				class L extends t.Message {
					constructor(oe) {
						super(),
							(this.docName = ""),
							(this.pageUrl = ""),
							(this.documentationChunk = ""),
							(this.score = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.DocumentationChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "doc_name", kind: "scalar", T: 9 },
							{ no: 2, name: "page_url", kind: "scalar", T: 9 },
							{ no: 3, name: "documentation_chunk", kind: "scalar", T: 9 },
							{ no: 4, name: "score", kind: "scalar", T: 2 },
						]);
					}
					static fromBinary(oe, ae) {
						return new L().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new L().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new L().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(L, oe, ae);
					}
				}
				e.$ZB = L;
				class D extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.lints = []),
							(this.contextLines = []),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.Lints";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "lints", kind: "message", T: i.$Us, repeated: !0 },
							{
								no: 3,
								name: "context_lines",
								kind: "message",
								T: M,
								repeated: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new D().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new D().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new D().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(D, oe, ae);
					}
				}
				e.$1B = D;
				class M extends t.Message {
					constructor(oe) {
						super(),
							(this.line = ""),
							(this.lineNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.Lints.Line";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "line", kind: "scalar", T: 9 },
							{ no: 2, name: "line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new M().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new M().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new M().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(M, oe, ae);
					}
				}
				e.$2B = M;
				class N extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.cellOutput = ""),
							(this.cellNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.NotebookCellOutput";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "cell_output", kind: "scalar", T: 9 },
							{ no: 3, name: "cell_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new N().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new N().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new N().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(N, oe, ae);
					}
				}
				e.$3B = N;
				class A extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.LspSubgraphChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "lsp_subgraph_full_context",
								kind: "message",
								T: E.$jB,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new A().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new A().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new A().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(A, oe, ae);
					}
				}
				e.$4B = A;
				class R extends t.Message {
					constructor(oe) {
						super(), (this.note = ""), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CommitNoteChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "note", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new R().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new R().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new R().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(R, oe, ae);
					}
				}
				e.$5B = R;
				class O extends t.Message {
					constructor(oe) {
						super(),
							(this.type = B.UNSPECIFIED),
							(this.uuid = ""),
							(this.intent = { case: void 0 }),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "type", kind: "enum", T: t.proto3.getEnumType(B) },
							{ no: 15, name: "uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "file", kind: "message", T: z, oneof: "intent" },
							{
								no: 3,
								name: "code_selection",
								kind: "message",
								T: x,
								oneof: "intent",
							},
							{ no: 5, name: "lints", kind: "message", T: V, oneof: "intent" },
							{
								no: 6,
								name: "recent_locations",
								kind: "message",
								T: J,
								oneof: "intent",
							},
							{
								no: 8,
								name: "cmd_k_current_file",
								kind: "message",
								T: ie,
								oneof: "intent",
							},
							{
								no: 9,
								name: "cmd_k_query_etc",
								kind: "message",
								T: ne,
								oneof: "intent",
							},
							{
								no: 14,
								name: "terminal_cmd_k_defaults",
								kind: "message",
								T: Z,
								oneof: "intent",
							},
							{
								no: 10,
								name: "cmd_k_definitions",
								kind: "message",
								T: _,
								oneof: "intent",
							},
							{
								no: 11,
								name: "documentation",
								kind: "message",
								T: U,
								oneof: "intent",
							},
							{
								no: 12,
								name: "custom_instructions",
								kind: "message",
								T: ee,
								oneof: "intent",
							},
							{
								no: 13,
								name: "chat_history",
								kind: "message",
								T: te,
								oneof: "intent",
							},
							{
								no: 16,
								name: "terminal_history",
								kind: "message",
								T: se,
								oneof: "intent",
							},
							{
								no: 17,
								name: "visible_tabs",
								kind: "message",
								T: X,
								oneof: "intent",
							},
							{
								no: 18,
								name: "lsp_subgraph",
								kind: "message",
								T: re,
								oneof: "intent",
							},
							{
								no: 19,
								name: "commit_notes",
								kind: "message",
								T: q,
								oneof: "intent",
							},
							{
								no: 20,
								name: "diff_history",
								kind: "message",
								T: Q,
								oneof: "intent",
							},
							{
								no: 21,
								name: "past_cmdk_messages_in_diff_sessions",
								kind: "message",
								T: W,
								oneof: "intent",
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new O().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new O().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new O().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(O, oe, ae);
					}
				}
				e.$6B = O;
				var B;
				(function (le) {
					(le[(le.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(le[(le.USER_ADDED = 1)] = "USER_ADDED"),
						(le[(le.AUTOMATIC = 2)] = "AUTOMATIC");
				})(B || (e.ContextIntent_Type = B = {})),
					t.proto3.util.setEnumType(B, "aiserver.v1.ContextIntent.Type", [
						{ no: 0, name: "TYPE_UNSPECIFIED" },
						{ no: 1, name: "TYPE_USER_ADDED" },
						{ no: 2, name: "TYPE_AUTOMATIC" },
					]);
				class U extends t.Message {
					constructor(oe) {
						super(),
							(this.documentationIdentifier = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.Documentation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "documentation_identifier", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new U().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new U().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new U().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(U, oe, ae);
					}
				}
				e.$7B = U;
				class z extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.mode = F.UNSPECIFIED),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.File";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "mode", kind: "enum", T: t.proto3.getEnumType(F) },
						]);
					}
					static fromBinary(oe, ae) {
						return new z().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new z().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new z().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(z, oe, ae);
					}
				}
				e.$8B = z;
				var F;
				(function (le) {
					(le[(le.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(le[(le.FULL = 1)] = "FULL"),
						(le[(le.OUTLINE = 2)] = "OUTLINE"),
						(le[(le.CHUNKS = 3)] = "CHUNKS");
				})(F || (e.ContextIntent_File_Mode = F = {})),
					t.proto3.util.setEnumType(F, "aiserver.v1.ContextIntent.File.Mode", [
						{ no: 0, name: "MODE_UNSPECIFIED" },
						{ no: 1, name: "MODE_FULL" },
						{ no: 2, name: "MODE_OUTLINE" },
						{ no: 3, name: "MODE_CHUNKS" },
					]);
				class x extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.text = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CodeSelection";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "potentially_out_of_date_range",
								kind: "message",
								T: i.$Fs,
							},
							{ no: 3, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new x().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new x().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new x().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(x, oe, ae);
					}
				}
				e.$9B = x;
				class H extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.Symbol";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "symbol", kind: "message", T: i.$8s },
							{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new H().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new H().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new H().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(H, oe, ae);
					}
				}
				e.$0B = H;
				class q extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CommitNotes";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new q().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new q().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new q().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(q, oe, ae);
					}
				}
				e.$$B = q;
				class V extends t.Message {
					constructor(oe) {
						super(),
							(this.scope = { case: void 0 }),
							(this.filterToSeverities = []),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.Lints";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "cmdk_scope",
								kind: "message",
								T: G,
								oneof: "scope",
							},
							{
								no: 2,
								name: "file_scope",
								kind: "message",
								T: K,
								oneof: "scope",
							},
							{
								no: 3,
								name: "filter_to_severities",
								kind: "enum",
								T: t.proto3.getEnumType(i.LintSeverity),
								repeated: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new V().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new V().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new V().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(V, oe, ae);
					}
				}
				e.$_B = V;
				class G extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.Lints.CmdKScope";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new G().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new G().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new G().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(G, oe, ae);
					}
				}
				e.$aC = G;
				class K extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.Lints.FileScope";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "filter_range",
								kind: "message",
								T: i.$Ms,
								opt: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new K().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new K().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new K().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(K, oe, ae);
					}
				}
				e.$bC = K;
				class J extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.RecentLocations";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 2, name: "timestamp", kind: "scalar", T: 1, opt: !0 },
						]);
					}
					static fromBinary(oe, ae) {
						return new J().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new J().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new J().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(J, oe, ae);
					}
				}
				e.$cC = J;
				class W extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.ContextIntent.PastCmdkConversationsInDiffSessions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new W().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new W().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new W().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(W, oe, ae);
					}
				}
				e.$dC = W;
				class X extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.VisibleTabs";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new X().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new X().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new X().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(X, oe, ae);
					}
				}
				e.$eC = X;
				class Y extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CodebaseChunks";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new Y().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new Y().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new Y().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(Y, oe, ae);
					}
				}
				e.$fC = Y;
				class ie extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CmdKCurrentFile";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new ie().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new ie().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new ie().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(ie, oe, ae);
					}
				}
				e.$gC = ie;
				class ne extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CmdKQueryEtc";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new ne().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new ne().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new ne().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(ne, oe, ae);
					}
				}
				e.$hC = ne;
				class ee extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CustomInstructions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new ee().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new ee().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new ee().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(ee, oe, ae);
					}
				}
				e.$iC = ee;
				class _ extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CmdKDefinitions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new _().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new _().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new _().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(_, oe, ae);
					}
				}
				e.$jC = _;
				class te extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.ChatHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new te().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new te().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new te().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(te, oe, ae);
					}
				}
				e.$kC = te;
				class Q extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.DiffHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new Q().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new Q().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new Q().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(Q, oe, ae);
					}
				}
				e.$lC = Q;
				class Z extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.TerminalCmdKDefaults";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new Z().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new Z().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new Z().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(Z, oe, ae);
					}
				}
				e.$mC = Z;
				class se extends t.Message {
					constructor(oe) {
						super(),
							(this.instanceId = 0),
							(this.activeForCmdK = !1),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.TerminalHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "instance_id", kind: "scalar", T: 5 },
							{ no: 2, name: "active_for_cmd_k", kind: "scalar", T: 8 },
							{
								no: 3,
								name: "use_active_instance_as_fallback",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new se().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new se().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new se().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(se, oe, ae);
					}
				}
				e.$nC = se;
				class re extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.LspSubgraph";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new re().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new re().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new re().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(re, oe, ae);
					}
				}
				e.$oC = re;
			},
		)
