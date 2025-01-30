import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3062], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$HWb = e.$GWb = e.$FWb = void 0);
			class t {
				constructor(r) {
					this.b = new i();
					for (const [u, a] of r) for (const h of a) this.b.add(u, h);
				}
				toString() {
					return this.b.toString();
				}
				c(r, u) {
					const a = r.lastIndexOf(".");
					return a < 1
						? { dirname: u, basename: r, extname: "" }
						: {
								dirname: u,
								basename: r.substring(0, a),
								extname: r.substring(a + 1),
							};
				}
				nest(r, u) {
					const a = new i();
					for (const n of r) {
						const g = this.c(n, u),
							p = this.b.get(n, g);
						for (const o of p) a.add(o, n);
					}
					const h = (n, g = new Set()) => {
							if (g.has(n)) return [];
							g.add(n);
							const p = this.c(n, u),
								o = a.get(n, p);
							return o.length === 0
								? [n]
								: o.length === 1 && o[0] === n
									? [n]
									: o.flatMap((f) => h(f, g));
						},
						c = new Map();
					for (const n of r) {
						let g = h(n);
						g.length === 0 && (g = [n]);
						for (const p of g) {
							let o = c.get(p);
							o || c.set(p, (o = new Set())), n !== p && o.add(n);
						}
					}
					return c;
				}
			}
			e.$FWb = t;
			class i {
				constructor() {
					(this.b = new w()), (this.c = new Map());
				}
				add(r, u) {
					if (r === "") this.b.add(r, u);
					else if (r[0] === "*") this.b.add(r, u);
					else {
						const a = r[0],
							h = r.slice(1);
						let c = this.c.get(a);
						c || this.c.set(a, (c = new i())), c.add(h, u);
					}
				}
				get(r, u) {
					const a = [];
					a.push(...this.b.get(r, u));
					const h = r[0],
						c = r.slice(1),
						n = this.c.get(h);
					return n && a.push(...n.get(c, u)), a;
				}
				toString(r = "") {
					const u = [];
					return (
						this.b.hasItems &&
							u.push(
								`* => 
` + this.b.toString(r + "  "),
							),
						[...this.c.entries()].map(([a, h]) =>
							u.push(
								"^" +
									a +
									` => 
` +
									h.toString(r + "  "),
							),
						),
						u
							.map((a) => r + a)
							.join(`
`)
					);
				}
			}
			e.$GWb = i;
			class w {
				constructor() {
					(this.b = []),
						(this.c = []),
						(this.d = new Map()),
						(this.hasItems = !1);
				}
				add(r, u) {
					if (((this.hasItems = !0), r === "*")) this.b.push(new d(u));
					else if (r === "") this.c.push(new d(u));
					else {
						const a = r[r.length - 1],
							h = r.slice(0, r.length - 1);
						if (a === "*") throw Error("Unexpected star in SufTrie key: " + r);
						{
							let c = this.d.get(a);
							c || this.d.set(a, (c = new w())), c.add(h, u);
						}
					}
				}
				get(r, u) {
					const a = [];
					r === "" && a.push(...this.c.map((g) => g.substitute(u))),
						this.b.length && a.push(...this.b.map((g) => g.substitute(u, r)));
					const h = r[r.length - 1],
						c = r.slice(0, r.length - 1),
						n = this.d.get(h);
					return n && a.push(...n.get(c, u)), a;
				}
				toString(r = "") {
					const u = [];
					return (
						this.b.length && u.push("* => " + this.b.join("; ")),
						this.c.length && u.push("\u03B5 => " + this.c.join("; ")),
						[...this.d.entries()].map(([a, h]) =>
							u.push(
								a +
									`$ => 
` +
									h.toString(r + "  "),
							),
						),
						u
							.map((a) => r + a)
							.join(`
`)
					);
				}
			}
			e.$HWb = w;
			var E;
			(function (m) {
				(m.capture = "capture"),
					(m.basename = "basename"),
					(m.dirname = "dirname"),
					(m.extname = "extname");
			})(E || (E = {}));
			const C = /\$[({](capture|basename|dirname|extname)[)}]/g;
			class d {
				constructor(r) {
					(this.b = []), (C.lastIndex = 0);
					let u,
						a = 0;
					for (; (u = C.exec(r)); ) {
						const h = r.slice(a, u.index);
						this.b.push(h);
						const c = u[1];
						switch (c) {
							case E.basename:
							case E.dirname:
							case E.extname:
							case E.capture:
								this.b.push({ capture: c });
								break;
							default:
								throw Error("unknown substitution type: " + c);
						}
						a = u.index + u[0].length;
					}
					if (a !== r.length) {
						const h = r.slice(a, r.length);
						this.b.push(h);
					}
				}
				substitute(r, u) {
					return this.b
						.map((a) => {
							if (typeof a == "string") return a;
							switch (a.capture) {
								case E.basename:
									return r.basename;
								case E.dirname:
									return r.dirname;
								case E.extname:
									return r.extname;
								case E.capture:
									return u || "";
							}
						})
						.join("");
				}
			}
		}),
		