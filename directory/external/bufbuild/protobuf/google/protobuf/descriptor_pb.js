define(de[724], he([1, 0, 874, 339]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.GeneratedCodeInfo_Annotation_Semantic =
					e.GeneratedCodeInfo_Annotation =
					e.GeneratedCodeInfo =
					e.SourceCodeInfo_Location =
					e.SourceCodeInfo =
					e.FeatureSetDefaults_FeatureSetEditionDefault =
					e.FeatureSetDefaults =
					e.FeatureSet_JsonFormat =
					e.FeatureSet_MessageEncoding =
					e.FeatureSet_Utf8Validation =
					e.FeatureSet_RepeatedFieldEncoding =
					e.FeatureSet_EnumType =
					e.FeatureSet_FieldPresence =
					e.FeatureSet =
					e.UninterpretedOption_NamePart =
					e.UninterpretedOption =
					e.MethodOptions_IdempotencyLevel =
					e.MethodOptions =
					e.ServiceOptions =
					e.EnumValueOptions =
					e.EnumOptions =
					e.OneofOptions =
					e.FieldOptions_FeatureSupport =
					e.FieldOptions_EditionDefault =
					e.FieldOptions_OptionTargetType =
					e.FieldOptions_OptionRetention =
					e.FieldOptions_JSType =
					e.FieldOptions_CType =
					e.FieldOptions =
					e.MessageOptions =
					e.FileOptions_OptimizeMode =
					e.FileOptions =
					e.MethodDescriptorProto =
					e.ServiceDescriptorProto =
					e.EnumValueDescriptorProto =
					e.EnumDescriptorProto_EnumReservedRange =
					e.EnumDescriptorProto =
					e.OneofDescriptorProto =
					e.FieldDescriptorProto_Label =
					e.FieldDescriptorProto_Type =
					e.FieldDescriptorProto =
					e.ExtensionRangeOptions_Declaration =
					e.ExtensionRangeOptions_VerificationState =
					e.ExtensionRangeOptions =
					e.DescriptorProto_ReservedRange =
					e.DescriptorProto_ExtensionRange =
					e.DescriptorProto =
					e.FileDescriptorProto =
					e.FileDescriptorSet =
					e.Edition =
						void 0);
			var w;
			(function (_) {
				(_[(_.EDITION_UNKNOWN = 0)] = "EDITION_UNKNOWN"),
					(_[(_.EDITION_LEGACY = 900)] = "EDITION_LEGACY"),
					(_[(_.EDITION_PROTO2 = 998)] = "EDITION_PROTO2"),
					(_[(_.EDITION_PROTO3 = 999)] = "EDITION_PROTO3"),
					(_[(_.EDITION_2023 = 1e3)] = "EDITION_2023"),
					(_[(_.EDITION_2024 = 1001)] = "EDITION_2024"),
					(_[(_.EDITION_1_TEST_ONLY = 1)] = "EDITION_1_TEST_ONLY"),
					(_[(_.EDITION_2_TEST_ONLY = 2)] = "EDITION_2_TEST_ONLY"),
					(_[(_.EDITION_99997_TEST_ONLY = 99997)] = "EDITION_99997_TEST_ONLY"),
					(_[(_.EDITION_99998_TEST_ONLY = 99998)] = "EDITION_99998_TEST_ONLY"),
					(_[(_.EDITION_99999_TEST_ONLY = 99999)] = "EDITION_99999_TEST_ONLY"),
					(_[(_.EDITION_MAX = 2147483647)] = "EDITION_MAX");
			})(w || (e.Edition = w = {})),
				t.proto2.util.setEnumType(w, "google.protobuf.Edition", [
					{ no: 0, name: "EDITION_UNKNOWN" },
					{ no: 900, name: "EDITION_LEGACY" },
					{ no: 998, name: "EDITION_PROTO2" },
					{ no: 999, name: "EDITION_PROTO3" },
					{ no: 1e3, name: "EDITION_2023" },
					{ no: 1001, name: "EDITION_2024" },
					{ no: 1, name: "EDITION_1_TEST_ONLY" },
					{ no: 2, name: "EDITION_2_TEST_ONLY" },
					{ no: 99997, name: "EDITION_99997_TEST_ONLY" },
					{ no: 99998, name: "EDITION_99998_TEST_ONLY" },
					{ no: 99999, name: "EDITION_99999_TEST_ONLY" },
					{ no: 2147483647, name: "EDITION_MAX" },
				]);
			class E extends i.Message {
				constructor(te) {
					super(), (this.file = []), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.FileDescriptorSet";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "file", kind: "message", T: C, repeated: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new E().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new E().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new E().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(E, te, Q);
				}
			}
			e.FileDescriptorSet = E;
			class C extends i.Message {
				constructor(te) {
					super(),
						(this.dependency = []),
						(this.publicDependency = []),
						(this.weakDependency = []),
						(this.messageType = []),
						(this.enumType = []),
						(this.service = []),
						(this.extension = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.FileDescriptorProto";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "package", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "dependency", kind: "scalar", T: 9, repeated: !0 },
						{
							no: 10,
							name: "public_dependency",
							kind: "scalar",
							T: 5,
							repeated: !0,
						},
						{
							no: 11,
							name: "weak_dependency",
							kind: "scalar",
							T: 5,
							repeated: !0,
						},
						{
							no: 4,
							name: "message_type",
							kind: "message",
							T: d,
							repeated: !0,
						},
						{ no: 5, name: "enum_type", kind: "message", T: o, repeated: !0 },
						{ no: 6, name: "service", kind: "message", T: s, repeated: !0 },
						{ no: 7, name: "extension", kind: "message", T: c, repeated: !0 },
						{ no: 8, name: "options", kind: "message", T: y, opt: !0 },
						{ no: 9, name: "source_code_info", kind: "message", T: X, opt: !0 },
						{ no: 12, name: "syntax", kind: "scalar", T: 9, opt: !0 },
						{
							no: 14,
							name: "edition",
							kind: "enum",
							T: t.proto2.getEnumType(w),
							opt: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new C().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new C().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new C().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(C, te, Q);
				}
			}
			e.FileDescriptorProto = C;
			class d extends i.Message {
				constructor(te) {
					super(),
						(this.field = []),
						(this.extension = []),
						(this.nestedType = []),
						(this.enumType = []),
						(this.extensionRange = []),
						(this.oneofDecl = []),
						(this.reservedRange = []),
						(this.reservedName = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.DescriptorProto";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "field", kind: "message", T: c, repeated: !0 },
						{ no: 6, name: "extension", kind: "message", T: c, repeated: !0 },
						{ no: 3, name: "nested_type", kind: "message", T: d, repeated: !0 },
						{ no: 4, name: "enum_type", kind: "message", T: o, repeated: !0 },
						{
							no: 5,
							name: "extension_range",
							kind: "message",
							T: m,
							repeated: !0,
						},
						{ no: 8, name: "oneof_decl", kind: "message", T: p, repeated: !0 },
						{ no: 7, name: "options", kind: "message", T: v, opt: !0 },
						{
							no: 9,
							name: "reserved_range",
							kind: "message",
							T: r,
							repeated: !0,
						},
						{
							no: 10,
							name: "reserved_name",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new d().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new d().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new d().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(d, te, Q);
				}
			}
			e.DescriptorProto = d;
			class m extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.DescriptorProto.ExtensionRange";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
						{ no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
						{ no: 3, name: "options", kind: "message", T: u, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new m().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new m().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new m().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(m, te, Q);
				}
			}
			e.DescriptorProto_ExtensionRange = m;
			class r extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.DescriptorProto.ReservedRange";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
						{ no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new r().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new r().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new r().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(r, te, Q);
				}
			}
			e.DescriptorProto_ReservedRange = r;
			class u extends i.Message {
				constructor(te) {
					super(),
						(this.uninterpretedOption = []),
						(this.declaration = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.ExtensionRangeOptions";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 999,
							name: "uninterpreted_option",
							kind: "message",
							T: U,
							repeated: !0,
						},
						{ no: 2, name: "declaration", kind: "message", T: h, repeated: !0 },
						{ no: 50, name: "features", kind: "message", T: F, opt: !0 },
						{
							no: 3,
							name: "verification",
							kind: "enum",
							T: t.proto2.getEnumType(a),
							opt: !0,
							default: a.UNVERIFIED,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new u().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new u().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new u().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(u, te, Q);
				}
			}
			e.ExtensionRangeOptions = u;
			var a;
			(function (_) {
				(_[(_.DECLARATION = 0)] = "DECLARATION"),
					(_[(_.UNVERIFIED = 1)] = "UNVERIFIED");
			})(a || (e.ExtensionRangeOptions_VerificationState = a = {})),
				t.proto2.util.setEnumType(
					a,
					"google.protobuf.ExtensionRangeOptions.VerificationState",
					[
						{ no: 0, name: "DECLARATION" },
						{ no: 1, name: "UNVERIFIED" },
					],
				);
			class h extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.ExtensionRangeOptions.Declaration";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "number", kind: "scalar", T: 5, opt: !0 },
						{ no: 2, name: "full_name", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "type", kind: "scalar", T: 9, opt: !0 },
						{ no: 5, name: "reserved", kind: "scalar", T: 8, opt: !0 },
						{ no: 6, name: "repeated", kind: "scalar", T: 8, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new h().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new h().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new h().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(h, te, Q);
				}
			}
			e.ExtensionRangeOptions_Declaration = h;
			class c extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.FieldDescriptorProto";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "number", kind: "scalar", T: 5, opt: !0 },
						{
							no: 4,
							name: "label",
							kind: "enum",
							T: t.proto2.getEnumType(g),
							opt: !0,
						},
						{
							no: 5,
							name: "type",
							kind: "enum",
							T: t.proto2.getEnumType(n),
							opt: !0,
						},
						{ no: 6, name: "type_name", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "extendee", kind: "scalar", T: 9, opt: !0 },
						{ no: 7, name: "default_value", kind: "scalar", T: 9, opt: !0 },
						{ no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: !0 },
						{ no: 10, name: "json_name", kind: "scalar", T: 9, opt: !0 },
						{ no: 8, name: "options", kind: "message", T: S, opt: !0 },
						{ no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new c().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new c().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new c().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(c, te, Q);
				}
			}
			e.FieldDescriptorProto = c;
			var n;
			(function (_) {
				(_[(_.DOUBLE = 1)] = "DOUBLE"),
					(_[(_.FLOAT = 2)] = "FLOAT"),
					(_[(_.INT64 = 3)] = "INT64"),
					(_[(_.UINT64 = 4)] = "UINT64"),
					(_[(_.INT32 = 5)] = "INT32"),
					(_[(_.FIXED64 = 6)] = "FIXED64"),
					(_[(_.FIXED32 = 7)] = "FIXED32"),
					(_[(_.BOOL = 8)] = "BOOL"),
					(_[(_.STRING = 9)] = "STRING"),
					(_[(_.GROUP = 10)] = "GROUP"),
					(_[(_.MESSAGE = 11)] = "MESSAGE"),
					(_[(_.BYTES = 12)] = "BYTES"),
					(_[(_.UINT32 = 13)] = "UINT32"),
					(_[(_.ENUM = 14)] = "ENUM"),
					(_[(_.SFIXED32 = 15)] = "SFIXED32"),
					(_[(_.SFIXED64 = 16)] = "SFIXED64"),
					(_[(_.SINT32 = 17)] = "SINT32"),
					(_[(_.SINT64 = 18)] = "SINT64");
			})(n || (e.FieldDescriptorProto_Type = n = {})),
				t.proto2.util.setEnumType(
					n,
					"google.protobuf.FieldDescriptorProto.Type",
					[
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
					],
				);
			var g;
			(function (_) {
				(_[(_.OPTIONAL = 1)] = "OPTIONAL"),
					(_[(_.REPEATED = 3)] = "REPEATED"),
					(_[(_.REQUIRED = 2)] = "REQUIRED");
			})(g || (e.FieldDescriptorProto_Label = g = {})),
				t.proto2.util.setEnumType(
					g,
					"google.protobuf.FieldDescriptorProto.Label",
					[
						{ no: 1, name: "LABEL_OPTIONAL" },
						{ no: 3, name: "LABEL_REPEATED" },
						{ no: 2, name: "LABEL_REQUIRED" },
					],
				);
			class p extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.OneofDescriptorProto";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "options", kind: "message", T: M, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new p().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new p().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new p().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(p, te, Q);
				}
			}
			e.OneofDescriptorProto = p;
			class o extends i.Message {
				constructor(te) {
					super(),
						(this.value = []),
						(this.reservedRange = []),
						(this.reservedName = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.EnumDescriptorProto";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "value", kind: "message", T: b, repeated: !0 },
						{ no: 3, name: "options", kind: "message", T: N, opt: !0 },
						{
							no: 4,
							name: "reserved_range",
							kind: "message",
							T: f,
							repeated: !0,
						},
						{
							no: 5,
							name: "reserved_name",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new o().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new o().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new o().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(o, te, Q);
				}
			}
			e.EnumDescriptorProto = o;
			class f extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName =
						"google.protobuf.EnumDescriptorProto.EnumReservedRange";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
						{ no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new f().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new f().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new f().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(f, te, Q);
				}
			}
			e.EnumDescriptorProto_EnumReservedRange = f;
			class b extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.EnumValueDescriptorProto";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "number", kind: "scalar", T: 5, opt: !0 },
						{ no: 3, name: "options", kind: "message", T: A, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new b().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new b().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new b().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(b, te, Q);
				}
			}
			e.EnumValueDescriptorProto = b;
			class s extends i.Message {
				constructor(te) {
					super(), (this.method = []), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.ServiceDescriptorProto";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "method", kind: "message", T: l, repeated: !0 },
						{ no: 3, name: "options", kind: "message", T: R, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new s().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new s().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new s().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(s, te, Q);
				}
			}
			e.ServiceDescriptorProto = s;
			class l extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.MethodDescriptorProto";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "input_type", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "output_type", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "options", kind: "message", T: O, opt: !0 },
						{
							no: 5,
							name: "client_streaming",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 6,
							name: "server_streaming",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new l().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new l().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new l().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(l, te, Q);
				}
			}
			e.MethodDescriptorProto = l;
			class y extends i.Message {
				constructor(te) {
					super(),
						(this.uninterpretedOption = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.FileOptions";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: !0 },
						{
							no: 8,
							name: "java_outer_classname",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{
							no: 10,
							name: "java_multiple_files",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 20,
							name: "java_generate_equals_and_hash",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
						{
							no: 27,
							name: "java_string_check_utf8",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 9,
							name: "optimize_for",
							kind: "enum",
							T: t.proto2.getEnumType($),
							opt: !0,
							default: $.SPEED,
						},
						{ no: 11, name: "go_package", kind: "scalar", T: 9, opt: !0 },
						{
							no: 16,
							name: "cc_generic_services",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 17,
							name: "java_generic_services",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 18,
							name: "py_generic_services",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 23,
							name: "deprecated",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 31,
							name: "cc_enable_arenas",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !0,
						},
						{
							no: 36,
							name: "objc_class_prefix",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{ no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: !0 },
						{ no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: !0 },
						{ no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: !0 },
						{ no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: !0 },
						{
							no: 44,
							name: "php_metadata_namespace",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{ no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: !0 },
						{ no: 50, name: "features", kind: "message", T: F, opt: !0 },
						{
							no: 999,
							name: "uninterpreted_option",
							kind: "message",
							T: U,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new y().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new y().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new y().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(y, te, Q);
				}
			}
			e.FileOptions = y;
			var $;
			(function (_) {
				(_[(_.SPEED = 1)] = "SPEED"),
					(_[(_.CODE_SIZE = 2)] = "CODE_SIZE"),
					(_[(_.LITE_RUNTIME = 3)] = "LITE_RUNTIME");
			})($ || (e.FileOptions_OptimizeMode = $ = {})),
				t.proto2.util.setEnumType(
					$,
					"google.protobuf.FileOptions.OptimizeMode",
					[
						{ no: 1, name: "SPEED" },
						{ no: 2, name: "CODE_SIZE" },
						{ no: 3, name: "LITE_RUNTIME" },
					],
				);
			class v extends i.Message {
				constructor(te) {
					super(),
						(this.uninterpretedOption = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.MessageOptions";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 1,
							name: "message_set_wire_format",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 2,
							name: "no_standard_descriptor_accessor",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 3,
							name: "deprecated",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{ no: 7, name: "map_entry", kind: "scalar", T: 8, opt: !0 },
						{
							no: 11,
							name: "deprecated_legacy_json_field_conflicts",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
						{ no: 12, name: "features", kind: "message", T: F, opt: !0 },
						{
							no: 999,
							name: "uninterpreted_option",
							kind: "message",
							T: U,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new v().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new v().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new v().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(v, te, Q);
				}
			}
			e.MessageOptions = v;
			class S extends i.Message {
				constructor(te) {
					super(),
						(this.targets = []),
						(this.editionDefaults = []),
						(this.uninterpretedOption = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.FieldOptions";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 1,
							name: "ctype",
							kind: "enum",
							T: t.proto2.getEnumType(I),
							opt: !0,
							default: I.STRING,
						},
						{ no: 2, name: "packed", kind: "scalar", T: 8, opt: !0 },
						{
							no: 6,
							name: "jstype",
							kind: "enum",
							T: t.proto2.getEnumType(T),
							opt: !0,
							default: T.JS_NORMAL,
						},
						{ no: 5, name: "lazy", kind: "scalar", T: 8, opt: !0, default: !1 },
						{
							no: 15,
							name: "unverified_lazy",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 3,
							name: "deprecated",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 10,
							name: "weak",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 16,
							name: "debug_redact",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 17,
							name: "retention",
							kind: "enum",
							T: t.proto2.getEnumType(P),
							opt: !0,
						},
						{
							no: 19,
							name: "targets",
							kind: "enum",
							T: t.proto2.getEnumType(k),
							repeated: !0,
						},
						{
							no: 20,
							name: "edition_defaults",
							kind: "message",
							T: L,
							repeated: !0,
						},
						{ no: 21, name: "features", kind: "message", T: F, opt: !0 },
						{ no: 22, name: "feature_support", kind: "message", T: D, opt: !0 },
						{
							no: 999,
							name: "uninterpreted_option",
							kind: "message",
							T: U,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new S().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new S().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new S().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(S, te, Q);
				}
			}
			e.FieldOptions = S;
			var I;
			(function (_) {
				(_[(_.STRING = 0)] = "STRING"),
					(_[(_.CORD = 1)] = "CORD"),
					(_[(_.STRING_PIECE = 2)] = "STRING_PIECE");
			})(I || (e.FieldOptions_CType = I = {})),
				t.proto2.util.setEnumType(I, "google.protobuf.FieldOptions.CType", [
					{ no: 0, name: "STRING" },
					{ no: 1, name: "CORD" },
					{ no: 2, name: "STRING_PIECE" },
				]);
			var T;
			(function (_) {
				(_[(_.JS_NORMAL = 0)] = "JS_NORMAL"),
					(_[(_.JS_STRING = 1)] = "JS_STRING"),
					(_[(_.JS_NUMBER = 2)] = "JS_NUMBER");
			})(T || (e.FieldOptions_JSType = T = {})),
				t.proto2.util.setEnumType(T, "google.protobuf.FieldOptions.JSType", [
					{ no: 0, name: "JS_NORMAL" },
					{ no: 1, name: "JS_STRING" },
					{ no: 2, name: "JS_NUMBER" },
				]);
			var P;
			(function (_) {
				(_[(_.RETENTION_UNKNOWN = 0)] = "RETENTION_UNKNOWN"),
					(_[(_.RETENTION_RUNTIME = 1)] = "RETENTION_RUNTIME"),
					(_[(_.RETENTION_SOURCE = 2)] = "RETENTION_SOURCE");
			})(P || (e.FieldOptions_OptionRetention = P = {})),
				t.proto2.util.setEnumType(
					P,
					"google.protobuf.FieldOptions.OptionRetention",
					[
						{ no: 0, name: "RETENTION_UNKNOWN" },
						{ no: 1, name: "RETENTION_RUNTIME" },
						{ no: 2, name: "RETENTION_SOURCE" },
					],
				);
			var k;
			(function (_) {
				(_[(_.TARGET_TYPE_UNKNOWN = 0)] = "TARGET_TYPE_UNKNOWN"),
					(_[(_.TARGET_TYPE_FILE = 1)] = "TARGET_TYPE_FILE"),
					(_[(_.TARGET_TYPE_EXTENSION_RANGE = 2)] =
						"TARGET_TYPE_EXTENSION_RANGE"),
					(_[(_.TARGET_TYPE_MESSAGE = 3)] = "TARGET_TYPE_MESSAGE"),
					(_[(_.TARGET_TYPE_FIELD = 4)] = "TARGET_TYPE_FIELD"),
					(_[(_.TARGET_TYPE_ONEOF = 5)] = "TARGET_TYPE_ONEOF"),
					(_[(_.TARGET_TYPE_ENUM = 6)] = "TARGET_TYPE_ENUM"),
					(_[(_.TARGET_TYPE_ENUM_ENTRY = 7)] = "TARGET_TYPE_ENUM_ENTRY"),
					(_[(_.TARGET_TYPE_SERVICE = 8)] = "TARGET_TYPE_SERVICE"),
					(_[(_.TARGET_TYPE_METHOD = 9)] = "TARGET_TYPE_METHOD");
			})(k || (e.FieldOptions_OptionTargetType = k = {})),
				t.proto2.util.setEnumType(
					k,
					"google.protobuf.FieldOptions.OptionTargetType",
					[
						{ no: 0, name: "TARGET_TYPE_UNKNOWN" },
						{ no: 1, name: "TARGET_TYPE_FILE" },
						{ no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" },
						{ no: 3, name: "TARGET_TYPE_MESSAGE" },
						{ no: 4, name: "TARGET_TYPE_FIELD" },
						{ no: 5, name: "TARGET_TYPE_ONEOF" },
						{ no: 6, name: "TARGET_TYPE_ENUM" },
						{ no: 7, name: "TARGET_TYPE_ENUM_ENTRY" },
						{ no: 8, name: "TARGET_TYPE_SERVICE" },
						{ no: 9, name: "TARGET_TYPE_METHOD" },
					],
				);
			class L extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.FieldOptions.EditionDefault";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 3,
							name: "edition",
							kind: "enum",
							T: t.proto2.getEnumType(w),
							opt: !0,
						},
						{ no: 2, name: "value", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new L().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new L().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new L().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(L, te, Q);
				}
			}
			e.FieldOptions_EditionDefault = L;
			class D extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.FieldOptions.FeatureSupport";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 1,
							name: "edition_introduced",
							kind: "enum",
							T: t.proto2.getEnumType(w),
							opt: !0,
						},
						{
							no: 2,
							name: "edition_deprecated",
							kind: "enum",
							T: t.proto2.getEnumType(w),
							opt: !0,
						},
						{
							no: 3,
							name: "deprecation_warning",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{
							no: 4,
							name: "edition_removed",
							kind: "enum",
							T: t.proto2.getEnumType(w),
							opt: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new D().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new D().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new D().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(D, te, Q);
				}
			}
			e.FieldOptions_FeatureSupport = D;
			class M extends i.Message {
				constructor(te) {
					super(),
						(this.uninterpretedOption = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.OneofOptions";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "features", kind: "message", T: F, opt: !0 },
						{
							no: 999,
							name: "uninterpreted_option",
							kind: "message",
							T: U,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new M().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new M().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new M().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(M, te, Q);
				}
			}
			e.OneofOptions = M;
			class N extends i.Message {
				constructor(te) {
					super(),
						(this.uninterpretedOption = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.EnumOptions";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: !0 },
						{
							no: 3,
							name: "deprecated",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 6,
							name: "deprecated_legacy_json_field_conflicts",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
						{ no: 7, name: "features", kind: "message", T: F, opt: !0 },
						{
							no: 999,
							name: "uninterpreted_option",
							kind: "message",
							T: U,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new N().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new N().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new N().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(N, te, Q);
				}
			}
			e.EnumOptions = N;
			class A extends i.Message {
				constructor(te) {
					super(),
						(this.uninterpretedOption = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.EnumValueOptions";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 1,
							name: "deprecated",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{ no: 2, name: "features", kind: "message", T: F, opt: !0 },
						{
							no: 3,
							name: "debug_redact",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{ no: 4, name: "feature_support", kind: "message", T: D, opt: !0 },
						{
							no: 999,
							name: "uninterpreted_option",
							kind: "message",
							T: U,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new A().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new A().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new A().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(A, te, Q);
				}
			}
			e.EnumValueOptions = A;
			class R extends i.Message {
				constructor(te) {
					super(),
						(this.uninterpretedOption = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.ServiceOptions";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 34, name: "features", kind: "message", T: F, opt: !0 },
						{
							no: 33,
							name: "deprecated",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 999,
							name: "uninterpreted_option",
							kind: "message",
							T: U,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new R().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new R().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new R().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(R, te, Q);
				}
			}
			e.ServiceOptions = R;
			class O extends i.Message {
				constructor(te) {
					super(),
						(this.uninterpretedOption = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.MethodOptions";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 33,
							name: "deprecated",
							kind: "scalar",
							T: 8,
							opt: !0,
							default: !1,
						},
						{
							no: 34,
							name: "idempotency_level",
							kind: "enum",
							T: t.proto2.getEnumType(B),
							opt: !0,
							default: B.IDEMPOTENCY_UNKNOWN,
						},
						{ no: 35, name: "features", kind: "message", T: F, opt: !0 },
						{
							no: 999,
							name: "uninterpreted_option",
							kind: "message",
							T: U,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new O().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new O().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new O().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(O, te, Q);
				}
			}
			e.MethodOptions = O;
			var B;
			(function (_) {
				(_[(_.IDEMPOTENCY_UNKNOWN = 0)] = "IDEMPOTENCY_UNKNOWN"),
					(_[(_.NO_SIDE_EFFECTS = 1)] = "NO_SIDE_EFFECTS"),
					(_[(_.IDEMPOTENT = 2)] = "IDEMPOTENT");
			})(B || (e.MethodOptions_IdempotencyLevel = B = {})),
				t.proto2.util.setEnumType(
					B,
					"google.protobuf.MethodOptions.IdempotencyLevel",
					[
						{ no: 0, name: "IDEMPOTENCY_UNKNOWN" },
						{ no: 1, name: "NO_SIDE_EFFECTS" },
						{ no: 2, name: "IDEMPOTENT" },
					],
				);
			class U extends i.Message {
				constructor(te) {
					super(), (this.name = []), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.UninterpretedOption";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 2, name: "name", kind: "message", T: z, repeated: !0 },
						{ no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: !0 },
						{
							no: 4,
							name: "positive_int_value",
							kind: "scalar",
							T: 4,
							opt: !0,
						},
						{
							no: 5,
							name: "negative_int_value",
							kind: "scalar",
							T: 3,
							opt: !0,
						},
						{ no: 6, name: "double_value", kind: "scalar", T: 1, opt: !0 },
						{ no: 7, name: "string_value", kind: "scalar", T: 12, opt: !0 },
						{ no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new U().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new U().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new U().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(U, te, Q);
				}
			}
			e.UninterpretedOption = U;
			class z extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.UninterpretedOption.NamePart";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "name_part", kind: "scalar", T: 9, req: !0 },
						{ no: 2, name: "is_extension", kind: "scalar", T: 8, req: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new z().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new z().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new z().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(z, te, Q);
				}
			}
			e.UninterpretedOption_NamePart = z;
			class F extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.FeatureSet";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 1,
							name: "field_presence",
							kind: "enum",
							T: t.proto2.getEnumType(x),
							opt: !0,
						},
						{
							no: 2,
							name: "enum_type",
							kind: "enum",
							T: t.proto2.getEnumType(H),
							opt: !0,
						},
						{
							no: 3,
							name: "repeated_field_encoding",
							kind: "enum",
							T: t.proto2.getEnumType(q),
							opt: !0,
						},
						{
							no: 4,
							name: "utf8_validation",
							kind: "enum",
							T: t.proto2.getEnumType(V),
							opt: !0,
						},
						{
							no: 5,
							name: "message_encoding",
							kind: "enum",
							T: t.proto2.getEnumType(G),
							opt: !0,
						},
						{
							no: 6,
							name: "json_format",
							kind: "enum",
							T: t.proto2.getEnumType(K),
							opt: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new F().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new F().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new F().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(F, te, Q);
				}
			}
			e.FeatureSet = F;
			var x;
			(function (_) {
				(_[(_.FIELD_PRESENCE_UNKNOWN = 0)] = "FIELD_PRESENCE_UNKNOWN"),
					(_[(_.EXPLICIT = 1)] = "EXPLICIT"),
					(_[(_.IMPLICIT = 2)] = "IMPLICIT"),
					(_[(_.LEGACY_REQUIRED = 3)] = "LEGACY_REQUIRED");
			})(x || (e.FeatureSet_FieldPresence = x = {})),
				t.proto2.util.setEnumType(
					x,
					"google.protobuf.FeatureSet.FieldPresence",
					[
						{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" },
						{ no: 1, name: "EXPLICIT" },
						{ no: 2, name: "IMPLICIT" },
						{ no: 3, name: "LEGACY_REQUIRED" },
					],
				);
			var H;
			(function (_) {
				(_[(_.ENUM_TYPE_UNKNOWN = 0)] = "ENUM_TYPE_UNKNOWN"),
					(_[(_.OPEN = 1)] = "OPEN"),
					(_[(_.CLOSED = 2)] = "CLOSED");
			})(H || (e.FeatureSet_EnumType = H = {})),
				t.proto2.util.setEnumType(H, "google.protobuf.FeatureSet.EnumType", [
					{ no: 0, name: "ENUM_TYPE_UNKNOWN" },
					{ no: 1, name: "OPEN" },
					{ no: 2, name: "CLOSED" },
				]);
			var q;
			(function (_) {
				(_[(_.REPEATED_FIELD_ENCODING_UNKNOWN = 0)] =
					"REPEATED_FIELD_ENCODING_UNKNOWN"),
					(_[(_.PACKED = 1)] = "PACKED"),
					(_[(_.EXPANDED = 2)] = "EXPANDED");
			})(q || (e.FeatureSet_RepeatedFieldEncoding = q = {})),
				t.proto2.util.setEnumType(
					q,
					"google.protobuf.FeatureSet.RepeatedFieldEncoding",
					[
						{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" },
						{ no: 1, name: "PACKED" },
						{ no: 2, name: "EXPANDED" },
					],
				);
			var V;
			(function (_) {
				(_[(_.UTF8_VALIDATION_UNKNOWN = 0)] = "UTF8_VALIDATION_UNKNOWN"),
					(_[(_.VERIFY = 2)] = "VERIFY"),
					(_[(_.NONE = 3)] = "NONE");
			})(V || (e.FeatureSet_Utf8Validation = V = {})),
				t.proto2.util.setEnumType(
					V,
					"google.protobuf.FeatureSet.Utf8Validation",
					[
						{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" },
						{ no: 2, name: "VERIFY" },
						{ no: 3, name: "NONE" },
					],
				);
			var G;
			(function (_) {
				(_[(_.MESSAGE_ENCODING_UNKNOWN = 0)] = "MESSAGE_ENCODING_UNKNOWN"),
					(_[(_.LENGTH_PREFIXED = 1)] = "LENGTH_PREFIXED"),
					(_[(_.DELIMITED = 2)] = "DELIMITED");
			})(G || (e.FeatureSet_MessageEncoding = G = {})),
				t.proto2.util.setEnumType(
					G,
					"google.protobuf.FeatureSet.MessageEncoding",
					[
						{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" },
						{ no: 1, name: "LENGTH_PREFIXED" },
						{ no: 2, name: "DELIMITED" },
					],
				);
			var K;
			(function (_) {
				(_[(_.JSON_FORMAT_UNKNOWN = 0)] = "JSON_FORMAT_UNKNOWN"),
					(_[(_.ALLOW = 1)] = "ALLOW"),
					(_[(_.LEGACY_BEST_EFFORT = 2)] = "LEGACY_BEST_EFFORT");
			})(K || (e.FeatureSet_JsonFormat = K = {})),
				t.proto2.util.setEnumType(K, "google.protobuf.FeatureSet.JsonFormat", [
					{ no: 0, name: "JSON_FORMAT_UNKNOWN" },
					{ no: 1, name: "ALLOW" },
					{ no: 2, name: "LEGACY_BEST_EFFORT" },
				]);
			class J extends i.Message {
				constructor(te) {
					super(), (this.defaults = []), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.FeatureSetDefaults";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "defaults", kind: "message", T: W, repeated: !0 },
						{
							no: 4,
							name: "minimum_edition",
							kind: "enum",
							T: t.proto2.getEnumType(w),
							opt: !0,
						},
						{
							no: 5,
							name: "maximum_edition",
							kind: "enum",
							T: t.proto2.getEnumType(w),
							opt: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new J().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new J().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new J().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(J, te, Q);
				}
			}
			e.FeatureSetDefaults = J;
			class W extends i.Message {
				constructor(te) {
					super(), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName =
						"google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 3,
							name: "edition",
							kind: "enum",
							T: t.proto2.getEnumType(w),
							opt: !0,
						},
						{
							no: 4,
							name: "overridable_features",
							kind: "message",
							T: F,
							opt: !0,
						},
						{ no: 5, name: "fixed_features", kind: "message", T: F, opt: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new W().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new W().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new W().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(W, te, Q);
				}
			}
			e.FeatureSetDefaults_FeatureSetEditionDefault = W;
			class X extends i.Message {
				constructor(te) {
					super(), (this.location = []), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.SourceCodeInfo";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "location", kind: "message", T: Y, repeated: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new X().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new X().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new X().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(X, te, Q);
				}
			}
			e.SourceCodeInfo = X;
			class Y extends i.Message {
				constructor(te) {
					super(),
						(this.path = []),
						(this.span = []),
						(this.leadingDetachedComments = []),
						t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.SourceCodeInfo.Location";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 1,
							name: "path",
							kind: "scalar",
							T: 5,
							repeated: !0,
							packed: !0,
						},
						{
							no: 2,
							name: "span",
							kind: "scalar",
							T: 5,
							repeated: !0,
							packed: !0,
						},
						{ no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: !0 },
						{
							no: 6,
							name: "leading_detached_comments",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new Y().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new Y().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new Y().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(Y, te, Q);
				}
			}
			e.SourceCodeInfo_Location = Y;
			class ie extends i.Message {
				constructor(te) {
					super(), (this.annotation = []), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.GeneratedCodeInfo";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{ no: 1, name: "annotation", kind: "message", T: ne, repeated: !0 },
					]);
				}
				static fromBinary(te, Q) {
					return new ie().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new ie().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new ie().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(ie, te, Q);
				}
			}
			e.GeneratedCodeInfo = ie;
			class ne extends i.Message {
				constructor(te) {
					super(), (this.path = []), t.proto2.util.initPartial(te, this);
				}
				static {
					this.runtime = t.proto2;
				}
				static {
					this.typeName = "google.protobuf.GeneratedCodeInfo.Annotation";
				}
				static {
					this.fields = t.proto2.util.newFieldList(() => [
						{
							no: 1,
							name: "path",
							kind: "scalar",
							T: 5,
							repeated: !0,
							packed: !0,
						},
						{ no: 2, name: "source_file", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "begin", kind: "scalar", T: 5, opt: !0 },
						{ no: 4, name: "end", kind: "scalar", T: 5, opt: !0 },
						{
							no: 5,
							name: "semantic",
							kind: "enum",
							T: t.proto2.getEnumType(ee),
							opt: !0,
						},
					]);
				}
				static fromBinary(te, Q) {
					return new ne().fromBinary(te, Q);
				}
				static fromJson(te, Q) {
					return new ne().fromJson(te, Q);
				}
				static fromJsonString(te, Q) {
					return new ne().fromJsonString(te, Q);
				}
				static equals(te, Q) {
					return t.proto2.util.equals(ne, te, Q);
				}
			}
			e.GeneratedCodeInfo_Annotation = ne;
			var ee;
			(function (_) {
				(_[(_.NONE = 0)] = "NONE"),
					(_[(_.SET = 1)] = "SET"),
					(_[(_.ALIAS = 2)] = "ALIAS");
			})(ee || (e.GeneratedCodeInfo_Annotation_Semantic = ee = {})),
				t.proto2.util.setEnumType(
					ee,
					"google.protobuf.GeneratedCodeInfo.Annotation.Semantic",
					[
						{ no: 0, name: "NONE" },
						{ no: 1, name: "SET" },
						{ no: 2, name: "ALIAS" },
					],
				);
		}),
		