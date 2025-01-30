import '../../../require.js';
import '../../../exports.js';
import './uri.js';
define(de[1560], he([1, 0, 9]), function (ce /*require*/,
 e /*exports*/,
 t /*uri*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Fr = i),
				(e.$Gr = w),
				(e.$Hr = E),
				(e.log = d);
			function i(r) {
				const u = r;
				return u && typeof u.type == "string" && typeof u.severity == "string";
			}
			function w(r) {
				const u = [];
				let a;
				try {
					const h = JSON.parse(r.arguments),
						c = h[h.length - 1];
					c && c.__$stack && (h.pop(), (a = c.__$stack)), u.push(...h);
				} catch {
					u.push("Unable to log remote console arguments", r.arguments);
				}
				return { args: u, stack: a };
			}
			function E(r) {
				if (typeof r != "string") return E(w(r).stack);
				const u = r;
				if (u) {
					const a = C(u),
						h =
							/at [^\/]*((?:(?:[a-zA-Z]+:)|(?:[\/])|(?:\\\\))(?:.+)):(\d+):(\d+)/.exec(
								a || "",
							);
					if (h && h.length === 4)
						return {
							uri: t.URI.file(h[1]),
							line: Number(h[2]),
							column: Number(h[3]),
						};
				}
			}
			function C(r) {
				if (!r) return r;
				const u = r.indexOf(`
`);
				return u === -1 ? r : r.substring(0, u);
			}
			function d(r, u) {
				const { args: a, stack: h } = w(r),
					c = typeof a[0] == "string" && a.length === 1;
				let n = C(h);
				n && (n = `(${n.trim()})`);
				let g = [];
				if (
					(typeof a[0] == "string"
						? n && c
							? (g = [`%c[${u}] %c${a[0]} %c${n}`, m("blue"), m(""), m("grey")])
							: (g = [`%c[${u}] %c${a[0]}`, m("blue"), m(""), ...a.slice(1)])
						: (g = [`%c[${u}]%`, m("blue"), ...a]),
					n && !c && g.push(n),
					typeof console[r.severity] != "function")
				)
					throw new Error("Unknown console method");
				console[r.severity].apply(console, g);
			}
			function m(r) {
				return `color: ${r}`;
			}
		}),
		