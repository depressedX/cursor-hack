import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './utils_pb.js';
define(de[167], he([1, 0, 86, 83]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*utils_pb*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$eA =
					e.$dA =
					e.$cA =
					e.$bA =
					e.$aA =
					e.$_z =
					e.$$z =
					e.$0z =
					e.$9z =
					e.$8z =
					e.$7z =
					e.$6z =
					e.$5z =
					e.$4z =
					e.$3z =
					e.$2z =
					e.ComposerCapabilityRequest_ToolType =
					e.ComposerCapabilityRequest_ComposerCapabilityType =
					e.$1z =
						void 0);
			class w extends t.Message {
				constructor(v) {
					super(),
						(this.type = E.UNSPECIFIED),
						(this.data = { case: void 0 }),
						t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ComposerCapabilityRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "type", kind: "enum", T: t.proto3.getEnumType(E) },
						{
							no: 2,
							name: "loop_on_lints",
							kind: "message",
							T: r,
							oneof: "data",
						},
						{
							no: 3,
							name: "loop_on_tests",
							kind: "message",
							T: u,
							oneof: "data",
						},
						{
							no: 4,
							name: "mega_planner",
							kind: "message",
							T: a,
							oneof: "data",
						},
						{
							no: 5,
							name: "loop_on_command",
							kind: "message",
							T: h,
							oneof: "data",
						},
						{ no: 6, name: "tool_call", kind: "message", T: c, oneof: "data" },
						{
							no: 7,
							name: "diff_review",
							kind: "message",
							T: n,
							oneof: "data",
						},
						{
							no: 8,
							name: "context_picking",
							kind: "message",
							T: f,
							oneof: "data",
						},
						{ no: 9, name: "edit_trail", kind: "message", T: b, oneof: "data" },
						{
							no: 10,
							name: "auto_context",
							kind: "message",
							T: s,
							oneof: "data",
						},
						{
							no: 11,
							name: "context_planner",
							kind: "message",
							T: l,
							oneof: "data",
						},
						{
							no: 12,
							name: "remember_this",
							kind: "message",
							T: y,
							oneof: "data",
						},
						{
							no: 13,
							name: "decomposer",
							kind: "message",
							T: o,
							oneof: "data",
						},
					]);
				}
				static fromBinary(v, S) {
					return new w().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new w().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new w().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(w, v, S);
				}
			}
			e.$1z = w;
			var E;
			(function ($) {
				($[($.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					($[($.LOOP_ON_LINTS = 1)] = "LOOP_ON_LINTS"),
					($[($.LOOP_ON_TESTS = 2)] = "LOOP_ON_TESTS"),
					($[($.MEGA_PLANNER = 3)] = "MEGA_PLANNER"),
					($[($.LOOP_ON_COMMAND = 4)] = "LOOP_ON_COMMAND"),
					($[($.TOOL_CALL = 5)] = "TOOL_CALL"),
					($[($.DIFF_REVIEW = 6)] = "DIFF_REVIEW"),
					($[($.CONTEXT_PICKING = 7)] = "CONTEXT_PICKING"),
					($[($.EDIT_TRAIL = 8)] = "EDIT_TRAIL"),
					($[($.AUTO_CONTEXT = 9)] = "AUTO_CONTEXT"),
					($[($.CONTEXT_PLANNER = 10)] = "CONTEXT_PLANNER"),
					($[($.DIFF_HISTORY = 11)] = "DIFF_HISTORY"),
					($[($.REMEMBER_THIS = 12)] = "REMEMBER_THIS"),
					($[($.DECOMPOSER = 13)] = "DECOMPOSER"),
					($[($.USES_CODEBASE = 14)] = "USES_CODEBASE"),
					($[($.TOOL_FORMER = 15)] = "TOOL_FORMER");
			})(E || (e.ComposerCapabilityRequest_ComposerCapabilityType = E = {})),
				t.proto3.util.setEnumType(
					E,
					"aiserver.v1.ComposerCapabilityRequest.ComposerCapabilityType",
					[
						{ no: 0, name: "COMPOSER_CAPABILITY_TYPE_UNSPECIFIED" },
						{ no: 1, name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_LINTS" },
						{ no: 2, name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_TESTS" },
						{ no: 3, name: "COMPOSER_CAPABILITY_TYPE_MEGA_PLANNER" },
						{ no: 4, name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_COMMAND" },
						{ no: 5, name: "COMPOSER_CAPABILITY_TYPE_TOOL_CALL" },
						{ no: 6, name: "COMPOSER_CAPABILITY_TYPE_DIFF_REVIEW" },
						{ no: 7, name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_PICKING" },
						{ no: 8, name: "COMPOSER_CAPABILITY_TYPE_EDIT_TRAIL" },
						{ no: 9, name: "COMPOSER_CAPABILITY_TYPE_AUTO_CONTEXT" },
						{ no: 10, name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_PLANNER" },
						{ no: 11, name: "COMPOSER_CAPABILITY_TYPE_DIFF_HISTORY" },
						{ no: 12, name: "COMPOSER_CAPABILITY_TYPE_REMEMBER_THIS" },
						{ no: 13, name: "COMPOSER_CAPABILITY_TYPE_DECOMPOSER" },
						{ no: 14, name: "COMPOSER_CAPABILITY_TYPE_USES_CODEBASE" },
						{ no: 15, name: "COMPOSER_CAPABILITY_TYPE_TOOL_FORMER" },
					],
				);
			var C;
			(function ($) {
				($[($.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					($[($.ADD_FILE_TO_CONTEXT = 1)] = "ADD_FILE_TO_CONTEXT"),
					($[($.RUN_TERMINAL_COMMAND = 2)] = "RUN_TERMINAL_COMMAND"),
					($[($.ITERATE = 3)] = "ITERATE"),
					($[($.REMOVE_FILE_FROM_CONTEXT = 4)] = "REMOVE_FILE_FROM_CONTEXT"),
					($[($.SEMANTIC_SEARCH_CODEBASE = 5)] = "SEMANTIC_SEARCH_CODEBASE");
			})(C || (e.ComposerCapabilityRequest_ToolType = C = {})),
				t.proto3.util.setEnumType(
					C,
					"aiserver.v1.ComposerCapabilityRequest.ToolType",
					[
						{ no: 0, name: "TOOL_TYPE_UNSPECIFIED" },
						{ no: 1, name: "TOOL_TYPE_ADD_FILE_TO_CONTEXT" },
						{ no: 2, name: "TOOL_TYPE_RUN_TERMINAL_COMMAND" },
						{ no: 3, name: "TOOL_TYPE_ITERATE" },
						{ no: 4, name: "TOOL_TYPE_REMOVE_FILE_FROM_CONTEXT" },
						{ no: 5, name: "TOOL_TYPE_SEMANTIC_SEARCH_CODEBASE" },
					],
				);
			class d extends t.Message {
				constructor(v) {
					super(),
						(this.type = C.UNSPECIFIED),
						(this.name = ""),
						(this.properties = {}),
						(this.required = []),
						t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ComposerCapabilityRequest.ToolSchema";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "type", kind: "enum", T: t.proto3.getEnumType(C) },
						{ no: 2, name: "name", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "properties",
							kind: "map",
							K: 9,
							V: { kind: "message", T: m },
						},
						{ no: 4, name: "required", kind: "scalar", T: 9, repeated: !0 },
					]);
				}
				static fromBinary(v, S) {
					return new d().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new d().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new d().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(d, v, S);
				}
			}
			e.$2z = d;
			class m extends t.Message {
				constructor(v) {
					super(), (this.type = ""), t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.SchemaProperty";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "type", kind: "scalar", T: 9 },
						{ no: 2, name: "description", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(v, S) {
					return new m().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new m().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new m().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(m, v, S);
				}
			}
			e.$3z = m;
			class r extends t.Message {
				constructor(v) {
					super(), (this.linterErrors = []), t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.LoopOnLintsCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "linter_errors",
							kind: "message",
							T: i.$4s,
							repeated: !0,
						},
						{
							no: 2,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
					]);
				}
				static fromBinary(v, S) {
					return new r().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new r().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new r().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(r, v, S);
				}
			}
			e.$4z = r;
			class u extends t.Message {
				constructor(v) {
					super(), (this.testNames = []), t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.LoopOnTestsCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "test_names", kind: "scalar", T: 9, repeated: !0 },
						{
							no: 2,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
					]);
				}
				static fromBinary(v, S) {
					return new u().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new u().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new u().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(u, v, S);
				}
			}
			e.$5z = u;
			class a extends t.Message {
				constructor(v) {
					super(), t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.MegaPlannerCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
					]);
				}
				static fromBinary(v, S) {
					return new a().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new a().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new a().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(a, v, S);
				}
			}
			e.$6z = a;
			class h extends t.Message {
				constructor(v) {
					super(), (this.command = ""), t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.LoopOnCommandCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "command", kind: "scalar", T: 9 },
						{
							no: 2,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{ no: 3, name: "output", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "exit_code", kind: "scalar", T: 5, opt: !0 },
					]);
				}
				static fromBinary(v, S) {
					return new h().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new h().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new h().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(h, v, S);
				}
			}
			e.$7z = h;
			class c extends t.Message {
				constructor(v) {
					super(),
						(this.toolSchemas = []),
						(this.relevantFiles = []),
						(this.filesInContext = []),
						(this.semanticSearchFiles = []),
						t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.ToolCallCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{
							no: 2,
							name: "tool_schemas",
							kind: "message",
							T: d,
							repeated: !0,
						},
						{
							no: 3,
							name: "relevant_files",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{
							no: 4,
							name: "files_in_context",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{
							no: 5,
							name: "semantic_search_files",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
					]);
				}
				static fromBinary(v, S) {
					return new c().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new c().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new c().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(c, v, S);
				}
			}
			e.$8z = c;
			class n extends t.Message {
				constructor(v) {
					super(), (this.diffs = []), t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{ no: 2, name: "diffs", kind: "message", T: g, repeated: !0 },
					]);
				}
				static fromBinary(v, S) {
					return new n().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new n().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new n().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(n, v, S);
				}
			}
			e.$9z = n;
			class g extends t.Message {
				constructor(v) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.chunks = []),
						t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 3, name: "chunks", kind: "message", T: p, repeated: !0 },
					]);
				}
				static fromBinary(v, S) {
					return new g().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new g().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new g().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(g, v, S);
				}
			}
			e.$0z = g;
			class p extends t.Message {
				constructor(v) {
					super(),
						(this.oldLines = []),
						(this.newLines = []),
						t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff.Chunk";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "old_lines", kind: "scalar", T: 9, repeated: !0 },
						{ no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: !0 },
						{ no: 3, name: "old_range", kind: "message", T: i.$Ms },
						{ no: 4, name: "new_range", kind: "message", T: i.$Ms },
					]);
				}
				static fromBinary(v, S) {
					return new p().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new p().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new p().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(p, v, S);
				}
			}
			e.$$z = p;
			class o extends t.Message {
				constructor(v) {
					super(), t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.DecomposerCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
					]);
				}
				static fromBinary(v, S) {
					return new o().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new o().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new o().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(o, v, S);
				}
			}
			e.$_z = o;
			class f extends t.Message {
				constructor(v) {
					super(),
						(this.potentialContextFiles = []),
						(this.potentialContextCodeChunks = []),
						(this.filesInContext = []),
						t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.ContextPickingCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{
							no: 2,
							name: "potential_context_files",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{
							no: 3,
							name: "potential_context_code_chunks",
							kind: "message",
							T: i.$pt,
							repeated: !0,
						},
						{
							no: 4,
							name: "files_in_context",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
					]);
				}
				static fromBinary(v, S) {
					return new f().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new f().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new f().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(f, v, S);
				}
			}
			e.$aA = f;
			class b extends t.Message {
				constructor(v) {
					super(), t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.EditTrailCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
					]);
				}
				static fromBinary(v, S) {
					return new b().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new b().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new b().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(b, v, S);
				}
			}
			e.$bA = b;
			class s extends t.Message {
				constructor(v) {
					super(),
						(this.additionalFiles = []),
						t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.AutoContextCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{
							no: 2,
							name: "additional_files",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
					]);
				}
				static fromBinary(v, S) {
					return new s().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new s().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new s().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(s, v, S);
				}
			}
			e.$cA = s;
			class l extends t.Message {
				constructor(v) {
					super(),
						(this.attachedCodeChunks = []),
						t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.ContextPlannerCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{
							no: 2,
							name: "attached_code_chunks",
							kind: "message",
							T: i.$pt,
							repeated: !0,
						},
					]);
				}
				static fromBinary(v, S) {
					return new l().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new l().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new l().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(l, v, S);
				}
			}
			e.$dA = l;
			class y extends t.Message {
				constructor(v) {
					super(), (this.memory = ""), t.proto3.util.initPartial(v, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.ComposerCapabilityRequest.RememberThisCapability";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "custom_instructions",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{ no: 2, name: "memory", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(v, S) {
					return new y().fromBinary(v, S);
				}
				static fromJson(v, S) {
					return new y().fromJson(v, S);
				}
				static fromJsonString(v, S) {
					return new y().fromJsonString(v, S);
				}
				static equals(v, S) {
					return t.proto3.util.equals(y, v, S);
				}
			}
			e.$eA = y;
		}),
		