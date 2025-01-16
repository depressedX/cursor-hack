define(de[1112], he([1, 0, 126, 86]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$cbb = void 0),
				(e.$cbb = {
					typeName: "aiserver.v1.ChatService",
					methods: {
						streamUnifiedChat: {
							name: "StreamUnifiedChat",
							I: t.$AA,
							O: t.$FA,
							kind: i.MethodKind.ServerStreaming,
						},
						streamUnifiedChatWithTools: {
							name: "StreamUnifiedChatWithTools",
							I: t.$hA,
							O: t.$iA,
							kind: i.MethodKind.BiDiStreaming,
						},
						streamParallelApply: {
							name: "StreamParallelApply",
							I: t.$fA,
							O: t.$gA,
							kind: i.MethodKind.ServerStreaming,
						},
					},
				});
		}),
		define(
			de[644],
			he([1, 0, 86, 228, 83, 367, 126]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UC =
						e.$TC =
						e.$SC =
						e.$RC =
						e.$QC =
						e.$PC =
						e.$OC =
						e.$NC =
						e.$MC =
						e.$LC =
						e.$KC =
						e.$JC =
						e.$IC =
						e.$HC =
						e.$GC =
						e.$FC =
						e.$EC =
						e.$DC =
						e.$CC =
						e.$BC =
						e.$AC =
						e.$zC =
						e.$yC =
						e.$xC =
						e.$wC =
						e.$vC =
						e.$uC =
						e.$tC =
						e.$sC =
						e.$rC =
						e.$qC =
						e.$pC =
							void 0);
				class d extends t.Message {
					constructor(F) {
						super(),
							(this.contextItems = []),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.RerankCmdKContextRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_items",
								kind: "message",
								T: i.$CB,
								repeated: !0,
							},
							{ no: 3, name: "legacy_context", kind: "message", T: l },
							{ no: 2, name: "cmd_k_options", kind: "message", T: h },
						]);
					}
					static fromBinary(F, x) {
						return new d().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new d().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new d().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(d, F, x);
					}
				}
				e.$pC = d;
				class m extends t.Message {
					constructor(F) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.RerankCmdKContextResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_status_update",
								kind: "message",
								T: i.$DB,
								oneof: "response",
							},
							{
								no: 2,
								name: "missing_context_items",
								kind: "message",
								T: i.$EB,
								oneof: "response",
							},
							{ no: 3, name: "did_call", kind: "scalar", T: 8, opt: !0 },
						]);
					}
					static fromBinary(F, x) {
						return new m().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new m().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new m().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(m, F, x);
					}
				}
				e.$qC = m;
				class r extends t.Message {
					constructor(F) {
						super(),
							(this.contextItems = []),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.RerankTerminalCmdKContextRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_items",
								kind: "message",
								T: i.$CB,
								repeated: !0,
							},
							{ no: 2, name: "cmd_k_options", kind: "message", T: a },
						]);
					}
					static fromBinary(F, x) {
						return new r().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new r().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new r().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(r, F, x);
					}
				}
				e.$rC = r;
				class u extends t.Message {
					constructor(F) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.RerankTerminalCmdKContextResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_status_update",
								kind: "message",
								T: i.$DB,
								oneof: "response",
							},
							{
								no: 2,
								name: "missing_context_items",
								kind: "message",
								T: i.$EB,
								oneof: "response",
							},
						]);
					}
					static fromBinary(F, x) {
						return new u().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new u().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new u().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(u, F, x);
					}
				}
				e.$sC = u;
				class a extends t.Message {
					constructor(F) {
						super(),
							(this.chatMode = !1),
							(this.adaCmdKContext = !1),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TerminalCmdKOptions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 3, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 1, name: "chat_mode", kind: "scalar", T: 8 },
							{ no: 2, name: "ada_cmd_k_context", kind: "scalar", T: 8 },
							{ no: 4, name: "use_web", kind: "scalar", T: 8, opt: !0 },
						]);
					}
					static fromBinary(F, x) {
						return new a().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new a().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new a().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(a, F, x);
					}
				}
				e.$tC = a;
				class h extends t.Message {
					constructor(F) {
						super(),
							(this.chatMode = !1),
							(this.adaCmdKContext = !1),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CmdKOptions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 3, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 1, name: "chat_mode", kind: "scalar", T: 8 },
							{ no: 2, name: "ada_cmd_k_context", kind: "scalar", T: 8 },
							{ no: 4, name: "use_reranker", kind: "scalar", T: 8, opt: !0 },
							{ no: 5, name: "use_web", kind: "scalar", T: 8, opt: !0 },
							{
								no: 6,
								name: "request_is_for_caching",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
						]);
					}
					static fromBinary(F, x) {
						return new h().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new h().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new h().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(h, F, x);
					}
				}
				e.$uC = h;
				class c extends t.Message {
					constructor(F) {
						super(),
							(this.originalLines = []),
							(this.relativePath = ""),
							(this.extraContextAbove = []),
							(this.extraContextBelow = []),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CmdKUpcomingEdit";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "original_lines",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 3, name: "relative_path", kind: "scalar", T: 9 },
							{
								no: 4,
								name: "extra_context_above",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 5,
								name: "extra_context_below",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(F, x) {
						return new c().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new c().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new c().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(c, F, x);
					}
				}
				e.$vC = c;
				class n extends t.Message {
					constructor(F) {
						super(),
							(this.originalLines = []),
							(this.newLines = []),
							(this.relativePath = ""),
							(this.extraContextAbove = []),
							(this.extraContextBelow = []),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CmdKPreviousEdit";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "original_lines",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: !0 },
							{ no: 3, name: "relative_path", kind: "scalar", T: 9 },
							{
								no: 4,
								name: "extra_context_above",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 5,
								name: "extra_context_below",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(F, x) {
						return new n().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new n().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new n().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(n, F, x);
					}
				}
				e.$wC = n;
				class g extends t.Message {
					constructor(F) {
						super(),
							(this.contextItems = []),
							(this.sessionId = ""),
							(this.previousEdits = []),
							(this.upcomingEdits = []),
							(this.images = []),
							(this.links = []),
							(this.diffHistory = []),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamHypermodeRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_items",
								kind: "message",
								T: i.$CB,
								repeated: !0,
							},
							{ no: 2, name: "cmd_k_options", kind: "message", T: h },
							{ no: 4, name: "cmd_k_debug_info", kind: "message", T: w.$Hs },
							{ no: 6, name: "session_id", kind: "scalar", T: 9 },
							{ no: 5, name: "legacy_context", kind: "message", T: l },
							{ no: 7, name: "previous_edit", kind: "message", T: n, opt: !0 },
							{
								no: 8,
								name: "previous_edits",
								kind: "message",
								T: n,
								repeated: !0,
							},
							{
								no: 12,
								name: "upcoming_edits",
								kind: "message",
								T: c,
								repeated: !0,
							},
							{
								no: 9,
								name: "use_big_cmdk_for_multi_file_edit",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 10,
								name: "images",
								kind: "message",
								T: w.$ct,
								repeated: !0,
							},
							{
								no: 11,
								name: "links",
								kind: "message",
								T: w.$ht,
								repeated: !0,
							},
							{
								no: 13,
								name: "diff_history",
								kind: "message",
								T: E.$Hv,
								repeated: !0,
							},
							{ no: 14, name: "hyper_model", kind: "scalar", T: 9, opt: !0 },
							{ no: 15, name: "timing_info", kind: "message", T: b, opt: !0 },
						]);
					}
					static fromBinary(F, x) {
						return new g().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new g().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new g().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(g, F, x);
					}
				}
				e.$xC = g;
				class p extends t.Message {
					constructor(F) {
						super(),
							(this.contextItems = []),
							(this.sessionId = ""),
							(this.previousEdits = []),
							(this.upcomingEdits = []),
							(this.images = []),
							(this.links = []),
							(this.diffHistory = []),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCmdKRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_items",
								kind: "message",
								T: i.$CB,
								repeated: !0,
							},
							{ no: 2, name: "cmd_k_options", kind: "message", T: h },
							{ no: 4, name: "cmd_k_debug_info", kind: "message", T: w.$Hs },
							{ no: 6, name: "session_id", kind: "scalar", T: 9 },
							{ no: 5, name: "legacy_context", kind: "message", T: l },
							{ no: 7, name: "previous_edit", kind: "message", T: n, opt: !0 },
							{
								no: 8,
								name: "previous_edits",
								kind: "message",
								T: n,
								repeated: !0,
							},
							{
								no: 12,
								name: "upcoming_edits",
								kind: "message",
								T: c,
								repeated: !0,
							},
							{
								no: 9,
								name: "use_big_cmdk_for_multi_file_edit",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 10,
								name: "images",
								kind: "message",
								T: w.$ct,
								repeated: !0,
							},
							{
								no: 11,
								name: "links",
								kind: "message",
								T: w.$ht,
								repeated: !0,
							},
							{
								no: 13,
								name: "diff_history",
								kind: "message",
								T: E.$Hv,
								repeated: !0,
							},
							{
								no: 14,
								name: "diff_to_base_branch",
								kind: "message",
								T: o,
								opt: !0,
							},
							{ no: 15, name: "timing_info", kind: "message", T: b, opt: !0 },
						]);
					}
					static fromBinary(F, x) {
						return new p().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new p().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new p().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(p, F, x);
					}
				}
				e.$yC = p;
				class o extends t.Message {
					constructor(F) {
						super(),
							(this.fileDiffs = []),
							(this.commits = []),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCmdKRequest.BranchDiff";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "file_diffs",
								kind: "message",
								T: f,
								repeated: !0,
							},
							{
								no: 2,
								name: "commits",
								kind: "message",
								T: C.$$A,
								repeated: !0,
							},
						]);
					}
					static fromBinary(F, x) {
						return new o().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new o().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new o().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(o, F, x);
					}
				}
				e.$zC = o;
				class f extends t.Message {
					constructor(F) {
						super(),
							(this.fileName = ""),
							(this.diff = ""),
							(this.tooBig = !1),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCmdKRequest.BranchDiff.FileDiff";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "file_name", kind: "scalar", T: 9 },
							{ no: 2, name: "diff", kind: "scalar", T: 9 },
							{ no: 3, name: "too_big", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(F, x) {
						return new f().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new f().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new f().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(f, F, x);
					}
				}
				e.$AC = f;
				class b extends t.Message {
					constructor(F) {
						super(),
							(this.userInputTime = 0),
							(this.streamCmdkTime = 0),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TimingInfo";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "user_input_time", kind: "scalar", T: 1 },
							{ no: 2, name: "stream_cmdk_time", kind: "scalar", T: 1 },
						]);
					}
					static fromBinary(F, x) {
						return new b().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new b().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new b().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(b, F, x);
					}
				}
				e.$BC = b;
				class s extends t.Message {
					constructor(F) {
						super(),
							(this.contextItems = []),
							(this.sessionId = ""),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamTerminalCmdKRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_items",
								kind: "message",
								T: i.$CB,
								repeated: !0,
							},
							{ no: 2, name: "cmd_k_options", kind: "message", T: a },
							{ no: 6, name: "session_id", kind: "scalar", T: 9 },
							{ no: 5, name: "legacy_context", kind: "message", T: l },
						]);
					}
					static fromBinary(F, x) {
						return new s().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new s().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new s().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(s, F, x);
					}
				}
				e.$CC = s;
				class l extends t.Message {
					constructor(F) {
						super(),
							(this.promptCodeBlocks = []),
							(this.documentationIdentifiers = []),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CmdKLegacyContext";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 12,
								name: "prompt_code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{
								no: 10,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(F, x) {
						return new l().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new l().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new l().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(l, F, x);
					}
				}
				e.$DC = l;
				class y extends t.Message {
					constructor(F) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCmdKResponseContextWrapped";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "real_response",
								kind: "message",
								T: P,
								oneof: "response",
							},
							{
								no: 2,
								name: "context_status_update",
								kind: "message",
								T: i.$DB,
								oneof: "response",
							},
							{
								no: 3,
								name: "missing_context_items",
								kind: "message",
								T: i.$EB,
								oneof: "response",
							},
						]);
					}
					static fromBinary(F, x) {
						return new y().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new y().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new y().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(y, F, x);
					}
				}
				e.$EC = y;
				class $ extends t.Message {
					constructor(F) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamTerminalCmdKResponseContextWrapped";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "real_response",
								kind: "message",
								T: v,
								oneof: "response",
							},
							{
								no: 2,
								name: "context_status_update",
								kind: "message",
								T: i.$DB,
								oneof: "response",
							},
							{
								no: 3,
								name: "missing_context_items",
								kind: "message",
								T: i.$EB,
								oneof: "response",
							},
						]);
					}
					static fromBinary(F, x) {
						return new $().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new $().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new $().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals($, F, x);
					}
				}
				e.$FC = $;
				class v extends t.Message {
					constructor(F) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamTerminalCmdKResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "terminal_command",
								kind: "message",
								T: S,
								oneof: "response",
							},
							{ no: 4, name: "chat", kind: "message", T: I, oneof: "response" },
							{
								no: 5,
								name: "status_update",
								kind: "message",
								T,
								oneof: "response",
							},
						]);
					}
					static fromBinary(F, x) {
						return new v().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new v().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new v().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(v, F, x);
					}
				}
				e.$GC = v;
				class S extends t.Message {
					constructor(F) {
						super(),
							(this.partialCommand = ""),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamTerminalCmdKResponse.TerminalCommand";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "partial_command", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(F, x) {
						return new S().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new S().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new S().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(S, F, x);
					}
				}
				e.$HC = S;
				class I extends t.Message {
					constructor(F) {
						super(), (this.text = ""), t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamTerminalCmdKResponse.Chat";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(F, x) {
						return new I().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new I().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new I().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(I, F, x);
					}
				}
				e.$IC = I;
				class T extends t.Message {
					constructor(F) {
						super(), (this.messages = []), t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamTerminalCmdKResponse.StatusUpdate";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "messages", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(F, x) {
						return new T().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new T().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new T().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(T, F, x);
					}
				}
				e.$JC = T;
				class P extends t.Message {
					constructor(F) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCmdKResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "edit_start",
								kind: "message",
								T: k,
								oneof: "response",
							},
							{
								no: 2,
								name: "edit_stream",
								kind: "message",
								T: L,
								oneof: "response",
							},
							{
								no: 3,
								name: "edit_end",
								kind: "message",
								T: D,
								oneof: "response",
							},
							{ no: 4, name: "chat", kind: "message", T: M, oneof: "response" },
							{
								no: 5,
								name: "status_update",
								kind: "message",
								T: N,
								oneof: "response",
							},
						]);
					}
					static fromBinary(F, x) {
						return new P().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new P().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new P().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(P, F, x);
					}
				}
				e.$KC = P;
				class k extends t.Message {
					constructor(F) {
						super(),
							(this.startLineNumber = 0),
							(this.editId = 0),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCmdKResponse.EditStart";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "start_line_number", kind: "scalar", T: 5 },
							{ no: 2, name: "edit_id", kind: "scalar", T: 5 },
							{
								no: 3,
								name: "max_end_line_number_exclusive",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{ no: 4, name: "file_path", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(F, x) {
						return new k().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new k().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new k().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(k, F, x);
					}
				}
				e.$LC = k;
				class L extends t.Message {
					constructor(F) {
						super(),
							(this.text = ""),
							(this.editId = 0),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCmdKResponse.EditStream";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "edit_id", kind: "scalar", T: 5 },
							{ no: 3, name: "file_path", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(F, x) {
						return new L().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new L().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new L().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(L, F, x);
					}
				}
				e.$MC = L;
				class D extends t.Message {
					constructor(F) {
						super(),
							(this.endLineNumberExclusive = 0),
							(this.editId = 0),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCmdKResponse.EditEnd";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "end_line_number_exclusive",
								kind: "scalar",
								T: 5,
							},
							{ no: 2, name: "edit_id", kind: "scalar", T: 5 },
							{ no: 3, name: "file_path", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(F, x) {
						return new D().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new D().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new D().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(D, F, x);
					}
				}
				e.$NC = D;
				class M extends t.Message {
					constructor(F) {
						super(), (this.text = ""), t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCmdKResponse.Chat";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(F, x) {
						return new M().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new M().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new M().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(M, F, x);
					}
				}
				e.$OC = M;
				class N extends t.Message {
					constructor(F) {
						super(), (this.messages = []), t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCmdKResponse.StatusUpdate";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "messages", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(F, x) {
						return new N().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new N().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new N().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(N, F, x);
					}
				}
				e.$PC = N;
				class A extends t.Message {
					constructor(F) {
						super(),
							(this.codeBlocks = []),
							(this.contextItems = []),
							(this.sessionId = ""),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetRelevantChunksRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 2, name: "cmd_k_options", kind: "message", T: h },
							{
								no: 3,
								name: "context_items",
								kind: "message",
								T: i.$CB,
								repeated: !0,
							},
							{ no: 4, name: "session_id", kind: "scalar", T: 9 },
							{ no: 5, name: "legacy_context", kind: "message", T: l },
						]);
					}
					static fromBinary(F, x) {
						return new A().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new A().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new A().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(A, F, x);
					}
				}
				e.$QC = A;
				class R extends t.Message {
					constructor(F) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamGetRelevantChunksResponseContextWrapped";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "real_response",
								kind: "message",
								T: O,
								oneof: "response",
							},
						]);
					}
					static fromBinary(F, x) {
						return new R().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new R().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new R().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(R, F, x);
					}
				}
				e.$RC = R;
				class O extends t.Message {
					constructor(F) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetRelevantChunksResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "code_blocks",
								kind: "message",
								T: U,
								oneof: "response",
							},
							{
								no: 2,
								name: "chain_of_thought_stream",
								kind: "message",
								T: B,
								oneof: "response",
							},
						]);
					}
					static fromBinary(F, x) {
						return new O().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new O().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new O().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(O, F, x);
					}
				}
				e.$SC = O;
				class B extends t.Message {
					constructor(F) {
						super(), (this.text = ""), t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.GetRelevantChunksResponse.ChainOfThoughtStream";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(F, x) {
						return new B().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new B().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new B().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(B, F, x);
					}
				}
				e.$TC = B;
				class U extends t.Message {
					constructor(F) {
						super(), (this.codeBlocks = []), t.proto3.util.initPartial(F, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetRelevantChunksResponse.CodeBlocks";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
						]);
					}
					static fromBinary(F, x) {
						return new U().fromBinary(F, x);
					}
					static fromJson(F, x) {
						return new U().fromJson(F, x);
					}
					static fromJsonString(F, x) {
						return new U().fromJsonString(F, x);
					}
					static equals(F, x) {
						return t.proto3.util.equals(U, F, x);
					}
				}
				e.$UC = U;
			},
		),
		