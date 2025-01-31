import '../../../require.js';
import '../../../exports.js';
define(de[2027], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createRegistry = t);
			function t(...i) {
				const w = {},
					E = {},
					C = {},
					d = new Map(),
					m = new Map(),
					r = {
						findMessage(h) {
							return w[h];
						},
						findEnum(h) {
							return E[h];
						},
						findService(h) {
							return C[h];
						},
						findExtensionFor(h, c) {
							return m.get(h)?.get(c) ?? void 0;
						},
						findExtension(h) {
							return d.get(h) ?? void 0;
						},
					};
				function u(h) {
					if ("fields" in h)
						r.findMessage(h.typeName) ||
							((w[h.typeName] = h), h.fields.list().forEach(a));
					else if ("methods" in h) {
						if (!r.findService(h.typeName)) {
							C[h.typeName] = h;
							for (const c of Object.values(h.methods)) u(c.I), u(c.O);
						}
					} else if ("extendee" in h) {
						if (!d.has(h.typeName)) {
							d.set(h.typeName, h);
							const c = h.extendee.typeName;
							m.has(c) || m.set(c, new Map()),
								m.get(c)?.set(h.field.no, h),
								u(h.extendee),
								a(h.field);
						}
					} else E[h.typeName] = h;
				}
				function a(h) {
					h.kind == "message"
						? u(h.T)
						: h.kind == "map" && h.V.kind == "message"
							? u(h.V.T)
							: h.kind == "enum" && u(h.T);
				}
				for (const h of i) u(h);
				return r;
			}
		})
