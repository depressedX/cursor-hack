import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../message.js';
import '../../../proto2.js';
import '../descriptor_pb.js';
define(de[2038], he([1, 0, 339, 874, 724]), function (ce /*require*/,
 e /*exports*/,
 t /*message*/,
 i /*proto2*/,
 w /*descriptor_pb*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.CodeGeneratorResponse_File =
					e.CodeGeneratorResponse_Feature =
					e.CodeGeneratorResponse =
					e.CodeGeneratorRequest =
					e.Version =
						void 0);
			class E extends t.Message {
				constructor(a) {
					super(), i.proto2.util.initPartial(a, this);
				}
				static {
					this.runtime = i.proto2;
				}
				static {
					this.typeName = "google.protobuf.compiler.Version";
				}
				static {
					this.fields = i.proto2.util.newFieldList(() => [
						{ no: 1, name: "major", kind: "scalar", T: 5, opt: !0 },
						{ no: 2, name: "minor", kind: "scalar", T: 5, opt: !0 },
						{ no: 3, name: "patch", kind: "scalar", T: 5, opt: !0 },
						{ no: 4, name: "suffix", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(a, h) {
					return new E().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new E().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new E().fromJsonString(a, h);
				}
				static equals(a, h) {
					return i.proto2.util.equals(E, a, h);
				}
			}
			e.Version = E;
			class C extends t.Message {
				constructor(a) {
					super(),
						(this.fileToGenerate = []),
						(this.protoFile = []),
						(this.sourceFileDescriptors = []),
						i.proto2.util.initPartial(a, this);
				}
				static {
					this.runtime = i.proto2;
				}
				static {
					this.typeName = "google.protobuf.compiler.CodeGeneratorRequest";
				}
				static {
					this.fields = i.proto2.util.newFieldList(() => [
						{
							no: 1,
							name: "file_to_generate",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{ no: 2, name: "parameter", kind: "scalar", T: 9, opt: !0 },
						{
							no: 15,
							name: "proto_file",
							kind: "message",
							T: w.FileDescriptorProto,
							repeated: !0,
						},
						{
							no: 17,
							name: "source_file_descriptors",
							kind: "message",
							T: w.FileDescriptorProto,
							repeated: !0,
						},
						{ no: 3, name: "compiler_version", kind: "message", T: E, opt: !0 },
					]);
				}
				static fromBinary(a, h) {
					return new C().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new C().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new C().fromJsonString(a, h);
				}
				static equals(a, h) {
					return i.proto2.util.equals(C, a, h);
				}
			}
			e.CodeGeneratorRequest = C;
			class d extends t.Message {
				constructor(a) {
					super(), (this.file = []), i.proto2.util.initPartial(a, this);
				}
				static {
					this.runtime = i.proto2;
				}
				static {
					this.typeName = "google.protobuf.compiler.CodeGeneratorResponse";
				}
				static {
					this.fields = i.proto2.util.newFieldList(() => [
						{ no: 1, name: "error", kind: "scalar", T: 9, opt: !0 },
						{
							no: 2,
							name: "supported_features",
							kind: "scalar",
							T: 4,
							opt: !0,
						},
						{ no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: !0 },
						{ no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: !0 },
						{ no: 15, name: "file", kind: "message", T: r, repeated: !0 },
					]);
				}
				static fromBinary(a, h) {
					return new d().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new d().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new d().fromJsonString(a, h);
				}
				static equals(a, h) {
					return i.proto2.util.equals(d, a, h);
				}
			}
			e.CodeGeneratorResponse = d;
			var m;
			(function (u) {
				(u[(u.NONE = 0)] = "NONE"),
					(u[(u.PROTO3_OPTIONAL = 1)] = "PROTO3_OPTIONAL"),
					(u[(u.SUPPORTS_EDITIONS = 2)] = "SUPPORTS_EDITIONS");
			})(m || (e.CodeGeneratorResponse_Feature = m = {})),
				i.proto2.util.setEnumType(
					m,
					"google.protobuf.compiler.CodeGeneratorResponse.Feature",
					[
						{ no: 0, name: "FEATURE_NONE" },
						{ no: 1, name: "FEATURE_PROTO3_OPTIONAL" },
						{ no: 2, name: "FEATURE_SUPPORTS_EDITIONS" },
					],
				);
			class r extends t.Message {
				constructor(a) {
					super(), i.proto2.util.initPartial(a, this);
				}
				static {
					this.runtime = i.proto2;
				}
				static {
					this.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File";
				}
				static {
					this.fields = i.proto2.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: !0 },
						{ no: 15, name: "content", kind: "scalar", T: 9, opt: !0 },
						{
							no: 16,
							name: "generated_code_info",
							kind: "message",
							T: w.GeneratedCodeInfo,
							opt: !0,
						},
					]);
				}
				static fromBinary(a, h) {
					return new r().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new r().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new r().fromJsonString(a, h);
				}
				static equals(a, h) {
					return i.proto2.util.equals(r, a, h);
				}
			}
			e.CodeGeneratorResponse_File = r;
		}),
		