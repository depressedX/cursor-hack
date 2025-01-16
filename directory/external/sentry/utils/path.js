define(de[2070], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.resolve = E),
				(e.relative = d),
				(e.normalizePath = m),
				(e.isAbsolute = r),
				(e.join = u),
				(e.dirname = a),
				(e.basename = h);
			function t(c, n) {
				let g = 0;
				for (let p = c.length - 1; p >= 0; p--) {
					const o = c[p];
					o === "."
						? c.splice(p, 1)
						: o === ".."
							? (c.splice(p, 1), g++)
							: g && (c.splice(p, 1), g--);
				}
				if (n) for (; g--; g) c.unshift("..");
				return c;
			}
			const i =
				/^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
			function w(c) {
				const n = c.length > 1024 ? `<truncated>${c.slice(-1024)}` : c,
					g = i.exec(n);
				return g ? g.slice(1) : [];
			}
			function E(...c) {
				let n = "",
					g = !1;
				for (let p = c.length - 1; p >= -1 && !g; p--) {
					const o = p >= 0 ? c[p] : "/";
					o && ((n = `${o}/${n}`), (g = o.charAt(0) === "/"));
				}
				return (
					(n = t(
						n.split("/").filter((p) => !!p),
						!g,
					).join("/")),
					(g ? "/" : "") + n || "."
				);
			}
			function C(c) {
				let n = 0;
				for (; n < c.length && c[n] === ""; n++);
				let g = c.length - 1;
				for (; g >= 0 && c[g] === ""; g--);
				return n > g ? [] : c.slice(n, g - n + 1);
			}
			function d(c, n) {
				(c = E(c).slice(1)), (n = E(n).slice(1));
				const g = C(c.split("/")),
					p = C(n.split("/")),
					o = Math.min(g.length, p.length);
				let f = o;
				for (let s = 0; s < o; s++)
					if (g[s] !== p[s]) {
						f = s;
						break;
					}
				let b = [];
				for (let s = f; s < g.length; s++) b.push("..");
				return (b = b.concat(p.slice(f))), b.join("/");
			}
			function m(c) {
				const n = r(c),
					g = c.slice(-1) === "/";
				let p = t(
					c.split("/").filter((o) => !!o),
					!n,
				).join("/");
				return !p && !n && (p = "."), p && g && (p += "/"), (n ? "/" : "") + p;
			}
			function r(c) {
				return c.charAt(0) === "/";
			}
			function u(...c) {
				return m(c.join("/"));
			}
			function a(c) {
				const n = w(c),
					g = n[0] || "";
				let p = n[1];
				return !g && !p ? "." : (p && (p = p.slice(0, p.length - 1)), g + p);
			}
			function h(c, n) {
				let g = w(c)[2] || "";
				return (
					n &&
						g.slice(n.length * -1) === n &&
						(g = g.slice(0, g.length - n.length)),
					g
				);
			}
		}),
		