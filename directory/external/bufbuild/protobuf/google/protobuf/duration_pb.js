import '../../../../../require.js';
import '../../../../../exports.js';
import '../../message.js';
import '../../proto-int64.js';
import '../../proto3.js';
define(de[1401], he([1, 0, 339, 525, 406]), function (ce /*require*/,
 e /*exports*/,
 t /*message*/,
 i /*proto-int64*/,
 w /*proto3*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Duration = void 0);
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
							`cannot decode google.protobuf.Duration from JSON: ${w.proto3.json.debug(d)}`,
						);
					const r = d.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
					if (r === null)
						throw new Error(
							`cannot decode google.protobuf.Duration from JSON: ${w.proto3.json.debug(d)}`,
						);
					const u = Number(r[1]);
					if (u > 315576e6 || u < -315576e6)
						throw new Error(
							`cannot decode google.protobuf.Duration from JSON: ${w.proto3.json.debug(d)}`,
						);
					if (
						((this.seconds = i.protoInt64.parse(u)), typeof r[2] == "string")
					) {
						const a = r[2] + "0".repeat(9 - r[2].length);
						(this.nanos = parseInt(a)),
							(u < 0 || Object.is(u, -0)) && (this.nanos = -this.nanos);
					}
					return this;
				}
				toJson(d) {
					if (
						Number(this.seconds) > 315576e6 ||
						Number(this.seconds) < -315576e6
					)
						throw new Error(
							"cannot encode google.protobuf.Duration to JSON: value out of range",
						);
					let m = this.seconds.toString();
					if (this.nanos !== 0) {
						let r = Math.abs(this.nanos).toString();
						(r = "0".repeat(9 - r.length) + r),
							r.substring(3) === "000000"
								? (r = r.substring(0, 3))
								: r.substring(6) === "000" && (r = r.substring(0, 6)),
							(m += "." + r),
							this.nanos < 0 && Number(this.seconds) == 0 && (m = "-" + m);
					}
					return m + "s";
				}
				static {
					this.runtime = w.proto3;
				}
				static {
					this.typeName = "google.protobuf.Duration";
				}
				static {
					this.fields = w.proto3.util.newFieldList(() => [
						{ no: 1, name: "seconds", kind: "scalar", T: 3 },
						{ no: 2, name: "nanos", kind: "scalar", T: 5 },
					]);
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
			e.Duration = E;
		})
