/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
define(
	de[1466],
	he([1, 0, 86]),
	function (ce /*require*/, e /*exports*/, t /*protobuf*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$gbb = e.$fbb = e.$ebb = e.$dbb = void 0);
		class i extends t.Message {
			constructor(m) {
				super(),
					(this.data = { case: void 0 }),
					t.proto3.util.initPartial(m, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.EventData";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "string_value",
						kind: "scalar",
						T: 9,
						oneof: "data",
					},
					{ no: 2, name: "int_value", kind: "scalar", T: 3, oneof: "data" },
					{ no: 3, name: "bool_value", kind: "scalar", T: 8, oneof: "data" },
					{
						no: 4,
						name: "double_value",
						kind: "scalar",
						T: 1,
						oneof: "data",
					},
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
		e.$dbb = i;
		class w extends t.Message {
			constructor(m) {
				super(),
					(this.eventName = ""),
					(this.eventData = {}),
					(this.timestamp = t.protoInt64.zero),
					t.proto3.util.initPartial(m, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.AnalyticsEvent";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "event_name", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "event_data",
						kind: "map",
						K: 9,
						V: { kind: "message", T: i },
					},
					{ no: 3, name: "timestamp", kind: "scalar", T: 3 },
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
		e.$ebb = w;
		class E extends t.Message {
			constructor(m) {
				super(), (this.events = []), t.proto3.util.initPartial(m, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.TrackEventsRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "events", kind: "message", T: w, repeated: !0 },
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
		e.$fbb = E;
		class C extends t.Message {
			constructor(m) {
				super(), t.proto3.util.initPartial(m, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.TrackEventsResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
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
		e.$gbb = C;
	},
);
