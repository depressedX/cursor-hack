import '../../../../require.js';
import '../../../../exports.js';
import './assert.js';
import '../proto-int64.js';
import '../scalar.js';
define(de[2036], he([1, 0, 451, 525, 429]), function (ce /*require*/,
 e /*exports*/,
 t /*assert*/,
 i /*proto-int64*/,
 w /*scalar*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.parseTextFormatEnumValue = E),
				(e.parseTextFormatScalarValue = C);
			function E(m, r) {
				const u = m.values.find((a) => a.name === r);
				return (
					(0, t.assert)(u, `cannot parse ${m.name} default value: ${r}`),
					u.number
				);
			}
			function C(m, r) {
				switch (m) {
					case w.ScalarType.STRING:
						return r;
					case w.ScalarType.BYTES: {
						const u = d(r);
						if (u === !1)
							throw new Error(
								`cannot parse ${w.ScalarType[m]} default value: ${r}`,
							);
						return u;
					}
					case w.ScalarType.INT64:
					case w.ScalarType.SFIXED64:
					case w.ScalarType.SINT64:
						return i.protoInt64.parse(r);
					case w.ScalarType.UINT64:
					case w.ScalarType.FIXED64:
						return i.protoInt64.uParse(r);
					case w.ScalarType.DOUBLE:
					case w.ScalarType.FLOAT:
						switch (r) {
							case "inf":
								return Number.POSITIVE_INFINITY;
							case "-inf":
								return Number.NEGATIVE_INFINITY;
							case "nan":
								return Number.NaN;
							default:
								return parseFloat(r);
						}
					case w.ScalarType.BOOL:
						return r === "true";
					case w.ScalarType.INT32:
					case w.ScalarType.UINT32:
					case w.ScalarType.SINT32:
					case w.ScalarType.FIXED32:
					case w.ScalarType.SFIXED32:
						return parseInt(r, 10);
				}
			}
			function d(m) {
				const r = [],
					u = {
						tail: m,
						c: "",
						next() {
							return this.tail.length == 0
								? !1
								: ((this.c = this.tail[0]),
									(this.tail = this.tail.substring(1)),
									!0);
						},
						take(a) {
							if (this.tail.length >= a) {
								const h = this.tail.substring(0, a);
								return (this.tail = this.tail.substring(a)), h;
							}
							return !1;
						},
					};
				for (; u.next(); )
					switch (u.c) {
						case "\\":
							if (u.next())
								switch (u.c) {
									case "\\":
										r.push(u.c.charCodeAt(0));
										break;
									case "b":
										r.push(8);
										break;
									case "f":
										r.push(12);
										break;
									case "n":
										r.push(10);
										break;
									case "r":
										r.push(13);
										break;
									case "t":
										r.push(9);
										break;
									case "v":
										r.push(11);
										break;
									case "0":
									case "1":
									case "2":
									case "3":
									case "4":
									case "5":
									case "6":
									case "7": {
										const a = u.c,
											h = u.take(2);
										if (h === !1) return !1;
										const c = parseInt(a + h, 8);
										if (isNaN(c)) return !1;
										r.push(c);
										break;
									}
									case "x": {
										const a = u.c,
											h = u.take(2);
										if (h === !1) return !1;
										const c = parseInt(a + h, 16);
										if (isNaN(c)) return !1;
										r.push(c);
										break;
									}
									case "u": {
										const a = u.c,
											h = u.take(4);
										if (h === !1) return !1;
										const c = parseInt(a + h, 16);
										if (isNaN(c)) return !1;
										const n = new Uint8Array(4);
										new DataView(n.buffer).setInt32(0, c, !0),
											r.push(n[0], n[1], n[2], n[3]);
										break;
									}
									case "U": {
										const a = u.c,
											h = u.take(8);
										if (h === !1) return !1;
										const c = i.protoInt64.uEnc(a + h),
											n = new Uint8Array(8),
											g = new DataView(n.buffer);
										g.setInt32(0, c.lo, !0),
											g.setInt32(4, c.hi, !0),
											r.push(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7]);
										break;
									}
								}
							break;
						default:
							r.push(u.c.charCodeAt(0));
					}
				return new Uint8Array(r);
			}
		})
