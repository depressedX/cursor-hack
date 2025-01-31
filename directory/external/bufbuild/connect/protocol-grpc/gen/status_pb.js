import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../protobuf.js';
define(de[2050], he([1, 0, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Status = void 0);
			class i extends t.Message {
				constructor(E) {
					super(),
						(this.code = 0),
						(this.message = ""),
						(this.details = []),
						t.proto3.util.initPartial(E, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "google.rpc.Status";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "code", kind: "scalar", T: 5 },
						{ no: 2, name: "message", kind: "scalar", T: 9 },
						{ no: 3, name: "details", kind: "message", T: t.Any, repeated: !0 },
					]);
				}
				static fromBinary(E, C) {
					return new i().fromBinary(E, C);
				}
				static fromJson(E, C) {
					return new i().fromJson(E, C);
				}
				static fromJsonString(E, C) {
					return new i().fromJsonString(E, C);
				}
				static equals(E, C) {
					return t.proto3.util.equals(i, E, C);
				}
			}
			e.Status = i;
		})
