/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
define(
	de[1473],
	he([1, 0, 86]),
	function (ce /*require*/, e /*exports*/, t /*protobuf*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.CursorPredictionConfigResponse_Heuristic =
				e.$Lab =
				e.$Kab =
				e.$Jab =
					void 0);
		class i extends t.Message {
			constructor(m) {
				super(), t.proto3.util.initPartial(m, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CursorPredictionConfigRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
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
		e.$Jab = i;
		class w extends t.Message {
			constructor(m) {
				super(),
					(this.name = ""),
					(this.radius = 0),
					t.proto3.util.initPartial(m, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CursorPredictionModel";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "name", kind: "scalar", T: 9 },
					{ no: 2, name: "radius", kind: "scalar", T: 5 },
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
		e.$Kab = w;
		class E extends t.Message {
			constructor(m) {
				super(),
					(this.models = []),
					(this.defaultModel = ""),
					(this.heuristics = []),
					t.proto3.util.initPartial(m, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CursorPredictionConfigResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "models", kind: "message", T: w, repeated: !0 },
					{ no: 2, name: "default_model", kind: "scalar", T: 9 },
					{
						no: 3,
						name: "heuristics",
						kind: "enum",
						T: t.proto3.getEnumType(C),
						repeated: !0,
					},
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
		e.$Lab = E;
		var C;
		(function (d) {
			(d[(d.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				(d[(d.DISABLE_IN_LAST_CPP_SUGGESTION = 1)] =
					"DISABLE_IN_LAST_CPP_SUGGESTION");
		})(C || (e.CursorPredictionConfigResponse_Heuristic = C = {})),
			t.proto3.util.setEnumType(
				C,
				"aiserver.v1.CursorPredictionConfigResponse.Heuristic",
				[
					{ no: 0, name: "HEURISTIC_UNSPECIFIED" },
					{ no: 1, name: "HEURISTIC_DISABLE_IN_LAST_CPP_SUGGESTION" },
				],
			);
	},
);
