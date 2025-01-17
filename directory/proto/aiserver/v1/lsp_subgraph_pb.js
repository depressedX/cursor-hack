import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1477], he([1, 0, 86]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$jB = e.$iB = e.$hB = e.$gB = void 0);
			class i extends t.Message {
				constructor(m) {
					super(),
						(this.line = 0),
						(this.character = 0),
						t.proto3.util.initPartial(m, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LspSubgraphPosition";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "line", kind: "scalar", T: 5 },
						{ no: 2, name: "character", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(m, r) {
					return new i().fromBinary(m, r);
				}
				static fromJson(m, r) {
					return new i().fromJson(m, r);
				}
				static fromJsonString(m, r) {
					return new i().fromJsonString(m, r);
				}
				static equals(m, r) {
					return t.proto3.util.equals(i, m, r);
				}
			}
			e.$gB = i;
			class w extends t.Message {
				constructor(m) {
					super(),
						(this.startLine = 0),
						(this.startCharacter = 0),
						(this.endLine = 0),
						(this.endCharacter = 0),
						t.proto3.util.initPartial(m, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LspSubgraphRange";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_line", kind: "scalar", T: 5 },
						{ no: 2, name: "start_character", kind: "scalar", T: 5 },
						{ no: 3, name: "end_line", kind: "scalar", T: 5 },
						{ no: 4, name: "end_character", kind: "scalar", T: 5 },
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
			e.$hB = w;
			class E extends t.Message {
				constructor(m) {
					super(),
						(this.type = ""),
						(this.content = ""),
						t.proto3.util.initPartial(m, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LspSubgraphContextItem";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "uri", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "type", kind: "scalar", T: 9 },
						{ no: 3, name: "content", kind: "scalar", T: 9 },
						{ no: 4, name: "range", kind: "message", T: w, opt: !0 },
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
			e.$iB = E;
			class C extends t.Message {
				constructor(m) {
					super(),
						(this.uri = ""),
						(this.symbolName = ""),
						(this.positions = []),
						(this.contextItems = []),
						(this.score = 0),
						t.proto3.util.initPartial(m, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LspSubgraphFullContext";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "uri", kind: "scalar", T: 9 },
						{ no: 2, name: "symbol_name", kind: "scalar", T: 9 },
						{ no: 3, name: "positions", kind: "message", T: i, repeated: !0 },
						{
							no: 4,
							name: "context_items",
							kind: "message",
							T: E,
							repeated: !0,
						},
						{ no: 5, name: "score", kind: "scalar", T: 2 },
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
			e.$jB = C;
		}),
		