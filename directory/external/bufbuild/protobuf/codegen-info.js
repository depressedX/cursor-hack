import '../../../require.js';
import '../../../exports.js';
import './private/names.js';
import './private/field-wrapper.js';
import './private/scalars.js';
import './private/reify-wkt.js';
define(
			de[2033],
			he([1, 0, 723, 1086, 526, 2032]),
			function (ce /*require*/,
 e /*exports*/,
 t /*names*/,
 i /*field-wrapper*/,
 w /*scalars*/,
 E /*reify-wkt*/) {
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
		)
