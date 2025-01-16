define(
			de[1089],
			he([1, 0, 86, 202, 213, 1387]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.errorFromJson = C),
					(e.errorFromJsonBytes = d),
					(e.errorToJson = m),
					(e.errorToJsonBytes = r);
				function C(u, a, h) {
					if (
						(a && new Headers(a).forEach((p, o) => h.metadata.append(o, p)),
						typeof u != "object" || u == null || Array.isArray(u))
					)
						throw h;
					let c = h.code;
					"code" in u &&
						typeof u.code == "string" &&
						(c = (0, E.codeFromString)(u.code) ?? c);
					const n = u.message;
					if (n != null && typeof n != "string") throw h;
					const g = new w.ConnectError(n ?? "", c, a);
					if ("details" in u && Array.isArray(u.details))
						for (const p of u.details) {
							if (
								p === null ||
								typeof p != "object" ||
								Array.isArray(p) ||
								typeof p.type != "string" ||
								typeof p.value != "string"
							)
								throw h;
							try {
								g.details.push({
									type: p.type,
									value: t.protoBase64.dec(p.value),
									debug: p.debug,
								});
							} catch {
								throw h;
							}
						}
					return g;
				}
				function d(u, a, h) {
					let c;
					try {
						c = JSON.parse(new TextDecoder().decode(u));
					} catch {
						throw h;
					}
					return C(c, a, h);
				}
				function m(u, a) {
					const h = { code: (0, E.codeToString)(u.code) };
					return (
						u.rawMessage.length > 0 && (h.message = u.rawMessage),
						u.details.length > 0 &&
							(h.details = u.details
								.map((c) => {
									if ("getType" in c) {
										const n = {
											type: c.getType().typeName,
											value: c.toBinary(),
										};
										try {
											n.debug = c.toJson(a);
										} catch {}
										return n;
									}
									return c;
								})
								.map(({ value: c, ...n }) => ({
									...n,
									value: t.protoBase64.enc(c).replace(/=+$/, ""),
								}))),
						h
					);
				}
				function r(u, a) {
					const h = new TextEncoder();
					try {
						const c = m(u, a),
							n = JSON.stringify(c);
						return h.encode(n);
					} catch (c) {
						const n = c instanceof Error ? c.message : String(c);
						throw new w.ConnectError(
							`failed to serialize Connect Error: ${n}`,
							i.Code.Internal,
						);
					}
				}
			},
		),
		