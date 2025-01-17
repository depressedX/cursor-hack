import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './utils_pb.js';
import './tools_pb.js';
define(de[1111], he([1, 0, 86, 83, 124]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$O9 =
					e.$N9 =
					e.$M9 =
					e.$L9 =
					e.$K9 =
					e.$J9 =
					e.$I9 =
					e.$H9 =
					e.$G9 =
					e.$F9 =
					e.$E9 =
					e.$D9 =
					e.$C9 =
					e.$B9 =
					e.$A9 =
					e.$z9 =
					e.$y9 =
					e.$x9 =
					e.$w9 =
					e.$v9 =
					e.$u9 =
					e.$t9 =
					e.$s9 =
					e.$r9 =
					e.$q9 =
					e.$p9 =
					e.$o9 =
					e.$n9 =
					e.AiProjectStepType =
						void 0);
			var E;
			(function (A) {
				(A[(A.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(A[(A.READ_WRITE_FILE = 1)] = "READ_WRITE_FILE"),
					(A[(A.RUN_TERM = 2)] = "RUN_TERM"),
					(A[(A.CREATE_RM_FILES = 3)] = "CREATE_RM_FILES");
			})(E || (e.AiProjectStepType = E = {})),
				t.proto3.util.setEnumType(E, "aiserver.v1.AiProjectStepType", [
					{ no: 0, name: "AI_PROJECT_STEP_TYPE_UNSPECIFIED" },
					{ no: 1, name: "AI_PROJECT_STEP_TYPE_READ_WRITE_FILE" },
					{ no: 2, name: "AI_PROJECT_STEP_TYPE_RUN_TERM" },
					{ no: 3, name: "AI_PROJECT_STEP_TYPE_CREATE_RM_FILES" },
				]);
			class C extends t.Message {
				constructor(R) {
					super(), (this.prompt = ""), t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectAgentInitRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_details", kind: "message", T: i.$Zs },
						{ no: 2, name: "prompt", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(R, O) {
					return new C().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new C().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new C().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(C, R, O);
				}
			}
			e.$n9 = C;
			class d extends t.Message {
				constructor(R) {
					super(),
						(this.fullUserMessage = ""),
						(this.fullBotMessage = ""),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.MessagePayload";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "full_user_message", kind: "scalar", T: 9 },
						{ no: 2, name: "full_bot_message", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(R, O) {
					return new d().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new d().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new d().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(d, R, O);
				}
			}
			e.$o9 = d;
			class m extends t.Message {
				constructor(R) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectClarification";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "output", kind: "scalar", T: 9, oneof: "response" },
						{ no: 2, name: "thought", kind: "scalar", T: 9, oneof: "response" },
						{
							no: 3,
							name: "message_payload",
							kind: "message",
							T: d,
							oneof: "response",
						},
					]);
				}
				static fromBinary(R, O) {
					return new m().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new m().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new m().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(m, R, O);
				}
			}
			e.$p9 = m;
			class r extends t.Message {
				constructor(R) {
					super(),
						(this.clarificationResponse = ""),
						(this.previousMessages = []),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectClarificationRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_details", kind: "message", T: i.$Zs },
						{ no: 2, name: "clarification_response", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "previous_messages",
							kind: "message",
							T: i.$7s,
							repeated: !0,
						},
					]);
				}
				static fromBinary(R, O) {
					return new r().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new r().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new r().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(r, R, O);
				}
			}
			e.$q9 = r;
			class u extends t.Message {
				constructor(R) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectClarificationResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "clarification",
							kind: "message",
							T: m,
							oneof: "response",
						},
						{
							no: 2,
							name: "repeat_clarification",
							kind: "scalar",
							T: 8,
							oneof: "response",
						},
					]);
				}
				static fromBinary(R, O) {
					return new u().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new u().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new u().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(u, R, O);
				}
			}
			e.$r9 = u;
			class a extends t.Message {
				constructor(R) {
					super(),
						(this.previousMessages = []),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectAgentPlanRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_details", kind: "message", T: i.$Zs },
						{
							no: 3,
							name: "previous_messages",
							kind: "message",
							T: i.$7s,
							repeated: !0,
						},
					]);
				}
				static fromBinary(R, O) {
					return new a().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new a().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new a().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(a, R, O);
				}
			}
			e.$s9 = a;
			class h extends t.Message {
				constructor(R) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectAgentPlanResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "thought", kind: "scalar", T: 9, oneof: "response" },
						{ no: 2, name: "output", kind: "scalar", T: 9, oneof: "response" },
						{
							no: 3,
							name: "message_payload",
							kind: "message",
							T: d,
							oneof: "response",
						},
					]);
				}
				static fromBinary(R, O) {
					return new h().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new h().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new h().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(h, R, O);
				}
			}
			e.$t9 = h;
			class c extends t.Message {
				constructor(R) {
					super(),
						(this.previousMessages = []),
						(this.feedbackOrProgress = ""),
						(this.forceMoveToNextStep = !1),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectPlanFeedbackRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_details", kind: "message", T: i.$Zs },
						{
							no: 2,
							name: "previous_messages",
							kind: "message",
							T: i.$7s,
							repeated: !0,
						},
						{ no: 3, name: "feedback_or_progress", kind: "scalar", T: 9 },
						{ no: 4, name: "force_move_to_next_step", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(R, O) {
					return new c().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new c().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new c().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(c, R, O);
				}
			}
			e.$u9 = c;
			class n extends t.Message {
				constructor(R) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectPlanFeedbackResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "revised_plan",
							kind: "message",
							T: h,
							oneof: "response",
						},
						{
							no: 2,
							name: "repeat_feedback",
							kind: "scalar",
							T: 8,
							oneof: "response",
						},
					]);
				}
				static fromBinary(R, O) {
					return new n().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new n().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new n().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(n, R, O);
				}
			}
			e.$v9 = n;
			class g extends t.Message {
				constructor(R) {
					super(),
						(this.description = ""),
						(this.spec = ""),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectBreakdownRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_details", kind: "message", T: i.$Zs },
						{ no: 2, name: "description", kind: "scalar", T: 9 },
						{ no: 3, name: "spec", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(R, O) {
					return new g().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new g().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new g().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(g, R, O);
				}
			}
			e.$w9 = g;
			class p extends t.Message {
				constructor(R) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectBreakdownResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "thought", kind: "scalar", T: 9, oneof: "response" },
						{ no: 2, name: "step", kind: "message", T: o, oneof: "response" },
						{
							no: 3,
							name: "message_payload",
							kind: "message",
							T: d,
							oneof: "response",
						},
					]);
				}
				static fromBinary(R, O) {
					return new p().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new p().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new p().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(p, R, O);
				}
			}
			e.$x9 = p;
			class o extends t.Message {
				constructor(R) {
					super(),
						(this.stepNumber = 0),
						(this.stepDescription = ""),
						(this.stepType = E.UNSPECIFIED),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectBreakdownResponse.Step";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "step_number", kind: "scalar", T: 5 },
						{ no: 2, name: "step_description", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "step_type",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
					]);
				}
				static fromBinary(R, O) {
					return new o().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new o().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new o().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(o, R, O);
				}
			}
			e.$y9 = o;
			class f extends t.Message {
				constructor(R) {
					super(),
						(this.previousMessages = []),
						(this.feedbackOrProgress = ""),
						(this.forceMoveToNextStep = !1),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectBreakdownFeedbackRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_details", kind: "message", T: i.$Zs },
						{
							no: 2,
							name: "previous_messages",
							kind: "message",
							T: i.$7s,
							repeated: !0,
						},
						{ no: 3, name: "feedback_or_progress", kind: "scalar", T: 9 },
						{ no: 4, name: "force_move_to_next_step", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(R, O) {
					return new f().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new f().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new f().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(f, R, O);
				}
			}
			e.$z9 = f;
			class b extends t.Message {
				constructor(R) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectBreakdownFeedbackResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "revised_breakdown",
							kind: "message",
							T: p,
							oneof: "response",
						},
						{
							no: 2,
							name: "repeat_feedback",
							kind: "scalar",
							T: 8,
							oneof: "response",
						},
					]);
				}
				static fromBinary(R, O) {
					return new b().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new b().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new b().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(b, R, O);
				}
			}
			e.$A9 = b;
			class s extends t.Message {
				constructor(R) {
					super(),
						(this.stepDescription = ""),
						(this.projectPlan = ""),
						(this.projectBreakdown = []),
						(this.stepType = E.UNSPECIFIED),
						(this.shellType = w.ShellType.UNSPECIFIED),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_details", kind: "message", T: i.$Zs },
						{ no: 2, name: "step_description", kind: "scalar", T: 9 },
						{ no: 3, name: "project_plan", kind: "scalar", T: 9 },
						{
							no: 4,
							name: "project_breakdown",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{
							no: 5,
							name: "step_type",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 6,
							name: "shell_type",
							kind: "enum",
							T: t.proto3.getEnumType(w.ShellType),
						},
					]);
				}
				static fromBinary(R, O) {
					return new s().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new s().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new s().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(s, R, O);
				}
			}
			e.$B9 = s;
			class l extends t.Message {
				constructor(R) {
					super(),
						(this.response = { case: void 0 }),
						(this.stepType = E.UNSPECIFIED),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "thought", kind: "scalar", T: 9, oneof: "response" },
						{ no: 2, name: "output", kind: "scalar", T: 9, oneof: "response" },
						{
							no: 3,
							name: "message_payload",
							kind: "message",
							T: d,
							oneof: "response",
						},
						{
							no: 5,
							name: "step_payload",
							kind: "message",
							T,
							oneof: "response",
						},
						{
							no: 4,
							name: "step_type",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
					]);
				}
				static fromBinary(R, O) {
					return new l().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new l().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new l().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(l, R, O);
				}
			}
			e.$C9 = l;
			class y extends t.Message {
				constructor(R) {
					super(), (this.filename = ""), t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepResponse.WriteCode";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "filename", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(R, O) {
					return new y().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new y().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new y().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(y, R, O);
				}
			}
			e.$D9 = y;
			class $ extends t.Message {
				constructor(R) {
					super(), (this.thought = ""), t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepResponse.ReviseCode";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "thought", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(R, O) {
					return new $().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new $().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new $().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals($, R, O);
				}
			}
			e.$E9 = $;
			class v extends t.Message {
				constructor(R) {
					super(),
						(this.commandBatchUuid = ""),
						(this.command = ""),
						(this.response = ""),
						(this.text = ""),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepResponse.RunTerm";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "command_batch_uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "command", kind: "scalar", T: 9 },
						{ no: 3, name: "response", kind: "scalar", T: 9 },
						{ no: 4, name: "text", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(R, O) {
					return new v().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new v().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new v().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(v, R, O);
				}
			}
			e.$F9 = v;
			class S extends t.Message {
				constructor(R) {
					super(),
						(this.payload = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepResponse.CreatingFiles";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "filename", kind: "scalar", T: 9, oneof: "payload" },
						{
							no: 2,
							name: "directory",
							kind: "scalar",
							T: 9,
							oneof: "payload",
						},
					]);
				}
				static fromBinary(R, O) {
					return new S().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new S().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new S().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(S, R, O);
				}
			}
			e.$G9 = S;
			class I extends t.Message {
				constructor(R) {
					super(), t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepResponse.Nothing";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(R, O) {
					return new I().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new I().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new I().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(I, R, O);
				}
			}
			e.$H9 = I;
			class T extends t.Message {
				constructor(R) {
					super(),
						(this.payload = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepResponse.StepPayload";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 5,
							name: "write_code",
							kind: "message",
							T: y,
							oneof: "payload",
						},
						{
							no: 6,
							name: "run_term",
							kind: "message",
							T: v,
							oneof: "payload",
						},
						{
							no: 7,
							name: "creating_files",
							kind: "message",
							T: S,
							oneof: "payload",
						},
						{
							no: 8,
							name: "revise_code",
							kind: "message",
							T: $,
							oneof: "payload",
						},
					]);
				}
				static fromBinary(R, O) {
					return new T().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new T().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new T().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(T, R, O);
				}
			}
			e.$I9 = T;
			class P extends t.Message {
				constructor(R) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepResponseWrapped";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "real_response",
							kind: "message",
							T: l,
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
				static fromBinary(R, O) {
					return new P().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new P().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new P().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(P, R, O);
				}
			}
			e.$J9 = P;
			class k extends t.Message {
				constructor(R) {
					super(),
						(this.stepDescription = ""),
						(this.projectPlan = ""),
						(this.projectBreakdown = []),
						(this.stepType = E.UNSPECIFIED),
						(this.shellType = w.ShellType.UNSPECIFIED),
						(this.previousFeedbackMessages = []),
						(this.forceMoveToNextStep = !1),
						(this.feedbackPayload = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepFeedbackRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_details", kind: "message", T: i.$Zs },
						{ no: 2, name: "step_description", kind: "scalar", T: 9 },
						{ no: 3, name: "project_plan", kind: "scalar", T: 9 },
						{
							no: 4,
							name: "project_breakdown",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{
							no: 5,
							name: "step_type",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 6,
							name: "shell_type",
							kind: "enum",
							T: t.proto3.getEnumType(w.ShellType),
						},
						{
							no: 7,
							name: "previous_feedback_messages",
							kind: "message",
							T: i.$7s,
							repeated: !0,
						},
						{ no: 8, name: "force_move_to_next_step", kind: "scalar", T: 8 },
						{
							no: 9,
							name: "modify_code_payload",
							kind: "message",
							T: L,
							oneof: "feedback_payload",
						},
					]);
				}
				static fromBinary(R, O) {
					return new k().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new k().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new k().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(k, R, O);
				}
			}
			e.$K9 = k;
			class L extends t.Message {
				constructor(R) {
					super(),
						(this.filesToModify = []),
						(this.feedbackText = ""),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.AiProjectStepFeedbackRequest.ModifyCodePayload";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "files_to_modify",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{ no: 2, name: "feedback_text", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(R, O) {
					return new L().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new L().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new L().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(L, R, O);
				}
			}
			e.$L9 = L;
			class D extends t.Message {
				constructor(R) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepFeedbackResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "response_from_feedback",
							kind: "message",
							T: l,
							oneof: "response",
						},
						{
							no: 2,
							name: "repeat_feedback",
							kind: "scalar",
							T: 8,
							oneof: "response",
						},
					]);
				}
				static fromBinary(R, O) {
					return new D().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new D().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new D().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(D, R, O);
				}
			}
			e.$M9 = D;
			class M extends t.Message {
				constructor(R) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectStepFeedbackResponseWrapped";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "real_response",
							kind: "message",
							T: D,
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
				static fromBinary(R, O) {
					return new M().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new M().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new M().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(M, R, O);
				}
			}
			e.$N9 = M;
			class N extends t.Message {
				constructor(R) {
					super(),
						(this.code = ""),
						(this.path = ""),
						t.proto3.util.initPartial(R, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiProjectAgentWriteCode";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 2, name: "code", kind: "scalar", T: 9 },
						{ no: 3, name: "path", kind: "scalar", T: 9 },
						{ no: 4, name: "message_payload", kind: "message", T: d },
					]);
				}
				static fromBinary(R, O) {
					return new N().fromBinary(R, O);
				}
				static fromJson(R, O) {
					return new N().fromJson(R, O);
				}
				static fromJsonString(R, O) {
					return new N().fromJsonString(R, O);
				}
				static equals(R, O) {
					return t.proto3.util.equals(N, R, O);
				}
			}
			e.$O9 = N;
		}),
		