define(de[648], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gd = void 0),
				(e.$hd = E),
				(e.$id = h);
			class t {
				constructor(n, g, p) {
					(this.owner = n), (this.debugNameSource = g), (this.referenceFn = p);
				}
				getDebugName(n) {
					return E(n, this);
				}
			}
			e.$gd = t;
			const i = new Map(),
				w = new WeakMap();
			function E(c, n) {
				const g = w.get(c);
				if (g) return g;
				const p = C(c, n);
				if (p) {
					let o = i.get(p) ?? 0;
					o++, i.set(p, o);
					const f = o === 1 ? p : `${p}#${o}`;
					return w.set(c, f), f;
				}
			}
			function C(c, n) {
				const g = w.get(c);
				if (g) return g;
				const p = n.owner ? u(n.owner) + "." : "";
				let o;
				const f = n.debugNameSource;
				if (f !== void 0)
					if (typeof f == "function") {
						if (((o = f()), o !== void 0)) return p + o;
					} else return p + f;
				const b = n.referenceFn;
				if (b !== void 0 && ((o = h(b)), o !== void 0)) return p + o;
				if (n.owner !== void 0) {
					const s = d(n.owner, c);
					if (s !== void 0) return p + s;
				}
			}
			function d(c, n) {
				for (const g in c) if (c[g] === n) return g;
			}
			const m = new Map(),
				r = new WeakMap();
			function u(c) {
				const n = r.get(c);
				if (n) return n;
				const g = a(c);
				let p = m.get(g) ?? 0;
				p++, m.set(g, p);
				const o = p === 1 ? g : `${g}#${p}`;
				return r.set(c, o), o;
			}
			function a(c) {
				const n = c.constructor;
				return n ? n.name : "Object";
			}
			function h(c) {
				const n = c.toString(),
					p = /\/\*\*\s*@description\s*([^*]*)\*\//.exec(n);
				return (p ? p[1] : void 0)?.trim();
			}
		}),
		