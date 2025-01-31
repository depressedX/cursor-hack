import '../../../../require.js';
import '../../../../exports.js';
import './assert.js';
import '../proto-int64.js';
import '../proto-base64.js';
import './extensions.js';
import '../extension-accessor.js';
import './reflect.js';
import './field-wrapper.js';
import './scalars.js';
import './scalars.js';
import '../scalar.js';
import '../is-message.js';
define(
			de[2035],
			he([1, 0, 451, 525, 1084, 1087, 1398, 1399, 1086, 526, 526, 429, 524]),
			function (ce /*require*/,
 e /*exports*/,
 t /*assert*/,
 i /*proto-int64*/,
 w /*proto-base64*/,
 E /*extensions*/,
 C /*extension-accessor*/,
 d /*reflect*/,
 m /*field-wrapper*/,
 r /*scalars*/,
 u /*scalars*/,
 a /*scalar*/,
 h /*is-message*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.makeJsonFormat = b);
				const c = { ignoreUnknownFields: !1 },
					n = {
						emitDefaultValues: !1,
						enumAsInteger: !1,
						useProtoFieldName: !1,
						prettySpaces: 0,
					};
				function g(k) {
					return k ? { ...c, ...k } : c;
				}
				function p(k) {
					return k ? { ...n, ...k } : n;
				}
				const o = Symbol(),
					f = Symbol();
				function b() {
					return {
						makeReadOptions: g,
						makeWriteOptions: p,
						readMessage(k, L, D, M) {
							if (L == null || Array.isArray(L) || typeof L != "object")
								throw new Error(
									`cannot decode message ${k.typeName} from JSON: ${s(L)}`,
								);
							M = M ?? new k();
							const N = new Map(),
								A = D.typeRegistry;
							for (const [R, O] of Object.entries(L)) {
								const B = k.fields.findJsonName(R);
								if (B) {
									if (B.oneof) {
										if (O === null && B.kind == "scalar") continue;
										const U = N.get(B.oneof);
										if (U !== void 0)
											throw new Error(
												`cannot decode message ${k.typeName} from JSON: multiple keys for oneof "${B.oneof.name}" present: "${U}", "${R}"`,
											);
										N.set(B.oneof, R);
									}
									l(M, O, B, D, k);
								} else {
									let U = !1;
									if (
										A?.findExtension &&
										R.startsWith("[") &&
										R.endsWith("]")
									) {
										const z = A.findExtension(R.substring(1, R.length - 1));
										if (z && z.extendee.typeName == k.typeName) {
											U = !0;
											const [F, x] = (0, E.createExtensionContainer)(z);
											l(F, O, z.field, D, z), (0, C.setExtension)(M, z, x(), D);
										}
									}
									if (!U && !D.ignoreUnknownFields)
										throw new Error(
											`cannot decode message ${k.typeName} from JSON: key "${R}" is unknown`,
										);
								}
							}
							return M;
						},
						writeMessage(k, L) {
							const D = k.getType(),
								M = {};
							let N;
							try {
								for (N of D.fields.byNumber()) {
									if (!(0, d.isFieldSet)(N, k)) {
										if (N.req) throw "required field not set";
										if (!L.emitDefaultValues || !S(N)) continue;
									}
									const R = N.oneof
											? k[N.oneof.localName].value
											: k[N.localName],
										O = I(N, R, L);
									O !== void 0 &&
										(M[L.useProtoFieldName ? N.name : N.jsonName] = O);
								}
								const A = L.typeRegistry;
								if (A?.findExtensionFor)
									for (const R of D.runtime.bin.listUnknownFields(k)) {
										const O = A.findExtensionFor(D.typeName, R.no);
										if (O && (0, C.hasExtension)(k, O)) {
											const B = (0, C.getExtension)(k, O, L),
												U = I(O.field, B, L);
											U !== void 0 && (M[O.field.jsonName] = U);
										}
									}
							} catch (A) {
								const R = N
										? `cannot encode field ${D.typeName}.${N.name} to JSON`
										: `cannot encode message ${D.typeName} to JSON`,
									O = A instanceof Error ? A.message : String(A);
								throw new Error(R + (O.length > 0 ? `: ${O}` : ""));
							}
							return M;
						},
						readScalar(k, L, D) {
							return $(k, L, D ?? a.LongType.BIGINT, !0);
						},
						writeScalar(k, L, D) {
							if (L !== void 0 && (D || (0, u.isScalarZeroValue)(k, L)))
								return P(k, L);
						},
						debug: s,
					};
				}
				function s(k) {
					if (k === null) return "null";
					switch (typeof k) {
						case "object":
							return Array.isArray(k) ? "array" : "object";
						case "string":
							return k.length > 100
								? "string"
								: `"${k.split('"').join('\\"')}"`;
						default:
							return String(k);
					}
				}
				function l(k, L, D, M, N) {
					let A = D.localName;
					if (D.repeated) {
						if (((0, t.assert)(D.kind != "map"), L === null)) return;
						if (!Array.isArray(L))
							throw new Error(
								`cannot decode field ${N.typeName}.${D.name} from JSON: ${s(L)}`,
							);
						const R = k[A];
						for (const O of L) {
							if (O === null)
								throw new Error(
									`cannot decode field ${N.typeName}.${D.name} from JSON: ${s(O)}`,
								);
							switch (D.kind) {
								case "message":
									R.push(D.T.fromJson(O, M));
									break;
								case "enum":
									const B = v(D.T, O, M.ignoreUnknownFields, !0);
									B !== f && R.push(B);
									break;
								case "scalar":
									try {
										R.push($(D.T, O, D.L, !0));
									} catch (U) {
										let z = `cannot decode field ${N.typeName}.${D.name} from JSON: ${s(O)}`;
										throw (
											(U instanceof Error &&
												U.message.length > 0 &&
												(z += `: ${U.message}`),
											new Error(z))
										);
									}
									break;
							}
						}
					} else if (D.kind == "map") {
						if (L === null) return;
						if (typeof L != "object" || Array.isArray(L))
							throw new Error(
								`cannot decode field ${N.typeName}.${D.name} from JSON: ${s(L)}`,
							);
						const R = k[A];
						for (const [O, B] of Object.entries(L)) {
							if (B === null)
								throw new Error(
									`cannot decode field ${N.typeName}.${D.name} from JSON: map value null`,
								);
							let U;
							try {
								U = y(D.K, O);
							} catch (z) {
								let F = `cannot decode map key for field ${N.typeName}.${D.name} from JSON: ${s(L)}`;
								throw (
									(z instanceof Error &&
										z.message.length > 0 &&
										(F += `: ${z.message}`),
									new Error(F))
								);
							}
							switch (D.V.kind) {
								case "message":
									R[U] = D.V.T.fromJson(B, M);
									break;
								case "enum":
									const z = v(D.V.T, B, M.ignoreUnknownFields, !0);
									z !== f && (R[U] = z);
									break;
								case "scalar":
									try {
										R[U] = $(D.V.T, B, a.LongType.BIGINT, !0);
									} catch (F) {
										let x = `cannot decode map value for field ${N.typeName}.${D.name} from JSON: ${s(L)}`;
										throw (
											(F instanceof Error &&
												F.message.length > 0 &&
												(x += `: ${F.message}`),
											new Error(x))
										);
									}
									break;
							}
						}
					} else
						switch (
							(D.oneof &&
								((k = k[D.oneof.localName] = { case: A }), (A = "value")),
							D.kind)
						) {
							case "message":
								const R = D.T;
								if (L === null && R.typeName != "google.protobuf.Value") return;
								let O = k[A];
								(0, h.isMessage)(O)
									? O.fromJson(L, M)
									: ((k[A] = O = R.fromJson(L, M)),
										R.fieldWrapper &&
											!D.oneof &&
											(k[A] = R.fieldWrapper.unwrapField(O)));
								break;
							case "enum":
								const B = v(D.T, L, M.ignoreUnknownFields, !1);
								switch (B) {
									case o:
										(0, d.clearField)(D, k);
										break;
									case f:
										break;
									default:
										k[A] = B;
										break;
								}
								break;
							case "scalar":
								try {
									const U = $(D.T, L, D.L, !1);
									switch (U) {
										case o:
											(0, d.clearField)(D, k);
											break;
										default:
											k[A] = U;
											break;
									}
								} catch (U) {
									let z = `cannot decode field ${N.typeName}.${D.name} from JSON: ${s(L)}`;
									throw (
										(U instanceof Error &&
											U.message.length > 0 &&
											(z += `: ${U.message}`),
										new Error(z))
									);
								}
								break;
						}
				}
				function y(k, L) {
					if (k === a.ScalarType.BOOL)
						switch (L) {
							case "true":
								L = !0;
								break;
							case "false":
								L = !1;
								break;
						}
					return $(k, L, a.LongType.BIGINT, !0).toString();
				}
				function $(k, L, D, M) {
					if (L === null) return M ? (0, r.scalarZeroValue)(k, D) : o;
					switch (k) {
						case a.ScalarType.DOUBLE:
						case a.ScalarType.FLOAT:
							if (L === "NaN") return Number.NaN;
							if (L === "Infinity") return Number.POSITIVE_INFINITY;
							if (L === "-Infinity") return Number.NEGATIVE_INFINITY;
							if (
								L === "" ||
								(typeof L == "string" && L.trim().length !== L.length) ||
								(typeof L != "string" && typeof L != "number")
							)
								break;
							const N = Number(L);
							if (Number.isNaN(N) || !Number.isFinite(N)) break;
							return k == a.ScalarType.FLOAT && (0, t.assertFloat32)(N), N;
						case a.ScalarType.INT32:
						case a.ScalarType.FIXED32:
						case a.ScalarType.SFIXED32:
						case a.ScalarType.SINT32:
						case a.ScalarType.UINT32:
							let A;
							if (
								(typeof L == "number"
									? (A = L)
									: typeof L == "string" &&
										L.length > 0 &&
										L.trim().length === L.length &&
										(A = Number(L)),
								A === void 0)
							)
								break;
							return (
								k == a.ScalarType.UINT32 || k == a.ScalarType.FIXED32
									? (0, t.assertUInt32)(A)
									: (0, t.assertInt32)(A),
								A
							);
						case a.ScalarType.INT64:
						case a.ScalarType.SFIXED64:
						case a.ScalarType.SINT64:
							if (typeof L != "number" && typeof L != "string") break;
							const R = i.protoInt64.parse(L);
							return D ? R.toString() : R;
						case a.ScalarType.FIXED64:
						case a.ScalarType.UINT64:
							if (typeof L != "number" && typeof L != "string") break;
							const O = i.protoInt64.uParse(L);
							return D ? O.toString() : O;
						case a.ScalarType.BOOL:
							if (typeof L != "boolean") break;
							return L;
						case a.ScalarType.STRING:
							if (typeof L != "string") break;
							try {
								encodeURIComponent(L);
							} catch {
								throw new Error("invalid UTF8");
							}
							return L;
						case a.ScalarType.BYTES:
							if (L === "") return new Uint8Array(0);
							if (typeof L != "string") break;
							return w.protoBase64.dec(L);
					}
					throw new Error();
				}
				function v(k, L, D, M) {
					if (L === null)
						return k.typeName == "google.protobuf.NullValue"
							? 0
							: M
								? k.values[0].no
								: o;
					switch (typeof L) {
						case "number":
							if (Number.isInteger(L)) return L;
							break;
						case "string":
							const N = k.findName(L);
							if (N !== void 0) return N.no;
							if (D) return f;
							break;
					}
					throw new Error(
						`cannot decode enum ${k.typeName} from JSON: ${s(L)}`,
					);
				}
				function S(k) {
					return k.repeated || k.kind == "map"
						? !0
						: !(k.oneof || k.kind == "message" || k.opt || k.req);
				}
				function I(k, L, D) {
					if (k.kind == "map") {
						(0, t.assert)(typeof L == "object" && L != null);
						const M = {},
							N = Object.entries(L);
						switch (k.V.kind) {
							case "scalar":
								for (const [R, O] of N) M[R.toString()] = P(k.V.T, O);
								break;
							case "message":
								for (const [R, O] of N) M[R.toString()] = O.toJson(D);
								break;
							case "enum":
								const A = k.V.T;
								for (const [R, O] of N)
									M[R.toString()] = T(A, O, D.enumAsInteger);
								break;
						}
						return D.emitDefaultValues || N.length > 0 ? M : void 0;
					}
					if (k.repeated) {
						(0, t.assert)(Array.isArray(L));
						const M = [];
						switch (k.kind) {
							case "scalar":
								for (let N = 0; N < L.length; N++) M.push(P(k.T, L[N]));
								break;
							case "enum":
								for (let N = 0; N < L.length; N++)
									M.push(T(k.T, L[N], D.enumAsInteger));
								break;
							case "message":
								for (let N = 0; N < L.length; N++) M.push(L[N].toJson(D));
								break;
						}
						return D.emitDefaultValues || M.length > 0 ? M : void 0;
					}
					switch (k.kind) {
						case "scalar":
							return P(k.T, L);
						case "enum":
							return T(k.T, L, D.enumAsInteger);
						case "message":
							return (0, m.wrapField)(k.T, L).toJson(D);
					}
				}
				function T(k, L, D) {
					return (
						(0, t.assert)(typeof L == "number"),
						k.typeName == "google.protobuf.NullValue"
							? null
							: D
								? L
								: (k.findNumber(L)?.name ?? L)
					);
				}
				function P(k, L) {
					switch (k) {
						case a.ScalarType.INT32:
						case a.ScalarType.SFIXED32:
						case a.ScalarType.SINT32:
						case a.ScalarType.FIXED32:
						case a.ScalarType.UINT32:
							return (0, t.assert)(typeof L == "number"), L;
						case a.ScalarType.FLOAT:
						case a.ScalarType.DOUBLE:
							return (
								(0, t.assert)(typeof L == "number"),
								Number.isNaN(L)
									? "NaN"
									: L === Number.POSITIVE_INFINITY
										? "Infinity"
										: L === Number.NEGATIVE_INFINITY
											? "-Infinity"
											: L
							);
						case a.ScalarType.STRING:
							return (0, t.assert)(typeof L == "string"), L;
						case a.ScalarType.BOOL:
							return (0, t.assert)(typeof L == "boolean"), L;
						case a.ScalarType.UINT64:
						case a.ScalarType.FIXED64:
						case a.ScalarType.INT64:
						case a.ScalarType.SFIXED64:
						case a.ScalarType.SINT64:
							return (
								(0, t.assert)(
									typeof L == "bigint" ||
										typeof L == "string" ||
										typeof L == "number",
								),
								L.toString()
							);
						case a.ScalarType.BYTES:
							return (
								(0, t.assert)(L instanceof Uint8Array), w.protoBase64.enc(L)
							);
					}
				}
			},
		)
