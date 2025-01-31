import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './shadow_workspace_pb.js';
import './cpp_pb.js';
import './utils_pb.js';
import './context_pb.js';
import './repository_pb.js';
import './context_ast_pb.js';
import './chat_pb.js';
define(
			de[2176],
			he([1, 0, 86, 454, 367, 83, 228, 272, 1472, 126]),
			function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*shadow_workspace_pb*/,
 w /*cpp_pb*/,
 E /*utils_pb*/,
 C /*context_pb*/,
 d /*repository_pb*/,
 m /*context_ast_pb*/,
 r /*chat_pb*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$G_ =
						e.$F_ =
						e.$E_ =
						e.$D_ =
						e.$C_ =
						e.$B_ =
						e.$A_ =
						e.$z_ =
						e.$y_ =
						e.$x_ =
						e.$w_ =
						e.$v_ =
						e.$u_ =
						e.$t_ =
						e.$s_ =
						e.Opus2ChainPlanRequest_OpusPlanVersion =
						e.$r_ =
						e.$q_ =
						e.$p_ =
						e.$o_ =
						e.$n_ =
						e.$m_ =
						e.$l_ =
						e.$k_ =
						e.$j_ =
						e.$i_ =
						e.$h_ =
						e.$g_ =
						e.$f_ =
						e.$e_ =
						e.$d_ =
						e.$c_ =
							void 0);
				class u extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.startLine = 0),
							(this.text = ""),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.UsefulType";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "start_line", kind: "scalar", T: 5 },
							{ no: 3, name: "text", kind: "scalar", T: 9 },
							{ no: 4, name: "score", kind: "scalar", T: 1, opt: !0 },
						]);
					}
					static fromBinary(q, V) {
						return new u().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new u().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new u().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(u, q, V);
					}
				}
				e.$c_ = u;
				class a extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.fileContents = ""),
							(this.implementationStartLineInclusive = 0),
							(this.implementationEndLineInclusive = 0),
							(this.applyPlan = ""),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.Opus2ChainApplyPlanRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "file_contents", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "implementation_start_line_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 4,
								name: "implementation_end_line_inclusive",
								kind: "scalar",
								T: 5,
							},
							{ no: 5, name: "apply_plan", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(q, V) {
						return new a().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new a().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new a().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(a, q, V);
					}
				}
				e.$d_ = a;
				class h extends t.Message {
					constructor(q) {
						super(), (this.text = ""), t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.Opus2ChainApplyPlanResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(q, V) {
						return new h().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new h().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new h().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(h, q, V);
					}
				}
				e.$e_ = h;
				class c extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.fileContents = ""),
							(this.usefulTypes = []),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SortUsefulTypesNaiveRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "file_contents", kind: "scalar", T: 9 },
							{ no: 3, name: "query_range", kind: "message", T: n },
							{
								no: 4,
								name: "useful_types",
								kind: "message",
								T: u,
								repeated: !0,
							},
						]);
					}
					static fromBinary(q, V) {
						return new c().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new c().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new c().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(c, q, V);
					}
				}
				e.$f_ = c;
				class n extends t.Message {
					constructor(q) {
						super(),
							(this.startLineNumber = 0),
							(this.startColumn = 0),
							(this.endLineNumber = 0),
							(this.endColumn = 0),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SortUsefulTypesNaiveRequest.IRange";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "start_line_number", kind: "scalar", T: 5 },
							{ no: 2, name: "start_column", kind: "scalar", T: 5 },
							{ no: 3, name: "end_line_number", kind: "scalar", T: 5 },
							{ no: 4, name: "end_column", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(q, V) {
						return new n().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new n().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new n().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(n, q, V);
					}
				}
				e.$g_ = n;
				class g extends t.Message {
					constructor(q) {
						super(),
							(this.usefulTypes = []),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SortUsefulTypesNaiveResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "useful_types",
								kind: "message",
								T: u,
								repeated: !0,
							},
						]);
					}
					static fromBinary(q, V) {
						return new g().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new g().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new g().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(g, q, V);
					}
				}
				e.$h_ = g;
				class p extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.oldFileContents = ""),
							(this.implementationStartLineInclusive = 0),
							(this.implementationEndLineInclusive = 0),
							(this.newImplementationLines = []),
							(this.callSiteLines = []),
							(this.functionName = ""),
							(this.branchNotes = ""),
							(this.branchName = ""),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.Opus2ChainReflectRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "old_file_contents", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "implementation_start_line_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 4,
								name: "implementation_end_line_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 5,
								name: "new_implementation_lines",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 6,
								name: "call_site_lines",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
							{ no: 7, name: "function_name", kind: "scalar", T: 9 },
							{ no: 8, name: "branch_notes", kind: "scalar", T: 9 },
							{ no: 9, name: "branch_name", kind: "scalar", T: 9 },
							{ no: 10, name: "lints", kind: "message", T: i.$xx },
						]);
					}
					static fromBinary(q, V) {
						return new p().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new p().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new p().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(p, q, V);
					}
				}
				e.$i_ = p;
				class o extends t.Message {
					constructor(q) {
						super(), (this.text = ""), t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.Opus2ChainReflectResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "decision", kind: "message", T: l },
						]);
					}
					static fromBinary(q, V) {
						return new o().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new o().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new o().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(o, q, V);
					}
				}
				e.$j_ = o;
				class f extends t.Message {
					constructor(q) {
						super(), t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.Opus2ChainReflectResponse.AcceptDecision";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(q, V) {
						return new f().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new f().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new f().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(f, q, V);
					}
				}
				e.$k_ = f;
				class b extends t.Message {
					constructor(q) {
						super(), t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.Opus2ChainReflectResponse.RetryWithoutMoreInformationDecision";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(q, V) {
						return new b().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new b().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new b().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(b, q, V);
					}
				}
				e.$l_ = b;
				class s extends t.Message {
					constructor(q) {
						super(),
							(this.codebaseQuestions = []),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.Opus2ChainReflectResponse.RetryWithCodebaseQuestionDecision";
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
					static fromBinary(q, V) {
						return new s().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new s().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new s().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(s, q, V);
					}
				}
				e.$m_ = s;
				class l extends t.Message {
					constructor(q) {
						super(),
							(this.decision = { case: void 0 }),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.Opus2ChainReflectResponse.Decision";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "accept",
								kind: "message",
								T: f,
								oneof: "decision",
							},
							{
								no: 2,
								name: "retry_without_more_information",
								kind: "message",
								T: b,
								oneof: "decision",
							},
							{
								no: 3,
								name: "retry_with_codebase_question",
								kind: "message",
								T: s,
								oneof: "decision",
							},
						]);
					}
					static fromBinary(q, V) {
						return new l().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new l().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new l().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(l, q, V);
					}
				}
				e.$n_ = l;
				class y extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.fileContents = ""),
							(this.implementationStartLineInclusive = 0),
							(this.implementationEndLineInclusive = 0),
							(this.diffHistory = []),
							(this.callSiteLines = []),
							(this.functionName = ""),
							(this.usefulTypes = []),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.V0ChainRunRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "file_contents", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "implementation_start_line_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 4,
								name: "implementation_end_line_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 5,
								name: "diff_history",
								kind: "message",
								T: w.$Hv,
								repeated: !0,
							},
							{
								no: 6,
								name: "call_site_lines",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
							{ no: 7, name: "function_name", kind: "scalar", T: 9 },
							{
								no: 8,
								name: "useful_types",
								kind: "message",
								T: u,
								repeated: !0,
							},
							{ no: 10, name: "prompt", kind: "message", T: v },
							{ no: 9, name: "debug_info", kind: "message", T: E.$Hs },
						]);
					}
					static fromBinary(q, V) {
						return new y().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new y().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new y().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(y, q, V);
					}
				}
				e.$o_ = y;
				class $ extends t.Message {
					constructor(q) {
						super(), (this.text = ""), t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.V0ChainRunResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(q, V) {
						return new $().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new $().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new $().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals($, q, V);
					}
				}
				e.$p_ = $;
				class v extends t.Message {
					constructor(q) {
						super(),
							(this.text = ""),
							(this.contextItems = []),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.HallucinatedFunctionsProtoPrompt";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "context_items",
								kind: "message",
								T: C.$CB,
								repeated: !0,
							},
						]);
					}
					static fromBinary(q, V) {
						return new v().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new v().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new v().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(v, q, V);
					}
				}
				e.$q_ = v;
				class S extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.fileContents = ""),
							(this.implementationStartLineInclusive = 0),
							(this.implementationEndLineInclusive = 0),
							(this.diffHistory = []),
							(this.callSiteLines = []),
							(this.functionName = ""),
							(this.branchNotes = ""),
							(this.branchName = ""),
							(this.scoredCodebaseContext = []),
							(this.branchDiffFiles = []),
							(this.diffHistoryFiles = []),
							(this.planVersion = I.UNSPECIFIED),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.Opus2ChainPlanRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "file_contents", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "implementation_start_line_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 4,
								name: "implementation_end_line_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 5,
								name: "diff_history",
								kind: "message",
								T: w.$Hv,
								repeated: !0,
							},
							{
								no: 6,
								name: "call_site_lines",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
							{ no: 7, name: "function_name", kind: "scalar", T: 9 },
							{ no: 9, name: "debug_info", kind: "message", T: E.$Hs },
							{ no: 20, name: "prompt", kind: "message", T: v },
							{ no: 10, name: "branch_notes", kind: "scalar", T: 9 },
							{ no: 11, name: "branch_name", kind: "scalar", T: 9 },
							{
								no: 12,
								name: "scored_codebase_context",
								kind: "message",
								T: d.$Tu,
								repeated: !0,
							},
							{ no: 13, name: "diff_to_base_branch", kind: "message", T },
							{
								no: 16,
								name: "branch_diff_files",
								kind: "message",
								T: k,
								repeated: !0,
							},
							{
								no: 14,
								name: "diff_history_files",
								kind: "message",
								T: k,
								repeated: !0,
							},
							{
								no: 8,
								name: "codebase_information",
								kind: "message",
								T: L,
								opt: !0,
							},
							{
								no: 15,
								name: "plan_version",
								kind: "enum",
								T: t.proto3.getEnumType(I),
							},
							{ no: 17, name: "context_ast", kind: "message", T: m.$fD },
						]);
					}
					static fromBinary(q, V) {
						return new S().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new S().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new S().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(S, q, V);
					}
				}
				e.$r_ = S;
				var I;
				(function (H) {
					(H[(H.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(H[(H.V0 = 1)] = "V0"),
						(H[(H.V1_MORE_CONTEXT_AND_GUIDELINES = 2)] =
							"V1_MORE_CONTEXT_AND_GUIDELINES");
				})(I || (e.Opus2ChainPlanRequest_OpusPlanVersion = I = {})),
					t.proto3.util.setEnumType(
						I,
						"aiserver.v1.Opus2ChainPlanRequest.OpusPlanVersion",
						[
							{ no: 0, name: "OPUS_PLAN_VERSION_UNSPECIFIED" },
							{ no: 1, name: "OPUS_PLAN_VERSION_V0" },
							{
								no: 2,
								name: "OPUS_PLAN_VERSION_V1_MORE_CONTEXT_AND_GUIDELINES",
							},
						],
					);
				class T extends t.Message {
					constructor(q) {
						super(),
							(this.fileDiffs = []),
							(this.commits = []),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.Opus2ChainPlanRequest.BranchDiff";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "file_diffs",
								kind: "message",
								T: P,
								repeated: !0,
							},
							{
								no: 2,
								name: "commits",
								kind: "message",
								T: r.$$A,
								repeated: !0,
							},
						]);
					}
					static fromBinary(q, V) {
						return new T().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new T().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new T().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(T, q, V);
					}
				}
				e.$s_ = T;
				class P extends t.Message {
					constructor(q) {
						super(),
							(this.fileName = ""),
							(this.diff = ""),
							(this.tooBig = !1),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.Opus2ChainPlanRequest.BranchDiff.FileDiff";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "file_name", kind: "scalar", T: 9 },
							{ no: 2, name: "diff", kind: "scalar", T: 9 },
							{ no: 3, name: "too_big", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(q, V) {
						return new P().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new P().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new P().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(P, q, V);
					}
				}
				e.$t_ = P;
				class k extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.text = ""),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.Opus2ChainPlanRequest.File";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(q, V) {
						return new k().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new k().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new k().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(k, q, V);
					}
				}
				e.$u_ = k;
				class L extends t.Message {
					constructor(q) {
						super(),
							(this.files = []),
							(this.qa = []),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.Opus2ChainPlanRequest.CodebaseInformation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "files", kind: "message", T: D, repeated: !0 },
							{ no: 2, name: "qa", kind: "message", T: M, repeated: !0 },
						]);
					}
					static fromBinary(q, V) {
						return new L().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new L().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new L().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(L, q, V);
					}
				}
				e.$v_ = L;
				class D extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.contents = ""),
							(this.interestingLines = []),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.Opus2ChainPlanRequest.CodebaseInformation.File";
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
					static fromBinary(q, V) {
						return new D().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new D().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new D().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(D, q, V);
					}
				}
				e.$w_ = D;
				class M extends t.Message {
					constructor(q) {
						super(),
							(this.question = ""),
							(this.answer = ""),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.Opus2ChainPlanRequest.CodebaseInformation.QA";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "question", kind: "scalar", T: 9 },
							{ no: 2, name: "answer", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(q, V) {
						return new M().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new M().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new M().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(M, q, V);
					}
				}
				e.$x_ = M;
				class N extends t.Message {
					constructor(q) {
						super(), (this.text = ""), t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.ExtractFunctionNameFromImplementationPromptProps";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(q, V) {
						return new N().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new N().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new N().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(N, q, V);
					}
				}
				e.$y_ = N;
				class A extends t.Message {
					constructor(q) {
						super(), (this.text = ""), t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.Opus2ChainPlanResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(q, V) {
						return new A().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new A().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new A().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(A, q, V);
					}
				}
				e.$z_ = A;
				class R extends t.Message {
					constructor(q) {
						super(),
							(this.examples = []),
							(this.tokenLimit = 0),
							(this.tokenizer = ""),
							(this.chainOfThought = !1),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.CodebaseKnowledgeCmdKInstructionFewShotPromptProps";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "examples", kind: "message", T: O, repeated: !0 },
							{ no: 2, name: "current", kind: "message", T: B },
							{ no: 8, name: "token_limit", kind: "scalar", T: 5 },
							{ no: 9, name: "tokenizer", kind: "scalar", T: 9 },
							{ no: 10, name: "chain_of_thought", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(q, V) {
						return new R().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new R().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new R().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(R, q, V);
					}
				}
				e.$A_ = R;
				class O extends t.Message {
					constructor(q) {
						super(),
							(this.instruction = ""),
							(this.reasoning = ""),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.CodebaseKnowledgeCmdKInstructionFewShotPromptProps.Example";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "props", kind: "message", T: B },
							{ no: 2, name: "instruction", kind: "scalar", T: 9 },
							{ no: 3, name: "reasoning", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(q, V) {
						return new O().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new O().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new O().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(O, q, V);
					}
				}
				e.$B_ = O;
				class B extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.currentFileLines = []),
							(this.startLineOneIndexedInclusive = 0),
							(this.endLineOneIndexedExclusive = 0),
							(this.groundTruthLines = []),
							(this.prHistory = []),
							(this.scoredCodebaseContext = []),
							(this.tokenLimit = 0),
							(this.tokenizer = ""),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.CodebaseKnowledgeCmdKInstructionPromptProps";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "current_file_lines",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 3,
								name: "start_line_one_indexed_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 4,
								name: "end_line_one_indexed_exclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 5,
								name: "ground_truth_lines",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 6,
								name: "pr_history",
								kind: "message",
								T: z,
								repeated: !0,
							},
							{
								no: 7,
								name: "scored_codebase_context",
								kind: "message",
								T: d.$Tu,
								repeated: !0,
							},
							{ no: 8, name: "token_limit", kind: "scalar", T: 5 },
							{ no: 9, name: "tokenizer", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(q, V) {
						return new B().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new B().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new B().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(B, q, V);
					}
				}
				e.$C_ = B;
				class U extends t.Message {
					constructor(q) {
						super(),
							(this.codebaseContext = []),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ScoredCodebaseContext";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "codebase_context",
								kind: "message",
								T: d.$Tu,
								repeated: !0,
							},
						]);
					}
					static fromBinary(q, V) {
						return new U().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new U().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new U().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(U, q, V);
					}
				}
				e.$D_ = U;
				class z extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.originalLines = []),
							(this.newLines = []),
							(this.startLineOneIndexed = 0),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PrHistoryItem";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "original_lines",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 4, name: "new_lines", kind: "scalar", T: 9, repeated: !0 },
							{ no: 5, name: "start_line_one_indexed", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(q, V) {
						return new z().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new z().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new z().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(z, q, V);
					}
				}
				e.$E_ = z;
				class F extends t.Message {
					constructor(q) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.currentFileLines = []),
							(this.startLineOneIndexedInclusive = 0),
							(this.endLineOneIndexedExclusive = 0),
							(this.instruction = ""),
							(this.prHistory = []),
							(this.scoredCodebaseContext = []),
							(this.tokenLimit = 0),
							(this.tokenizer = ""),
							t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CodebaseKnowledgeCmdKPromptProps";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "current_file_lines",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 3,
								name: "start_line_one_indexed_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 4,
								name: "end_line_one_indexed_exclusive",
								kind: "scalar",
								T: 5,
							},
							{ no: 5, name: "instruction", kind: "scalar", T: 9 },
							{
								no: 6,
								name: "pr_history",
								kind: "message",
								T: z,
								repeated: !0,
							},
							{
								no: 7,
								name: "scored_codebase_context",
								kind: "message",
								T: d.$Tu,
								repeated: !0,
							},
							{ no: 8, name: "token_limit", kind: "scalar", T: 5 },
							{ no: 9, name: "tokenizer", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(q, V) {
						return new F().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new F().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new F().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(F, q, V);
					}
				}
				e.$F_ = F;
				class x extends t.Message {
					constructor(q) {
						super(), t.proto3.util.initPartial(q, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.Opus2ChainPlanPromptProps";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "request", kind: "message", T: S },
							{ no: 2, name: "plan", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(q, V) {
						return new x().fromBinary(q, V);
					}
					static fromJson(q, V) {
						return new x().fromJson(q, V);
					}
					static fromJsonString(q, V) {
						return new x().fromJsonString(q, V);
					}
					static equals(q, V) {
						return t.proto3.util.equals(x, q, V);
					}
				}
				e.$G_ = x;
			},
		)
