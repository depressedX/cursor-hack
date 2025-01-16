define(de[1405], he([1, 0, 339, 525, 406]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Timestamp = void 0);
			class E extends t.Message {
				constructor(d) {
					super(),
						(this.seconds = i.protoInt64.zero),
						(this.nanos = 0),
						w.proto3.util.initPartial(d, this);
				}
				fromJson(d, m) {
					if (typeof d != "string")
						throw new Error(
							`cannot decode google.protobuf.Timestamp from JSON: ${w.proto3.json.debug(d)}`,
						);
					const r = d.match(
						/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/,
					);
					if (!r)
						throw new Error(
							"cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
						);
					const u = Date.parse(
						r[1] +
							"-" +
							r[2] +
							"-" +
							r[3] +
							"T" +
							r[4] +
							":" +
							r[5] +
							":" +
							r[6] +
							(r[8] ? r[8] : "Z"),
					);
					if (Number.isNaN(u))
						throw new Error(
							"cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
						);
					if (
						u < Date.parse("0001-01-01T00:00:00Z") ||
						u > Date.parse("9999-12-31T23:59:59Z")
					)
						throw new Error(
							"cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
						);
					return (
						(this.seconds = i.protoInt64.parse(u / 1e3)),
						(this.nanos = 0),
						r[7] &&
							(this.nanos =
								parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9),
						this
					);
				}
				toJson(d) {
					const m = Number(this.seconds) * 1e3;
					if (
						m < Date.parse("0001-01-01T00:00:00Z") ||
						m > Date.parse("9999-12-31T23:59:59Z")
					)
						throw new Error(
							"cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
						);
					if (this.nanos < 0)
						throw new Error(
							"cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative",
						);
					let r = "Z";
					if (this.nanos > 0) {
						const u = (this.nanos + 1e9).toString().substring(1);
						u.substring(3) === "000000"
							? (r = "." + u.substring(0, 3) + "Z")
							: u.substring(6) === "000"
								? (r = "." + u.substring(0, 6) + "Z")
								: (r = "." + u + "Z");
					}
					return new Date(m).toISOString().replace(".000Z", r);
				}
				toDate() {
					return new Date(
						Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6),
					);
				}
				static {
					this.runtime = w.proto3;
				}
				static {
					this.typeName = "google.protobuf.Timestamp";
				}
				static {
					this.fields = w.proto3.util.newFieldList(() => [
						{ no: 1, name: "seconds", kind: "scalar", T: 3 },
						{ no: 2, name: "nanos", kind: "scalar", T: 5 },
					]);
				}
				static now() {
					return E.fromDate(new Date());
				}
				static fromDate(d) {
					const m = d.getTime();
					return new E({
						seconds: i.protoInt64.parse(Math.floor(m / 1e3)),
						nanos: (m % 1e3) * 1e6,
					});
				}
				static fromBinary(d, m) {
					return new E().fromBinary(d, m);
				}
				static fromJson(d, m) {
					return new E().fromJson(d, m);
				}
				static fromJsonString(d, m) {
					return new E().fromJsonString(d, m);
				}
				static equals(d, m) {
					return w.proto3.util.equals(E, d, m);
				}
			}
			e.Timestamp = E;
		}),
		define(
			de[1406],
			he([1, 0, 406, 339, 1088, 875]),
			function (ce, e, t, i, w, E) {
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
		),
		define(
			de[2040],
			he([1, 0, 339, 1406, 1088, 406]),
			function (ce, e, t, i, w, E) {
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
		define(
			de[1407],
			he([1, 0, 339, 406, 429, 525]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.BytesValue =
						e.StringValue =
						e.BoolValue =
						e.UInt32Value =
						e.Int32Value =
						e.UInt64Value =
						e.Int64Value =
						e.FloatValue =
						e.DoubleValue =
							void 0);
				class C extends t.Message {
					constructor(p) {
						super(), (this.value = 0), i.proto3.util.initPartial(p, this);
					}
					toJson(p) {
						return i.proto3.json.writeScalar(
							w.ScalarType.DOUBLE,
							this.value,
							!0,
						);
					}
					fromJson(p, o) {
						try {
							this.value = i.proto3.json.readScalar(w.ScalarType.DOUBLE, p);
						} catch (f) {
							let b =
								'cannot decode message google.protobuf.DoubleValue from JSON"';
							throw (
								(f instanceof Error &&
									f.message.length > 0 &&
									(b += `: ${f.message}`),
								new Error(b))
							);
						}
						return this;
					}
					static {
						this.runtime = i.proto3;
					}
					static {
						this.typeName = "google.protobuf.DoubleValue";
					}
					static {
						this.fields = i.proto3.util.newFieldList(() => [
							{ no: 1, name: "value", kind: "scalar", T: 1 },
						]);
					}
					static {
						this.fieldWrapper = {
							wrapField(p) {
								return new C({ value: p });
							},
							unwrapField(p) {
								return p.value;
							},
						};
					}
					static fromBinary(p, o) {
						return new C().fromBinary(p, o);
					}
					static fromJson(p, o) {
						return new C().fromJson(p, o);
					}
					static fromJsonString(p, o) {
						return new C().fromJsonString(p, o);
					}
					static equals(p, o) {
						return i.proto3.util.equals(C, p, o);
					}
				}
				e.DoubleValue = C;
				class d extends t.Message {
					constructor(p) {
						super(), (this.value = 0), i.proto3.util.initPartial(p, this);
					}
					toJson(p) {
						return i.proto3.json.writeScalar(
							w.ScalarType.FLOAT,
							this.value,
							!0,
						);
					}
					fromJson(p, o) {
						try {
							this.value = i.proto3.json.readScalar(w.ScalarType.FLOAT, p);
						} catch (f) {
							let b =
								'cannot decode message google.protobuf.FloatValue from JSON"';
							throw (
								(f instanceof Error &&
									f.message.length > 0 &&
									(b += `: ${f.message}`),
								new Error(b))
							);
						}
						return this;
					}
					static {
						this.runtime = i.proto3;
					}
					static {
						this.typeName = "google.protobuf.FloatValue";
					}
					static {
						this.fields = i.proto3.util.newFieldList(() => [
							{ no: 1, name: "value", kind: "scalar", T: 2 },
						]);
					}
					static {
						this.fieldWrapper = {
							wrapField(p) {
								return new d({ value: p });
							},
							unwrapField(p) {
								return p.value;
							},
						};
					}
					static fromBinary(p, o) {
						return new d().fromBinary(p, o);
					}
					static fromJson(p, o) {
						return new d().fromJson(p, o);
					}
					static fromJsonString(p, o) {
						return new d().fromJsonString(p, o);
					}
					static equals(p, o) {
						return i.proto3.util.equals(d, p, o);
					}
				}
				e.FloatValue = d;
				class m extends t.Message {
					constructor(p) {
						super(),
							(this.value = E.protoInt64.zero),
							i.proto3.util.initPartial(p, this);
					}
					toJson(p) {
						return i.proto3.json.writeScalar(
							w.ScalarType.INT64,
							this.value,
							!0,
						);
					}
					fromJson(p, o) {
						try {
							this.value = i.proto3.json.readScalar(w.ScalarType.INT64, p);
						} catch (f) {
							let b =
								'cannot decode message google.protobuf.Int64Value from JSON"';
							throw (
								(f instanceof Error &&
									f.message.length > 0 &&
									(b += `: ${f.message}`),
								new Error(b))
							);
						}
						return this;
					}
					static {
						this.runtime = i.proto3;
					}
					static {
						this.typeName = "google.protobuf.Int64Value";
					}
					static {
						this.fields = i.proto3.util.newFieldList(() => [
							{ no: 1, name: "value", kind: "scalar", T: 3 },
						]);
					}
					static {
						this.fieldWrapper = {
							wrapField(p) {
								return new m({ value: p });
							},
							unwrapField(p) {
								return p.value;
							},
						};
					}
					static fromBinary(p, o) {
						return new m().fromBinary(p, o);
					}
					static fromJson(p, o) {
						return new m().fromJson(p, o);
					}
					static fromJsonString(p, o) {
						return new m().fromJsonString(p, o);
					}
					static equals(p, o) {
						return i.proto3.util.equals(m, p, o);
					}
				}
				e.Int64Value = m;
				class r extends t.Message {
					constructor(p) {
						super(),
							(this.value = E.protoInt64.zero),
							i.proto3.util.initPartial(p, this);
					}
					toJson(p) {
						return i.proto3.json.writeScalar(
							w.ScalarType.UINT64,
							this.value,
							!0,
						);
					}
					fromJson(p, o) {
						try {
							this.value = i.proto3.json.readScalar(w.ScalarType.UINT64, p);
						} catch (f) {
							let b =
								'cannot decode message google.protobuf.UInt64Value from JSON"';
							throw (
								(f instanceof Error &&
									f.message.length > 0 &&
									(b += `: ${f.message}`),
								new Error(b))
							);
						}
						return this;
					}
					static {
						this.runtime = i.proto3;
					}
					static {
						this.typeName = "google.protobuf.UInt64Value";
					}
					static {
						this.fields = i.proto3.util.newFieldList(() => [
							{ no: 1, name: "value", kind: "scalar", T: 4 },
						]);
					}
					static {
						this.fieldWrapper = {
							wrapField(p) {
								return new r({ value: p });
							},
							unwrapField(p) {
								return p.value;
							},
						};
					}
					static fromBinary(p, o) {
						return new r().fromBinary(p, o);
					}
					static fromJson(p, o) {
						return new r().fromJson(p, o);
					}
					static fromJsonString(p, o) {
						return new r().fromJsonString(p, o);
					}
					static equals(p, o) {
						return i.proto3.util.equals(r, p, o);
					}
				}
				e.UInt64Value = r;
				class u extends t.Message {
					constructor(p) {
						super(), (this.value = 0), i.proto3.util.initPartial(p, this);
					}
					toJson(p) {
						return i.proto3.json.writeScalar(
							w.ScalarType.INT32,
							this.value,
							!0,
						);
					}
					fromJson(p, o) {
						try {
							this.value = i.proto3.json.readScalar(w.ScalarType.INT32, p);
						} catch (f) {
							let b =
								'cannot decode message google.protobuf.Int32Value from JSON"';
							throw (
								(f instanceof Error &&
									f.message.length > 0 &&
									(b += `: ${f.message}`),
								new Error(b))
							);
						}
						return this;
					}
					static {
						this.runtime = i.proto3;
					}
					static {
						this.typeName = "google.protobuf.Int32Value";
					}
					static {
						this.fields = i.proto3.util.newFieldList(() => [
							{ no: 1, name: "value", kind: "scalar", T: 5 },
						]);
					}
					static {
						this.fieldWrapper = {
							wrapField(p) {
								return new u({ value: p });
							},
							unwrapField(p) {
								return p.value;
							},
						};
					}
					static fromBinary(p, o) {
						return new u().fromBinary(p, o);
					}
					static fromJson(p, o) {
						return new u().fromJson(p, o);
					}
					static fromJsonString(p, o) {
						return new u().fromJsonString(p, o);
					}
					static equals(p, o) {
						return i.proto3.util.equals(u, p, o);
					}
				}
				e.Int32Value = u;
				class a extends t.Message {
					constructor(p) {
						super(), (this.value = 0), i.proto3.util.initPartial(p, this);
					}
					toJson(p) {
						return i.proto3.json.writeScalar(
							w.ScalarType.UINT32,
							this.value,
							!0,
						);
					}
					fromJson(p, o) {
						try {
							this.value = i.proto3.json.readScalar(w.ScalarType.UINT32, p);
						} catch (f) {
							let b =
								'cannot decode message google.protobuf.UInt32Value from JSON"';
							throw (
								(f instanceof Error &&
									f.message.length > 0 &&
									(b += `: ${f.message}`),
								new Error(b))
							);
						}
						return this;
					}
					static {
						this.runtime = i.proto3;
					}
					static {
						this.typeName = "google.protobuf.UInt32Value";
					}
					static {
						this.fields = i.proto3.util.newFieldList(() => [
							{ no: 1, name: "value", kind: "scalar", T: 13 },
						]);
					}
					static {
						this.fieldWrapper = {
							wrapField(p) {
								return new a({ value: p });
							},
							unwrapField(p) {
								return p.value;
							},
						};
					}
					static fromBinary(p, o) {
						return new a().fromBinary(p, o);
					}
					static fromJson(p, o) {
						return new a().fromJson(p, o);
					}
					static fromJsonString(p, o) {
						return new a().fromJsonString(p, o);
					}
					static equals(p, o) {
						return i.proto3.util.equals(a, p, o);
					}
				}
				e.UInt32Value = a;
				class h extends t.Message {
					constructor(p) {
						super(), (this.value = !1), i.proto3.util.initPartial(p, this);
					}
					toJson(p) {
						return i.proto3.json.writeScalar(w.ScalarType.BOOL, this.value, !0);
					}
					fromJson(p, o) {
						try {
							this.value = i.proto3.json.readScalar(w.ScalarType.BOOL, p);
						} catch (f) {
							let b =
								'cannot decode message google.protobuf.BoolValue from JSON"';
							throw (
								(f instanceof Error &&
									f.message.length > 0 &&
									(b += `: ${f.message}`),
								new Error(b))
							);
						}
						return this;
					}
					static {
						this.runtime = i.proto3;
					}
					static {
						this.typeName = "google.protobuf.BoolValue";
					}
					static {
						this.fields = i.proto3.util.newFieldList(() => [
							{ no: 1, name: "value", kind: "scalar", T: 8 },
						]);
					}
					static {
						this.fieldWrapper = {
							wrapField(p) {
								return new h({ value: p });
							},
							unwrapField(p) {
								return p.value;
							},
						};
					}
					static fromBinary(p, o) {
						return new h().fromBinary(p, o);
					}
					static fromJson(p, o) {
						return new h().fromJson(p, o);
					}
					static fromJsonString(p, o) {
						return new h().fromJsonString(p, o);
					}
					static equals(p, o) {
						return i.proto3.util.equals(h, p, o);
					}
				}
				e.BoolValue = h;
				class c extends t.Message {
					constructor(p) {
						super(), (this.value = ""), i.proto3.util.initPartial(p, this);
					}
					toJson(p) {
						return i.proto3.json.writeScalar(
							w.ScalarType.STRING,
							this.value,
							!0,
						);
					}
					fromJson(p, o) {
						try {
							this.value = i.proto3.json.readScalar(w.ScalarType.STRING, p);
						} catch (f) {
							let b =
								'cannot decode message google.protobuf.StringValue from JSON"';
							throw (
								(f instanceof Error &&
									f.message.length > 0 &&
									(b += `: ${f.message}`),
								new Error(b))
							);
						}
						return this;
					}
					static {
						this.runtime = i.proto3;
					}
					static {
						this.typeName = "google.protobuf.StringValue";
					}
					static {
						this.fields = i.proto3.util.newFieldList(() => [
							{ no: 1, name: "value", kind: "scalar", T: 9 },
						]);
					}
					static {
						this.fieldWrapper = {
							wrapField(p) {
								return new c({ value: p });
							},
							unwrapField(p) {
								return p.value;
							},
						};
					}
					static fromBinary(p, o) {
						return new c().fromBinary(p, o);
					}
					static fromJson(p, o) {
						return new c().fromJson(p, o);
					}
					static fromJsonString(p, o) {
						return new c().fromJsonString(p, o);
					}
					static equals(p, o) {
						return i.proto3.util.equals(c, p, o);
					}
				}
				e.StringValue = c;
				class n extends t.Message {
					constructor(p) {
						super(),
							(this.value = new Uint8Array(0)),
							i.proto3.util.initPartial(p, this);
					}
					toJson(p) {
						return i.proto3.json.writeScalar(
							w.ScalarType.BYTES,
							this.value,
							!0,
						);
					}
					fromJson(p, o) {
						try {
							this.value = i.proto3.json.readScalar(w.ScalarType.BYTES, p);
						} catch (f) {
							let b =
								'cannot decode message google.protobuf.BytesValue from JSON"';
							throw (
								(f instanceof Error &&
									f.message.length > 0 &&
									(b += `: ${f.message}`),
								new Error(b))
							);
						}
						return this;
					}
					static {
						this.runtime = i.proto3;
					}
					static {
						this.typeName = "google.protobuf.BytesValue";
					}
					static {
						this.fields = i.proto3.util.newFieldList(() => [
							{ no: 1, name: "value", kind: "scalar", T: 12 },
						]);
					}
					static {
						this.fieldWrapper = {
							wrapField(p) {
								return new n({ value: p });
							},
							unwrapField(p) {
								return p.value;
							},
						};
					}
					static fromBinary(p, o) {
						return new n().fromBinary(p, o);
					}
					static fromJson(p, o) {
						return new n().fromJson(p, o);
					}
					static fromJsonString(p, o) {
						return new n().fromJsonString(p, o);
					}
					static equals(p, o) {
						return i.proto3.util.equals(n, p, o);
					}
				}
				e.BytesValue = n;
			},
		),
		