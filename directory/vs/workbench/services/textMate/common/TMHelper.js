import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1878], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$PXc = void 0),
				(e.$OXc = t);
			function t(E, C, d = !0) {
				for (let m = C.length - 1; m >= 0; m--) {
					const r = C.slice(0, m),
						u = C[m],
						a = i(E, u, r, d);
					if (a) return a;
				}
				return null;
			}
			function i(E, C, d, m) {
				let r = null;
				for (let u = E.tokenColors.length - 1; u >= 0; u--) {
					const a = E.tokenColors[u];
					if (m && !a.settings.foreground) continue;
					let h;
					if (typeof a.scope == "string")
						h = a.scope.split(/,/).map((c) => c.trim());
					else if (Array.isArray(a.scope)) h = a.scope;
					else continue;
					for (let c = 0, n = h.length; c < n; c++) {
						const g = h[c],
							p = new w(g, a.settings);
						p.matches(C, d) && p.isMoreSpecific(r) && (r = p);
					}
				}
				return r;
			}
			class w {
				constructor(C, d) {
					(this.rawSelector = C), (this.settings = d);
					const m = this.rawSelector.split(/ /);
					(this.scope = m[m.length - 1]),
						(this.parentScopes = m.slice(0, m.length - 1));
				}
				matches(C, d) {
					return w.e(this.scope, this.parentScopes, C, d);
				}
				static c(C, d) {
					if (C === null && d === null) return 0;
					if (C === null) return -1;
					if (d === null) return 1;
					if (C.scope.length !== d.scope.length)
						return C.scope.length - d.scope.length;
					const m = C.parentScopes.length,
						r = d.parentScopes.length;
					if (m !== r) return m - r;
					for (let u = 0; u < m; u++) {
						const a = C.parentScopes[u].length,
							h = d.parentScopes[u].length;
						if (a !== h) return a - h;
					}
					return 0;
				}
				isMoreSpecific(C) {
					return w.c(this, C) > 0;
				}
				static d(C, d) {
					const m = C + ".";
					return C === d || d.substring(0, m.length) === m;
				}
				static e(C, d, m, r) {
					if (!this.d(C, m)) return !1;
					let u = d.length - 1,
						a = r.length - 1;
					for (; u >= 0 && a >= 0; ) this.d(d[u], r[a]) && u--, a--;
					return u === -1;
				}
			}
			e.$PXc = w;
		})
