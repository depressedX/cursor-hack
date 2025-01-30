import '../../../require.js';
import '../../../exports.js';
import './private/assert.js';
import './google/varint.js';
define(de[525], he([1, 0, 451, 1395]), function (ce /*require*/,
 e /*exports*/,
 t /*assert*/,
 i /*varint*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.protoInt64 = void 0);
			function w() {
				const E = new DataView(new ArrayBuffer(8));
				if (
					typeof BigInt == "function" &&
					typeof E.getBigInt64 == "function" &&
					typeof E.getBigUint64 == "function" &&
					typeof E.setBigInt64 == "function" &&
					typeof E.setBigUint64 == "function" &&
					(typeof process != "object" ||
						typeof process.env != "object" ||
						process.env.BUF_BIGINT_DISABLE !== "1")
				) {
					const r = BigInt("-9223372036854775808"),
						u = BigInt("9223372036854775807"),
						a = BigInt("0"),
						h = BigInt("18446744073709551615");
					return {
						zero: BigInt(0),
						supported: !0,
						parse(c) {
							const n = typeof c == "bigint" ? c : BigInt(c);
							if (n > u || n < r) throw new Error(`int64 invalid: ${c}`);
							return n;
						},
						uParse(c) {
							const n = typeof c == "bigint" ? c : BigInt(c);
							if (n > h || n < a) throw new Error(`uint64 invalid: ${c}`);
							return n;
						},
						enc(c) {
							return (
								E.setBigInt64(0, this.parse(c), !0),
								{ lo: E.getInt32(0, !0), hi: E.getInt32(4, !0) }
							);
						},
						uEnc(c) {
							return (
								E.setBigInt64(0, this.uParse(c), !0),
								{ lo: E.getInt32(0, !0), hi: E.getInt32(4, !0) }
							);
						},
						dec(c, n) {
							return (
								E.setInt32(0, c, !0), E.setInt32(4, n, !0), E.getBigInt64(0, !0)
							);
						},
						uDec(c, n) {
							return (
								E.setInt32(0, c, !0),
								E.setInt32(4, n, !0),
								E.getBigUint64(0, !0)
							);
						},
					};
				}
				const d = (r) =>
						(0, t.assert)(/^-?[0-9]+$/.test(r), `int64 invalid: ${r}`),
					m = (r) => (0, t.assert)(/^[0-9]+$/.test(r), `uint64 invalid: ${r}`);
				return {
					zero: "0",
					supported: !1,
					parse(r) {
						return typeof r != "string" && (r = r.toString()), d(r), r;
					},
					uParse(r) {
						return typeof r != "string" && (r = r.toString()), m(r), r;
					},
					enc(r) {
						return (
							typeof r != "string" && (r = r.toString()),
							d(r),
							(0, i.int64FromString)(r)
						);
					},
					uEnc(r) {
						return (
							typeof r != "string" && (r = r.toString()),
							m(r),
							(0, i.int64FromString)(r)
						);
					},
					dec(r, u) {
						return (0, i.int64ToString)(r, u);
					},
					uDec(r, u) {
						return (0, i.uInt64ToString)(r, u);
					},
				};
			}
			e.protoInt64 = w();
		}),
		