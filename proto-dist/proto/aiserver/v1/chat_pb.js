/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
/* import './utils_pb.js'; */
/* import './tools_pb.js'; */
/* import './docs_pb.js'; */
/* import './repository_pb.js'; */
/* import './composer_pb.js'; */
/* import './shadow_workspace_pb.js'; */
define(
	de[126],
	he([1, 0, 86, 83, 124, 892, 272, 167, 454]),
	function (
		ce /*require*/,
		e /*exports*/,
		t /*protobuf*/,
		i /*utils_pb*/,
		w /*tools_pb*/,
		E /*docs_pb*/,
		C /*repository_pb*/,
		d /*composer_pb*/,
		m /*shadow_workspace_pb*/,
	) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$fB =
				e.$eB =
				e.ComposerFileDiff_Editor =
				e.$dB =
				e.$cB =
				e.UserResponseToSuggestedCodeBlock_UserResponseType =
				e.$bB =
				e.$aB =
				e.$_A =
				e.$$A =
				e.$0A =
				e.$9A =
				e.$8A =
				e.$7A =
				e.$6A =
				e.$5A =
				e.$4A =
				e.$3A =
				e.$2A =
				e.$1A =
				e.$ZA =
				e.$YA =
				e.$XA =
				e.$WA =
				e.$VA =
				e.$UA =
				e.ConversationMessage_CodeChunk_SummarizationStrategy =
				e.ConversationMessage_CodeChunk_Intent =
				e.$TA =
				e.ConversationMessage_MessageType =
				e.$SA =
				e.$RA =
				e.$QA =
				e.$PA =
				e.$OA =
				e.$NA =
				e.$MA =
				e.$LA =
				e.$KA =
				e.$JA =
				e.$IA =
				e.$HA =
				e.$GA =
				e.$FA =
				e.$EA =
				e.$DA =
				e.$CA =
				e.$BA =
				e.$AA =
				e.$zA =
				e.$yA =
				e.$xA =
				e.$wA =
				e.$vA =
				e.$uA =
				e.$tA =
				e.$sA =
				e.$rA =
				e.$qA =
				e.$pA =
				e.$oA =
				e.$nA =
				e.$mA =
				e.$lA =
				e.$kA =
				e.$jA =
				e.$iA =
				e.$hA =
				e.$gA =
				e.$fA =
				e.ChunkType =
					void 0);
		var r;
		(function (Te) {
			(Te[(Te.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				(Te[(Te.CODEBASE = 1)] = "CODEBASE"),
				(Te[(Te.LONG_FILE = 2)] = "LONG_FILE"),
				(Te[(Te.DOCS = 3)] = "DOCS");
		})(r || (e.ChunkType = r = {})),
			t.proto3.util.setEnumType(r, "aiserver.v1.ChunkType", [
				{ no: 0, name: "CHUNK_TYPE_UNSPECIFIED" },
				{ no: 1, name: "CHUNK_TYPE_CODEBASE" },
				{ no: 2, name: "CHUNK_TYPE_LONG_FILE" },
				{ no: 3, name: "CHUNK_TYPE_DOCS" },
			]);
		class u extends t.Message {
			constructor(Ee) {
				super(), (this.editPlan = ""), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StreamParallelApplyRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "code_block", kind: "message", T: i.$Ps },
					{ no: 2, name: "file", kind: "message", T: i.$Rs },
					{ no: 3, name: "edit_plan", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new u().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new u().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new u().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(u, Ee, Ie);
			}
		}
		e.$fA = u;
		class a extends t.Message {
			constructor(Ee) {
				super(), (this.text = ""), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StreamParallelApplyResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "text", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new a().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new a().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new a().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(a, Ee, Ie);
			}
		}
		e.$gA = a;
		class h extends t.Message {
			constructor(Ee) {
				super(),
					(this.request = { case: void 0 }),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StreamUnifiedChatRequestWithTools";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "stream_unified_chat_request",
						kind: "message",
						T: D,
						oneof: "request",
					},
					{
						no: 2,
						name: "client_side_tool_v2_result",
						kind: "message",
						T: w.$Mx,
						oneof: "request",
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new h().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new h().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new h().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(h, Ee, Ie);
			}
		}
		e.$hA = h;
		class c extends t.Message {
			constructor(Ee) {
				super(),
					(this.response = { case: void 0 }),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StreamUnifiedChatResponseWithTools";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "client_side_tool_v2_call",
						kind: "message",
						T: w.$Lx,
						oneof: "response",
					},
					{
						no: 2,
						name: "stream_unified_chat_response",
						kind: "message",
						T: O,
						oneof: "response",
					},
					{
						no: 3,
						name: "conversation_summary",
						kind: "message",
						T: p,
						oneof: "response",
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new c().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new c().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new c().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(c, Ee, Ie);
			}
		}
		e.$iA = c;
		class n extends t.Message {
			constructor(Ee) {
				super(),
					(this.strategy = { case: void 0 }),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationSummaryStrategy";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "plain_text_summary",
						kind: "scalar",
						T: 9,
						oneof: "strategy",
					},
					{
						no: 2,
						name: "arbitrary_summary_plus_tool_result_truncation",
						kind: "message",
						T: g,
						oneof: "strategy",
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new n().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new n().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new n().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(n, Ee, Ie);
			}
		}
		e.$jA = n;
		class g extends t.Message {
			constructor(Ee) {
				super(),
					(this.toolResultTruncationLength = 0),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName =
					"aiserver.v1.ConversationSummaryStrategy.ArbitrarySummaryPlusToolResultTruncation";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "arbitrary_summary", kind: "message", T: p },
					{
						no: 2,
						name: "tool_result_truncation_length",
						kind: "scalar",
						T: 5,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new g().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new g().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new g().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(g, Ee, Ie);
			}
		}
		e.$kA = g;
		class p extends t.Message {
			constructor(Ee) {
				super(),
					(this.summary = ""),
					(this.truncationLastBubbleIdInclusive = ""),
					(this.clientShouldStartSendingFromInclusiveBubbleId = ""),
					(this.previousConversationSummaryBubbleId = ""),
					(this.includesToolResults = !1),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationSummary";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "summary", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "truncation_last_bubble_id_inclusive",
						kind: "scalar",
						T: 9,
					},
					{
						no: 3,
						name: "client_should_start_sending_from_inclusive_bubble_id",
						kind: "scalar",
						T: 9,
					},
					{
						no: 4,
						name: "previous_conversation_summary_bubble_id",
						kind: "scalar",
						T: 9,
					},
					{ no: 5, name: "includes_tool_results", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new p().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new p().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new p().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(p, Ee, Ie);
			}
		}
		e.$lA = p;
		class o extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.contents = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ContextToRank";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{ no: 2, name: "contents", kind: "scalar", T: 9 },
					{ no: 3, name: "line_range", kind: "message", T: i.$Ms, opt: !0 },
					{ no: 4, name: "code_block", kind: "message", T: i.$Ps, opt: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new o().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new o().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new o().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(o, Ee, Ie);
			}
		}
		e.$mA = o;
		class f extends t.Message {
			constructor(Ee) {
				super(), (this.score = 0), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RankedContext";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "context", kind: "message", T: o },
					{ no: 2, name: "score", kind: "scalar", T: 2 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new f().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new f().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new f().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(f, Ee, Ie);
			}
		}
		e.$nA = f;
		class b extends t.Message {
			constructor(Ee) {
				super(), (this.chunks = []), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.DocumentationCitation";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "chunks",
						kind: "message",
						T: E.$Xz,
						repeated: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new b().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new b().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new b().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(b, Ee, Ie);
			}
		}
		e.$oA = b;
		class s extends t.Message {
			constructor(Ee) {
				super(), (this.references = []), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.WebCitation";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "references",
						kind: "message",
						T: l,
						repeated: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new s().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new s().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new s().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(s, Ee, Ie);
			}
		}
		e.$pA = s;
		class l extends t.Message {
			constructor(Ee) {
				super(),
					(this.title = ""),
					(this.url = ""),
					(this.chunk = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.WebReference";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 2, name: "title", kind: "scalar", T: 9 },
					{ no: 1, name: "url", kind: "scalar", T: 9 },
					{ no: 3, name: "chunk", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new l().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new l().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new l().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(l, Ee, Ie);
			}
		}
		e.$qA = l;
		class y extends t.Message {
			constructor(Ee) {
				super(),
					(this.title = ""),
					(this.url = ""),
					(this.chunk = ""),
					(this.name = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.DocsReference";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "title", kind: "scalar", T: 9 },
					{ no: 2, name: "url", kind: "scalar", T: 9 },
					{ no: 3, name: "chunk", kind: "scalar", T: 9 },
					{ no: 4, name: "name", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new y().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new y().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new y().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(y, Ee, Ie);
			}
		}
		e.$rA = y;
		class $ extends t.Message {
			constructor(Ee) {
				super(), (this.message = ""), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StatusUpdate";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "message", kind: "scalar", T: 9 },
					{ no: 2, name: "metadata", kind: "scalar", T: 9, opt: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new $().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new $().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new $().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals($, Ee, Ie);
			}
		}
		e.$sA = $;
		class v extends t.Message {
			constructor(Ee) {
				super(), (this.updates = []), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StatusUpdates";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "updates", kind: "message", T: $, repeated: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new v().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new v().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new v().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(v, Ee, Ie);
			}
		}
		e.$tA = v;
		class S extends t.Message {
			constructor(Ee) {
				super(),
					(this.query = ""),
					(this.documents = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RerankDocumentsRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "query", kind: "scalar", T: 9 },
					{ no: 2, name: "documents", kind: "message", T, repeated: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new S().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new S().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new S().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(S, Ee, Ie);
			}
		}
		e.$uA = S;
		class I extends t.Message {
			constructor(Ee) {
				super(), (this.documents = []), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RerankDocumentsResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "documents", kind: "message", T: P, repeated: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new I().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new I().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new I().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(I, Ee, Ie);
			}
		}
		e.$vA = I;
		class T extends t.Message {
			constructor(Ee) {
				super(),
					(this.content = ""),
					(this.id = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.Document";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "content", kind: "scalar", T: 9 },
					{ no: 2, name: "id", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new T().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new T().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new T().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(T, Ee, Ie);
			}
		}
		e.$wA = T;
		class P extends t.Message {
			constructor(Ee) {
				super(),
					(this.documentId = ""),
					(this.score = 0),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.DocumentIdsWithScores";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "document_id", kind: "scalar", T: 9 },
					{ no: 2, name: "score", kind: "scalar", T: 2 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new P().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new P().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new P().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(P, Ee, Ie);
			}
		}
		e.$xA = P;
		class k extends t.Message {
			constructor(Ee) {
				super(),
					(this.fileName = ""),
					(this.diffHistory = []),
					(this.diffHistoryTimestamps = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ComposerFileDiffHistory";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file_name", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "diff_history",
						kind: "scalar",
						T: 9,
						repeated: !0,
					},
					{
						no: 3,
						name: "diff_history_timestamps",
						kind: "scalar",
						T: 1,
						repeated: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new k().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new k().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new k().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(k, Ee, Ie);
			}
		}
		e.$yA = k;
		class L extends t.Message {
			constructor(Ee) {
				super(), (this.workspaceUris = []), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.EnvironmentInfo";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "exthost_platform",
						kind: "scalar",
						T: 9,
						opt: !0,
					},
					{ no: 2, name: "exthost_arch", kind: "scalar", T: 9, opt: !0 },
					{ no: 3, name: "exthost_release", kind: "scalar", T: 9, opt: !0 },
					{ no: 4, name: "exthost_shell", kind: "scalar", T: 9, opt: !0 },
					{ no: 5, name: "local_timestamp", kind: "scalar", T: 9, opt: !0 },
					{
						no: 6,
						name: "workspace_uris",
						kind: "scalar",
						T: 9,
						repeated: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new L().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new L().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new L().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(L, Ee, Ie);
			}
		}
		e.$zA = L;
		class D extends t.Message {
			constructor(Ee) {
				super(),
					(this.conversation = []),
					(this.fullConversationHeadersOnly = []),
					(this.documentationIdentifiers = []),
					(this.externalLinks = []),
					(this.diffsForCompressingFiles = []),
					(this.multiFileLinterErrors = []),
					(this.fileDiffHistories = []),
					(this.quotes = []),
					(this.additionalRankedContext = []),
					(this.isChat = !1),
					(this.conversationId = ""),
					(this.repositoryInfoShouldQueryStaging = !1),
					(this.isAgentic = !1),
					(this.supportedTools = []),
					(this.enableYoloMode = !1),
					(this.yoloPrompt = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StreamUnifiedChatRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "conversation",
						kind: "message",
						T: X,
						repeated: !0,
					},
					{
						no: 30,
						name: "full_conversation_headers_only",
						kind: "message",
						T: q,
						repeated: !0,
					},
					{
						no: 2,
						name: "allow_long_file_scan",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
					{ no: 3, name: "explicit_context", kind: "message", T: i.$6s },
					{
						no: 4,
						name: "can_handle_filenames_after_language_ids",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
					{ no: 5, name: "model_details", kind: "message", T: i.$Zs },
					{ no: 6, name: "linter_errors", kind: "message", T: i.$4s },
					{
						no: 7,
						name: "documentation_identifiers",
						kind: "scalar",
						T: 9,
						repeated: !0,
					},
					{ no: 8, name: "use_web", kind: "scalar", T: 9, opt: !0 },
					{
						no: 9,
						name: "external_links",
						kind: "message",
						T: i.$gt,
						repeated: !0,
					},
					{
						no: 10,
						name: "project_context",
						kind: "message",
						T: X,
						opt: !0,
					},
					{
						no: 11,
						name: "diffs_for_compressing_files",
						kind: "message",
						T: M,
						repeated: !0,
					},
					{ no: 12, name: "compress_edits", kind: "scalar", T: 8, opt: !0 },
					{ no: 13, name: "should_cache", kind: "scalar", T: 8, opt: !0 },
					{
						no: 14,
						name: "multi_file_linter_errors",
						kind: "message",
						T: i.$4s,
						repeated: !0,
					},
					{ no: 15, name: "current_file", kind: "message", T: i.$Ws },
					{ no: 16, name: "recent_edits", kind: "message", T: N, opt: !0 },
					{
						no: 17,
						name: "use_reference_composer_diff_prompt",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
					{
						no: 18,
						name: "file_diff_histories",
						kind: "message",
						T: k,
						repeated: !0,
					},
					{
						no: 19,
						name: "use_new_compression_scheme",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
					{
						no: 21,
						name: "quotes",
						kind: "message",
						T: i.$et,
						repeated: !0,
					},
					{
						no: 20,
						name: "additional_ranked_context",
						kind: "message",
						T: f,
						repeated: !0,
					},
					{ no: 22, name: "is_chat", kind: "scalar", T: 8 },
					{ no: 23, name: "conversation_id", kind: "scalar", T: 9 },
					{ no: 24, name: "repository_info", kind: "message", T: C.$mv },
					{
						no: 25,
						name: "repository_info_should_query_staging",
						kind: "scalar",
						T: 8,
					},
					{ no: 26, name: "environment_info", kind: "message", T: L },
					{ no: 27, name: "is_agentic", kind: "scalar", T: 8 },
					{
						no: 28,
						name: "conversation_summary",
						kind: "message",
						T: p,
						opt: !0,
					},
					{
						no: 29,
						name: "supported_tools",
						kind: "enum",
						T: t.proto3.getEnumType(w.ClientSideToolV2),
						repeated: !0,
					},
					{ no: 31, name: "enable_yolo_mode", kind: "scalar", T: 8 },
					{ no: 32, name: "yolo_prompt", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new D().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new D().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new D().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(D, Ee, Ie);
			}
		}
		e.$AA = D;
		class M extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.redRanges = []),
					(this.redRangesReversed = []),
					(this.startHash = ""),
					(this.endHash = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StreamUnifiedChatRequest.RedDiff";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "red_ranges",
						kind: "message",
						T: i.$As,
						repeated: !0,
					},
					{
						no: 3,
						name: "red_ranges_reversed",
						kind: "message",
						T: i.$As,
						repeated: !0,
					},
					{ no: 4, name: "start_hash", kind: "scalar", T: 9 },
					{ no: 5, name: "end_hash", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new M().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new M().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new M().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(M, Ee, Ie);
			}
		}
		e.$BA = M;
		class N extends t.Message {
			constructor(Ee) {
				super(),
					(this.codeBlockInfo = []),
					(this.finalFileValues = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StreamUnifiedChatRequest.RecentEdits";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "code_block_info",
						kind: "message",
						T: A,
						repeated: !0,
					},
					{
						no: 2,
						name: "final_file_values",
						kind: "message",
						T: R,
						repeated: !0,
					},
					{
						no: 3,
						name: "edits_belong_to_composer_generation_uuid",
						kind: "scalar",
						T: 9,
						opt: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new N().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new N().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new N().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(N, Ee, Ie);
			}
		}
		e.$CA = N;
		class A extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName =
					"aiserver.v1.StreamUnifiedChatRequest.RecentEdits.CodeBlockInfo";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{ no: 2, name: "content_before", kind: "scalar", T: 9, opt: !0 },
					{ no: 3, name: "content_after", kind: "scalar", T: 9, opt: !0 },
					{ no: 4, name: "generation_uuid", kind: "scalar", T: 9, opt: !0 },
					{ no: 5, name: "version", kind: "scalar", T: 5, opt: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new A().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new A().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new A().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(A, Ee, Ie);
			}
		}
		e.$DA = A;
		class R extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.content = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName =
					"aiserver.v1.StreamUnifiedChatRequest.RecentEdits.FileInfo";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{ no: 2, name: "content", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new R().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new R().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new R().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(R, Ee, Ie);
			}
		}
		e.$EA = R;
		class O extends t.Message {
			constructor(Ee) {
				super(), (this.text = ""), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StreamUnifiedChatResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "text", kind: "scalar", T: 9 },
					{
						no: 22,
						name: "server_bubble_id",
						kind: "scalar",
						T: 9,
						opt: !0,
					},
					{
						no: 2,
						name: "debugging_only_chat_prompt",
						kind: "scalar",
						T: 9,
						opt: !0,
					},
					{
						no: 3,
						name: "debugging_only_token_count",
						kind: "scalar",
						T: 5,
						opt: !0,
					},
					{ no: 4, name: "document_citation", kind: "message", T: b },
					{ no: 5, name: "filled_prompt", kind: "scalar", T: 9, opt: !0 },
					{ no: 6, name: "is_big_file", kind: "scalar", T: 8, opt: !0 },
					{
						no: 7,
						name: "intermediate_text",
						kind: "scalar",
						T: 9,
						opt: !0,
					},
					{
						no: 10,
						name: "is_using_slow_request",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
					{ no: 8, name: "chunk_identity", kind: "message", T: B, opt: !0 },
					{ no: 9, name: "docs_reference", kind: "message", T: y, opt: !0 },
					{ no: 11, name: "web_citation", kind: "message", T: s, opt: !0 },
					{
						no: 12,
						name: "status_updates",
						kind: "message",
						T: v,
						opt: !0,
					},
					{ no: 13, name: "tool_call", kind: "message", T: w.$Ox, opt: !0 },
					{
						no: 14,
						name: "should_break_ai_message",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
					{
						no: 15,
						name: "partial_tool_call",
						kind: "message",
						T: w.$Nx,
						opt: !0,
					},
					{
						no: 16,
						name: "final_tool_result",
						kind: "message",
						T: U,
						opt: !0,
					},
					{ no: 17, name: "symbol_link", kind: "message", T: F, opt: !0 },
					{ no: 19, name: "file_link", kind: "message", T: x, opt: !0 },
					{
						no: 18,
						name: "conversation_summary",
						kind: "message",
						T: p,
						opt: !0,
					},
					{
						no: 20,
						name: "service_status_update",
						kind: "message",
						T: z,
						opt: !0,
					},
					{
						no: 21,
						name: "viewable_git_context",
						kind: "message",
						T: W,
						opt: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new O().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new O().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new O().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(O, Ee, Ie);
			}
		}
		e.$FA = O;
		class B extends t.Message {
			constructor(Ee) {
				super(),
					(this.fileName = ""),
					(this.startLine = 0),
					(this.endLine = 0),
					(this.text = ""),
					(this.chunkType = r.UNSPECIFIED),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StreamUnifiedChatResponse.ChunkIdentity";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file_name", kind: "scalar", T: 9 },
					{ no: 2, name: "start_line", kind: "scalar", T: 5 },
					{ no: 3, name: "end_line", kind: "scalar", T: 5 },
					{ no: 4, name: "text", kind: "scalar", T: 9 },
					{
						no: 5,
						name: "chunk_type",
						kind: "enum",
						T: t.proto3.getEnumType(r),
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new B().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new B().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new B().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(B, Ee, Ie);
			}
		}
		e.$GA = B;
		class U extends t.Message {
			constructor(Ee) {
				super(), (this.toolCallId = ""), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StreamUnifiedChatResponse.FinalToolResult";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 },
					{ no: 2, name: "result", kind: "message", T: w.$Mx },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new U().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new U().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new U().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(U, Ee, Ie);
			}
		}
		e.$HA = U;
		class z extends t.Message {
			constructor(Ee) {
				super(),
					(this.message = ""),
					(this.codicon = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ServiceStatusUpdate";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "message", kind: "scalar", T: 9 },
					{ no: 2, name: "codicon", kind: "scalar", T: 9 },
					{
						no: 3,
						name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new z().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new z().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new z().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(z, Ee, Ie);
			}
		}
		e.$IA = z;
		class F extends t.Message {
			constructor(Ee) {
				super(),
					(this.symbolName = ""),
					(this.symbolSearchString = ""),
					(this.relativeWorkspacePath = ""),
					(this.roughLineNumber = 0),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SymbolLink";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "symbol_name", kind: "scalar", T: 9 },
					{ no: 2, name: "symbol_search_string", kind: "scalar", T: 9 },
					{ no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{ no: 4, name: "rough_line_number", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new F().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new F().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new F().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(F, Ee, Ie);
			}
		}
		e.$JA = F;
		class x extends t.Message {
			constructor(Ee) {
				super(),
					(this.displayName = ""),
					(this.relativeWorkspacePath = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.FileLink";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "display_name", kind: "scalar", T: 9 },
					{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new x().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new x().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new x().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(x, Ee, Ie);
			}
		}
		e.$KA = x;
		class H extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.redRanges = []),
					(this.redRangesReversed = []),
					(this.startHash = ""),
					(this.endHash = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RedDiff";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "red_ranges",
						kind: "message",
						T: i.$As,
						repeated: !0,
					},
					{
						no: 3,
						name: "red_ranges_reversed",
						kind: "message",
						T: i.$As,
						repeated: !0,
					},
					{ no: 4, name: "start_hash", kind: "scalar", T: 9 },
					{ no: 5, name: "end_hash", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new H().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new H().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new H().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(H, Ee, Ie);
			}
		}
		e.$LA = H;
		class q extends t.Message {
			constructor(Ee) {
				super(),
					(this.bubbleId = ""),
					(this.type = Y.UNSPECIFIED),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessageHeader";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "bubble_id", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "server_bubble_id",
						kind: "scalar",
						T: 9,
						opt: !0,
					},
					{ no: 3, name: "type", kind: "enum", T: t.proto3.getEnumType(Y) },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new q().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new q().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new q().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(q, Ee, Ie);
			}
		}
		e.$MA = q;
		class V extends t.Message {
			constructor(Ee) {
				super(),
					(this.fileDetails = ""),
					(this.fileName = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.DiffFile";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file_details", kind: "scalar", T: 9 },
					{ no: 2, name: "file_name", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new V().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new V().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new V().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(V, Ee, Ie);
			}
		}
		e.$NA = V;
		class G extends t.Message {
			constructor(Ee) {
				super(),
					(this.description = ""),
					(this.message = ""),
					(this.files = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ViewableCommitProps";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "description", kind: "scalar", T: 9 },
					{ no: 2, name: "message", kind: "scalar", T: 9 },
					{ no: 3, name: "files", kind: "message", T: V, repeated: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new G().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new G().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new G().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(G, Ee, Ie);
			}
		}
		e.$OA = G;
		class K extends t.Message {
			constructor(Ee) {
				super(),
					(this.title = ""),
					(this.body = ""),
					(this.files = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ViewablePRProps";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "title", kind: "scalar", T: 9 },
					{ no: 2, name: "body", kind: "scalar", T: 9 },
					{ no: 3, name: "files", kind: "message", T: V, repeated: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new K().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new K().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new K().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(K, Ee, Ie);
			}
		}
		e.$PA = K;
		class J extends t.Message {
			constructor(Ee) {
				super(),
					(this.files = []),
					(this.diffPreface = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ViewableDiffProps";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "files", kind: "message", T: V, repeated: !0 },
					{ no: 2, name: "diff_preface", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new J().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new J().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new J().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(J, Ee, Ie);
			}
		}
		e.$QA = J;
		class W extends t.Message {
			constructor(Ee) {
				super(), (this.diffData = []), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ViewableGitContext";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "commit_data", kind: "message", T: G, opt: !0 },
					{
						no: 2,
						name: "pull_request_data",
						kind: "message",
						T: K,
						opt: !0,
					},
					{ no: 3, name: "diff_data", kind: "message", T: J, repeated: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new W().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new W().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new W().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(W, Ee, Ie);
			}
		}
		e.$RA = W;
		class X extends t.Message {
			constructor(Ee) {
				super(),
					(this.text = ""),
					(this.type = Y.UNSPECIFIED),
					(this.attachedCodeChunks = []),
					(this.codebaseContextChunks = []),
					(this.commits = []),
					(this.pullRequests = []),
					(this.gitDiffs = []),
					(this.assistantSuggestedDiffs = []),
					(this.interpreterResults = []),
					(this.images = []),
					(this.attachedFolders = []),
					(this.approximateLintErrors = []),
					(this.bubbleId = ""),
					(this.attachedFoldersNew = []),
					(this.lints = []),
					(this.userResponsesToSuggestedCodeBlocks = []),
					(this.relevantFiles = []),
					(this.toolResults = []),
					(this.notepads = []),
					(this.capabilities = []),
					(this.editTrailContexts = []),
					(this.suggestedCodeBlocks = []),
					(this.diffsForCompressingFiles = []),
					(this.multiFileLinterErrors = []),
					(this.diffHistories = []),
					(this.recentlyViewedFiles = []),
					(this.recentLocationsHistory = []),
					(this.isAgentic = !1),
					(this.fileDiffTrajectories = []),
					(this.existedSubsequentTerminalCommand = !1),
					(this.existedPreviousTerminalCommand = !1),
					(this.docsReferences = []),
					(this.webReferences = []),
					(this.attachedFoldersListDirResults = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessage";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "text", kind: "scalar", T: 9 },
					{ no: 2, name: "type", kind: "enum", T: t.proto3.getEnumType(Y) },
					{
						no: 3,
						name: "attached_code_chunks",
						kind: "message",
						T: ie,
						repeated: !0,
					},
					{
						no: 4,
						name: "codebase_context_chunks",
						kind: "message",
						T: i.$Ps,
						repeated: !0,
					},
					{ no: 5, name: "commits", kind: "message", T: ge, repeated: !0 },
					{
						no: 6,
						name: "pull_requests",
						kind: "message",
						T: be,
						repeated: !0,
					},
					{
						no: 7,
						name: "git_diffs",
						kind: "message",
						T: i.$Cs,
						repeated: !0,
					},
					{
						no: 8,
						name: "assistant_suggested_diffs",
						kind: "message",
						T: me,
						repeated: !0,
					},
					{
						no: 9,
						name: "interpreter_results",
						kind: "message",
						T: fe,
						repeated: !0,
					},
					{
						no: 10,
						name: "images",
						kind: "message",
						T: i.$ct,
						repeated: !0,
					},
					{
						no: 11,
						name: "attached_folders",
						kind: "scalar",
						T: 9,
						repeated: !0,
					},
					{
						no: 12,
						name: "approximate_lint_errors",
						kind: "message",
						T: le,
						repeated: !0,
					},
					{ no: 13, name: "bubble_id", kind: "scalar", T: 9 },
					{
						no: 32,
						name: "server_bubble_id",
						kind: "scalar",
						T: 9,
						opt: !0,
					},
					{
						no: 14,
						name: "attached_folders_new",
						kind: "message",
						T: ye,
						repeated: !0,
					},
					{ no: 15, name: "lints", kind: "message", T: oe, repeated: !0 },
					{
						no: 16,
						name: "user_responses_to_suggested_code_blocks",
						kind: "message",
						T: Le,
						repeated: !0,
					},
					{
						no: 17,
						name: "relevant_files",
						kind: "scalar",
						T: 9,
						repeated: !0,
					},
					{
						no: 18,
						name: "tool_results",
						kind: "message",
						T: _,
						repeated: !0,
					},
					{ no: 19, name: "notepads", kind: "message", T: Z, repeated: !0 },
					{
						no: 20,
						name: "is_capability_iteration",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
					{
						no: 21,
						name: "capabilities",
						kind: "message",
						T: d.$1z,
						repeated: !0,
					},
					{
						no: 22,
						name: "edit_trail_contexts",
						kind: "message",
						T: re,
						repeated: !0,
					},
					{
						no: 23,
						name: "suggested_code_blocks",
						kind: "message",
						T: Ce,
						repeated: !0,
					},
					{
						no: 24,
						name: "diffs_for_compressing_files",
						kind: "message",
						T: H,
						repeated: !0,
					},
					{
						no: 25,
						name: "multi_file_linter_errors",
						kind: "message",
						T: i.$5s,
						repeated: !0,
					},
					{
						no: 26,
						name: "diff_histories",
						kind: "message",
						T: Je,
						repeated: !0,
					},
					{
						no: 27,
						name: "recently_viewed_files",
						kind: "message",
						T: ie,
						repeated: !0,
					},
					{
						no: 28,
						name: "recent_locations_history",
						kind: "message",
						T: ae,
						repeated: !0,
					},
					{ no: 29, name: "is_agentic", kind: "scalar", T: 8 },
					{
						no: 30,
						name: "file_diff_trajectories",
						kind: "message",
						T: k,
						repeated: !0,
					},
					{
						no: 31,
						name: "conversation_summary",
						kind: "message",
						T: p,
						opt: !0,
					},
					{
						no: 33,
						name: "existed_subsequent_terminal_command",
						kind: "scalar",
						T: 8,
					},
					{
						no: 34,
						name: "existed_previous_terminal_command",
						kind: "scalar",
						T: 8,
					},
					{
						no: 35,
						name: "docs_references",
						kind: "message",
						T: y,
						repeated: !0,
					},
					{
						no: 36,
						name: "web_references",
						kind: "message",
						T: l,
						repeated: !0,
					},
					{ no: 37, name: "git_context", kind: "message", T: W, opt: !0 },
					{
						no: 38,
						name: "attached_folders_list_dir_results",
						kind: "message",
						T: w.$1x,
						repeated: !0,
					},
					{
						no: 39,
						name: "cached_conversation_summary",
						kind: "message",
						T: p,
						opt: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new X().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new X().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new X().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(X, Ee, Ie);
			}
		}
		e.$SA = X;
		var Y;
		(function (Te) {
			(Te[(Te.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				(Te[(Te.HUMAN = 1)] = "HUMAN"),
				(Te[(Te.AI = 2)] = "AI");
		})(Y || (e.ConversationMessage_MessageType = Y = {})),
			t.proto3.util.setEnumType(
				Y,
				"aiserver.v1.ConversationMessage.MessageType",
				[
					{ no: 0, name: "MESSAGE_TYPE_UNSPECIFIED" },
					{ no: 1, name: "MESSAGE_TYPE_HUMAN" },
					{ no: 2, name: "MESSAGE_TYPE_AI" },
				],
			);
		class ie extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.startLineNumber = 0),
					(this.lines = []),
					(this.languageIdentifier = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessage.CodeChunk";
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
						T: t.proto3.getEnumType(ee),
						opt: !0,
					},
					{ no: 5, name: "language_identifier", kind: "scalar", T: 9 },
					{
						no: 6,
						name: "intent",
						kind: "enum",
						T: t.proto3.getEnumType(ne),
						opt: !0,
					},
					{
						no: 7,
						name: "is_final_version",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
					{
						no: 8,
						name: "is_first_version",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
					{
						no: 9,
						name: "contents_are_missing",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new ie().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new ie().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new ie().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(ie, Ee, Ie);
			}
		}
		e.$TA = ie;
		var ne;
		(function (Te) {
			(Te[(Te.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				(Te[(Te.COMPOSER_FILE = 1)] = "COMPOSER_FILE"),
				(Te[(Te.COMPRESSED_COMPOSER_FILE = 2)] = "COMPRESSED_COMPOSER_FILE"),
				(Te[(Te.RECENTLY_VIEWED_FILE = 3)] = "RECENTLY_VIEWED_FILE"),
				(Te[(Te.OUTLINE = 4)] = "OUTLINE"),
				(Te[(Te.MENTIONED_FILE = 5)] = "MENTIONED_FILE"),
				(Te[(Te.CODE_SELECTION = 6)] = "CODE_SELECTION");
		})(ne || (e.ConversationMessage_CodeChunk_Intent = ne = {})),
			t.proto3.util.setEnumType(
				ne,
				"aiserver.v1.ConversationMessage.CodeChunk.Intent",
				[
					{ no: 0, name: "INTENT_UNSPECIFIED" },
					{ no: 1, name: "INTENT_COMPOSER_FILE" },
					{ no: 2, name: "INTENT_COMPRESSED_COMPOSER_FILE" },
					{ no: 3, name: "INTENT_RECENTLY_VIEWED_FILE" },
					{ no: 4, name: "INTENT_OUTLINE" },
					{ no: 5, name: "INTENT_MENTIONED_FILE" },
					{ no: 6, name: "INTENT_CODE_SELECTION" },
				],
			);
		var ee;
		(function (Te) {
			(Te[(Te.NONE_UNSPECIFIED = 0)] = "NONE_UNSPECIFIED"),
				(Te[(Te.SUMMARIZED = 1)] = "SUMMARIZED"),
				(Te[(Te.EMBEDDED = 2)] = "EMBEDDED");
		})(ee || (e.ConversationMessage_CodeChunk_SummarizationStrategy = ee = {})),
			t.proto3.util.setEnumType(
				ee,
				"aiserver.v1.ConversationMessage.CodeChunk.SummarizationStrategy",
				[
					{ no: 0, name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED" },
					{ no: 1, name: "SUMMARIZATION_STRATEGY_SUMMARIZED" },
					{ no: 2, name: "SUMMARIZATION_STRATEGY_EMBEDDED" },
				],
			);
		class _ extends t.Message {
			constructor(Ee) {
				super(),
					(this.toolCallId = ""),
					(this.toolName = ""),
					(this.toolIndex = 0),
					(this.args = ""),
					(this.rawArgs = ""),
					(this.attachedCodeChunks = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessage.ToolResult";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 },
					{ no: 2, name: "tool_name", kind: "scalar", T: 9 },
					{ no: 3, name: "tool_index", kind: "scalar", T: 13 },
					{ no: 4, name: "args", kind: "scalar", T: 9 },
					{ no: 5, name: "raw_args", kind: "scalar", T: 9 },
					{
						no: 6,
						name: "attached_code_chunks",
						kind: "message",
						T: ie,
						repeated: !0,
					},
					{ no: 7, name: "content", kind: "scalar", T: 9, opt: !0 },
					{ no: 8, name: "result", kind: "message", T: w.$Mx },
					{ no: 9, name: "error", kind: "message", T: w.$Kx, opt: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new _().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new _().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new _().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(_, Ee, Ie);
			}
		}
		e.$UA = _;
		class te extends t.Message {
			constructor(Ee) {
				super(),
					(this.ranges = []),
					(this.content = ""),
					(this.relativeWorkspacePath = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessage.MultiRangeCodeChunk";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "ranges", kind: "message", T: Q, repeated: !0 },
					{ no: 2, name: "content", kind: "scalar", T: 9 },
					{ no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new te().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new te().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new te().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(te, Ee, Ie);
			}
		}
		e.$VA = te;
		class Q extends t.Message {
			constructor(Ee) {
				super(), (this.priority = 0), t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName =
					"aiserver.v1.ConversationMessage.MultiRangeCodeChunk.RangeWithPriority";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "range", kind: "message", T: i.$As },
					{ no: 2, name: "priority", kind: "scalar", T: 1 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new Q().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new Q().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new Q().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(Q, Ee, Ie);
			}
		}
		e.$WA = Q;
		class Z extends t.Message {
			constructor(Ee) {
				super(),
					(this.name = ""),
					(this.text = ""),
					(this.attachedCodeChunks = []),
					(this.attachedFolders = []),
					(this.commits = []),
					(this.pullRequests = []),
					(this.gitDiffs = []),
					(this.images = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessage.NotepadContext";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "name", kind: "scalar", T: 9 },
					{ no: 2, name: "text", kind: "scalar", T: 9 },
					{
						no: 3,
						name: "attached_code_chunks",
						kind: "message",
						T: ie,
						repeated: !0,
					},
					{
						no: 4,
						name: "attached_folders",
						kind: "scalar",
						T: 9,
						repeated: !0,
					},
					{ no: 5, name: "commits", kind: "message", T: ge, repeated: !0 },
					{
						no: 6,
						name: "pull_requests",
						kind: "message",
						T: be,
						repeated: !0,
					},
					{
						no: 7,
						name: "git_diffs",
						kind: "message",
						T: i.$Cs,
						repeated: !0,
					},
					{
						no: 8,
						name: "images",
						kind: "message",
						T: i.$ct,
						repeated: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new Z().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new Z().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new Z().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(Z, Ee, Ie);
			}
		}
		e.$XA = Z;
		class se extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.contextLines = ""),
					(this.text = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessage.EditLocation";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{ no: 3, name: "range", kind: "message", T: i.$As },
					{ no: 4, name: "initial_range", kind: "message", T: i.$As },
					{ no: 5, name: "context_lines", kind: "scalar", T: 9 },
					{ no: 6, name: "text", kind: "scalar", T: 9 },
					{ no: 7, name: "text_range", kind: "message", T: i.$As },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new se().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new se().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new se().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(se, Ee, Ie);
			}
		}
		e.$YA = se;
		class re extends t.Message {
			constructor(Ee) {
				super(),
					(this.uniqueId = ""),
					(this.editTrailSorted = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessage.EditTrailContext";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "unique_id", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "edit_trail_sorted",
						kind: "message",
						T: se,
						repeated: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new re().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new re().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new re().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(re, Ee, Ie);
			}
		}
		e.$ZA = re;
		class le extends t.Message {
			constructor(Ee) {
				super(),
					(this.message = ""),
					(this.value = ""),
					(this.startLine = 0),
					(this.endLine = 0),
					(this.startColumn = 0),
					(this.endColumn = 0),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessage.ApproximateLintError";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "message", kind: "scalar", T: 9 },
					{ no: 2, name: "value", kind: "scalar", T: 9 },
					{ no: 3, name: "start_line", kind: "scalar", T: 5 },
					{ no: 4, name: "end_line", kind: "scalar", T: 5 },
					{ no: 5, name: "start_column", kind: "scalar", T: 5 },
					{ no: 6, name: "end_column", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new le().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new le().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new le().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(le, Ee, Ie);
			}
		}
		e.$1A = le;
		class oe extends t.Message {
			constructor(Ee) {
				super(),
					(this.chatCodeblockModelValue = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessage.Lints";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "lints", kind: "message", T: m.$xx },
					{
						no: 2,
						name: "chat_codeblock_model_value",
						kind: "scalar",
						T: 9,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new oe().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new oe().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new oe().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(oe, Ee, Ie);
			}
		}
		e.$2A = oe;
		class ae extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.lineNumber = 0),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ConversationMessage.RecentLocation";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{ no: 2, name: "line_number", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new ae().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new ae().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new ae().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(ae, Ee, Ie);
			}
		}
		e.$3A = ae;
		class pe extends t.Message {
			constructor(Ee) {
				super(),
					(this.query = ""),
					(this.files = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SearchInfo";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "query", kind: "scalar", T: 9 },
					{ no: 2, name: "files", kind: "message", T: $e, repeated: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new pe().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new pe().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new pe().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(pe, Ee, Ie);
			}
		}
		e.$4A = pe;
		class $e extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativePath = ""),
					(this.content = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SearchFileInfo";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_path", kind: "scalar", T: 9 },
					{ no: 2, name: "content", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new $e().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new $e().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new $e().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals($e, Ee, Ie);
			}
		}
		e.$5A = $e;
		class ye extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativePath = ""),
					(this.files = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.FolderInfo";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_path", kind: "scalar", T: 9 },
					{ no: 2, name: "files", kind: "message", T: ue, repeated: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new ye().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new ye().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new ye().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(ye, Ee, Ie);
			}
		}
		e.$6A = ye;
		class ue extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativePath = ""),
					(this.content = ""),
					(this.truncated = !1),
					(this.score = 0),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.FolderFileInfo";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_path", kind: "scalar", T: 9 },
					{ no: 2, name: "content", kind: "scalar", T: 9 },
					{ no: 3, name: "truncated", kind: "scalar", T: 8 },
					{ no: 4, name: "score", kind: "scalar", T: 2 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new ue().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new ue().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new ue().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(ue, Ee, Ie);
			}
		}
		e.$7A = ue;
		class fe extends t.Message {
			constructor(Ee) {
				super(),
					(this.output = ""),
					(this.success = !1),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.InterpreterResult";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "output", kind: "scalar", T: 9 },
					{ no: 2, name: "success", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new fe().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new fe().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new fe().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(fe, Ee, Ie);
			}
		}
		e.$8A = fe;
		class me extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.chunks = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SimpleFileDiff";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{ no: 3, name: "chunks", kind: "message", T: ve, repeated: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new me().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new me().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new me().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(me, Ee, Ie);
			}
		}
		e.$9A = me;
		class ve extends t.Message {
			constructor(Ee) {
				super(),
					(this.oldLines = []),
					(this.newLines = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SimpleFileDiff.Chunk";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "old_lines", kind: "scalar", T: 9, repeated: !0 },
					{ no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: !0 },
					{ no: 3, name: "old_range", kind: "message", T: i.$Ms },
					{ no: 4, name: "new_range", kind: "message", T: i.$Ms },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new ve().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new ve().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new ve().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(ve, Ee, Ie);
			}
		}
		e.$0A = ve;
		class ge extends t.Message {
			constructor(Ee) {
				super(),
					(this.sha = ""),
					(this.message = ""),
					(this.description = ""),
					(this.diff = []),
					(this.author = ""),
					(this.date = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.Commit";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "sha", kind: "scalar", T: 9 },
					{ no: 2, name: "message", kind: "scalar", T: 9 },
					{ no: 3, name: "description", kind: "scalar", T: 9 },
					{ no: 4, name: "diff", kind: "message", T: i.$Ds, repeated: !0 },
					{ no: 5, name: "author", kind: "scalar", T: 9 },
					{ no: 6, name: "date", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new ge().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new ge().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new ge().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(ge, Ee, Ie);
			}
		}
		e.$$A = ge;
		class be extends t.Message {
			constructor(Ee) {
				super(),
					(this.title = ""),
					(this.body = ""),
					(this.diff = []),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.PullRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "title", kind: "scalar", T: 9 },
					{ no: 2, name: "body", kind: "scalar", T: 9 },
					{ no: 3, name: "diff", kind: "message", T: i.$Ds, repeated: !0 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new be().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new be().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new be().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(be, Ee, Ie);
			}
		}
		e.$_A = be;
		class Ce extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SuggestedCodeBlock";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new Ce().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new Ce().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new Ce().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(Ce, Ee, Ie);
			}
		}
		e.$aB = Ce;
		class Le extends t.Message {
			constructor(Ee) {
				super(),
					(this.userResponseType = Fe.UNSPECIFIED),
					(this.filePath = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UserResponseToSuggestedCodeBlock";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "user_response_type",
						kind: "enum",
						T: t.proto3.getEnumType(Fe),
					},
					{ no: 2, name: "file_path", kind: "scalar", T: 9 },
					{
						no: 3,
						name: "user_modifications_to_suggested_code_blocks",
						kind: "message",
						T: i.$Ds,
						opt: !0,
					},
				]);
			}
			static fromBinary(Ee, Ie) {
				return new Le().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new Le().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new Le().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(Le, Ee, Ie);
			}
		}
		e.$bB = Le;
		var Fe;
		(function (Te) {
			(Te[(Te.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				(Te[(Te.ACCEPT = 1)] = "ACCEPT"),
				(Te[(Te.REJECT = 2)] = "REJECT"),
				(Te[(Te.MODIFY = 3)] = "MODIFY");
		})(Fe || (e.UserResponseToSuggestedCodeBlock_UserResponseType = Fe = {})),
			t.proto3.util.setEnumType(
				Fe,
				"aiserver.v1.UserResponseToSuggestedCodeBlock.UserResponseType",
				[
					{ no: 0, name: "USER_RESPONSE_TYPE_UNSPECIFIED" },
					{ no: 1, name: "USER_RESPONSE_TYPE_ACCEPT" },
					{ no: 2, name: "USER_RESPONSE_TYPE_REJECT" },
					{ no: 3, name: "USER_RESPONSE_TYPE_MODIFY" },
				],
			);
		class Oe extends t.Message {
			constructor(Ee) {
				super(),
					(this.fileName = ""),
					(this.fileContent = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ContextRerankingCandidateFile";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file_name", kind: "scalar", T: 9 },
					{ no: 2, name: "file_content", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new Oe().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new Oe().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new Oe().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(Oe, Ee, Ie);
			}
		}
		e.$cB = Oe;
		class xe extends t.Message {
			constructor(Ee) {
				super(),
					(this.chunks = []),
					(this.editor = He.UNSPECIFIED),
					(this.hitTimeout = !1),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ComposerFileDiff";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "chunks", kind: "message", T: Ke, repeated: !0 },
					{
						no: 2,
						name: "editor",
						kind: "enum",
						T: t.proto3.getEnumType(He),
					},
					{ no: 3, name: "hit_timeout", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new xe().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new xe().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new xe().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(xe, Ee, Ie);
			}
		}
		e.$dB = xe;
		var He;
		(function (Te) {
			(Te[(Te.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				(Te[(Te.AI = 1)] = "AI"),
				(Te[(Te.HUMAN = 2)] = "HUMAN");
		})(He || (e.ComposerFileDiff_Editor = He = {})),
			t.proto3.util.setEnumType(He, "aiserver.v1.ComposerFileDiff.Editor", [
				{ no: 0, name: "EDITOR_UNSPECIFIED" },
				{ no: 1, name: "EDITOR_AI" },
				{ no: 2, name: "EDITOR_HUMAN" },
			]);
		class Ke extends t.Message {
			constructor(Ee) {
				super(),
					(this.diffString = ""),
					(this.oldStart = 0),
					(this.newStart = 0),
					(this.oldLines = 0),
					(this.newLines = 0),
					(this.linesRemoved = 0),
					(this.linesAdded = 0),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ComposerFileDiff.ChunkDiff";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "diff_string", kind: "scalar", T: 9 },
					{ no: 2, name: "old_start", kind: "scalar", T: 5 },
					{ no: 3, name: "new_start", kind: "scalar", T: 5 },
					{ no: 4, name: "old_lines", kind: "scalar", T: 5 },
					{ no: 5, name: "new_lines", kind: "scalar", T: 5 },
					{ no: 6, name: "lines_removed", kind: "scalar", T: 5 },
					{ no: 7, name: "lines_added", kind: "scalar", T: 5 },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new Ke().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new Ke().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new Ke().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(Ke, Ee, Ie);
			}
		}
		e.$eB = Ke;
		class Je extends t.Message {
			constructor(Ee) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.diffs = []),
					(this.timestamp = 0),
					(this.uniqueId = ""),
					t.proto3.util.initPartial(Ee, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.DiffHistoryData";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{ no: 2, name: "diffs", kind: "message", T: xe, repeated: !0 },
					{ no: 3, name: "timestamp", kind: "scalar", T: 1 },
					{ no: 4, name: "unique_id", kind: "scalar", T: 9 },
					{ no: 5, name: "start_to_end_diff", kind: "message", T: xe },
				]);
			}
			static fromBinary(Ee, Ie) {
				return new Je().fromBinary(Ee, Ie);
			}
			static fromJson(Ee, Ie) {
				return new Je().fromJson(Ee, Ie);
			}
			static fromJsonString(Ee, Ie) {
				return new Je().fromJsonString(Ee, Ie);
			}
			static equals(Ee, Ie) {
				return t.proto3.util.equals(Je, Ee, Ie);
			}
		}
		e.$fB = Je;
	},
);
