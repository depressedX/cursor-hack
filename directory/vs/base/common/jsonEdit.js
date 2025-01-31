import '../../../require.js';
import '../../../exports.js';
import './json.js';
import './jsonFormatter.js';
define(de[586], he([1, 0, 187, 585]), function (ce /*require*/,
 e /*exports*/,
 t /*json*/,
 i /*jsonFormatter*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$qo = w),
				(e.$ro = E),
				(e.$so = C),
				(e.$to = d),
				(e.$uo = m);
			function w(r, u, a) {
				return E(r, u, void 0, a);
			}
			function E(r, u, a, h, c) {
				const n = u.slice(),
					g = [],
					p = (0, t.$eo)(r, g);
				let o, f;
				for (
					;
					n.length > 0 &&
					((f = n.pop()), (o = (0, t.$fo)(p, n)), o === void 0 && a !== void 0);
				)
					typeof f == "string" ? (a = { [f]: a }) : (a = [a]);
				if (o)
					if (
						o.type === "object" &&
						typeof f == "string" &&
						Array.isArray(o.children)
					) {
						const b = (0, t.$fo)(o, [f]);
						if (b !== void 0)
							if (a === void 0) {
								if (!b.parent) throw new Error("Malformed AST");
								const s = o.children.indexOf(b.parent);
								let l,
									y = b.parent.offset + b.parent.length;
								if (s > 0) {
									const $ = o.children[s - 1];
									l = $.offset + $.length;
								} else
									(l = o.offset + 1),
										o.children.length > 1 && (y = o.children[1].offset);
								return C(r, { offset: l, length: y - l, content: "" }, h);
							} else
								return C(
									r,
									{
										offset: b.offset,
										length: b.length,
										content: JSON.stringify(a),
									},
									h,
								);
						else {
							if (a === void 0) return [];
							const s = `${JSON.stringify(f)}: ${JSON.stringify(a)}`,
								l = c
									? c(o.children.map(($) => $.children[0].value))
									: o.children.length;
							let y;
							if (l > 0) {
								const $ = o.children[l - 1];
								y = {
									offset: $.offset + $.length,
									length: 0,
									content: "," + s,
								};
							} else
								o.children.length === 0
									? (y = { offset: o.offset + 1, length: 0, content: s })
									: (y = { offset: o.offset + 1, length: 0, content: s + "," });
							return C(r, y, h);
						}
					} else if (
						o.type === "array" &&
						typeof f == "number" &&
						Array.isArray(o.children)
					)
						if (a !== void 0) {
							const b = `${JSON.stringify(a)}`;
							let s;
							if (o.children.length === 0 || f === 0)
								s = {
									offset: o.offset + 1,
									length: 0,
									content: o.children.length === 0 ? b : b + ",",
								};
							else {
								const l =
										f === -1 || f > o.children.length ? o.children.length : f,
									y = o.children[l - 1];
								s = {
									offset: y.offset + y.length,
									length: 0,
									content: "," + b,
								};
							}
							return C(r, s, h);
						} else {
							const b = f,
								s = o.children[b];
							let l;
							if (o.children.length === 1)
								l = { offset: o.offset + 1, length: o.length - 2, content: "" };
							else if (o.children.length - 1 === b) {
								const y = o.children[b - 1],
									$ = y.offset + y.length,
									v = o.offset + o.length;
								l = { offset: $, length: v - 2 - $, content: "" };
							} else
								l = {
									offset: s.offset,
									length: o.children[b + 1].offset - s.offset,
									content: "",
								};
							return C(r, l, h);
						}
					else
						throw new Error(
							`Can not add ${typeof f != "number" ? "index" : "property"} to parent of type ${o.type}`,
						);
				else
					return a === void 0
						? []
						: C(
								r,
								{
									offset: p ? p.offset : 0,
									length: p ? p.length : 0,
									content: JSON.stringify(a),
								},
								h,
							);
			}
			function C(r, u, a) {
				let h = d(r, u),
					c = u.offset,
					n = u.offset + u.content.length;
				if (u.length === 0 || u.content.length === 0) {
					for (; c > 0 && !(0, i.$po)(h, c - 1); ) c--;
					for (; n < h.length && !(0, i.$po)(h, n); ) n++;
				}
				const g = (0, i.$mo)(h, { offset: c, length: n - c }, a);
				for (let o = g.length - 1; o >= 0; o--) {
					const f = g[o];
					(h = d(h, f)),
						(c = Math.min(c, f.offset)),
						(n = Math.max(n, f.offset + f.length)),
						(n += f.content.length - f.length);
				}
				const p = r.length - (h.length - n) - c;
				return [{ offset: c, length: p, content: h.substring(c, n) }];
			}
			function d(r, u) {
				return (
					r.substring(0, u.offset) +
					u.content +
					r.substring(u.offset + u.length)
				);
			}
			function m(r, u) {
				const a = u.slice(0).sort((c, n) => {
					const g = c.offset - n.offset;
					return g === 0 ? c.length - n.length : g;
				});
				let h = r.length;
				for (let c = a.length - 1; c >= 0; c--) {
					const n = a[c];
					if (n.offset + n.length <= h) r = d(r, n);
					else throw new Error("Overlapping edit");
					h = n.offset;
				}
				return r;
			}
		})
