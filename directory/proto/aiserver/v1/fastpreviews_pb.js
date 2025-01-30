import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './utils_pb.js';
define(de[1481], he([1, 0, 86, 83]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*utils_pb*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$e0 = e.$d0 = e.$c0 = void 0);
			class w extends t.Message {
				constructor(m) {
					super(),
						(this.mainSymbolsToAnalyzeFromGoToDef = []),
						(this.relatedSymbols = []),
						(this.mainSymbolsToAnalyzeFromImplementations = []),
						t.proto3.util.initPartial(m, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamAiPreviewsIntent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "main_symbols_to_analyze_from_go_to_def",
							kind: "message",
							T: i.$_s,
							repeated: !0,
						},
						{
							no: 4,
							name: "main_symbol_hover_details",
							kind: "message",
							T: i.$0s,
						},
						{
							no: 3,
							name: "related_symbols",
							kind: "message",
							T: i.$_s,
							repeated: !0,
						},
						{
							no: 6,
							name: "main_symbols_to_analyze_from_implementations",
							kind: "message",
							T: i.$_s,
							repeated: !0,
						},
					]);
				}
				static fromBinary(m, r) {
					return new w().fromBinary(m, r);
				}
				static fromJson(m, r) {
					return new w().fromJson(m, r);
				}
				static fromJsonString(m, r) {
					return new w().fromJsonString(m, r);
				}
				static equals(m, r) {
					return t.proto3.util.equals(w, m, r);
				}
			}
			e.$c0 = w;
			class E extends t.Message {
				constructor(m) {
					super(), t.proto3.util.initPartial(m, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamAiPreviewsRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "current_file", kind: "message", T: i.$Ws },
						{ no: 2, name: "intent", kind: "message", T: w },
						{ no: 14, name: "model_details", kind: "message", T: i.$Zs },
						{ no: 15, name: "is_detailed", kind: "scalar", T: 8, opt: !0 },
					]);
				}
				static fromBinary(m, r) {
					return new E().fromBinary(m, r);
				}
				static fromJson(m, r) {
					return new E().fromJson(m, r);
				}
				static fromJsonString(m, r) {
					return new E().fromJsonString(m, r);
				}
				static equals(m, r) {
					return t.proto3.util.equals(E, m, r);
				}
			}
			e.$d0 = E;
			class C extends t.Message {
				constructor(m) {
					super(), (this.text = ""), t.proto3.util.initPartial(m, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamAiPreviewsResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "text", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(m, r) {
					return new C().fromBinary(m, r);
				}
				static fromJson(m, r) {
					return new C().fromJson(m, r);
				}
				static fromJsonString(m, r) {
					return new C().fromJsonString(m, r);
				}
				static equals(m, r) {
					return t.proto3.util.equals(C, m, r);
				}
			}
			e.$e0 = C;
		}),
		