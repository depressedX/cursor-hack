import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './tools_pb.js';
import './utils_pb.js';
import './bugbot_pb.js';
import './chat_pb.js';
import './cpp_pb.js';
import './lsp_subgraph_pb.js';
import './filesyncserver_pb.js';
import './cmdk_pb.js';
import './repository_pb.js';
import './docs_pb.js';
import './fastapply_pb.js';
import './lint_pb.js';
import './context_ast_pb.js';
import './usage_pb.js';
import './interface_agent_pb.js';
define(
			de[148],
			he([
				1, 0, 86, 124, 83, 642, 126, 367, 1477, 1483, 644, 272, 892, 581, 1110,
				1472, 1480, 1476,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*tools_pb*/,
 w /*utils_pb*/,
 E /*bugbot_pb*/,
 C /*chat_pb*/,
 d /*cpp_pb*/,
 m /*lsp_subgraph_pb*/,
 r /*filesyncserver_pb*/,
 u /*cmdk_pb*/,
 a /*repository_pb*/,
 h /*docs_pb*/,
 c /*fastapply_pb*/,
 n /*lint_pb*/,
 g /*context_ast_pb*/,
 p /*usage_pb*/,
 o /*interface_agent_pb*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nJ =
						e.$mJ =
						e.$lJ =
						e.$kJ =
						e.$jJ =
						e.$iJ =
						e.$hJ =
						e.$gJ =
						e.$fJ =
						e.$eJ =
						e.$dJ =
						e.$cJ =
						e.$bJ =
						e.$aJ =
						e.$_I =
						e.ReportCmdKFateRequest_Fate =
						e.$$I =
						e.$0I =
						e.$9I =
						e.$8I =
						e.$7I =
						e.$6I =
						e.$5I =
						e.$4I =
						e.$3I =
						e.$2I =
						e.$1I =
						e.$ZI =
						e.$YI =
						e.$XI =
						e.$WI =
						e.$VI =
						e.$UI =
						e.$TI =
						e.$SI =
						e.ReportBugRequest_BugType =
						e.$RI =
						e.$QI =
						e.$PI =
						e.$OI =
						e.ReportFeedbackRequest_FeedbackType =
						e.$NI =
						e.$MI =
						e.$LI =
						e.$KI =
						e.$JI =
						e.$II =
						e.$HI =
						e.$GI =
						e.$FI =
						e.$EI =
						e.$DI =
						e.$CI =
						e.$BI =
						e.$AI =
						e.$zI =
						e.$yI =
						e.$xI =
						e.$wI =
						e.$vI =
						e.$uI =
						e.$tI =
						e.$sI =
						e.$rI =
						e.$qI =
						e.$pI =
						e.$oI =
						e.$nI =
						e.$mI =
						e.$lI =
						e.$kI =
						e.$jI =
						e.$iI =
						e.$hI =
						e.$gI =
						e.$fI =
						e.$eI =
						e.$dI =
						e.$cI =
						e.$bI =
						e.$aI =
						e.$_H =
						e.$$H =
						e.$0H =
						e.$9H =
						e.$8H =
						e.$7H =
						e.$6H =
						e.$5H =
						e.$4H =
						e.$3H =
						e.$2H =
						e.$1H =
						e.$ZH =
						e.$YH =
						e.$XH =
						e.$WH =
						e.$VH =
						e.$UH =
						e.$TH =
						e.$SH =
						e.$RH =
						e.$QH =
						e.$PH =
						e.$OH =
						e.$NH =
						e.$MH =
						e.$LH =
						e.$KH =
						e.$JH =
						e.$IH =
						e.$HH =
						e.$GH =
						e.$FH =
						e.$EH =
						e.$DH =
						e.$CH =
						e.GetEvaluationPromptRequest_RerankingStrategy =
						e.GetEvaluationPromptRequest_EvaluationPromptType =
						e.$BH =
						e.$AH =
						e.$zH =
						e.$yH =
						e.$xH =
						e.$wH =
						e.$vH =
						e.$uH =
						e.$tH =
						e.$sH =
						e.$rH =
						e.$qH =
						e.$pH =
						e.$oH =
						e.$nH =
						e.$mH =
						e.$lH =
						e.$kH =
						e.$jH =
						e.$iH =
						e.$hH =
						e.$gH =
						e.$fH =
						e.$eH =
						e.$dH =
						e.$cH =
						e.$bH =
						e.$aH =
						e.$_G =
						e.$$G =
						e.$0G =
						e.$9G =
						e.$8G =
						e.$7G =
						e.$6G =
						e.$5G =
						e.$4G =
						e.$3G =
						e.$2G =
						e.$1G =
						e.CppConfigResponse_Heuristic =
						e.$ZG =
						e.$YG =
						e.$XG =
						e.$WG =
						e.$VG =
						e.$UG =
						e.$TG =
						e.$SG =
						e.$RG =
						e.StreamCppRequest_ControlToken =
						e.$QG =
						e.$PG =
						e.$OG =
						e.$NG =
						e.$MG =
						e.$LG =
						e.$KG =
						e.$JG =
						e.LogLinterExplicitUserFeedbackRequest_LinterUserFeedback =
						e.$IG =
						e.$HG =
						e.$GG =
						e.$FG =
						e.$EG =
						e.$DG =
						e.$CG =
						e.$BG =
						e.$AG =
						e.$zG =
						e.$yG =
						e.$xG =
						e.$wG =
						e.$vG =
						e.$uG =
						e.$tG =
						e.$sG =
						e.$rG =
						e.$qG =
						e.SlashEditRequest_FastApplyModelType =
						e.$pG =
						e.$oG =
						e.$nG =
						e.$mG =
						e.$lG =
						e.ReviewChatMessage_ReviewChatMessageType =
						e.$kG =
						e.$jG =
						e.$iG =
						e.$hG =
						e.$gG =
						e.$fG =
						e.HealthCheckResponse_Status =
						e.$eG =
						e.$dG =
						e.$cG =
						e.$bG =
						e.$aG =
						e.$_F =
						e.$$F =
						e.$0F =
						e.$9F =
						e.$8F =
						e.$7F =
						e.$6F =
						e.$5F =
						e.$4F =
						e.$3F =
						e.$2F =
						e.$1F =
						e.$ZF =
						e.$YF =
						e.$XF =
						e.$WF =
						e.$VF =
						e.$UF =
						e.$TF =
						e.$SF =
						e.$RF =
						e.$QF =
						e.$PF =
						e.$OF =
						e.$NF =
						e.$MF =
						e.$LF =
						e.$KF =
						e.$JF =
						e.$IF =
						e.$HF =
						e.$GF =
						e.$FF =
						e.$EF =
						e.$DF =
						e.ModelQueryRequest_QueryType =
						e.$CF =
						e.$BF =
						e.$AF =
						e.$zF =
						e.$yF =
						e.$xF =
						e.$wF =
						e.$vF =
						e.$uF =
						e.$tF =
						e.$sF =
						e.$rF =
						e.$qF =
						e.$pF =
						e.$oF =
						e.$nF =
						e.$mF =
						e.$lF =
						e.$kF =
						e.$jF =
						e.$iF =
						e.$hF =
						e.$gF =
						e.$fF =
						e.$eF =
						e.$dF =
						e.$cF =
						e.$bF =
						e.$aF =
						e.$_E =
						e.$$E =
						e.$0E =
						e.ReportGenerationFeedbackRequest_FeedbackType =
						e.$9E =
						e.$8E =
						e.$7E =
						e.$6E =
						e.$5E =
						e.$4E =
						e.$3E =
						e.$2E =
						e.$1E =
						e.$ZE =
						e.$YE =
						e.$XE =
						e.$WE =
						e.$VE =
						e.$UE =
						e.$TE =
						e.$SE =
						e.$RE =
						e.$QE =
						e.$PE =
						e.$OE =
						e.$NE =
						e.$ME =
						e.$LE =
						e.$KE =
						e.$JE =
						e.$IE =
						e.$HE =
						e.$GE =
						e.$FE =
						e.$EE =
						e.$DE =
						e.$CE =
						e.$BE =
						e.$AE =
						e.$zE =
						e.$yE =
						e.$xE =
						e.$wE =
						e.$vE =
						e.$uE =
						e.BackgroundCmdKEvalRequest_Experiment =
						e.$tE =
						e.$sE =
						e.$rE =
						e.$qE =
						e.$pE =
						e.$oE =
						e.$nE =
						e.$mE =
						e.$lE =
						e.$kE =
						e.BackgroundCmdKRequest_Type =
						e.$jE =
						e.$iE =
						e.$hE =
						e.$gE =
						e.$fE =
						e.$eE =
						e.$dE =
						e.HeuristicsSelection_HeuristicsSelectionType =
						e.$cE =
						e.$bE =
						e.$aE =
						e.$_D =
						e.$$D =
						e.$0D =
						e.$9D =
						e.$8D =
						e.$7D =
						e.$6D =
						e.$5D =
						e.$4D =
						e.$3D =
						e.$2D =
						e.$1D =
						e.$ZD =
						e.$YD =
						e.$XD =
						e.$WD =
						e.$VD =
						e.$UD =
						e.$TD =
						e.$SD =
						e.BugBotStatus_Status =
						e.$RD =
						e.$QD =
						e.$PD =
						e.$OD =
						e.$ND =
						e.$MD =
						e.$LD =
						e.$KD =
						e.$JD =
						e.$ID =
						e.$HD =
						e.$GD =
						e.$FD =
						e.$ED =
						e.$DD =
						e.$CD =
						e.TaskStatus =
							void 0);
				var f;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.RUNNING = 1)] = "RUNNING"),
						(Bi[(Bi.PAUSED = 2)] = "PAUSED"),
						(Bi[(Bi.DONE = 3)] = "DONE"),
						(Bi[(Bi.NOT_STARTED = 4)] = "NOT_STARTED");
				})(f || (e.TaskStatus = f = {})),
					t.proto3.util.setEnumType(f, "aiserver.v1.TaskStatus", [
						{ no: 0, name: "TASK_STATUS_UNSPECIFIED" },
						{ no: 1, name: "TASK_STATUS_RUNNING" },
						{ no: 2, name: "TASK_STATUS_PAUSED" },
						{ no: 3, name: "TASK_STATUS_DONE" },
						{ no: 4, name: "TASK_STATUS_NOT_STARTED" },
					]);
				class b extends t.Message {
					constructor(we) {
						super(),
							(this.terminalContent = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.IsTerminalFinishedRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "terminal_content", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new b().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new b().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new b().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(b, we, Pe);
					}
				}
				e.$CD = b;
				class s extends t.Message {
					constructor(we) {
						super(),
							(this.isFinished = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.IsTerminalFinishedResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "is_finished", kind: "scalar", T: 8 },
							{ no: 2, name: "reason", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new s().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new s().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new s().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(s, we, Pe);
					}
				}
				e.$DD = s;
				class l extends t.Message {
					constructor(we) {
						super(),
							(this.isFinished = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.IsTerminalFinishedResponseV2";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "is_finished", kind: "scalar", T: 8 },
							{
								no: 2,
								name: "ended_reason",
								kind: "enum",
								T: t.proto3.getEnumType(i.RunTerminalCommandEndedReason),
								opt: !0,
							},
							{ no: 3, name: "exit_code", kind: "scalar", T: 5, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new l().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new l().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new l().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(l, we, Pe);
					}
				}
				e.$ED = l;
				class y extends t.Message {
					constructor(we) {
						super(), (this.message = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TestBidiRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "message", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new y().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new y().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new y().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(y, we, Pe);
					}
				}
				e.$FD = y;
				class $ extends t.Message {
					constructor(we) {
						super(), (this.message = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TestBidiResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "message", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new $().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new $().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new $().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals($, we, Pe);
					}
				}
				e.$GD = $;
				class v extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.fileContent = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AutoContextFile";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "file_content", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new v().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new v().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new v().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(v, we, Pe);
					}
				}
				e.$HD = v;
				class S extends t.Message {
					constructor(we) {
						super(),
							(this.text = ""),
							(this.candidateFiles = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AutoContextRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "candidate_files",
								kind: "message",
								T: v,
								repeated: !0,
							},
							{ no: 3, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new S().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new S().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new S().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(S, we, Pe);
					}
				}
				e.$ID = S;
				class I extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.rerankingScore = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AutoContextRankedFile";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "reranking_score", kind: "scalar", T: 2 },
						]);
					}
					static fromBinary(we, Pe) {
						return new I().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new I().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new I().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(I, we, Pe);
					}
				}
				e.$JD = I;
				class T extends t.Message {
					constructor(we) {
						super(),
							(this.rankedFiles = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AutoContextResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "ranked_files",
								kind: "message",
								T: I,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new T().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new T().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new T().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(T, we, Pe);
					}
				}
				e.$KD = T;
				class P extends t.Message {
					constructor(we) {
						super(),
							(this.diffCharLen = 0),
							(this.iterations = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckBugBotPriceRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "diff_char_len", kind: "scalar", T: 5 },
							{ no: 2, name: "iterations", kind: "scalar", T: 5 },
							{ no: 3, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 4, name: "session_id", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new P().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new P().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new P().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(P, we, Pe);
					}
				}
				e.$LD = P;
				class k extends t.Message {
					constructor(we) {
						super(),
							(this.cost = 0),
							(this.priceId = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckBugBotPriceResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "cost", kind: "scalar", T: 1 },
							{ no: 2, name: "price_id", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new k().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new k().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new k().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(k, we, Pe);
					}
				}
				e.$MD = k;
				class L extends t.Message {
					constructor(we) {
						super(), (this.sessionId = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckBugBotTelemetryHealthyRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "session_id", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new L().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new L().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new L().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(L, we, Pe);
					}
				}
				e.$ND = L;
				class D extends t.Message {
					constructor(we) {
						super(), (this.isHealthy = !1), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckBugBotTelemetryHealthyResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "is_healthy", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new D().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new D().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new D().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(D, we, Pe);
					}
				}
				e.$OD = D;
				class M extends t.Message {
					constructor(we) {
						super(),
							(this.diffCharLen = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetSuggestedBugBotIterationsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "diff_char_len", kind: "scalar", T: 5 },
							{ no: 2, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new M().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new M().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new M().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(M, we, Pe);
					}
				}
				e.$PD = M;
				class N extends t.Message {
					constructor(we) {
						super(), (this.iterations = 0), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetSuggestedBugBotIterationsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "iterations", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new N().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new N().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new N().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(N, we, Pe);
					}
				}
				e.$QD = N;
				class A extends t.Message {
					constructor(we) {
						super(),
							(this.status = R.UNSPECIFIED),
							(this.message = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BugBotStatus";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "status",
								kind: "enum",
								T: t.proto3.getEnumType(R),
							},
							{ no: 2, name: "message", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "iterations_completed",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{
								no: 4,
								name: "total_iterations",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{ no: 5, name: "total_tokens", kind: "scalar", T: 5, opt: !0 },
							{
								no: 6,
								name: "processed_tokens",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{ no: 7, name: "processed_cost", kind: "scalar", T: 2, opt: !0 },
							{ no: 8, name: "thinking_tokens", kind: "scalar", T: 5, opt: !0 },
							{ no: 9, name: "thinking_cost", kind: "scalar", T: 2, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new A().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new A().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new A().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(A, we, Pe);
					}
				}
				e.$RD = A;
				var R;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.IN_PROGRESS = 1)] = "IN_PROGRESS"),
						(Bi[(Bi.IN_PROGRESS_ITERATIONS = 2)] = "IN_PROGRESS_ITERATIONS"),
						(Bi[(Bi.DONE = 3)] = "DONE");
				})(R || (e.BugBotStatus_Status = R = {})),
					t.proto3.util.setEnumType(R, "aiserver.v1.BugBotStatus.Status", [
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_IN_PROGRESS" },
						{ no: 2, name: "STATUS_IN_PROGRESS_ITERATIONS" },
						{ no: 3, name: "STATUS_DONE" },
					]);
				class O extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamBugBotResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "bug_reports",
								kind: "message",
								T: E.$vv,
								opt: !0,
							},
							{ no: 2, name: "status", kind: "message", T: A },
						]);
					}
					static fromBinary(we, Pe) {
						return new O().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new O().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new O().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(O, we, Pe);
					}
				}
				e.$SD = O;
				class B extends t.Message {
					constructor(we) {
						super(),
							(this.chatConversationHistory = []),
							(this.cppDiffTrajectories = []),
							(this.candidateFiles = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextRerankingRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "current_file",
								kind: "message",
								T: w.$Ws,
								opt: !0,
							},
							{
								no: 2,
								name: "chat_conversation_history",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 3,
								name: "cpp_diff_trajectories",
								kind: "message",
								T: d.$Hv,
								repeated: !0,
							},
							{
								no: 4,
								name: "candidate_files",
								kind: "message",
								T: C.$cB,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new B().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new B().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new B().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(B, we, Pe);
					}
				}
				e.$TD = B;
				class U extends t.Message {
					constructor(we) {
						super(),
							(this.rerankingScores = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextRerankingResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "reranking_scores",
								kind: "scalar",
								T: 2,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new U().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new U().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new U().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(U, we, Pe);
					}
				}
				e.$UD = U;
				class z extends t.Message {
					constructor(we) {
						super(), (this.messages = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.NameTabRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "messages",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new z().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new z().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new z().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(z, we, Pe);
					}
				}
				e.$VD = z;
				class F extends t.Message {
					constructor(we) {
						super(),
							(this.name = ""),
							(this.reason = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.NameTabResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "reason", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new F().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new F().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new F().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(F, we, Pe);
					}
				}
				e.$WD = F;
				class x extends t.Message {
					constructor(we) {
						super(), (this.modelName = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TestModelStatusRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "model_name", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new x().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new x().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new x().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(x, we, Pe);
					}
				}
				e.$XD = x;
				class H extends t.Message {
					constructor(we) {
						super(),
							(this.text = ""),
							(this.latency = 0),
							(this.ttft = 0),
							(this.maxTimeBetweenChunks = 0),
							(this.serverTiming = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TestModelStatusResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "latency", kind: "scalar", T: 2 },
							{ no: 3, name: "ttft", kind: "scalar", T: 2 },
							{ no: 4, name: "max_time_between_chunks", kind: "scalar", T: 2 },
							{ no: 5, name: "server_timing", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new H().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new H().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new H().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(H, we, Pe);
					}
				}
				e.$YD = H;
				class q extends t.Message {
					constructor(we) {
						super(),
							(this.workspaceRelativePath = ""),
							(this.text = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TryParseTypeScriptTreeSitterRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "workspace_relative_path", kind: "scalar", T: 9 },
							{ no: 2, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new q().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new q().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new q().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(q, we, Pe);
					}
				}
				e.$ZD = q;
				class V extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TryParseTypeScriptTreeSitterResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new V().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new V().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new V().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(V, we, Pe);
					}
				}
				e.$1D = V;
				class G extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DevOnlyGetPastRequestIdsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "count", kind: "scalar", T: 5, opt: !0 },
							{ no: 2, name: "page", kind: "scalar", T: 5, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new G().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new G().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new G().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(G, we, Pe);
					}
				}
				e.$2D = G;
				class K extends t.Message {
					constructor(we) {
						super(),
							(this.requestId = ""),
							(this.dateTime = ""),
							(this.modelName = ""),
							(this.featureName = ""),
							(this.s3Uri = ""),
							(this.status = ""),
							(this.numPromptTokens = 0),
							(this.numCompletionTokens = 0),
							(this.apiCallMethod = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DevOnlyPastRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "request_id", kind: "scalar", T: 9 },
							{ no: 2, name: "date_time", kind: "scalar", T: 9 },
							{ no: 3, name: "model_name", kind: "scalar", T: 9 },
							{ no: 4, name: "feature_name", kind: "scalar", T: 9 },
							{ no: 5, name: "s3_uri", kind: "scalar", T: 9 },
							{ no: 6, name: "status", kind: "scalar", T: 9 },
							{ no: 7, name: "num_prompt_tokens", kind: "scalar", T: 5 },
							{ no: 8, name: "num_completion_tokens", kind: "scalar", T: 5 },
							{ no: 9, name: "api_call_method", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new K().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new K().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new K().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(K, we, Pe);
					}
				}
				e.$3D = K;
				class J extends t.Message {
					constructor(we) {
						super(),
							(this.pastRequests = []),
							(this.totalCount = 0),
							(this.hasMore = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DevOnlyGetPastRequestIdsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "past_requests",
								kind: "message",
								T: K,
								repeated: !0,
							},
							{ no: 10, name: "total_count", kind: "scalar", T: 5 },
							{ no: 11, name: "has_more", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new J().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new J().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new J().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(J, we, Pe);
					}
				}
				e.$4D = J;
				class W extends t.Message {
					constructor(we) {
						super(),
							(this.contextToRank = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.GetRankedContextFromContextBankRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "composer_request", kind: "message", T: is },
							{
								no: 2,
								name: "context_to_rank",
								kind: "message",
								T: C.$mA,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new W().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new W().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new W().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(W, we, Pe);
					}
				}
				e.$5D = W;
				class X extends t.Message {
					constructor(we) {
						super(),
							(this.rankedContext = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.GetRankedContextFromContextBankResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "ranked_context",
								kind: "message",
								T: C.$nA,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new X().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new X().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new X().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(X, we, Pe);
					}
				}
				e.$6D = X;
				class Y extends t.Message {
					constructor(we) {
						super(), (this.questions = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetCodebaseQuestionsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "questions", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Y().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Y().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Y().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Y, we, Pe);
					}
				}
				e.$7D = Y;
				class ie extends t.Message {
					constructor(we) {
						super(),
							(this.index = 0),
							(this.text = ""),
							(this.type = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AtSymbolOption";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "index", kind: "scalar", T: 5 },
							{ no: 2, name: "text", kind: "scalar", T: 9 },
							{ no: 3, name: "type", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ie().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ie().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ie().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ie, we, Pe);
					}
				}
				e.$8D = ie;
				class ne extends t.Message {
					constructor(we) {
						super(),
							(this.name = ""),
							(this.fromFile = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AtSymbolDependencyInformation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "from_file", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ne().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ne().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ne().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ne, we, Pe);
					}
				}
				e.$9D = ne;
				class ee extends t.Message {
					constructor(we) {
						super(),
							(this.atSymbolDependencies = []),
							(this.atSymbolOptions = []),
							(this.userQuery = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetAtSymbolSuggestionsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file_info", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "at_symbol_dependencies",
								kind: "message",
								T: ne,
								repeated: !0,
							},
							{
								no: 3,
								name: "at_symbol_options",
								kind: "message",
								T: ie,
								repeated: !0,
							},
							{ no: 4, name: "user_query", kind: "scalar", T: 9 },
							{ no: 5, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new ee().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ee().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ee().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ee, we, Pe);
					}
				}
				e.$0D = ee;
				class _ extends t.Message {
					constructor(we) {
						super(),
							(this.indices = []),
							(this.explanation = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetAtSymbolSuggestionsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "indices", kind: "scalar", T: 5, repeated: !0 },
							{ no: 2, name: "explanation", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new _().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new _().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new _().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(_, we, Pe);
					}
				}
				e.$$D = _;
				class te extends t.Message {
					constructor(we) {
						super(),
							(this.name = ""),
							(this.isFolder = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CurrentFolderFileOrFolder";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "is_folder", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new te().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new te().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new te().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(te, we, Pe);
					}
				}
				e.$_D = te;
				class Q extends t.Message {
					constructor(we) {
						super(),
							(this.currentCommand = ""),
							(this.commandHistory = []),
							(this.fileDiffHistories = []),
							(this.commitHistory = []),
							(this.pastResults = []),
							(this.userPlatform = ""),
							(this.currentFolder = ""),
							(this.currentFolderStructure = []),
							(this.relevantFiles = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetTerminalCompletionRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_command", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "command_history",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 3, name: "model_name", kind: "scalar", T: 9, opt: !0 },
							{
								no: 4,
								name: "file_diff_histories",
								kind: "message",
								T: d.$Hv,
								repeated: !0,
							},
							{ no: 5, name: "git_diff", kind: "scalar", T: 9, opt: !0 },
							{
								no: 6,
								name: "commit_history",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 7,
								name: "past_results",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 8, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 9, name: "user_platform", kind: "scalar", T: 9 },
							{ no: 10, name: "current_folder", kind: "scalar", T: 9 },
							{
								no: 11,
								name: "current_folder_structure",
								kind: "message",
								T: te,
								repeated: !0,
							},
							{
								no: 12,
								name: "relevant_files",
								kind: "message",
								T: w.$Rs,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Q().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Q().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Q().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Q, we, Pe);
					}
				}
				e.$aE = Q;
				class Z extends t.Message {
					constructor(we) {
						super(), (this.command = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetTerminalCompletionResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "command", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Z().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Z().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Z().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Z, we, Pe);
					}
				}
				e.$bE = Z;
				class se extends t.Message {
					constructor(we) {
						super(),
							(this.type = re.UNSPECIFIED),
							(this.startLine = 0),
							(this.endLine = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.HeuristicsSelection";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "type",
								kind: "enum",
								T: t.proto3.getEnumType(re),
							},
							{ no: 2, name: "start_line", kind: "scalar", T: 5 },
							{ no: 3, name: "end_line", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new se().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new se().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new se().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(se, we, Pe);
					}
				}
				e.$cE = se;
				var re;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.GROUP = 1)] = "GROUP"),
						(Bi[(Bi.LINE = 2)] = "LINE"),
						(Bi[(Bi.FOLDING = 3)] = "FOLDING");
				})(re || (e.HeuristicsSelection_HeuristicsSelectionType = re = {})),
					t.proto3.util.setEnumType(
						re,
						"aiserver.v1.HeuristicsSelection.HeuristicsSelectionType",
						[
							{ no: 0, name: "HEURISTICS_SELECTION_TYPE_UNSPECIFIED" },
							{ no: 1, name: "HEURISTICS_SELECTION_TYPE_GROUP" },
							{ no: 2, name: "HEURISTICS_SELECTION_TYPE_LINE" },
							{ no: 3, name: "HEURISTICS_SELECTION_TYPE_FOLDING" },
						],
					);
				class le extends t.Message {
					constructor(we) {
						super(),
							(this.heuristicsSelections = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CalculateAutoSelectionRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file_info", kind: "message", T: w.$Ws },
							{ no: 2, name: "cursor_position", kind: "message", T: w.$ys },
							{ no: 3, name: "selection_range", kind: "message", T: w.$Fs },
							{ no: 4, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 5,
								name: "heuristics_selections",
								kind: "message",
								T: se,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new le().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new le().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new le().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(le, we, Pe);
					}
				}
				e.$dE = le;
				class oe extends t.Message {
					constructor(we) {
						super(),
							(this.text = ""),
							(this.startLine = 0),
							(this.endLine = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AutoSelectionInstructions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "start_line", kind: "scalar", T: 5 },
							{ no: 3, name: "end_line", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new oe().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new oe().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new oe().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(oe, we, Pe);
					}
				}
				e.$eE = oe;
				class ae extends t.Message {
					constructor(we) {
						super(),
							(this.startLine = 0),
							(this.endLine = 0),
							(this.instructions = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AutoSelectionResult";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "start_line", kind: "scalar", T: 5 },
							{ no: 2, name: "end_line", kind: "scalar", T: 5 },
							{
								no: 3,
								name: "instructions",
								kind: "message",
								T: oe,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new ae().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ae().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ae().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ae, we, Pe);
					}
				}
				e.$fE = ae;
				class pe extends t.Message {
					constructor(we) {
						super(), (this.results = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CalculateAutoSelectionResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "results", kind: "message", T: ae, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new pe().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new pe().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new pe().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(pe, we, Pe);
					}
				}
				e.$gE = pe;
				class $e extends t.Message {
					constructor(we) {
						super(),
							(this.instruction = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCursorMotionRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file_info", kind: "message", T: w.$Ws },
							{ no: 2, name: "selection_range", kind: "message", T: w.$Fs },
							{ no: 3, name: "instruction", kind: "scalar", T: 9 },
							{ no: 4, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new $e().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new $e().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new $e().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals($e, we, Pe);
					}
				}
				e.$hE = $e;
				class ye extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCursorMotionResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ye().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ye().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ye().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ye, we, Pe);
					}
				}
				e.$iE = ye;
				class ue extends t.Message {
					constructor(we) {
						super(),
							(this.instruction = ""),
							(this.type = fe.UNSPECIFIED),
							(this.proposedChangeHistory = []),
							(this.relatedCodeBlocks = []),
							(this.diffHistory = []),
							(this.linterErrors = []),
							(this.usefulTypes = []),
							(this.recentlyViewedFiles = []),
							(this.recentDiffs = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BackgroundCmdKRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "instruction", kind: "scalar", T: 9 },
							{ no: 2, name: "current_file", kind: "message", T: w.$Ws },
							{ no: 3, name: "selection_range", kind: "message", T: w.$Fs },
							{
								no: 4,
								name: "type",
								kind: "enum",
								T: t.proto3.getEnumType(fe),
							},
							{
								no: 5,
								name: "proposed_change_history",
								kind: "message",
								T: be,
								repeated: !0,
							},
							{
								no: 6,
								name: "related_code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{
								no: 7,
								name: "diff_history",
								kind: "message",
								T: d.$Hv,
								repeated: !0,
							},
							{
								no: 8,
								name: "linter_errors",
								kind: "message",
								T: me,
								repeated: !0,
							},
							{
								no: 9,
								name: "useful_types",
								kind: "message",
								T: Ce,
								repeated: !0,
							},
							{
								no: 10,
								name: "recently_viewed_files",
								kind: "message",
								T: Le,
								repeated: !0,
							},
							{
								no: 11,
								name: "recent_diffs",
								kind: "message",
								T: Oe,
								repeated: !0,
							},
							{
								no: 12,
								name: "multiple_completions",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new ue().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ue().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ue().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ue, we, Pe);
					}
				}
				e.$jE = ue;
				var fe;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.REFLECT = 1)] = "REFLECT"),
						(Bi[(Bi.LOOP_ON_LINTS = 2)] = "LOOP_ON_LINTS"),
						(Bi[(Bi.CHAT_AND_APPLY = 3)] = "CHAT_AND_APPLY"),
						(Bi[(Bi.COALESCE_GENERATIONS = 4)] = "COALESCE_GENERATIONS"),
						(Bi[(Bi.CODEBASE_CHUNKS = 5)] = "CODEBASE_CHUNKS"),
						(Bi[(Bi.SPEC_AND_APPLY = 6)] = "SPEC_AND_APPLY"),
						(Bi[(Bi.ASK_CODEBASE = 7)] = "ASK_CODEBASE"),
						(Bi[(Bi.FINETUNED_INSTRUCTIONS = 8)] = "FINETUNED_INSTRUCTIONS"),
						(Bi[(Bi.USEFUL_TYPES = 9)] = "USEFUL_TYPES"),
						(Bi[(Bi.CHAT_AND_APPLY_UNDERSPECIFIED = 10)] =
							"CHAT_AND_APPLY_UNDERSPECIFIED");
				})(fe || (e.BackgroundCmdKRequest_Type = fe = {})),
					t.proto3.util.setEnumType(
						fe,
						"aiserver.v1.BackgroundCmdKRequest.Type",
						[
							{ no: 0, name: "TYPE_UNSPECIFIED" },
							{ no: 1, name: "TYPE_REFLECT" },
							{ no: 2, name: "TYPE_LOOP_ON_LINTS" },
							{ no: 3, name: "TYPE_CHAT_AND_APPLY" },
							{ no: 4, name: "TYPE_COALESCE_GENERATIONS" },
							{ no: 5, name: "TYPE_CODEBASE_CHUNKS" },
							{ no: 6, name: "TYPE_SPEC_AND_APPLY" },
							{ no: 7, name: "TYPE_ASK_CODEBASE" },
							{ no: 8, name: "TYPE_FINETUNED_INSTRUCTIONS" },
							{ no: 9, name: "TYPE_USEFUL_TYPES" },
							{ no: 10, name: "TYPE_CHAT_AND_APPLY_UNDERSPECIFIED" },
						],
					);
				class me extends t.Message {
					constructor(we) {
						super(),
							(this.message = ""),
							(this.severity = ""),
							(this.relativeWorkspacePath = ""),
							(this.startLineNumberOneIndexed = 0),
							(this.startColumnOneIndexed = 0),
							(this.endLineNumberInclusiveOneIndexed = 0),
							(this.endColumnOneIndexed = 0),
							(this.quickFixes = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BackgroundCmdKRequest.Lint";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "message", kind: "scalar", T: 9 },
							{ no: 2, name: "severity", kind: "scalar", T: 9 },
							{ no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 4,
								name: "start_line_number_one_indexed",
								kind: "scalar",
								T: 5,
							},
							{ no: 5, name: "start_column_one_indexed", kind: "scalar", T: 5 },
							{
								no: 6,
								name: "end_line_number_inclusive_one_indexed",
								kind: "scalar",
								T: 5,
							},
							{ no: 7, name: "end_column_one_indexed", kind: "scalar", T: 5 },
							{
								no: 9,
								name: "quick_fixes",
								kind: "message",
								T: ve,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new me().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new me().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new me().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(me, we, Pe);
					}
				}
				e.$kE = me;
				class ve extends t.Message {
					constructor(we) {
						super(),
							(this.message = ""),
							(this.kind = ""),
							(this.isPreferred = !1),
							(this.edits = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BackgroundCmdKRequest.Lint.QuickFix";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "message", kind: "scalar", T: 9 },
							{ no: 2, name: "kind", kind: "scalar", T: 9 },
							{ no: 3, name: "is_preferred", kind: "scalar", T: 8 },
							{ no: 4, name: "edits", kind: "message", T: ge, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ve().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ve().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ve().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ve, we, Pe);
					}
				}
				e.$lE = ve;
				class ge extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.text = ""),
							(this.startLineNumberOneIndexed = 0),
							(this.startColumnOneIndexed = 0),
							(this.endLineNumberInclusiveOneIndexed = 0),
							(this.endColumnOneIndexed = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.BackgroundCmdKRequest.Lint.QuickFix.Edit";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "text", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "start_line_number_one_indexed",
								kind: "scalar",
								T: 5,
							},
							{ no: 4, name: "start_column_one_indexed", kind: "scalar", T: 5 },
							{
								no: 5,
								name: "end_line_number_inclusive_one_indexed",
								kind: "scalar",
								T: 5,
							},
							{ no: 6, name: "end_column_one_indexed", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ge().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ge().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ge().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ge, we, Pe);
					}
				}
				e.$mE = ge;
				class be extends t.Message {
					constructor(we) {
						super(),
							(this.change = ""),
							(this.linterErrors = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BackgroundCmdKRequest.ProposedChange";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "change", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "linter_errors",
								kind: "message",
								T: me,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new be().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new be().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new be().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(be, we, Pe);
					}
				}
				e.$nE = be;
				class Ce extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.startLine = 0),
							(this.text = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BackgroundCmdKRequest.UsefulType";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "start_line", kind: "scalar", T: 5 },
							{ no: 3, name: "text", kind: "scalar", T: 9 },
							{ no: 4, name: "score", kind: "scalar", T: 1, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ce().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ce().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ce().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ce, we, Pe);
					}
				}
				e.$oE = Ce;
				class Le extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.contents = ""),
							(this.visibleRanges = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.BackgroundCmdKRequest.RecentlyViewedFile";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "contents", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "visible_ranges",
								kind: "message",
								T: Fe,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Le().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Le().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Le().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Le, we, Pe);
					}
				}
				e.$pE = Le;
				class Fe extends t.Message {
					constructor(we) {
						super(),
							(this.startLineNumberInclusive = 0),
							(this.endLineNumberExclusive = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.BackgroundCmdKRequest.RecentlyViewedFile.VisibleRange";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "start_line_number_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 2,
								name: "end_line_number_exclusive",
								kind: "scalar",
								T: 5,
							},
							{ no: 3, name: "viewed_at", kind: "scalar", T: 5, opt: !0 },
							{
								no: 4,
								name: "global_order_descending",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Fe().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Fe().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Fe().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Fe, we, Pe);
					}
				}
				e.$qE = Fe;
				class Oe extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.diff = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BackgroundCmdKRequest.Diff";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "diff", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Oe().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Oe().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Oe().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Oe, we, Pe);
					}
				}
				e.$rE = Oe;
				class xe extends t.Message {
					constructor(we) {
						super(),
							(this.proposedChange = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BackgroundCmdKResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "proposed_change", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new xe().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new xe().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new xe().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(xe, we, Pe);
					}
				}
				e.$sE = xe;
				class He extends t.Message {
					constructor(we) {
						super(),
							(this.instruction = ""),
							(this.groundTruth = ""),
							(this.experiment = Ke.UNSPECIFIED),
							(this.runAutomatedEval = !1),
							(this.proposedChangeHistory = []),
							(this.commitNotes = []),
							(this.relatedCodeBlocks = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BackgroundCmdKEvalRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "instruction", kind: "scalar", T: 9 },
							{ no: 2, name: "current_file", kind: "message", T: w.$Ws },
							{ no: 3, name: "selection_range", kind: "message", T: w.$Fs },
							{ no: 4, name: "ground_truth", kind: "scalar", T: 9 },
							{
								no: 5,
								name: "experiment",
								kind: "enum",
								T: t.proto3.getEnumType(Ke),
							},
							{ no: 6, name: "run_automated_eval", kind: "scalar", T: 8 },
							{
								no: 7,
								name: "proposed_change_history",
								kind: "message",
								T: Ie,
								repeated: !0,
							},
							{
								no: 8,
								name: "commit_notes",
								kind: "message",
								T: w.$it,
								repeated: !0,
							},
							{
								no: 9,
								name: "related_code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new He().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new He().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new He().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(He, we, Pe);
					}
				}
				e.$tE = He;
				var Ke;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.REFLECT = 1)] = "REFLECT"),
						(Bi[(Bi.CMD_K_ORIGINAL_RADIUS = 2)] = "CMD_K_ORIGINAL_RADIUS"),
						(Bi[(Bi.LOOP_ON_LINTS = 3)] = "LOOP_ON_LINTS"),
						(Bi[(Bi.CHAT_AND_APPLY = 4)] = "CHAT_AND_APPLY"),
						(Bi[(Bi.COMMIT_NOTES = 5)] = "COMMIT_NOTES"),
						(Bi[(Bi.COALESCE_GENERATIONS = 6)] = "COALESCE_GENERATIONS"),
						(Bi[(Bi.REWORD_INSTRUCTIONS = 7)] = "REWORD_INSTRUCTIONS"),
						(Bi[(Bi.CODEBASE_CHUNKS = 8)] = "CODEBASE_CHUNKS"),
						(Bi[(Bi.SPEC_AND_APPLY = 9)] = "SPEC_AND_APPLY"),
						(Bi[(Bi.ASK_CODEBASE = 10)] = "ASK_CODEBASE");
				})(Ke || (e.BackgroundCmdKEvalRequest_Experiment = Ke = {})),
					t.proto3.util.setEnumType(
						Ke,
						"aiserver.v1.BackgroundCmdKEvalRequest.Experiment",
						[
							{ no: 0, name: "EXPERIMENT_UNSPECIFIED" },
							{ no: 1, name: "EXPERIMENT_REFLECT" },
							{ no: 2, name: "EXPERIMENT_CMD_K_ORIGINAL_RADIUS" },
							{ no: 3, name: "EXPERIMENT_LOOP_ON_LINTS" },
							{ no: 4, name: "EXPERIMENT_CHAT_AND_APPLY" },
							{ no: 5, name: "EXPERIMENT_COMMIT_NOTES" },
							{ no: 6, name: "EXPERIMENT_COALESCE_GENERATIONS" },
							{ no: 7, name: "EXPERIMENT_REWORD_INSTRUCTIONS" },
							{ no: 8, name: "EXPERIMENT_CODEBASE_CHUNKS" },
							{ no: 9, name: "EXPERIMENT_SPEC_AND_APPLY" },
							{ no: 10, name: "EXPERIMENT_ASK_CODEBASE" },
						],
					);
				class Je extends t.Message {
					constructor(we) {
						super(),
							(this.message = ""),
							(this.severity = ""),
							(this.relativeWorkspacePath = ""),
							(this.startLineNumberOneIndexed = 0),
							(this.startColumnOneIndexed = 0),
							(this.endLineNumberInclusiveOneIndexed = 0),
							(this.endColumnOneIndexed = 0),
							(this.quickFixes = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BackgroundCmdKEvalRequest.Lint";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "message", kind: "scalar", T: 9 },
							{ no: 2, name: "severity", kind: "scalar", T: 9 },
							{ no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 4,
								name: "start_line_number_one_indexed",
								kind: "scalar",
								T: 5,
							},
							{ no: 5, name: "start_column_one_indexed", kind: "scalar", T: 5 },
							{
								no: 6,
								name: "end_line_number_inclusive_one_indexed",
								kind: "scalar",
								T: 5,
							},
							{ no: 7, name: "end_column_one_indexed", kind: "scalar", T: 5 },
							{
								no: 9,
								name: "quick_fixes",
								kind: "message",
								T: Te,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Je().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Je().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Je().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Je, we, Pe);
					}
				}
				e.$uE = Je;
				class Te extends t.Message {
					constructor(we) {
						super(),
							(this.message = ""),
							(this.kind = ""),
							(this.isPreferred = !1),
							(this.edits = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.BackgroundCmdKEvalRequest.Lint.QuickFix";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "message", kind: "scalar", T: 9 },
							{ no: 2, name: "kind", kind: "scalar", T: 9 },
							{ no: 3, name: "is_preferred", kind: "scalar", T: 8 },
							{ no: 4, name: "edits", kind: "message", T: Ee, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Te().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Te().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Te().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Te, we, Pe);
					}
				}
				e.$vE = Te;
				class Ee extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.text = ""),
							(this.startLineNumberOneIndexed = 0),
							(this.startColumnOneIndexed = 0),
							(this.endLineNumberInclusiveOneIndexed = 0),
							(this.endColumnOneIndexed = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.BackgroundCmdKEvalRequest.Lint.QuickFix.Edit";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "text", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "start_line_number_one_indexed",
								kind: "scalar",
								T: 5,
							},
							{ no: 4, name: "start_column_one_indexed", kind: "scalar", T: 5 },
							{
								no: 5,
								name: "end_line_number_inclusive_one_indexed",
								kind: "scalar",
								T: 5,
							},
							{ no: 6, name: "end_column_one_indexed", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ee().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ee().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ee().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ee, we, Pe);
					}
				}
				e.$wE = Ee;
				class Ie extends t.Message {
					constructor(we) {
						super(),
							(this.change = ""),
							(this.linterErrors = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.BackgroundCmdKEvalRequest.ProposedChange";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "change", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "linter_errors",
								kind: "message",
								T: Je,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Ie().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ie().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ie().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ie, we, Pe);
					}
				}
				e.$xE = Ie;
				class Be extends t.Message {
					constructor(we) {
						super(),
							(this.proposedChange = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BackgroundCmdKEvalResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "proposed_change", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Be().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Be().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Be().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Be, we, Pe);
					}
				}
				e.$yE = Be;
				class Se extends t.Message {
					constructor(we) {
						super(), (this.requestId = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetThoughtAnnotationRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "request_id", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Se().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Se().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Se().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Se, we, Pe);
					}
				}
				e.$zE = Se;
				class ke extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetThoughtAnnotationResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "thought_annotation", kind: "message", T: Ue },
						]);
					}
					static fromBinary(we, Pe) {
						return new ke().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ke().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ke().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ke, we, Pe);
					}
				}
				e.$AE = ke;
				class Ue extends t.Message {
					constructor(we) {
						super(),
							(this.requestId = ""),
							(this.authId = ""),
							(this.thought = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AiThoughtAnnotation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "request_id", kind: "scalar", T: 9 },
							{ no: 2, name: "auth_id", kind: "scalar", T: 9 },
							{ no: 3, name: "debug_info", kind: "message", T: w.$Hs },
							{ no: 4, name: "thought", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ue().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ue().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ue().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ue, we, Pe);
					}
				}
				e.$BE = Ue;
				class qe extends t.Message {
					constructor(we) {
						super(), (this.texts = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BulkEmbedRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "texts", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new qe().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new qe().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new qe().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(qe, we, Pe);
					}
				}
				e.$CE = qe;
				class Ae extends t.Message {
					constructor(we) {
						super(),
							(this.embeddings = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BulkEmbedResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "embeddings",
								kind: "message",
								T: Me,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Ae().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ae().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ae().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ae, we, Pe);
					}
				}
				e.$DE = Ae;
				class Me extends t.Message {
					constructor(we) {
						super(), (this.embedding = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.EmbeddingResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "embedding", kind: "scalar", T: 1, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Me().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Me().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Me().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Me, we, Pe);
					}
				}
				e.$EE = Me;
				class De extends t.Message {
					constructor(we) {
						super(),
							(this.commitHash = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TakeNotesOnCommitDiffRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "diff", kind: "message", T: w.$kt },
							{ no: 2, name: "commit_hash", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new De().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new De().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new De().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(De, we, Pe);
					}
				}
				e.$FE = De;
				class Re extends t.Message {
					constructor(we) {
						super(), (this.notes = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TakeNotesOnCommitDiffResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "notes", kind: "message", T: w.$jt, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Re().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Re().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Re().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Re, we, Pe);
					}
				}
				e.$GE = Re;
				class je extends t.Message {
					constructor(we) {
						super(),
							(this.sessionId = ""),
							(this.commits = []),
							(this.requestId = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContinueChatRequestWithCommitsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "session_id", kind: "scalar", T: 9 },
							{ no: 2, name: "commits", kind: "message", T: Ve, repeated: !0 },
							{ no: 3, name: "request_id", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new je().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new je().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new je().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(je, we, Pe);
					}
				}
				e.$HE = je;
				class Ve extends t.Message {
					constructor(we) {
						super(),
							(this.commitHash = ""),
							(this.diff = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SimpleCommitWithDiff";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "commit_hash", kind: "scalar", T: 9 },
							{ no: 2, name: "diff", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ve().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ve().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ve().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ve, we, Pe);
					}
				}
				e.$IE = Ve;
				class Ze extends t.Message {
					constructor(we) {
						super(),
							(this.aiResponse = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamBranchFileSelectionsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "ai_response", kind: "scalar", T: 9 },
							{ no: 2, name: "override_model", kind: "scalar", T: 9, opt: !0 },
							{
								no: 3,
								name: "override_token_limit",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Ze().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ze().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ze().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ze, we, Pe);
					}
				}
				e.$JE = Ze;
				class et extends t.Message {
					constructor(we) {
						super(),
							(this.fileInstructions = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamBranchFileSelectionsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "file_instructions",
								kind: "message",
								T: rt,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new et().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new et().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new et().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(et, we, Pe);
					}
				}
				e.$KE = et;
				class rt extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.instruction = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamBranchFileSelectionsResponse.FileInstruction";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "instruction", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new rt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new rt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new rt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(rt, we, Pe);
					}
				}
				e.$LE = rt;
				class ft extends t.Message {
					constructor(we) {
						super(),
							(this.branchName = ""),
							(this.branchNotes = ""),
							(this.globalNotes = ""),
							(this.pastThoughts = []),
							(this.potentiallyRelevantCommits = []),
							(this.files = []),
							(this.contextGraphFiles = []),
							(this.crucialFiles = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamBranchGeminiRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "branch_name", kind: "scalar", T: 9 },
							{ no: 2, name: "branch_notes", kind: "scalar", T: 9 },
							{ no: 3, name: "global_notes", kind: "scalar", T: 9 },
							{
								no: 4,
								name: "past_thoughts",
								kind: "message",
								T: lt,
								repeated: !0,
							},
							{ no: 5, name: "diff_to_base_branch", kind: "message", T: bt },
							{
								no: 6,
								name: "potentially_relevant_commits",
								kind: "message",
								T: C.$$A,
								repeated: !0,
							},
							{ no: 7, name: "files", kind: "message", T: ct, repeated: !0 },
							{
								no: 8,
								name: "context_graph_files",
								kind: "message",
								T: gt,
								repeated: !0,
							},
							{
								no: 12,
								name: "crucial_files",
								kind: "message",
								T: ct,
								repeated: !0,
							},
							{ no: 9, name: "override_model", kind: "scalar", T: 9, opt: !0 },
							{
								no: 10,
								name: "override_token_limit",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new ft().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ft().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ft().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ft, we, Pe);
					}
				}
				e.$ME = ft;
				class bt extends t.Message {
					constructor(we) {
						super(),
							(this.fileDiffs = []),
							(this.commits = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamBranchGeminiRequest.BranchDiff";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "file_diffs",
								kind: "message",
								T: nt,
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
					static fromBinary(we, Pe) {
						return new bt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new bt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new bt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(bt, we, Pe);
					}
				}
				e.$NE = bt;
				class nt extends t.Message {
					constructor(we) {
						super(),
							(this.fileName = ""),
							(this.diff = ""),
							(this.tooBig = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamBranchGeminiRequest.BranchDiff.FileDiff";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "file_name", kind: "scalar", T: 9 },
							{ no: 2, name: "diff", kind: "scalar", T: 9 },
							{ no: 3, name: "too_big", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new nt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new nt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new nt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(nt, we, Pe);
					}
				}
				e.$OE = nt;
				class lt extends t.Message {
					constructor(we) {
						super(),
							(this.text = ""),
							(this.timeInUnixSeconds = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamBranchGeminiRequest.PastThought";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "time_in_unix_seconds", kind: "scalar", T: 1 },
						]);
					}
					static fromBinary(we, Pe) {
						return new lt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new lt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new lt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(lt, we, Pe);
					}
				}
				e.$PE = lt;
				class ct extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.text = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamBranchGeminiRequest.File";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ct().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ct().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ct().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ct, we, Pe);
					}
				}
				e.$QE = ct;
				class gt extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.text = ""),
							(this.priority = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamBranchGeminiRequest.FileWithPriority";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "text", kind: "scalar", T: 9 },
							{ no: 3, name: "priority", kind: "scalar", T: 2 },
						]);
					}
					static fromBinary(we, Pe) {
						return new gt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new gt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new gt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(gt, we, Pe);
					}
				}
				e.$RE = gt;
				class ht extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamBranchGeminiResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "cached_prompt", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ht().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ht().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ht().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ht, we, Pe);
					}
				}
				e.$SE = ht;
				class Rt extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.IsCursorPredictionEnabledRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Rt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Rt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Rt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Rt, we, Pe);
					}
				}
				e.$TE = Rt;
				class Nt extends t.Message {
					constructor(we) {
						super(), (this.enabled = !1), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.IsCursorPredictionEnabledResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "enabled", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Nt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Nt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Nt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Nt, we, Pe);
					}
				}
				e.$UE = Nt;
				class jt extends t.Message {
					constructor(we) {
						super(),
							(this.diffHistory = []),
							(this.contextItems = []),
							(this.diffHistoryKeys = []),
							(this.fileDiffHistories = []),
							(this.mergedDiffHistories = []),
							(this.blockDiffPatches = []),
							(this.parameterHints = []),
							(this.lspContexts = []),
							(this.fileSyncUpdates = []),
							(this.fileVisibleRanges = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamNextCursorPredictionRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "diff_history",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 3, name: "model_name", kind: "scalar", T: 9, opt: !0 },
							{
								no: 4,
								name: "linter_errors",
								kind: "message",
								T: w.$4s,
								opt: !0,
							},
							{
								no: 13,
								name: "context_items",
								kind: "message",
								T: d.$Iv,
								repeated: !0,
							},
							{
								no: 5,
								name: "diff_history_keys",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 6,
								name: "give_debug_output",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 7,
								name: "file_diff_histories",
								kind: "message",
								T: d.$Hv,
								repeated: !0,
							},
							{
								no: 8,
								name: "merged_diff_histories",
								kind: "message",
								T: d.$Hv,
								repeated: !0,
							},
							{
								no: 9,
								name: "block_diff_patches",
								kind: "message",
								T: d.$gx,
								repeated: !0,
							},
							{ no: 10, name: "is_nightly", kind: "scalar", T: 8, opt: !0 },
							{ no: 11, name: "is_debug", kind: "scalar", T: 8, opt: !0 },
							{
								no: 12,
								name: "immediately_ack",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 17,
								name: "enable_more_context",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 14,
								name: "parameter_hints",
								kind: "message",
								T: d.$Lv,
								repeated: !0,
							},
							{
								no: 15,
								name: "lsp_contexts",
								kind: "message",
								T: m.$jB,
								repeated: !0,
							},
							{
								no: 16,
								name: "cpp_intent_info",
								kind: "message",
								T: Zs,
								opt: !0,
							},
							{ no: 18, name: "workspace_id", kind: "scalar", T: 9, opt: !0 },
							{
								no: 19,
								name: "file_sync_updates",
								kind: "message",
								T: r.$mB,
								repeated: !0,
							},
							{
								no: 20,
								name: "file_visible_ranges",
								kind: "message",
								T: kt,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new jt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new jt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new jt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(jt, we, Pe);
					}
				}
				e.$VE = jt;
				class ti extends t.Message {
					constructor(we) {
						super(),
							(this.startLineNumberInclusive = 0),
							(this.endLineNumberExclusive = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamNextCursorPredictionRequest.VisibleRange";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "start_line_number_inclusive",
								kind: "scalar",
								T: 5,
							},
							{
								no: 2,
								name: "end_line_number_exclusive",
								kind: "scalar",
								T: 5,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new ti().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ti().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ti().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ti, we, Pe);
					}
				}
				e.$WE = ti;
				class kt extends t.Message {
					constructor(we) {
						super(),
							(this.filename = ""),
							(this.visibleRanges = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamNextCursorPredictionRequest.FileVisibleRange";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "filename", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "visible_ranges",
								kind: "message",
								T: ti,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new kt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new kt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new kt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(kt, we, Pe);
					}
				}
				e.$XE = kt;
				class hi extends t.Message {
					constructor(we) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamNextCursorPredictionResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9, oneof: "response" },
							{
								no: 2,
								name: "line_number",
								kind: "scalar",
								T: 5,
								oneof: "response",
							},
							{
								no: 3,
								name: "is_not_in_range",
								kind: "scalar",
								T: 8,
								oneof: "response",
							},
							{
								no: 4,
								name: "file_name",
								kind: "scalar",
								T: 9,
								oneof: "response",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new hi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new hi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new hi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(hi, we, Pe);
					}
				}
				e.$YE = hi;
				class Kt extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SuggestedEdit";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "edit_range", kind: "message", T: w.$Fs },
							{ no: 2, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Kt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Kt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Kt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Kt, we, Pe);
					}
				}
				e.$ZE = Kt;
				class di extends t.Message {
					constructor(we) {
						super(),
							(this.suggestedEdits = []),
							(this.markerTouchesGreen = !1),
							(this.currentFileContentsForLinterErrors = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetCppEditClassificationRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "cpp_request", kind: "message", T: sr },
							{
								no: 25,
								name: "suggested_edits",
								kind: "message",
								T: Kt,
								repeated: !0,
							},
							{ no: 26, name: "marker_touches_green", kind: "scalar", T: 8 },
							{
								no: 27,
								name: "current_file_contents_for_linter_errors",
								kind: "scalar",
								T: 9,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new di().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new di().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new di().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(di, we, Pe);
					}
				}
				e.$1E = di;
				class Ye extends t.Message {
					constructor(we) {
						super(),
							(this.scoredEdits = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetCppEditClassificationResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "scored_edits",
								kind: "message",
								T: Xe,
								repeated: !0,
							},
							{ no: 2, name: "noop_edit", kind: "message", T: Xe },
							{ no: 3, name: "should_noop", kind: "scalar", T: 8, opt: !0 },
							{ no: 4, name: "generation_edit", kind: "message", T: Xe },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ye().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ye().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ye().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ye, we, Pe);
					}
				}
				e.$2E = Ye;
				class ze extends t.Message {
					constructor(we) {
						super(),
							(this.tokens = []),
							(this.tokenLogprobs = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.GetCppEditClassificationResponse.LogProbs";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "tokens", kind: "scalar", T: 9, repeated: !0 },
							{
								no: 2,
								name: "token_logprobs",
								kind: "scalar",
								T: 1,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new ze().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ze().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ze().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ze, we, Pe);
					}
				}
				e.$3E = ze;
				class Xe extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.GetCppEditClassificationResponse.ScoredEdit";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "edit", kind: "message", T: Kt },
							{ no: 2, name: "log_probs", kind: "message", T: ze },
						]);
					}
					static fromBinary(we, Pe) {
						return new Xe().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Xe().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Xe().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Xe, we, Pe);
					}
				}
				e.$4E = Xe;
				class It extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.fileContents = ""),
							(this.prompt = ""),
							(this.images = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamWebCmdKV1Request";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "file_contents", kind: "scalar", T: 9 },
							{ no: 3, name: "prompt", kind: "scalar", T: 9 },
							{ no: 4, name: "selection_range", kind: "message", T: w.$Ms },
							{ no: 5, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 10,
								name: "images",
								kind: "message",
								T: w.$ct,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new It().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new It().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new It().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(It, we, Pe);
					}
				}
				e.$5E = It;
				class Lt extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamWebCmdKV1Response";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "cmd_k_response", kind: "message", T: u.$KC },
						]);
					}
					static fromBinary(we, Pe) {
						return new Lt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Lt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Lt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Lt, we, Pe);
					}
				}
				e.$6E = Lt;
				class xt extends t.Message {
					constructor(we) {
						super(),
							(this.sourceRange = ""),
							(this.methodSignatures = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextScoresRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "source_range", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "method_signatures",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new xt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new xt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new xt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(xt, we, Pe);
					}
				}
				e.$7E = xt;
				class Vt extends t.Message {
					constructor(we) {
						super(), (this.scores = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextScoresResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "scores", kind: "scalar", T: 2, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Vt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Vt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Vt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Vt, we, Pe);
					}
				}
				e.$8E = Vt;
				class Bt extends t.Message {
					constructor(we) {
						super(),
							(this.feedbackType = Gt.UNSPECIFIED),
							(this.requestId = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportGenerationFeedbackRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "feedback_type",
								kind: "enum",
								T: t.proto3.getEnumType(Gt),
							},
							{ no: 2, name: "request_id", kind: "scalar", T: 9 },
							{ no: 3, name: "comment", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Bt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Bt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Bt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Bt, we, Pe);
					}
				}
				e.$9E = Bt;
				var Gt;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.THUMBS_UP = 1)] = "THUMBS_UP"),
						(Bi[(Bi.THUMBS_DOWN = 2)] = "THUMBS_DOWN"),
						(Bi[(Bi.NEUTRAL = 3)] = "NEUTRAL");
				})(Gt || (e.ReportGenerationFeedbackRequest_FeedbackType = Gt = {})),
					t.proto3.util.setEnumType(
						Gt,
						"aiserver.v1.ReportGenerationFeedbackRequest.FeedbackType",
						[
							{ no: 0, name: "FEEDBACK_TYPE_UNSPECIFIED" },
							{ no: 1, name: "FEEDBACK_TYPE_THUMBS_UP" },
							{ no: 2, name: "FEEDBACK_TYPE_THUMBS_DOWN" },
							{ no: 3, name: "FEEDBACK_TYPE_NEUTRAL" },
						],
					);
				class Mt extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportGenerationFeedbackResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Mt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Mt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Mt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Mt, we, Pe);
					}
				}
				e.$0E = Mt;
				class Ut extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ShowWelcomeScreenRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Ut().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ut().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ut().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ut, we, Pe);
					}
				}
				e.$$E = Ut;
				class ei extends t.Message {
					constructor(we) {
						super(),
							(this.enableCards = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ShowWelcomeScreenResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "enable_cards",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new ei().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ei().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ei().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ei, we, Pe);
					}
				}
				e.$_E = ei;
				class mi extends t.Message {
					constructor(we) {
						super(),
							(this.description = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AiProjectRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "description", kind: "scalar", T: 9 },
							{ no: 2, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new mi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new mi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new mi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(mi, we, Pe);
					}
				}
				e.$aF = mi;
				class ii extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AiProjectResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ii().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ii().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ii().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ii, we, Pe);
					}
				}
				e.$bF = ii;
				class Dt extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ToCamelCaseRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Dt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Dt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Dt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Dt, we, Pe);
					}
				}
				e.$cF = Dt;
				class Jt extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ToCamelCaseResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Jt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Jt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Jt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Jt, we, Pe);
					}
				}
				e.$dF = Jt;
				class si extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ShouldTurnOnCppOnboardingRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new si().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new si().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new si().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(si, we, Pe);
					}
				}
				e.$eF = si;
				class Zt extends t.Message {
					constructor(we) {
						super(),
							(this.shouldTurnOnCppOnboarding = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ShouldTurnOnCppOnboardingResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "should_turn_on_cpp_onboarding",
								kind: "scalar",
								T: 8,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Zt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Zt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Zt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Zt, we, Pe);
					}
				}
				e.$fF = Zt;
				class ci extends t.Message {
					constructor(we) {
						super(),
							(this.promptProps = ""),
							(this.promptPropsTypeName = ""),
							(this.skipLoginCheck = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamPriomptPromptRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 2, name: "prompt_props", kind: "scalar", T: 9 },
							{ no: 3, name: "prompt_props_type_name", kind: "scalar", T: 9 },
							{ no: 5, name: "skip_login_check", kind: "scalar", T: 8 },
							{ no: 4, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new ci().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ci().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ci().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ci, we, Pe);
					}
				}
				e.$gF = ci;
				class ri extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamPriomptPromptResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ri().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ri().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ri().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ri, we, Pe);
					}
				}
				e.$hF = ri;
				class $i extends t.Message {
					constructor(we) {
						super(),
							(this.featureName = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckFeatureStatusRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "feature_name", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new $i().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new $i().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new $i().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals($i, we, Pe);
					}
				}
				e.$iF = $i;
				class Wt extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetEffectiveTokenLimitRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new Wt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Wt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Wt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Wt, we, Pe);
					}
				}
				e.$jF = Wt;
				class tt extends t.Message {
					constructor(we) {
						super(), (this.tokenLimit = 0), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetEffectiveTokenLimitResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "token_limit", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new tt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new tt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new tt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(tt, we, Pe);
					}
				}
				e.$kF = tt;
				class at extends t.Message {
					constructor(we) {
						super(), (this.enabled = !1), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckFeatureStatusResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "enabled", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new at().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new at().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new at().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(at, we, Pe);
					}
				}
				e.$lF = at;
				class pi extends t.Message {
					constructor(we) {
						super(), (this.key = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckNumberConfigRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "key", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new pi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new pi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new pi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(pi, we, Pe);
					}
				}
				e.$mF = pi;
				class Li extends t.Message {
					constructor(we) {
						super(), (this.value = 0), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckNumberConfigResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "value", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Li().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Li().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Li().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Li, we, Pe);
					}
				}
				e.$nF = Li;
				class Di extends t.Message {
					constructor(we) {
						super(), (this.messages = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.IntentPredictionRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "messages",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{ no: 2, name: "context_options", kind: "message", T: Oi },
							{ no: 3, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new Di().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Di().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Di().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Di, we, Pe);
					}
				}
				e.$oF = Di;
				class Ui extends t.Message {
					constructor(we) {
						super(),
							(this.useGlobalContext = !1),
							(this.useWithFolderContext = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.IntentPredictionResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "chosen_documentation", kind: "message", T: Wi },
							{ no: 2, name: "chosen_file_contents", kind: "message", T: Gi },
							{
								no: 3,
								name: "chosen_linter_diagnostics",
								kind: "message",
								T: qi,
							},
							{ no: 4, name: "use_global_context", kind: "scalar", T: 8 },
							{ no: 5, name: "use_with_folder_context", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ui().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ui().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ui().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ui, we, Pe);
					}
				}
				e.$pF = Ui;
				class Wi extends t.Message {
					constructor(we) {
						super(),
							(this.docIndices = []),
							(this.docIdentifiers = []),
							(this.docNames = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.IntentPredictionResponse.ChosenDocumentation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "doc_indices",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
							{
								no: 2,
								name: "doc_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 3, name: "doc_names", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Wi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Wi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Wi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Wi, we, Pe);
					}
				}
				e.$qF = Wi;
				class Gi extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.IntentPredictionResponse.ChosenFileContents";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Gi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Gi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Gi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Gi, we, Pe);
					}
				}
				e.$rF = Gi;
				class qi extends t.Message {
					constructor(we) {
						super(),
							(this.diagnosticIndices = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.IntentPredictionResponse.ChosenLinterDiagnostics";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "diagnostic_indices",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new qi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new qi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new qi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(qi, we, Pe);
					}
				}
				e.$sF = qi;
				class Oi extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextOptions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "all_documentation", kind: "message", T: yi },
							{ no: 2, name: "current_file_contents", kind: "message", T: li },
							{ no: 3, name: "linter_diagnostics", kind: "message", T: Vi },
							{ no: 4, name: "global_context", kind: "message", T: _t },
						]);
					}
					static fromBinary(we, Pe) {
						return new Oi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Oi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Oi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Oi, we, Pe);
					}
				}
				e.$tF = Oi;
				class yi extends t.Message {
					constructor(we) {
						super(),
							(this.availableDocs = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextOptions.AllDocumentation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "available_docs",
								kind: "message",
								T: Ai,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new yi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new yi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new yi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(yi, we, Pe);
					}
				}
				e.$uF = yi;
				class Ai extends t.Message {
					constructor(we) {
						super(),
							(this.name = ""),
							(this.url = ""),
							(this.identifier = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.ContextOptions.AllDocumentation.Documentation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "url", kind: "scalar", T: 9 },
							{ no: 3, name: "identifier", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ai().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ai().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ai().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ai, we, Pe);
					}
				}
				e.$vF = Ai;
				class li extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.contents = ""),
							(this.dataframes = []),
							(this.languageId = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextOptions.CurrentFileContents";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "contents", kind: "scalar", T: 9 },
							{ no: 3, name: "cursor_position", kind: "message", T: w.$ys },
							{
								no: 4,
								name: "dataframes",
								kind: "message",
								T: w.$1s,
								repeated: !0,
							},
							{ no: 5, name: "language_id", kind: "scalar", T: 9 },
							{ no: 6, name: "selection", kind: "message", T: w.$Ns },
						]);
					}
					static fromBinary(we, Pe) {
						return new li().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new li().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new li().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(li, we, Pe);
					}
				}
				e.$wF = li;
				class Vi extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.contents = ""),
							(this.diagnostics = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextOptions.LinterDiagnostics";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "contents", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "diagnostics",
								kind: "message",
								T: wi,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Vi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Vi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Vi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Vi, we, Pe);
					}
				}
				e.$xF = Vi;
				class wi extends t.Message {
					constructor(we) {
						super(),
							(this.message = ""),
							(this.source = ""),
							(this.relativeWorkspacePath = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.ContextOptions.LinterDiagnostics.Diagnostic";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "message", kind: "scalar", T: 9 },
							{ no: 2, name: "source", kind: "scalar", T: 9 },
							{ no: 3, name: "range", kind: "message", T: w.$Ns },
							{ no: 4, name: "relative_workspace_path", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new wi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new wi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new wi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(wi, we, Pe);
					}
				}
				e.$yF = wi;
				class _t extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextOptions.GlobalContext";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new _t().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new _t().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new _t().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(_t, we, Pe);
					}
				}
				e.$zF = _t;
				class ai extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCursorTutorRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{ no: 2, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new ai().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ai().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ai().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ai, we, Pe);
					}
				}
				e.$AF = ai;
				class Ft extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCursorTutorResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ft().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ft().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ft().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ft, we, Pe);
					}
				}
				e.$BF = Ft;
				class Xt extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.repositories = []),
							(this.codeBlocks = []),
							(this.queryType = $t.UNSPECIFIED),
							(this.fasterAndStupider = !1),
							(this.useGlobs = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ModelQueryRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 6,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 7, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 8,
								name: "query_type",
								kind: "enum",
								T: t.proto3.getEnumType($t),
							},
							{ no: 9, name: "repository_info", kind: "message", T: a.$mv },
							{ no: 10, name: "faster_and_stupider", kind: "scalar", T: 8 },
							{ no: 11, name: "use_globs", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Xt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Xt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Xt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Xt, we, Pe);
					}
				}
				e.$CF = Xt;
				var $t;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.KEYWORDS = 1)] = "KEYWORDS"),
						(Bi[(Bi.EMBEDDINGS = 2)] = "EMBEDDINGS");
				})($t || (e.ModelQueryRequest_QueryType = $t = {})),
					t.proto3.util.setEnumType(
						$t,
						"aiserver.v1.ModelQueryRequest.QueryType",
						[
							{ no: 0, name: "QUERY_TYPE_UNSPECIFIED" },
							{ no: 1, name: "QUERY_TYPE_KEYWORDS" },
							{ no: 2, name: "QUERY_TYPE_EMBEDDINGS" },
						],
					);
				class ut extends t.Message {
					constructor(we) {
						super(), (this.queries = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ModelQueryResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "queries", kind: "message", T: Et, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ut().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ut().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ut().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ut, we, Pe);
					}
				}
				e.$DF = ut;
				class Et extends t.Message {
					constructor(we) {
						super(),
							(this.query = ""),
							(this.successfulParse = !1),
							(this.goodFileExtensions = []),
							(this.badFileExtensions = []),
							(this.goodPaths = []),
							(this.badPaths = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ModelQueryResponse.Query";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "scalar", T: 9 },
							{ no: 2, name: "successful_parse", kind: "scalar", T: 8 },
							{
								no: 3,
								name: "good_file_extensions",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 4,
								name: "bad_file_extensions",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 5, name: "good_paths", kind: "scalar", T: 9, repeated: !0 },
							{ no: 6, name: "bad_paths", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Et().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Et().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Et().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Et, we, Pe);
					}
				}
				e.$EF = Et;
				class Tt extends t.Message {
					constructor(we) {
						super(),
							(this.queryOrReasoning = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ModelQueryResponseV2";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "query",
								kind: "message",
								T: qt,
								oneof: "query_or_reasoning",
							},
							{
								no: 2,
								name: "reasoning",
								kind: "scalar",
								T: 9,
								oneof: "query_or_reasoning",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Tt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Tt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Tt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Tt, we, Pe);
					}
				}
				e.$FF = Tt;
				class qt extends t.Message {
					constructor(we) {
						super(),
							(this.partialQuery = { case: void 0 }),
							(this.index = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ModelQueryResponseV2.QueryItem";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "text",
								kind: "scalar",
								T: 9,
								oneof: "partial_query",
							},
							{
								no: 2,
								name: "glob",
								kind: "scalar",
								T: 9,
								oneof: "partial_query",
							},
							{ no: 3, name: "index", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new qt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new qt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new qt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(qt, we, Pe);
					}
				}
				e.$GF = qt;
				class At extends t.Message {
					constructor(we) {
						super(), (this.apiKey = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ApiDetails";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "api_key", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "enable_ghost_mode",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new At().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new At().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new At().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(At, we, Pe);
					}
				}
				e.$HF = At;
				class Yt extends t.Message {
					constructor(we) {
						super(), (this.results = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FullFileSearchResult";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "results",
								kind: "message",
								T: a.$Uu,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Yt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Yt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Yt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Yt, we, Pe);
					}
				}
				e.$IF = Yt;
				class ni extends t.Message {
					constructor(we) {
						super(),
							(this.results = []),
							(this.allFiles = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CodeSearchResult";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "results",
								kind: "message",
								T: a.$Tu,
								repeated: !0,
							},
							{
								no: 2,
								name: "all_files",
								kind: "message",
								T: w.$Rs,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new ni().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ni().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ni().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ni, we, Pe);
					}
				}
				e.$JF = ni;
				class bi extends t.Message {
					constructor(we) {
						super(),
							(this.codeResults = []),
							(this.query = ""),
							(this.numBlocks = 0),
							(this.conversation = []),
							(this.contextResults = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.RerankerRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "code_results",
								kind: "message",
								T: a.$Tu,
								repeated: !0,
							},
							{ no: 2, name: "query", kind: "scalar", T: 9 },
							{ no: 3, name: "num_blocks", kind: "scalar", T: 5 },
							{ no: 4, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 5,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{ no: 6, name: "api_details", kind: "message", T: At },
							{
								no: 7,
								name: "file_search_results",
								kind: "message",
								T: Yt,
								oneof: "context_results",
							},
							{
								no: 8,
								name: "code_search_results",
								kind: "message",
								T: ni,
								oneof: "context_results",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new bi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new bi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new bi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(bi, we, Pe);
					}
				}
				e.$KF = bi;
				class fi extends t.Message {
					constructor(we) {
						super(), (this.results = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.RerankerResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "results",
								kind: "message",
								T: a.$Tu,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new fi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new fi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new fi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(fi, we, Pe);
					}
				}
				e.$LF = fi;
				class Ti extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GenerateTldrRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ti().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ti().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ti().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ti, we, Pe);
					}
				}
				e.$MF = Ti;
				class wt extends t.Message {
					constructor(we) {
						super(),
							(this.summary = ""),
							(this.all = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GenerateTldrResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "summary", kind: "scalar", T: 9 },
							{ no: 2, name: "all", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new wt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new wt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new wt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(wt, we, Pe);
					}
				}
				e.$NF = wt;
				class We extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.repositories = []),
							(this.codeBlocks = []),
							(this.documentationIdentifiers = []),
							(this.requestId = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskStreamChatContextRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 6,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 7, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 8,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 14, name: "linter_errors", kind: "message", T: w.$4s },
							{
								no: 15,
								name: "advanced_codebase_context",
								kind: "message",
								T: _e,
							},
							{ no: 16, name: "is_eval", kind: "scalar", T: 8, opt: !0 },
							{ no: 17, name: "request_id", kind: "scalar", T: 9 },
							{
								no: 18,
								name: "desired_token_limit",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new We().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new We().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new We().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(We, we, Pe);
					}
				}
				e.$OF = We;
				class _e extends t.Message {
					constructor(we) {
						super(),
							(this.numResultsPerSearch = 0),
							(this.reranker = a.RerankerAlgorithm.UNSPECIFIED),
							(this.reasoningStep = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AdvancedCodebaseContextOptions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "num_results_per_search", kind: "scalar", T: 5 },
							{ no: 2, name: "include_pattern", kind: "scalar", T: 9, opt: !0 },
							{ no: 3, name: "exclude_pattern", kind: "scalar", T: 9, opt: !0 },
							{
								no: 4,
								name: "reranker",
								kind: "enum",
								T: t.proto3.getEnumType(a.RerankerAlgorithm),
							},
							{ no: 5, name: "index_id", kind: "scalar", T: 9, opt: !0 },
							{ no: 6, name: "reasoning_step", kind: "scalar", T: 8 },
							{
								no: 7,
								name: "rechunker",
								kind: "enum",
								T: t.proto3.getEnumType(a.RechunkerChoice),
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new _e().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new _e().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new _e().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(_e, we, Pe);
					}
				}
				e.$PF = _e;
				class Si extends t.Message {
					constructor(we) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskStreamChatContextResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "output",
								kind: "message",
								T: gi,
								oneof: "response",
							},
							{
								no: 2,
								name: "gathering_step",
								kind: "message",
								T: Pi,
								oneof: "response",
							},
							{
								no: 3,
								name: "gathering_file",
								kind: "message",
								T: ki,
								oneof: "response",
							},
							{
								no: 4,
								name: "reranking_step",
								kind: "message",
								T: Hi,
								oneof: "response",
							},
							{
								no: 5,
								name: "reranking_file",
								kind: "message",
								T: Ji,
								oneof: "response",
							},
							{
								no: 6,
								name: "reasoning_step",
								kind: "message",
								T: cn,
								oneof: "response",
							},
							{
								no: 7,
								name: "reasoning_substep",
								kind: "message",
								T: un,
								oneof: "response",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Si().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Si().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Si().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Si, we, Pe);
					}
				}
				e.$QF = Si;
				class gi extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskStreamChatContextResponse.Output";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new gi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new gi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new gi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(gi, we, Pe);
					}
				}
				e.$RF = gi;
				class ki extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.stepIndex = 0),
							(this.score = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.TaskStreamChatContextResponse.GatheringFile";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "range", kind: "message", T: w.$Fs },
							{ no: 3, name: "step_index", kind: "scalar", T: 5 },
							{ no: 4, name: "score", kind: "scalar", T: 2 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ki().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ki().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ki().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ki, we, Pe);
					}
				}
				e.$SF = ki;
				class Pi extends t.Message {
					constructor(we) {
						super(),
							(this.title = ""),
							(this.index = 0),
							(this.query = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.TaskStreamChatContextResponse.GatheringStep";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "title", kind: "scalar", T: 9 },
							{ no: 2, name: "index", kind: "scalar", T: 5 },
							{ no: 3, name: "query", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Pi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Pi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Pi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Pi, we, Pe);
					}
				}
				e.$TF = Pi;
				class Hi extends t.Message {
					constructor(we) {
						super(),
							(this.title = ""),
							(this.index = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.TaskStreamChatContextResponse.RerankingStep";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "title", kind: "scalar", T: 9 },
							{ no: 2, name: "index", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Hi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Hi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Hi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Hi, we, Pe);
					}
				}
				e.$UF = Hi;
				class Ji extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.reason = ""),
							(this.failed = !1),
							(this.score = 0),
							(this.stepIndex = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.TaskStreamChatContextResponse.RerankingFile";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "range", kind: "message", T: w.$Fs },
							{ no: 3, name: "reason", kind: "scalar", T: 9 },
							{ no: 4, name: "failed", kind: "scalar", T: 8 },
							{ no: 5, name: "score", kind: "scalar", T: 2 },
							{ no: 6, name: "step_index", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ji().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ji().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ji().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ji, we, Pe);
					}
				}
				e.$VF = Ji;
				class cn extends t.Message {
					constructor(we) {
						super(),
							(this.title = ""),
							(this.index = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.TaskStreamChatContextResponse.ReasoningStep";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "title", kind: "scalar", T: 9 },
							{ no: 2, name: "index", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new cn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new cn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new cn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(cn, we, Pe);
					}
				}
				e.$WF = cn;
				class un extends t.Message {
					constructor(we) {
						super(),
							(this.markdownExplanation = ""),
							(this.stepIndex = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.TaskStreamChatContextResponse.ReasoningSubstep";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "markdown_explanation", kind: "scalar", T: 9 },
							{ no: 2, name: "step_index", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new un().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new un().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new un().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(un, we, Pe);
					}
				}
				e.$XF = un;
				class yn extends t.Message {
					constructor(we) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskStreamChatContextResponseWrapped";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "real_response",
								kind: "message",
								T: Si,
								oneof: "response",
							},
							{
								no: 2,
								name: "background_task_uuid",
								kind: "scalar",
								T: 9,
								oneof: "response",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new yn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new yn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new yn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(yn, we, Pe);
					}
				}
				e.$YF = yn;
				class Rn extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.repositories = []),
							(this.codeBlocks = []),
							(this.documentationIdentifiers = []),
							(this.query = ""),
							(this.rerankResults = !1),
							(this.contextResults = { case: void 0 }),
							(this.rerankResultsV2 = !1),
							(this.conversationId = ""),
							(this.canHandleFilenamesAfterLanguageIds = !1),
							(this.longContextMode = !1),
							(this.isEval = !1),
							(this.requestId = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatContextRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 6,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 7, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 8,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 9, name: "query", kind: "scalar", T: 9 },
							{ no: 10, name: "code_context", kind: "message", T: _i },
							{ no: 11, name: "rerank_results", kind: "scalar", T: 8 },
							{
								no: 12,
								name: "file_search_results",
								kind: "message",
								T: Yt,
								oneof: "context_results",
							},
							{
								no: 13,
								name: "code_search_results",
								kind: "message",
								T: ni,
								oneof: "context_results",
							},
							{ no: 14, name: "linter_errors", kind: "message", T: w.$4s },
							{ no: 15, name: "is_bash", kind: "scalar", T: 8, opt: !0 },
							{ no: 16, name: "rerank_results_v2", kind: "scalar", T: 8 },
							{ no: 17, name: "conversation_id", kind: "scalar", T: 9 },
							{
								no: 18,
								name: "can_handle_filenames_after_language_ids",
								kind: "scalar",
								T: 8,
							},
							{ no: 19, name: "long_context_mode", kind: "scalar", T: 8 },
							{ no: 20, name: "is_eval", kind: "scalar", T: 8 },
							{ no: 21, name: "request_id", kind: "scalar", T: 9 },
							{
								no: 22,
								name: "desired_max_tokens",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{
								no: 23,
								name: "runnable_code_blocks",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Rn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Rn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Rn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Rn, we, Pe);
					}
				}
				e.$ZF = Rn;
				class _i extends t.Message {
					constructor(we) {
						super(),
							(this.chunks = []),
							(this.scoredChunks = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatContextRequest.CodeContext";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "chunks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{
								no: 2,
								name: "scored_chunks",
								kind: "message",
								T: a.$Tu,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new _i().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new _i().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new _i().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(_i, we, Pe);
					}
				}
				e.$1F = _i;
				class Bn extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatContextResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
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
							{ no: 4, name: "document_citation", kind: "message", T: C.$oA },
							{ no: 5, name: "filled_prompt", kind: "scalar", T: 9, opt: !0 },
							{ no: 6, name: "used_code", kind: "message", T: Mn },
							{ no: 7, name: "code_link", kind: "message", T: zn },
							{
								no: 8,
								name: "chunk_identity",
								kind: "message",
								T: $n,
								opt: !0,
							},
							{
								no: 9,
								name: "docs_reference",
								kind: "message",
								T: C.$rA,
								opt: !0,
							},
							{
								no: 10,
								name: "symbol_link",
								kind: "message",
								T: C.$JA,
								opt: !0,
							},
							{ no: 11, name: "file_link", kind: "message", T: C.$KA, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Bn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Bn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Bn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Bn, we, Pe);
					}
				}
				e.$2F = Bn;
				class Mn extends t.Message {
					constructor(we) {
						super(),
							(this.codeResults = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatContextResponse.UsedCode";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "code_results",
								kind: "message",
								T: a.$Tu,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Mn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Mn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Mn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Mn, we, Pe);
					}
				}
				e.$3F = Mn;
				class zn extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.startLineNumber = 0),
							(this.endLineNumber = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatContextResponse.CodeLink";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "start_line_number", kind: "scalar", T: 5 },
							{ no: 3, name: "end_line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new zn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new zn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new zn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(zn, we, Pe);
					}
				}
				e.$4F = zn;
				class $n extends t.Message {
					constructor(we) {
						super(),
							(this.fileName = ""),
							(this.startLine = 0),
							(this.endLine = 0),
							(this.text = ""),
							(this.chunkType = C.ChunkType.UNSPECIFIED),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamChatContextResponse.ChunkIdentity";
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
								T: t.proto3.getEnumType(C.ChunkType),
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new $n().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new $n().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new $n().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals($n, we, Pe);
					}
				}
				e.$5F = $n;
				class Ln extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.rerankResults = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatDeepContextRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{ no: 2, name: "explicit_context", kind: "message", T: w.$6s },
							{ no: 3, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 4, name: "context_results", kind: "message", T: a.$qv },
							{ no: 5, name: "rerank_results", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ln().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ln().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ln().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ln, we, Pe);
					}
				}
				e.$6F = Ln;
				class wn extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatDeepContextResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new wn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new wn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new wn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(wn, we, Pe);
					}
				}
				e.$7F = wn;
				class Hn extends t.Message {
					constructor(we) {
						super(),
							(this.docIdentifier = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DocumentationInfo";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
							{ no: 2, name: "metadata", kind: "message", T: h.$Wz },
						]);
					}
					static fromBinary(we, Pe) {
						return new Hn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Hn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Hn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Hn, we, Pe);
					}
				}
				e.$8F = Hn;
				class Yn extends t.Message {
					constructor(we) {
						super(),
							(this.partialDoc = { case: void 0 }),
							(this.additionalDocIdentifiers = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AvailableDocsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "partial_url",
								kind: "scalar",
								T: 9,
								oneof: "partial_doc",
							},
							{
								no: 2,
								name: "partial_doc_name",
								kind: "scalar",
								T: 9,
								oneof: "partial_doc",
							},
							{
								no: 3,
								name: "get_all",
								kind: "scalar",
								T: 8,
								oneof: "partial_doc",
							},
							{
								no: 4,
								name: "additional_doc_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Yn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Yn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Yn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Yn, we, Pe);
					}
				}
				e.$9F = Yn;
				class Es extends t.Message {
					constructor(we) {
						super(), (this.docs = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AvailableDocsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "docs", kind: "message", T: Hn, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Es().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Es().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Es().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Es, we, Pe);
					}
				}
				e.$0F = Es;
				class Nn extends t.Message {
					constructor(we) {
						super(),
							(this.error = w.ErrorDetails_Error.UNSPECIFIED),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ThrowErrorCheckRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "error",
								kind: "enum",
								T: t.proto3.getEnumType(w.ErrorDetails_Error),
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Nn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Nn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Nn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Nn, we, Pe);
					}
				}
				e.$$F = Nn;
				class Fn extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ThrowErrorCheckResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Fn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Fn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Fn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Fn, we, Pe);
					}
				}
				e.$_F = Fn;
				class Gn extends t.Message {
					constructor(we) {
						super(),
							(this.isNightly = !1),
							(this.includeLongContextModels = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AvailableModelsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "is_nightly", kind: "scalar", T: 8 },
							{
								no: 2,
								name: "include_long_context_models",
								kind: "scalar",
								T: 8,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Gn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Gn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Gn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Gn, we, Pe);
					}
				}
				e.$aG = Gn;
				class Dn extends t.Message {
					constructor(we) {
						super(),
							(this.models = []),
							(this.modelNames = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AvailableModelsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 2, name: "models", kind: "message", T: jn, repeated: !0 },
							{
								no: 1,
								name: "model_names",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Dn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Dn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Dn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Dn, we, Pe);
					}
				}
				e.$bG = Dn;
				class jn extends t.Message {
					constructor(we) {
						super(),
							(this.name = ""),
							(this.defaultOn = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.AvailableModelsResponse.AvailableModel";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "default_on", kind: "scalar", T: 8 },
							{
								no: 3,
								name: "is_long_context_only",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 4, name: "is_chat_only", kind: "scalar", T: 8, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new jn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new jn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new jn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(jn, we, Pe);
					}
				}
				e.$cG = jn;
				class rs extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.HealthCheckRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new rs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new rs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new rs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(rs, we, Pe);
					}
				}
				e.$dG = rs;
				class Js extends t.Message {
					constructor(we) {
						super(),
							(this.status = ts.UNSPECIFIED),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.HealthCheckResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "status",
								kind: "enum",
								T: t.proto3.getEnumType(ts),
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Js().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Js().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Js().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Js, we, Pe);
					}
				}
				e.$eG = Js;
				var ts;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.HEALTHY = 1)] = "HEALTHY");
				})(ts || (e.HealthCheckResponse_Status = ts = {})),
					t.proto3.util.setEnumType(
						ts,
						"aiserver.v1.HealthCheckResponse.Status",
						[
							{ no: 0, name: "STATUS_UNSPECIFIED" },
							{ no: 1, name: "STATUS_HEALTHY" },
						],
					);
				class js extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PrivacyCheckRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new js().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new js().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new js().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(js, we, Pe);
					}
				}
				e.$fG = js;
				class os extends t.Message {
					constructor(we) {
						super(),
							(this.isOnPrivacyPod = !1),
							(this.isGhostModeOn = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PrivacyCheckResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "is_on_privacy_pod", kind: "scalar", T: 8 },
							{ no: 2, name: "is_ghost_mode_on", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new os().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new os().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new os().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(os, we, Pe);
					}
				}
				e.$gG = os;
				class En extends t.Message {
					constructor(we) {
						super(), (this.timeLeft = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TimeLeftHealthCheckResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "time_left", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new En().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new En().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new En().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(En, we, Pe);
					}
				}
				e.$hG = En;
				class ns extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.repositories = []),
							(this.query = ""),
							(this.codeBlocks = []),
							(this.documentationIdentifiers = []),
							(this.promptCodeBlocks = []),
							(this.sessionId = ""),
							(this.fastMode = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamGenerateRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{ no: 6, name: "query", kind: "scalar", T: 9 },
							{
								no: 7,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 9, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 10,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 11, name: "linter_errors", kind: "message", T: w.$4s },
							{
								no: 12,
								name: "prompt_code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 14, name: "session_id", kind: "scalar", T: 9 },
							{ no: 13, name: "cmd_k_debug_info", kind: "message", T: w.$Hs },
							{ no: 15, name: "fast_mode", kind: "scalar", T: 8 },
							{ no: 16, name: "original_request", kind: "message", T: ns },
						]);
					}
					static fromBinary(we, Pe) {
						return new ns().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ns().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ns().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ns, we, Pe);
					}
				}
				e.$iG = ns;
				class Fi extends t.Message {
					constructor(we) {
						super(),
							(this.chunk = ""),
							(this.fileContext = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReviewRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "chunk", kind: "scalar", T: 9 },
							{ no: 2, name: "file_context", kind: "scalar", T: 9 },
							{ no: 3, name: "chunk_range", kind: "message", T: w.$Ms },
							{ no: 4, name: "diff_string", kind: "scalar", T: 9, opt: !0 },
							{
								no: 5,
								name: "custom_instructions",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Fi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Fi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Fi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Fi, we, Pe);
					}
				}
				e.$jG = Fi;
				class zi extends t.Message {
					constructor(we) {
						super(),
							(this.text = ""),
							(this.type = Zi.UNSPECIFIED),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReviewChatMessage";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "type",
								kind: "enum",
								T: t.proto3.getEnumType(Zi),
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new zi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new zi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new zi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(zi, we, Pe);
					}
				}
				e.$kG = zi;
				var Zi;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.HUMAN = 1)] = "HUMAN"),
						(Bi[(Bi.AI = 2)] = "AI");
				})(Zi || (e.ReviewChatMessage_ReviewChatMessageType = Zi = {})),
					t.proto3.util.setEnumType(
						Zi,
						"aiserver.v1.ReviewChatMessage.ReviewChatMessageType",
						[
							{ no: 0, name: "REVIEW_CHAT_MESSAGE_TYPE_UNSPECIFIED" },
							{ no: 1, name: "REVIEW_CHAT_MESSAGE_TYPE_HUMAN" },
							{ no: 2, name: "REVIEW_CHAT_MESSAGE_TYPE_AI" },
						],
					);
				class nn extends t.Message {
					constructor(we) {
						super(),
							(this.chunk = ""),
							(this.fileContext = ""),
							(this.messages = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReviewChatRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "chunk", kind: "scalar", T: 9 },
							{ no: 2, name: "file_context", kind: "scalar", T: 9 },
							{ no: 3, name: "chunk_range", kind: "message", T: w.$Ms },
							{ no: 4, name: "messages", kind: "message", T: zi, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new nn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new nn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new nn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(nn, we, Pe);
					}
				}
				e.$lG = nn;
				class fn extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReviewChatResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "should_resolve", kind: "scalar", T: 8, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new fn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new fn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new fn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(fn, we, Pe);
					}
				}
				e.$mG = fn;
				class xn extends t.Message {
					constructor(we) {
						super(), (this.id = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReviewBug";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "id", kind: "scalar", T: 9 },
							{ no: 2, name: "start_line", kind: "scalar", T: 5, opt: !0 },
							{ no: 3, name: "end_line", kind: "scalar", T: 5, opt: !0 },
							{ no: 4, name: "description", kind: "scalar", T: 9, opt: !0 },
							{ no: 5, name: "severity", kind: "scalar", T: 5, opt: !0 },
							{ no: 6, name: "tldr", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new xn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new xn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new xn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(xn, we, Pe);
					}
				}
				e.$nG = xn;
				class Sn extends t.Message {
					constructor(we) {
						super(),
							(this.text = ""),
							(this.bugs = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReviewResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "prompt", kind: "scalar", T: 9, opt: !0 },
							{ no: 3, name: "tldr", kind: "scalar", T: 9, opt: !0 },
							{ no: 4, name: "is_bug", kind: "scalar", T: 8, opt: !0 },
							{ no: 5, name: "bugs", kind: "message", T: xn, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Sn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Sn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Sn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Sn, we, Pe);
					}
				}
				e.$oG = Sn;
				class Un extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.isCmdI = !1),
							(this.files = []),
							(this.useFastApply = !1),
							(this.fastApplyModelType = as.UNSPECIFIED),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SlashEditRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 2, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 3,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{ no: 7, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 8, name: "is_cmd_i", kind: "scalar", T: 8 },
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
								name: "should_use_turbo_debug_prompt",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 14,
								name: "edit_selection",
								kind: "message",
								T: w.$Ms,
								opt: !0,
							},
							{
								no: 15,
								name: "files",
								kind: "message",
								T: w.$Ws,
								repeated: !0,
							},
							{
								no: 16,
								name: "clicked_code_block_contents",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 17,
								name: "is_an_optimistic_request_for_caching_and_linting",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 18,
								name: "specific_instructions",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{ no: 19, name: "use_fast_apply", kind: "scalar", T: 8 },
							{
								no: 20,
								name: "fast_apply_model_type",
								kind: "enum",
								T: t.proto3.getEnumType(as),
							},
							{
								no: 25,
								name: "use_chunk_speculation_for_long_files",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 26,
								name: "parent_request_id",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 27,
								name: "source",
								kind: "enum",
								T: t.proto3.getEnumType(c.FastApplySource),
								opt: !0,
							},
							{ no: 28, name: "is_reapply", kind: "scalar", T: 8, opt: !0 },
							{
								no: 29,
								name: "willing_to_pay_extra_for_speed",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Un().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Un().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Un().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Un, we, Pe);
					}
				}
				e.$pG = Un;
				var as;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.DEFAULT = 1)] = "DEFAULT"),
						(Bi[(Bi.DEEPSEEK = 2)] = "DEEPSEEK"),
						(Bi[(Bi.SONNET = 3)] = "SONNET"),
						(Bi[(Bi.OPUS_DIFF = 4)] = "OPUS_DIFF"),
						(Bi[(Bi.SMART_REWRITE = 5)] = "SMART_REWRITE"),
						(Bi[(Bi.GPT4 = 6)] = "GPT4"),
						(Bi[(Bi.GPT4_NOSPEC = 7)] = "GPT4_NOSPEC"),
						(Bi[(Bi.SMART_REWRITE_NOSPEC = 8)] = "SMART_REWRITE_NOSPEC"),
						(Bi[(Bi.OPUS = 9)] = "OPUS"),
						(Bi[(Bi.HAIKU = 10)] = "HAIKU"),
						(Bi[(Bi.GPT4O_NOSPEC = 11)] = "GPT4O_NOSPEC"),
						(Bi[(Bi.GPT4O_DIFF = 12)] = "GPT4O_DIFF"),
						(Bi[(Bi.CODESTRAL_REWRITE = 13)] = "CODESTRAL_REWRITE"),
						(Bi[(Bi.DEEPSEEK_33B = 14)] = "DEEPSEEK_33B"),
						(Bi[(Bi.SONNET_35_DIFF = 15)] = "SONNET_35_DIFF"),
						(Bi[(Bi.SONNET_35_REWRITE = 16)] = "SONNET_35_REWRITE"),
						(Bi[(Bi.PROMPTED_DEEPSEEK_V2 = 17)] = "PROMPTED_DEEPSEEK_V2"),
						(Bi[(Bi.CODESTRAL_REWRITE_OLD = 18)] = "CODESTRAL_REWRITE_OLD"),
						(Bi[(Bi.CODESTRAL_REWRITE_FP16 = 19)] = "CODESTRAL_REWRITE_FP16"),
						(Bi[(Bi.DEEPSEEK_33B_V2 = 20)] = "DEEPSEEK_33B_V2"),
						(Bi[(Bi.CODESTRAL_V4 = 21)] = "CODESTRAL_V4"),
						(Bi[(Bi.CODESTRAL_V5 = 22)] = "CODESTRAL_V5"),
						(Bi[(Bi.CODESTRAL_V6 = 23)] = "CODESTRAL_V6"),
						(Bi[(Bi.CODESTRAL_V7 = 24)] = "CODESTRAL_V7");
				})(as || (e.SlashEditRequest_FastApplyModelType = as = {})),
					t.proto3.util.setEnumType(
						as,
						"aiserver.v1.SlashEditRequest.FastApplyModelType",
						[
							{ no: 0, name: "FAST_APPLY_MODEL_TYPE_UNSPECIFIED" },
							{ no: 1, name: "FAST_APPLY_MODEL_TYPE_DEFAULT" },
							{ no: 2, name: "FAST_APPLY_MODEL_TYPE_DEEPSEEK" },
							{ no: 3, name: "FAST_APPLY_MODEL_TYPE_SONNET" },
							{ no: 4, name: "FAST_APPLY_MODEL_TYPE_OPUS_DIFF" },
							{ no: 5, name: "FAST_APPLY_MODEL_TYPE_SMART_REWRITE" },
							{ no: 6, name: "FAST_APPLY_MODEL_TYPE_GPT4" },
							{ no: 7, name: "FAST_APPLY_MODEL_TYPE_GPT4_NOSPEC" },
							{ no: 8, name: "FAST_APPLY_MODEL_TYPE_SMART_REWRITE_NOSPEC" },
							{ no: 9, name: "FAST_APPLY_MODEL_TYPE_OPUS" },
							{ no: 10, name: "FAST_APPLY_MODEL_TYPE_HAIKU" },
							{ no: 11, name: "FAST_APPLY_MODEL_TYPE_GPT4O_NOSPEC" },
							{ no: 12, name: "FAST_APPLY_MODEL_TYPE_GPT4O_DIFF" },
							{ no: 13, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE" },
							{ no: 14, name: "FAST_APPLY_MODEL_TYPE_DEEPSEEK_33B" },
							{ no: 15, name: "FAST_APPLY_MODEL_TYPE_SONNET_35_DIFF" },
							{ no: 16, name: "FAST_APPLY_MODEL_TYPE_SONNET_35_REWRITE" },
							{ no: 17, name: "FAST_APPLY_MODEL_TYPE_PROMPTED_DEEPSEEK_V2" },
							{ no: 18, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE_OLD" },
							{ no: 19, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE_FP16" },
							{ no: 20, name: "FAST_APPLY_MODEL_TYPE_DEEPSEEK_33B_V2" },
							{ no: 21, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V4" },
							{ no: 22, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V5" },
							{ no: 23, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V6" },
							{ no: 24, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V7" },
						],
					);
				class Qn extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SlashEditResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "cmd_k_response", kind: "message", T: u.$KC },
						]);
					}
					static fromBinary(we, Pe) {
						return new Qn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Qn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Qn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Qn, we, Pe);
					}
				}
				e.$qG = Qn;
				class $s extends t.Message {
					constructor(we) {
						super(),
							(this.originalLines = []),
							(this.newLines = []),
							(this.relativeWorkspacePath = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SlashEditPreviousEdit";
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
							{ no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 4, name: "range", kind: "message", T: w.$Ms },
						]);
					}
					static fromBinary(we, Pe) {
						return new $s().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new $s().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new $s().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals($s, we, Pe);
					}
				}
				e.$rG = $s;
				class Us extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.previousEdits = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.SlashEditFollowUpWithPreviousEditsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{ no: 2, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 3,
								name: "previous_edits",
								kind: "message",
								T: $s,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Us().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Us().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Us().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Us, we, Pe);
					}
				}
				e.$sG = Us;
				class _n extends t.Message {
					constructor(we) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "chat",
								kind: "message",
								T: sn,
								oneof: "response",
							},
							{
								no: 2,
								name: "edits_to_update",
								kind: "message",
								T: dn,
								oneof: "response",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new _n().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new _n().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new _n().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(_n, we, Pe);
					}
				}
				e.$tG = _n;
				class sn extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse.Chat";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new sn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new sn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new sn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(sn, we, Pe);
					}
				}
				e.$uG = sn;
				class dn extends t.Message {
					constructor(we) {
						super(),
							(this.previousEdits = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse.EditsToUpdate";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "previous_edits",
								kind: "message",
								T: $s,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new dn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new dn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new dn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(dn, we, Pe);
					}
				}
				e.$vG = dn;
				class An extends t.Message {
					constructor(we) {
						super(),
							(this.repositories = []),
							(this.query = ""),
							(this.codeBlocks = []),
							(this.documentationIdentifiers = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamFastEditRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{ no: 6, name: "query", kind: "scalar", T: 9 },
							{
								no: 7,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 9, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 10,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 11, name: "linter_errors", kind: "message", T: w.$4s },
						]);
					}
					static fromBinary(we, Pe) {
						return new An().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new An().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new An().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(An, we, Pe);
					}
				}
				e.$wG = An;
				class vn extends t.Message {
					constructor(we) {
						super(),
							(this.lineNumber = 0),
							(this.replaceNumLines = 0),
							(this.editUuid = ""),
							(this.resetNewLines = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamFastEditResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 2, name: "line_number", kind: "scalar", T: 5 },
							{ no: 3, name: "replace_num_lines", kind: "scalar", T: 5 },
							{ no: 5, name: "edit_uuid", kind: "scalar", T: 9 },
							{ no: 4, name: "done", kind: "scalar", T: 8, opt: !0 },
							{ no: 6, name: "new_line", kind: "scalar", T: 9, opt: !0 },
							{ no: 7, name: "reset_new_lines", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new vn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new vn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new vn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(vn, we, Pe);
					}
				}
				e.$xG = vn;
				class Pn extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.repositories = []),
							(this.query = ""),
							(this.codeBlocks = []),
							(this.documentationIdentifiers = []),
							(this.promptCodeBlocks = []),
							(this.sessionId = ""),
							(this.fastMode = !1),
							(this.images = []),
							(this.links = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamEditRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{ no: 6, name: "query", kind: "scalar", T: 9 },
							{
								no: 7,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 9, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 10,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 11, name: "linter_errors", kind: "message", T: w.$4s },
							{
								no: 12,
								name: "prompt_code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 14, name: "session_id", kind: "scalar", T: 9 },
							{ no: 13, name: "cmd_k_debug_info", kind: "message", T: w.$Hs },
							{ no: 15, name: "fast_mode", kind: "scalar", T: 8 },
							{ no: 16, name: "original_request", kind: "message", T: Pn },
							{
								no: 17,
								name: "images",
								kind: "message",
								T: w.$ct,
								repeated: !0,
							},
							{
								no: 18,
								name: "links",
								kind: "message",
								T: w.$ht,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Pn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Pn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Pn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Pn, we, Pe);
					}
				}
				e.$yG = Pn;
				class es extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PreloadEditRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "req", kind: "message", T: Pn },
						]);
					}
					static fromBinary(we, Pe) {
						return new es().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new es().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new es().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(es, we, Pe);
					}
				}
				e.$zG = es;
				class ls extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PreloadEditResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new ls().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ls().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ls().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ls, we, Pe);
					}
				}
				e.$AG = ls;
				class Jn extends t.Message {
					constructor(we) {
						super(),
							(this.chunksToAnalyze = []),
							(this.dismissedBugs = []),
							(this.activeBugs = []),
							(this.lintRules = []),
							(this.clients = []),
							(this.forceEnableDiscriminators = []),
							(this.forceDisableDiscriminators = []),
							(this.forceEnableGenerators = []),
							(this.forceDisableGenerators = []),
							(this.version = 0),
							(this.debugMode = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamAiLintBugRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "chunks_to_analyze",
								kind: "message",
								T: ss,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{ no: 9, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 10,
								name: "dismissed_bugs",
								kind: "message",
								T: n.$aD,
								repeated: !0,
							},
							{
								no: 11,
								name: "active_bugs",
								kind: "message",
								T: n.$aD,
								repeated: !0,
							},
							{
								no: 12,
								name: "lint_rules",
								kind: "message",
								T: n.$eD,
								repeated: !0,
							},
							{ no: 14, name: "clients", kind: "message", T: us, repeated: !0 },
							{
								no: 17,
								name: "force_enable_discriminators",
								kind: "enum",
								T: t.proto3.getEnumType(n.LintDiscriminator),
								repeated: !0,
							},
							{
								no: 18,
								name: "force_disable_discriminators",
								kind: "enum",
								T: t.proto3.getEnumType(n.LintDiscriminator),
								repeated: !0,
							},
							{
								no: 19,
								name: "force_enable_generators",
								kind: "enum",
								T: t.proto3.getEnumType(n.LintGenerator),
								repeated: !0,
							},
							{
								no: 20,
								name: "force_disable_generators",
								kind: "enum",
								T: t.proto3.getEnumType(n.LintGenerator),
								repeated: !0,
							},
							{ no: 21, name: "version", kind: "scalar", T: 5 },
							{
								no: 15,
								name: "discriminator_options",
								kind: "message",
								T: Rs,
								opt: !0,
							},
							{ no: 16, name: "debug_mode", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Jn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Jn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Jn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Jn, we, Pe);
					}
				}
				e.$BG = Jn;
				class ss extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.startLineNumber = 0),
							(this.lines = []),
							(this.contextLinesBefore = []),
							(this.contextLinesAfter = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamAiLintBugRequest.CodeChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "start_line_number", kind: "scalar", T: 5 },
							{ no: 3, name: "lines", kind: "scalar", T: 9, repeated: !0 },
							{
								no: 4,
								name: "context_lines_before",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 5,
								name: "context_lines_after",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new ss().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ss().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ss().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ss, we, Pe);
					}
				}
				e.$CG = ss;
				class us extends t.Message {
					constructor(we) {
						super(),
							(this.chunks = []),
							(this.referredStartLines = []),
							(this.referredEndLines = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamAiLintBugRequest.CodeChunkList";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 13, name: "chunks", kind: "message", T: ss, repeated: !0 },
							{
								no: 14,
								name: "referred_start_lines",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
							{
								no: 15,
								name: "referred_end_lines",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new us().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new us().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new us().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(us, we, Pe);
					}
				}
				e.$DG = us;
				class Rs extends t.Message {
					constructor(we) {
						super(),
							(this.specificRules = !1),
							(this.compileErrors = !1),
							(this.changeBehavior = !1),
							(this.matchCode = !1),
							(this.relevance = !1),
							(this.userAwareness = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamAiLintBugRequest.DiscriminatorOptions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "specific_rules", kind: "scalar", T: 8 },
							{ no: 2, name: "compile_errors", kind: "scalar", T: 8 },
							{ no: 3, name: "change_behavior", kind: "scalar", T: 8 },
							{ no: 4, name: "match_code", kind: "scalar", T: 8 },
							{ no: 5, name: "relevance", kind: "scalar", T: 8 },
							{ no: 6, name: "user_awareness", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Rs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Rs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Rs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Rs, we, Pe);
					}
				}
				e.$EG = Rs;
				class Ws extends t.Message {
					constructor(we) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamAiLintBugResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "bug",
								kind: "message",
								T: n.$aD,
								oneof: "response",
							},
							{
								no: 2,
								name: "background_task_uuid",
								kind: "scalar",
								T: 9,
								oneof: "response",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Ws().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ws().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ws().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ws, we, Pe);
					}
				}
				e.$FG = Ws;
				class br extends t.Message {
					constructor(we) {
						super(),
							(this.uuid = ""),
							(this.userAction = ""),
							(this.debugMode = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.LogUserLintReplyRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "user_action", kind: "scalar", T: 9 },
							{ no: 3, name: "debug_mode", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new br().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new br().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new br().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(br, we, Pe);
					}
				}
				e.$GG = br;
				class $r extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.LogUserLintReplyResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new $r().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new $r().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new $r().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals($r, we, Pe);
					}
				}
				e.$HG = $r;
				class Xs extends t.Message {
					constructor(we) {
						super(),
							(this.userFeedback = ir.UNSPECIFIED),
							(this.userFeedbackDetails = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.LogLinterExplicitUserFeedbackRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "bug", kind: "message", T: n.$aD },
							{
								no: 3,
								name: "user_feedback",
								kind: "enum",
								T: t.proto3.getEnumType(ir),
							},
							{ no: 4, name: "user_feedback_details", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Xs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Xs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Xs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Xs, we, Pe);
					}
				}
				e.$IG = Xs;
				var ir;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.CORRECT = 1)] = "CORRECT"),
						(Bi[(Bi.INCORRECT = 2)] = "INCORRECT"),
						(Bi[(Bi.OTHER = 3)] = "OTHER");
				})(
					ir ||
						(e.LogLinterExplicitUserFeedbackRequest_LinterUserFeedback = ir =
							{}),
				),
					t.proto3.util.setEnumType(
						ir,
						"aiserver.v1.LogLinterExplicitUserFeedbackRequest.LinterUserFeedback",
						[
							{ no: 0, name: "LINTER_USER_FEEDBACK_UNSPECIFIED" },
							{ no: 1, name: "LINTER_USER_FEEDBACK_CORRECT" },
							{ no: 2, name: "LINTER_USER_FEEDBACK_INCORRECT" },
							{ no: 3, name: "LINTER_USER_FEEDBACK_OTHER" },
						],
					);
				class nr extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.LogLinterExplicitUserFeedbackResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new nr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new nr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new nr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(nr, we, Pe);
					}
				}
				e.$JG = nr;
				class Ys extends t.Message {
					constructor(we) {
						super(),
							(this.currentRules = ""),
							(this.dismissedBug = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamNewRuleRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_rules", kind: "scalar", T: 9 },
							{ no: 2, name: "dismissed_bug", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ys().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ys().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ys().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ys, we, Pe);
					}
				}
				e.$KG = Ys;
				class yr extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.repositories = []),
							(this.query = ""),
							(this.codeBlocks = []),
							(this.sessionId = ""),
							(this.documentationIdentifiers = []),
							(this.promptCodeBlocks = []),
							(this.fastMode = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamGPTFourEditRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{ no: 6, name: "query", kind: "scalar", T: 9 },
							{
								no: 7,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 14, name: "session_id", kind: "scalar", T: 9 },
							{ no: 9, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 10,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 11, name: "linter_errors", kind: "message", T: w.$4s },
							{
								no: 12,
								name: "prompt_code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 13, name: "fast_mode", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new yr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new yr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new yr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(yr, we, Pe);
					}
				}
				e.$LG = yr;
				class Zs extends t.Message {
					constructor(we) {
						super(), (this.source = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CppIntentInfo";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "source", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Zs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Zs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Zs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Zs, we, Pe);
					}
				}
				e.$MG = Zs;
				class wr extends t.Message {
					constructor(we) {
						super(),
							(this.id = ""),
							(this.role = ""),
							(this.content = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CursorHelpConversationMessage";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "id", kind: "scalar", T: 9 },
							{ no: 2, name: "role", kind: "scalar", T: 9 },
							{ no: 3, name: "content", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new wr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new wr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new wr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(wr, we, Pe);
					}
				}
				e.$NG = wr;
				class vr extends t.Message {
					constructor(we) {
						super(),
							(this.messages = []),
							(this.userOs = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamAiCursorHelpRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "messages", kind: "message", T: wr, repeated: !0 },
							{ no: 2, name: "user_os", kind: "scalar", T: 9 },
							{ no: 3, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new vr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new vr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new vr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(vr, we, Pe);
					}
				}
				e.$OG = vr;
				class Cr extends t.Message {
					constructor(we) {
						super(),
							(this.text = ""),
							(this.actions = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamAiCursorHelpResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "actions", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Cr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Cr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Cr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Cr, we, Pe);
					}
				}
				e.$PG = Cr;
				class sr extends t.Message {
					constructor(we) {
						super(),
							(this.diffHistory = []),
							(this.contextItems = []),
							(this.diffHistoryKeys = []),
							(this.fileDiffHistories = []),
							(this.mergedDiffHistories = []),
							(this.blockDiffPatches = []),
							(this.parameterHints = []),
							(this.lspContexts = []),
							(this.additionalFiles = []),
							(this.filesyncUpdates = []),
							(this.timeSinceRequestStart = 0),
							(this.timeAtRequestSend = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCppRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "diff_history",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 3, name: "model_name", kind: "scalar", T: 9, opt: !0 },
							{
								no: 4,
								name: "linter_errors",
								kind: "message",
								T: w.$4s,
								opt: !0,
							},
							{
								no: 13,
								name: "context_items",
								kind: "message",
								T: d.$Iv,
								repeated: !0,
							},
							{
								no: 5,
								name: "diff_history_keys",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 6,
								name: "give_debug_output",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 7,
								name: "file_diff_histories",
								kind: "message",
								T: d.$Hv,
								repeated: !0,
							},
							{
								no: 8,
								name: "merged_diff_histories",
								kind: "message",
								T: d.$Hv,
								repeated: !0,
							},
							{
								no: 9,
								name: "block_diff_patches",
								kind: "message",
								T: d.$gx,
								repeated: !0,
							},
							{ no: 10, name: "is_nightly", kind: "scalar", T: 8, opt: !0 },
							{ no: 11, name: "is_debug", kind: "scalar", T: 8, opt: !0 },
							{
								no: 12,
								name: "immediately_ack",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 17,
								name: "enable_more_context",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 14,
								name: "parameter_hints",
								kind: "message",
								T: d.$Lv,
								repeated: !0,
							},
							{
								no: 15,
								name: "lsp_contexts",
								kind: "message",
								T: m.$jB,
								repeated: !0,
							},
							{
								no: 16,
								name: "cpp_intent_info",
								kind: "message",
								T: Zs,
								opt: !0,
							},
							{ no: 18, name: "workspace_id", kind: "scalar", T: 9, opt: !0 },
							{
								no: 19,
								name: "additional_files",
								kind: "message",
								T: Sr,
								repeated: !0,
							},
							{
								no: 20,
								name: "control_token",
								kind: "enum",
								T: t.proto3.getEnumType(Io),
								opt: !0,
							},
							{ no: 21, name: "client_time", kind: "scalar", T: 1, opt: !0 },
							{
								no: 22,
								name: "filesync_updates",
								kind: "message",
								T: r.$mB,
								repeated: !0,
							},
							{
								no: 23,
								name: "time_since_request_start",
								kind: "scalar",
								T: 1,
							},
							{ no: 24, name: "time_at_request_send", kind: "scalar", T: 1 },
							{
								no: 25,
								name: "client_timezone_offset",
								kind: "scalar",
								T: 1,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new sr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new sr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new sr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(sr, we, Pe);
					}
				}
				e.$QG = sr;
				var Io;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.QUIET = 1)] = "QUIET"),
						(Bi[(Bi.LOUD = 2)] = "LOUD"),
						(Bi[(Bi.OP = 3)] = "OP");
				})(Io || (e.StreamCppRequest_ControlToken = Io = {})),
					t.proto3.util.setEnumType(
						Io,
						"aiserver.v1.StreamCppRequest.ControlToken",
						[
							{ no: 0, name: "CONTROL_TOKEN_UNSPECIFIED" },
							{ no: 1, name: "CONTROL_TOKEN_QUIET" },
							{ no: 2, name: "CONTROL_TOKEN_LOUD" },
							{ no: 3, name: "CONTROL_TOKEN_OP" },
						],
					);
				class Sr extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.isOpen = !1),
							(this.visibleRangeContent = []),
							(this.startLineNumberOneIndexed = []),
							(this.visibleRanges = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.AdditionalFile";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "is_open", kind: "scalar", T: 8 },
							{
								no: 3,
								name: "visible_range_content",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 4, name: "last_viewed_at", kind: "scalar", T: 1, opt: !0 },
							{
								no: 5,
								name: "start_line_number_one_indexed",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
							{
								no: 6,
								name: "visible_ranges",
								kind: "message",
								T: w.$Ms,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Sr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Sr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Sr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Sr, we, Pe);
					}
				}
				e.$RG = Sr;
				class Xr extends t.Message {
					constructor(we) {
						super(),
							(this.currentCommand = ""),
							(this.commandHistory = []),
							(this.fileDiffHistories = []),
							(this.commitHistory = []),
							(this.pastResults = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamTerminalAutocompleteRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_command", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "command_history",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 3, name: "model_name", kind: "scalar", T: 9, opt: !0 },
							{
								no: 4,
								name: "file_diff_histories",
								kind: "message",
								T: d.$Hv,
								repeated: !0,
							},
							{ no: 5, name: "git_diff", kind: "scalar", T: 9, opt: !0 },
							{
								no: 6,
								name: "commit_history",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 7,
								name: "past_results",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Xr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Xr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Xr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Xr, we, Pe);
					}
				}
				e.$SG = Xr;
				class Qs extends t.Message {
					constructor(we) {
						super(), (this.content = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PseudocodeTarget";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "range", kind: "message", T: w.$Fs },
							{ no: 2, name: "content", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Qs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Qs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Qs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Qs, we, Pe);
					}
				}
				e.$TG = Qs;
				class qs extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamPseudocodeGeneratorRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{ no: 2, name: "target", kind: "message", T: Qs },
						]);
					}
					static fromBinary(we, Pe) {
						return new qs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new qs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new qs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(qs, we, Pe);
					}
				}
				e.$UG = qs;
				class xr extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamPseudocodeGeneratorResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new xr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new xr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new xr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(xr, we, Pe);
					}
				}
				e.$VG = xr;
				class Yr extends t.Message {
					constructor(we) {
						super(),
							(this.pseudocode = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamPseudocodeMapperRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 2, name: "target", kind: "message", T: Qs },
							{ no: 1, name: "pseudocode", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Yr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Yr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Yr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Yr, we, Pe);
					}
				}
				e.$WG = Yr;
				class zr extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamPseudocodeMapperResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new zr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new zr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new zr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(zr, we, Pe);
					}
				}
				e.$XG = zr;
				class Er extends t.Message {
					constructor(we) {
						super(), (this.model = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CppConfigRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "is_nightly", kind: "scalar", T: 8, opt: !0 },
							{ no: 2, name: "model", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Er().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Er().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Er().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Er, we, Pe);
					}
				}
				e.$YG = Er;
				class Zr extends t.Message {
					constructor(we) {
						super(),
							(this.heuristics = []),
							(this.excludeRecentlyViewedFilesPatterns = []),
							(this.enableRvfTracking = !1),
							(this.globalDebounceDurationMillis = 0),
							(this.clientDebounceDurationMillis = 0),
							(this.cppUrl = ""),
							(this.useWhitespaceDiffHistory = !1),
							(this.enableFilesyncDebounceSkipping = !1),
							(this.checkFilesyncHashPercent = 0),
							(this.geoCppBackendUrl = ""),
							(this.isFusedCursorPredictionModel = !1),
							(this.includeUnchangedLines = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CppConfigResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "above_radius", kind: "scalar", T: 5, opt: !0 },
							{ no: 2, name: "below_radius", kind: "scalar", T: 5, opt: !0 },
							{
								no: 4,
								name: "merge_behavior",
								kind: "message",
								T: jr,
								opt: !0,
							},
							{ no: 5, name: "is_on", kind: "scalar", T: 8, opt: !0 },
							{ no: 6, name: "is_ghost_text", kind: "scalar", T: 8, opt: !0 },
							{
								no: 7,
								name: "should_let_user_enable_cpp_even_if_not_pro",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 8,
								name: "heuristics",
								kind: "enum",
								T: t.proto3.getEnumType(uo),
								repeated: !0,
							},
							{
								no: 9,
								name: "exclude_recently_viewed_files_patterns",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 10, name: "enable_rvf_tracking", kind: "scalar", T: 8 },
							{
								no: 11,
								name: "global_debounce_duration_millis",
								kind: "scalar",
								T: 5,
							},
							{
								no: 12,
								name: "client_debounce_duration_millis",
								kind: "scalar",
								T: 5,
							},
							{ no: 13, name: "cpp_url", kind: "scalar", T: 9 },
							{
								no: 14,
								name: "use_whitespace_diff_history",
								kind: "scalar",
								T: 8,
							},
							{
								no: 15,
								name: "import_prediction_config",
								kind: "message",
								T: Ir,
							},
							{
								no: 16,
								name: "enable_filesync_debounce_skipping",
								kind: "scalar",
								T: 8,
							},
							{
								no: 17,
								name: "check_filesync_hash_percent",
								kind: "scalar",
								T: 2,
							},
							{ no: 18, name: "geo_cpp_backend_url", kind: "scalar", T: 9 },
							{
								no: 19,
								name: "recently_rejected_edit_thresholds",
								kind: "message",
								T: Is,
								opt: !0,
							},
							{
								no: 20,
								name: "is_fused_cursor_prediction_model",
								kind: "scalar",
								T: 8,
							},
							{ no: 21, name: "include_unchanged_lines", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Zr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Zr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Zr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Zr, we, Pe);
					}
				}
				e.$ZG = Zr;
				var uo;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.LOTS_OF_ADDED_TEXT = 1)] = "LOTS_OF_ADDED_TEXT"),
						(Bi[(Bi.DUPLICATING_LINE_AFTER_SUGGESTION = 2)] =
							"DUPLICATING_LINE_AFTER_SUGGESTION"),
						(Bi[(Bi.DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION = 3)] =
							"DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION"),
						(Bi[(Bi.REVERTING_USER_CHANGE = 4)] = "REVERTING_USER_CHANGE"),
						(Bi[(Bi.OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED = 5)] =
							"OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED"),
						(Bi[(Bi.SUGGESTING_RECENTLY_REJECTED_EDIT = 6)] =
							"SUGGESTING_RECENTLY_REJECTED_EDIT");
				})(uo || (e.CppConfigResponse_Heuristic = uo = {})),
					t.proto3.util.setEnumType(
						uo,
						"aiserver.v1.CppConfigResponse.Heuristic",
						[
							{ no: 0, name: "HEURISTIC_UNSPECIFIED" },
							{ no: 1, name: "HEURISTIC_LOTS_OF_ADDED_TEXT" },
							{ no: 2, name: "HEURISTIC_DUPLICATING_LINE_AFTER_SUGGESTION" },
							{
								no: 3,
								name: "HEURISTIC_DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION",
							},
							{ no: 4, name: "HEURISTIC_REVERTING_USER_CHANGE" },
							{
								no: 5,
								name: "HEURISTIC_OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED",
							},
							{ no: 6, name: "HEURISTIC_SUGGESTING_RECENTLY_REJECTED_EDIT" },
						],
					);
				class Ir extends t.Message {
					constructor(we) {
						super(),
							(this.isDisabledByBackend = !1),
							(this.shouldTurnOnAutomatically = !1),
							(this.pythonEnabled = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.CppConfigResponse.ImportPredictionConfig";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "is_disabled_by_backend", kind: "scalar", T: 8 },
							{
								no: 2,
								name: "should_turn_on_automatically",
								kind: "scalar",
								T: 8,
							},
							{ no: 3, name: "python_enabled", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ir().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ir().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ir().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ir, we, Pe);
					}
				}
				e.$1G = Ir;
				class jr extends t.Message {
					constructor(we) {
						super(), (this.type = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CppConfigResponse.MergeBehavior";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "type", kind: "scalar", T: 9 },
							{ no: 2, name: "limit", kind: "scalar", T: 5, opt: !0 },
							{ no: 3, name: "radius", kind: "scalar", T: 5, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new jr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new jr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new jr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(jr, we, Pe);
					}
				}
				e.$2G = jr;
				class Is extends t.Message {
					constructor(we) {
						super(),
							(this.hardRejectThreshold = 0),
							(this.softRejectThreshold = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.CppConfigResponse.RecentlyRejectedEditThresholds";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "hard_reject_threshold", kind: "scalar", T: 5 },
							{ no: 2, name: "soft_reject_threshold", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Is().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Is().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Is().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Is, we, Pe);
					}
				}
				e.$3G = Is;
				class Ur extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamCppResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "suggestion_start_line",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{
								no: 3,
								name: "suggestion_confidence",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{ no: 4, name: "done_stream", kind: "scalar", T: 8, opt: !0 },
							{
								no: 5,
								name: "debug_model_output",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 6,
								name: "debug_model_input",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 7,
								name: "debug_stream_time",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 8,
								name: "debug_total_time",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{ no: 9, name: "debug_ttft_time", kind: "scalar", T: 9, opt: !0 },
							{
								no: 10,
								name: "debug_server_timing",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 11,
								name: "range_to_replace",
								kind: "message",
								T: w.$Ms,
								opt: !0,
							},
							{
								no: 12,
								name: "cursor_prediction_target",
								kind: "message",
								T: rr,
								opt: !0,
							},
							{ no: 13, name: "done_edit", kind: "scalar", T: 8, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ur().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ur().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ur().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ur, we, Pe);
					}
				}
				e.$4G = Ur;
				class rr extends t.Message {
					constructor(we) {
						super(),
							(this.relativePath = ""),
							(this.lineNumberOneIndexed = 0),
							(this.expectedContent = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamCppResponse.CursorPredictionTarget";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_path", kind: "scalar", T: 9 },
							{ no: 2, name: "line_number_one_indexed", kind: "scalar", T: 5 },
							{ no: 3, name: "expected_content", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new rr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new rr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new rr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(rr, we, Pe);
					}
				}
				e.$5G = rr;
				class Vs extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamTerminalAutocompleteResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{ no: 2, name: "done_stream", kind: "scalar", T: 8, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Vs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Vs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Vs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Vs, we, Pe);
					}
				}
				e.$6G = Vs;
				class or extends t.Message {
					constructor(we) {
						super(),
							(this.repositories = []),
							(this.gitDiff = ""),
							(this.conversation = []),
							(this.query = ""),
							(this.stop = ""),
							(this.importLineInDiff = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamBackgroundEditRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 3, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 4,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{ no: 5, name: "git_diff", kind: "scalar", T: 9 },
							{
								no: 6,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{ no: 7, name: "query", kind: "scalar", T: 9 },
							{ no: 8, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 9, name: "stop", kind: "scalar", T: 9 },
							{ no: 10, name: "import_line_in_diff", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new or().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new or().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new or().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(or, we, Pe);
					}
				}
				e.$7G = or;
				class Hs extends t.Message {
					constructor(we) {
						super(),
							(this.callStack = []),
							(this.history = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DebugInfo";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "breakpoint", kind: "message", T: Pr },
							{
								no: 2,
								name: "call_stack",
								kind: "message",
								T: ws,
								repeated: !0,
							},
							{
								no: 3,
								name: "history",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Hs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Hs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Hs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Hs, we, Pe);
					}
				}
				e.$8G = Hs;
				class ar extends t.Message {
					constructor(we) {
						super(),
							(this.name = ""),
							(this.value = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DebugInfo.Variable";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "value", kind: "scalar", T: 9 },
							{ no: 3, name: "type", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ar().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ar().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ar().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ar, we, Pe);
					}
				}
				e.$9G = ar;
				class Tr extends t.Message {
					constructor(we) {
						super(),
							(this.name = ""),
							(this.variables = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DebugInfo.Scope";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "variables",
								kind: "message",
								T: ar,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Tr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Tr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Tr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Tr, we, Pe);
					}
				}
				e.$0G = Tr;
				class ws extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.lineNumber = 0),
							(this.functionName = ""),
							(this.scopes = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DebugInfo.CallStackFrame";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "line_number", kind: "scalar", T: 5 },
							{ no: 3, name: "function_name", kind: "scalar", T: 9 },
							{ no: 4, name: "scopes", kind: "message", T: Tr, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ws().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ws().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ws().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ws, we, Pe);
					}
				}
				e.$$G = ws;
				class Pr extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.lineNumber = 0),
							(this.linesBeforeBreakpoint = []),
							(this.linesAfterBreakpoint = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DebugInfo.Breakpoint";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "line_number", kind: "scalar", T: 5 },
							{
								no: 3,
								name: "lines_before_breakpoint",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 4,
								name: "lines_after_breakpoint",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 5, name: "exception_info", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Pr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Pr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Pr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Pr, we, Pe);
					}
				}
				e.$_G = Pr;
				class Ci extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.repositories = []),
							(this.codeBlocks = []),
							(this.documentationIdentifiers = []),
							(this.requestId = ""),
							(this.conversationId = ""),
							(this.quotes = []),
							(this.externalLinks = []),
							(this.commitNotes = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetChatRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 6,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 7, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 8,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 9, name: "request_id", kind: "scalar", T: 9 },
							{ no: 10, name: "linter_errors", kind: "message", T: w.$4s },
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
								name: "allow_long_file_scan",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 14, name: "is_bash", kind: "scalar", T: 8, opt: !0 },
							{ no: 15, name: "conversation_id", kind: "scalar", T: 9 },
							{
								no: 16,
								name: "can_handle_filenames_after_language_ids",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 17, name: "use_web", kind: "scalar", T: 9, opt: !0 },
							{
								no: 18,
								name: "quotes",
								kind: "message",
								T: w.$et,
								repeated: !0,
							},
							{ no: 19, name: "debug_info", kind: "message", T: Hs, opt: !0 },
							{ no: 20, name: "workspace_id", kind: "scalar", T: 9, opt: !0 },
							{
								no: 21,
								name: "external_links",
								kind: "message",
								T: w.$ft,
								repeated: !0,
							},
							{
								no: 23,
								name: "commit_notes",
								kind: "message",
								T: w.$it,
								repeated: !0,
							},
							{
								no: 22,
								name: "long_context_mode",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 24, name: "is_eval", kind: "scalar", T: 8, opt: !0 },
							{
								no: 26,
								name: "desired_max_tokens",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{ no: 25, name: "context_ast", kind: "message", T: g.$fD },
							{ no: 27, name: "is_composer", kind: "scalar", T: 8, opt: !0 },
							{
								no: 28,
								name: "runnable_code_blocks",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 29, name: "should_cache", kind: "scalar", T: 8, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ci().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ci().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ci().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ci, we, Pe);
					}
				}
				e.$aH = Ci;
				class vs extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.documentationIdentifiers = []),
							(this.externalLinks = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetNotepadChatRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 2,
								name: "allow_long_file_scan",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 3, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 4,
								name: "can_handle_filenames_after_language_ids",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 5, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 6, name: "linter_errors", kind: "message", T: w.$4s },
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
								T: w.$gt,
								repeated: !0,
							},
							{
								no: 10,
								name: "project_context",
								kind: "message",
								T: C.$SA,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new vs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new vs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new vs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(vs, we, Pe);
					}
				}
				e.$bH = vs;
				class Ts extends t.Message {
					constructor(we) {
						super(), (this.query = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PotentialLocsInitialQueriesRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ts().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ts().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ts().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ts, we, Pe);
					}
				}
				e.$cH = Ts;
				class kr extends t.Message {
					constructor(we) {
						super(), (this.hydeQuery = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PotentialLocsInitialQueriesResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "hyde_query", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new kr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new kr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new kr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(kr, we, Pe);
					}
				}
				e.$dH = kr;
				class ks extends t.Message {
					constructor(we) {
						super(),
							(this.file = ""),
							(this.ranges = []),
							(this.query = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PotentialLocsUnderneathRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "file", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "ranges",
								kind: "message",
								T: w.$As,
								repeated: !0,
							},
							{ no: 3, name: "query", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ks().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ks().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ks().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ks, we, Pe);
					}
				}
				e.$eH = ks;
				class cr extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PotentialLocsUnderneathResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new cr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new cr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new cr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(cr, we, Pe);
					}
				}
				e.$fH = cr;
				class ds extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PotentialLocsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ds().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ds().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ds().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ds, we, Pe);
					}
				}
				e.$gH = ds;
				class Lr extends t.Message {
					constructor(we) {
						super(),
							(this.potentialLoc = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PotentialLocsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "potential_loc", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Lr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Lr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Lr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Lr, we, Pe);
					}
				}
				e.$hH = Lr;
				class is extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.documentationIdentifiers = []),
							(this.externalLinks = []),
							(this.diffsForCompressingFiles = []),
							(this.multiFileLinterErrors = []),
							(this.fileDiffHistories = []),
							(this.additionalRankedContext = []),
							(this.quotes = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetComposerChatRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 2,
								name: "allow_long_file_scan",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 3, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 4,
								name: "can_handle_filenames_after_language_ids",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 5, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 6, name: "linter_errors", kind: "message", T: w.$4s },
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
								T: w.$gt,
								repeated: !0,
							},
							{
								no: 10,
								name: "project_context",
								kind: "message",
								T: C.$SA,
								opt: !0,
							},
							{
								no: 11,
								name: "diffs_for_compressing_files",
								kind: "message",
								T: Wr,
								repeated: !0,
							},
							{ no: 12, name: "compress_edits", kind: "scalar", T: 8, opt: !0 },
							{ no: 13, name: "should_cache", kind: "scalar", T: 8, opt: !0 },
							{
								no: 14,
								name: "multi_file_linter_errors",
								kind: "message",
								T: w.$4s,
								repeated: !0,
							},
							{ no: 15, name: "current_file", kind: "message", T: w.$Ws },
							{ no: 16, name: "recent_edits", kind: "message", T: hs, opt: !0 },
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
								T: C.$yA,
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
								no: 20,
								name: "additional_ranked_context",
								kind: "message",
								T: C.$nA,
								repeated: !0,
							},
							{
								no: 21,
								name: "quotes",
								kind: "message",
								T: w.$et,
								repeated: !0,
							},
							{
								no: 22,
								name: "willing_to_pay_extra_for_speed",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new is().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new is().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new is().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(is, we, Pe);
					}
				}
				e.$iH = is;
				class Wr extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.redRanges = []),
							(this.redRangesReversed = []),
							(this.startHash = ""),
							(this.endHash = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetComposerChatRequest.RedDiff";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "red_ranges",
								kind: "message",
								T: w.$As,
								repeated: !0,
							},
							{
								no: 3,
								name: "red_ranges_reversed",
								kind: "message",
								T: w.$As,
								repeated: !0,
							},
							{ no: 4, name: "start_hash", kind: "scalar", T: 9 },
							{ no: 5, name: "end_hash", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Wr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Wr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Wr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Wr, we, Pe);
					}
				}
				e.$jH = Wr;
				class hs extends t.Message {
					constructor(we) {
						super(),
							(this.codeBlockInfo = []),
							(this.finalFileValues = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetComposerChatRequest.RecentEdits";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "code_block_info",
								kind: "message",
								T: _s,
								repeated: !0,
							},
							{
								no: 2,
								name: "final_file_values",
								kind: "message",
								T: Qr,
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
					static fromBinary(we, Pe) {
						return new hs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new hs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new hs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(hs, we, Pe);
					}
				}
				e.$kH = hs;
				class _s extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.GetComposerChatRequest.RecentEdits.CodeBlockInfo";
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
					static fromBinary(we, Pe) {
						return new _s().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new _s().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new _s().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(_s, we, Pe);
					}
				}
				e.$lH = _s;
				class Qr extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.content = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.GetComposerChatRequest.RecentEdits.FileInfo";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "content", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Qr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Qr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Qr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Qr, we, Pe);
					}
				}
				e.$mH = Qr;
				class Dr extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.repositories = []),
							(this.codeBlocks = []),
							(this.documentationIdentifiers = []),
							(this.query = ""),
							(this.rerankResults = !1),
							(this.contextResults = { case: void 0 }),
							(this.rerankResultsV2 = !1),
							(this.conversationId = ""),
							(this.canHandleFilenamesAfterLanguageIds = !1),
							(this.longContextMode = !1),
							(this.isEval = !1),
							(this.requestId = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamComposerContextRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 6,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 7, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 8,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 9, name: "query", kind: "scalar", T: 9 },
							{ no: 10, name: "code_context", kind: "message", T: Cs },
							{ no: 11, name: "rerank_results", kind: "scalar", T: 8 },
							{
								no: 12,
								name: "file_search_results",
								kind: "message",
								T: Yt,
								oneof: "context_results",
							},
							{
								no: 13,
								name: "code_search_results",
								kind: "message",
								T: ni,
								oneof: "context_results",
							},
							{ no: 14, name: "linter_errors", kind: "message", T: w.$4s },
							{ no: 15, name: "is_bash", kind: "scalar", T: 8, opt: !0 },
							{ no: 16, name: "rerank_results_v2", kind: "scalar", T: 8 },
							{ no: 17, name: "conversation_id", kind: "scalar", T: 9 },
							{
								no: 18,
								name: "can_handle_filenames_after_language_ids",
								kind: "scalar",
								T: 8,
							},
							{ no: 19, name: "long_context_mode", kind: "scalar", T: 8 },
							{ no: 20, name: "is_eval", kind: "scalar", T: 8 },
							{ no: 21, name: "request_id", kind: "scalar", T: 9 },
							{
								no: 22,
								name: "desired_max_tokens",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{
								no: 23,
								name: "runnable_code_blocks",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Dr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Dr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Dr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Dr, we, Pe);
					}
				}
				e.$nH = Dr;
				class Cs extends t.Message {
					constructor(we) {
						super(),
							(this.chunks = []),
							(this.scoredChunks = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamComposerContextRequest.CodeContext";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "chunks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{
								no: 2,
								name: "scored_chunks",
								kind: "message",
								T: a.$Tu,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Cs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Cs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Cs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Cs, we, Pe);
					}
				}
				e.$oH = Cs;
				class lr extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckUsageBasedPriceRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "usage_event_details", kind: "message", T: p.$mD },
						]);
					}
					static fromBinary(we, Pe) {
						return new lr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new lr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new lr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(lr, we, Pe);
					}
				}
				e.$pH = lr;
				class en extends t.Message {
					constructor(we) {
						super(),
							(this.markdownResponse = ""),
							(this.cents = 0),
							(this.priceId = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckUsageBasedPriceResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "markdown_response", kind: "scalar", T: 9 },
							{ no: 2, name: "cents", kind: "scalar", T: 5 },
							{ no: 3, name: "price_id", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new en().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new en().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new en().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(en, we, Pe);
					}
				}
				e.$qH = en;
				class Ks extends t.Message {
					constructor(we) {
						super(),
							(this.origRequestId = ""),
							(this.usageUuid = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckQueuePositionRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "orig_request_id", kind: "scalar", T: 9 },
							{ no: 2, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 3, name: "usage_uuid", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ks().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ks().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ks().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ks, we, Pe);
					}
				}
				e.$rH = Ks;
				class As extends t.Message {
					constructor(we) {
						super(),
							(this.position = 0),
							(this.hitHardLimit = !1),
							(this.couldEnableUsageBasedPricingToSkip = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckQueuePositionResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "position", kind: "scalar", T: 5 },
							{
								no: 2,
								name: "seconds_left_to_wait",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{
								no: 7,
								name: "new_queue_position",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{ no: 3, name: "hit_hard_limit", kind: "scalar", T: 8 },
							{
								no: 4,
								name: "could_enable_usage_based_pricing_to_skip",
								kind: "scalar",
								T: 8,
							},
							{ no: 5, name: "usage_event_details", kind: "message", T: p.$mD },
							{ no: 6, name: "custom_link", kind: "message", T: Os },
						]);
					}
					static fromBinary(we, Pe) {
						return new As().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new As().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new As().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(As, we, Pe);
					}
				}
				e.$sH = As;
				class Os extends t.Message {
					constructor(we) {
						super(),
							(this.address = ""),
							(this.message = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckQueuePositionResponse.CustomLink";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "address", kind: "scalar", T: 9 },
							{ no: 2, name: "message", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Os().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Os().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Os().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Os, we, Pe);
					}
				}
				e.$tH = Os;
				class Mr extends t.Message {
					constructor(we) {
						super(),
							(this.fileContent = ""),
							(this.languageId = ""),
							(this.commandId = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.IsolatedTreesitterRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "file_content", kind: "scalar", T: 9 },
							{ no: 2, name: "language_id", kind: "scalar", T: 9 },
							{ no: 3, name: "command_id", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Mr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Mr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Mr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Mr, we, Pe);
					}
				}
				e.$uH = Mr;
				class St extends t.Message {
					constructor(we) {
						super(), (this.items = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.IsolatedTreesitterResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "items", kind: "message", T: oi, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new St().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new St().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new St().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(St, we, Pe);
					}
				}
				e.$vH = St;
				class vt extends t.Message {
					constructor(we) {
						super(),
							(this.row = 0),
							(this.column = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.IsolatedTreesitterResponse.TreeSitterPosition";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "row", kind: "scalar", T: 5 },
							{ no: 2, name: "column", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new vt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new vt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new vt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(vt, we, Pe);
					}
				}
				e.$wH = vt;
				class oi extends t.Message {
					constructor(we) {
						super(),
							(this.symbolName = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.IsolatedTreesitterResponse.TreesitterSymbolNameItem";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "symbol_name", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "start_position",
								kind: "message",
								T: vt,
								opt: !0,
							},
							{ no: 3, name: "end_position", kind: "message", T: vt, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new oi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new oi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new oi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(oi, we, Pe);
					}
				}
				e.$xH = oi;
				class Ei extends t.Message {
					constructor(we) {
						super(),
							(this.query = ""),
							(this.answerPlaceholder = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetSimplePromptRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "scalar", T: 9 },
							{ no: 2, name: "answer_placeholder", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ei().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ei().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ei().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ei, we, Pe);
					}
				}
				e.$yH = Ei;
				class tn extends t.Message {
					constructor(we) {
						super(), (this.result = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetSimplePromptResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "result", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new tn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new tn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new tn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(tn, we, Pe);
					}
				}
				e.$zH = tn;
				class hn extends t.Message {
					constructor(we) {
						super(), (this.didFit = !1), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckLongFilesFitResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "did_fit", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new hn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new hn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new hn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(hn, we, Pe);
					}
				}
				e.$AH = hn;
				class In extends t.Message {
					constructor(we) {
						super(),
							(this.promptType = kn.UNSPECIFIED),
							(this.query = ""),
							(this.bucketId = ""),
							(this.queryStrategy = ""),
							(this.tokenLimit = 0),
							(this.rerankingStrategy = Wn.UNSPECIFIED),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetEvaluationPromptRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "prompt_type",
								kind: "enum",
								T: t.proto3.getEnumType(kn),
							},
							{ no: 2, name: "current_file", kind: "message", T: w.$Ws },
							{ no: 3, name: "query", kind: "scalar", T: 9 },
							{ no: 4, name: "bucket_id", kind: "scalar", T: 9 },
							{ no: 5, name: "query_strategy", kind: "scalar", T: 9 },
							{ no: 6, name: "token_limit", kind: "scalar", T: 5 },
							{
								no: 7,
								name: "reranking_strategy",
								kind: "enum",
								T: t.proto3.getEnumType(Wn),
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new In().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new In().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new In().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(In, we, Pe);
					}
				}
				e.$BH = In;
				var kn;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.GENERATE = 1)] = "GENERATE"),
						(Bi[(Bi.CHAT = 2)] = "CHAT");
				})(kn || (e.GetEvaluationPromptRequest_EvaluationPromptType = kn = {})),
					t.proto3.util.setEnumType(
						kn,
						"aiserver.v1.GetEvaluationPromptRequest.EvaluationPromptType",
						[
							{ no: 0, name: "EVALUATION_PROMPT_TYPE_UNSPECIFIED" },
							{ no: 1, name: "EVALUATION_PROMPT_TYPE_GENERATE" },
							{ no: 2, name: "EVALUATION_PROMPT_TYPE_CHAT" },
						],
					);
				var Wn;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.DISTANCE_ONLY = 1)] = "DISTANCE_ONLY"),
						(Bi[(Bi.GPT4_RELEVANCE = 2)] = "GPT4_RELEVANCE");
				})(Wn || (e.GetEvaluationPromptRequest_RerankingStrategy = Wn = {})),
					t.proto3.util.setEnumType(
						Wn,
						"aiserver.v1.GetEvaluationPromptRequest.RerankingStrategy",
						[
							{ no: 0, name: "RERANKING_STRATEGY_UNSPECIFIED" },
							{ no: 1, name: "RERANKING_STRATEGY_DISTANCE_ONLY" },
							{ no: 2, name: "RERANKING_STRATEGY_GPT4_RELEVANCE" },
						],
					);
				class ys extends t.Message {
					constructor(we) {
						super(),
							(this.prompt = ""),
							(this.tokenCount = 0),
							(this.estimatedTokenCount = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetEvaluationPromptResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "prompt", kind: "scalar", T: 9 },
							{ no: 2, name: "token_count", kind: "scalar", T: 5 },
							{ no: 3, name: "estimated_token_count", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ys().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ys().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ys().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ys, we, Pe);
					}
				}
				e.$CH = ys;
				class fs extends t.Message {
					constructor(we) {
						super(),
							(this.prompt = ""),
							(this.repositories = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamInlineEditsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{ no: 2, name: "prompt", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
						]);
					}
					static fromBinary(we, Pe) {
						return new fs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new fs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new fs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(fs, we, Pe);
					}
				}
				e.$DH = fs;
				class bs extends t.Message {
					constructor(we) {
						super(), (this.line = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamInlineEditsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "line", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "debugging_only_prompt",
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
						]);
					}
					static fromBinary(we, Pe) {
						return new bs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new bs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new bs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(bs, we, Pe);
					}
				}
				e.$EH = bs;
				class Ls extends t.Message {
					constructor(we) {
						super(),
							(this.didSummarize = !1),
							(this.upUntilIndex = 0),
							(this.summary = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SummarizeConversationResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "did_summarize", kind: "scalar", T: 8 },
							{ no: 2, name: "up_until_index", kind: "scalar", T: 5 },
							{ no: 3, name: "summary", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ls().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ls().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ls().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ls, we, Pe);
					}
				}
				e.$FH = Ls;
				class Gs extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetChatTitleRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Gs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Gs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Gs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Gs, we, Pe);
					}
				}
				e.$GH = Gs;
				class er extends t.Message {
					constructor(we) {
						super(), (this.title = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetChatTitleResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "title", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new er().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new er().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new er().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(er, we, Pe);
					}
				}
				e.$HH = er;
				class Nr extends t.Message {
					constructor(we) {
						super(),
							(this.prompt = ""),
							(this.tokenCount = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetChatPromptResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "prompt", kind: "scalar", T: 9 },
							{ no: 2, name: "token_count", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Nr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Nr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Nr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Nr, we, Pe);
					}
				}
				e.$IH = Nr;
				class Fs extends t.Message {
					constructor(we) {
						super(),
							(this.serverStartTime = 0),
							(this.serverFirstTokenTime = 0),
							(this.serverRequestSentTime = 0),
							(this.serverEndTime = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ServerTimingInfo";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "server_start_time", kind: "scalar", T: 1 },
							{ no: 2, name: "server_first_token_time", kind: "scalar", T: 1 },
							{ no: 3, name: "server_request_sent_time", kind: "scalar", T: 1 },
							{ no: 4, name: "server_end_time", kind: "scalar", T: 1 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Fs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Fs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Fs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Fs, we, Pe);
					}
				}
				e.$JH = Fs;
				class Ds extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatResponse";
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
							{ no: 4, name: "document_citation", kind: "message", T: C.$oA },
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
							{
								no: 8,
								name: "chunk_identity",
								kind: "message",
								T: _r,
								opt: !0,
							},
							{
								no: 9,
								name: "docs_reference",
								kind: "message",
								T: C.$rA,
								opt: !0,
							},
							{
								no: 11,
								name: "web_citation",
								kind: "message",
								T: C.$pA,
								opt: !0,
							},
							{
								no: 12,
								name: "status_updates",
								kind: "message",
								T: C.$tA,
								opt: !0,
							},
							{ no: 13, name: "timing_info", kind: "message", T: Fs, opt: !0 },
							{
								no: 14,
								name: "symbol_link",
								kind: "message",
								T: C.$JA,
								opt: !0,
							},
							{ no: 15, name: "file_link", kind: "message", T: C.$KA, opt: !0 },
							{
								no: 16,
								name: "conversation_summary",
								kind: "message",
								T: C.$lA,
								opt: !0,
							},
							{
								no: 17,
								name: "service_status_update",
								kind: "message",
								T: C.$IA,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Ds().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ds().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ds().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ds, we, Pe);
					}
				}
				e.$KH = Ds;
				class _r extends t.Message {
					constructor(we) {
						super(),
							(this.fileName = ""),
							(this.startLine = 0),
							(this.endLine = 0),
							(this.text = ""),
							(this.chunkType = C.ChunkType.UNSPECIFIED),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatResponse.ChunkIdentity";
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
								T: t.proto3.getEnumType(C.ChunkType),
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new _r().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new _r().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new _r().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(_r, we, Pe);
					}
				}
				e.$LH = _r;
				class ur extends t.Message {
					constructor(we) {
						super(),
							(this.didWarmCache = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.WarmComposerCacheResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "did_warm_cache", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ur().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ur().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ur().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ur, we, Pe);
					}
				}
				e.$MH = ur;
				class eo extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.WarmChatCacheRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "request", kind: "message", T: Ci },
						]);
					}
					static fromBinary(we, Pe) {
						return new eo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new eo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new eo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(eo, we, Pe);
					}
				}
				e.$NH = eo;
				class an extends t.Message {
					constructor(we) {
						super(),
							(this.didWarmCache = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.WarmChatCacheResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "did_warm_cache", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new an().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new an().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new an().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(an, we, Pe);
					}
				}
				e.$OH = an;
				class ho extends t.Message {
					constructor(we) {
						super(),
							(this.startLine = 0),
							(this.lines = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SurroundingLines";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "start_line", kind: "scalar", T: 5 },
							{ no: 2, name: "lines", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ho().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ho().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ho().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ho, we, Pe);
					}
				}
				e.$PH = ho;
				class fo extends t.Message {
					constructor(we) {
						super(),
							(this.suggestionsFromEditor = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetCompletionRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "file_identifier", kind: "message", T: Bs },
							{ no: 2, name: "cursor_position", kind: "message", T: w.$ys },
							{ no: 3, name: "surrounding_lines", kind: "message", T: ho },
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "suggestions_from_editor",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new fo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new fo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new fo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(fo, we, Pe);
					}
				}
				e.$QH = fo;
				class To extends t.Message {
					constructor(we) {
						super(),
							(this.completion = ""),
							(this.score = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetCompletionResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "completion", kind: "scalar", T: 9 },
							{ no: 2, name: "score", kind: "scalar", T: 2 },
							{
								no: 3,
								name: "debugging_only_completion_prompt",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new To().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new To().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new To().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(To, we, Pe);
					}
				}
				e.$RH = To;
				class qr extends t.Message {
					constructor(we) {
						super(),
							(this.query = ""),
							(this.repositories = []),
							(this.topK = 0),
							(this.restrictToBuckets = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetSearchRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 3, name: "top_k", kind: "scalar", T: 5 },
							{
								no: 4,
								name: "restrict_to_buckets",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new qr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new qr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new qr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(qr, we, Pe);
					}
				}
				e.$SH = qr;
				class Rr extends t.Message {
					constructor(we) {
						super(),
							(this.repositoryRelativeWorkspacePath = ""),
							(this.fileRelativeRepositoryPath = ""),
							(this.chunk = ""),
							(this.distance = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FileSearchResult";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "repository_relative_workspace_path",
								kind: "scalar",
								T: 9,
							},
							{
								no: 2,
								name: "file_relative_repository_path",
								kind: "scalar",
								T: 9,
							},
							{ no: 3, name: "chunk", kind: "scalar", T: 9 },
							{ no: 4, name: "distance", kind: "scalar", T: 2 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Rr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Rr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Rr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Rr, we, Pe);
					}
				}
				e.$TH = Rr;
				class go extends t.Message {
					constructor(we) {
						super(), (this.results = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetSearchResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "results", kind: "message", T: Rr, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new go().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new go().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new go().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(go, we, Pe);
					}
				}
				e.$UH = go;
				class Bs extends t.Message {
					constructor(we) {
						super(),
							(this.projectUuid = ""),
							(this.relativePath = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.UniqueFileIdentifier";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "project_uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "relative_path", kind: "scalar", T: 9 },
							{ no: 3, name: "language_id", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Bs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Bs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Bs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Bs, we, Pe);
					}
				}
				e.$VH = Bs;
				class to extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetUserInfoRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new to().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new to().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new to().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(to, we, Pe);
					}
				}
				e.$WH = to;
				class io extends t.Message {
					constructor(we) {
						super(),
							(this.gpt4Requests = 0),
							(this.gpt4MaxRequests = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.UsageData";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 2, name: "gpt4_requests", kind: "scalar", T: 5 },
							{ no: 3, name: "gpt4_max_requests", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new io().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new io().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new io().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(io, we, Pe);
					}
				}
				e.$XH = io;
				class Vr extends t.Message {
					constructor(we) {
						super(),
							(this.userId = ""),
							(this.jupyterToken = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetUserInfoResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "user_id", kind: "scalar", T: 9 },
							{ no: 2, name: "jupyter_token", kind: "scalar", T: 9 },
							{ no: 3, name: "usage", kind: "message", T: io },
						]);
					}
					static fromBinary(we, Pe) {
						return new Vr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Vr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Vr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Vr, we, Pe);
					}
				}
				e.$YH = Vr;
				class dr extends t.Message {
					constructor(we) {
						super(), (this.bucketId = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ClearAndRedoEntireBucketRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "bucket_id", kind: "scalar", T: 9 },
							{ no: 2, name: "commit", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new dr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new dr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new dr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(dr, we, Pe);
					}
				}
				e.$ZH = dr;
				class Po extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ClearAndRedoEntireBucketResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Po().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Po().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Po().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Po, we, Pe);
					}
				}
				e.$1H = Po;
				class no extends t.Message {
					constructor(we) {
						super(),
							(this.generationUuid = ""),
							(this.completion = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DoThisForMeCheckRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "generation_uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "completion", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new no().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new no().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new no().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(no, we, Pe);
					}
				}
				e.$2H = no;
				class mo extends t.Message {
					constructor(we) {
						super(),
							(this.action = { case: void 0 }),
							(this.reasoning = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DoThisForMeCheckResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "skip_action",
								kind: "message",
								T: po,
								oneof: "action",
							},
							{
								no: 2,
								name: "edit_action",
								kind: "message",
								T: so,
								oneof: "action",
							},
							{
								no: 3,
								name: "create_action",
								kind: "message",
								T: bo,
								oneof: "action",
							},
							{
								no: 4,
								name: "run_action",
								kind: "message",
								T: ko,
								oneof: "action",
							},
							{ no: 5, name: "reasoning", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new mo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new mo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new mo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(mo, we, Pe);
					}
				}
				e.$3H = mo;
				class po extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DoThisForMeCheckResponse.SkipAction";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new po().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new po().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new po().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(po, we, Pe);
					}
				}
				e.$4H = po;
				class so extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DoThisForMeCheckResponse.EditAction";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new so().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new so().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new so().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(so, we, Pe);
					}
				}
				e.$5H = so;
				class bo extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DoThisForMeCheckResponse.CreateAction";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new bo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new bo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new bo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(bo, we, Pe);
					}
				}
				e.$6H = bo;
				class ko extends t.Message {
					constructor(we) {
						super(), (this.command = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DoThisForMeCheckResponse.RunAction";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "command", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ko().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ko().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ko().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ko, we, Pe);
					}
				}
				e.$7H = ko;
				class $o extends t.Message {
					constructor(we) {
						super(),
							(this.generationUuid = ""),
							(this.completion = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DoThisForMeRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "generation_uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "completion", kind: "scalar", T: 9 },
							{ no: 3, name: "action", kind: "message", T: mo },
						]);
					}
					static fromBinary(we, Pe) {
						return new $o().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new $o().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new $o().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals($o, we, Pe);
					}
				}
				e.$8H = $o;
				class yo extends t.Message {
					constructor(we) {
						super(),
							(this.event = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DoThisForMeResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "update_status",
								kind: "message",
								T: Ps,
								oneof: "event",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new yo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new yo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new yo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(yo, we, Pe);
					}
				}
				e.$9H = yo;
				class Ps extends t.Message {
					constructor(we) {
						super(), (this.status = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DoThisForMeResponse.UpdateStatus";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "status", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ps().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ps().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ps().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ps, we, Pe);
					}
				}
				e.$0H = Ps;
				class cs extends t.Message {
					constructor(we) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.DoThisForMeResponseWrapped";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "real_response",
								kind: "message",
								T: yo,
								oneof: "response",
							},
							{
								no: 2,
								name: "background_task_uuid",
								kind: "scalar",
								T: 9,
								oneof: "response",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new cs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new cs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new cs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(cs, we, Pe);
					}
				}
				e.$$H = cs;
				class mn extends t.Message {
					constructor(we) {
						super(),
							(this.toolformerSessionId = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatToolformerContinueRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "toolformer_session_id", kind: "scalar", T: 9 },
							{ no: 2, name: "tool_result", kind: "message", T: i.$Wy },
						]);
					}
					static fromBinary(we, Pe) {
						return new mn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new mn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new mn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(mn, we, Pe);
					}
				}
				e.$_H = mn;
				class hr extends t.Message {
					constructor(we) {
						super(),
							(this.responseType = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatToolformerResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "toolformer_session_id",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 2,
								name: "output",
								kind: "message",
								T: Ar,
								oneof: "response_type",
							},
							{
								no: 3,
								name: "tool_action",
								kind: "message",
								T: tr,
								oneof: "response_type",
							},
							{
								no: 4,
								name: "thought",
								kind: "message",
								T: wo,
								oneof: "response_type",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new hr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new hr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new hr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(hr, we, Pe);
					}
				}
				e.$aI = hr;
				class Ar extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatToolformerResponse.Output";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ar().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ar().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ar().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ar, we, Pe);
					}
				}
				e.$bI = Ar;
				class wo extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamChatToolformerResponse.Thought";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new wo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new wo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new wo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(wo, we, Pe);
					}
				}
				e.$cI = wo;
				class tr extends t.Message {
					constructor(we) {
						super(),
							(this.userFacingText = ""),
							(this.rawModelOutput = ""),
							(this.moreToCome = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.StreamChatToolformerResponse.ToolAction";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "user_facing_text", kind: "scalar", T: 9 },
							{ no: 3, name: "raw_model_output", kind: "scalar", T: 9 },
							{ no: 2, name: "tool_call", kind: "message", T: i.$Vy },
							{ no: 4, name: "more_to_come", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new tr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new tr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new tr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(tr, we, Pe);
					}
				}
				e.$dI = tr;
				class ln extends t.Message {
					constructor(we) {
						super(),
							(this.text = ""),
							(this.attachedCodeChunks = []),
							(this.repositories = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskInstruction";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "attached_code_chunks",
								kind: "message",
								T: fr,
								repeated: !0,
							},
							{ no: 3, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 4,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 5, name: "explicit_context", kind: "message", T: w.$6s },
						]);
					}
					static fromBinary(we, Pe) {
						return new ln().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ln().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ln().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ln, we, Pe);
					}
				}
				e.$eI = ln;
				class fr extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.startLineNumber = 0),
							(this.lines = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskInstruction.CodeChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "start_line_number", kind: "scalar", T: 5 },
							{ no: 3, name: "lines", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new fr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new fr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new fr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(fr, we, Pe);
					}
				}
				e.$fI = fr;
				class xs extends t.Message {
					constructor(we) {
						super(),
							(this.text = ""),
							(this.attachedCodeChunks = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskUserMessage";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "attached_code_chunks",
								kind: "message",
								T: ro,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new xs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new xs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new xs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(xs, we, Pe);
					}
				}
				e.$gI = xs;
				class ro extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.startLineNumber = 0),
							(this.lines = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskUserMessage.CodeChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "start_line_number", kind: "scalar", T: 5 },
							{ no: 3, name: "lines", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ro().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ro().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ro().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ro, we, Pe);
					}
				}
				e.$hI = ro;
				class gr extends t.Message {
					constructor(we) {
						super(),
							(this.thought = ""),
							(this.automated = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PushAiThoughtRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "thought", kind: "scalar", T: 9 },
							{ no: 2, name: "cmd_k_debug_info", kind: "message", T: w.$Hs },
							{ no: 3, name: "automated", kind: "scalar", T: 8 },
							{ no: 4, name: "metadata", kind: "message", T: Or, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new gr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new gr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new gr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(gr, we, Pe);
					}
				}
				e.$iI = gr;
				class Or extends t.Message {
					constructor(we) {
						super(),
							(this.event = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PushAiThoughtRequest.Metadata";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "accepted_hallucinated_function_event",
								kind: "message",
								T: Hr,
								oneof: "event",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Or().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Or().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Or().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Or, we, Pe);
					}
				}
				e.$jI = Or;
				class Hr extends t.Message {
					constructor(we) {
						super(),
							(this.implementationUuid = ""),
							(this.hallucinatedFunctionUuid = ""),
							(this.implementation = ""),
							(this.source = ""),
							(this.implementationReqid = ""),
							(this.planReqid = ""),
							(this.reflectionReqid = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.PushAiThoughtRequest.Metadata.AcceptedHallucinatedFunctionEvent";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "implementation_uuid", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "hallucinated_function_uuid",
								kind: "scalar",
								T: 9,
							},
							{ no: 3, name: "implementation", kind: "scalar", T: 9 },
							{ no: 4, name: "source", kind: "scalar", T: 9 },
							{ no: 5, name: "implementation_reqid", kind: "scalar", T: 9 },
							{ no: 6, name: "plan_reqid", kind: "scalar", T: 9 },
							{ no: 7, name: "reflection_reqid", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Hr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Hr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Hr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Hr, we, Pe);
					}
				}
				e.$kI = Hr;
				class Fr extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PushAiThoughtResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Fr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Fr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Fr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Fr, we, Pe);
					}
				}
				e.$lI = Fr;
				class vo extends t.Message {
					constructor(we) {
						super(),
							(this.modelOutput = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckDoableAsTaskRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "model_output", kind: "scalar", T: 9 },
							{ no: 2, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new vo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new vo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new vo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(vo, we, Pe);
					}
				}
				e.$mI = vo;
				class zs extends t.Message {
					constructor(we) {
						super(),
							(this.doableAsTask = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.CheckDoableAsTaskResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "doable_as_task", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new zs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new zs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new zs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(zs, we, Pe);
					}
				}
				e.$nI = zs;
				class Co extends t.Message {
					constructor(we) {
						super(),
							(this.debuggingOnlyLiveMode = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.InterfaceAgentInitRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 2, name: "debugging_only_live_mode", kind: "scalar", T: 8 },
							{
								no: 3,
								name: "interface_agent_client_state",
								kind: "message",
								T: o.$AD,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Co().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Co().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Co().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Co, we, Pe);
					}
				}
				e.$oI = Co;
				class Kr extends t.Message {
					constructor(we) {
						super(),
							(this.taskUuid = ""),
							(this.humanReadableTitle = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.InterfaceAgentInitResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "task_uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "human_readable_title", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Kr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Kr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Kr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Kr, we, Pe);
					}
				}
				e.$pI = Kr;
				class Lo extends t.Message {
					constructor(we) {
						super(), (this.taskUuid = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamInterfaceAgentStatusRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "task_uuid", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Lo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Lo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Lo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Lo, we, Pe);
					}
				}
				e.$qI = Lo;
				class Xn extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamInterfaceAgentStatusResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "status", kind: "message", T: o.$BD },
						]);
					}
					static fromBinary(we, Pe) {
						return new Xn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Xn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Xn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Xn, we, Pe);
					}
				}
				e.$rI = Xn;
				class Br extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskGetInterfaceAgentStatusRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "interface_agent_client_state",
								kind: "message",
								T: o.$AD,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Br().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Br().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Br().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Br, we, Pe);
					}
				}
				e.$sI = Br;
				class Ht extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskGetInterfaceAgentStatusResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "status", kind: "message", T: o.$BD },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ht().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ht().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ht().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ht, we, Pe);
					}
				}
				e.$tI = Ht;
				class it extends t.Message {
					constructor(we) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.TaskGetInterfaceAgentStatusResponseWrapped";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "real_response",
								kind: "message",
								T: Ht,
								oneof: "response",
							},
							{
								no: 2,
								name: "background_task_uuid",
								kind: "scalar",
								T: 9,
								oneof: "response",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new it().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new it().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new it().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(it, we, Pe);
					}
				}
				e.$uI = it;
				class ot extends t.Message {
					constructor(we) {
						super(),
							(this.debuggingOnlyLiveMode = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskInitRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "instruction", kind: "message", T: ln },
							{ no: 2, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 3, name: "debugging_only_live_mode", kind: "scalar", T: 8 },
							{ no: 4, name: "engine_id", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ot().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ot().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ot().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ot, we, Pe);
					}
				}
				e.$vI = ot;
				class dt extends t.Message {
					constructor(we) {
						super(),
							(this.taskUuid = ""),
							(this.humanReadableTitle = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskInitResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "task_uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "human_readable_title", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new dt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new dt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new dt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(dt, we, Pe);
					}
				}
				e.$wI = dt;
				class yt extends t.Message {
					constructor(we) {
						super(),
							(this.taskUuid = ""),
							(this.startSequenceNumber = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskStreamLogRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "task_uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "start_sequence_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new yt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new yt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new yt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(yt, we, Pe);
					}
				}
				e.$xI = yt;
				class Ot extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskLogOutput";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ot().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ot().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ot().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ot, we, Pe);
					}
				}
				e.$yI = Ot;
				class Qe extends t.Message {
					constructor(we) {
						super(),
							(this.userFacingText = ""),
							(this.rawModelOutput = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskLogToolAction";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "user_facing_text", kind: "scalar", T: 9 },
							{ no: 3, name: "raw_model_output", kind: "scalar", T: 9 },
							{ no: 2, name: "tool_call", kind: "message", T: i.$Vy },
						]);
					}
					static fromBinary(we, Pe) {
						return new Qe().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Qe().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Qe().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Qe, we, Pe);
					}
				}
				e.$zI = Qe;
				class Ge extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskLogThought";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ge().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ge().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ge().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ge, we, Pe);
					}
				}
				e.$AI = Ge;
				class st extends t.Message {
					constructor(we) {
						super(),
							(this.actionSequenceNumber = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskLogToolResult";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "tool_result", kind: "message", T: i.$Wy },
							{ no: 2, name: "action_sequence_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new st().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new st().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new st().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(st, we, Pe);
					}
				}
				e.$BI = st;
				class pt extends t.Message {
					constructor(we) {
						super(),
							(this.sequenceNumber = 0),
							(this.isNotDone = !1),
							(this.logItem = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskLogItem";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "sequence_number", kind: "scalar", T: 5 },
							{ no: 2, name: "is_not_done", kind: "scalar", T: 8 },
							{
								no: 3,
								name: "output",
								kind: "message",
								T: Ot,
								oneof: "log_item",
							},
							{
								no: 4,
								name: "tool_action",
								kind: "message",
								T: Qe,
								oneof: "log_item",
							},
							{
								no: 5,
								name: "thought",
								kind: "message",
								T: Ge,
								oneof: "log_item",
							},
							{
								no: 6,
								name: "user_message",
								kind: "message",
								T: xs,
								oneof: "log_item",
							},
							{
								no: 7,
								name: "instruction",
								kind: "message",
								T: ln,
								oneof: "log_item",
							},
							{
								no: 8,
								name: "tool_result",
								kind: "message",
								T: st,
								oneof: "log_item",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new pt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new pt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new pt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(pt, we, Pe);
					}
				}
				e.$CI = pt;
				class Ct extends t.Message {
					constructor(we) {
						super(), (this.taskUuid = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskInfoRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "task_uuid", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ct().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ct().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ct().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ct, we, Pe);
					}
				}
				e.$DI = Ct;
				class Pt extends t.Message {
					constructor(we) {
						super(), (this.taskUuid = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskPauseRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "task_uuid", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Pt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Pt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Pt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Pt, we, Pe);
					}
				}
				e.$EI = Pt;
				class zt extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskPauseResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new zt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new zt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new zt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(zt, we, Pe);
					}
				}
				e.$FI = zt;
				class Qt extends t.Message {
					constructor(we) {
						super(),
							(this.humanReadableTitle = ""),
							(this.taskStatus = f.UNSPECIFIED),
							(this.lastLogSequenceNumber = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskInfoResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "human_readable_title", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "task_status",
								kind: "enum",
								T: t.proto3.getEnumType(f),
							},
							{ no: 3, name: "last_log_sequence_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Qt().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Qt().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Qt().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Qt, we, Pe);
					}
				}
				e.$GI = Qt;
				class ui extends t.Message {
					constructor(we) {
						super(),
							(this.response = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskStreamLogResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "streamed_log_item",
								kind: "message",
								T: pt,
								oneof: "response",
							},
							{
								no: 2,
								name: "info_update",
								kind: "message",
								T: vi,
								oneof: "response",
							},
							{
								no: 3,
								name: "initial_task_info",
								kind: "message",
								T: Qt,
								oneof: "response",
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new ui().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ui().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ui().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ui, we, Pe);
					}
				}
				e.$HI = ui;
				class vi extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskStreamLogResponse.InfoUpdate";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "human_readable_title",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 2,
								name: "task_status",
								kind: "enum",
								T: t.proto3.getEnumType(f),
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new vi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new vi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new vi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(vi, we, Pe);
					}
				}
				e.$II = vi;
				class Ii extends t.Message {
					constructor(we) {
						super(),
							(this.taskUuid = ""),
							(this.actionSequenceNumber = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskProvideResultRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "task_uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "action_sequence_number", kind: "scalar", T: 5 },
							{ no: 3, name: "tool_result", kind: "message", T: i.$Wy },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ii().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ii().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ii().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ii, we, Pe);
					}
				}
				e.$JI = Ii;
				class Mi extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskProvideResultResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Mi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Mi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Mi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Mi, we, Pe);
					}
				}
				e.$KI = Mi;
				class Ni extends t.Message {
					constructor(we) {
						super(),
							(this.taskUuid = ""),
							(this.wantsAttentionRightNow = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskSendMessageRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "task_uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "user_message", kind: "message", T: xs },
							{
								no: 3,
								name: "wants_attention_right_now",
								kind: "scalar",
								T: 8,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Ni().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ni().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ni().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ni, we, Pe);
					}
				}
				e.$LI = Ni;
				class Ri extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.TaskSendMessageResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Ri().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ri().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ri().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ri, we, Pe);
					}
				}
				e.$MI = Ri;
				class Ki extends t.Message {
					constructor(we) {
						super(),
							(this.feedback = ""),
							(this.feedbackType = ji.UNSPECIFIED),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportFeedbackRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "feedback", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "feedback_type",
								kind: "enum",
								T: t.proto3.getEnumType(ji),
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Ki().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ki().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ki().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ki, we, Pe);
					}
				}
				e.$NI = Ki;
				var ji;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.LOW_PRIORITY = 1)] = "LOW_PRIORITY"),
						(Bi[(Bi.HIGH_PRIORITY = 2)] = "HIGH_PRIORITY");
				})(ji || (e.ReportFeedbackRequest_FeedbackType = ji = {})),
					t.proto3.util.setEnumType(
						ji,
						"aiserver.v1.ReportFeedbackRequest.FeedbackType",
						[
							{ no: 0, name: "FEEDBACK_TYPE_UNSPECIFIED" },
							{ no: 1, name: "FEEDBACK_TYPE_LOW_PRIORITY" },
							{ no: 2, name: "FEEDBACK_TYPE_HIGH_PRIORITY" },
						],
					);
				class Xi extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportFeedbackResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Xi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Xi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Xi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Xi, we, Pe);
					}
				}
				e.$OI = Xi;
				class on extends t.Message {
					constructor(we) {
						super(),
							(this.relativePathToCursorFolder = ""),
							(this.contents = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.LogFile";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "relative_path_to_cursor_folder",
								kind: "scalar",
								T: 9,
							},
							{ no: 2, name: "contents", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new on().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new on().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new on().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(on, we, Pe);
					}
				}
				e.$PI = on;
				class Qi extends t.Message {
					constructor(we) {
						super(),
							(this.screenshots = []),
							(this.conversation = []),
							(this.logs = []),
							(this.consoleLogs = ""),
							(this.cursorVersion = ""),
							(this.os = ""),
							(this.protoUrl = ""),
							(this.failingRequstId = ""),
							(this.connectionErrorRaw = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.BugContext";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "screenshots",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 2, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 3,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{ no: 4, name: "logs", kind: "message", T: on, repeated: !0 },
							{ no: 5, name: "console_logs", kind: "scalar", T: 9 },
							{ no: 6, name: "cursor_version", kind: "scalar", T: 9 },
							{ no: 7, name: "os", kind: "scalar", T: 9 },
							{ no: 8, name: "proto_url", kind: "scalar", T: 9 },
							{ no: 9, name: "failing_requst_id", kind: "scalar", T: 9 },
							{ no: 10, name: "connection_error_raw", kind: "scalar", T: 9 },
							{ no: 12, name: "debug_info", kind: "message", T: w.$Hs },
							{
								no: 13,
								name: "connect_error_code",
								kind: "scalar",
								T: 5,
								opt: !0,
							},
							{
								no: 14,
								name: "error_detail_code",
								kind: "enum",
								T: t.proto3.getEnumType(w.ErrorDetails_Error),
								opt: !0,
							},
							{
								no: 15,
								name: "error_detail_title",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 16,
								name: "error_detail_detail",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Qi().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Qi().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Qi().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Qi, we, Pe);
					}
				}
				e.$QI = Qi;
				class rn extends t.Message {
					constructor(we) {
						super(),
							(this.bug = ""),
							(this.bugType = pn.UNSPECIFIED),
							(this.contactEmail = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportBugRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "bug", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "bug_type",
								kind: "enum",
								T: t.proto3.getEnumType(pn),
							},
							{ no: 3, name: "context", kind: "message", T: Qi },
							{ no: 4, name: "contact_email", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new rn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new rn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new rn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(rn, we, Pe);
					}
				}
				e.$RI = rn;
				var pn;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.LOW = 1)] = "LOW"),
						(Bi[(Bi.MEDIUM = 2)] = "MEDIUM"),
						(Bi[(Bi.URGENT = 3)] = "URGENT"),
						(Bi[(Bi.CRASH = 4)] = "CRASH"),
						(Bi[(Bi.CONNECTION_ERROR = 5)] = "CONNECTION_ERROR"),
						(Bi[(Bi.IDEA = 6)] = "IDEA"),
						(Bi[(Bi.MISC_AUTOMATIC_ERROR = 7)] = "MISC_AUTOMATIC_ERROR");
				})(pn || (e.ReportBugRequest_BugType = pn = {})),
					t.proto3.util.setEnumType(
						pn,
						"aiserver.v1.ReportBugRequest.BugType",
						[
							{ no: 0, name: "BUG_TYPE_UNSPECIFIED" },
							{ no: 1, name: "BUG_TYPE_LOW" },
							{ no: 2, name: "BUG_TYPE_MEDIUM" },
							{ no: 3, name: "BUG_TYPE_URGENT" },
							{ no: 4, name: "BUG_TYPE_CRASH" },
							{ no: 5, name: "BUG_TYPE_CONNECTION_ERROR" },
							{ no: 6, name: "BUG_TYPE_IDEA" },
							{ no: 7, name: "BUG_TYPE_MISC_AUTOMATIC_ERROR" },
						],
					);
				class bn extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportBugResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new bn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new bn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new bn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(bn, we, Pe);
					}
				}
				e.$SI = bn;
				class gn extends t.Message {
					constructor(we) {
						super(),
							(this.markers = []),
							(this.iterationNumber = 0),
							(this.sequenceId = ""),
							(this.userInstruction = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FixMarkersRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "markers", kind: "message", T: Cn, repeated: !0 },
							{ no: 2, name: "model_details", kind: "message", T: w.$Zs },
							{ no: 3, name: "iteration_number", kind: "scalar", T: 5 },
							{ no: 4, name: "sequence_id", kind: "scalar", T: 9 },
							{ no: 5, name: "user_instruction", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new gn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new gn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new gn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(gn, we, Pe);
					}
				}
				e.$TI = gn;
				class Cn extends t.Message {
					constructor(we) {
						super(),
							(this.lines = []),
							(this.startLine = 0),
							(this.endLineInclusive = 0),
							(this.message = ""),
							(this.relativeWorkspacePath = ""),
							(this.relatedInformation = []),
							(this.contextRanges = []),
							(this.ancestorTypeDefinitions = []),
							(this.insertedSymbolTypes = []),
							(this.quickFixes = []),
							(this.startColumn = 0),
							(this.endColumnInclusive = 0),
							(this.classInformation = []),
							(this.functionSignatures = []),
							(this.snapshot = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FixMarkersRequest.Marker";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "lines", kind: "scalar", T: 9, repeated: !0 },
							{ no: 2, name: "start_line", kind: "scalar", T: 5 },
							{ no: 3, name: "end_line_inclusive", kind: "scalar", T: 5 },
							{ no: 4, name: "message", kind: "scalar", T: 9 },
							{ no: 5, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 6,
								name: "related_information",
								kind: "message",
								T: Tn,
								repeated: !0,
							},
							{
								no: 7,
								name: "context_ranges",
								kind: "message",
								T: Vn,
								repeated: !0,
							},
							{
								no: 8,
								name: "ancestor_type_definitions",
								kind: "message",
								T: Zn,
								repeated: !0,
							},
							{
								no: 9,
								name: "inserted_symbol_types",
								kind: "message",
								T: On,
								repeated: !0,
							},
							{
								no: 10,
								name: "quick_fixes",
								kind: "message",
								T: Kn,
								repeated: !0,
							},
							{ no: 11, name: "start_column", kind: "scalar", T: 5 },
							{ no: 12, name: "end_column_inclusive", kind: "scalar", T: 5 },
							{
								no: 13,
								name: "class_information",
								kind: "message",
								T: gs,
								repeated: !0,
							},
							{
								no: 14,
								name: "function_signatures",
								kind: "message",
								T: Ms,
								repeated: !0,
							},
							{ no: 15, name: "snapshot", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Cn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Cn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Cn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Cn, we, Pe);
					}
				}
				e.$UI = Cn;
				class Tn extends t.Message {
					constructor(we) {
						super(),
							(this.message = ""),
							(this.relativeWorkspacePath = ""),
							(this.relevantLines = []),
							(this.startLine = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.FixMarkersRequest.Marker.RelatedInformation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "message", kind: "scalar", T: 9 },
							{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "relevant_lines",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 4, name: "start_line", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Tn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Tn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Tn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Tn, we, Pe);
					}
				}
				e.$VI = Tn;
				class Vn extends t.Message {
					constructor(we) {
						super(),
							(this.startLine = 0),
							(this.endLineInclusive = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FixMarkersRequest.Marker.ContextRange";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "start_line", kind: "scalar", T: 5 },
							{ no: 2, name: "end_line_inclusive", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Vn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Vn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Vn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Vn, we, Pe);
					}
				}
				e.$WI = Vn;
				class Zn extends t.Message {
					constructor(we) {
						super(),
							(this.name = ""),
							(this.relativeWorkspacePath = ""),
							(this.startLine = 0),
							(this.lines = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.FixMarkersRequest.Marker.AncestorTypeDefinition";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 3, name: "start_line", kind: "scalar", T: 5 },
							{ no: 4, name: "lines", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Zn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Zn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Zn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Zn, we, Pe);
					}
				}
				e.$XI = Zn;
				class On extends t.Message {
					constructor(we) {
						super(),
							(this.symbolName = ""),
							(this.symbolType = ""),
							(this.relativeWorkspacePath = ""),
							(this.symbolLine = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.FixMarkersRequest.Marker.InsertedSymbolType";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "symbol_name", kind: "scalar", T: 9 },
							{ no: 2, name: "symbol_type", kind: "scalar", T: 9 },
							{ no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 4, name: "symbol_line", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new On().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new On().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new On().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(On, we, Pe);
					}
				}
				e.$YI = On;
				class Kn extends t.Message {
					constructor(we) {
						super(),
							(this.message = ""),
							(this.kind = ""),
							(this.isPreferred = !1),
							(this.edits = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FixMarkersRequest.Marker.QuickFix";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "message", kind: "scalar", T: 9 },
							{ no: 2, name: "kind", kind: "scalar", T: 9 },
							{ no: 3, name: "is_preferred", kind: "scalar", T: 8 },
							{ no: 4, name: "edits", kind: "message", T: Ss, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Kn().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Kn().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Kn().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Kn, we, Pe);
					}
				}
				e.$ZI = Kn;
				class Ss extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.startLine = 0),
							(this.endLineInclusive = 0),
							(this.deletedLines = []),
							(this.addLines = []),
							(this.snapshot = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.FixMarkersRequest.Marker.QuickFix.Edit";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "start_line", kind: "scalar", T: 5 },
							{ no: 3, name: "end_line_inclusive", kind: "scalar", T: 5 },
							{
								no: 4,
								name: "deleted_lines",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 5, name: "add_lines", kind: "scalar", T: 9, repeated: !0 },
							{ no: 6, name: "snapshot", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ss().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ss().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ss().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ss, we, Pe);
					}
				}
				e.$1I = Ss;
				class gs extends t.Message {
					constructor(we) {
						super(),
							(this.className = ""),
							(this.startLine = 0),
							(this.topLevelLines = []),
							(this.lines = []),
							(this.constructors = []),
							(this.detail = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.FixMarkersRequest.Marker.ClassInformation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "class_name", kind: "scalar", T: 9 },
							{ no: 2, name: "start_line", kind: "scalar", T: 5 },
							{
								no: 3,
								name: "top_level_lines",
								kind: "scalar",
								T: 5,
								repeated: !0,
							},
							{ no: 4, name: "lines", kind: "scalar", T: 9, repeated: !0 },
							{
								no: 5,
								name: "constructors",
								kind: "message",
								T: mr,
								repeated: !0,
							},
							{ no: 6, name: "detail", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new gs().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new gs().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new gs().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(gs, we, Pe);
					}
				}
				e.$2I = gs;
				class mr extends t.Message {
					constructor(we) {
						super(),
							(this.startLine = 0),
							(this.endLineInclusive = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.FixMarkersRequest.Marker.ClassInformation.Constructor";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "start_line", kind: "scalar", T: 5 },
							{ no: 2, name: "end_line_inclusive", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new mr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new mr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new mr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(mr, we, Pe);
					}
				}
				e.$3I = mr;
				class Ms extends t.Message {
					constructor(we) {
						super(),
							(this.label = ""),
							(this.documentation = ""),
							(this.parameters = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.FixMarkersRequest.Marker.FunctionSignature";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "label", kind: "scalar", T: 9 },
							{ no: 2, name: "documentation", kind: "scalar", T: 9 },
							{
								no: 3,
								name: "parameters",
								kind: "message",
								T: oo,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Ms().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ms().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ms().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ms, we, Pe);
					}
				}
				e.$4I = Ms;
				class oo extends t.Message {
					constructor(we) {
						super(),
							(this.label = ""),
							(this.documentation = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.FixMarkersRequest.Marker.FunctionSignature.FunctionParameter";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "label", kind: "scalar", T: 9 },
							{ no: 2, name: "documentation", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new oo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new oo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new oo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(oo, we, Pe);
					}
				}
				e.$5I = oo;
				class Oo extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.changes = []),
							(this.success = !1),
							(this.iterationNumber = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FixMarkersResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "changes", kind: "message", T: Gr, repeated: !0 },
							{ no: 3, name: "success", kind: "scalar", T: 8 },
							{ no: 4, name: "iteration_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Oo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Oo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Oo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Oo, we, Pe);
					}
				}
				e.$6I = Oo;
				class Gr extends t.Message {
					constructor(we) {
						super(),
							(this.startLine = 0),
							(this.endLineExclusive = 0),
							(this.deletedLines = []),
							(this.addLines = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FixMarkersResponse.Change";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "start_line", kind: "scalar", T: 5 },
							{ no: 2, name: "end_line_exclusive", kind: "scalar", T: 5 },
							{
								no: 3,
								name: "deleted_lines",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 4, name: "add_lines", kind: "scalar", T: 9, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Gr().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Gr().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Gr().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Gr, we, Pe);
					}
				}
				e.$7I = Gr;
				class xo extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.repositories = []),
							(this.query = ""),
							(this.codeBlocks = []),
							(this.documentationIdentifiers = []),
							(this.badNotifications = []),
							(this.lintRules = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamLintRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{
								no: 2,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{
								no: 3,
								name: "repositories",
								kind: "message",
								T: a.$mv,
								repeated: !0,
							},
							{ no: 4, name: "explicit_context", kind: "message", T: w.$6s },
							{
								no: 5,
								name: "workspace_root_path",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{ no: 6, name: "query", kind: "scalar", T: 9 },
							{
								no: 7,
								name: "code_blocks",
								kind: "message",
								T: w.$Ps,
								repeated: !0,
							},
							{ no: 9, name: "model_details", kind: "message", T: w.$Zs },
							{
								no: 10,
								name: "documentation_identifiers",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{
								no: 11,
								name: "bad_notifications",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 12, name: "lint_rules", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new xo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new xo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new xo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(xo, we, Pe);
					}
				}
				e.$8I = xo;
				class ao extends t.Message {
					constructor(we) {
						super(),
							(this.requestId = ""),
							(this.timeSinceCompletedActionMs = 0),
							(this.featureType = w.FeatureType.UNSPECIFIED),
							(this.relativeWorkspacePath = ""),
							(this.contents = ""),
							(this.linesAboveAndBelow = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportGroundTruthCandidateRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "request_id", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "time_since_completed_action_ms",
								kind: "scalar",
								T: 5,
							},
							{
								no: 3,
								name: "feature_type",
								kind: "enum",
								T: t.proto3.getEnumType(w.FeatureType),
							},
							{ no: 4, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 5, name: "contents", kind: "scalar", T: 9 },
							{
								no: 6,
								name: "selection_in_question",
								kind: "message",
								T: w.$Ms,
							},
							{ no: 7, name: "lines_above_and_below", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(we, Pe) {
						return new ao().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new ao().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new ao().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(ao, we, Pe);
					}
				}
				e.$9I = ao;
				class co extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportGroundTruthCandidateResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new co().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new co().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new co().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(co, we, Pe);
					}
				}
				e.$0I = co;
				class Do extends t.Message {
					constructor(we) {
						super(),
							(this.requestId = ""),
							(this.fate = Fo.UNSPECIFIED),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportCmdKFateRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "request_id", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "fate",
								kind: "enum",
								T: t.proto3.getEnumType(Fo),
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Do().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Do().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Do().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Do, we, Pe);
					}
				}
				e.$$I = Do;
				var Fo;
				(function (Bi) {
					(Bi[(Bi.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(Bi[(Bi.CANCELLED = 1)] = "CANCELLED"),
						(Bi[(Bi.ACCEPTED = 2)] = "ACCEPTED"),
						(Bi[(Bi.REJECTED = 3)] = "REJECTED"),
						(Bi[(Bi.FOLLOWED_UP = 4)] = "FOLLOWED_UP"),
						(Bi[(Bi.REPROMPTED = 5)] = "REPROMPTED");
				})(Fo || (e.ReportCmdKFateRequest_Fate = Fo = {})),
					t.proto3.util.setEnumType(
						Fo,
						"aiserver.v1.ReportCmdKFateRequest.Fate",
						[
							{ no: 0, name: "FATE_UNSPECIFIED" },
							{ no: 1, name: "FATE_CANCELLED" },
							{ no: 2, name: "FATE_ACCEPTED" },
							{ no: 3, name: "FATE_REJECTED" },
							{ no: 4, name: "FATE_FOLLOWED_UP" },
							{ no: 5, name: "FATE_REPROMPTED" },
						],
					);
				class Uo extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ReportCmdKFateResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(we, Pe) {
						return new Uo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Uo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Uo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Uo, we, Pe);
					}
				}
				e.$_I = Uo;
				class Wo extends t.Message {
					constructor(we) {
						super(), (this.sshString = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.SshConfigPromptProps";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "ssh_string", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Wo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Wo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Wo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Wo, we, Pe);
					}
				}
				e.$aJ = Wo;
				class qo extends t.Message {
					constructor(we) {
						super(),
							(this.conversation = []),
							(this.files = []),
							(this.contextResults = { case: void 0 }),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetFilesForComposerRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "conversation",
								kind: "message",
								T: C.$SA,
								repeated: !0,
							},
							{ no: 2, name: "files", kind: "message", T: w.$Ws, repeated: !0 },
							{ no: 3, name: "rerank_results", kind: "scalar", T: 8, opt: !0 },
							{
								no: 4,
								name: "file_search_results",
								kind: "message",
								T: Yt,
								oneof: "context_results",
							},
							{
								no: 5,
								name: "code_search_results",
								kind: "message",
								T: ni,
								oneof: "context_results",
							},
							{
								no: 6,
								name: "rerank_results_v2",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{
								no: 7,
								name: "long_context_mode",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 8, name: "is_eval", kind: "scalar", T: 8, opt: !0 },
							{ no: 9, name: "request_id", kind: "scalar", T: 9, opt: !0 },
							{ no: 10, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new qo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new qo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new qo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(qo, we, Pe);
					}
				}
				e.$bJ = qo;
				class Bo extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePaths = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetFilesForComposerResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "relative_workspace_paths",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Bo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Bo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Bo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Bo, we, Pe);
					}
				}
				e.$cJ = Bo;
				class zo extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FindBugsRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "current_file", kind: "message", T: w.$Ws },
							{ no: 2, name: "model_details", kind: "message", T: w.$Zs },
						]);
					}
					static fromBinary(we, Pe) {
						return new zo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new zo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new zo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(zo, we, Pe);
					}
				}
				e.$dJ = zo;
				class jo extends t.Message {
					constructor(we) {
						super(), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FindBugsResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "bug", kind: "message", T: Mo, opt: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new jo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new jo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new jo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(jo, we, Pe);
					}
				}
				e.$eJ = jo;
				class Mo extends t.Message {
					constructor(we) {
						super(),
							(this.description = ""),
							(this.lineNumber = 0),
							(this.confidence = 0),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.FindBugsResponse.Bug";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "description", kind: "scalar", T: 9 },
							{ no: 2, name: "line_number", kind: "scalar", T: 5 },
							{ no: 3, name: "confidence", kind: "scalar", T: 2 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Mo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Mo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Mo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Mo, we, Pe);
					}
				}
				e.$fJ = Mo;
				class No extends t.Message {
					constructor(we) {
						super(),
							(this.diffs = []),
							(this.previousCommitMessages = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.WriteGitCommitMessageRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "diffs", kind: "scalar", T: 9, repeated: !0 },
							{
								no: 2,
								name: "previous_commit_messages",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new No().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new No().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new No().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(No, we, Pe);
					}
				}
				e.$gJ = No;
				class Ro extends t.Message {
					constructor(we) {
						super(),
							(this.commitMessage = ""),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.WriteGitCommitMessageResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "commit_message", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ro().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ro().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ro().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ro, we, Pe);
					}
				}
				e.$hJ = Ro;
				class Go extends t.Message {
					constructor(we) {
						super(),
							(this.requestId = ""),
							(this.isComposerVisible = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.KeepComposerCacheWarmRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "request", kind: "message", T: is },
							{ no: 2, name: "request_id", kind: "scalar", T: 9 },
							{ no: 3, name: "is_composer_visible", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Go().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Go().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Go().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Go, we, Pe);
					}
				}
				e.$iJ = Go;
				class Jo extends t.Message {
					constructor(we) {
						super(),
							(this.didKeepWarm = !1),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.KeepComposerCacheWarmResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "did_keep_warm", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Jo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Jo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Jo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Jo, we, Pe);
					}
				}
				e.$jJ = Jo;
				class Xo extends t.Message {
					constructor(we) {
						super(), (this.diffs = []), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetDiffReviewRequest";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "diffs", kind: "message", T: Vo, repeated: !0 },
							{
								no: 2,
								name: "custom_instructions",
								kind: "scalar",
								T: 9,
								opt: !0,
							},
							{
								no: 3,
								name: "use_premium_model",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
						]);
					}
					static fromBinary(we, Pe) {
						return new Xo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Xo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Xo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Xo, we, Pe);
					}
				}
				e.$kJ = Xo;
				class Vo extends t.Message {
					constructor(we) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.chunks = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.GetDiffReviewRequest.SimpleFileDiff";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "chunks", kind: "message", T: Ho, repeated: !0 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Vo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Vo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Vo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Vo, we, Pe);
					}
				}
				e.$lJ = Vo;
				class Ho extends t.Message {
					constructor(we) {
						super(),
							(this.oldLines = []),
							(this.newLines = []),
							t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.GetDiffReviewRequest.SimpleFileDiff.Chunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "old_lines", kind: "scalar", T: 9, repeated: !0 },
							{ no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: !0 },
							{ no: 3, name: "old_range", kind: "message", T: w.$Ms },
							{ no: 4, name: "new_range", kind: "message", T: w.$Ms },
						]);
					}
					static fromBinary(we, Pe) {
						return new Ho().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Ho().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Ho().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Ho, we, Pe);
					}
				}
				e.$mJ = Ho;
				class Yo extends t.Message {
					constructor(we) {
						super(), (this.text = ""), t.proto3.util.initPartial(we, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.StreamDiffReviewResponse";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(we, Pe) {
						return new Yo().fromBinary(we, Pe);
					}
					static fromJson(we, Pe) {
						return new Yo().fromJson(we, Pe);
					}
					static fromJsonString(we, Pe) {
						return new Yo().fromJsonString(we, Pe);
					}
					static equals(we, Pe) {
						return t.proto3.util.equals(Yo, we, Pe);
					}
				}
				e.$nJ = Yo;
			},
		),
		