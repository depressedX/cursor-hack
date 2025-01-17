import '../../../require.js';
import '../../../exports.js';
import './google/protobuf/descriptor_pb.js';
import './private/assert.js';
import './service-type.js';
import './private/names.js';
import './private/text-format.js';
import './private/feature-set.js';
import './scalar.js';
import './is-message.js';
define(
			de[1409],
			he([1, 0, 724, 451, 1408, 723, 2036, 2039, 429, 524]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createDescriptorSet = u);
				function u(R, O) {
					const B = {
							files: [],
							enums: new Map(),
							messages: new Map(),
							services: new Map(),
							extensions: new Map(),
							mapEntries: new Map(),
						},
						U = (0, r.isMessage)(R, t.FileDescriptorSet)
							? R.file
							: R instanceof Uint8Array
								? t.FileDescriptorSet.fromBinary(R).file
								: R,
						z = new Map();
					for (const F of U) {
						const x = F.edition ?? l(F.syntax, F.edition).edition;
						let H = z.get(x);
						H === void 0 &&
							((H = (0, d.createFeatureResolver)(
								x,
								O?.featureSetDefaults,
								O?.serializationOptions,
							)),
							z.set(x, H)),
							a(F, B, H);
					}
					return B;
				}
				function a(R, O, B) {
					(0, i.assert)(R.name, "invalid FileDescriptorProto: missing name");
					const U = {
						kind: "file",
						proto: R,
						deprecated: R.options?.deprecated ?? !1,
						...l(R.syntax, R.edition),
						name: R.name.replace(/\.proto/, ""),
						dependencies: y(R, O),
						enums: [],
						messages: [],
						extensions: [],
						services: [],
						toString() {
							return `file ${this.proto.name}`;
						},
						getSyntaxComments() {
							return D(this.proto.sourceCodeInfo, [
								M.FileDescriptorProto_Syntax,
							]);
						},
						getPackageComments() {
							return D(this.proto.sourceCodeInfo, [
								M.FileDescriptorProto_Package,
							]);
						},
						getFeatures() {
							return B(R.options?.features);
						},
					};
					O.mapEntries.clear();
					for (const z of R.enumType) n(z, U, void 0, O, B);
					for (const z of R.messageType) g(z, U, void 0, O, B);
					for (const z of R.service) p(z, U, O, B);
					h(U, O, B);
					for (const z of O.mapEntries.values()) c(z, O, B);
					for (const z of U.messages) c(z, O, B), h(z, O, B);
					O.mapEntries.clear(), O.files.push(U);
				}
				function h(R, O, B) {
					switch (R.kind) {
						case "file":
							for (const U of R.proto.extension) {
								const z = s(U, R, void 0, O, B);
								R.extensions.push(z), O.extensions.set(z.typeName, z);
							}
							break;
						case "message":
							for (const U of R.proto.extension) {
								const z = s(U, R.file, R, O, B);
								R.nestedExtensions.push(z), O.extensions.set(z.typeName, z);
							}
							for (const U of R.nestedMessages) h(U, O, B);
							break;
					}
				}
				function c(R, O, B) {
					const U = R.proto.oneofDecl.map((F) => f(F, R, B)),
						z = new Set();
					for (const F of R.proto.field) {
						const x = I(F, U),
							H = b(F, R.file, R, x, O, B);
						R.fields.push(H),
							x === void 0
								? R.members.push(H)
								: (x.fields.push(H), z.has(x) || (z.add(x), R.members.push(x)));
					}
					for (const F of U.filter((x) => z.has(x))) R.oneofs.push(F);
					for (const F of R.nestedMessages) c(F, O, B);
				}
				function n(R, O, B, U, z) {
					(0, i.assert)(R.name, "invalid EnumDescriptorProto: missing name");
					const F = {
						kind: "enum",
						proto: R,
						deprecated: R.options?.deprecated ?? !1,
						file: O,
						parent: B,
						name: R.name,
						typeName: $(R, B, O),
						values: [],
						sharedPrefix: (0, E.findEnumSharedPrefix)(
							R.name,
							R.value.map((x) => x.name ?? ""),
						),
						toString() {
							return `enum ${this.typeName}`;
						},
						getComments() {
							const x = this.parent
								? [
										...this.parent.getComments().sourcePath,
										M.DescriptorProto_EnumType,
										this.parent.proto.enumType.indexOf(this.proto),
									]
								: [
										M.FileDescriptorProto_EnumType,
										this.file.proto.enumType.indexOf(this.proto),
									];
							return D(O.proto.sourceCodeInfo, x);
						},
						getFeatures() {
							return z(
								B?.getFeatures() ?? O.getFeatures(),
								R.options?.features,
							);
						},
					};
					U.enums.set(F.typeName, F),
						R.value.forEach((x) => {
							(0, i.assert)(
								x.name,
								"invalid EnumValueDescriptorProto: missing name",
							),
								(0, i.assert)(
									x.number !== void 0,
									"invalid EnumValueDescriptorProto: missing number",
								),
								F.values.push({
									kind: "enum_value",
									proto: x,
									deprecated: x.options?.deprecated ?? !1,
									parent: F,
									name: x.name,
									number: x.number,
									toString() {
										return `enum value ${F.typeName}.${this.name}`;
									},
									declarationString() {
										let H = `${this.name} = ${this.number}`;
										return (
											this.proto.options?.deprecated === !0 &&
												(H += " [deprecated = true]"),
											H
										);
									},
									getComments() {
										const H = [
											...this.parent.getComments().sourcePath,
											M.EnumDescriptorProto_Value,
											this.parent.proto.value.indexOf(this.proto),
										];
										return D(O.proto.sourceCodeInfo, H);
									},
									getFeatures() {
										return z(F.getFeatures(), x.options?.features);
									},
								});
						}),
						(B?.nestedEnums ?? O.enums).push(F);
				}
				function g(R, O, B, U, z) {
					(0, i.assert)(R.name, "invalid DescriptorProto: missing name");
					const F = {
						kind: "message",
						proto: R,
						deprecated: R.options?.deprecated ?? !1,
						file: O,
						parent: B,
						name: R.name,
						typeName: $(R, B, O),
						fields: [],
						oneofs: [],
						members: [],
						nestedEnums: [],
						nestedMessages: [],
						nestedExtensions: [],
						toString() {
							return `message ${this.typeName}`;
						},
						getComments() {
							const x = this.parent
								? [
										...this.parent.getComments().sourcePath,
										M.DescriptorProto_NestedType,
										this.parent.proto.nestedType.indexOf(this.proto),
									]
								: [
										M.FileDescriptorProto_MessageType,
										this.file.proto.messageType.indexOf(this.proto),
									];
							return D(O.proto.sourceCodeInfo, x);
						},
						getFeatures() {
							return z(
								B?.getFeatures() ?? O.getFeatures(),
								R.options?.features,
							);
						},
					};
					R.options?.mapEntry === !0
						? U.mapEntries.set(F.typeName, F)
						: ((B?.nestedMessages ?? O.messages).push(F),
							U.messages.set(F.typeName, F));
					for (const x of R.enumType) n(x, O, F, U, z);
					for (const x of R.nestedType) g(x, O, F, U, z);
				}
				function p(R, O, B, U) {
					(0, i.assert)(R.name, "invalid ServiceDescriptorProto: missing name");
					const z = {
						kind: "service",
						proto: R,
						deprecated: R.options?.deprecated ?? !1,
						file: O,
						name: R.name,
						typeName: $(R, void 0, O),
						methods: [],
						toString() {
							return `service ${this.typeName}`;
						},
						getComments() {
							const F = [
								M.FileDescriptorProto_Service,
								this.file.proto.service.indexOf(this.proto),
							];
							return D(O.proto.sourceCodeInfo, F);
						},
						getFeatures() {
							return U(O.getFeatures(), R.options?.features);
						},
					};
					O.services.push(z), B.services.set(z.typeName, z);
					for (const F of R.method) z.methods.push(o(F, z, B, U));
				}
				function o(R, O, B, U) {
					(0, i.assert)(R.name, "invalid MethodDescriptorProto: missing name"),
						(0, i.assert)(
							R.inputType,
							"invalid MethodDescriptorProto: missing input_type",
						),
						(0, i.assert)(
							R.outputType,
							"invalid MethodDescriptorProto: missing output_type",
						);
					let z;
					R.clientStreaming === !0 && R.serverStreaming === !0
						? (z = w.MethodKind.BiDiStreaming)
						: R.clientStreaming === !0
							? (z = w.MethodKind.ClientStreaming)
							: R.serverStreaming === !0
								? (z = w.MethodKind.ServerStreaming)
								: (z = w.MethodKind.Unary);
					let F;
					switch (R.options?.idempotencyLevel) {
						case t.MethodOptions_IdempotencyLevel.IDEMPOTENT:
							F = w.MethodIdempotency.Idempotent;
							break;
						case t.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
							F = w.MethodIdempotency.NoSideEffects;
							break;
						case t.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
						case void 0:
							F = void 0;
							break;
					}
					const x = B.messages.get(v(R.inputType)),
						H = B.messages.get(v(R.outputType));
					(0, i.assert)(
						x,
						`invalid MethodDescriptorProto: input_type ${R.inputType} not found`,
					),
						(0, i.assert)(
							H,
							`invalid MethodDescriptorProto: output_type ${R.inputType} not found`,
						);
					const q = R.name;
					return {
						kind: "rpc",
						proto: R,
						deprecated: R.options?.deprecated ?? !1,
						parent: O,
						name: q,
						methodKind: z,
						input: x,
						output: H,
						idempotency: F,
						toString() {
							return `rpc ${O.typeName}.${q}`;
						},
						getComments() {
							const V = [
								...this.parent.getComments().sourcePath,
								M.ServiceDescriptorProto_Method,
								this.parent.proto.method.indexOf(this.proto),
							];
							return D(O.file.proto.sourceCodeInfo, V);
						},
						getFeatures() {
							return U(O.getFeatures(), R.options?.features);
						},
					};
				}
				function f(R, O, B) {
					return (
						(0, i.assert)(R.name, "invalid OneofDescriptorProto: missing name"),
						{
							kind: "oneof",
							proto: R,
							deprecated: !1,
							parent: O,
							fields: [],
							name: R.name,
							toString() {
								return `oneof ${O.typeName}.${this.name}`;
							},
							getComments() {
								const U = [
									...this.parent.getComments().sourcePath,
									M.DescriptorProto_OneofDecl,
									this.parent.proto.oneofDecl.indexOf(this.proto),
								];
								return D(O.file.proto.sourceCodeInfo, U);
							},
							getFeatures() {
								return B(O.getFeatures(), R.options?.features);
							},
						}
					);
				}
				function b(R, O, B, U, z, F) {
					(0, i.assert)(R.name, "invalid FieldDescriptorProto: missing name"),
						(0, i.assert)(
							R.number,
							"invalid FieldDescriptorProto: missing number",
						),
						(0, i.assert)(R.type, "invalid FieldDescriptorProto: missing type");
					const x = {
							proto: R,
							deprecated: R.options?.deprecated ?? !1,
							name: R.name,
							number: R.number,
							parent: B,
							oneof: U,
							optional: T(R, O.syntax),
							packedByDefault: P(R, F),
							packed: k(O, B, R, F),
							jsonName:
								R.jsonName === (0, E.fieldJsonName)(R.name)
									? void 0
									: R.jsonName,
							scalar: void 0,
							longType: void 0,
							message: void 0,
							enum: void 0,
							mapKey: void 0,
							mapValue: void 0,
							declarationString: N,
							toString() {
								return `field ${this.parent.typeName}.${this.name}`;
							},
							getComments() {
								const q = [
									...this.parent.getComments().sourcePath,
									M.DescriptorProto_Field,
									this.parent.proto.field.indexOf(this.proto),
								];
								return D(O.proto.sourceCodeInfo, q);
							},
							getFeatures() {
								return F(B.getFeatures(), R.options?.features);
							},
						},
						H = R.label === t.FieldDescriptorProto_Label.REPEATED;
					switch (R.type) {
						case t.FieldDescriptorProto_Type.MESSAGE:
						case t.FieldDescriptorProto_Type.GROUP: {
							(0, i.assert)(
								R.typeName,
								"invalid FieldDescriptorProto: missing type_name",
							);
							const q = z.mapEntries.get(v(R.typeName));
							if (q !== void 0)
								return (
									(0, i.assert)(
										H,
										"invalid FieldDescriptorProto: expected map entry to be repeated",
									),
									{
										...x,
										kind: "field",
										fieldKind: "map",
										repeated: !1,
										...S(q),
									}
								);
							const V = z.messages.get(v(R.typeName));
							return (
								(0, i.assert)(
									V !== void 0,
									`invalid FieldDescriptorProto: type_name ${R.typeName} not found`,
								),
								{
									...x,
									kind: "field",
									fieldKind: "message",
									repeated: H,
									message: V,
								}
							);
						}
						case t.FieldDescriptorProto_Type.ENUM: {
							(0, i.assert)(
								R.typeName,
								"invalid FieldDescriptorProto: missing type_name",
							);
							const q = z.enums.get(v(R.typeName));
							return (
								(0, i.assert)(
									q !== void 0,
									`invalid FieldDescriptorProto: type_name ${R.typeName} not found`,
								),
								{
									...x,
									kind: "field",
									fieldKind: "enum",
									getDefaultValue: A,
									repeated: H,
									enum: q,
								}
							);
						}
						default: {
							const q = L[R.type];
							return (
								(0, i.assert)(
									q,
									`invalid FieldDescriptorProto: unknown type ${R.type}`,
								),
								{
									...x,
									kind: "field",
									fieldKind: "scalar",
									getDefaultValue: A,
									repeated: H,
									scalar: q,
									longType:
										R.options?.jstype == t.FieldOptions_JSType.JS_STRING
											? m.LongType.STRING
											: m.LongType.BIGINT,
								}
							);
						}
					}
				}
				function s(R, O, B, U, z) {
					(0, i.assert)(
						R.extendee,
						"invalid FieldDescriptorProto: missing extendee",
					);
					const F = b(R, O, null, void 0, U, z),
						x = U.messages.get(v(R.extendee));
					return (
						(0, i.assert)(
							x,
							`invalid FieldDescriptorProto: extendee ${R.extendee} not found`,
						),
						{
							...F,
							kind: "extension",
							typeName: $(R, B, O),
							parent: B,
							file: O,
							extendee: x,
							toString() {
								return `extension ${this.typeName}`;
							},
							getComments() {
								const H = this.parent
									? [
											...this.parent.getComments().sourcePath,
											M.DescriptorProto_Extension,
											this.parent.proto.extension.indexOf(R),
										]
									: [
											M.FileDescriptorProto_Extension,
											this.file.proto.extension.indexOf(R),
										];
								return D(O.proto.sourceCodeInfo, H);
							},
							getFeatures() {
								return z((B ?? O).getFeatures(), R.options?.features);
							},
						}
					);
				}
				function l(R, O) {
					let B, U;
					switch (R) {
						case void 0:
						case "proto2":
							(U = "proto2"), (B = t.Edition.EDITION_PROTO2);
							break;
						case "proto3":
							(U = "proto3"), (B = t.Edition.EDITION_PROTO3);
							break;
						case "editions":
							switch (((U = "editions"), O)) {
								case void 0:
								case t.Edition.EDITION_1_TEST_ONLY:
								case t.Edition.EDITION_2_TEST_ONLY:
								case t.Edition.EDITION_99997_TEST_ONLY:
								case t.Edition.EDITION_99998_TEST_ONLY:
								case t.Edition.EDITION_99999_TEST_ONLY:
								case t.Edition.EDITION_UNKNOWN:
									B = t.Edition.EDITION_UNKNOWN;
									break;
								default:
									B = O;
									break;
							}
							break;
						default:
							throw new Error(
								`invalid FileDescriptorProto: unsupported syntax: ${R}`,
							);
					}
					if (R === "editions" && O === t.Edition.EDITION_UNKNOWN)
						throw new Error(
							`invalid FileDescriptorProto: syntax ${R} cannot have edition ${String(O)}`,
						);
					return { syntax: U, edition: B };
				}
				function y(R, O) {
					return R.dependency.map((B) => {
						const U = O.files.find((z) => z.proto.name === B);
						return (0, i.assert)(U), U;
					});
				}
				function $(R, O, B) {
					(0, i.assert)(
						R.name,
						`invalid ${R.getType().typeName}: missing name`,
					);
					let U;
					return (
						O
							? (U = `${O.typeName}.${R.name}`)
							: B.proto.package !== void 0
								? (U = `${B.proto.package}.${R.name}`)
								: (U = `${R.name}`),
						U
					);
				}
				function v(R) {
					return R.startsWith(".") ? R.substring(1) : R;
				}
				function S(R) {
					(0, i.assert)(
						R.proto.options?.mapEntry,
						`invalid DescriptorProto: expected ${R.toString()} to be a map entry`,
					),
						(0, i.assert)(
							R.fields.length === 2,
							`invalid DescriptorProto: map entry ${R.toString()} has ${R.fields.length} fields`,
						);
					const O = R.fields.find((z) => z.proto.number === 1);
					(0, i.assert)(
						O,
						`invalid DescriptorProto: map entry ${R.toString()} is missing key field`,
					);
					const B = O.scalar;
					(0, i.assert)(
						B !== void 0 &&
							B !== m.ScalarType.BYTES &&
							B !== m.ScalarType.FLOAT &&
							B !== m.ScalarType.DOUBLE,
						`invalid DescriptorProto: map entry ${R.toString()} has unexpected key type ${O.proto.type ?? -1}`,
					);
					const U = R.fields.find((z) => z.proto.number === 2);
					switch (
						((0, i.assert)(
							U,
							`invalid DescriptorProto: map entry ${R.toString()} is missing value field`,
						),
						U.fieldKind)
					) {
						case "scalar":
							return { mapKey: B, mapValue: { ...U, kind: "scalar" } };
						case "message":
							return { mapKey: B, mapValue: { ...U, kind: "message" } };
						case "enum":
							return { mapKey: B, mapValue: { ...U, kind: "enum" } };
						default:
							throw new Error(
								"invalid DescriptorProto: unsupported map entry value field",
							);
					}
				}
				function I(R, O) {
					const B = R.oneofIndex;
					if (B === void 0) return;
					let U;
					return (
						R.proto3Optional !== !0 &&
							((U = O[B]),
							(0, i.assert)(
								U,
								`invalid FieldDescriptorProto: oneof #${B} for field #${R.number ?? -1} not found`,
							)),
						U
					);
				}
				function T(R, O) {
					switch (O) {
						case "proto2":
							return (
								R.oneofIndex === void 0 &&
								R.label === t.FieldDescriptorProto_Label.OPTIONAL
							);
						case "proto3":
							return R.proto3Optional === !0;
						case "editions":
							return !1;
					}
				}
				function P(R, O) {
					const { repeatedFieldEncoding: B } = O();
					if (B != t.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
					switch (R.type) {
						case t.FieldDescriptorProto_Type.STRING:
						case t.FieldDescriptorProto_Type.BYTES:
						case t.FieldDescriptorProto_Type.GROUP:
						case t.FieldDescriptorProto_Type.MESSAGE:
							return !1;
						default:
							return !0;
					}
				}
				function k(R, O, B, U) {
					switch (B.type) {
						case t.FieldDescriptorProto_Type.STRING:
						case t.FieldDescriptorProto_Type.BYTES:
						case t.FieldDescriptorProto_Type.GROUP:
						case t.FieldDescriptorProto_Type.MESSAGE:
							return !1;
						default:
							switch (R.edition) {
								case t.Edition.EDITION_PROTO2:
									return B.options?.packed ?? !1;
								case t.Edition.EDITION_PROTO3:
									return B.options?.packed ?? !0;
								default: {
									const { repeatedFieldEncoding: z } = U(
										O?.getFeatures() ?? R.getFeatures(),
										B.options?.features,
									);
									return z == t.FeatureSet_RepeatedFieldEncoding.PACKED;
								}
							}
					}
				}
				const L = {
					[t.FieldDescriptorProto_Type.DOUBLE]: m.ScalarType.DOUBLE,
					[t.FieldDescriptorProto_Type.FLOAT]: m.ScalarType.FLOAT,
					[t.FieldDescriptorProto_Type.INT64]: m.ScalarType.INT64,
					[t.FieldDescriptorProto_Type.UINT64]: m.ScalarType.UINT64,
					[t.FieldDescriptorProto_Type.INT32]: m.ScalarType.INT32,
					[t.FieldDescriptorProto_Type.FIXED64]: m.ScalarType.FIXED64,
					[t.FieldDescriptorProto_Type.FIXED32]: m.ScalarType.FIXED32,
					[t.FieldDescriptorProto_Type.BOOL]: m.ScalarType.BOOL,
					[t.FieldDescriptorProto_Type.STRING]: m.ScalarType.STRING,
					[t.FieldDescriptorProto_Type.GROUP]: void 0,
					[t.FieldDescriptorProto_Type.MESSAGE]: void 0,
					[t.FieldDescriptorProto_Type.BYTES]: m.ScalarType.BYTES,
					[t.FieldDescriptorProto_Type.UINT32]: m.ScalarType.UINT32,
					[t.FieldDescriptorProto_Type.ENUM]: void 0,
					[t.FieldDescriptorProto_Type.SFIXED32]: m.ScalarType.SFIXED32,
					[t.FieldDescriptorProto_Type.SFIXED64]: m.ScalarType.SFIXED64,
					[t.FieldDescriptorProto_Type.SINT32]: m.ScalarType.SINT32,
					[t.FieldDescriptorProto_Type.SINT64]: m.ScalarType.SINT64,
				};
				function D(R, O) {
					if (!R) return { leadingDetached: [], sourcePath: O };
					for (const B of R.location)
						if (
							B.path.length === O.length &&
							!B.path.some((U, z) => O[z] !== U)
						)
							return {
								leadingDetached: B.leadingDetachedComments,
								leading: B.leadingComments,
								trailing: B.trailingComments,
								sourcePath: O,
							};
					return { leadingDetached: [], sourcePath: O };
				}
				var M;
				(function (R) {
					(R[(R.FileDescriptorProto_Package = 2)] =
						"FileDescriptorProto_Package"),
						(R[(R.FileDescriptorProto_MessageType = 4)] =
							"FileDescriptorProto_MessageType"),
						(R[(R.FileDescriptorProto_EnumType = 5)] =
							"FileDescriptorProto_EnumType"),
						(R[(R.FileDescriptorProto_Service = 6)] =
							"FileDescriptorProto_Service"),
						(R[(R.FileDescriptorProto_Extension = 7)] =
							"FileDescriptorProto_Extension"),
						(R[(R.FileDescriptorProto_Syntax = 12)] =
							"FileDescriptorProto_Syntax"),
						(R[(R.DescriptorProto_Field = 2)] = "DescriptorProto_Field"),
						(R[(R.DescriptorProto_NestedType = 3)] =
							"DescriptorProto_NestedType"),
						(R[(R.DescriptorProto_EnumType = 4)] = "DescriptorProto_EnumType"),
						(R[(R.DescriptorProto_Extension = 6)] =
							"DescriptorProto_Extension"),
						(R[(R.DescriptorProto_OneofDecl = 8)] =
							"DescriptorProto_OneofDecl"),
						(R[(R.EnumDescriptorProto_Value = 2)] =
							"EnumDescriptorProto_Value"),
						(R[(R.ServiceDescriptorProto_Method = 2)] =
							"ServiceDescriptorProto_Method");
				})(M || (M = {}));
				function N() {
					const R = [];
					this.repeated && R.push("repeated"),
						this.optional && R.push("optional"),
						(this.kind === "extension" ? this.file : this.parent.file).syntax ==
							"proto2" &&
							this.proto.label === t.FieldDescriptorProto_Label.REQUIRED &&
							R.push("required");
					let B;
					switch (this.fieldKind) {
						case "scalar":
							B = m.ScalarType[this.scalar].toLowerCase();
							break;
						case "enum":
							B = this.enum.typeName;
							break;
						case "message":
							B = this.message.typeName;
							break;
						case "map": {
							const F = m.ScalarType[this.mapKey].toLowerCase();
							let x;
							switch (this.mapValue.kind) {
								case "scalar":
									x = m.ScalarType[this.mapValue.scalar].toLowerCase();
									break;
								case "enum":
									x = this.mapValue.enum.typeName;
									break;
								case "message":
									x = this.mapValue.message.typeName;
									break;
							}
							B = `map<${F}, ${x}>`;
							break;
						}
					}
					R.push(`${B} ${this.name} = ${this.number}`);
					const U = [];
					this.proto.options?.packed !== void 0 &&
						U.push(`packed = ${this.proto.options.packed.toString()}`);
					let z = this.proto.defaultValue;
					return (
						z !== void 0 &&
							((this.proto.type == t.FieldDescriptorProto_Type.BYTES ||
								this.proto.type == t.FieldDescriptorProto_Type.STRING) &&
								(z = '"' + z.replace('"', '\\"') + '"'),
							U.push(`default = ${z}`)),
						this.jsonName !== void 0 &&
							U.push(`json_name = "${this.jsonName}"`),
						this.proto.options?.jstype !== void 0 &&
							U.push(
								`jstype = ${t.FieldOptions_JSType[this.proto.options.jstype]}`,
							),
						this.proto.options?.deprecated === !0 &&
							U.push("deprecated = true"),
						U.length > 0 && R.push("[" + U.join(", ") + "]"),
						R.join(" ")
					);
				}
				function A() {
					const R = this.proto.defaultValue;
					if (R !== void 0)
						switch (this.fieldKind) {
							case "enum":
								return (0, C.parseTextFormatEnumValue)(this.enum, R);
							case "scalar":
								return (0, C.parseTextFormatScalarValue)(this.scalar, R);
							default:
								return;
						}
				}
			},
		),
		