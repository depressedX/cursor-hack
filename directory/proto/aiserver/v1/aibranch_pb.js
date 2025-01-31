import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './utils_pb.js';
import './shadow_workspace_pb.js';
import './repository_pb.js';
define(
			de[2172],
			he([1, 0, 86, 83, 454, 272]),
			function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*utils_pb*/,
 w /*shadow_workspace_pb*/,
 E /*repository_pb*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$09 =
						e.$99 =
						e.$89 =
						e.$79 =
						e.$69 =
						e.$59 =
						e.$49 =
						e.$39 =
						e.$29 =
						e.$19 =
						e.$Z9 =
						e.$Y9 =
						e.$X9 =
						e.$W9 =
						e.$V9 =
						e.$U9 =
						e.$T9 =
						e.$S9 =
						e.$R9 =
						e.$Q9 =
							void 0);
				class C extends t.Message {
					constructor(T) {
						super(), (this.mode = ""), t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportModeSelectionRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "mode", kind: "scalar", T: 9 },
							{ no: 2, name: "debug_info", kind: "message", T: i.$Hs },
						]);
					}
					static fromBinary(T, P) {
						return new C().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new C().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new C().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(C, T, P);
					}
				}
				e.$Q9 = C;
				class d extends t.Message {
					constructor(T) {
						super(), t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportModeSelectionResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(T, P) {
						return new d().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new d().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new d().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(d, T, P);
					}
				}
				e.$R9 = d;
				class m extends t.Message {
					constructor(T) {
						super(),
							(this.patchUuid = ""),
							(this.patchString = ""),
							(this.source = ""),
							(this.reflection = ""),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.RecordAcceptedPatchRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "patch_uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "patch_string", kind: "scalar", T: 9 },
							{ no: 3, name: "source", kind: "scalar", T: 9 },
							{ no: 4, name: "reflection", kind: "scalar", T: 9 },
							{ no: 5, name: "debug_info", kind: "message", T: i.$Hs },
						]);
					}
					static fromBinary(T, P) {
						return new m().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new m().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new m().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(m, T, P);
					}
				}
				e.$S9 = m;
				class r extends t.Message {
					constructor(T) {
						super(), t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.RecordAcceptedPatchResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(T, P) {
						return new r().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new r().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new r().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(r, T, P);
					}
				}
				e.$T9 = r;
				class u extends t.Message {
					constructor(T) {
						super(), (this.ans = ""), t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.OpusChainGetFilePathsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "ans", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(T, P) {
						return new u().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new u().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new u().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(u, T, P);
					}
				}
				e.$U9 = u;
				class a extends t.Message {
					constructor(T) {
						super(), (this.paths = []), t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.OpusChainGetFilePathsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "paths", kind: "message", T: h, repeated: !0 },
						]);
					}
					static fromBinary(T, P) {
						return new a().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new a().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new a().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(a, T, P);
					}
				}
				e.$V9 = a;
				class h extends t.Message {
					constructor(T) {
						super(),
							(this.rawPath = ""),
							(this.interestingLines = []),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.OpusChainGetFilePathsResponse.Path";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "raw_path", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "interesting_lines",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
						]);
					}
					static fromBinary(T, P) {
						return new h().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new h().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new h().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(h, T, P);
					}
				}
				e.$W9 = h;
				class c extends t.Message {
					constructor(T) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.oldFileContents = ""),
							(this.newFileContents = ""),
							(this.patchString = ""),
							(this.branchNotes = ""),
							(this.branchName = ""),
							(this.highLevelAiAnswer = ""),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.OpusChainReflectRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "old_file_contents", kind: "scalar", T: 9 },
							{ no: 3, name: "new_file_contents", kind: "scalar", T: 9 },
							{ no: 9, name: "patch_string", kind: "scalar", T: 9 },
							{ no: 4, name: "branch_notes", kind: "scalar", T: 9 },
							{ no: 5, name: "branch_name", kind: "scalar", T: 9 },
							{ no: 6, name: "high_level_ai_answer", kind: "scalar", T: 9 },
							{ no: 7, name: "override_model", kind: "scalar", T: 9, opt: !0 },
							{
								no: 8,
								name: "override_token_limit",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{ no: 10, name: "lints", kind: "message", T: w.$xx },
						]);
					}
					static fromBinary(T, P) {
						return new c().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new c().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new c().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(c, T, P);
					}
				}
				e.$X9 = c;
				class n extends t.Message {
					constructor(T) {
						super(), (this.text = ""), t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.OpusChainReflectResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "decision", kind: "message", T: f },
						]);
					}
					static fromBinary(T, P) {
						return new n().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new n().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new n().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(n, T, P);
					}
				}
				e.$Y9 = n;
				class g extends t.Message {
					constructor(T) {
						super(), t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.OpusChainReflectResponse.AcceptDecision";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(T, P) {
						return new g().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new g().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new g().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(g, T, P);
					}
				}
				e.$Z9 = g;
				class p extends t.Message {
					constructor(T) {
						super(), t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.OpusChainReflectResponse.RetryWithoutMoreInformationDecision";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(T, P) {
						return new p().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new p().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new p().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(p, T, P);
					}
				}
				e.$19 = p;
				class o extends t.Message {
					constructor(T) {
						super(),
							(this.codebaseQuestions = []),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.OpusChainReflectResponse.RetryWithCodebaseQuestionDecision";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "codebase_questions",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(T, P) {
						return new o().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new o().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new o().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(o, T, P);
					}
				}
				e.$29 = o;
				class f extends t.Message {
					constructor(T) {
						super(),
							(this.decision = { case: void 0 }),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.OpusChainReflectResponse.Decision";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "accept",
								kind: "message",
								T: g,
								oneof: "decision",
							},
							{
								no: 2,
								name: "retry_without_more_information",
								kind: "message",
								T: p,
								oneof: "decision",
							},
							{
								no: 3,
								name: "retry_with_codebase_question",
								kind: "message",
								T: o,
								oneof: "decision",
							},
						]);
					}
					static fromBinary(T, P) {
						return new f().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new f().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new f().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(f, T, P);
					}
				}
				e.$39 = f;
				class b extends t.Message {
					constructor(T) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.highLevelAiAnswer = ""),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.OpusChainGetFileInstructionRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "high_level_ai_answer", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(T, P) {
						return new b().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new b().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new b().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(b, T, P);
					}
				}
				e.$49 = b;
				class s extends t.Message {
					constructor(T) {
						super(),
							(this.fileInstruction = ""),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.OpusChainGetFileInstructionResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "file_instruction", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(T, P) {
						return new s().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new s().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new s().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(s, T, P);
					}
				}
				e.$59 = s;
				class l extends t.Message {
					constructor(T) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.fileContents = ""),
							(this.branchNotes = ""),
							(this.branchName = ""),
							(this.highLevelAiAnswer = ""),
							(this.originatingReflection = ""),
							(this.scoredCodebaseContext = []),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.OpusChainGetPlanRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "file_contents", kind: "scalar", T: 9 },
							{ no: 3, name: "branch_notes", kind: "scalar", T: 9 },
							{ no: 4, name: "branch_name", kind: "scalar", T: 9 },
							{ no: 5, name: "high_level_ai_answer", kind: "scalar", T: 9 },
							{ no: 9, name: "originating_reflection", kind: "scalar", T: 9 },
							{ no: 6, name: "override_model", kind: "scalar", T: 9, opt: !0 },
							{
								no: 7,
								name: "override_token_limit",
								kind: "scalar",
								T: 5,
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
								no: 8,
								name: "codebase_information",
								kind: "message",
								T: y,
								opt: !0,
							},
						]);
					}
					static fromBinary(T, P) {
						return new l().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new l().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new l().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(l, T, P);
					}
				}
				e.$69 = l;
				class y extends t.Message {
					constructor(T) {
						super(),
							(this.files = []),
							(this.qa = []),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.OpusChainGetPlanRequest.CodebaseInformation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "files", kind: "message", T: $, repeated: !0 },
							{ no: 2, name: "qa", kind: "message", T: v, repeated: !0 },
						]);
					}
					static fromBinary(T, P) {
						return new y().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new y().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new y().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(y, T, P);
					}
				}
				e.$79 = y;
				class $ extends t.Message {
					constructor(T) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.contents = ""),
							(this.interestingLines = []),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.OpusChainGetPlanRequest.CodebaseInformation.File";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "contents", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "interesting_lines",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
						]);
					}
					static fromBinary(T, P) {
						return new $().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new $().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new $().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals($, T, P);
					}
				}
				e.$89 = $;
				class v extends t.Message {
					constructor(T) {
						super(),
							(this.question = ""),
							(this.answer = ""),
							t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.OpusChainGetPlanRequest.CodebaseInformation.QA";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "question", kind: "scalar", T: 9 },
							{ no: 2, name: "answer", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(T, P) {
						return new v().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new v().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new v().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(v, T, P);
					}
				}
				e.$99 = v;
				class S extends t.Message {
					constructor(T) {
						super(), (this.text = ""), t.proto3.util.initPartial(T, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.OpusChainGetPlanResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(T, P) {
						return new S().fromBinary(T, P);
					}
					static fromJson(T, P) {
						return new S().fromJson(T, P);
					}
					static fromJsonString(T, P) {
						return new S().fromJsonString(T, P);
					}
					static equals(T, P) {
						return t.proto3.util.equals(S, T, P);
					}
				}
				e.$09 = S;
			},
		)
