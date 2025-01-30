import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './utils_pb.js';
import './chat_pb.js';
define(de[581], he([1, 0, 86, 83, 126]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*utils_pb*/,
 w /*chat_pb*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$YC =
					e.$XC =
					e.$WC =
					e.$VC =
					e.FastApplySource =
					e.EditFate =
						void 0);
			var E;
			(function (a) {
				(a[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(a[(a.ACCEPTED = 1)] = "ACCEPTED"),
					(a[(a.REJECTED = 2)] = "REJECTED"),
					(a[(a.PARTIALLY_ACCEPTED = 3)] = "PARTIALLY_ACCEPTED");
			})(E || (e.EditFate = E = {})),
				t.proto3.util.setEnumType(E, "aiserver.v1.EditFate", [
					{ no: 0, name: "EDIT_FATE_UNSPECIFIED" },
					{ no: 1, name: "EDIT_FATE_ACCEPTED" },
					{ no: 2, name: "EDIT_FATE_REJECTED" },
					{ no: 3, name: "EDIT_FATE_PARTIALLY_ACCEPTED" },
				]);
			var C;
			(function (a) {
				(a[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(a[(a.COMPOSER = 1)] = "COMPOSER"),
					(a[(a.CLICKED_APPLY = 2)] = "CLICKED_APPLY"),
					(a[(a.CACHED_APPLY = 3)] = "CACHED_APPLY"),
					(a[(a.COMPOSER_AGENT = 4)] = "COMPOSER_AGENT");
			})(C || (e.FastApplySource = C = {})),
				t.proto3.util.setEnumType(C, "aiserver.v1.FastApplySource", [
					{ no: 0, name: "FAST_APPLY_SOURCE_UNSPECIFIED" },
					{ no: 1, name: "FAST_APPLY_SOURCE_COMPOSER" },
					{ no: 2, name: "FAST_APPLY_SOURCE_CLICKED_APPLY" },
					{ no: 3, name: "FAST_APPLY_SOURCE_CACHED_APPLY" },
					{ no: 4, name: "FAST_APPLY_SOURCE_COMPOSER_AGENT" },
				]);
			class d extends t.Message {
				constructor(h) {
					super(), (this.requestId = ""), t.proto3.util.initPartial(h, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReportEditFateRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "request_id", kind: "scalar", T: 9 },
						{
							no: 2,
							name: "fate",
							kind: "enum",
							T: t.proto3.getEnumType(E),
							opt: !0,
						},
						{
							no: 3,
							name: "num_accepted_partial_diffs",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 4,
							name: "num_rejected_partial_diffs",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
					]);
				}
				static fromBinary(h, c) {
					return new d().fromBinary(h, c);
				}
				static fromJson(h, c) {
					return new d().fromJson(h, c);
				}
				static fromJsonString(h, c) {
					return new d().fromJsonString(h, c);
				}
				static equals(h, c) {
					return t.proto3.util.equals(d, h, c);
				}
			}
			e.$VC = d;
			class m extends t.Message {
				constructor(h) {
					super(), t.proto3.util.initPartial(h, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReportEditFateResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(h, c) {
					return new m().fromBinary(h, c);
				}
				static fromJson(h, c) {
					return new m().fromJson(h, c);
				}
				static fromJsonString(h, c) {
					return new m().fromJsonString(h, c);
				}
				static equals(h, c) {
					return t.proto3.util.equals(m, h, c);
				}
			}
			e.$WC = m;
			class r extends t.Message {
				constructor(h) {
					super(),
						(this.conversation = []),
						(this.source = C.UNSPECIFIED),
						(this.willingToPayExtraForSpeed = !1),
						t.proto3.util.initPartial(h, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.WarmApplyRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 2, name: "current_file", kind: "message", T: i.$Ws },
						{
							no: 3,
							name: "conversation",
							kind: "message",
							T: w.$SA,
							repeated: !0,
						},
						{ no: 4, name: "explicit_context", kind: "message", T: i.$6s },
						{ no: 5, name: "source", kind: "enum", T: t.proto3.getEnumType(C) },
						{
							no: 6,
							name: "willing_to_pay_extra_for_speed",
							kind: "scalar",
							T: 8,
						},
					]);
				}
				static fromBinary(h, c) {
					return new r().fromBinary(h, c);
				}
				static fromJson(h, c) {
					return new r().fromJson(h, c);
				}
				static fromJsonString(h, c) {
					return new r().fromJsonString(h, c);
				}
				static equals(h, c) {
					return t.proto3.util.equals(r, h, c);
				}
			}
			e.$XC = r;
			class u extends t.Message {
				constructor(h) {
					super(), t.proto3.util.initPartial(h, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.WarmApplyResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(h, c) {
					return new u().fromBinary(h, c);
				}
				static fromJson(h, c) {
					return new u().fromJson(h, c);
				}
				static fromJsonString(h, c) {
					return new u().fromJsonString(h, c);
				}
				static equals(h, c) {
					return t.proto3.util.equals(u, h, c);
				}
			}
			e.$YC = u;
		}),
		