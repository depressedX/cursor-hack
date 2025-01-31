import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
define(de[2165], he([1, 0, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$fab = e.$eab = e.$dab = e.$cab = e.$bab = e.$aab = void 0);
			class i extends t.Message {
				constructor(u) {
					super(), (this.authId = ""), t.proto3.util.initPartial(u, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DeleteUserRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "auth_id", kind: "scalar", T: 9 },
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
			e.$aab = i;
			class w extends t.Message {
				constructor(u) {
					super(), t.proto3.util.initPartial(u, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DeleteUserResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
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
			e.$bab = w;
			class E extends t.Message {
				constructor(u) {
					super(), t.proto3.util.initPartial(u, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RunTailscaleSSHRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
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
			e.$cab = E;
			class C extends t.Message {
				constructor(u) {
					super(), t.proto3.util.initPartial(u, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RunTailscaleSSHResponse";
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
			e.$dab = C;
			class d extends t.Message {
				constructor(u) {
					super(),
						(this.teamId = 0),
						(this.authIds = []),
						(this.workosIds = []),
						t.proto3.util.initPartial(u, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AddAuthIdsToTeamRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "team_id", kind: "scalar", T: 5 },
						{ no: 2, name: "auth_ids", kind: "scalar", T: 9, repeated: !0 },
						{ no: 3, name: "workos_ids", kind: "scalar", T: 9, repeated: !0 },
					]);
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
			e.$eab = d;
			class m extends t.Message {
				constructor(u) {
					super(), t.proto3.util.initPartial(u, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AddAuthIdsToTeamResponse";
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
			e.$fab = m;
		})
