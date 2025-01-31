import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './chat_pb.js';
import './utils_pb.js';
import './repository_pb.js';
define(
			de[1115],
			he([1, 0, 86, 126, 83, 272]),
			function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*chat_pb*/,
 w /*utils_pb*/,
 E /*repository_pb*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$M_ =
						e.$L_ =
						e.$K_ =
						e.$J_ =
						e.LogInterpreterExplicitUserFeedbackRequest_Feedback =
						e.$I_ =
						e.InterpreterTool =
							void 0);
				var C;
				(function (c) {
					(c[(c.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(c[(c.PYTHON = 1)] = "PYTHON"),
						(c[(c.SHELL = 2)] = "SHELL");
				})(C || (e.InterpreterTool = C = {})),
					t.proto3.util.setEnumType(C, "aiserver.v1.InterpreterTool", [
						{ no: 0, name: "INTERPRETER_TOOL_UNSPECIFIED" },
						{ no: 1, name: "INTERPRETER_TOOL_PYTHON" },
						{ no: 2, name: "INTERPRETER_TOOL_SHELL" },
					]);
				class d extends t.Message {
					constructor(n) {
						super(),
							(this.conversationUuid = ""),
							(this.userFeedback = m.UNSPECIFIED),
							(this.userFeedbackDetails = ""),
							t.proto3.util.initPartial(n, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.LogInterpreterExplicitUserFeedbackRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "conversation_uuid", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "user_feedback",
								kind: "enum",
								T: t.proto3.getEnumType(m),
							},
							{ no: 4, name: "user_feedback_details", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(n, g) {
						return new d().fromBinary(n, g);
					}
					static fromJson(n, g) {
						return new d().fromJson(n, g);
					}
					static fromJsonString(n, g) {
						return new d().fromJsonString(n, g);
					}
					static equals(n, g) {
						return t.proto3.util.equals(d, n, g);
					}
				}
				e.$I_ = d;
				var m;
				(function (c) {
					(c[(c.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(c[(c.GOOD = 1)] = "GOOD"),
						(c[(c.OKAY = 2)] = "OKAY"),
						(c[(c.BAD = 3)] = "BAD");
				})(
					m || (e.LogInterpreterExplicitUserFeedbackRequest_Feedback = m = {}),
				),
					t.proto3.util.setEnumType(
						m,
						"aiserver.v1.LogInterpreterExplicitUserFeedbackRequest.Feedback",
						[
							{ no: 0, name: "FEEDBACK_UNSPECIFIED" },
							{ no: 1, name: "FEEDBACK_GOOD" },
							{ no: 2, name: "FEEDBACK_OKAY" },
							{ no: 3, name: "FEEDBACK_BAD" },
						],
					);
				class r extends t.Message {
					constructor(n) {
						super(), t.proto3.util.initPartial(n, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.LogInterpreterExplicitUserFeedbackResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(n, g) {
						return new r().fromBinary(n, g);
					}
					static fromJson(n, g) {
						return new r().fromJson(n, g);
					}
					static fromJsonString(n, g) {
						return new r().fromJsonString(n, g);
					}
					static equals(n, g) {
						return t.proto3.util.equals(r, n, g);
					}
				}
				e.$J_ = r;
				class u extends t.Message {
					constructor(n) {
						super(),
							(this.openFiles = []),
							(this.conversation = []),
							(this.documentationIdentifiers = []),
							(this.scoredCodebaseContext = []),
							(this.conversationUuid = ""),
							(this.quotes = []),
							(this.supportsShellTool = !1),
							(this.globalDescription = ""),
							(this.terminalCwd = ""),
							t.proto3.util.initPartial(n, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamInterpreterRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "open_files",
								kind: "message",
								T: a,
								repeated: !0,
							},
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: i.$SA,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{ no: 7, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 8,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 11, name: "summary", kind: "scalar", T: 9, opt: !0 },
							{
								no: 12,
								name: "summary_up_until_index",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{
								no: 13,
								name: "retry_instructions",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 14,
								name: "retry_previous_attempt",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 15,
								name: "scored_codebase_context",
								kind: "message",
								T: E.$Tu,
								repeated: !0,
							},
							{
								no: 16,
								name: "high_level_folder_description",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{ no: 17, name: "conversation_uuid", kind: "scalar", T: 9 },
							{ no: 18, name: "cmd_k_debug_info", kind: "message", T: w.$Hs },
							{
								no: 19,
								name: "quotes",
								kind: "message",
								T: w.$et,
								repeated: !0,
							},
							{ no: 20, name: "supports_shell_tool", kind: "scalar", T: 8 },
							{ no: 21, name: "global_description", kind: "scalar", T: 9 },
							{ no: 22, name: "terminal_cwd", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(n, g) {
						return new u().fromBinary(n, g);
					}
					static fromJson(n, g) {
						return new u().fromJson(n, g);
					}
					static fromJsonString(n, g) {
						return new u().fromJsonString(n, g);
					}
					static equals(n, g) {
						return t.proto3.util.equals(u, n, g);
					}
				}
				e.$K_ = u;
				class a extends t.Message {
					constructor(n) {
						super(),
							(this.scrollTopLineNumber = 0),
							t.proto3.util.initPartial(n, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamInterpreterRequest.FileInfo";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "file", kind: "message", T: w.$Ws },
							{ no: 2, name: "scroll_top_line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(n, g) {
						return new a().fromBinary(n, g);
					}
					static fromJson(n, g) {
						return new a().fromJson(n, g);
					}
					static fromJsonString(n, g) {
						return new a().fromJsonString(n, g);
					}
					static equals(n, g) {
						return t.proto3.util.equals(a, n, g);
					}
				}
				e.$L_ = a;
				class h extends t.Message {
					constructor(n) {
						super(), (this.text = ""), t.proto3.util.initPartial(n, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamInterpreterResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(n, g) {
						return new h().fromBinary(n, g);
					}
					static fromJson(n, g) {
						return new h().fromJson(n, g);
					}
					static fromJsonString(n, g) {
						return new h().fromJsonString(n, g);
					}
					static equals(n, g) {
						return t.proto3.util.equals(h, n, g);
					}
				}
				e.$M_ = h;
			},
		)
