import '../../../require.js';
import '../../../exports.js';
import './proto3.js';
import './proto2.js';
import './proto-double.js';
import './proto-int64.js';
import './proto-base64.js';
import './proto-delimited.js';
import './codegen-info.js';
import './message.js';
import './is-message.js';
import './scalar.js';
import './extension-accessor.js';
import './service-type.js';
import './binary-encoding.js';
import './create-descriptor-set.js';
import './create-registry.js';
import './create-registry-from-desc.js';
import './to-plain-message.js';
import './google/protobuf/compiler/plugin_pb.js';
import './google/protobuf/api_pb.js';
import './google/protobuf/any_pb.js';
import './google/protobuf/descriptor_pb.js';
import './google/protobuf/duration_pb.js';
import './google/protobuf/empty_pb.js';
import './google/protobuf/field_mask_pb.js';
import './google/protobuf/source_context_pb.js';
import './google/protobuf/struct_pb.js';
import './google/protobuf/timestamp_pb.js';
import './google/protobuf/type_pb.js';
import './google/protobuf/wrappers_pb.js';
define(
		de[2043],
		he([
			1, 0, 406, 874, 2030, 525, 1084, 2031, 2033, 339, 524, 429, 1398, 1408,
			1085, 1409, 2027, 2041, 2042, 2038, 2040, 875, 724, 1401, 1402, 1403,
			1088, 1404, 1405, 1406, 1407,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*proto3*/,
			i /*proto2*/,
			w /*proto-double*/,
			E /*proto-int64*/,
			C /*proto-base64*/,
			d /*proto-delimited*/,
			m /*codegen-info*/,
			r /*message*/,
			u /*is-message*/,
			a /*scalar*/,
			h /*extension-accessor*/,
			c /*service-type*/,
			n /*binary-encoding*/,
			g /*create-descriptor-set*/,
			p /*create-registry*/,
			o /*create-registry-from-desc*/,
			f /*to-plain-message*/,
			b /*plugin_pb*/,
			s /*api_pb*/,
			l /*any_pb*/,
			y /*descriptor_pb*/,
			$ /*duration_pb*/,
			v /*empty_pb*/,
			S /*field_mask_pb*/,
			I /*source_context_pb*/,
			T /*struct_pb*/,
			P /*timestamp_pb*/,
			k /*type_pb*/,
			L /*wrappers_pb*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.toPlainMessage =
					e.createRegistryFromDescriptors =
					e.createRegistry =
					e.createDescriptorSet =
					e.BinaryReader =
					e.BinaryWriter =
					e.WireType =
					e.MethodIdempotency =
					e.MethodKind =
					e.clearExtension =
					e.hasExtension =
					e.setExtension =
					e.getExtension =
					e.ScalarType =
					e.LongType =
					e.isMessage =
					e.Message =
					e.codegenInfo =
					e.protoDelimited =
					e.protoBase64 =
					e.protoInt64 =
					e.protoDouble =
					e.proto2 =
					e.proto3 =
						void 0),
				Object.defineProperty(e, "proto3", {
					enumerable: !0,
					get: function () {
						return t.proto3;
					},
				}),
				Object.defineProperty(e, "proto2", {
					enumerable: !0,
					get: function () {
						return i.proto2;
					},
				}),
				Object.defineProperty(e, "protoDouble", {
					enumerable: !0,
					get: function () {
						return w.protoDouble;
					},
				}),
				Object.defineProperty(e, "protoInt64", {
					enumerable: !0,
					get: function () {
						return E.protoInt64;
					},
				}),
				Object.defineProperty(e, "protoBase64", {
					enumerable: !0,
					get: function () {
						return C.protoBase64;
					},
				}),
				Object.defineProperty(e, "protoDelimited", {
					enumerable: !0,
					get: function () {
						return d.protoDelimited;
					},
				}),
				Object.defineProperty(e, "codegenInfo", {
					enumerable: !0,
					get: function () {
						return m.codegenInfo;
					},
				}),
				Object.defineProperty(e, "Message", {
					enumerable: !0,
					get: function () {
						return r.Message;
					},
				}),
				Object.defineProperty(e, "isMessage", {
					enumerable: !0,
					get: function () {
						return u.isMessage;
					},
				}),
				Object.defineProperty(e, "LongType", {
					enumerable: !0,
					get: function () {
						return a.LongType;
					},
				}),
				Object.defineProperty(e, "ScalarType", {
					enumerable: !0,
					get: function () {
						return a.ScalarType;
					},
				}),
				Object.defineProperty(e, "getExtension", {
					enumerable: !0,
					get: function () {
						return h.getExtension;
					},
				}),
				Object.defineProperty(e, "setExtension", {
					enumerable: !0,
					get: function () {
						return h.setExtension;
					},
				}),
				Object.defineProperty(e, "hasExtension", {
					enumerable: !0,
					get: function () {
						return h.hasExtension;
					},
				}),
				Object.defineProperty(e, "clearExtension", {
					enumerable: !0,
					get: function () {
						return h.clearExtension;
					},
				}),
				Object.defineProperty(e, "MethodKind", {
					enumerable: !0,
					get: function () {
						return c.MethodKind;
					},
				}),
				Object.defineProperty(e, "MethodIdempotency", {
					enumerable: !0,
					get: function () {
						return c.MethodIdempotency;
					},
				}),
				Object.defineProperty(e, "WireType", {
					enumerable: !0,
					get: function () {
						return n.WireType;
					},
				}),
				Object.defineProperty(e, "BinaryWriter", {
					enumerable: !0,
					get: function () {
						return n.BinaryWriter;
					},
				}),
				Object.defineProperty(e, "BinaryReader", {
					enumerable: !0,
					get: function () {
						return n.BinaryReader;
					},
				}),
				Object.defineProperty(e, "createDescriptorSet", {
					enumerable: !0,
					get: function () {
						return g.createDescriptorSet;
					},
				}),
				Object.defineProperty(e, "createRegistry", {
					enumerable: !0,
					get: function () {
						return p.createRegistry;
					},
				}),
				Object.defineProperty(e, "createRegistryFromDescriptors", {
					enumerable: !0,
					get: function () {
						return o.createRegistryFromDescriptors;
					},
				}),
				Object.defineProperty(e, "toPlainMessage", {
					enumerable: !0,
					get: function () {
						return f.toPlainMessage;
					},
				}),
				Yi(b, e),
				Yi(s, e),
				Yi(l, e),
				Yi(y, e),
				Yi($, e),
				Yi(v, e),
				Yi(S, e),
				Yi(I, e),
				Yi(T, e),
				Yi(P, e),
				Yi(k, e),
				Yi(L, e);
		},
	);
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	