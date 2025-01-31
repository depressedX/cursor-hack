import '../../../../../require.js';
import '../../../../../exports.js';
import '../../proto3.js';
import '../../message.js';
import './source_context_pb.js';
import './any_pb.js';
define(
			de[1406],
			he([1, 0, 406, 339, 1088, 875]),
			function (ce /*require*/,
 e /*exports*/,
 t /*proto3*/,
 i /*message*/,
 w /*source_context_pb*/,
 E /*any_pb*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.Option =
						e.EnumValue =
						e.Enum =
						e.Field_Cardinality =
						e.Field_Kind =
						e.Field =
						e.Type =
						e.Syntax =
							void 0);
				var C;
				(function (n) {
					(n[(n.PROTO2 = 0)] = "PROTO2"),
						(n[(n.PROTO3 = 1)] = "PROTO3"),
						(n[(n.EDITIONS = 2)] = "EDITIONS");
				})(C || (e.Syntax = C = {})),
					t.proto3.util.setEnumType(C, "google.protobuf.Syntax", [
						{ no: 0, name: "SYNTAX_PROTO2" },
						{ no: 1, name: "SYNTAX_PROTO3" },
						{ no: 2, name: "SYNTAX_EDITIONS" },
					]);
				class d extends i.Message {
					constructor(g) {
						super(),
							(this.name = ""),
							(this.fields = []),
							(this.oneofs = []),
							(this.options = []),
							(this.syntax = C.PROTO2),
							(this.edition = ""),
							t.proto3.util.initPartial(g, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "google.protobuf.Type";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "fields", kind: "message", T: m, repeated: !0 },
							{ no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: !0 },
							{ no: 4, name: "options", kind: "message", T: c, repeated: !0 },
							{
								no: 5,
								name: "source_context",
								kind: "message",
								T: w.SourceContext,
							},
							{
								no: 6,
								name: "syntax",
								kind: "enum",
								T: t.proto3.getEnumType(C),
							},
							{ no: 7, name: "edition", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(g, p) {
						return new d().fromBinary(g, p);
					}
					static fromJson(g, p) {
						return new d().fromJson(g, p);
					}
					static fromJsonString(g, p) {
						return new d().fromJsonString(g, p);
					}
					static equals(g, p) {
						return t.proto3.util.equals(d, g, p);
					}
				}
				e.Type = d;
				class m extends i.Message {
					constructor(g) {
						super(),
							(this.kind = r.TYPE_UNKNOWN),
							(this.cardinality = u.UNKNOWN),
							(this.number = 0),
							(this.name = ""),
							(this.typeUrl = ""),
							(this.oneofIndex = 0),
							(this.packed = !1),
							(this.options = []),
							(this.jsonName = ""),
							(this.defaultValue = ""),
							t.proto3.util.initPartial(g, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "google.protobuf.Field";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "kind", kind: "enum", T: t.proto3.getEnumType(r) },
							{
								no: 2,
								name: "cardinality",
								kind: "enum",
								T: t.proto3.getEnumType(u),
							},
							{ no: 3, name: "number", kind: "scalar", T: 5 },
							{ no: 4, name: "name", kind: "scalar", T: 9 },
							{ no: 6, name: "type_url", kind: "scalar", T: 9 },
							{ no: 7, name: "oneof_index", kind: "scalar", T: 5 },
							{ no: 8, name: "packed", kind: "scalar", T: 8 },
							{ no: 9, name: "options", kind: "message", T: c, repeated: !0 },
							{ no: 10, name: "json_name", kind: "scalar", T: 9 },
							{ no: 11, name: "default_value", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(g, p) {
						return new m().fromBinary(g, p);
					}
					static fromJson(g, p) {
						return new m().fromJson(g, p);
					}
					static fromJsonString(g, p) {
						return new m().fromJsonString(g, p);
					}
					static equals(g, p) {
						return t.proto3.util.equals(m, g, p);
					}
				}
				e.Field = m;
				var r;
				(function (n) {
					(n[(n.TYPE_UNKNOWN = 0)] = "TYPE_UNKNOWN"),
						(n[(n.TYPE_DOUBLE = 1)] = "TYPE_DOUBLE"),
						(n[(n.TYPE_FLOAT = 2)] = "TYPE_FLOAT"),
						(n[(n.TYPE_INT64 = 3)] = "TYPE_INT64"),
						(n[(n.TYPE_UINT64 = 4)] = "TYPE_UINT64"),
						(n[(n.TYPE_INT32 = 5)] = "TYPE_INT32"),
						(n[(n.TYPE_FIXED64 = 6)] = "TYPE_FIXED64"),
						(n[(n.TYPE_FIXED32 = 7)] = "TYPE_FIXED32"),
						(n[(n.TYPE_BOOL = 8)] = "TYPE_BOOL"),
						(n[(n.TYPE_STRING = 9)] = "TYPE_STRING"),
						(n[(n.TYPE_GROUP = 10)] = "TYPE_GROUP"),
						(n[(n.TYPE_MESSAGE = 11)] = "TYPE_MESSAGE"),
						(n[(n.TYPE_BYTES = 12)] = "TYPE_BYTES"),
						(n[(n.TYPE_UINT32 = 13)] = "TYPE_UINT32"),
						(n[(n.TYPE_ENUM = 14)] = "TYPE_ENUM"),
						(n[(n.TYPE_SFIXED32 = 15)] = "TYPE_SFIXED32"),
						(n[(n.TYPE_SFIXED64 = 16)] = "TYPE_SFIXED64"),
						(n[(n.TYPE_SINT32 = 17)] = "TYPE_SINT32"),
						(n[(n.TYPE_SINT64 = 18)] = "TYPE_SINT64");
				})(r || (e.Field_Kind = r = {})),
					t.proto3.util.setEnumType(r, "google.protobuf.Field.Kind", [
						{ no: 0, name: "TYPE_UNKNOWN" },
						{ no: 1, name: "TYPE_DOUBLE" },
						{ no: 2, name: "TYPE_FLOAT" },
						{ no: 3, name: "TYPE_INT64" },
						{ no: 4, name: "TYPE_UINT64" },
						{ no: 5, name: "TYPE_INT32" },
						{ no: 6, name: "TYPE_FIXED64" },
						{ no: 7, name: "TYPE_FIXED32" },
						{ no: 8, name: "TYPE_BOOL" },
						{ no: 9, name: "TYPE_STRING" },
						{ no: 10, name: "TYPE_GROUP" },
						{ no: 11, name: "TYPE_MESSAGE" },
						{ no: 12, name: "TYPE_BYTES" },
						{ no: 13, name: "TYPE_UINT32" },
						{ no: 14, name: "TYPE_ENUM" },
						{ no: 15, name: "TYPE_SFIXED32" },
						{ no: 16, name: "TYPE_SFIXED64" },
						{ no: 17, name: "TYPE_SINT32" },
						{ no: 18, name: "TYPE_SINT64" },
					]);
				var u;
				(function (n) {
					(n[(n.UNKNOWN = 0)] = "UNKNOWN"),
						(n[(n.OPTIONAL = 1)] = "OPTIONAL"),
						(n[(n.REQUIRED = 2)] = "REQUIRED"),
						(n[(n.REPEATED = 3)] = "REPEATED");
				})(u || (e.Field_Cardinality = u = {})),
					t.proto3.util.setEnumType(u, "google.protobuf.Field.Cardinality", [
						{ no: 0, name: "CARDINALITY_UNKNOWN" },
						{ no: 1, name: "CARDINALITY_OPTIONAL" },
						{ no: 2, name: "CARDINALITY_REQUIRED" },
						{ no: 3, name: "CARDINALITY_REPEATED" },
					]);
				class a extends i.Message {
					constructor(g) {
						super(),
							(this.name = ""),
							(this.enumvalue = []),
							(this.options = []),
							(this.syntax = C.PROTO2),
							(this.edition = ""),
							t.proto3.util.initPartial(g, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "google.protobuf.Enum";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "enumvalue", kind: "message", T: h, repeated: !0 },
							{ no: 3, name: "options", kind: "message", T: c, repeated: !0 },
							{
								no: 4,
								name: "source_context",
								kind: "message",
								T: w.SourceContext,
							},
							{
								no: 5,
								name: "syntax",
								kind: "enum",
								T: t.proto3.getEnumType(C),
							},
							{ no: 6, name: "edition", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(g, p) {
						return new a().fromBinary(g, p);
					}
					static fromJson(g, p) {
						return new a().fromJson(g, p);
					}
					static fromJsonString(g, p) {
						return new a().fromJsonString(g, p);
					}
					static equals(g, p) {
						return t.proto3.util.equals(a, g, p);
					}
				}
				e.Enum = a;
				class h extends i.Message {
					constructor(g) {
						super(),
							(this.name = ""),
							(this.number = 0),
							(this.options = []),
							t.proto3.util.initPartial(g, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "google.protobuf.EnumValue";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "number", kind: "scalar", T: 5 },
							{ no: 3, name: "options", kind: "message", T: c, repeated: !0 },
						]);
					}
					static fromBinary(g, p) {
						return new h().fromBinary(g, p);
					}
					static fromJson(g, p) {
						return new h().fromJson(g, p);
					}
					static fromJsonString(g, p) {
						return new h().fromJsonString(g, p);
					}
					static equals(g, p) {
						return t.proto3.util.equals(h, g, p);
					}
				}
				e.EnumValue = h;
				class c extends i.Message {
					constructor(g) {
						super(), (this.name = ""), t.proto3.util.initPartial(g, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "google.protobuf.Option";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "name", kind: "scalar", T: 9 },
							{ no: 2, name: "value", kind: "message", T: E.Any },
						]);
					}
					static fromBinary(g, p) {
						return new c().fromBinary(g, p);
					}
					static fromJson(g, p) {
						return new c().fromJson(g, p);
					}
					static fromJsonString(g, p) {
						return new c().fromJsonString(g, p);
					}
					static equals(g, p) {
						return t.proto3.util.equals(c, g, p);
					}
				}
				e.Option = c;
			},
		)
