import '../../../../require.js';
import '../../../../exports.js';
import '../scalar.js';
define(de[2032], he([1, 0, 429]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.reifyWkt = i);
			function i(w) {
				switch (w.typeName) {
					case "google.protobuf.Any": {
						const E = w.fields.find(
								(d) =>
									d.number == 1 &&
									d.fieldKind == "scalar" &&
									d.scalar === t.ScalarType.STRING,
							),
							C = w.fields.find(
								(d) =>
									d.number == 2 &&
									d.fieldKind == "scalar" &&
									d.scalar === t.ScalarType.BYTES,
							);
						if (E && C) return { typeName: w.typeName, typeUrl: E, value: C };
						break;
					}
					case "google.protobuf.Timestamp": {
						const E = w.fields.find(
								(d) =>
									d.number == 1 &&
									d.fieldKind == "scalar" &&
									d.scalar === t.ScalarType.INT64,
							),
							C = w.fields.find(
								(d) =>
									d.number == 2 &&
									d.fieldKind == "scalar" &&
									d.scalar === t.ScalarType.INT32,
							);
						if (E && C) return { typeName: w.typeName, seconds: E, nanos: C };
						break;
					}
					case "google.protobuf.Duration": {
						const E = w.fields.find(
								(d) =>
									d.number == 1 &&
									d.fieldKind == "scalar" &&
									d.scalar === t.ScalarType.INT64,
							),
							C = w.fields.find(
								(d) =>
									d.number == 2 &&
									d.fieldKind == "scalar" &&
									d.scalar === t.ScalarType.INT32,
							);
						if (E && C) return { typeName: w.typeName, seconds: E, nanos: C };
						break;
					}
					case "google.protobuf.Struct": {
						const E = w.fields.find((C) => C.number == 1 && !C.repeated);
						if (
							E?.fieldKind !== "map" ||
							E.mapValue.kind !== "message" ||
							E.mapValue.message.typeName !== "google.protobuf.Value"
						)
							break;
						return { typeName: w.typeName, fields: E };
					}
					case "google.protobuf.Value": {
						const E = w.oneofs.find((h) => h.name === "kind"),
							C = w.fields.find((h) => h.number == 1 && h.oneof === E);
						if (
							C?.fieldKind !== "enum" ||
							C.enum.typeName !== "google.protobuf.NullValue"
						)
							return;
						const d = w.fields.find(
								(h) =>
									h.number == 2 &&
									h.fieldKind == "scalar" &&
									h.scalar === t.ScalarType.DOUBLE &&
									h.oneof === E,
							),
							m = w.fields.find(
								(h) =>
									h.number == 3 &&
									h.fieldKind == "scalar" &&
									h.scalar === t.ScalarType.STRING &&
									h.oneof === E,
							),
							r = w.fields.find(
								(h) =>
									h.number == 4 &&
									h.fieldKind == "scalar" &&
									h.scalar === t.ScalarType.BOOL &&
									h.oneof === E,
							),
							u = w.fields.find((h) => h.number == 5 && h.oneof === E);
						if (
							u?.fieldKind !== "message" ||
							u.message.typeName !== "google.protobuf.Struct"
						)
							return;
						const a = w.fields.find((h) => h.number == 6 && h.oneof === E);
						if (
							a?.fieldKind !== "message" ||
							a.message.typeName !== "google.protobuf.ListValue"
						)
							return;
						if (E && d && m && r)
							return {
								typeName: w.typeName,
								kind: E,
								nullValue: C,
								numberValue: d,
								stringValue: m,
								boolValue: r,
								structValue: u,
								listValue: a,
							};
						break;
					}
					case "google.protobuf.ListValue": {
						const E = w.fields.find((C) => C.number == 1 && C.repeated);
						if (
							E?.fieldKind != "message" ||
							E.message.typeName !== "google.protobuf.Value"
						)
							break;
						return { typeName: w.typeName, values: E };
					}
					case "google.protobuf.FieldMask": {
						const E = w.fields.find(
							(C) =>
								C.number == 1 &&
								C.fieldKind == "scalar" &&
								C.scalar === t.ScalarType.STRING &&
								C.repeated,
						);
						if (E) return { typeName: w.typeName, paths: E };
						break;
					}
					case "google.protobuf.DoubleValue":
					case "google.protobuf.FloatValue":
					case "google.protobuf.Int64Value":
					case "google.protobuf.UInt64Value":
					case "google.protobuf.Int32Value":
					case "google.protobuf.UInt32Value":
					case "google.protobuf.BoolValue":
					case "google.protobuf.StringValue":
					case "google.protobuf.BytesValue": {
						const E = w.fields.find((C) => C.number == 1 && C.name == "value");
						if (!E || E.fieldKind !== "scalar") break;
						return { typeName: w.typeName, value: E };
					}
				}
			}
		}),
		