import '../../../../require.js';
import '../../../../exports.js';
import '../scalar.js';
import '../is-message.js';
define(de[1086], he([1, 0, 429, 524]), function (ce /*require*/,
 e /*exports*/,
 t /*scalar*/,
 i /*is-message*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.wrapField = w),
				(e.getUnwrappedFieldType = E);
			function w(d, m) {
				return (0, i.isMessage)(m) || !d.fieldWrapper
					? m
					: d.fieldWrapper.wrapField(m);
			}
			function E(d) {
				if (d.fieldKind === "message" && !d.repeated && d.oneof == null)
					return C[d.message.typeName];
			}
			const C = {
				"google.protobuf.DoubleValue": t.ScalarType.DOUBLE,
				"google.protobuf.FloatValue": t.ScalarType.FLOAT,
				"google.protobuf.Int64Value": t.ScalarType.INT64,
				"google.protobuf.UInt64Value": t.ScalarType.UINT64,
				"google.protobuf.Int32Value": t.ScalarType.INT32,
				"google.protobuf.UInt32Value": t.ScalarType.UINT32,
				"google.protobuf.BoolValue": t.ScalarType.BOOL,
				"google.protobuf.StringValue": t.ScalarType.STRING,
				"google.protobuf.BytesValue": t.ScalarType.BYTES,
			};
		})
