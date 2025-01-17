import '../../../../require.js';
import '../../../../exports.js';
import './scalars.js';
define(de[1087], he([1, 0, 526]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.makeExtension = i),
				(e.createExtensionContainer = w),
				(e.filterUnknownFields = C);
			function i(d, m, r, u) {
				let a;
				return {
					typeName: m,
					extendee: r,
					get field() {
						if (!a) {
							const h = typeof u == "function" ? u() : u;
							(h.name = m.split(".").pop()),
								(h.jsonName = `[${m}]`),
								(a = d.util.newFieldList([h]).list()[0]);
						}
						return a;
					},
					runtime: d,
				};
			}
			function w(d) {
				const m = d.field.localName,
					r = Object.create(null);
				return (r[m] = E(d)), [r, () => r[m]];
			}
			function E(d) {
				const m = d.field;
				if (m.repeated) return [];
				if (m.default !== void 0) return m.default;
				switch (m.kind) {
					case "enum":
						return m.T.values[0].no;
					case "scalar":
						return (0, t.scalarZeroValue)(m.T, m.L);
					case "message":
						const r = m.T,
							u = new r();
						return r.fieldWrapper ? r.fieldWrapper.unwrapField(u) : u;
					case "map":
						throw "map fields are not allowed to be extensions";
				}
			}
			function C(d, m) {
				if (!m.repeated && (m.kind == "enum" || m.kind == "scalar")) {
					for (let r = d.length - 1; r >= 0; --r)
						if (d[r].no == m.no) return [d[r]];
					return [];
				}
				return d.filter((r) => r.no === m.no);
			}
		}),
		