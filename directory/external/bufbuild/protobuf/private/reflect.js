define(de[1399], he([1, 0, 526]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.isFieldSet = i),
				(e.clearField = w);
			function i(E, C) {
				const d = E.localName;
				if (E.repeated) return C[d].length > 0;
				if (E.oneof) return C[E.oneof.localName].case === d;
				switch (E.kind) {
					case "enum":
					case "scalar":
						return E.opt || E.req
							? C[d] !== void 0
							: E.kind == "enum"
								? C[d] !== E.T.values[0].no
								: !(0, t.isScalarZeroValue)(E.T, C[d]);
					case "message":
						return C[d] !== void 0;
					case "map":
						return Object.keys(C[d]).length > 0;
				}
			}
			function w(E, C) {
				const d = E.localName,
					m = !E.opt && !E.req;
				if (E.repeated) C[d] = [];
				else if (E.oneof) C[E.oneof.localName] = { case: void 0 };
				else
					switch (E.kind) {
						case "map":
							C[d] = {};
							break;
						case "enum":
							C[d] = m ? E.T.values[0].no : void 0;
							break;
						case "scalar":
							C[d] = m ? (0, t.scalarZeroValue)(E.T, E.L) : void 0;
							break;
						case "message":
							C[d] = void 0;
							break;
					}
			}
		}),
		define(
			de[2034],
			he([1, 0, 1085, 1086, 526, 451, 1399, 429, 524]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.makeBinaryFormat = n),
					(e.writeMapEntry = l);
				const r = Symbol("@bufbuild/protobuf/unknown-fields"),
					u = {
						readUnknownFields: !0,
						readerFactory: (I) => new t.BinaryReader(I),
					},
					a = {
						writeUnknownFields: !0,
						writerFactory: () => new t.BinaryWriter(),
					};
				function h(I) {
					return I ? { ...u, ...I } : u;
				}
				function c(I) {
					return I ? { ...a, ...I } : a;
				}
				function n() {
					return {
						makeReadOptions: h,
						makeWriteOptions: c,
						listUnknownFields(I) {
							return I[r] ?? [];
						},
						discardUnknownFields(I) {
							delete I[r];
						},
						writeUnknownFields(I, T) {
							const k = I[r];
							if (k) for (const L of k) T.tag(L.no, L.wireType).raw(L.data);
						},
						onUnknownField(I, T, P, k) {
							const L = I;
							Array.isArray(L[r]) || (L[r] = []),
								L[r].push({ no: T, wireType: P, data: k });
						},
						readMessage(I, T, P, k, L) {
							const D = I.getType(),
								M = L ? T.len : T.pos + P;
							let N, A;
							for (
								;
								T.pos < M &&
								(([N, A] = T.tag()), !(L === !0 && A == t.WireType.EndGroup));
							) {
								const R = D.fields.find(N);
								if (!R) {
									const O = T.skip(A, N);
									k.readUnknownFields && this.onUnknownField(I, N, A, O);
									continue;
								}
								g(I, T, R, A, k);
							}
							if (L && (A != t.WireType.EndGroup || N !== P))
								throw new Error("invalid end group tag");
						},
						readField: g,
						writeMessage(I, T, P) {
							const k = I.getType();
							for (const L of k.fields.byNumber()) {
								if (!(0, C.isFieldSet)(L, I)) {
									if (L.req)
										throw new Error(
											`cannot encode field ${k.typeName}.${L.name} to binary: required field not set`,
										);
									continue;
								}
								const D = L.oneof ? I[L.oneof.localName].value : I[L.localName];
								s(L, D, T, P);
							}
							return P.writeUnknownFields && this.writeUnknownFields(I, T), T;
						},
						writeField(I, T, P, k) {
							T !== void 0 && s(I, T, P, k);
						},
					};
				}
				function g(I, T, P, k, L) {
					let { repeated: D, localName: M } = P;
					switch (
						(P.oneof &&
							((I = I[P.oneof.localName]),
							I.case != M && delete I.value,
							(I.case = M),
							(M = "value")),
						P.kind)
					) {
						case "scalar":
						case "enum":
							const N = P.kind == "enum" ? d.ScalarType.INT32 : P.T;
							let A = b;
							if ((P.kind == "scalar" && P.L > 0 && (A = f), D)) {
								let U = I[M];
								if (
									k == t.WireType.LengthDelimited &&
									N != d.ScalarType.STRING &&
									N != d.ScalarType.BYTES
								) {
									let F = T.uint32() + T.pos;
									for (; T.pos < F; ) U.push(A(T, N));
								} else U.push(A(T, N));
							} else I[M] = A(T, N);
							break;
						case "message":
							const R = P.T;
							D
								? I[M].push(p(T, new R(), L, P))
								: (0, m.isMessage)(I[M])
									? p(T, I[M], L, P)
									: ((I[M] = p(T, new R(), L, P)),
										R.fieldWrapper &&
											!P.oneof &&
											!P.repeated &&
											(I[M] = R.fieldWrapper.unwrapField(I[M])));
							break;
						case "map":
							let [O, B] = o(P, T, L);
							I[M][O] = B;
							break;
					}
				}
				function p(I, T, P, k) {
					const L = T.getType().runtime.bin,
						D = k?.delimited;
					return L.readMessage(T, I, D ? k.no : I.uint32(), P, D), T;
				}
				function o(I, T, P) {
					const k = T.uint32(),
						L = T.pos + k;
					let D, M;
					for (; T.pos < L; ) {
						const [N] = T.tag();
						switch (N) {
							case 1:
								D = b(T, I.K);
								break;
							case 2:
								switch (I.V.kind) {
									case "scalar":
										M = b(T, I.V.T);
										break;
									case "enum":
										M = T.int32();
										break;
									case "message":
										M = p(T, new I.V.T(), P, void 0);
										break;
								}
								break;
						}
					}
					if (
						(D === void 0 &&
							(D = (0, w.scalarZeroValue)(I.K, d.LongType.BIGINT)),
						typeof D != "string" && typeof D != "number" && (D = D.toString()),
						M === void 0)
					)
						switch (I.V.kind) {
							case "scalar":
								M = (0, w.scalarZeroValue)(I.V.T, d.LongType.BIGINT);
								break;
							case "enum":
								M = I.V.T.values[0].no;
								break;
							case "message":
								M = new I.V.T();
								break;
						}
					return [D, M];
				}
				function f(I, T) {
					const P = b(I, T);
					return typeof P == "bigint" ? P.toString() : P;
				}
				function b(I, T) {
					switch (T) {
						case d.ScalarType.STRING:
							return I.string();
						case d.ScalarType.BOOL:
							return I.bool();
						case d.ScalarType.DOUBLE:
							return I.double();
						case d.ScalarType.FLOAT:
							return I.float();
						case d.ScalarType.INT32:
							return I.int32();
						case d.ScalarType.INT64:
							return I.int64();
						case d.ScalarType.UINT64:
							return I.uint64();
						case d.ScalarType.FIXED64:
							return I.fixed64();
						case d.ScalarType.BYTES:
							return I.bytes();
						case d.ScalarType.FIXED32:
							return I.fixed32();
						case d.ScalarType.SFIXED32:
							return I.sfixed32();
						case d.ScalarType.SFIXED64:
							return I.sfixed64();
						case d.ScalarType.SINT64:
							return I.sint64();
						case d.ScalarType.UINT32:
							return I.uint32();
						case d.ScalarType.SINT32:
							return I.sint32();
					}
				}
				function s(I, T, P, k) {
					(0, E.assert)(T !== void 0);
					const L = I.repeated;
					switch (I.kind) {
						case "scalar":
						case "enum":
							let D = I.kind == "enum" ? d.ScalarType.INT32 : I.T;
							if (L)
								if (((0, E.assert)(Array.isArray(T)), I.packed))
									v(P, D, I.no, T);
								else for (const M of T) $(P, D, I.no, M);
							else $(P, D, I.no, T);
							break;
						case "message":
							if (L) {
								(0, E.assert)(Array.isArray(T));
								for (const M of T) y(P, k, I, M);
							} else y(P, k, I, T);
							break;
						case "map":
							(0, E.assert)(typeof T == "object" && T != null);
							for (const [M, N] of Object.entries(T)) l(P, k, I, M, N);
							break;
					}
				}
				function l(I, T, P, k, L) {
					I.tag(P.no, t.WireType.LengthDelimited), I.fork();
					let D = k;
					switch (P.K) {
						case d.ScalarType.INT32:
						case d.ScalarType.FIXED32:
						case d.ScalarType.UINT32:
						case d.ScalarType.SFIXED32:
						case d.ScalarType.SINT32:
							D = Number.parseInt(k);
							break;
						case d.ScalarType.BOOL:
							(0, E.assert)(k == "true" || k == "false"), (D = k == "true");
							break;
					}
					switch (($(I, P.K, 1, D), P.V.kind)) {
						case "scalar":
							$(I, P.V.T, 2, L);
							break;
						case "enum":
							$(I, d.ScalarType.INT32, 2, L);
							break;
						case "message":
							(0, E.assert)(L !== void 0),
								I.tag(2, t.WireType.LengthDelimited).bytes(L.toBinary(T));
							break;
					}
					I.join();
				}
				function y(I, T, P, k) {
					const L = (0, i.wrapField)(P.T, k);
					P.delimited
						? I.tag(P.no, t.WireType.StartGroup)
								.raw(L.toBinary(T))
								.tag(P.no, t.WireType.EndGroup)
						: I.tag(P.no, t.WireType.LengthDelimited).bytes(L.toBinary(T));
				}
				function $(I, T, P, k) {
					(0, E.assert)(k !== void 0);
					let [L, D] = S(T);
					I.tag(P, L)[D](k);
				}
				function v(I, T, P, k) {
					if (!k.length) return;
					I.tag(P, t.WireType.LengthDelimited).fork();
					let [, L] = S(T);
					for (let D = 0; D < k.length; D++) I[L](k[D]);
					I.join();
				}
				function S(I) {
					let T = t.WireType.Varint;
					switch (I) {
						case d.ScalarType.BYTES:
						case d.ScalarType.STRING:
							T = t.WireType.LengthDelimited;
							break;
						case d.ScalarType.DOUBLE:
						case d.ScalarType.FIXED64:
						case d.ScalarType.SFIXED64:
							T = t.WireType.Bit64;
							break;
						case d.ScalarType.FIXED32:
						case d.ScalarType.SFIXED32:
						case d.ScalarType.FLOAT:
							T = t.WireType.Bit32;
							break;
					}
					const P = d.ScalarType[I].toLowerCase();
					return [T, P];
				}
			},
		),
		define(
			de[2035],
			he([1, 0, 451, 525, 1084, 1087, 1398, 1399, 1086, 526, 526, 429, 524]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
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
		),
		