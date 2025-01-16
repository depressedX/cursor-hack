define(
			de[2041],
			he([
				1, 0, 451, 406, 874, 723, 1405, 1401, 875, 1402, 1403, 1404, 1083, 1407,
				724, 1409, 524,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createRegistryFromDescriptors = b);
				const o = [
						m.Any,
						d.Duration,
						r.Empty,
						u.FieldMask,
						a.Struct,
						a.Value,
						a.ListValue,
						C.Timestamp,
						d.Duration,
						c.DoubleValue,
						c.FloatValue,
						c.Int64Value,
						c.Int32Value,
						c.UInt32Value,
						c.UInt64Value,
						c.BoolValue,
						c.StringValue,
						c.BytesValue,
					],
					f = [(0, h.getEnumType)(a.NullValue)];
				function b(y, $ = !0) {
					const v =
							y instanceof Uint8Array ||
							(0, p.isMessage)(y, n.FileDescriptorSet)
								? (0, g.createDescriptorSet)(y)
								: y,
						S = new Map(),
						I = new Map(),
						T = new Map(),
						P = new Map(),
						k = {};
					if ($) {
						for (const L of o) I.set(L.typeName, L);
						for (const L of f) S.set(L.typeName, L);
					}
					return {
						findEnum(L) {
							const D = S.get(L);
							if (D) return D;
							const M = v.enums.get(L);
							if (!M) return;
							const A = (
								M.file.syntax == "proto3" ? i.proto3 : w.proto2
							).makeEnumType(
								L,
								M.values.map((R) => ({
									no: R.number,
									name: R.name,
									localName: (0, E.localName)(R),
								})),
								{},
							);
							return S.set(L, A), A;
						},
						findMessage(L) {
							const D = I.get(L);
							if (D) return D;
							const M = v.messages.get(L);
							if (!M) return;
							const N = M.file.syntax == "proto3" ? i.proto3 : w.proto2,
								A = [],
								R = N.makeMessageType(L, () => A, {
									localName: (0, E.localName)(M),
								});
							I.set(L, R);
							for (const O of M.fields) A.push(s(O, this));
							return R;
						},
						findService(L) {
							const D = k[L];
							if (D) return D;
							const M = v.services.get(L);
							if (!M) return;
							const N = {};
							for (const A of M.methods) {
								const R = l(A.input, this, A),
									O = l(A.output, this, A);
								N[(0, E.localName)(A)] = {
									name: A.name,
									I: R,
									O,
									kind: A.methodKind,
									idempotency: A.idempotency,
								};
							}
							return (k[L] = { typeName: M.typeName, methods: N });
						},
						findExtensionFor(L, D) {
							if (!v.messages.has(L)) return;
							let M = P.get(L);
							if (!M) {
								(M = new Map()), P.set(L, M);
								for (const A of v.extensions.values())
									A.extendee.typeName == L && M.set(A.number, A);
							}
							const N = P.get(L)?.get(D);
							return N ? this.findExtension(N.typeName) : void 0;
						},
						findExtension(L) {
							const D = T.get(L);
							if (D) return D;
							const M = v.extensions.get(L);
							if (!M) return;
							const N = l(M.extendee, this, M),
								R = (
									M.file.syntax == "proto3" ? i.proto3 : w.proto2
								).makeExtension(L, N, s(M, this));
							return T.set(L, R), R;
						},
					};
				}
				function s(y, $) {
					const v = {
						kind: y.fieldKind,
						no: y.number,
						name: y.name,
						jsonName: y.jsonName,
						delimited: y.proto.type == n.FieldDescriptorProto_Type.GROUP,
						repeated: y.repeated,
						packed: y.packed,
						oneof: y.oneof?.name,
						opt: y.optional,
						req: y.proto.label === n.FieldDescriptorProto_Label.REQUIRED,
					};
					switch (y.fieldKind) {
						case "map": {
							(0, t.assert)(y.kind == "field");
							let S;
							switch (y.mapValue.kind) {
								case "scalar":
									S = y.mapValue.scalar;
									break;
								case "enum": {
									S = l(y.mapValue.enum, $, y);
									break;
								}
								case "message": {
									S = l(y.mapValue.message, $, y);
									break;
								}
							}
							(v.K = y.mapKey), (v.V = { kind: y.mapValue.kind, T: S });
							break;
						}
						case "message": {
							v.T = l(y.message, $, y);
							break;
						}
						case "enum": {
							(v.T = l(y.enum, $, y)), (v.default = y.getDefaultValue());
							break;
						}
						case "scalar": {
							(v.L = y.longType),
								(v.T = y.scalar),
								(v.default = y.getDefaultValue());
							break;
						}
					}
					return v;
				}
				function l(y, $, v) {
					const S =
						y.kind == "message"
							? $.findMessage(y.typeName)
							: $.findEnum(y.typeName);
					return (
						(0, t.assert)(S, `${y.toString()}" for ${v.toString()} not found`),
						S
					);
				}
			},
		),
		