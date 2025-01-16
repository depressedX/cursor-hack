define(de[2036], he([1, 0, 451, 525, 429]), function (ce, e, t, i, w) {
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
		}),
		define(
			de[2037],
			he([1, 0, 1083, 526, 429, 524]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.makeUtilCommon = C);
				function C() {
					return {
						setEnumType: t.setEnumType,
						initPartial(r, u) {
							if (r === void 0) return;
							const a = u.getType();
							for (const h of a.fields.byMember()) {
								const c = h.localName,
									n = u,
									g = r;
								if (g[c] != null)
									switch (h.kind) {
										case "oneof":
											const p = g[c].case;
											if (p === void 0) continue;
											const o = h.findField(p);
											let f = g[c].value;
											o && o.kind == "message" && !(0, E.isMessage)(f, o.T)
												? (f = new o.T(f))
												: o &&
													o.kind === "scalar" &&
													o.T === w.ScalarType.BYTES &&
													(f = m(f)),
												(n[c] = { case: p, value: f });
											break;
										case "scalar":
										case "enum":
											let b = g[c];
											h.T === w.ScalarType.BYTES &&
												(b = h.repeated ? b.map(m) : m(b)),
												(n[c] = b);
											break;
										case "map":
											switch (h.V.kind) {
												case "scalar":
												case "enum":
													if (h.V.T === w.ScalarType.BYTES)
														for (const [y, $] of Object.entries(g[c]))
															n[c][y] = m($);
													else Object.assign(n[c], g[c]);
													break;
												case "message":
													const l = h.V.T;
													for (const y of Object.keys(g[c])) {
														let $ = g[c][y];
														l.fieldWrapper || ($ = new l($)), (n[c][y] = $);
													}
													break;
											}
											break;
										case "message":
											const s = h.T;
											if (h.repeated)
												n[c] = g[c].map((l) =>
													(0, E.isMessage)(l, s) ? l : new s(l),
												);
											else {
												const l = g[c];
												s.fieldWrapper
													? s.typeName === "google.protobuf.BytesValue"
														? (n[c] = m(l))
														: (n[c] = l)
													: (n[c] = (0, E.isMessage)(l, s) ? l : new s(l));
											}
											break;
									}
							}
						},
						equals(r, u, a) {
							return u === a
								? !0
								: !u || !a
									? !1
									: r.fields.byMember().every((h) => {
											const c = u[h.localName],
												n = a[h.localName];
											if (h.repeated) {
												if (c.length !== n.length) return !1;
												switch (h.kind) {
													case "message":
														return c.every((g, p) => h.T.equals(g, n[p]));
													case "scalar":
														return c.every((g, p) =>
															(0, i.scalarEquals)(h.T, g, n[p]),
														);
													case "enum":
														return c.every((g, p) =>
															(0, i.scalarEquals)(w.ScalarType.INT32, g, n[p]),
														);
												}
												throw new Error(`repeated cannot contain ${h.kind}`);
											}
											switch (h.kind) {
												case "message":
													return h.T.equals(c, n);
												case "enum":
													return (0, i.scalarEquals)(w.ScalarType.INT32, c, n);
												case "scalar":
													return (0, i.scalarEquals)(h.T, c, n);
												case "oneof":
													if (c.case !== n.case) return !1;
													const g = h.findField(c.case);
													if (g === void 0) return !0;
													switch (g.kind) {
														case "message":
															return g.T.equals(c.value, n.value);
														case "enum":
															return (0, i.scalarEquals)(
																w.ScalarType.INT32,
																c.value,
																n.value,
															);
														case "scalar":
															return (0, i.scalarEquals)(g.T, c.value, n.value);
													}
													throw new Error(`oneof cannot contain ${g.kind}`);
												case "map":
													const p = Object.keys(c).concat(Object.keys(n));
													switch (h.V.kind) {
														case "message":
															const o = h.V.T;
															return p.every((b) => o.equals(c[b], n[b]));
														case "enum":
															return p.every((b) =>
																(0, i.scalarEquals)(
																	w.ScalarType.INT32,
																	c[b],
																	n[b],
																),
															);
														case "scalar":
															const f = h.V.T;
															return p.every((b) =>
																(0, i.scalarEquals)(f, c[b], n[b]),
															);
													}
													break;
											}
										});
						},
						clone(r) {
							const u = r.getType(),
								a = new u(),
								h = a;
							for (const c of u.fields.byMember()) {
								const n = r[c.localName];
								let g;
								if (c.repeated) g = n.map(d);
								else if (c.kind == "map") {
									g = h[c.localName];
									for (const [p, o] of Object.entries(n)) g[p] = d(o);
								} else
									c.kind == "oneof"
										? (g = c.findField(n.case)
												? { case: n.case, value: d(n.value) }
												: { case: void 0 })
										: (g = d(n));
								h[c.localName] = g;
							}
							for (const c of u.runtime.bin.listUnknownFields(r))
								u.runtime.bin.onUnknownField(h, c.no, c.wireType, c.data);
							return a;
						},
					};
				}
				function d(r) {
					if (r === void 0) return r;
					if ((0, E.isMessage)(r)) return r.clone();
					if (r instanceof Uint8Array) {
						const u = new Uint8Array(r.byteLength);
						return u.set(r), u;
					}
					return r;
				}
				function m(r) {
					return r instanceof Uint8Array ? r : new Uint8Array(r);
				}
			},
		),
		define(
			de[1400],
			he([1, 0, 1083, 2028, 1087, 2035, 2034, 2037]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.makeProtoRuntime = m);
				function m(r, u, a) {
					return {
						syntax: r,
						json: (0, E.makeJsonFormat)(),
						bin: (0, C.makeBinaryFormat)(),
						util: {
							...(0, d.makeUtilCommon)(),
							newFieldList: u,
							initFields: a,
						},
						makeMessageType(h, c, n) {
							return (0, i.makeMessageType)(this, h, c, n);
						},
						makeEnum: t.makeEnum,
						makeEnumType: t.makeEnumType,
						getEnumType: t.getEnumType,
						makeExtension(h, c, n) {
							return (0, w.makeExtension)(this, h, c, n);
						},
					};
				}
			},
		),
		