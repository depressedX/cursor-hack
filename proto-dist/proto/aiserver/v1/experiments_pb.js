/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
define(
	de[1475],
	he([1, 0, 86]),
	function (ce /*require*/, e /*exports*/, t /*protobuf*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$p0 = e.$o0 = e.$n0 = e.$m0 = e.$l0 = e.$k0 = void 0);
		class i extends t.Message {
			constructor(u) {
				super(),
					(this.generateTheWholeThing = !1),
					t.proto3.util.initPartial(u, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.Specedits1Request";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "generate_the_whole_thing", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(u, a) {
				return new i().fromBinary(u, a);
			}
			static fromJson(u, a) {
				return new i().fromJson(u, a);
			}
			static fromJsonString(u, a) {
				return new i().fromJsonString(u, a);
			}
			static equals(u, a) {
				return t.proto3.util.equals(i, u, a);
			}
		}
		e.$k0 = i;
		class w extends t.Message {
			constructor(u) {
				super(), (this.fullFile = ""), t.proto3.util.initPartial(u, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.Specedits1Response";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "full_file", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(u, a) {
				return new w().fromBinary(u, a);
			}
			static fromJson(u, a) {
				return new w().fromJson(u, a);
			}
			static fromJsonString(u, a) {
				return new w().fromJsonString(u, a);
			}
			static equals(u, a) {
				return t.proto3.util.equals(w, u, a);
			}
		}
		e.$l0 = w;
		class E extends t.Message {
			constructor(u) {
				super(), (this.name = ""), t.proto3.util.initPartial(u, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SimpleRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "name", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(u, a) {
				return new E().fromBinary(u, a);
			}
			static fromJson(u, a) {
				return new E().fromJson(u, a);
			}
			static fromJsonString(u, a) {
				return new E().fromJsonString(u, a);
			}
			static equals(u, a) {
				return t.proto3.util.equals(E, u, a);
			}
		}
		e.$m0 = E;
		class C extends t.Message {
			constructor(u) {
				super(), t.proto3.util.initPartial(u, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SimpleResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(u, a) {
				return new C().fromBinary(u, a);
			}
			static fromJson(u, a) {
				return new C().fromJson(u, a);
			}
			static fromJsonString(u, a) {
				return new C().fromJsonString(u, a);
			}
			static equals(u, a) {
				return t.proto3.util.equals(C, u, a);
			}
		}
		e.$n0 = C;
		class d extends t.Message {
			constructor(u) {
				super(), t.proto3.util.initPartial(u, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.EmptyRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(u, a) {
				return new d().fromBinary(u, a);
			}
			static fromJson(u, a) {
				return new d().fromJson(u, a);
			}
			static fromJsonString(u, a) {
				return new d().fromJsonString(u, a);
			}
			static equals(u, a) {
				return t.proto3.util.equals(d, u, a);
			}
		}
		e.$o0 = d;
		class m extends t.Message {
			constructor(u) {
				super(), t.proto3.util.initPartial(u, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.EmptyResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(u, a) {
				return new m().fromBinary(u, a);
			}
			static fromJson(u, a) {
				return new m().fromJson(u, a);
			}
			static fromJsonString(u, a) {
				return new m().fromJsonString(u, a);
			}
			static equals(u, a) {
				return t.proto3.util.equals(m, u, a);
			}
		}
		e.$p0 = m;
	},
);
