import '../../../../../require.js';
import '../../../../../exports.js';
import '../../message.js';
import './type_pb.js';
import './source_context_pb.js';
import '../../proto3.js';
define(
			de[2040],
			he([1, 0, 339, 1406, 1088, 406]),
			function (ce /*require*/,
 e /*exports*/,
 t /*message*/,
 i /*type_pb*/,
 w /*source_context_pb*/,
 E /*proto3*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.Mixin = e.Method = e.Api = void 0);
				class C extends t.Message {
					constructor(u) {
						super(),
							(this.name = ""),
							(this.methods = []),
							(this.options = []),
							(this.version = ""),
							(this.mixins = []),
							(this.syntax = i.Syntax.PROTO2),
							E.proto3.util.initPartial(u, this);
					}
					static {
						this.runtime = E.proto3;
					}
					static {
						this.typeName = "google.protobuf.Api";
					}
					static {
						this.fields = E.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "methods", kind: "message", T: d, repeated: !0 },
							{
								no: 3,
								name: "options",
								kind: "message",
								T: i.Option,
								repeated: !0,
							},
							{ no: 4, name: "version", kind: "scalar", T: 9 },
							{
								no: 5,
								name: "source_context",
								kind: "message",
								T: w.SourceContext,
							},
							{ no: 6, name: "mixins", kind: "message", T: m, repeated: !0 },
							{
								no: 7,
								name: "syntax",
								kind: "enum",
								T: E.proto3.getEnumType(i.Syntax),
							},
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
						return E.proto3.util.equals(C, u, a);
					}
				}
				e.Api = C;
				class d extends t.Message {
					constructor(u) {
						super(),
							(this.name = ""),
							(this.requestTypeUrl = ""),
							(this.requestStreaming = !1),
							(this.responseTypeUrl = ""),
							(this.responseStreaming = !1),
							(this.options = []),
							(this.syntax = i.Syntax.PROTO2),
							E.proto3.util.initPartial(u, this);
					}
					static {
						this.runtime = E.proto3;
					}
					static {
						this.typeName = "google.protobuf.Method";
					}
					static {
						this.fields = E.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "request_type_url", kind: "scalar", T: 9 },
							{ no: 3, name: "request_streaming", kind: "scalar", T: 8 },
							{ no: 4, name: "response_type_url", kind: "scalar", T: 9 },
							{ no: 5, name: "response_streaming", kind: "scalar", T: 8 },
							{
								no: 6,
								name: "options",
								kind: "message",
								T: i.Option,
								repeated: !0,
							},
							{
								no: 7,
								name: "syntax",
								kind: "enum",
								T: E.proto3.getEnumType(i.Syntax),
							},
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
						return E.proto3.util.equals(d, u, a);
					}
				}
				e.Method = d;
				class m extends t.Message {
					constructor(u) {
						super(),
							(this.name = ""),
							(this.root = ""),
							E.proto3.util.initPartial(u, this);
					}
					static {
						this.runtime = E.proto3;
					}
					static {
						this.typeName = "google.protobuf.Mixin";
					}
					static {
						this.fields = E.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "root", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(u, a) {
						return new m().fromBinary(u, a);
					}
					static fromJson(u, a) {
						return new m().fromJson(u, a);
					}
					static fromJsonString(u, a) {
						return new m().fromJsonString(u, a);
					}
					static equals(u, a) {
						return E.proto3.util.equals(m, u, a);
					}
				}
				e.Mixin = m;
			},
		),
		