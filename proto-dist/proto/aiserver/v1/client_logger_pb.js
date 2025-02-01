/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
define(
	de[1470],
	he([1, 0, 86]),
	function (ce /*require*/, e /*exports*/, t /*protobuf*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$$_ = e.$0_ = void 0);
		class i extends t.Message {
			constructor(C) {
				super(), (this.stackTrace = ""), t.proto3.util.initPartial(C, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.LogWhenTabTurnsOffRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "stack_trace", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(C, d) {
				return new i().fromBinary(C, d);
			}
			static fromJson(C, d) {
				return new i().fromJson(C, d);
			}
			static fromJsonString(C, d) {
				return new i().fromJsonString(C, d);
			}
			static equals(C, d) {
				return t.proto3.util.equals(i, C, d);
			}
		}
		e.$0_ = i;
		class w extends t.Message {
			constructor(C) {
				super(), t.proto3.util.initPartial(C, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.LogWhenTabTurnsOffResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(C, d) {
				return new w().fromBinary(C, d);
			}
			static fromJson(C, d) {
				return new w().fromJson(C, d);
			}
			static fromJsonString(C, d) {
				return new w().fromJsonString(C, d);
			}
			static equals(C, d) {
				return t.proto3.util.equals(w, C, d);
			}
		}
		e.$$_ = w;
	},
);
