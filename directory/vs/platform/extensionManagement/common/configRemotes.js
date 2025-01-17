import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
define(de[1597], he([1, 0, 9]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$g1c = void 0),
				(e.$h1c = a),
				(e.$i1c = g);
			const i = /^([^@:]+@)?([^:]+):/,
				w = /^([^@:]+@)?([^:]+):(.+)$/,
				E = /^([^@]+@)?([^:]+)(:\d+)?$/,
				C = /([^@:.]+\.[^@:.]+)(:\d+)?$/,
				d = /^\s*url\s*=\s*(.+\S)\s*$/gm,
				m = /[^.]/g;
			e.$g1c = [
				"github.com",
				"bitbucket.org",
				"visualstudio.com",
				"gitlab.com",
				"heroku.com",
				"azurewebsites.net",
				"ibm.com",
				"amazon.com",
				"amazonaws.com",
				"cloudapp.net",
				"rhcloud.com",
				"google.com",
				"azure.com",
			];
			function r(p) {
				const o = p.match(C);
				return o ? o[1] : null;
			}
			function u(p) {
				if (p.indexOf("://") === -1) {
					const o = p.match(i);
					return o ? r(o[2]) : null;
				}
				try {
					const o = t.URI.parse(p);
					if (o.authority) return r(o.authority);
				} catch {}
				return null;
			}
			function a(p, o) {
				const f = new Set();
				let b;
				for (; (b = d.exec(p)); ) {
					const l = u(b[1]);
					l && f.add(l);
				}
				const s = new Set(o);
				return Array.from(f).map((l) => (s.has(l) ? l : l.replace(m, "a")));
			}
			function h(p) {
				const o = p.match(E);
				return o ? o[2] : null;
			}
			function c(p, o, f) {
				return p && o
					? (f && o.endsWith(".git") && (o = o.substr(0, o.length - 4)),
						o.indexOf("/") === 0 ? `${p}${o}` : `${p}/${o}`)
					: null;
			}
			function n(p, o) {
				if (p.indexOf("://") === -1) {
					const f = p.match(w);
					if (f) return c(f[2], f[3], o);
				}
				try {
					const f = t.URI.parse(p);
					if (f.authority) return c(h(f.authority), f.path, o);
				} catch {}
				return null;
			}
			function g(p, o = !1) {
				const f = [];
				let b;
				for (; (b = d.exec(p)); ) {
					const s = n(b[1], o);
					s && f.push(s);
				}
				return f;
			}
		}),
		