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
		