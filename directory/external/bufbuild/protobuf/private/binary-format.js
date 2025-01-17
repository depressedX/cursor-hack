import '../../../../require.js';
import '../../../../exports.js';
import '../binary-encoding.js';
import './field-wrapper.js';
import './scalars.js';
import './assert.js';
import './reflect.js';
import '../scalar.js';
import '../is-message.js';
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
		