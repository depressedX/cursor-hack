import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './utils_pb.js';
define(de[1110], he([1, 0, 86, 83]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*utils_pb*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$eD =
					e.$dD =
					e.$cD =
					e.$bD =
					e.$aD =
					e.$_C =
					e.$$C =
					e.$0C =
					e.$9C =
					e.$8C =
					e.$7C =
					e.$6C =
					e.$5C =
					e.$4C =
					e.$3C =
					e.$2C =
					e.$1C =
					e.$ZC =
					e.LintGenerator =
					e.LintDiscriminator =
						void 0);
			var w;
			(function (v) {
				(v[(v.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(v[(v.SPECIFIC_RULES = 1)] = "SPECIFIC_RULES"),
					(v[(v.COMPILE_ERRORS = 2)] = "COMPILE_ERRORS"),
					(v[(v.CHANGE_BEHAVIOR = 3)] = "CHANGE_BEHAVIOR"),
					(v[(v.RELEVANCE = 5)] = "RELEVANCE"),
					(v[(v.USER_AWARENESS = 6)] = "USER_AWARENESS"),
					(v[(v.CORRECTNESS = 7)] = "CORRECTNESS"),
					(v[(v.CHUNKING = 8)] = "CHUNKING"),
					(v[(v.TYPO = 9)] = "TYPO"),
					(v[(v.CONFIDENCE = 10)] = "CONFIDENCE"),
					(v[(v.DISMISSED_BUGS = 11)] = "DISMISSED_BUGS");
			})(w || (e.LintDiscriminator = w = {})),
				t.proto3.util.setEnumType(w, "aiserver.v1.LintDiscriminator", [
					{ no: 0, name: "LINT_DISCRIMINATOR_UNSPECIFIED" },
					{ no: 1, name: "LINT_DISCRIMINATOR_SPECIFIC_RULES" },
					{ no: 2, name: "LINT_DISCRIMINATOR_COMPILE_ERRORS" },
					{ no: 3, name: "LINT_DISCRIMINATOR_CHANGE_BEHAVIOR" },
					{ no: 5, name: "LINT_DISCRIMINATOR_RELEVANCE" },
					{ no: 6, name: "LINT_DISCRIMINATOR_USER_AWARENESS" },
					{ no: 7, name: "LINT_DISCRIMINATOR_CORRECTNESS" },
					{ no: 8, name: "LINT_DISCRIMINATOR_CHUNKING" },
					{ no: 9, name: "LINT_DISCRIMINATOR_TYPO" },
					{ no: 10, name: "LINT_DISCRIMINATOR_CONFIDENCE" },
					{ no: 11, name: "LINT_DISCRIMINATOR_DISMISSED_BUGS" },
				]);
			var E;
			(function (v) {
				(v[(v.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(v[(v.NAIVE = 1)] = "NAIVE"),
					(v[(v.COMMENT_PIPELINE = 2)] = "COMMENT_PIPELINE"),
					(v[(v.SIMPLE_BUG = 3)] = "SIMPLE_BUG"),
					(v[(v.SIMPLE_LINT_RULES = 4)] = "SIMPLE_LINT_RULES");
			})(E || (e.LintGenerator = E = {})),
				t.proto3.util.setEnumType(E, "aiserver.v1.LintGenerator", [
					{ no: 0, name: "LINT_GENERATOR_UNSPECIFIED" },
					{ no: 1, name: "LINT_GENERATOR_NAIVE" },
					{ no: 2, name: "LINT_GENERATOR_COMMENT_PIPELINE" },
					{ no: 3, name: "LINT_GENERATOR_SIMPLE_BUG" },
					{ no: 4, name: "LINT_GENERATOR_SIMPLE_LINT_RULES" },
				]);
			class C extends t.Message {
				constructor(S) {
					super(),
						(this.relativeFilePath = ""),
						(this.lineSelection = ""),
						(this.tokenStartIndex = 0),
						(this.tokenEndIndex = 0),
						(this.likelyAlternateToken = ""),
						(this.lineChunkIndexZeroBased = 0),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintExplanationRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_file_path", kind: "scalar", T: 9 },
						{ no: 2, name: "chunk", kind: "message", T: r },
						{ no: 3, name: "line_selection", kind: "scalar", T: 9 },
						{ no: 4, name: "token_start_index", kind: "scalar", T: 5 },
						{ no: 5, name: "token_end_index", kind: "scalar", T: 5 },
						{ no: 6, name: "likely_alternate_token", kind: "scalar", T: 9 },
						{
							no: 7,
							name: "line_chunk_index_zero_based",
							kind: "scalar",
							T: 5,
						},
					]);
				}
				static fromBinary(S, I) {
					return new C().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new C().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new C().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(C, S, I);
				}
			}
			e.$ZC = C;
			class d extends t.Message {
				constructor(S) {
					super(), (this.explanation = ""), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintExplanationResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "explanation", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(S, I) {
					return new d().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new d().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new d().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(d, S, I);
				}
			}
			e.$1C = d;
			class m extends t.Message {
				constructor(S) {
					super(),
						(this.origLine = ""),
						(this.newLine = ""),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintExplanationResponse2";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "orig_line", kind: "scalar", T: 9 },
						{ no: 2, name: "new_line", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(S, I) {
					return new m().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new m().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new m().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(m, S, I);
				}
			}
			e.$2C = m;
			class r extends t.Message {
				constructor(S) {
					super(),
						(this.chunkContents = ""),
						(this.startLineNumber = 0),
						(this.numRemainingLines = 0),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintChunk";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 2, name: "chunk_contents", kind: "scalar", T: 9 },
						{ no: 3, name: "start_line_number", kind: "scalar", T: 5 },
						{ no: 4, name: "num_remaining_lines", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(S, I) {
					return new r().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new r().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new r().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(r, S, I);
				}
			}
			e.$3C = r;
			class u extends t.Message {
				constructor(S) {
					super(),
						(this.relativeFilePath = ""),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintChunkRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_file_path", kind: "scalar", T: 9 },
						{ no: 2, name: "chunk", kind: "message", T: r },
						{
							no: 3,
							name: "use_speculative_linter",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
					]);
				}
				static fromBinary(S, I) {
					return new u().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new u().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new u().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(u, S, I);
				}
			}
			e.$4C = u;
			class a extends t.Message {
				constructor(S) {
					super(), (this.chunkTokens = []), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintChunkResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "chunk_tokens",
							kind: "message",
							T: p,
							repeated: !0,
						},
					]);
				}
				static fromBinary(S, I) {
					return new a().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new a().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new a().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(a, S, I);
				}
			}
			e.$5C = a;
			class h extends t.Message {
				constructor(S) {
					super(),
						(this.relativeFilePath = ""),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintFimChunkRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_file_path", kind: "scalar", T: 9 },
						{ no: 2, name: "prefix", kind: "message", T: r },
						{ no: 3, name: "suffix", kind: "message", T: r },
						{ no: 4, name: "middle", kind: "message", T: r },
					]);
				}
				static fromBinary(S, I) {
					return new h().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new h().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new h().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(h, S, I);
				}
			}
			e.$6C = h;
			class c extends t.Message {
				constructor(S) {
					super(),
						(this.middleChunkTokens = []),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintFimChunkResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "middle_chunk_tokens",
							kind: "message",
							T: p,
							repeated: !0,
						},
					]);
				}
				static fromBinary(S, I) {
					return new c().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new c().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new c().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(c, S, I);
				}
			}
			e.$7C = c;
			class n extends t.Message {
				constructor(S) {
					super(),
						(this.relativeFilePath = ""),
						(this.fileContents = ""),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintFileRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_file_path", kind: "scalar", T: 9 },
						{ no: 2, name: "file_contents", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(S, I) {
					return new n().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new n().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new n().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(n, S, I);
				}
			}
			e.$8C = n;
			class g extends t.Message {
				constructor(S) {
					super(),
						(this.token = ""),
						(this.logProbability = 0),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.TokensWithLogprobs";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "token", kind: "scalar", T: 9 },
						{ no: 2, name: "log_probability", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(S, I) {
					return new g().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new g().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new g().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(g, S, I);
				}
			}
			e.$9C = g;
			class p extends t.Message {
				constructor(S) {
					super(),
						(this.tokensWithLogprobs = []),
						(this.actualToken = ""),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.TokenIndex";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "tokens_with_logprobs",
							kind: "message",
							T: g,
							repeated: !0,
						},
						{ no: 2, name: "actual_token", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(S, I) {
					return new p().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new p().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new p().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(p, S, I);
				}
			}
			e.$0C = p;
			class o extends t.Message {
				constructor(S) {
					super(), (this.tokens = []), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintFileResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "tokens", kind: "message", T: p, repeated: !0 },
					]);
				}
				static fromBinary(S, I) {
					return new o().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new o().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new o().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(o, S, I);
				}
			}
			e.$$C = o;
			class f extends t.Message {
				constructor(S) {
					super(),
						(this.discriminator = w.UNSPECIFIED),
						(this.allow = !1),
						(this.reasoning = ""),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LintDiscriminatorResult";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "discriminator",
							kind: "enum",
							T: t.proto3.getEnumType(w),
						},
						{ no: 2, name: "allow", kind: "scalar", T: 8 },
						{ no: 3, name: "reasoning", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(S, I) {
					return new f().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new f().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new f().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(f, S, I);
				}
			}
			e.$_C = f;
			class b extends t.Message {
				constructor(S) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.uuid = ""),
						(this.message = ""),
						(this.replaceText = ""),
						(this.replaceInitialText = ""),
						(this.reevaluateInitialText = ""),
						(this.generator = E.UNSPECIFIED),
						(this.discriminatorResults = []),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiLintBug";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 8, name: "uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "message", kind: "scalar", T: 9 },
						{ no: 3, name: "replace_range", kind: "message", T: i.$Fs },
						{ no: 4, name: "replace_text", kind: "scalar", T: 9 },
						{ no: 5, name: "replace_initial_text", kind: "scalar", T: 9 },
						{ no: 6, name: "reevaluate_range", kind: "message", T: i.$Fs },
						{ no: 7, name: "reevaluate_initial_text", kind: "scalar", T: 9 },
						{
							no: 9,
							name: "generator",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 10,
							name: "discriminator_results",
							kind: "message",
							T: f,
							repeated: !0,
						},
						{ no: 11, name: "logprobs_payload", kind: "message", T: s },
					]);
				}
				static fromBinary(S, I) {
					return new b().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new b().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new b().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(b, S, I);
				}
			}
			e.$aD = b;
			class s extends t.Message {
				constructor(S) {
					super(),
						(this.chunk = ""),
						(this.problematicLine = ""),
						(this.startCol = 0),
						(this.endCol = 0),
						(this.mostLikelyReplace = ""),
						(this.lineChunkIndexZeroBased = 0),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LogprobsLintPayload";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "chunk", kind: "scalar", T: 9 },
						{ no: 2, name: "problematic_line", kind: "scalar", T: 9 },
						{ no: 3, name: "start_col", kind: "scalar", T: 5 },
						{ no: 4, name: "end_col", kind: "scalar", T: 5 },
						{ no: 5, name: "most_likely_replace", kind: "scalar", T: 9 },
						{
							no: 6,
							name: "line_chunk_index_zero_based",
							kind: "scalar",
							T: 5,
						},
					]);
				}
				static fromBinary(S, I) {
					return new s().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new s().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new s().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(s, S, I);
				}
			}
			e.$bD = s;
			class l extends t.Message {
				constructor(S) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.uuid = ""),
						(this.message = ""),
						(this.lineNumber = 0),
						(this.reevaluateInitialText = ""),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiLintInlineSuggestion";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 8, name: "uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "message", kind: "scalar", T: 9 },
						{ no: 3, name: "line_number", kind: "scalar", T: 5 },
						{ no: 4, name: "reevaluate_range", kind: "message", T: i.$Fs },
						{ no: 5, name: "reevaluate_initial_text", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(S, I) {
					return new l().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new l().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new l().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(l, S, I);
				}
			}
			e.$cD = l;
			class y extends t.Message {
				constructor(S) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.uuid = ""),
						(this.message = ""),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiLintOutOfFlowSuggestion";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 8, name: "uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "message", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(S, I) {
					return new y().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new y().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new y().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(y, S, I);
				}
			}
			e.$dD = y;
			class $ extends t.Message {
				constructor(S) {
					super(), (this.text = ""), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiLintRule";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "text", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(S, I) {
					return new $().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new $().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new $().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals($, S, I);
				}
			}
			e.$eD = $;
		})
