define(de[526], he([1, 0, 525, 429]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.scalarEquals = w),
				(e.scalarZeroValue = E),
				(e.isScalarZeroValue = C);
			function w(d, m, r) {
				if (m === r) return !0;
				if (d == i.ScalarType.BYTES) {
					if (
						!(m instanceof Uint8Array) ||
						!(r instanceof Uint8Array) ||
						m.length !== r.length
					)
						return !1;
					for (let u = 0; u < m.length; u++) if (m[u] !== r[u]) return !1;
					return !0;
				}
				switch (d) {
					case i.ScalarType.UINT64:
					case i.ScalarType.FIXED64:
					case i.ScalarType.INT64:
					case i.ScalarType.SFIXED64:
					case i.ScalarType.SINT64:
						return m == r;
				}
				return !1;
			}
			function E(d, m) {
				switch (d) {
					case i.ScalarType.BOOL:
						return !1;
					case i.ScalarType.UINT64:
					case i.ScalarType.FIXED64:
					case i.ScalarType.INT64:
					case i.ScalarType.SFIXED64:
					case i.ScalarType.SINT64:
						return m == 0 ? t.protoInt64.zero : "0";
					case i.ScalarType.DOUBLE:
					case i.ScalarType.FLOAT:
						return 0;
					case i.ScalarType.BYTES:
						return new Uint8Array(0);
					case i.ScalarType.STRING:
						return "";
					default:
						return 0;
				}
			}
			function C(d, m) {
				switch (d) {
					case i.ScalarType.BOOL:
						return m === !1;
					case i.ScalarType.STRING:
						return m === "";
					case i.ScalarType.BYTES:
						return m instanceof Uint8Array && !m.byteLength;
					default:
						return m == 0;
				}
			}
		}),
		define(
			de[2033],
			he([1, 0, 723, 1086, 526, 2032]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.codegenInfo = void 0);
				const C = "@bufbuild/protobuf";
				e.codegenInfo = {
					packageName: "@bufbuild/protobuf",
					localName: t.localName,
					reifyWkt: E.reifyWkt,
					getUnwrappedFieldType: i.getUnwrappedFieldType,
					scalarDefaultValue: w.scalarZeroValue,
					scalarZeroValue: w.scalarZeroValue,
					safeIdentifier: t.safeIdentifier,
					safeObjectProperty: t.safeObjectProperty,
					symbols: {
						proto2: {
							typeOnly: !1,
							privateImportPath: "./proto2.js",
							publicImportPath: C,
						},
						proto3: {
							typeOnly: !1,
							privateImportPath: "./proto3.js",
							publicImportPath: C,
						},
						Message: {
							typeOnly: !1,
							privateImportPath: "./message.js",
							publicImportPath: C,
						},
						PartialMessage: {
							typeOnly: !0,
							privateImportPath: "./message.js",
							publicImportPath: C,
						},
						PlainMessage: {
							typeOnly: !0,
							privateImportPath: "./message.js",
							publicImportPath: C,
						},
						FieldList: {
							typeOnly: !0,
							privateImportPath: "./field-list.js",
							publicImportPath: C,
						},
						MessageType: {
							typeOnly: !0,
							privateImportPath: "./message-type.js",
							publicImportPath: C,
						},
						Extension: {
							typeOnly: !0,
							privateImportPath: "./extension.js",
							publicImportPath: C,
						},
						BinaryReadOptions: {
							typeOnly: !0,
							privateImportPath: "./binary-format.js",
							publicImportPath: C,
						},
						BinaryWriteOptions: {
							typeOnly: !0,
							privateImportPath: "./binary-format.js",
							publicImportPath: C,
						},
						JsonReadOptions: {
							typeOnly: !0,
							privateImportPath: "./json-format.js",
							publicImportPath: C,
						},
						JsonWriteOptions: {
							typeOnly: !0,
							privateImportPath: "./json-format.js",
							publicImportPath: C,
						},
						JsonValue: {
							typeOnly: !0,
							privateImportPath: "./json-format.js",
							publicImportPath: C,
						},
						JsonObject: {
							typeOnly: !0,
							privateImportPath: "./json-format.js",
							publicImportPath: C,
						},
						protoDouble: {
							typeOnly: !1,
							privateImportPath: "./proto-double.js",
							publicImportPath: C,
						},
						protoInt64: {
							typeOnly: !1,
							privateImportPath: "./proto-int64.js",
							publicImportPath: C,
						},
						ScalarType: {
							typeOnly: !1,
							privateImportPath: "./scalar.js",
							publicImportPath: C,
						},
						LongType: {
							typeOnly: !1,
							privateImportPath: "./scalar.js",
							publicImportPath: C,
						},
						MethodKind: {
							typeOnly: !1,
							privateImportPath: "./service-type.js",
							publicImportPath: C,
						},
						MethodIdempotency: {
							typeOnly: !1,
							privateImportPath: "./service-type.js",
							publicImportPath: C,
						},
						IMessageTypeRegistry: {
							typeOnly: !0,
							privateImportPath: "./type-registry.js",
							publicImportPath: C,
						},
					},
					wktSourceFiles: [
						"google/protobuf/compiler/plugin.proto",
						"google/protobuf/any.proto",
						"google/protobuf/api.proto",
						"google/protobuf/descriptor.proto",
						"google/protobuf/duration.proto",
						"google/protobuf/empty.proto",
						"google/protobuf/field_mask.proto",
						"google/protobuf/source_context.proto",
						"google/protobuf/struct.proto",
						"google/protobuf/timestamp.proto",
						"google/protobuf/type.proto",
						"google/protobuf/wrappers.proto",
					],
				};
			},
		),
		