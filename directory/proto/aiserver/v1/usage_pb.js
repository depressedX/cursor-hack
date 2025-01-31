import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1480], he([1, 0, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$zD =
					e.$yD =
					e.$xD =
					e.$wD =
					e.$vD =
					e.$uD =
					e.$tD =
					e.$sD =
					e.$rD =
					e.$qD =
					e.$pD =
					e.$oD =
					e.$nD =
					e.$mD =
						void 0);
			class i extends t.Message {
				constructor(f) {
					super(),
						(this.feature = { case: void 0 }),
						t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "chat", kind: "message", T: E, oneof: "feature" },
						{
							no: 2,
							name: "context_chat",
							kind: "message",
							T: u,
							oneof: "feature",
						},
						{ no: 3, name: "cmd_k", kind: "message", T: a, oneof: "feature" },
						{
							no: 4,
							name: "terminal_cmd_k",
							kind: "message",
							T: h,
							oneof: "feature",
						},
						{
							no: 5,
							name: "ai_review_accepted_comment",
							kind: "message",
							T: c,
							oneof: "feature",
						},
						{
							no: 6,
							name: "interpreter_chat",
							kind: "message",
							T: n,
							oneof: "feature",
						},
						{
							no: 7,
							name: "slash_edit",
							kind: "message",
							T: g,
							oneof: "feature",
						},
						{
							no: 8,
							name: "composer",
							kind: "message",
							T: d,
							oneof: "feature",
						},
						{
							no: 9,
							name: "fast_apply",
							kind: "message",
							T: C,
							oneof: "feature",
						},
						{
							no: 10,
							name: "warm_composer",
							kind: "message",
							T: r,
							oneof: "feature",
						},
						{
							no: 11,
							name: "bug_finder_trigger_v1",
							kind: "message",
							T: w,
							oneof: "feature",
						},
						{
							no: 12,
							name: "tool_call_composer",
							kind: "message",
							T: m,
							oneof: "feature",
						},
					]);
				}
				static fromBinary(f, b) {
					return new i().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new i().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new i().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(i, f, b);
				}
			}
			e.$mD = i;
			class w extends t.Message {
				constructor(f) {
					super(),
						(this.inBackgroundSubsidized = !1),
						(this.costCents = 0),
						(this.isFast = !1),
						t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.BugFinderTriggerV1";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "in_background_subsidized", kind: "scalar", T: 8 },
						{ no: 2, name: "cost_cents", kind: "scalar", T: 5 },
						{ no: 3, name: "is_fast", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(f, b) {
					return new w().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new w().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new w().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(w, f, b);
				}
			}
			e.$nD = w;
			class E extends t.Message {
				constructor(f) {
					super(), (this.modelIntent = ""), t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.Chat";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_intent", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(f, b) {
					return new E().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new E().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new E().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(E, f, b);
				}
			}
			e.$oD = E;
			class C extends t.Message {
				constructor(f) {
					super(),
						(this.isOptimistic = !1),
						(this.willingToPayExtraForSpeed = !1),
						t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.FastApply";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "is_optimistic", kind: "scalar", T: 8 },
						{
							no: 2,
							name: "willing_to_pay_extra_for_speed",
							kind: "scalar",
							T: 8,
						},
					]);
				}
				static fromBinary(f, b) {
					return new C().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new C().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new C().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(C, f, b);
				}
			}
			e.$pD = C;
			class d extends t.Message {
				constructor(f) {
					super(), (this.modelIntent = ""), t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.Composer";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_intent", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(f, b) {
					return new d().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new d().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new d().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(d, f, b);
				}
			}
			e.$qD = d;
			class m extends t.Message {
				constructor(f) {
					super(), (this.modelIntent = ""), t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.ToolCallComposer";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_intent", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(f, b) {
					return new m().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new m().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new m().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(m, f, b);
				}
			}
			e.$rD = m;
			class r extends t.Message {
				constructor(f) {
					super(), (this.modelIntent = ""), t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.WarmComposer";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_intent", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(f, b) {
					return new r().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new r().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new r().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(r, f, b);
				}
			}
			e.$sD = r;
			class u extends t.Message {
				constructor(f) {
					super(), (this.modelIntent = ""), t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.ContextChat";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_intent", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(f, b) {
					return new u().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new u().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new u().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(u, f, b);
				}
			}
			e.$tD = u;
			class a extends t.Message {
				constructor(f) {
					super(), (this.modelIntent = ""), t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.CmdK";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_intent", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(f, b) {
					return new a().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new a().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new a().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(a, f, b);
				}
			}
			e.$uD = a;
			class h extends t.Message {
				constructor(f) {
					super(), (this.modelIntent = ""), t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.TerminalCmdK";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_intent", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(f, b) {
					return new h().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new h().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new h().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(h, f, b);
				}
			}
			e.$vD = h;
			class c extends t.Message {
				constructor(f) {
					super(), t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.UsageEventDetails.AiReviewAcceptedComment";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(f, b) {
					return new c().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new c().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new c().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(c, f, b);
				}
			}
			e.$wD = c;
			class n extends t.Message {
				constructor(f) {
					super(), (this.modelIntent = ""), t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.InterpreterChat";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_intent", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(f, b) {
					return new n().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new n().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new n().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(n, f, b);
				}
			}
			e.$xD = n;
			class g extends t.Message {
				constructor(f) {
					super(), (this.modelIntent = ""), t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEventDetails.SlashEdit";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_intent", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(f, b) {
					return new g().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new g().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new g().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(g, f, b);
				}
			}
			e.$yD = g;
			class p extends t.Message {
				constructor(f) {
					super(),
						(this.timestamp = t.protoInt64.zero),
						(this.isSlow = !1),
						(this.status = ""),
						t.proto3.util.initPartial(f, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UsageEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "timestamp", kind: "scalar", T: 3 },
						{ no: 2, name: "details", kind: "message", T: i },
						{
							no: 3,
							name: "subscription_product_id",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{ no: 4, name: "usage_price_id", kind: "scalar", T: 9, opt: !0 },
						{ no: 5, name: "is_slow", kind: "scalar", T: 8 },
						{ no: 6, name: "status", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(f, b) {
					return new p().fromBinary(f, b);
				}
				static fromJson(f, b) {
					return new p().fromJson(f, b);
				}
				static fromJsonString(f, b) {
					return new p().fromJsonString(f, b);
				}
				static equals(f, b) {
					return t.proto3.util.equals(p, f, b);
				}
			}
			e.$zD = p;
		})
