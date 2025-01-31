import '../../../require.js';
import '../../../exports.js';
define(de[2217], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dk = t);
			function t(E) {
				let C = !1;
				const d = new Map(),
					m = new Map();
				if (
					(w(E, (g) => {
						if (E === g) return !0;
						const p = JSON.stringify(g);
						if (p.length < 30) return !0;
						const o = d.get(p);
						if (!o) {
							const f = { schemas: [g] };
							return d.set(p, f), m.set(g, f), !0;
						}
						return o.schemas.push(g), m.set(g, o), (C = !0), !1;
					}),
					d.clear(),
					!C)
				)
					return JSON.stringify(E);
				let u = "$defs";
				for (; E.hasOwnProperty(u); ) u += "_";
				const a = [];
				function h(g) {
					return JSON.stringify(g, (p, o) => {
						if (o !== g) {
							const f = m.get(o);
							if (f && f.schemas.length > 1)
								return (
									f.id || ((f.id = `_${a.length}`), a.push(f.schemas[0])),
									{ $ref: `#/${u}/${f.id}` }
								);
						}
						return o;
					});
				}
				const c = h(E),
					n = [];
				for (let g = 0; g < a.length; g++) n.push(`"_${g}":${h(a[g])}`);
				return n.length
					? `${c.substring(0, c.length - 1)},"${u}":{${n.join(",")}}}`
					: c;
			}
			function i(E) {
				return typeof E == "object" && E !== null;
			}
			function w(E, C) {
				if (!E || typeof E != "object") return;
				const d = (...c) => {
						for (const n of c) i(n) && a.push(n);
					},
					m = (...c) => {
						for (const n of c)
							if (i(n))
								for (const g in n) {
									const p = n[g];
									i(p) && a.push(p);
								}
					},
					r = (...c) => {
						for (const n of c)
							if (Array.isArray(n)) for (const g of n) i(g) && a.push(g);
					},
					u = (c) => {
						if (Array.isArray(c)) for (const n of c) i(n) && a.push(n);
						else i(c) && a.push(c);
					},
					a = [E];
				let h = a.pop();
				for (; h; )
					C(h) &&
						(d(
							h.additionalItems,
							h.additionalProperties,
							h.not,
							h.contains,
							h.propertyNames,
							h.if,
							h.then,
							h.else,
							h.unevaluatedItems,
							h.unevaluatedProperties,
						),
						m(
							h.definitions,
							h.$defs,
							h.properties,
							h.patternProperties,
							h.dependencies,
							h.dependentSchemas,
						),
						r(h.anyOf, h.allOf, h.oneOf, h.prefixItems),
						u(h.items)),
						(h = a.pop());
			}
		}),
		(function () {
			function ce() {
				const e =
					/("[^"\\]*(?:\\.[^"\\]*)*")|('[^'\\]*(?:\\.[^'\\]*)*')|(\/\*[^\/\*]*(?:(?:\*|\/)[^\/\*]*)*?\*\/)|(\/{2,}.*?(?:(?:\r?\n)|$))|(,\s*[}\]])/g;
				function t(w) {
					return w.replace(e, function (E, C, d, m, r, u) {
						if (m) return "";
						if (r) {
							const a = r.length;
							return r[a - 1] ===
								`
`
								? r[a - 2] === "\r"
									? `\r
`
									: `
`
								: "";
						} else return u ? E.substring(1) : E;
					});
				}
				function i(w) {
					const E = t(w);
					try {
						return JSON.parse(E);
					} catch {
						const d = E.replace(/,\s*([}\]])/g, "$1");
						return JSON.parse(d);
					}
				}
				return { stripComments: t, parse: i };
			}
			typeof define == "function"
				? define("vs/base/common/jsonc", [], function () {
						return ce();
					})
				: typeof module == "object" && typeof module.exports == "object"
					? (module.exports = ce())
					: console.trace(
							"jsonc defined in UNKNOWN context (neither requirejs or commonjs)",
						);
		})()
