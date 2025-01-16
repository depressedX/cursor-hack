define(de[1485], he([1, 0, 86, 83, 272]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.StreamInlineLongCompletionRequest_ContextBlock_ContextType =
					e.$b0 =
					e.$a0 =
					e.$_9 =
						void 0);
			class E extends t.Message {
				constructor(u) {
					super(), t.proto3.util.initPartial(u, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.InlineGPT4PromptProtoV1";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "current_file", kind: "message", T: i.$Ws },
					]);
				}
				static fromBinary(u, a) {
					return new E().fromBinary(u, a);
				}
				static fromJson(u, a) {
					return new E().fromJson(u, a);
				}
				static fromJsonString(u, a) {
					return new E().fromJsonString(u, a);
				}
				static equals(u, a) {
					return t.proto3.util.equals(E, u, a);
				}
			}
			e.$_9 = E;
			class C extends t.Message {
				constructor(u) {
					super(),
						(this.repositories = []),
						(this.contextBlocks = []),
						t.proto3.util.initPartial(u, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamInlineLongCompletionRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "current_file", kind: "message", T: i.$Ws },
						{
							no: 6,
							name: "repositories",
							kind: "message",
							T: w.$mv,
							repeated: !0,
						},
						{
							no: 7,
							name: "context_blocks",
							kind: "message",
							T: d,
							repeated: !0,
						},
						{ no: 13, name: "explicit_context", kind: "message", T: i.$6s },
						{ no: 14, name: "model_details", kind: "message", T: i.$Zs },
						{ no: 15, name: "linter_errors", kind: "message", T: i.$4s },
					]);
				}
				static fromBinary(u, a) {
					return new C().fromBinary(u, a);
				}
				static fromJson(u, a) {
					return new C().fromJson(u, a);
				}
				static fromJsonString(u, a) {
					return new C().fromJsonString(u, a);
				}
				static equals(u, a) {
					return t.proto3.util.equals(C, u, a);
				}
			}
			e.$a0 = C;
			class d extends t.Message {
				constructor(u) {
					super(),
						(this.contextType = m.UNSPECIFIED),
						(this.blocks = []),
						t.proto3.util.initPartial(u, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "context_type",
							kind: "enum",
							T: t.proto3.getEnumType(m),
						},
						{ no: 2, name: "blocks", kind: "message", T: i.$Ps, repeated: !0 },
					]);
				}
				static fromBinary(u, a) {
					return new d().fromBinary(u, a);
				}
				static fromJson(u, a) {
					return new d().fromJson(u, a);
				}
				static fromJsonString(u, a) {
					return new d().fromJsonString(u, a);
				}
				static equals(u, a) {
					return t.proto3.util.equals(d, u, a);
				}
			}
			e.$b0 = d;
			var m;
			(function (r) {
				(r[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(r[(r.RECENT_LOCATIONS = 1)] = "RECENT_LOCATIONS");
			})(
				m ||
					(e.StreamInlineLongCompletionRequest_ContextBlock_ContextType = m =
						{}),
			),
				t.proto3.util.setEnumType(
					m,
					"aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock.ContextType",
					[
						{ no: 0, name: "CONTEXT_TYPE_UNSPECIFIED" },
						{ no: 1, name: "CONTEXT_TYPE_RECENT_LOCATIONS" },
					],
				);
		}),
		