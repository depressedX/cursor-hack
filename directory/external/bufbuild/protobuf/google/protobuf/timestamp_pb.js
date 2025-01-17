import '../../../../../require.js';
import '../../../../../exports.js';
import '../../message.js';
import '../../proto-int64.js';
import '../../proto3.js';
define(de[1405], he([1, 0, 339, 525, 406]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Timestamp = void 0);
			class E extends t.Message {
				constructor(d) {
					super(),
						(this.seconds = i.protoInt64.zero),
						(this.nanos = 0),
						w.proto3.util.initPartial(d, this);
				}
				fromJson(d, m) {
					if (typeof d != "string")
						throw new Error(
							`cannot decode google.protobuf.Timestamp from JSON: ${w.proto3.json.debug(d)}`,
						);
					const r = d.match(
						/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/,
					);
					if (!r)
						throw new Error(
							"cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
						);
					const u = Date.parse(
						r[1] +
							"-" +
							r[2] +
							"-" +
							r[3] +
							"T" +
							r[4] +
							":" +
							r[5] +
							":" +
							r[6] +
							(r[8] ? r[8] : "Z"),
					);
					if (Number.isNaN(u))
						throw new Error(
							"cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
						);
					if (
						u < Date.parse("0001-01-01T00:00:00Z") ||
						u > Date.parse("9999-12-31T23:59:59Z")
					)
						throw new Error(
							"cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
						);
					return (
						(this.seconds = i.protoInt64.parse(u / 1e3)),
						(this.nanos = 0),
						r[7] &&
							(this.nanos =
								parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9),
						this
					);
				}
				toJson(d) {
					const m = Number(this.seconds) * 1e3;
					if (
						m < Date.parse("0001-01-01T00:00:00Z") ||
						m > Date.parse("9999-12-31T23:59:59Z")
					)
						throw new Error(
							"cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
						);
					if (this.nanos < 0)
						throw new Error(
							"cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative",
						);
					let r = "Z";
					if (this.nanos > 0) {
						const u = (this.nanos + 1e9).toString().substring(1);
						u.substring(3) === "000000"
							? (r = "." + u.substring(0, 3) + "Z")
							: u.substring(6) === "000"
								? (r = "." + u.substring(0, 6) + "Z")
								: (r = "." + u + "Z");
					}
					return new Date(m).toISOString().replace(".000Z", r);
				}
				toDate() {
					return new Date(
						Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6),
					);
				}
				static {
					this.runtime = w.proto3;
				}
				static {
					this.typeName = "google.protobuf.Timestamp";
				}
				static {
					this.fields = w.proto3.util.newFieldList(() => [
						{ no: 1, name: "seconds", kind: "scalar", T: 3 },
						{ no: 2, name: "nanos", kind: "scalar", T: 5 },
					]);
				}
				static now() {
					return E.fromDate(new Date());
				}
				static fromDate(d) {
					const m = d.getTime();
					return new E({
						seconds: i.protoInt64.parse(Math.floor(m / 1e3)),
						nanos: (m % 1e3) * 1e6,
					});
				}
				static fromBinary(d, m) {
					return new E().fromBinary(d, m);
				}
				static fromJson(d, m) {
					return new E().fromJson(d, m);
				}
				static fromJsonString(d, m) {
					return new E().fromJsonString(d, m);
				}
				static equals(d, m) {
					return w.proto3.util.equals(E, d, m);
				}
			}
			e.Timestamp = E;
		}),
		