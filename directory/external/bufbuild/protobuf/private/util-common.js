import '../../../../require.js';
import '../../../../exports.js';
import './enum.js';
import './scalars.js';
import '../scalar.js';
import '../is-message.js';
define(
			de[2037],
			he([1, 0, 1083, 526, 429, 524]),
			function (ce /*require*/,
 e /*exports*/,
 t /*enum*/,
 i /*scalars*/,
 w /*scalar*/,
 E /*is-message*/) {
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
		)
