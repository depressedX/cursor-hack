import '../../../../../require.js';
import '../../../../../exports.js';
import '../../proto3.js';
import '../../message.js';
define(de[1404], he([1, 0, 406, 339]), function (ce /*require*/,
 e /*exports*/,
 t /*proto3*/,
 i /*message*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ListValue = e.Value = e.Struct = e.NullValue = void 0);
			var w;
			(function (m) {
				m[(m.NULL_VALUE = 0)] = "NULL_VALUE";
			})(w || (e.NullValue = w = {})),
				t.proto3.util.setEnumType(w, "google.protobuf.NullValue", [
					{ no: 0, name: "NULL_VALUE" },
				]);
			class E extends i.Message {
				constructor(r) {
					super(), (this.fields = {}), t.proto3.util.initPartial(r, this);
				}
				toJson(r) {
					const u = {};
					for (const [a, h] of Object.entries(this.fields)) u[a] = h.toJson(r);
					return u;
				}
				fromJson(r, u) {
					if (typeof r != "object" || r == null || Array.isArray(r))
						throw new Error(
							"cannot decode google.protobuf.Struct from JSON " +
								t.proto3.json.debug(r),
						);
					for (const [a, h] of Object.entries(r))
						this.fields[a] = C.fromJson(h);
					return this;
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "google.protobuf.Struct";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "fields",
							kind: "map",
							K: 9,
							V: { kind: "message", T: C },
						},
					]);
				}
				static fromBinary(r, u) {
					return new E().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new E().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new E().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(E, r, u);
				}
			}
			e.Struct = E;
			class C extends i.Message {
				constructor(r) {
					super(),
						(this.kind = { case: void 0 }),
						t.proto3.util.initPartial(r, this);
				}
				toJson(r) {
					switch (this.kind.case) {
						case "nullValue":
							return null;
						case "numberValue":
							if (!Number.isFinite(this.kind.value))
								throw new Error(
									"google.protobuf.Value cannot be NaN or Infinity",
								);
							return this.kind.value;
						case "boolValue":
							return this.kind.value;
						case "stringValue":
							return this.kind.value;
						case "structValue":
						case "listValue":
							return this.kind.value.toJson({ ...r, emitDefaultValues: !0 });
					}
					throw new Error("google.protobuf.Value must have a value");
				}
				fromJson(r, u) {
					switch (typeof r) {
						case "number":
							this.kind = { case: "numberValue", value: r };
							break;
						case "string":
							this.kind = { case: "stringValue", value: r };
							break;
						case "boolean":
							this.kind = { case: "boolValue", value: r };
							break;
						case "object":
							r === null
								? (this.kind = { case: "nullValue", value: w.NULL_VALUE })
								: Array.isArray(r)
									? (this.kind = { case: "listValue", value: d.fromJson(r) })
									: (this.kind = { case: "structValue", value: E.fromJson(r) });
							break;
						default:
							throw new Error(
								"cannot decode google.protobuf.Value from JSON " +
									t.proto3.json.debug(r),
							);
					}
					return this;
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "google.protobuf.Value";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "null_value",
							kind: "enum",
							T: t.proto3.getEnumType(w),
							oneof: "kind",
						},
						{
							no: 2,
							name: "number_value",
							kind: "scalar",
							T: 1,
							oneof: "kind",
						},
						{
							no: 3,
							name: "string_value",
							kind: "scalar",
							T: 9,
							oneof: "kind",
						},
						{ no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" },
						{
							no: 5,
							name: "struct_value",
							kind: "message",
							T: E,
							oneof: "kind",
						},
						{ no: 6, name: "list_value", kind: "message", T: d, oneof: "kind" },
					]);
				}
				static fromBinary(r, u) {
					return new C().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new C().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new C().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(C, r, u);
				}
			}
			e.Value = C;
			class d extends i.Message {
				constructor(r) {
					super(), (this.values = []), t.proto3.util.initPartial(r, this);
				}
				toJson(r) {
					return this.values.map((u) => u.toJson());
				}
				fromJson(r, u) {
					if (!Array.isArray(r))
						throw new Error(
							"cannot decode google.protobuf.ListValue from JSON " +
								t.proto3.json.debug(r),
						);
					for (let a of r) this.values.push(C.fromJson(a));
					return this;
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "google.protobuf.ListValue";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "values", kind: "message", T: C, repeated: !0 },
					]);
				}
				static fromBinary(r, u) {
					return new d().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new d().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new d().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(d, r, u);
				}
			}
			e.ListValue = d;
		})
