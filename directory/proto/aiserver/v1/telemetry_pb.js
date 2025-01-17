import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1479], he([1, 0, 86]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$j0 = e.$i0 = e.$h0 = e.$g0 = e.$f0 = void 0);
			class i extends t.Message {
				constructor(r) {
					super(),
						(this.action = ""),
						(this.generationUuid = ""),
						t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReportInlineActionRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "action", kind: "scalar", T: 9 },
						{ no: 2, name: "generation_uuid", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(r, u) {
					return new i().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new i().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new i().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(i, r, u);
				}
			}
			e.$f0 = i;
			class w extends t.Message {
				constructor(r) {
					super(), t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReportInlineActionResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(r, u) {
					return new w().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new w().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new w().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(w, r, u);
				}
			}
			e.$g0 = w;
			class E extends t.Message {
				constructor(r) {
					super(), (this.metrics = {}), t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReportMetricsRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "metrics",
							kind: "map",
							K: 9,
							V: { kind: "message", T: C },
						},
					]);
				}
				static fromBinary(r, u) {
					return new E().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new E().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new E().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(E, r, u);
				}
			}
			e.$h0 = E;
			class C extends t.Message {
				constructor(r) {
					super(), (this.tags = {}), t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReportMetricsRequest.Metric";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "value", kind: "scalar", T: 1, opt: !0 },
						{
							no: 2,
							name: "tags",
							kind: "map",
							K: 9,
							V: { kind: "scalar", T: 9 },
						},
					]);
				}
				static fromBinary(r, u) {
					return new C().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new C().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new C().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(C, r, u);
				}
			}
			e.$i0 = C;
			class d extends t.Message {
				constructor(r) {
					super(), t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReportMetricsResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(r, u) {
					return new d().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new d().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new d().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(d, r, u);
				}
			}
			e.$j0 = d;
		}),
		